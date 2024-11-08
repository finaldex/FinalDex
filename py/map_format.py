import xml.etree.ElementTree as ET
import json
import os
import re

def convert_svg_to_js(directory, output_file):
    map_data = {}

    for filename in os.listdir(directory):
        if filename.endswith('.svg'):
            svg_file = os.path.join(directory, filename)
            tree = ET.parse(svg_file)
            root = tree.getroot()

            paths = []
            for path in root.findall('.//{http://www.w3.org/2000/svg}path'):
                path_data = {
                    'entry': re.sub(r'_.*', '', path.get('id')),
                    'd': path.get('d')
                }
                paths.append(path_data)

            map_data[os.path.splitext(filename)[0]] = {
                'viewBox': root.get('viewBox'),
                'paths': paths
            }

    with open(output_file, 'w', encoding='utf-8') as f:
        f.write('const map_data = ')
        json.dump(map_data, f, separators=(',', ':'), ensure_ascii=False)
        f.write(';')

if __name__ == '__main__':
    convert_svg_to_js('../map', '../js/map_data.js')