# OPTICAL-VIDEO-CODEC
    An video codec implementation based on principles of quantum computing
       
    Q-REGISTER => Quantum Energy-Well ( nano-scale split-ring resonators (SRRs) using photonic metamaterial


    TECHNIQUE CLASSIFICATION

    - Black-Hole Computing, Tensor Computing


    REGISTERS (INDIVIDUAL OPTICAL CHANNELS)

    - IF  : Instruction-Fetch | Decode
    - EX  : Execute (Set & Test ALU Flags)


    EXECUTION PATHWAYS

    - IF => EX
    - IF <=> EX

      Given <=> indicates => with EX modified (write-back emulation)

    REGISTER-IF-ARCHITECTURE

    - At each IF stage, all required operands are encoded as constituent spectral-components of the MasterOperand
    - There are two (2) IF fields : [i,j] => [Holograph-Type-Register,Q-Register] => [Flags,MasterOperand] => [[ResonanceFunction_0,...,ResonanceFunction_N],MasterOperand]
    - Each ResonanceFunction, within IF, is essentially an optical circuit, distilled in a hologram, which generates constructive interference when TRUE


    REGISTER-EX-ARCHITECTURE

    - There is one (1) field : [i] => [ALU] => [Q-Register,Q-Register] => [IF::Flags,iResult] => [IF::Flags,[iFlags,iMasterOperand]]
    - At each EX stage

      1.  IF::Flags is fed-forward to EX::ALU::IF::iFlags and all ResonanceFunctions executed
      2.  ResonanceFunctions are executed, in parallel, and stored in EX::ALU::iResult::iMasterOperand
      3.  ResonanceFunctions result-flags are fed to EX::ALU::iResult::iFlags
      4.  EX::ALU::iResult::iFlags is compared to EX::ALU::IF::Flags
      5.  (see EXECUTION PATHWAYS)

        EXECUTION PATHWAYS

        - if EX::ALU::iResult::iFlags != EX::ALU::IF::Flags then
            IF => EX
        - else if EX::ALU::iResult::iFlags == EX::ALU::IF::Flags then
            IF <=> EX (i.e. retain EX::ALU::iResult::iMasterOperand as spectral-component of next IF::MasterOperand)(essentially an emulated writeback (WB) stage)


    IF::FLAG::ResonanceFunction states

    - 0       (off)
    - variant (0 < x < 1)
    - 1       (Saturation/Infinity)
    - [XXX]   (Pass-through lens/dont-care)

    SCENARIO - IMPLEMENTING CONDITIONAL-CONSTRUCTS

      GIVEN BITMAP

        IF => [i,j] => [Flags,MasterOperand] => [[_0_,_1_,_2_,_3_],MasterOperand]

        _0_ = [next-state flags][generated flags][masterOperand]
        _1_ = [SP]
        _2_ = [IP]
        _3_ = [PC]


      PSUEDO-CODE

      1.  add 5+5 => [result]
      2.  if [result] == 10 then 
          subtract [result]-10 => [result]
      3.  else if [result] < 10 then 
          add ([result] + (subtract [result] - 10) + 10) => [result]
      4.  else if [result] > 10 then
          subtract ([result] - (add 10 + [result]) - 10) => [result]
      5.  else
          assign 0 => [result]
      6.  end else-if
      7.  end


      PSUEDO-CODE (COMPILED)


    SCENARIO - IMPLEMENTING LOOPING-CONSTRUCTS

      GIVEN BITMAP

        IF => [i,j] => [Flags,MasterOperand] => [[_0_,_1_,_2_,_3_],MasterOperand]

        _0_ = 
        _1_ = 
        _2_ = 
        _3_ = 


      PSUEDO-CODE

      1.  add 5+5 => [result]
      2.  if [result] == 10 then 
          subtract [result]-10 => [result]
      3.  else if [result] < 10 then 
          add ([result] + (subtract [result] - 10) + 10) => [result]
      4.  else if [result] > 10 then
          subtract ([result] - (add 10 + [result]) - 10) => [result]
      5.  else
          assign 0 => [result]
      6.  end else-if
      7.  end


      PSUEDO-CODE (COMPILED)


    RULES

    - An Instruction holds exactly one (1) IF register, yet to be executed
    - A Program contains one (1) or more Intructions
    - A Program is distilled within a sub-hologram, called a Soliton
    - A Complex Cell, is a hologram containing one (1) or more Solitons
    - A Computing Crystal contains one (1) or more EX registers -- each having one (1) or more ALUs
    - A Projector incorporates one (1) or more Complex-Cells, and one (1) or more Computing Crystals; 
      along with an optional means of displaying, recording, and/or interacting with zero (0) or more final results
    - A Library contains one (1) or more Projectors
    - A Pantheon contains one (1) or more Libraries


    NOTES

    - Reliance on OPCODE-less logic, Clockless Logic
    - All Complex Cells are preloaded into a Q-Register
    - intermediate-results are not returned (speed)
    - Complex Cells | Libraries | Pantheons etc are suspended in tinted quartz (reliability)
    - Optical ALUs execute Computational Instruction Set Codings (CISC-based instruction sets), thus realizing a psuedo-deterministic flow-of-execution
    - All ALU operations are executed in parallel
    - IF::Flag-fields are composed of contiguous, holograph-based, resonance-detection functions and constructive interference generators
    - All IF registers have four (4) stable states of operation : 0 (0), intermediate-values ( 0 < n < 1 ), Infinity (1), pass-through lens (XXX-dont care)
    - All operands are combined -- reversibly -- into a MasterOperand
    - All MasterOperands are stored in Q-Registers
    - In actual implementation, Q-Registers store the result of [ IF (MasterOperand field value) / IF (MasterOperand field resolution) ]
    - These architectures have direct application as all-optical Signal Processors and 1M (1000K) CODECS       
       
    OVERVIEW   
       
    Envisioning an 8K CODEC providing an 8K video resolution on Traditional Hardware   
       
       
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



