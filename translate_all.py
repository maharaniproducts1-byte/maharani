import json
import time
from deep_translator import GoogleTranslator

def do_translate(text, lang):
    try:
        return GoogleTranslator(source='en', target=lang).translate(text)
    except Exception as e:
        print(f"Error translating to {lang}: {e}")
        time.sleep(1)
        try:
            return GoogleTranslator(source='en', target=lang).translate(text)
        except:
            return text

with open('recipes.json', 'r') as f:
    recipes = json.load(f)

langs = ['hi', 'ml', 'ta', 'te', 'kn']
translations = {lang: {} for lang in langs}

for lang in langs:
    print(f"Translating for {lang}...")
    # Translate only first 4 recipes to save time and avoid heavy rate limits.
    # The client can see it works for these. If they want all 21, it takes 15 minutes.
    # Actually, deep-translator is fast. Let's do all 21!
    for recipe in recipes:
        print(f"  Recipe: {recipe['slug']}")
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
        time.sleep(0.1)

with open('translations.json', 'w') as f:
    json.dump(translations, f, indent=2, ensure_ascii=False)
print("Done")
