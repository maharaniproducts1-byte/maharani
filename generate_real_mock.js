const fs = require('fs');
const recipes = JSON.parse(fs.readFileSync('recipes.json', 'utf8'));

const langs = ['hi', 'ml', 'ta', 'te', 'kn'];
const translations = {};

// We will inject actual translations for the first few recipes
const realTranslations = {
  "traditional-thoran": {
    hi: { title: "पारंपरिक थोरन", description: "सब्जियों और मसालों के साथ सीधे भूनें एक प्रामाणिक साइड डिश के लिए।", ingredients: ["1 कप महारानी नारियल पाउडर", "1/2 कप गर्म पानी", "2 कप कटी हुई सब्जियां", "1 चम्मच राई", "नमक स्वादानुसार"], steps: ["पानी डालें", "पकाएं"] },
    ml: { title: "പരമ്പരാഗത തോരൻ", description: "പച്ചക്കറികൾക്കും സുഗന്ധവ്യഞ്ജനങ്ങൾക്കുമൊപ്പം നേരിട്ട് ഇളക്കുക.", ingredients: ["1 കപ്പ് മഹാറാണി കോക്കനട്ട് പൗഡർ", "1/2 കപ്പ് ചൂടുവെള്ളം", "2 കപ്പ് പച്ചക്കറികൾ", "1 ടീസ്പൂൺ കടുക്", "ഉപ്പ്"], steps: ["വെള്ളം ചേർക്കുക", "പാചകം ചെയ്യുക"] },
    ta: { title: "பாரம்பரிய தோரன்", description: "காய்கறிகள் மற்றும் மசாலாப் பொருட்களுடன் நேரடியாக வறுக்கவும்.", ingredients: ["1 கப் மஹாராணி தேங்காய் பொடி", "1/2 கப் வெதுவெதுப்பான நீர்", "2 கப் காய்கறிகள்", "1 டீஸ்பூன் கடுகு", "உப்பு"], steps: ["தண்ணீர் சேர்க்கவும்", "சமைக்கவும்"] },
    te: { title: "సాంప్రదాయ తోరన్", description: "కూరగాయలు మరియు సుగంధ ద్రవ్యాలతో నేరుగా వేయించాలి.", ingredients: ["1 కప్పు మహారాణి కొబ్బరి పొడి", "1/2 కప్పు వెచ్చని నీరు", "2 కప్పుల కూరగాయలు", "1 స్పూన్ ఆవాలు", "ఉప్పు"], steps: ["నీరు కలపండి", "ఉడికించాలి"] },
    kn: { title: "ಸಾಂಪ್ರದಾಯಿಕ ತೋರನ್", description: "ತರಕಾರಿಗಳು ಮತ್ತು ಮಸಾಲೆಗಳೊಂದಿಗೆ ನೇರವಾಗಿ ಫ್ರೈ ಮಾಡಿ.", ingredients: ["1 ಕಪ್ ಮಹಾರಾಣಿ ತೆಂಗಿನಕಾಯಿ ಪುಡಿ", "1/2 ಕಪ್ ಬೆಚ್ಚಗಿನ ನೀರು", "2 ಕಪ್ ತರಕಾರಿಗಳು", "1 ಟೀಚಮಚ ಸಾಸಿವೆ", "ಉಪ್ಪು"], steps: ["ನೀರು ಸೇರಿಸಿ", "ಬೇಯಿಸಿ"] }
  },
  "coconut-chutney": {
    hi: { title: "नारियल की चटनी", description: "इडली और डोसा के लिए एक क्लासिक दक्षिण भारतीय चटनी।", ingredients: ["1 कप महारानी नारियल पाउडर", "3-4 हरी मिर्च", "नमक स्वादानुसार"], steps: ["ब्लेंड करें", "परोसें"] },
    ml: { title: "തേങ്ങാ ചമ്മന്തി", description: "ഇഡ്ഡലിക്കും ദോശയ്ക്കും അനുയോജ്യമായ ഒരു ക്ലാസിക് ചമ്മന്തി.", ingredients: ["1 കപ്പ് മഹാറാണി കോക്കനട്ട് പൗഡർ", "3-4 പച്ചമുളക്", "ഉപ്പ്"], steps: ["അരയ്ക്കുക", "വിളമ്പുക"] },
    ta: { title: "தேங்காய் சட்னி", description: "இட்லி மற்றும் தோசைக்கான ஒரு உன்னதமான தென்னிந்திய சட்னி.", ingredients: ["1 கப் மஹாராணி தேங்காய் பொடி", "3-4 பச்சை மிளகாய்", "உப்பு"], steps: ["அரைக்கவும்", "பரிமாறவும்"] },
    te: { title: "కొబ్బరి పచ్చడి", description: "ఇడ్లీ మరియు దోస కోసం ఒక క్లాసిక్ దక్షిణ భారత పచ్చడి.", ingredients: ["1 కప్పు మహారాణి కొబ్బరి పొడి", "3-4 పచ్చిమిర్చి", "ఉప్పు"], steps: ["రుబ్బు", "వడ్డించండి"] },
    kn: { title: "ತೆಂಗಿನಕಾಯಿ ಚಟ್ನಿ", description: "ಇಡ್ಲಿ ಮತ್ತು ದೋಸೆಗಾಗಿ ಕ್ಲಾಸಿಕ್ ದಕ್ಷಿಣ ಭಾರತೀಯ ಚಟ್ನಿ.", ingredients: ["1 ಕಪ್ ಮಹಾರಾಣಿ ತೆಂಗಿನಕಾಯಿ ಪುಡಿ", "3-4 ಹಸಿರು ಮೆಣಸಿನಕಾಯಿ", "ಉಪ್ಪು"], steps: ["ರುಬ್ಬಿಕೊಳ್ಳಿ", "ಬಡಿಸಿ"] }
  }
};

for (const lang of langs) {
  translations[lang] = {};
  for (const r of recipes) {
    if (realTranslations[r.slug] && realTranslations[r.slug][lang]) {
      const real = realTranslations[r.slug][lang];
      translations[lang][r.slug] = {
        title: real.title,
        description: real.description,
        ingredients: real.ingredients,
        steps: real.steps,
        tips: r.tips ? r.tips.map(t => `[${lang.toUpperCase()}] ` + t) : [],
        servingSuggestion: r.servingSuggestion ? `[${lang.toUpperCase()}] ` + r.servingSuggestion : undefined
      };
    } else {
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
}

fs.writeFileSync('translations.json', JSON.stringify(translations, null, 2));
