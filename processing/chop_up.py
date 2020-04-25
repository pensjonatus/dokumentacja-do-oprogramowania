import unicodedata
import os
import shutil
import re


def make_into_an_id(text):
    transformed_text = text.lower().replace(
        ' ', '-').replace('sł', 'sl')
    bad_chars = ['?', ',', '(', ')']
    for i in bad_chars:
        transformed_text = transformed_text.replace(i, '')
    return unicodedata.normalize(
        'NFD', transformed_text).encode('ascii', 'ignore').decode('utf-8')


def get_file_id(object):
    keys = object.keys()
    for key in keys:
        return key


def make_camel_case(text):
    return ''.join(x.capitalize() or '-' for x in text.split('-'))


print("Let's get to chopping!")

output_folder = 'chopped'
if os.path.exists(output_folder):
    shutil.rmtree(output_folder)

os.mkdir(output_folder)

collected_ids = []
with open('raw.md', encoding='utf-8') as raw_file:
    file_id = 'placeholder'
    new_file = {file_id: []}
    for line in raw_file:
        if line.startswith('# '):
            existing_file_id = get_file_id(new_file)
            existing_lines = new_file[existing_file_id]
            if existing_lines:
                with open(f'{output_folder}/{existing_file_id}.md', 'w', encoding='utf-8') as target:
                    target.writelines(existing_lines)
            file_title = line[2:].strip()
            file_id = make_into_an_id(file_title)
            collected_ids.append(file_id)
            new_file = {file_id: []}
            new_file[file_id].append('---\n')
            new_file[file_id].append(f'id: {file_id}\n')
            new_file[file_id].append(f'title: {file_title}\n')
            new_file[file_id].append('---\n')
            new_file[file_id].append('\n')

            image_handle = make_camel_case(file_id)
            new_file[file_id].append(
                f"import {image_handle} from './img/{file_id}.png';\n")
            new_file[file_id].append('\n')
            new_file[file_id].append(
                f'<img alt="{file_title}" title="{file_title}" href={{{image_handle}}}/>\n')
        new_file[file_id].append(line)

with open(f'{output_folder}/ids.json', 'w', encoding='utf-8') as target:
    target.writelines(f"'{id}',\n" for id in collected_ids)

print('Done with all the chopping! Phew~!')
