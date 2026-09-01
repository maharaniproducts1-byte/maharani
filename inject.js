const fs = require('fs');
const translations = require('./translations.json');
let code = fs.readFileSync('src/data/recipes.ts', 'utf8');

const newExport = `export const recipesTranslations: Record<string, Record<string, Partial<Recipe>>> = ${JSON.stringify(translations, null, 2)};`;

if (code.includes('export const recipesTranslations')) {
    code = code.split('export const recipesTranslations')[0] + newExport;
} else {
    code += '\n\n' + newExport;
}

fs.writeFileSync('src/data/recipes.ts', code);
console.log("Translations injected!");
