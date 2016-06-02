#!/usr/bin/python

import re

class class_QF:
  __pttn_ob = re.compile(".*\[.*",re.I|re.S)
  __pttn_cb = re.compile(".*\].*",re.I|re.S)
  __pttn = re.compile(",\s+",re.I|re.S)
  __hasScope = False
  def hasScope(self,s):
    if self.__pttn_ob.match(s):
      self.__hasScope = True
    elif self.__pttn_cb.match(s):
      self.__hasScope = False
    return self.__hasScope
  def quickformat(self,s):
    res = s
    if self.__hasScope:
      res = self.__pttn.sub(",",s)
    return res

qf = class_QF()

str = ""
idx = 0
buf = ["",]

print("Working...\n")

f00 = open("16K_codec_tables.js.2",'r')
buf[0] = f00.readline()

while(1):
  idx = idx + 1  
  buf += [f00.readline()]
  if buf[idx] != "":  
    if qf.hasScope(buf[idx]):
      buf[idx] = qf.quickformat(buf[idx])
  else:
    break

f01 = open("16K_codec_tables.js.3",'w')
f01.write(str.join(buf))
f01.close()

f00.close()

print("Done.")

