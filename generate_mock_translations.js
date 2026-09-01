const fs = require('fs');
const recipes = JSON.parse(fs.readFileSync('recipes.json', 'utf8'));
const langs = ['hi', 'ml', 'ta', 'te', 'kn'];
const translations = {};

for (const lang of langs) {
  translations[lang] = {};
  for (const r of recipes) {
    translations[lang][r.slug] = {
      title: `[${lang.toUpperCase()}] ` + r.title,
      description: `[${lang.toUpperCase()}] ` + r.description,
      ingredients: r.ingredients.map(i => `[${lang.toUpperCase()}] ` + i),
      steps: r.steps.map(s => `[${lang.toUpperCase()}] ` + s),
      tips: r.tips ? r.tips.map(t => `[${lang.toUpperCase()}] ` + t) : [],
      servingSuggestion: r.servingSuggestion ? `[${lang.toUpperCase()}] ` + r.servingSuggestion : undefined
    };
  }
}

fs.writeFileSync('translations.json', JSON.stringify(translations, null, 2));
