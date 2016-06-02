# OPTICAL-VIDEO-CODEC
    A video codec implementation based on principles of quantum computing
       
       
    OVERVIEW   
       
    Envisioning an 8K CODEC providing an 8K video resolution on Quantum Hardware   
       
       
    NOTATION   
       
    '^' indicates "raised to the power of", example 2^23   
       
    'b' indicates bits   
    'B' indicates bytes ( including error correcting bits, 10 bits = 1 B )   
       
    'M' indicates Mega- or 1 Million (10 Mb = 1 MB )   
    'G' indicates Giga- or 1 thousand Million or 1 Billion   
    'T' indicates Tera- or 1 thousand Billion or 1 Trillion   
    'P' indicates Peta- or 1 thousand Trillion or 1 Quintillion   
       
    's'   indicates second   
    'hr'  indicates hour   
    'min' indicates minute   
    'fps' indicates frames per second, the standard used in motion pictures   
       
       
    PIXELS   
       
    8K = 8 ( 1024 x 768 ) = 8 Million pixels per frame (8 M ppf)  
      
    Each pixel having a bit depth of 14 luma + 64 Red + 64 Green + 64 Blue = 206 bits per pixel (206 bpp)   
      
      
    FRAMES  
      
    8 M ppf x 206 bpp = 1.648 G bpf = 1648 M bpf or 164.8 M bytes per frame ( 164.8 MB pf )  
      
    30 fps x 60 s x 60 min x 8 hr max = 864000 frames  
      
      
    STORAGE  
      
    164.8 MB pf x 864000 frames = 142.39 PB  
      
    142.39 PB / 4 = 355.968 TB storage for a two ( 2 ) hour film  
      
      
    BITRATE  
      
    1.648 G bpf x 30 fps = 49.440 gigabits per second ( 49.440 gps )  
      
      
    BITMAP & ADDRESSING SCHEME  
      
    A-H represents two ( 2 ) 64-bit registers, concatenated  
      
    [ A + B + C + D + E + F + G + H ][ I ][ J ][ K ] = 320 bits  
      
    A : 23 b  : current pixel : 8 ( 1024 x 768 ) pixels = ~8 Million : 2^23  
    B : 20 b  : current frame : 864000 ( ~1 million ) : 2^20  
    C : 23 b  : pixel source   
    D : 23 b  : pixel destination 
    E : 23 b  : incidence graph : 1 per pixel  
    F : 14 b  : luma  
    G :  1 b  : storage  
    H :  1 b  : stall  
    I : 64 b  : Red   
    J : 64 b  : Green  
    K : 64 b  : Blue  
      
      
    FILE  
      
    00 00 01 A P N G xx xx - opening & closing 128 bits of file bytestream, the last remaining bytes indicates CODEC version  
      
    [ A ][ B ] = 72 bits  
      
    A.0 :  5 b : reserved  
    A.1 :  1 b : luma enabled  
    A.2 :  2 b : RGB color depth : 00 => 64-bits, 01 => 32-bits, 10 => 16-bits, 11 => 8-bits  
    B.0 : 44 b : reserved  
    B.1 : 20 b : frame count  
      
      
    ARCHITECTURE  
      
    Employ register-renaming for efficient swaps  
      
      
    JAVASCRIPT SOFTWARE CONSTRUCTS  
      
    var film_sequence = [  
      [...],  // pixel 0 series  
      [...],  // pixel 1 series  
      [...],  // pixel 2 series  
      .  
      .    
      [...],  // pixel 2^23 series  
      ] // film_sequence  
      
      
    INCIDENCE GRAPHS   
      
    Pixels are treated as 4-dimensional networks  This is accomplished through the use of incidence graphs  
    Incidence graphs determine the current state and present heading of the presiding pixel  
    Incidence graphs have separate entry and exitways for stable handshaking  
    Incidence graphs are required to have only 1 entrypoint (unicast), however they can rename and then cast color address data to multiple destinations (unicast|multicast|broadcast)  
      
      
      (read from pixel 1) => pixel 0 => (write to pixel 1,2,3,..etc.)  
        
      (read from pixel 0) => pixel 1 => (write to pixel 0,4,5,..etc.)  
        
      
      EXAMPLE
      
                FRAME 00               FRAME 01                 FRAME 02                FRAME 03
      =============|======================|========================|=======================|===== ..  
        
        (from p3) p0 (to p0)   (from p0) p0 (stall)     (from p1) p0 (stall)    (from p1) p0 (to p3)  
        (storage) p1 (to p1)   (from p1) p1 (to p0)     (storage) p1 (p0,p1,p3) (from p1) p1 (to p0)  
        (storage) p2 (to p3)   (from p3) p2 (to p3)     (from p3) p2 (stall)    (from p3) p2 (to p2)  
        (storage) p3 (to p2)   (from p2) p3 (to p2)     (from p2) p3 (to p2)    (from p1) p3 (to p1)  
        
      =========================================================================================== ..  
       
       
    Pixels can read from: (1) Pixel, (2) Storage  
    Pixels can write to: (1) Pixel(s), (2) Stall  
    Pixels cannot both write and stall  
       
     
    NOTES  
      
    Theoretical worst-case decode performance is observed during a 100% color range 100% pixel swap  
    Although luma pixels are present -- they are only used for 64-bit boundary alignment ( they are not usually processed )  
    Pixels along pixel-boundaries and their registers are default first color swap candidates, rather than core pixels within a   region  



