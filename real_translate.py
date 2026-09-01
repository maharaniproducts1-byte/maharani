import json
import time
from deep_translator import GoogleTranslator
import sys

def do_translate(text, lang):
    if not text: return text
    try:
        return GoogleTranslator(source='en', target=lang).translate(text)
    except Exception as e:
        time.sleep(0.5)
        try:
            return GoogleTranslator(source='en', target=lang).translate(text)
        except:
            return text

with open('recipes.json', 'r') as f:
    recipes = json.load(f)

langs = ['hi', 'ml', 'ta', 'te', 'kn']
translations = {lang: {} for lang in langs}

for lang in langs:
    print(f"Translating for {lang}...", flush=True)
    for recipe in recipes:
        tr = {}
        tr['title'] = do_translate(recipe['title'], lang)
        tr['description'] = do_translate(recipe['description'], lang)
        
        tr['ingredients'] = [do_translate(i, lang) for i in recipe['ingredients']]
        tr['steps'] = [do_translate(s, lang) for s in recipe['steps']]
        
        if 'tips' in recipe and recipe['tips']:
            tr['tips'] = [do_translate(t, lang) for t in recipe['tips']]
        if 'servingSuggestion' in recipe and recipe['servingSuggestion']:
            tr['servingSuggestion'] = do_translate(recipe['servingSuggestion'], lang)
            
        translations[lang][recipe['slug']] = tr
        time.sleep(0.05)

with open('translations.json', 'w', encoding='utf-8') as f:
    json.dump(translations, f, indent=2, ensure_ascii=False)

print("Translation completed successfully", flush=True)
