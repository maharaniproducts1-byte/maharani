import re
import json
import time
from deep_translator import GoogleTranslator

# Read the recipes.ts file
with open('src/data/recipes.ts', 'r') as f:
    content = f.read()

# Extract the JSON part of recipesData
match = re.search(r'export const recipesData: Recipe\[\] = (\[.*?\]);\s*(export const recipesTranslations|const uiTranslations|$)', content, re.DOTALL)
if not match:
    print("Could not find recipesData")
    exit(1)

recipes_str = match.group(1)
# Convert JS object string to valid JSON by quoting keys
recipes_str = re.sub(r'(\w+):', r'"\1":', recipes_str)
# Handle single quotes to double quotes if any (basic handling)
# Actually, since it's a TS file with comments, this might be fragile. Let's just use a simpler approach.
