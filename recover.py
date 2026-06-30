import json
import os

transcript_path = r"C:\Users\Shayan\.gemini\antigravity-ide\brain\0bc76e04-0d2e-4879-ac39-95bc4ebdf099\.system_generated\logs\transcript_full.jsonl"
restaurant_path = r"c:\Users\Shayan\Downloads\portfolio-docs\sites\restaurant"

os.makedirs(restaurant_path, exist_ok=True)

files = {}

with open(transcript_path, 'r', encoding='utf-8') as f:
    for line in f:
        try:
            step = json.loads(line)
            if step.get('type') == 'PLANNER_RESPONSE' and 'tool_calls' in step:
                for call in step['tool_calls']:
                    name = call.get('name')
                    args = call.get('args', {})
                    if name == 'write_to_file':
                        target = args.get('TargetFile', '')
                        if 'sites\\restaurant' in target or 'sites/restaurant' in target:
                            files[target] = args.get('CodeContent', '')
                    elif name == 'replace_file_content':
                        target = args.get('TargetFile', '')
                        if ('sites\\restaurant' in target or 'sites/restaurant' in target) and target in files:
                            start = args.get('TargetContent', '')
                            rep = args.get('ReplacementContent', '')
                            files[target] = files[target].replace(start, rep)
                    elif name == 'multi_replace_file_content':
                        target = args.get('TargetFile', '')
                        if ('sites\\restaurant' in target or 'sites/restaurant' in target) and target in files:
                            chunks = args.get('ReplacementChunks', [])
                            if isinstance(chunks, str):
                                chunks = json.loads(chunks)
                            for chunk in chunks:
                                start = chunk.get('TargetContent', '')
                                rep = chunk.get('ReplacementContent', '')
                                files[target] = files[target].replace(start, rep)
        except Exception as e:
            pass

for target, content in files.items():
    if not content: continue
    clean_target = target.replace('/', '\\')
    os.makedirs(os.path.dirname(clean_target), exist_ok=True)
    with open(clean_target, 'w', encoding='utf-8') as out_f:
        out_f.write(content)
        
print(f"Recovered {len(files)} files!")
