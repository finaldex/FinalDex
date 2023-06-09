import os
import re
import random
from os import listdir
from os.path import isfile, join


dir = os.getcwd()+"\\media\\Videos\\Sample"
root = "N:\My Drive\www.finaldex.com"
onlyfiles = [f for f in listdir(dir) if isfile(join(dir, f))]

random.shuffle(onlyfiles)

result = []
firstIteration = True

for f in onlyfiles:
    it = str(dir.replace(root,"."))+"\\"+f
    if firstIteration:
        item = "<video autoplay=\"true\" muted=\"true\" class=\"active\" onplay=\"this.className = 'active';\" onended=\"this.className = 'inactive'; try {this.nextElementSibling.play();} catch {this.parentElement.firstElementChild.play();}\"><source type=\"video/mp4\" src=\""+str(it)+"\"></video>"
        firstIteration = False
    else:
        item = "<video muted=\"true\" class=\"inactive\" onplay=\"this.className = 'active';\" onended=\"this.className = 'inactive'; try {this.nextElementSibling.play();} catch {this.parentElement.firstElementChild.play();}\"><source type=\"video/mp4\" src=\""+str(it)+"\"></video>"

    result.append(item)


file = open("Index.html","r")
data = file.read()
file.close()

data_str = "\n".join(result)
data_str = "<span name=\"video\">"+data_str+"</span>"

data_new = re.sub(r"\<span name\=\"video\"\>[\S\s]*?\<\/span\>", "XXXXXXXXXX", str(data))
data_new = data_new.replace("XXXXXXXXXX",data_str)

file = open("Index.html","w")
file.write(data_new)
file.close()

