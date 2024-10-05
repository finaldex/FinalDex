import time
import datetime
import os
import json

root = os.getcwd()

timeStart = time.time()

base = 'N:/My Drive/www.finaldex.com'
dir = {}


for path, subdirs, files in os.walk(root):
    if 'media' in path and not 'Images_old' in path:
        path = path.replace('\\','/')
        path = path.replace(base,'.')
        for name in files:
            try:
                val = len(dir[path])
                dir[path].append(name)
            except:
                dir[path] = [name]


#print(dir['./media/Images/Pokemon/Overworld/Front/Shiny/PNG/HGSS'])

os.chdir(os.getcwd()+'\\'+'data')
json_object = json.dumps(dir,separators=(',', ':'))
with open("Directory.json","w") as outfile:
    outfile.write(json_object)

print("Time Elapsed: "+str(datetime.timedelta(seconds=(round(time.time() - timeStart,0)))))
os.system("pause")