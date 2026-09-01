export interface Recipe {
  slug: string;
  title: string;
  category: string;
  description: string;
  image: string;
  prepTime: string;
  cookTime: string;
  servings: string;
  difficulty: string;
  ingredients: string[];
  steps: string[];
  tips?: string[];
  servingSuggestion?: string;
}

export const recipesData: Recipe[] = [
  // Existing 4 Recipes (Categorized)
  {
    slug: "traditional-thoran",
    title: "Traditional Thoran",
    category: "Traditional Kerala",
    description: "Rehydrate and stir-fry directly with vegetables and spices for an authentic side dish. Enhances flavor and adds traditional texture to cooking.",
    image: "/recipes/thoran-placeholder.png",
    prepTime: "15 mins",
    cookTime: "10 mins",
    servings: "4",
    difficulty: "Easy",
    ingredients: [
      "1 cup Maharani Coconut Powder",
      "1/2 cup warm water (for rehydration)",
      "2 cups chopped vegetables (Cabbage, Beans, or Carrot)",
      "1 tsp mustard seeds",
      "1/2 tsp cumin seeds",
      "2-3 green chilies, slit",
      "1 sprig curry leaves",
      "1/4 tsp turmeric powder",
      "1 tbsp coconut oil",
      "Salt to taste"
    ],
    steps: [
      "01 — Prepare the coconut: Rehydrate 1 cup of Maharani Coconut Powder by mixing it gently with 1/2 cup warm water. Let it rest for 10-15 minutes.",
      "02 — Tempering: Heat coconut oil in a pan over medium heat. Add mustard seeds and let them splutter, then add cumin seeds, slit green chilies, and curry leaves. Sauté until fragrant.",
      "03 — Cook vegetables: Add the finely chopped vegetables, turmeric powder, and salt. Mix well. Cover the pan and cook on low heat until the vegetables are tender. Avoid adding extra water to retain crunchiness.",
      "04 — Combine: Add the rehydrated coconut to the cooked vegetables. Mix thoroughly and cook for another 2 minutes to blend the flavors.",
      "05 — Finish and serve: Remove from heat and serve hot."
    ],
    tips: [
      "For extra flavor, slightly crush the cumin seeds and green chilies together before adding them to the pan."
    ],
    servingSuggestion: "Best served with hot Kerala Matta rice and Parippu (Dal) curry."
  },
  {
    slug: "kerala-avial",
    title: "Kerala Avial",
    category: "Curries & Savoury",
    description: "A staple mixed vegetable dish where rehydrated coconut forms the creamy base. Enhances flavor and adds authentic richness to cooking.",
    image: "/recipes/avial-placeholder.png",
    prepTime: "20 mins",
    cookTime: "20 mins",
    servings: "5",
    difficulty: "Medium",
    ingredients: [
      "1.5 cups Maharani Coconut Powder",
      "3/4 cup warm water (for rehydration)",
      "3 cups mixed vegetables (Yam, Plantain, Carrot, Beans, Drumstick, Ash Gourd)",
      "1 tsp cumin seeds",
      "4-5 green chilies",
      "1/2 tsp turmeric powder",
      "1/2 cup thick sour curd (yogurt)",
      "2 tbsp coconut oil",
      "1 sprig curry leaves",
      "Salt to taste"
    ],
    steps: [
      "01 — Prepare vegetables: Cut all the vegetables into uniform long batons (about 2 inches long). Cook them in a heavy-bottomed pan with turmeric powder, salt, and a splash of water until just tender (do not overcook).",
      "02 — Prepare the coconut: While the vegetables cook, rehydrate 1.5 cups of Maharani Coconut Powder with 3/4 cup warm water and let it rest for 10 minutes.",
      "03 — Make the paste: Grind the rehydrated coconut, green chilies, and cumin seeds into a coarse paste. Do not add excess water while grinding.",
      "04 — Combine and cook: Add the ground coconut paste to the cooked vegetables. Mix very gently to ensure the vegetables don't break. Cook on low heat for 3-4 minutes until the raw smell of the paste disappears.",
      "05 — Finish and serve: Remove the pan from heat and let it cool slightly. Gently fold in the beaten curd. Drizzle raw coconut oil over the dish and garnish with fresh curry leaves before serving."
    ],
    tips: [
      "Never boil the Avial after adding the curd, as it will cause the curd to curdle and spoil the texture."
    ],
    servingSuggestion: "A must-have traditional side dish for the Kerala Sadya."
  },
  {
    slug: "coconut-stew",
    title: "Kerala Coconut Stew",
    category: "Curries & Savoury",
    description: "Extract rich coconut milk from the powder for delicious, aromatic stews. Enhances flavor and adds perfect creaminess to curries.",
    image: "/recipes/stew-placeholder.png",
    prepTime: "20 mins",
    cookTime: "25 mins",
    servings: "4",
    difficulty: "Medium",
    ingredients: [
      "1 cup Maharani Coconut Powder",
      "1.5 cups warm water (for thick milk)",
      "1 cup warm water (for thin milk)",
      "2 cups mixed vegetables (Potato, Carrot, Green Peas, Beans)",
      "1 large onion, thinly sliced",
      "2-3 green chilies, slit",
      "1 inch ginger, julienned",
      "Whole spices (1 inch cinnamon, 3 cloves, 2 cardamom pods)",
      "1 sprig curry leaves",
      "2 tbsp coconut oil",
      "Salt to taste"
    ],
    steps: [
      "01 — Extract milk: Blend 1 cup of Maharani Coconut Powder with 1.5 cups of warm water. Strain and squeeze to extract the 'thick coconut milk'. Set aside. Blend the remaining squeezed coconut residue with 1 cup of warm water and strain to extract the 'thin coconut milk'.",
      "02 — Tempering: Heat coconut oil in a pan and add the whole spices (cinnamon, cloves, cardamom). Add the sliced onion, green chilies, ginger, and curry leaves. Sauté until the onions turn translucent (do not let them brown).",
      "03 — Cook vegetables: Add the mixed vegetables and sauté for a minute. Pour in the thin coconut milk and add salt. Cover and cook until the vegetables are perfectly tender.",
      "04 — Combine: Lower the heat entirely and gently stir in the thick coconut milk. Heat for 2 minutes on low flame to warm it through. Do not let it boil, as the thick milk may split.",
      "05 — Finish and serve: Remove from heat and serve warm."
    ],
    tips: [
      "Add a handful of soaked and ground cashew nuts along with the thick milk for an even richer and creamier stew."
    ],
    servingSuggestion: "Pairs perfectly with Appam, Idiyappam, or toasted bread."
  },
  {
    slug: "payasam",
    title: "Authentic Payasam",
    category: "Sweets & Desserts",
    description: "Use extracted coconut milk for making rich, traditional sweet delicacies. Also great as a topping or filler when sprinkled on desserts.",
    image: "/recipes/payasam-placeholder.png",
    prepTime: "10 mins",
    cookTime: "30 mins",
    servings: "6",
    difficulty: "Medium",
    ingredients: [
      "1.5 cups Maharani Coconut Powder",
      "2.5 cups warm water (for milk extraction)",
      "1 cup roasted Vermicelli (Semiya) or Rice Ada",
      "1.5 cups Jaggery (grated) or Sugar",
      "1/2 tsp cardamom powder",
      "10-15 cashew nuts",
      "10-15 raisins",
      "2 tbsp ghee"
    ],
    steps: [
      "01 — Extract milk: Extract thin and thick coconut milk from the Maharani Coconut Powder using the warm water (blend, strain, and repeat as done for stews).",
      "02 — Prepare Jaggery: If using Jaggery, melt it in a separate pan with 1/4 cup water and strain it to remove impurities.",
      "03 — Cook Vermicelli: In a thick-bottomed pan, cook the vermicelli or ada in the thin coconut milk on medium heat until soft.",
      "04 — Combine and thicken: Add the strained jaggery syrup (or sugar) and cook until the mixture slightly thickens.",
      "05 — Add thick milk: Reduce the heat to the lowest setting and pour in the thick coconut milk and cardamom powder. Stir well and warm it, but do not let it boil. Remove from heat.",
      "06 — Garnish: In a separate small pan, heat ghee and fry the cashew nuts and raisins until the nuts are golden and raisins puff up. Pour the fried nuts, raisins, and ghee over the payasam and stir gently."
    ],
    tips: [
      "You can add a pinch of dry ginger powder (chukku) along with the cardamom for a deeply traditional flavor profile."
    ],
    servingSuggestion: "Serve warm or chilled as a dessert after a grand meal."
  },

  // NEW 16 RECIPES

  {
    slug: "kerala-cabbage-thoran",
    title: "Kerala Cabbage Thoran",
    category: "Traditional Kerala",
    description: "A quick, everyday Kerala side dish. The rehydrated desiccated coconut brings the necessary moisture and sweetness to balance the cabbage.",
    image: "/recipes/kerala-cabbage-thoran-placeholder.jpg",
    prepTime: "10 mins",
    cookTime: "10 mins",
    servings: "4",
    difficulty: "Easy",
    ingredients: [
      "3/4 cup Maharani Coconut Powder",
      "1/3 cup warm water (for rehydration)",
      "3 cups finely chopped cabbage",
      "1/2 tsp mustard seeds",
      "1/2 tsp cumin seeds",
      "1/4 tsp turmeric powder",
      "2 green chilies, slit",
      "1 sprig curry leaves",
      "1 tbsp coconut oil",
      "Salt to taste"
    ],
    steps: [
      "01 — Prepare the coconut: Rehydrate 3/4 cup of Maharani Coconut Powder with 1/3 cup warm water. Set aside for 10 minutes.",
      "02 — Tempering: Heat coconut oil in a pan. Splutter mustard seeds, then add cumin seeds, green chilies, and curry leaves.",
      "03 — Cook cabbage: Add the finely chopped cabbage, turmeric, and salt. Stir well, cover, and cook on low heat for 5 minutes until tender. Do not overcook.",
      "04 — Combine: Stir in the rehydrated coconut. Cook uncovered for 2 minutes to mix flavors.",
      "05 — Finish and serve: Remove from heat and serve hot."
    ],
    servingSuggestion: "Excellent with rice and moru curry."
  },
  {
    slug: "kerala-pumpkin-erissery",
    title: "Kerala Pumpkin Erissery",
    category: "Traditional Kerala",
    description: "A classic Kerala dish combining sweet pumpkin with a roasted coconut paste. The desiccated coconut roasts beautifully to release a deep, nutty aroma.",
    image: "/recipes/kerala-pumpkin-erissery-placeholder.jpg",
    prepTime: "15 mins",
    cookTime: "25 mins",
    servings: "4",
    difficulty: "Medium",
    ingredients: [
      "1.5 cups Maharani Coconut Powder (divided)",
      "3/4 cup warm water (for rehydration)",
      "3 cups yellow pumpkin, cubed",
      "1/2 cup cowpeas (vanpayar), soaked and cooked",
      "1/2 tsp turmeric powder",
      "1 tsp red chili powder",
      "1/2 tsp cumin seeds",
      "2 dry red chilies",
      "1 sprig curry leaves",
      "2 tbsp coconut oil",
      "Salt to taste"
    ],
    steps: [
      "01 — Prepare the coconut: Rehydrate 1 cup of Maharani Coconut Powder with 1/2 cup warm water for the paste. Keep the remaining 1/2 cup of dry powder for roasting later.",
      "02 — Cook pumpkin: Boil the pumpkin cubes with turmeric, chili powder, and salt until soft. Mash lightly. Mix in the cooked cowpeas.",
      "03 — Make the paste: Grind the rehydrated coconut and cumin seeds into a smooth paste. Add this paste to the pumpkin mixture. Simmer for 3-4 minutes.",
      "04 — Roast coconut (The secret step): Heat coconut oil in a small pan. Fry mustard seeds, dry red chilies, and curry leaves. Add the remaining 1/2 cup of dry Maharani Coconut Powder. Roast on low heat until dark golden brown.",
      "05 — Finish and serve: Pour the roasted coconut mixture over the erissery. Stir well and serve."
    ]
  },
  {
    slug: "kerala-vegetable-theeyal",
    title: "Kerala Vegetable Theeyal",
    category: "Traditional Kerala",
    description: "A rich, dark gravy made by roasting desiccated coconut with spices. The uniform texture of Maharani Coconut Powder ensures an even roast without burning.",
    image: "/recipes/kerala-vegetable-theeyal-placeholder.jpg",
    prepTime: "15 mins",
    cookTime: "30 mins",
    servings: "4",
    difficulty: "Medium",
    ingredients: [
      "1 cup Maharani Coconut Powder",
      "2 cups mixed vegetables (drumstick, pearl onions, bitter gourd)",
      "1 small lemon-sized ball of tamarind, soaked in 1 cup water",
      "1 tbsp coriander powder",
      "1 tsp red chili powder",
      "1/4 tsp turmeric powder",
      "1/4 tsp fenugreek powder",
      "2 tbsp coconut oil",
      "Salt to taste"
    ],
    steps: [
      "01 — Roast the coconut: Heat a pan on low flame. Dry roast 1 cup of Maharani Coconut Powder (do not rehydrate) until it turns dark brown. Stir continuously.",
      "02 — Add spices: Turn off the heat. Immediately add coriander, chili, turmeric, and fenugreek powders to the hot coconut. Mix well and let cool.",
      "03 — Make the paste: Grind the roasted coconut-spice mixture with a little water into a smooth, dark paste.",
      "04 — Cook vegetables: In a pot, cook the mixed vegetables with the extracted tamarind water and salt until tender.",
      "05 — Combine: Stir the roasted coconut paste into the cooked vegetables. Simmer for 10 minutes until oil separates at the top.",
      "06 — Finish and serve: Serve hot with steamed rice."
    ]
  },
  {
    slug: "coconut-based-vegetable-curry",
    title: "Coconut-Based Vegetable Curry",
    category: "Curries & Savoury",
    description: "An everyday curry relying on rehydrated coconut paste for a thick, satisfying gravy.",
    image: "/recipes/coconut-based-vegetable-curry-placeholder.jpg",
    prepTime: "15 mins",
    cookTime: "20 mins",
    servings: "4",
    difficulty: "Easy",
    ingredients: [
      "1 cup Maharani Coconut Powder",
      "1/2 cup warm water (for rehydration)",
      "2 cups mixed vegetables (carrots, potatoes, cauliflower)",
      "1 onion, chopped",
      "1 tomato, chopped",
      "1/2 tsp ginger-garlic paste",
      "1 tsp garam masala",
      "1/2 tsp turmeric powder",
      "1 tbsp oil",
      "Salt to taste"
    ],
    steps: [
      "01 — Prepare the coconut: Rehydrate 1 cup of Maharani Coconut Powder with 1/2 cup warm water. After 10 mins, grind it into a smooth paste.",
      "02 — Saute aromatics: Heat oil in a pan. Sauté chopped onions until golden. Add ginger-garlic paste and tomatoes. Cook until soft.",
      "03 — Cook vegetables: Add the mixed vegetables, turmeric, salt, and 1 cup of water. Cover and cook until vegetables are done.",
      "04 — Combine: Stir in the coconut paste and garam masala. Simmer for 5 minutes until the gravy thickens.",
      "05 — Finish and serve: Garnish with coriander leaves and serve hot with chapati or rice."
    ]
  },
  {
    slug: "kerala-style-coconut-chutney",
    title: "Kerala-Style Coconut Chutney",
    category: "Curries & Savoury",
    description: "The classic accompaniment for dosa and idli. Rehydrating the desiccated coconut perfectly mimics the texture and flavor of fresh coconut.",
    image: "/recipes/kerala-style-coconut-chutney-placeholder.jpg",
    prepTime: "10 mins",
    cookTime: "5 mins",
    servings: "4",
    difficulty: "Easy",
    ingredients: [
      "1 cup Maharani Coconut Powder",
      "1/2 cup warm water (for rehydration)",
      "2-3 green chilies",
      "1 small piece of ginger",
      "2 tbsp roasted gram (pottukadalai) (optional, for thickness)",
      "1/2 tsp mustard seeds",
      "2 dry red chilies",
      "1 sprig curry leaves",
      "1 tbsp coconut oil",
      "Salt to taste"
    ],
    steps: [
      "01 — Prepare the coconut: Rehydrate 1 cup of Maharani Coconut Powder with 1/2 cup warm water. Let it rest for 10 minutes.",
      "02 — Blend chutney: In a blender, combine the rehydrated coconut, green chilies, ginger, roasted gram, salt, and a little extra water if needed. Blend to a smooth or slightly coarse paste.",
      "03 — Tempering: Heat coconut oil in a small pan. Splutter mustard seeds, then add dry red chilies and curry leaves.",
      "04 — Finish and serve: Pour the hot tempering over the chutney. Mix well and serve with idli, dosa, or vada."
    ]
  },
  {
    slug: "coconut-appam",
    title: "Soft Coconut Appam",
    category: "Breakfast & Snacks",
    description: "Soft, lacy Kerala appams rely on rich coconut milk. Extracting milk from Maharani Coconut Powder provides the perfect consistency.",
    image: "/recipes/coconut-appam-placeholder.jpg",
    prepTime: "8 hours (includes fermentation)",
    cookTime: "20 mins",
    servings: "4",
    difficulty: "Medium",
    ingredients: [
      "2 cups raw rice (soaked for 4-6 hours)",
      "1.5 cups Maharani Coconut Powder",
      "2 cups warm water (for extracting milk)",
      "1/2 tsp active dry yeast",
      "2 tbsp sugar",
      "1/2 tsp salt"
    ],
    steps: [
      "01 — Extract milk: Blend 1.5 cups of Maharani Coconut Powder with 2 cups of warm water. Strain to extract thick coconut milk.",
      "02 — Prepare batter: Drain the soaked rice. Blend the rice with the extracted coconut milk until very smooth.",
      "03 — Ferment: Dissolve yeast and sugar in 2 tbsp warm water. Add to the batter. Cover and leave in a warm place for 8 hours to ferment.",
      "04 — Cook: Add salt to the fermented batter and stir gently. Pour a ladle of batter into a hot appachatti (appam pan) and swirl it around to form lacey edges. Cover and cook until the center is fluffy.",
      "05 — Finish and serve: Serve hot with Kerala Coconut Stew."
    ]
  },
  {
    slug: "coconut-puttu",
    title: "Kerala Coconut Puttu",
    category: "Breakfast & Snacks",
    description: "Steamed rice flour cylinders layered with coconut. Rehydrated desiccated coconut provides the exact texture needed between the rice layers.",
    image: "/recipes/coconut-puttu-placeholder.jpg",
    prepTime: "15 mins",
    cookTime: "15 mins",
    servings: "3",
    difficulty: "Easy",
    ingredients: [
      "2 cups puttu flour (roasted rice flour)",
      "1 cup Maharani Coconut Powder",
      "1/2 cup warm water (for rehydration)",
      "Water (as needed for the flour)",
      "1/2 tsp salt"
    ],
    steps: [
      "01 — Prepare the coconut: Rehydrate 1 cup of Maharani Coconut Powder with 1/2 cup warm water. Fluff it with a fork after 10 minutes.",
      "02 — Prepare flour: Mix salt into the puttu flour. Gradually sprinkle water and mix with your fingers until the flour reaches a crumbly texture (it should hold its shape when pressed but crumble easily).",
      "03 — Layer: In a puttu maker (kutty), add a small layer (about 2 tbsp) of the rehydrated coconut, followed by a handful of the moistened rice flour. Repeat until full, ending with a layer of coconut.",
      "04 — Steam: Steam the puttu maker over boiling water for 5-7 minutes until steam escapes from the top.",
      "05 — Finish and serve: Push the puttu out using a skewer and serve hot with kadala curry or ripe bananas."
    ]
  },
  {
    slug: "coconut-idiyappam",
    title: "Coconut Idiyappam",
    category: "Breakfast & Snacks",
    description: "String hoppers steamed over a bed of coconut. The rehydrated coconut powder infuses flavor into the delicate rice strings.",
    image: "/recipes/coconut-idiyappam-placeholder.jpg",
    prepTime: "15 mins",
    cookTime: "15 mins",
    servings: "4",
    difficulty: "Medium",
    ingredients: [
      "2 cups roasted rice flour",
      "1 cup Maharani Coconut Powder",
      "1/2 cup warm water (for rehydration)",
      "2.5 cups boiling water",
      "1 tbsp coconut oil",
      "1/2 tsp salt"
    ],
    steps: [
      "01 — Prepare the coconut: Rehydrate 1 cup of Maharani Coconut Powder with 1/2 cup warm water. Set aside.",
      "02 — Prepare dough: Boil water with salt and coconut oil. Gradually pour into the rice flour and mix with a spoon. Once cool enough to handle, knead into a smooth dough.",
      "03 — Press strings: Lightly grease an idli plate or idiyappam steamer. Sprinkle a layer of rehydrated coconut on each plate.",
      "04 — Steam: Fill the idiyappam press with dough and squeeze it over the coconut layer in a circular motion. Steam for 8-10 minutes.",
      "05 — Finish and serve: Serve warm with sweetened coconut milk or vegetable stew."
    ]
  },
  {
    slug: "coconut-unniyappam",
    title: "Sweet Unniyappam",
    category: "Breakfast & Snacks",
    description: "Traditional sweet fritters. Desiccated coconut provides a delightful bite and crunch inside the soft appams.",
    image: "/recipes/coconut-unniyappam-placeholder.jpg",
    prepTime: "30 mins",
    cookTime: "20 mins",
    servings: "6",
    difficulty: "Medium",
    ingredients: [
      "1 cup roasted rice flour",
      "1/2 cup Maharani Coconut Powder (used dry)",
      "1 cup jaggery, melted and strained",
      "2 ripe small bananas (palayankodan), mashed",
      "1/2 tsp cardamom powder",
      "A pinch of baking soda",
      "Coconut oil or ghee for deep frying"
    ],
    steps: [
      "01 — Prepare batter: In a bowl, mix rice flour, mashed bananas, strained jaggery syrup, cardamom powder, and baking soda. The batter should have the consistency of thick pancake batter.",
      "02 — Add coconut: Fold in the dry Maharani Coconut Powder. Let the batter rest for 30 minutes.",
      "03 — Heat pan: Heat an unniyappam pan (appe pan) on medium heat. Pour coconut oil or ghee into the cavities.",
      "04 — Fry: Pour the batter into each cavity (fill to 3/4th). Cook until the bottom is golden brown, then flip and cook the other side.",
      "05 — Finish and serve: Remove and drain on paper towels. Serve warm."
    ]
  },
  {
    slug: "coconut-ada",
    title: "Ela Ada (Steamed Rice Parcels)",
    category: "Breakfast & Snacks",
    description: "Sweet coconut and jaggery filling inside rice parcels. Rehydrated desiccated coconut absorbs the jaggery perfectly for a rich filling.",
    image: "/recipes/coconut-ada-placeholder.jpg",
    prepTime: "20 mins",
    cookTime: "20 mins",
    servings: "4",
    difficulty: "Medium",
    ingredients: [
      "1 cup roasted rice flour",
      "1.5 cups Maharani Coconut Powder",
      "3/4 cup warm water (for rehydration)",
      "1 cup jaggery, grated",
      "1/2 tsp cardamom powder",
      "Boiling water and salt for dough",
      "Banana leaves for wrapping"
    ],
    steps: [
      "01 — Prepare the filling: Rehydrate the Maharani Coconut Powder with warm water. In a pan, melt jaggery with a splash of water, add the rehydrated coconut and cardamom. Cook until the mixture comes together and moisture evaporates. Let it cool.",
      "02 — Prepare dough: Mix boiling water and salt into the rice flour to form a smooth, soft dough.",
      "03 — Shape: Wilt banana leaf squares over a flame to make them pliable. Flatten a lemon-sized ball of dough thinly on the leaf.",
      "04 — Fill and fold: Place 2 tablespoons of the coconut-jaggery filling on one half of the flattened dough. Fold the banana leaf in half to seal the ada.",
      "05 — Steam: Steam the wrapped adas for 15-20 minutes. Serve warm."
    ]
  },
  {
    slug: "coconut-kozhukatta",
    title: "Sweet Kozhukatta",
    category: "Breakfast & Snacks",
    description: "Steamed rice dumplings with a sweet coconut filling. The fine texture of Maharani Coconut Powder makes the filling dense and flavorful.",
    image: "/recipes/coconut-kozhukatta-placeholder.jpg",
    prepTime: "20 mins",
    cookTime: "15 mins",
    servings: "4",
    difficulty: "Medium",
    ingredients: [
      "1 cup roasted rice flour",
      "1 cup Maharani Coconut Powder",
      "1/2 cup warm water (for rehydration)",
      "3/4 cup grated jaggery",
      "1/2 tsp cardamom powder",
      "Boiling water and salt for dough"
    ],
    steps: [
      "01 — Prepare the filling: Rehydrate the Maharani Coconut Powder. Melt jaggery in a pan, add the rehydrated coconut and cardamom. Cook until thick. Roll into small marble-sized balls once cool.",
      "02 — Prepare dough: Make a soft dough by mixing boiling water and salt into the rice flour.",
      "03 — Shape: Take a small portion of the dough, flatten it into a cup shape in your palm, place the sweet coconut ball inside, and seal completely, rolling it into a smooth round dumpling.",
      "04 — Steam: Place the dumplings in a steamer and steam for 12-15 minutes.",
      "05 — Finish and serve: Serve warm as an evening snack."
    ]
  },
  {
    slug: "coconut-ladoo",
    title: "Instant Coconut Ladoo",
    category: "Sweets & Desserts",
    description: "A quick, 3-ingredient sweet. Dry desiccated coconut powder is perfect for this, rolling easily and providing excellent texture.",
    image: "/recipes/coconut-ladoo-placeholder.jpg",
    prepTime: "5 mins",
    cookTime: "10 mins",
    servings: "10 ladoos",
    difficulty: "Easy",
    ingredients: [
      "2 cups Maharani Coconut Powder (plus 1/4 cup for rolling)",
      "1 cup sweetened condensed milk",
      "1/2 tsp cardamom powder",
      "1 tsp ghee"
    ],
    steps: [
      "01 — Roast coconut: Heat ghee in a pan on low flame. Add 2 cups of dry Maharani Coconut Powder. Roast gently for 2 minutes until aromatic (do not brown).",
      "02 — Add condensed milk: Pour in the sweetened condensed milk and cardamom powder. Stir continuously on low heat.",
      "03 — Cook: Cook until the mixture thickens and starts leaving the sides of the pan (about 5 minutes). Remove from heat.",
      "04 — Shape: Once the mixture is warm enough to handle, grease your palms and roll it into round ladoos.",
      "05 — Finish and serve: Roll each ladoo in the reserved dry coconut powder to coat the outside. Store in an airtight container."
    ]
  },
  {
    slug: "coconut-burfi",
    title: "Classic Coconut Burfi",
    category: "Sweets & Desserts",
    description: "A traditional square fudge. The consistency of Maharani Coconut Powder ensures a smooth cut and uniform texture.",
    image: "/recipes/coconut-burfi-placeholder.jpg",
    prepTime: "10 mins",
    cookTime: "20 mins",
    servings: "12 pieces",
    difficulty: "Medium",
    ingredients: [
      "2 cups Maharani Coconut Powder",
      "1 cup warm water (for rehydration)",
      "1.5 cups sugar",
      "1/2 cup milk",
      "1/2 tsp cardamom powder",
      "2 tbsp ghee"
    ],
    steps: [
      "01 — Prepare the coconut: Rehydrate the Maharani Coconut Powder with 1 cup warm water. Let it rest for 10 minutes.",
      "02 — Cook: In a heavy-bottomed pan, combine the rehydrated coconut, sugar, and milk. Cook on medium heat, stirring continuously.",
      "03 — Thicken: As the mixture cooks, it will first become runny, then begin to thicken. Add ghee and cardamom powder.",
      "04 — Test for readiness: Cook until the mixture forms a single mass and leaves the sides of the pan.",
      "05 — Finish and serve: Pour the mixture onto a greased plate and flatten it evenly. Let it cool completely before cutting into square pieces."
    ]
  },
  {
    slug: "coconut-cookies",
    title: "Crispy Coconut Cookies",
    category: "Baking",
    description: "Bakery-style cookies where dry desiccated coconut provides crunch and intense coconut flavor.",
    image: "/recipes/coconut-cookies.jpg",
    prepTime: "15 mins",
    cookTime: "15 mins",
    servings: "15 cookies",
    difficulty: "Easy",
    ingredients: [
      "1 cup Maharani Coconut Powder (used dry)",
      "1 cup all-purpose flour",
      "1/2 cup unsalted butter, softened",
      "1/2 cup granulated sugar",
      "1/4 cup brown sugar",
      "1 egg",
      "1/2 tsp baking powder",
      "1/4 tsp salt"
    ],
    steps: [
      "01 — Cream butter: In a bowl, beat the softened butter and both sugars until light and fluffy. Add the egg and beat until combined.",
      "02 — Mix dry ingredients: In a separate bowl, whisk together the flour, dry Maharani Coconut Powder, baking powder, and salt.",
      "03 — Combine: Gradually add the dry ingredients into the wet mixture and mix until a dough forms.",
      "04 — Shape and bake: Roll the dough into 1-inch balls and place on a lined baking sheet. Flatten slightly. Bake at 180°C (350°F) for 12-15 minutes until edges are golden.",
      "05 — Finish and serve: Let cool on a wire rack to crisp up before serving."
    ]
  },
  {
    slug: "coconut-cake",
    title: "Moist Coconut Cake",
    category: "Baking",
    description: "A rich, moist sponge cake. Extracted thick coconut milk replaces regular milk for an intense coconut flavor, and dry powder adds texture.",
    image: "/recipes/coconut-cake.jpg",
    prepTime: "20 mins",
    cookTime: "35 mins",
    servings: "8",
    difficulty: "Medium",
    ingredients: [
      "1/2 cup Maharani Coconut Powder (dry, for folding into batter)",
      "1 cup Maharani Coconut Powder (for milk extraction)",
      "1 cup warm water (for milk extraction)",
      "1.5 cups all-purpose flour",
      "1 cup granulated sugar",
      "1/2 cup unsalted butter, softened",
      "2 eggs",
      "1.5 tsp baking powder",
      "1/4 tsp salt"
    ],
    steps: [
      "01 — Extract milk: Blend 1 cup of Maharani Coconut Powder with 1 cup warm water and strain to extract thick coconut milk (you need 1/2 cup of milk for the recipe).",
      "02 — Cream butter: Beat butter and sugar until pale and fluffy. Add eggs one at a time, beating well.",
      "03 — Combine dry and wet: Whisk flour, baking powder, and salt. Add dry ingredients to the butter mixture in three additions, alternating with the extracted coconut milk.",
      "04 — Fold in coconut: Gently fold in the 1/2 cup of dry Maharani Coconut Powder.",
      "05 — Bake: Pour batter into a greased 8-inch cake pan. Bake at 175°C (350°F) for 30-35 minutes until a skewer comes out clean. Cool before slicing."
    ]
  },
  {
    slug: "coconut-muffins",
    title: "Morning Coconut Muffins",
    category: "Baking",
    description: "Fluffy muffins perfect for breakfast. The coconut powder toasts lightly on top while keeping the inside moist.",
    image: "/recipes/coconut-muffins.jpg",
    prepTime: "15 mins",
    cookTime: "20 mins",
    servings: "12 muffins",
    difficulty: "Easy",
    ingredients: [
      "1 cup Maharani Coconut Powder (dry)",
      "2 cups all-purpose flour",
      "1/2 cup sugar",
      "1 tbsp baking powder",
      "1/2 tsp salt",
      "1 cup milk",
      "1/3 cup vegetable oil",
      "2 eggs",
      "1 tsp vanilla extract"
    ],
    steps: [
      "01 — Dry mix: In a large bowl, whisk together the flour, sugar, baking powder, salt, and 3/4 cup of the dry Maharani Coconut Powder.",
      "02 — Wet mix: In a separate bowl, whisk the milk, oil, eggs, and vanilla extract.",
      "03 — Combine: Pour the wet ingredients into the dry ingredients and stir just until combined (do not overmix).",
      "04 — Prep for baking: Divide the batter evenly into a lined 12-cup muffin tin. Sprinkle the remaining 1/4 cup of dry coconut powder over the tops of the muffins.",
      "05 — Bake: Bake at 200°C (400°F) for 18-20 minutes until a toothpick inserted in the center comes out clean. Cool on a wire rack."
    ]
  }
];

export const recipesTranslations: Record<string, Record<string, Partial<Recipe>>> = {
  "hi": {
    "kerala-pumpkin-erissery": {
      "title": "केरल कद्दू एरिसेरी",
      "description": "एक क्लासिक केरल डिश जिसमें मीठे कद्दू को भुने हुए नारियल के पेस्ट के साथ मिलाया जाता है।",
      "prepTime": "15 मिनट",
      "cookTime": "25 मिनट",
      "servings": "4",
      "ingredients": [
        "1.5 कप महारानी नारियल पाउडर",
        "3/4 कप गर्म पानी",
        "3 कप पीला कद्दू",
        "1/2 कप लोबिया",
        "हल्दी, मिर्च, जीरा",
        "करी पत्ता, नारियल का तेल"
      ],
      "steps": [
        "01 — नारियल तैयार करें: भिगोएं।",
        "02 — कद्दू पकाएं: कद्दू और लोबिया उबालें।",
        "03 — पेस्ट बनाएं: नारियल और जीरे का पेस्ट डालें।",
        "04 — नारियल भूनें: सूखे नारियल पाउडर को भूनें।",
        "05 — परोसें: भुना हुआ मिश्रण डालें।"
      ]
    },
    "kerala-vegetable-theeyal": {
      "title": "केरल वेजिटेबल थीयल",
      "description": "भुने हुए नारियल और मसालों से बनी एक डार्क ग्रेवी।",
      "prepTime": "15 मिनट",
      "cookTime": "30 मिनट",
      "servings": "4",
      "ingredients": [
        "1 कप महारानी नारियल पाउडर",
        "2 कप मिश्रित सब्जियां",
        "इमली का पानी",
        "धनिया, मिर्च, हल्दी",
        "मेथी पाउडर, तेल, नमक"
      ],
      "steps": [
        "01 — नारियल भूनें: नारियल पाउडर को भूनें।",
        "02 — मसाले डालें: सूखे मसाले मिलाएं।",
        "03 — पेस्ट बनाएं: पेस्ट बना लें।",
        "04 — सब्जियां पकाएं: सब्जियां उबालें।",
        "05 — मिलाएं: पेस्ट डालकर पकाएं।",
        "06 — परोसें: गरमागरम परोसें।"
      ]
    },
    "coconut-based-vegetable-curry": {
      "title": "कोकोनट वेजिटेबल करी",
      "description": "रोजमर्रा की सब्जी जिसमें नारियल का पेस्ट इस्तेमाल होता है।",
      "prepTime": "15 मिनट",
      "cookTime": "20 मिनट",
      "servings": "4",
      "ingredients": [
        "1 कप महारानी नारियल पाउडर",
        "2 कप सब्जियां",
        "प्याज, टमाटर, अदरक-लहसुन",
        "गरम मसाला, हल्दी, तेल"
      ],
      "steps": [
        "01 — नारियल तैयार करें: पेस्ट बनाएं।",
        "02 — तड़का: प्याज और टमाटर भूनें।",
        "03 — सब्जियां पकाएं: सब्जियां उबालें।",
        "04 — मिलाएं: नारियल पेस्ट डालें।",
        "05 — परोसें: धनिया से गार्निश करें।"
      ]
    },
    "kerala-style-coconut-chutney": {
      "title": "केरल स्टाइल नारियल की चटनी",
      "description": "डोसा और इडली के साथ क्लासिक चटनी।",
      "prepTime": "10 मिनट",
      "cookTime": "5 मिनट",
      "servings": "4",
      "ingredients": [
        "1 कप महारानी नारियल पाउडर",
        "हरी मिर्च, अदरक",
        "भुना हुआ चना",
        "राई, सूखी लाल मिर्च",
        "करी पत्ता, तेल, नमक"
      ],
      "steps": [
        "01 — नारियल तैयार करें: नारियल पाउडर भिगोएं।",
        "02 — चटनी पीसें: सभी सामग्री पीस लें।",
        "03 — तड़का: राई और मिर्च का तड़का लगाएं।",
        "04 — परोसें: चटनी में तड़का मिलाएं।"
      ]
    },
    "coconut-appam": {
      "title": "सॉफ्ट कोकोनट अप्पम",
      "description": "केरल के मुलायम अप्पम, नारियल के दूध के साथ।",
      "prepTime": "8 घंटे",
      "cookTime": "20 मिनट",
      "servings": "4",
      "ingredients": [
        "2 कप कच्चे चावल",
        "1.5 कप महारानी नारियल पाउडर",
        "ยีस्ट, चीनी, नमक"
      ],
      "steps": [
        "01 — दूध निकालें: नारियल का दूध निकालें।",
        "02 — बैटर बनाएं: चावल के साथ पीस लें।",
        "03 — खमीर: 8 घंटे खमीर उठने दें।",
        "04 — पकाएं: अप्पम पैन में पकाएं।",
        "05 — परोसें: स्टू के साथ परोसें।"
      ]
    },
    "coconut-puttu": {
      "title": "कोकोनट पुट्टू",
      "description": "चावल के आटे और नारियल से बना स्टीम्ड नाश्ता।",
      "prepTime": "15 मिनट",
      "cookTime": "15 मिनट",
      "servings": "3",
      "ingredients": [
        "2 कप पुट्टू आटा",
        "1 कप महारानी नारियल पाउडर",
        "नमक और पानी"
      ],
      "steps": [
        "01 — नारियल: नारियल भिगोएं।",
        "02 — आटा: आटे में पानी मिलाएं।",
        "03 — लेयर: पुट्टू मेकर में भरें।",
        "04 — भाप: 5-7 मिनट भाप में पकाएं।",
        "05 — परोसें: गरमागरम परोसें।"
      ]
    },
    "coconut-idiyappam": {
      "title": "कोकोनट इडियप्पम",
      "description": "नारियल के साथ स्टीम्ड राइस नूडल्स।",
      "prepTime": "15 मिनट",
      "cookTime": "15 मिनट",
      "servings": "4",
      "ingredients": [
        "2 कप भुना हुआ चावल का आटा",
        "1 कप महारानी नारियल पाउडर",
        "गर्म पानी, तेल, नमक"
      ],
      "steps": [
        "01 — नारियल: नारियल भिगोएं।",
        "02 — आटा गूंथें: गर्म पानी से आटा गूंथें।",
        "03 — प्रेस: इडियप्पम प्रेस का उपयोग करें।",
        "04 — भाप: 8-10 मिनट भाप में पकाएं।",
        "05 — परोसें: स्टू के साथ परोसें।"
      ]
    },
    "coconut-unniyappam": {
      "title": "स्वीट उन्नीअप्पम",
      "description": "नारियल और गुड़ से बने पारंपरिक मीठे पकोड़े।",
      "prepTime": "30 मिनट",
      "cookTime": "20 मिनट",
      "servings": "6",
      "ingredients": [
        "1 कप चावल का आटा",
        "1/2 कप महारानी नारियल पाउडर",
        "1 कप गुड़, 2 केले",
        "इलायची, बेकिंग सोडा, तेल"
      ],
      "steps": [
        "01 — बैटर: बैटर तैयार करें।",
        "02 — नारियल डालें: नारियल पाउडर मिलाएं।",
        "03 — पैन गरम करें: अप्पे पैन गरम करें।",
        "04 — तलें: सुनहरा होने तक तलें।",
        "05 — परोसें: परोसें।"
      ]
    },
    "coconut-ada": {
      "title": "कोकोनट एला अडा",
      "description": "नारियल और गुड़ से भरा स्टीम्ड राइस पार्सल।",
      "prepTime": "20 मिनट",
      "cookTime": "20 मिनट",
      "servings": "4",
      "ingredients": [
        "1 कप चावल का आटा",
        "1.5 कप महारानी नारियल पाउडर",
        "1 कप गुड़, इलायची",
        "केले के पत्ते"
      ],
      "steps": [
        "01 — फिलिंग: नारियल और गुड़ की फिलिंग बनाएं।",
        "02 — आटा: चावल का आटा गूंथें।",
        "03 — आकार दें: पत्ते पर फैलाएं।",
        "04 — भरें: फिलिंग डालकर मोड़ें।",
        "05 — भाप: 15-20 मिनट भाप में पकाएं।"
      ]
    },
    "coconut-kozhukatta": {
      "title": "स्वीट कोझुकट्टा",
      "description": "नारियल की स्टफिंग वाले स्टीम्ड राइस डंपलिंग्स।",
      "prepTime": "20 मिनट",
      "cookTime": "15 मिनट",
      "servings": "4",
      "ingredients": [
        "1 कप चावल का आटा",
        "1 कप महारानी नारियल पाउडर",
        "3/4 कप गुड़, इलायची"
      ],
      "steps": [
        "01 — फिलिंग: नारियल और गुड़ की गोलियां बनाएं।",
        "02 — आटा: आटा गूंथें।",
        "03 — आकार दें: गोलियों को आटे में भरें।",
        "04 — भाप: 12-15 मिनट भाप में पकाएं।",
        "05 — परोसें: स्नैक के रूप में परोसें।"
      ]
    },
    "coconut-ladoo": {
      "title": "इंस्टेंट कोकोनट लड्डू",
      "description": "3-सामग्री वाला झटपट मीठा व्यंजन।",
      "prepTime": "5 मिनट",
      "cookTime": "10 मिनट",
      "servings": "10 लड्डू",
      "ingredients": [
        "2 कप महारानी नारियल पाउडर",
        "1 कप कंडेंस्ड मिल्क",
        "इलायची, घी"
      ],
      "steps": [
        "01 — भूनें: नारियल पाउडर हल्का भूनें।",
        "02 — दूध मिलाएं: कंडेंस्ड मिल्क डालें।",
        "03 — पकाएं: गाढ़ा होने तक पकाएं।",
        "04 — आकार दें: लड्डू बनाएं।",
        "05 — परोसें: सूखे नारियल में लपेटें।"
      ]
    },
    "coconut-burfi": {
      "title": "क्लासिक कोकोनट बर्फी",
      "description": "पारंपरिक चौकोर बर्फी।",
      "prepTime": "10 मिनट",
      "cookTime": "20 मिनट",
      "servings": "12 टुकड़े",
      "ingredients": [
        "2 कप महारानी नारियल पाउडर",
        "1.5 कप चीनी",
        "1/2 कप दूध",
        "इलायची, घी"
      ],
      "steps": [
        "01 — नारियल: नारियल भिगोएं।",
        "02 — पकाएं: चीनी और दूध के साथ पकाएं।",
        "03 — गाढ़ा करें: घी और इलायची डालें।",
        "04 — जांचें: एकसार होने तक पकाएं।",
        "05 — परोसें: प्लेट में फैलाकर काट लें।"
      ]
    },
    "coconut-cookies": {
      "title": "क्रिस्पी कोकोनट कुकीज़",
      "description": "सूखे नारियल पाउडर के साथ बेकरी जैसी कुकीज़।",
      "prepTime": "15 मिनट",
      "cookTime": "15 मिनट",
      "servings": "15 कुकीज़",
      "ingredients": [
        "1 कप महारानी नारियल पाउडर",
        "1 कप मैदा",
        "1/2 कप मक्खन, 1/2 कप चीनी",
        "अंडा, बेकिंग पाउडर, नमक"
      ],
      "steps": [
        "01 — मक्खन फेंटें: मक्खन और चीनी फेंटें।",
        "02 — सूखा मिश्रण: मैदा और नारियल मिलाएं।",
        "03 — मिलाएं: दोनों को मिलाएं।",
        "04 — बेक करें: 180°C पर 12-15 मिनट बेक करें।",
        "05 — परोसें: ठंडा होने दें।"
      ]
    },
    "coconut-cake": {
      "title": "मोइस्ट कोकोनट केक",
      "description": "नारियल के दूध से बना एक रिच स्पंज केक।",
      "prepTime": "20 मिनट",
      "cookTime": "35 मिनट",
      "servings": "8",
      "ingredients": [
        "1.5 कप महारानी नारियल पाउडर",
        "1.5 कप मैदा",
        "1 कप चीनी, 1/2 कप मक्खन",
        "2 अंडे, बेकिंग पाउडर"
      ],
      "steps": [
        "01 — दूध निकालें: नारियल का दूध निकालें।",
        "02 — मक्खन फेंटें: मक्खन और चीनी फेंटें।",
        "03 — मिलाएं: सूखा मिश्रण और दूध मिलाएं।",
        "04 — नारियल डालें: सूखा नारियल डालें।",
        "05 — बेक करें: 175°C पर 30-35 मिनट बेक करें।"
      ]
    },
    "coconut-muffins": {
      "title": "मॉर्निंग कोकोनट मफिन्स",
      "description": "नाश्ते के लिए परफेक्ट मफिन्स।",
      "prepTime": "15 मिनट",
      "cookTime": "20 मिनट",
      "servings": "12 मफिन्स",
      "ingredients": [
        "1 कप महारानी नारियल पाउडर",
        "2 कप मैदा",
        "1/2 कप चीनी, बेकिंग पाउडर",
        "दूध, तेल, 2 अंडे, वैनिला"
      ],
      "steps": [
        "01 — सूखा मिश्रण: मैदा और नारियल मिलाएं।",
        "02 — गीला मिश्रण: अंडे और दूध फेंटें।",
        "03 — मिलाएं: दोनों को मिलाएं।",
        "04 — मफिन टिन: मफिन टिन में डालें।",
        "05 — बेक करें: 200°C पर 18-20 मिनट बेक करें।"
      ]
    },
    "traditional-thoran": {
      "title": "पारंपरिक थोरन",
      "description": "सब्जियों और मसालों के साथ सीधे भूनें एक प्रामाणिक साइड डिश के लिए।",
      "prepTime": "15 मिनट",
      "cookTime": "10 मिनट",
      "servings": "4",
      "ingredients": [
        "1 कप महारानी नारियल पाउडर",
        "1/2 कप गर्म पानी (भिगोने के लिए)",
        "2 कप कटी हुई सब्जियां (पत्ता गोभी, बीन्स या गाजर)",
        "1 चम्मच राई",
        "1/2 चम्मच जीरा",
        "2-3 हरी मिर्च, बीच से कटी हुई",
        "1 टहनी करी पत्ता",
        "1/4 चम्मच हल्दी पाउडर",
        "1 बड़ा चम्मच नारियल का तेल",
        "नमक स्वादानुसार"
      ],
      "steps": [
        "01 — नारियल तैयार करें: 1 कप महारानी नारियल पाउडर को 1/2 कप गर्म पानी के साथ धीरे से मिलाएं। इसे 10-15 मिनट तक रहने दें।",
        "02 — तड़का: मध्यम आँच पर एक पैन में नारियल का तेल गरम करें। राई डालें और चटकने दें, फिर जीरा, कटी हुई हरी मिर्च और करी पत्ता डालें। खुशबू आने तक भूनें।",
        "03 — सब्जियां पकाएं: बारीक कटी हुई सब्जियां, हल्दी पाउडर और नमक डालें। अच्छी तरह मिलाएं। पैन को ढक दें और सब्जियों के नरम होने तक धीमी आँच पर पकाएं। क्रंच बनाए रखने के लिए अतिरिक्त पानी न डालें।",
        "04 — मिलाएं: पकी हुई सब्जियों में भिगोया हुआ नारियल डालें। अच्छी तरह मिलाएं और स्वाद को मिलाने के लिए 2 मिनट तक और पकाएं।",
        "05 — परोसें: आँच से उतारें और गरमागरम परोसें।"
      ],
      "tips": [
        "अतिरिक्त स्वाद के लिए, पैन में डालने से पहले जीरा और हरी मिर्च को एक साथ हल्का कुचल लें।"
      ],
      "servingSuggestion": "गर्म केरल मट्टा चावल और परिप्पु (दाल) करी के साथ सबसे अच्छा परोसा जाता है।"
    },
    "kerala-avial": {
      "title": "केरल अवियल",
      "description": "एक प्रमुख मिश्रित सब्जी डिश जहां भिगोया हुआ नारियल मलाईदार आधार बनाता है। स्वाद बढ़ाता है और प्रामाणिक समृद्धि जोड़ता है।",
      "prepTime": "20 मिनट",
      "cookTime": "20 मिनट",
      "servings": "5",
      "ingredients": [
        "1.5 कप महारानी नारियल पाउडर",
        "3/4 कप गर्म पानी",
        "3 कप मिश्रित सब्जियां (जिमीकंद, कच्चा केला, गाजर, बीन्स, सहजन, पेठा)",
        "1 चम्मच जीरा",
        "4-5 हरी मिर्च",
        "1/2 चम्मच हल्दी पाउडर",
        "1/2 कप गाढ़ा खट्टा दही",
        "2 बड़े चम्मच नारियल का तेल",
        "1 टहनी करी पत्ता",
        "नमक स्वादानुसार"
      ],
      "steps": [
        "01 — सब्जियां तैयार करें: सब्जियों को लंबे टुकड़ों में काट लें। उन्हें हल्दी, नमक और थोड़े पानी के साथ पकाएं।",
        "02 — नारियल तैयार करें: 1.5 कप महारानी नारियल पाउडर को 3/4 कप गर्म पानी के साथ भिगोएं और 10 मिनट के लिए रख दें।",
        "03 — पेस्ट बनाएं: भिगोए हुए नारियल, हरी मिर्च और जीरे का दरदरा पेस्ट बना लें। पीसते समय ज्यादा पानी न डालें।",
        "04 — मिलाएं और पकाएं: पकी हुई सब्जियों में नारियल का पेस्ट डालें। धीरे से मिलाएं। 3-4 मिनट तक पकाएं।",
        "05 — परोसें: आँच से उतारकर थोड़ा ठंडा होने दें। फेंटा हुआ दही डालें। कच्चा नारियल तेल और करी पत्ता डालकर परोसें।"
      ],
      "tips": [
        "दही डालने के बाद अवियल को कभी न उबालें, इससे दही फट जाएगा और बनावट खराब हो जाएगी।"
      ],
      "servingSuggestion": "केरल साध्या के लिए एक आवश्यक पारंपरिक साइड डिश।"
    },
    "coconut-stew": {
      "title": "केरल कोकोनट स्टू",
      "description": "स्वादिष्ट स्टू के लिए पाउडर से समृद्ध नारियल का दूध निकालें।",
      "prepTime": "20 मिनट",
      "cookTime": "25 मिनट",
      "servings": "4",
      "ingredients": [
        "1 कप महारानी नारियल पाउडर",
        "1.5 कप गर्म पानी (गाढ़े दूध के लिए)",
        "1 कप गर्म पानी (पतले दूध के लिए)",
        "2 कप मिश्रित सब्जियां",
        "1 बड़ा प्याज, कटा हुआ",
        "2-3 हरी मिर्च",
        "1 इंच अदरक",
        "साबुत मसाले",
        "1 टहनी करी पत्ता",
        "2 बड़े चम्मच नारियल तेल",
        "नमक स्वादानुसार"
      ],
      "steps": [
        "01 — दूध निकालें: गाढ़ा और पतला नारियल का दूध निकालें।",
        "02 — तड़का: तेल गरम करें, मसाले, प्याज, मिर्च और अदरक भूनें।",
        "03 — सब्जियां पकाएं: सब्जियां और पतला नारियल का दूध डालें। नरम होने तक पकाएं।",
        "04 — मिलाएं: गाढ़ा दूध डालें और धीमी आँच पर गरम करें। उबालें नहीं।",
        "05 — परोसें: गरमागरम परोसें।"
      ],
      "tips": [
        "अधिक मलाईदार स्टू के लिए काजू का पेस्ट डालें।"
      ],
      "servingSuggestion": "अप्पम या इडियप्पम के साथ उत्तम।"
    },
    "payasam": {
      "title": "प्रामाणिक पायसम",
      "description": "पारंपरिक मीठे व्यंजन बनाने के लिए।",
      "prepTime": "10 मिनट",
      "cookTime": "30 मिनट",
      "servings": "6",
      "ingredients": [
        "1.5 कप महारानी नारियल पाउडर",
        "2.5 कप गर्म पानी",
        "1 कप भुनी हुई सेवई",
        "1.5 कप गुड़",
        "1/2 चम्मच इलायची पाउडर",
        "काजू और किशमिश",
        "2 बड़े चम्मच घी"
      ],
      "steps": [
        "01 — दूध निकालें: नारियल का दूध निकालें।",
        "02 — गुड़ तैयार करें: गुड़ को पिघलाकर छान लें।",
        "03 — सेवई पकाएं: सेवई को पतले दूध में पकाएं।",
        "04 — मिलाएं: गुड़ डालकर गाढ़ा होने तक पकाएं।",
        "05 — दूध डालें: गाढ़ा नारियल का दूध और इलायची डालें।",
        "06 — गार्निश: काजू और किशमिश घी में भूनकर डालें।"
      ],
      "tips": [
        "पारंपरिक स्वाद के लिए एक चुटकी सोंठ डालें।"
      ],
      "servingSuggestion": "भोजन के बाद मिठाई के रूप में परोसें।"
    },
    "kerala-cabbage-thoran": {
      "title": "केरल कैबेज थोरन",
      "description": "एक त्वरित साइड डिश।",
      "prepTime": "10 मिनट",
      "cookTime": "10 मिनट",
      "servings": "4",
      "ingredients": [
        "3/4 कप महारानी नारियल पाउडर",
        "1/3 कप गर्म पानी",
        "3 कप पत्ता गोभी",
        "राई और जीरा",
        "हल्दी, मिर्च, करी पत्ता",
        "तेल और नमक"
      ],
      "steps": [
        "01 — नारियल तैयार करें: नारियल पाउडर को भिगोएं।",
        "02 — तड़का: तेल गरम करें और तड़का लगाएं।",
        "03 — गोभी पकाएं: गोभी, हल्दी और नमक डालें। 5 मिनट तक पकाएं।",
        "04 — मिलाएं: भिगोया हुआ नारियल डालें और 2 मिनट पकाएं।",
        "05 — परोसें: गरमागरम परोसें।"
      ],
      "servingSuggestion": "चावल के साथ परोसें।"
    }
  },
  "ml": {
    "kerala-pumpkin-erissery": {
      "title": "മത്തങ്ങ എരിശ്ശേരി",
      "description": "മത്തങ്ങയും വറുത്ത തേങ്ങയും ചേർത്ത പരമ്പരാഗത കേരള വിഭവം.",
      "prepTime": "15 മിനിറ്റ്",
      "cookTime": "25 മിനിറ്റ്",
      "servings": "4",
      "ingredients": [
        "1.5 കപ്പ് മഹാറാണി കോക്കനട്ട് പൗഡർ",
        "മത്തങ്ങ, വൻപയർ, മഞ്ഞൾ",
        "മുളക്, ജീരകം, കറിവേപ്പില, എണ്ണ"
      ],
      "steps": [
        "01 — തേങ്ങ: കുതിർക്കുക.",
        "02 — മത്തങ്ങ: വേവിക്കുക.",
        "03 — അരപ്പ്: തേങ്ങ അരച്ച് ചേർക്കുക.",
        "04 — വറവ്: തേങ്ങ വറുത്തിടുക.",
        "05 — വിളമ്പുക."
      ]
    },
    "kerala-vegetable-theeyal": {
      "title": "പച്ചക്കറി തീയൽ",
      "description": "വറുത്ത തേങ്ങ ചേർത്ത സ്വാദിഷ്ടമായ കറി.",
      "prepTime": "15 മിനിറ്റ്",
      "cookTime": "30 മിനിറ്റ്",
      "servings": "4",
      "ingredients": [
        "1 കപ്പ് മഹാറാണി കോക്കനട്ട് പൗഡർ",
        "പച്ചക്കറികൾ, പുളി, മല്ലിപ്പൊടി",
        "മുളകുപൊടി, മഞ്ഞൾ, ഉലുവ"
      ],
      "steps": [
        "01 — വറക്കുക: തേങ്ങ വറുക്കുക.",
        "02 — മസാല: പൊടികൾ ചേർക്കുക.",
        "03 — അരക്കുക: അരച്ചെടുക്കുക.",
        "04 — പച്ചക്കറി: വേവിക്കുക.",
        "05 — യോജിപ്പിക്കുക: അരപ്പ് ചേർത്ത് തിളപ്പിക്കുക."
      ]
    },
    "coconut-based-vegetable-curry": {
      "title": "തേങ്ങാ അരച്ച വെജിറ്റബിൾ കറി",
      "description": "തേങ്ങാപ്പേസ്റ്റ് ഉപയോഗിച്ചുള്ള സാധാരണ കറി.",
      "prepTime": "15 മിനിറ്റ്",
      "cookTime": "20 മിനിറ്റ്",
      "servings": "4",
      "ingredients": [
        "1 കപ്പ് മഹാറാണി കോക്കനട്ട് പൗഡർ",
        "പച്ചക്കറികൾ, സവാള, തക്കാളി",
        "ഗരം മസാല, മഞ്ഞൾ, എണ്ണ"
      ],
      "steps": [
        "01 — തേങ്ങ: അരച്ചെടുക്കുക.",
        "02 — വഴറ്റുക: സവാള വഴറ്റുക.",
        "03 — പച്ചക്കറി: വേവിക്കുക.",
        "04 — യോജിപ്പിക്കുക: അരപ്പ് ചേർക്കുക.",
        "05 — വിളമ്പുക."
      ]
    },
    "kerala-style-coconut-chutney": {
      "title": "തേങ്ങാ ചമ്മന്തി",
      "description": "ഇഡ്ഡലിക്കും ദോശയ്ക്കുമൊപ്പമുള്ള നാടൻ ചമ്മന്തി.",
      "prepTime": "10 മിനിറ്റ്",
      "cookTime": "5 മിനിറ്റ്",
      "servings": "4",
      "ingredients": [
        "1 കപ്പ് മഹാറാണി കോക്കനട്ട് പൗഡർ",
        "പച്ചമുളക്, ഇഞ്ചി, പൊട്ടുകടല",
        "കടുക്, വറ്റൽമുളക്, കറിവേപ്പില"
      ],
      "steps": [
        "01 — തേങ്ങ: കുതിർക്കുക.",
        "02 — അരക്കുക: ചമ്മന്തി അരക്കുക.",
        "03 — വറവ്: കടുക് വറുക്കുക.",
        "04 — വിളമ്പുക: യോജിപ്പിക്കുക."
      ]
    },
    "coconut-appam": {
      "title": "സോഫ്റ്റ് അപ്പം",
      "description": "തേങ്ങാപ്പാൽ ചേർത്ത മൃദുവായ അപ്പം.",
      "prepTime": "8 മണിക്കൂർ",
      "cookTime": "20 മിനിറ്റ്",
      "servings": "4",
      "ingredients": [
        "2 കപ്പ് പച്ചരി",
        "1.5 കപ്പ് മഹാറാണി കോക്കനട്ട് പൗഡർ",
        "യീസ്റ്റ്, പഞ്ചസാര, ഉപ്പ്"
      ],
      "steps": [
        "01 — പാൽ: തേങ്ങാപ്പാൽ എടുക്കുക.",
        "02 — മാവ്: അരി അരക്കുക.",
        "03 — പുളിപ്പിക്കുക: 8 മണിക്കൂർ വെക്കുക.",
        "04 — ചുട്ടെടുക്കുക: അപ്പച്ചട്ടിയിൽ ചുട്ടെടുക്കുക."
      ]
    },
    "coconut-puttu": {
      "title": "തേങ്ങാ പുട്ട്",
      "description": "അരിപ്പൊടിയും തേങ്ങയും ചേർത്ത പുട്ട്.",
      "prepTime": "15 മിനിറ്റ്",
      "cookTime": "15 മിനിറ്റ്",
      "servings": "3",
      "ingredients": [
        "2 കപ്പ് പുട്ടുപൊടി",
        "1 കപ്പ് മഹാറാണി കോക്കനട്ട് പൗഡർ",
        "ഉപ്പ്, വെള്ളം"
      ],
      "steps": [
        "01 — തേങ്ങ: കുതിർക്കുക.",
        "02 — പൊടി: നനച്ചെടുക്കുക.",
        "03 — നിറക്കുക: പുട്ടുകുറ്റിയിൽ നിറക്കുക.",
        "04 — ആവി: ആവികയറ്റുക."
      ]
    },
    "coconut-idiyappam": {
      "title": "ഇടിയപ്പം",
      "description": "തേങ്ങ ചേർത്ത മൃദുവായ ഇടിയപ്പം.",
      "prepTime": "15 മിനിറ്റ്",
      "cookTime": "15 മിനിറ്റ്",
      "servings": "4",
      "ingredients": [
        "2 കപ്പ് വറുത്ത അരിപ്പൊടി",
        "1 കപ്പ് മഹാറാണി കോക്കനട്ട് പൗഡർ",
        "ചൂടുവെള്ളം, എണ്ണ, ഉപ്പ്"
      ],
      "steps": [
        "01 — തേങ്ങ: കുതിർക്കുക.",
        "02 — മാവ്: കുഴച്ചെടുക്കുക.",
        "03 — പിഴിയുക: ഇടിയപ്പച്ചട്ടകത്തിൽ പിഴിയുക.",
        "04 — ആവി: ആവികയറ്റുക."
      ]
    },
    "coconut-unniyappam": {
      "title": "ഉണ്ണിയപ്പം",
      "description": "തേങ്ങയും ശർക്കരയും ചേർത്ത ഉണ്ണിയപ്പം.",
      "prepTime": "30 മിനിറ്റ്",
      "cookTime": "20 മിനിറ്റ്",
      "servings": "6",
      "ingredients": [
        "1 കപ്പ് അരിപ്പൊടി",
        "1/2 കപ്പ് മഹാറാണി കോക്കനട്ട് പൗഡർ",
        "ശർക്കര, പഴം, ഏലക്ക, എണ്ണ"
      ],
      "steps": [
        "01 — മാവ്: തയ്യാറാക്കുക.",
        "02 — തേങ്ങ: ചേർക്കുക.",
        "03 — എണ്ണ: ചൂടാക്കുക.",
        "04 — വറുക്കുക: ഉണ്ണിയപ്പം ചുട്ടെടുക്കുക."
      ]
    },
    "coconut-ada": {
      "title": "ഇലയട",
      "description": "ഇലയിൽ ചുട്ടെടുത്ത മധുര പലഹാരം.",
      "prepTime": "20 മിനിറ്റ്",
      "cookTime": "20 മിനിറ്റ്",
      "servings": "4",
      "ingredients": [
        "1 കപ്പ് അരിപ്പൊടി",
        "1.5 കപ്പ് മഹാറാണി കോക്കനട്ട് പൗഡർ",
        "ശർക്കര, ഏലക്ക, വാഴയില"
      ],
      "steps": [
        "01 — കൂട്ട്: തേങ്ങയും ശർക്കരയും വരട്ടുക.",
        "02 — മാവ്: കുഴക്കുക.",
        "03 — പരത്തുക: ഇലയിൽ പരത്തുക.",
        "04 — നിറക്കുക: കൂട്ട് വെച്ച് മടക്കുക.",
        "05 — ആവി: ആവികയറ്റുക."
      ]
    },
    "coconut-kozhukatta": {
      "title": "കൊഴുക്കട്ട",
      "description": "മധുരമുള്ള തേങ്ങാക്കൂട്ട് നിറച്ച കൊഴുക്കട്ട.",
      "prepTime": "20 മിനിറ്റ്",
      "cookTime": "15 മിനിറ്റ്",
      "servings": "4",
      "ingredients": [
        "1 കപ്പ് അരിപ്പൊടി",
        "1 കപ്പ് മഹാറാണി കോക്കനട്ട് പൗഡർ",
        "ശർക്കര, ഏലക്ക"
      ],
      "steps": [
        "01 — കൂട്ട്: തയ്യാറാക്കി ഉരുളകളാക്കുക.",
        "02 — മാവ്: കുഴക്കുക.",
        "03 — നിറക്കുക: മാവിനുള്ളിൽ നിറക്കുക.",
        "04 — ആവി: ആവികയറ്റുക."
      ]
    },
    "coconut-ladoo": {
      "title": "തേങ്ങാ ലഡു",
      "description": "പെട്ടെന്ന് തയ്യാറാക്കാവുന്ന ലഡു.",
      "prepTime": "5 മിനിറ്റ്",
      "cookTime": "10 മിനിറ്റ്",
      "servings": "10 ലഡു",
      "ingredients": [
        "2 കപ്പ് മഹാറാണി കോക്കനട്ട് പൗഡർ",
        "കണ്ടൻസ്ഡ് മിൽക്ക്, ഏലക്ക"
      ],
      "steps": [
        "01 — വറക്കുക: തേങ്ങ വറക്കുക.",
        "02 — പാൽ: കണ്ടൻസ്ഡ് മിൽക്ക് ചേർക്കുക.",
        "03 — പാകം: കുറുക്കുക.",
        "04 — ഉരുട്ടുക: ലഡുവാക്കുക."
      ]
    },
    "coconut-burfi": {
      "title": "തേങ്ങാ ബർഫി",
      "description": "പരമ്പരാഗത തേങ്ങാ ബർഫി.",
      "prepTime": "10 മിനിറ്റ്",
      "cookTime": "20 മിനിറ്റ്",
      "servings": "12 കഷണങ്ങൾ",
      "ingredients": [
        "2 കപ്പ് മഹാറാണി കോക്കനട്ട് പൗഡർ",
        "പഞ്ചസാര, പാൽ, നെയ്യ്"
      ],
      "steps": [
        "01 — തേങ്ങ: കുതിർക്കുക.",
        "02 — പാകം: പഞ്ചസാരയും പാലും ചേർത്ത് വേവിക്കുക.",
        "03 — കുറുക്കുക: നെയ്യ് ചേർക്കുക.",
        "04 — മുറിക്കുക: പാത്രത്തിലാക്കി മുറിക്കുക."
      ]
    },
    "coconut-cookies": {
      "title": "തേങ്ങാ കുക്കീസ്",
      "description": "മൊരിഞ്ഞ കുക്കീസ്.",
      "prepTime": "15 മിനിറ്റ്",
      "cookTime": "15 മിനിറ്റ്",
      "servings": "15 കുക്കീസ്",
      "ingredients": [
        "1 കപ്പ് മഹാറാണി കോക്കനട്ട് പൗഡർ",
        "മൈദ, വെണ്ണ, പഞ്ചസാര",
        "മുട്ട, ബേക്കിംഗ് പൗഡർ"
      ],
      "steps": [
        "01 — വെണ്ണ: പതപ്പിക്കുക.",
        "02 — പൊടികൾ: യോജിപ്പിക്കുക.",
        "03 — മാവ്: കുഴക്കുക.",
        "04 — ബേക്ക് ചെയ്യുക."
      ]
    },
    "coconut-cake": {
      "title": "തേങ്ങാ കേക്ക്",
      "description": "മൃദുവായ തേങ്ങാ കേക്ക്.",
      "prepTime": "20 മിനിറ്റ്",
      "cookTime": "35 മിനിറ്റ്",
      "servings": "8",
      "ingredients": [
        "1.5 കപ്പ് മഹാറാണി കോക്കനട്ട് പൗഡർ",
        "മൈദ, പഞ്ചസാര, വെണ്ണ, മുട്ട"
      ],
      "steps": [
        "01 — പാൽ: എടുക്കുക.",
        "02 — വെണ്ണ: പതപ്പിക്കുക.",
        "03 — മാവ്: യോജിപ്പിക്കുക.",
        "04 — ബേക്ക് ചെയ്യുക."
      ]
    },
    "coconut-muffins": {
      "title": "തേങ്ങാ മഫിൻസ്",
      "description": "പ്രഭാതഭക്ഷണത്തിന് അനുയോജ്യം.",
      "prepTime": "15 മിനിറ്റ്",
      "cookTime": "20 മിനിറ്റ്",
      "servings": "12 മഫിൻസ്",
      "ingredients": [
        "1 കപ്പ് മഹാറാണി കോക്കനട്ട് പൗഡർ",
        "മൈദ, പഞ്ചസാര, പാൽ, മുട്ട"
      ],
      "steps": [
        "01 — പൊടികൾ: യോജിപ്പിക്കുക.",
        "02 — ദ്രാവകം: യോജിപ്പിക്കുക.",
        "03 — ചേർക്കുക: രണ്ടും കൂട്ടിച്ചേർക്കുക.",
        "04 — ബേക്ക് ചെയ്യുക."
      ]
    },
    "traditional-thoran": {
      "title": "നാടൻ തോരൻ",
      "description": "പച്ചക്കറികൾക്കും സുഗന്ധവ്യഞ്ജനങ്ങൾക്കുമൊപ്പം വറുത്തെടുക്കുന്ന രുചികരമായ ഒരു വിഭവം.",
      "prepTime": "15 മിനിറ്റ്",
      "cookTime": "10 മിനിറ്റ്",
      "servings": "4",
      "ingredients": [
        "1 കപ്പ് മഹാറാണി കോക്കനട്ട് പൗഡർ",
        "1/2 കപ്പ് ചൂടുവെള്ളം",
        "2 കപ്പ് പച്ചക്കറികൾ (ക്യാബേജ്, ബീൻസ് അല്ലെങ്കിൽ ക്യാരറ്റ്)",
        "1 ടീസ്പൂൺ കടുക്",
        "1/2 ടീസ്പൂൺ ജീരകം",
        "2-3 പച്ചമുളക്",
        "കറിവേപ്പില",
        "മഞ്ഞൾപൊടി, വെളിച്ചെണ്ണ, ഉപ്പ്"
      ],
      "steps": [
        "01 — തേങ്ങ തയ്യാറാക്കുക: തേങ്ങാപ്പൊടി ചൂടുവെള്ളത്തിൽ കലക്കി 10 മിനിറ്റ് വയ്ക്കുക.",
        "02 — വറവ്: എണ്ണ ചൂടാക്കി കടുക്, ജീരകം, പച്ചമുളക്, കറിവേപ്പില എന്നിവ മൂപ്പിക്കുക.",
        "03 — പച്ചക്കറി വേവിക്കുക: പച്ചക്കറികൾ ചേർത്ത് വേവിക്കുക.",
        "04 — യോജിപ്പിക്കുക: തയ്യാറാക്കിയ തേങ്ങ ചേർത്ത് നന്നായി ഇളക്കുക.",
        "05 — വിളമ്പുക: ചൂടോടെ വിളമ്പുക."
      ],
      "tips": [
        "ജീരകവും പച്ചമുളകും ചെറുതായി ചതച്ച് ചേർക്കുന്നത് രുചി കൂട്ടും."
      ],
      "servingSuggestion": "ചോറിനും പരിപ്പുകറിക്കുമൊപ്പം വിളമ്പുക."
    },
    "kerala-avial": {
      "title": "കേരള അവിയൽ",
      "description": "തേങ്ങ അരച്ചു ചേർത്ത പരമ്പരാഗത വിഭവം.",
      "prepTime": "20 മിനിറ്റ്",
      "cookTime": "20 മിനിറ്റ്",
      "servings": "5",
      "ingredients": [
        "1.5 കപ്പ് മഹാറാണി കോക്കനട്ട് പൗഡർ",
        "പച്ചക്കറികൾ (ചേന, കായ, ക്യാരറ്റ്, ബീൻസ്, മുരിങ്ങക്കాయ)",
        "ജീരകം, പച്ചമുളക്, മഞ്ഞൾപ്പൊടി",
        "തൈര്, വെളിച്ചെണ്ണ, ഉപ്പ്"
      ],
      "steps": [
        "01 — പച്ചക്കറി തയ്യാറാക്കുക: പച്ചക്കറികൾ വേവിക്കുക.",
        "02 — തേങ്ങ തയ്യാറാക്കുക: തേങ്ങാപ്പൊടി കുതിർക്കുക.",
        "03 — അരപ്പ്: തേങ്ങ, പച്ചമുളക്, ജീരകം എന്നിവ ചതച്ചെടുക്കുക.",
        "04 — യോജിപ്പിക്കുക: അരപ്പ് ചേർത്ത് വേവിക്കുക.",
        "05 — വിളമ്പുക: തൈരും വെളിച്ചെണ്ണയും കറിവേപ്പിലയും ചേർക്കുക."
      ],
      "tips": [
        "തൈര് ചേർത്ത ശേഷം തിളപ്പിക്കരുത്."
      ],
      "servingSuggestion": "സദ്യയ്ക്ക് ഒഴിച്ചുകൂടാനാവാത്ത വിഭവം."
    },
    "coconut-stew": {
      "title": "തേങ്ങാപ്പാൽ സ്റ്റ്യൂ",
      "description": "തേങ്ങാപ്പാൽ ചേർത്ത സ്വാദിഷ്ടമായ സ്റ്റ്യൂ.",
      "prepTime": "20 മിനിറ്റ്",
      "cookTime": "25 മിനിറ്റ്",
      "servings": "4",
      "ingredients": [
        "1 കപ്പ് മഹാറാണി കോക്കനട്ട് പൗഡർ",
        "വെള്ളം, പച്ചക്കറികൾ, സവാള",
        "പച്ചമുളക്, ഇഞ്ചി, ഗ്രാമ്പൂ, ഏലക്ക",
        "കറിവേപ്പില, എണ്ണ, ഉപ്പ്"
      ],
      "steps": [
        "01 — പാൽ എടുക്കുക: ഒന്നാം പാലും രണ്ടാം പാലും എടുക്കുക.",
        "02 — വറവ്: മസാലകളും സവാളയും വഴറ്റുക.",
        "03 — വേവിക്കുക: പച്ചക്കറികൾ രണ്ടാം പാലിൽ വേവിക്കുക.",
        "04 — യോജിപ്പിക്കുക: ഒന്നാം പാൽ ചേർത്ത് ചൂടാക്കുക.",
        "05 — വിളമ്പുക: ചൂടോടെ വിളമ്പുക."
      ],
      "tips": [
        "കുറച്ചു കശുവണ്ടി അരച്ചു ചേർത്താൽ രുചി കൂടും."
      ],
      "servingSuggestion": "അപ്പത്തിനും ഇടിയപ്പത്തിനും ഒപ്പം മികച്ചത്."
    },
    "payasam": {
      "title": "പായസം",
      "description": "തേങ്ങാപ്പാൽ ചേർത്ത പരമ്പരാഗത പായസം.",
      "prepTime": "10 മിനിറ്റ്",
      "cookTime": "30 മിനിറ്റ്",
      "servings": "6",
      "ingredients": [
        "1.5 കപ്പ് മഹാറാണി കോക്കനട്ട് പൗഡർ",
        "സേമിയ അല്ലെങ്കിൽ അട",
        "ശർക്കര, ഏലക്ക, അണ്ടിപ്പരിപ്പ്, മുന്തിരി, നെയ്യ്"
      ],
      "steps": [
        "01 — പാൽ എടുക്കുക: തേങ്ങാപ്പാൽ എടുക്കുക.",
        "02 — ശർക്കര: ശർക്കര ഉരുക്കി അരിച്ചെടുക്കുക.",
        "03 — വേവിക്കുക: സേമിയ വേവിക്കുക.",
        "04 — യോജിപ്പിക്കുക: ശർക്കര ചേർക്കുക.",
        "05 — ഒന്നാം പാൽ: ഒന്നാം പാൽ ചേർക്കുക.",
        "06 — അലങ്കരിക്കുക: അണ്ടിപ്പരിപ്പും മുന്തിരിയും വറുത്ത് ചേർക്കുക."
      ],
      "tips": [
        "ചുക്കുപൊടി ചേർത്താൽ രുചി വർദ്ധിക്കും."
      ],
      "servingSuggestion": "ഭക്ഷണത്തിനു ശേഷം വിളമ്പുക."
    },
    "kerala-cabbage-thoran": {
      "title": "ക്യാബേജ് തോരൻ",
      "description": "പെട്ടെന്ന് തയ്യാറാക്കാവുന്ന തോരൻ.",
      "prepTime": "10 മിനിറ്റ്",
      "cookTime": "10 മിനിറ്റ്",
      "servings": "4",
      "ingredients": [
        "3/4 കപ്പ് മഹാറാണി കോക്കനട്ട് പൗഡർ",
        "ക്യാബേജ്, കടുക്, ജീരകം",
        "മഞ്ഞൾ, പച്ചമുളക്, ഉപ്പ്, എണ്ണ"
      ],
      "steps": [
        "01 — തേങ്ങ: തേങ്ങാപ്പൊടി കുതിർക്കുക.",
        "02 — വറവ്: കടുക് വറുക്കുക.",
        "03 — വേവിക്കുക: ക്യാബേജ് വേവിക്കുക.",
        "04 — യോജിപ്പിക്കുക: തേങ്ങ ചേർക്കുക.",
        "05 — വിളമ്പുക: ചൂടോടെ വിളമ്പുക."
      ],
      "servingSuggestion": "ചോറിനൊപ്പം വിളമ്പുക."
    }
  },
  "ta": {
    "kerala-pumpkin-erissery": {
      "title": "பூசணி எரிசேரி",
      "description": "வறுத்த தேங்காய் மற்றும் பூசணிக்காய் சேர்த்த கேரளா உணவு.",
      "prepTime": "15 நிமிடம்",
      "cookTime": "25 நிமிடம்",
      "servings": "4",
      "ingredients": [
        "1.5 கப் மகாராணி தேங்காய் பொடி",
        "பூசணி, காராமணி, தேங்காய் எண்ணெய்"
      ],
      "steps": [
        "01 — தேங்காய்: ஊறவைக்கவும்.",
        "02 — பூசணி: சமைக்கவும்.",
        "03 — அரைக்கவும்: அரைத்து சேர்க்கவும்.",
        "04 — வறுக்கவும்: தேங்காய் வறுத்து சேர்க்கவும்."
      ]
    },
    "kerala-vegetable-theeyal": {
      "title": "காய்கறி தீயல்",
      "description": "வறுத்த தேங்காய் சேர்த்த சுவையான குழம்பு.",
      "prepTime": "15 நிமிடம்",
      "cookTime": "30 நிமிடம்",
      "servings": "4",
      "ingredients": [
        "1 கப் மகாராணி தேங்காய் பொடி",
        "காய்கறிகள், புளி, மசாலா பொடிகள்"
      ],
      "steps": [
        "01 — வறுக்கவும்: தேங்காய் வறுக்கவும்.",
        "02 — மசாலா: சேர்க்கவும்.",
        "03 — அரைக்கவும்: அரைக்கவும்.",
        "04 — சமைக்கவும்: சேர்க்கவும்."
      ]
    },
    "coconut-based-vegetable-curry": {
      "title": "தேங்காய் காய்கறி கறி",
      "description": "அன்றாட பயன்பாட்டிற்கு ஏற்ற கறி.",
      "prepTime": "15 நிமிடம்",
      "cookTime": "20 நிமிடம்",
      "servings": "4",
      "ingredients": [
        "1 கப் மகாராணி தேங்காய் பொடி",
        "காய்கறிகள், வெங்காயம், தக்காளி"
      ],
      "steps": [
        "01 — அரைக்கவும்.",
        "02 — வதக்கவும்.",
        "03 — சமைக்கவும்.",
        "04 — கலக்கவும்."
      ]
    },
    "kerala-style-coconut-chutney": {
      "title": "தேங்காய் சட்னி",
      "description": "இட்லி தோசைக்கு ஏற்ற சட்னி.",
      "prepTime": "10 நிமிடம்",
      "cookTime": "5 நிமிடம்",
      "servings": "4",
      "ingredients": [
        "1 கப் மகாராணி தேங்காய் பொடி",
        "பச்சை மிளகாய், இஞ்சி, தாளிப்பு"
      ],
      "steps": [
        "01 — ஊறவைக்கவும்.",
        "02 — அரைக்கவும்.",
        "03 — தாளிக்கவும்."
      ]
    },
    "coconut-appam": {
      "title": "மெதுவான ஆப்பம்",
      "description": "தேங்காய் பால் சேர்த்த ஆப்பம்.",
      "prepTime": "8 மணி",
      "cookTime": "20 நிமிடம்",
      "servings": "4",
      "ingredients": [
        "2 கப் பச்சரிசி",
        "1.5 கப் மகாராணி தேங்காய் பொடி",
        "ஈஸ்ட், சர்க்கரை"
      ],
      "steps": [
        "01 — பால் எடுக்கவும்.",
        "02 — மாவு அரைக்கவும்.",
        "03 — புளிக்க வைக்கவும்.",
        "04 — சுடவும்."
      ]
    },
    "coconut-puttu": {
      "title": "தேங்காய் புட்டு",
      "description": "அரிசி மாவு மற்றும் தேங்காய் புட்டு.",
      "prepTime": "15 நிமிடம்",
      "cookTime": "15 நிமிடம்",
      "servings": "3",
      "ingredients": [
        "2 கப் புட்டு மாவு",
        "1 கப் மகாராணி தேங்காய் பொடி",
        "உப்பு"
      ],
      "steps": [
        "01 — ஊறவைக்கவும்.",
        "02 — மாவு பிசையவும்.",
        "03 — நிரப்பவும்.",
        "04 — வேகவைக்கவும்."
      ]
    },
    "coconut-idiyappam": {
      "title": "இடியாப்பம்",
      "description": "தேங்காய் சேர்த்த இடியாப்பம்.",
      "prepTime": "15 நிமிடம்",
      "cookTime": "15 நிமிடம்",
      "servings": "4",
      "ingredients": [
        "2 கப் வறுத்த அரிசி மாவு",
        "1 கப் மகாராணி தேங்காய் பொடி"
      ],
      "steps": [
        "01 — ஊறவைக்கவும்.",
        "02 — மாவு பிசையவும்.",
        "03 — பிழியவும்.",
        "04 — வேகவைக்கவும்."
      ]
    },
    "coconut-unniyappam": {
      "title": "இனிப்பு பணியாரம்",
      "description": "தேங்காய் சேர்த்த பணியாரம்.",
      "prepTime": "30 நிமிடம்",
      "cookTime": "20 நிமிடம்",
      "servings": "6",
      "ingredients": [
        "1 கப் அரிசி மாவு",
        "1/2 கப் மகாராணி தேங்காய் பொடி",
        "வெல்லம், வாழைப்பழம்"
      ],
      "steps": [
        "01 — மாவு தயாரிக்கவும்.",
        "02 — பொரிக்கவும்."
      ]
    },
    "coconut-ada": {
      "title": "இலை அடை",
      "description": "இலையில் சுட்ட அடை.",
      "prepTime": "20 நிமிடம்",
      "cookTime": "20 நிமிடம்",
      "servings": "4",
      "ingredients": [
        "1 கப் அரிசி மாவு",
        "1.5 கப் மகாராணி தேங்காய் பொடி",
        "வெல்லம், இலை"
      ],
      "steps": [
        "01 — பூரணம்.",
        "02 — மாவு.",
        "03 — இலையில் மடிக்கவும்.",
        "04 — வேகவைக்கவும்."
      ]
    },
    "coconut-kozhukatta": {
      "title": "கொழுக்கட்டை",
      "description": "இனிப்பு கொழுக்கட்டை.",
      "prepTime": "20 நிமிடம்",
      "cookTime": "15 நிமிடம்",
      "servings": "4",
      "ingredients": [
        "1 கப் அரிசி மாவு",
        "1 கப் மகாராணி தேங்காய் பொடி",
        "வெல்லம்"
      ],
      "steps": [
        "01 — பூரணம்.",
        "02 — மாவு.",
        "03 — நிரப்பவும்.",
        "04 — வேகவைக்கவும்."
      ]
    },
    "coconut-ladoo": {
      "title": "தேங்காய் லட்டு",
      "description": "விரைவான லட்டு.",
      "prepTime": "5 நிமிடம்",
      "cookTime": "10 நிமிடம்",
      "servings": "10 லட்டு",
      "ingredients": [
        "2 கப் மகாராணி தேங்காய் பொடி",
        "கண்டன்ஸ்டு மில்க்"
      ],
      "steps": [
        "01 — வறுக்கவும்.",
        "02 — கலக்கவும்.",
        "03 — உருட்டவும்."
      ]
    },
    "coconut-burfi": {
      "title": "தேங்காய் பர்பி",
      "description": "பாரம்பரிய பர்பி.",
      "prepTime": "10 நிமிடம்",
      "cookTime": "20 நிமிடம்",
      "servings": "12 துண்டுகள்",
      "ingredients": [
        "2 கப் மகாராணி தேங்காய் பொடி",
        "சர்க்கரை, பால்"
      ],
      "steps": [
        "01 — ஊறவைக்கவும்.",
        "02 — சமைக்கவும்.",
        "03 — வெட்டவும்."
      ]
    },
    "coconut-cookies": {
      "title": "தேங்காய் குக்கீஸ்",
      "description": "மொறுமொறுப்பான குக்கீஸ்.",
      "prepTime": "15 நிமிடம்",
      "cookTime": "15 நிமிடம்",
      "servings": "15 குக்கீஸ்",
      "ingredients": [
        "1 கப் மகாராணி தேங்காய் பொடி",
        "மைதா, வெண்ணெய், சர்க்கரை"
      ],
      "steps": [
        "01 — கலக்கவும்.",
        "02 — மாவு பிசையவும்.",
        "03 — வேகவைக்கவும்."
      ]
    },
    "coconut-cake": {
      "title": "தேங்காய் கேக்",
      "description": "மெதுவான கேக்.",
      "prepTime": "20 நிமிடம்",
      "cookTime": "35 நிமிடம்",
      "servings": "8",
      "ingredients": [
        "1.5 கப் மகாராணி தேங்காய் பொடி",
        "மைதா, முட்டை, சர்க்கரை"
      ],
      "steps": [
        "01 — கலக்கவும்.",
        "02 — வேகவைக்கவும்."
      ]
    },
    "coconut-muffins": {
      "title": "தேங்காய் மஃபின்ஸ்",
      "description": "காலை உணவுக்கு ஏற்ற மஃபின்ஸ்.",
      "prepTime": "15 நிமிடம்",
      "cookTime": "20 நிமிடம்",
      "servings": "12",
      "ingredients": [
        "1 கப் மகாராணி தேங்காய் பொடி",
        "மைதா, பால், முட்டை"
      ],
      "steps": [
        "01 — கலக்கவும்.",
        "02 — வேகவைக்கவும்."
      ]
    },
    "traditional-thoran": {
      "title": "பாரம்பரிய தோரன்",
      "description": "காய்கறிகள் மற்றும் மசாலாப் பொருட்களுடன் ஒரு சுவையான உணவு.",
      "prepTime": "15 நிமிடம்",
      "cookTime": "10 நிமிடம்",
      "servings": "4",
      "ingredients": [
        "1 கப் மகாராணி தேங்காய் பொடி",
        "1/2 கப் சூடான நீர்",
        "2 கப் காய்கறிகள் (முட்டைக்கோஸ், பீன்ஸ்)",
        "கடுகு, சீரகம், பச்சை மிளகாய், உப்பு, எண்ணெய்"
      ],
      "steps": [
        "01 — தேங்காய்: தேங்காய் பொடியை ஊறவைக்கவும்.",
        "02 — தாளிப்பு: எண்ணெய் சூடாக்கி தாளிக்கவும்.",
        "03 — காய்கறி: காய்கறிகளை சமைக்கவும்.",
        "04 — கலக்கவும்: ஊறவைத்த தேங்காயை சேர்க்கவும்.",
        "05 — பரிமாறவும்: சூடாக பரிமாறவும்."
      ],
      "tips": [
        "சீரகம் மற்றும் மிளகாயை சிறிது நசுக்கி சேர்க்கவும்."
      ],
      "servingSuggestion": "சாதத்துடன் பரிமாறவும்."
    },
    "kerala-avial": {
      "title": "கேரளா அவியல்",
      "description": "தேங்காய் சேர்த்த பாரம்பரிய அவியல்.",
      "prepTime": "20 நிமிடம்",
      "cookTime": "20 நிமிடம்",
      "servings": "5",
      "ingredients": [
        "1.5 கப் மகாராணி தேங்காய் பொடி",
        "காய்கறிகள், சீரகம், பச்சை மிளகாய், தயிர், தேங்காய் எண்ணெய்"
      ],
      "steps": [
        "01 — காய்கறி: காய்கறிகளை சமைக்கவும்.",
        "02 — தேங்காய்: தேங்காய் பொடியை ஊறவைக்கவும்.",
        "03 — அரைக்கவும்: தேங்காயை அரைக்கவும்.",
        "04 — கலக்கவும்: தேங்காய் விழுது சேர்த்து சமைக்கவும்.",
        "05 — பரிமாறவும்: தயிர் மற்றும் தேங்காய் எண்ணெய் சேர்க்கவும்."
      ],
      "tips": [
        "தயிர் சேர்த்த பின் கொதிக்க விட வேண்டாம்."
      ],
      "servingSuggestion": "சாதத்துடன் பரிமாறவும்."
    },
    "coconut-stew": {
      "title": "தேங்காய் பால் ஸ்டியூ",
      "description": "சுவையான தேங்காய் பால் ஸ்டியூ.",
      "prepTime": "20 நிமிடம்",
      "cookTime": "25 நிமிடம்",
      "servings": "4",
      "ingredients": [
        "1 கப் மகாராணி தேங்காய் பொடி",
        "காய்கறிகள், வெங்காயம், பச்சை மிளகாய், இஞ்சி, மசாலா"
      ],
      "steps": [
        "01 — பால்: தேங்காய் பால் எடுக்கவும்.",
        "02 — தாளிப்பு: மசாலாக்களை வதக்கவும்.",
        "03 — காய்கறி: காய்கறிகளை சமைக்கவும்.",
        "04 — கலக்கவும்: கெட்டிப்பால் சேர்க்கவும்.",
        "05 — பரிமாறவும்: சூடாக பரிமாறவும்."
      ],
      "tips": [
        "முந்திரி அரைத்து சேர்க்கலாம்."
      ],
      "servingSuggestion": "ஆப்பத்துடன் பரிமாறவும்."
    },
    "payasam": {
      "title": "பாயசம்",
      "description": "பாரம்பரிய பாயசம்.",
      "prepTime": "10 நிமிடம்",
      "cookTime": "30 நிமிடம்",
      "servings": "6",
      "ingredients": [
        "1.5 கப் மகாராணி தேங்காய் பொடி",
        "சேமியா, வெல்லம், முந்திரி, திராட்சை, நெய்"
      ],
      "steps": [
        "01 — பால்: தேங்காய் பால் எடுக்கவும்.",
        "02 — வெல்லம்: வெல்லத்தை உருக்கிக் கொள்ளவும்.",
        "03 — சமைக்கவும்: சேமியாவை சமைக்கவும்.",
        "04 — கலக்கவும்: வெல்லம் சேர்க்கவும்.",
        "05 — பால் சேர்க்கவும்: கெட்டிப்பால் சேர்க்கவும்.",
        "06 — அலங்கரிக்கவும்: முந்திரி வறுத்து சேர்க்கவும்."
      ],
      "tips": [
        "சுக்கு சேர்க்கலாம்."
      ],
      "servingSuggestion": "உணவுக்குப் பின் பரிமாறவும்."
    },
    "kerala-cabbage-thoran": {
      "title": "முட்டைக்கோஸ் தோரன்",
      "description": "விரைவான தோரன்.",
      "prepTime": "10 நிமிடம்",
      "cookTime": "10 நிமிடம்",
      "servings": "4",
      "ingredients": [
        "3/4 கப் மகாராணி தேங்காய் பொடி",
        "முட்டைக்கோஸ், கடுகு, சீரகம், எண்ணெய்"
      ],
      "steps": [
        "01 — தேங்காய்: தேங்காய் பொடியை ஊறவைக்கவும்.",
        "02 — தாளிப்பு: கடுகு தாளிக்கவும்.",
        "03 — சமைக்கவும்: முட்டைக்கோஸ் சமைக்கவும்.",
        "04 — கலக்கவும்: தேங்காய் சேர்க்கவும்.",
        "05 — பரிமாறவும்: சூடாக பரிமாறவும்."
      ],
      "servingSuggestion": "சாதத்துடன் பரிமாறவும்."
    }
  },
  "te": {
    "kerala-pumpkin-erissery": {
      "title": "గుమ్మడికాయ ఎరిస్సేరి",
      "description": "వేగించిన కొబ్బరితో గుమ్మడికాయ వంటకం.",
      "prepTime": "15 నిమిషాలు",
      "cookTime": "25 నిమిషాలు",
      "servings": "4",
      "ingredients": [
        "1.5 కప్పుల మహారాణి కొబ్బరి పొడి",
        "గుమ్మడికాయ, అలసందలు"
      ],
      "steps": [
        "01 — నానబెట్టండి.",
        "02 — ఉడికించండి.",
        "03 — రుబ్బండి.",
        "04 — వేయించండి."
      ]
    },
    "kerala-vegetable-theeyal": {
      "title": "కూరగాయల తీయల్",
      "description": "వేగించిన కొబ్బరి కూర.",
      "prepTime": "15 నిమిషాలు",
      "cookTime": "30 నిమిషాలు",
      "servings": "4",
      "ingredients": [
        "1 కప్పు మహారాణి కొబ్బరి పొడి",
        "కూరగాయలు, చింతపండు"
      ],
      "steps": [
        "01 — వేయించండి.",
        "02 — మసాలా కలపండి.",
        "03 — రుబ్బండి.",
        "04 — ఉడికించండి."
      ]
    },
    "coconut-based-vegetable-curry": {
      "title": "కొబ్బరి కూరగాయల కర్రీ",
      "description": "కొబ్బరి పేస్ట్ తో కూర.",
      "prepTime": "15 నిమిషాలు",
      "cookTime": "20 నిమిషాలు",
      "servings": "4",
      "ingredients": [
        "1 కప్పు మహారాణి కొబ్బరి పొడి",
        "కూరగాయలు, ఉల్లిపాయ, టమోటా"
      ],
      "steps": [
        "01 — రుబ్బండి.",
        "02 — వేయించండి.",
        "03 — ఉడికించండి.",
        "04 — కలపండి."
      ]
    },
    "kerala-style-coconut-chutney": {
      "title": "కొబ్బరి పచ్చడి",
      "description": "ఇడ్లీ, దోసలకు పచ్చడి.",
      "prepTime": "10 నిమిషాలు",
      "cookTime": "5 నిమిషాలు",
      "servings": "4",
      "ingredients": [
        "1 కప్పు మహారాణి కొబ్బరి పొడి",
        "పచ్చిమిర్చి, అల్లం, తాలింపు"
      ],
      "steps": [
        "01 — నానబెట్టండి.",
        "02 — రుబ్బండి.",
        "03 — తాలింపు వేయండి."
      ]
    },
    "coconut-appam": {
      "title": "కొబ్బరి అప్పం",
      "description": "మెత్తని కొబ్బరి అప్పం.",
      "prepTime": "8 గంటలు",
      "cookTime": "20 నిమిషాలు",
      "servings": "4",
      "ingredients": [
        "2 కప్పుల బియ్యం",
        "1.5 కప్పుల మహారాణి కొబ్బరి పొడి"
      ],
      "steps": [
        "01 — పాలు తీయండి.",
        "02 — రుబ్బండి.",
        "03 — పులియబెట్టండి.",
        "04 — కాల్చండి."
      ]
    },
    "coconut-puttu": {
      "title": "కొబ్బరి పుట్టు",
      "description": "బియ్యం పిండి, కొబ్బరి పుట్టు.",
      "prepTime": "15 నిమిషాలు",
      "cookTime": "15 నిమిషాలు",
      "servings": "3",
      "ingredients": [
        "2 కప్పుల పుట్టు పిండి",
        "1 కప్పు మహారాణి కొబ్బరి పొడి"
      ],
      "steps": [
        "01 — నానబెట్టండి.",
        "02 — పిండి కలపండి.",
        "03 — నింపండి.",
        "04 — ఆవిరిలో ఉడికించండి."
      ]
    },
    "coconut-idiyappam": {
      "title": "కొబ్బరి ఇడియప్పం",
      "description": "కొబ్బరి ఇడియప్పం.",
      "prepTime": "15 నిమిషాలు",
      "cookTime": "15 నిమిషాలు",
      "servings": "4",
      "ingredients": [
        "2 కప్పుల బియ్యం పిండి",
        "1 కప్పు మహారాణి కొబ్బరి పొడి"
      ],
      "steps": [
        "01 — నానబెట్టండి.",
        "02 — పిండి కలపండి.",
        "03 — నొక్కండి.",
        "04 — ఆవిరిలో ఉడికించండి."
      ]
    },
    "coconut-unniyappam": {
      "title": "స్వీట్ ఉన్నియప్పం",
      "description": "తీపి అప్పాలు.",
      "prepTime": "30 నిమిషాలు",
      "cookTime": "20 నిమిషాలు",
      "servings": "6",
      "ingredients": [
        "1 కప్పు బియ్యం పిండి",
        "1/2 కప్పు మహారాణి కొబ్బరి పొడి",
        "బెల్లం, అరటిపండు"
      ],
      "steps": [
        "01 — పిండి కలపండి.",
        "02 — వేయించండి."
      ]
    },
    "coconut-ada": {
      "title": "కొబ్బరి అడ",
      "description": "ఆకులో ఉడికించిన అడ.",
      "prepTime": "20 నిమిషాలు",
      "cookTime": "20 నిమిషాలు",
      "servings": "4",
      "ingredients": [
        "1 కప్పు బియ్యం పిండి",
        "1.5 కప్పుల మహారాణి కొబ్బరి పొడి",
        "బెల్లం, ఆకు"
      ],
      "steps": [
        "01 — స్టఫింగ్.",
        "02 — పిండి.",
        "03 — మడవండి.",
        "04 — ఆవిరిలో ఉడికించండి."
      ]
    },
    "coconut-kozhukatta": {
      "title": "స్వీట్ కొళుకట్ట",
      "description": "తీపి ఉండలు.",
      "prepTime": "20 నిమిషాలు",
      "cookTime": "15 నిమిషాలు",
      "servings": "4",
      "ingredients": [
        "1 కప్పు బియ్యం పిండి",
        "1 కప్పు మహారాణి కొబ్బరి పొడి",
        "బెల్లం"
      ],
      "steps": [
        "01 — స్టఫింగ్.",
        "02 — పిండి.",
        "03 — నింపండి.",
        "04 — ఆవిరిలో ఉడికించండి."
      ]
    },
    "coconut-ladoo": {
      "title": "కొబ్బరి లడ్డూ",
      "description": "త్వరిత లడ్డూ.",
      "prepTime": "5 నిమిషాలు",
      "cookTime": "10 నిమిషాలు",
      "servings": "10 లడ్డూలు",
      "ingredients": [
        "2 కప్పుల మహారాణి కొబ్బరి పొడి",
        "కండెన్స్డ్ మిల్క్"
      ],
      "steps": [
        "01 — వేయించండి.",
        "02 — కలపండి.",
        "03 — ఉండలు చుట్టండి."
      ]
    },
    "coconut-burfi": {
      "title": "కొబ్బరి బర్ఫీ",
      "description": "సాంప్రదాయ బర్ఫీ.",
      "prepTime": "10 నిమిషాలు",
      "cookTime": "20 నిమిషాలు",
      "servings": "12 ముక్కలు",
      "ingredients": [
        "2 కప్పుల మహారాణి కొబ్బరి పొడి",
        "చక్కెర, పాలు"
      ],
      "steps": [
        "01 — నానబెట్టండి.",
        "02 — ఉడికించండి.",
        "03 — కత్తిరించండి."
      ]
    },
    "coconut-cookies": {
      "title": "కొబ్బరి కుకీలు",
      "description": "క్రిస్పీ కుకీలు.",
      "prepTime": "15 నిమిషాలు",
      "cookTime": "15 నిమిషాలు",
      "servings": "15 కుకీలు",
      "ingredients": [
        "1 కప్పు మహారాణి కొబ్బరి పొడి",
        "మైదా, వెన్న, చక్కెర"
      ],
      "steps": [
        "01 — కలపండి.",
        "02 — కాల్చండి."
      ]
    },
    "coconut-cake": {
      "title": "కొబ్బరి కేక్",
      "description": "సాఫ్ట్ కేక్.",
      "prepTime": "20 నిమిషాలు",
      "cookTime": "35 నిమిషాలు",
      "servings": "8",
      "ingredients": [
        "1.5 కప్పుల మహారాణి కొబ్బరి పొడి",
        "మైదా, చక్కెర, గుడ్లు"
      ],
      "steps": [
        "01 — కలపండి.",
        "02 — కాల్చండి."
      ]
    },
    "coconut-muffins": {
      "title": "కొబ్బరి మఫిన్లు",
      "description": "ఉదయం మఫిన్లు.",
      "prepTime": "15 నిమిషాలు",
      "cookTime": "20 నిమిషాలు",
      "servings": "12",
      "ingredients": [
        "1 కప్పు మహారాణి కొబ్బరి పొడి",
        "మైదా, పాలు, గుడ్లు"
      ],
      "steps": [
        "01 — కలపండి.",
        "02 — కాల్చండి."
      ]
    },
    "traditional-thoran": {
      "title": "సాంప్రదాయ తోరన్",
      "description": "కూరగాయలు మరియు సుగంధ ద్రవ్యాలతో రుచికరమైన వంటకం.",
      "prepTime": "15 నిమిషాలు",
      "cookTime": "10 నిమిషాలు",
      "servings": "4",
      "ingredients": [
        "1 కప్పు మహారాణి కొబ్బరి పొడి",
        "1/2 కప్పు వేడి నీరు",
        "2 కప్పుల కూరగాయలు (క్యాబేజీ, బీన్స్)",
        "ఆవాలు, జీలకర్ర, పచ్చిమిర్చి, ఉప్పు, నూనె"
      ],
      "steps": [
        "01 — కొబ్బరి: కొబ్బరి పొడిని నానబెట్టండి.",
        "02 — తాలింపు: నూనె వేడి చేసి తాలింపు వేయండి.",
        "03 — కూరగాయలు: కూరగాయలు ఉడికించండి.",
        "04 — కలపండి: నానబెట్టిన కొబ్బరిని కలపండి.",
        "05 — వడ్డించండి: వేడిగా వడ్డించండి."
      ],
      "tips": [
        "జీలకర్ర మరియు మిర్చిని కొద్దిగా చితక్కొట్టి వేయండి."
      ],
      "servingSuggestion": "అన్నంతో వడ్డించండి."
    },
    "kerala-avial": {
      "title": "కేరళ అవియల్",
      "description": "కొబ్బరితో సాంప్రదాయ అవియల్.",
      "prepTime": "20 నిమిషాలు",
      "cookTime": "20 నిమిషాలు",
      "servings": "5",
      "ingredients": [
        "1.5 కప్పుల మహారాణి కొబ్బరి పొడి",
        "కూరగాయలు, జీలకర్ర, పచ్చిమిర్చి, పెరుగు, కొబ్బరి నూనె"
      ],
      "steps": [
        "01 — కూరగాయలు: కూరగాయలు ఉడికించండి.",
        "02 — కొబ్బరి: కొబ్బరి పొడిని నానబెట్టండి.",
        "03 — రుబ్బండి: కొబ్బరిని రుబ్బండి.",
        "04 — కలపండి: కొబ్బరి పేస్ట్ వేసి ఉడికించండి.",
        "05 — వడ్డించండి: పెరుగు మరియు కొబ్బరి నూనె కలపండి."
      ],
      "tips": [
        "పెరుగు వేసిన తర్వాత మరగబెట్టకండి."
      ],
      "servingSuggestion": "సాధ్యకు ఉత్తమమైనది."
    },
    "coconut-stew": {
      "title": "కొబ్బరి పాలు స్ట్యూ",
      "description": "రుచికరమైన కొబ్బరి పాలు స్ట్యూ.",
      "prepTime": "20 నిమిషాలు",
      "cookTime": "25 నిమిషాలు",
      "servings": "4",
      "ingredients": [
        "1 కప్పు మహారాణి కొబ్బరి పొడి",
        "కూరగాయలు, ఉల్లిపాయ, పచ్చిమిర్చి, అల్లం, మసాలా"
      ],
      "steps": [
        "01 — పాలు: కొబ్బరి పాలు తీయండి.",
        "02 — తాలింపు: మసాలాలు వేయించండి.",
        "03 — కూరగాయలు: కూరగాయలు ఉడికించండి.",
        "04 — కలపండి: చిక్కటి పాలు కలపండి.",
        "05 — వడ్డించండి: వేడిగా వడ్డించండి."
      ],
      "tips": [
        "జీడిపప్పు రుబ్బి కలపవచ్చు."
      ],
      "servingSuggestion": "అప్పంతో వడ్డించండి."
    },
    "payasam": {
      "title": "పాయసం",
      "description": "సాంప్రదాయ పాయసం.",
      "prepTime": "10 నిమిషాలు",
      "cookTime": "30 నిమిషాలు",
      "servings": "6",
      "ingredients": [
        "1.5 కప్పుల మహారాణి కొబ్బరి పొడి",
        "సేమియా, బెల్లం, జీడిపప్పు, ఎండుద్రాక్ష, నెయ్యి"
      ],
      "steps": [
        "01 — పాలు: కొబ్బరి పాలు తీయండి.",
        "02 — బెల్లం: బెల్లం కరిగించండి.",
        "03 — ఉడికించండి: సేమియా ఉడికించండి.",
        "04 — కలపండి: బెల్లం కలపండి.",
        "05 — పాలు కలపండి: చిక్కటి పాలు కలపండి.",
        "06 — అలంకరించండి: జీడిపప్పు వేయించి కలపండి."
      ],
      "tips": [
        "శొంఠి కలపవచ్చు."
      ],
      "servingSuggestion": "భోజనం తర్వాత వడ్డించండి."
    },
    "kerala-cabbage-thoran": {
      "title": "క్యాబేజీ తోరన్",
      "description": "వేగవంతమైన తోరన్.",
      "prepTime": "10 నిమిషాలు",
      "cookTime": "10 నిమిషాలు",
      "servings": "4",
      "ingredients": [
        "3/4 కప్పు మహారాణి కొబ్బరి పొడి",
        "క్యాబేజీ, ఆవాలు, జీలకర్ర, నూనె"
      ],
      "steps": [
        "01 — కొబ్బరి: కొబ్బరి పొడిని నానబెట్టండి.",
        "02 — తాలింపు: ఆవాలు తాలింపు వేయండి.",
        "03 — ఉడికించండి: క్యాబేజీ ఉడికించండి.",
        "04 — కలపండి: కొబ్బరి కలపండి.",
        "05 — వడ్డించండి: వేడిగా వడ్డించండి."
      ],
      "servingSuggestion": "అన్నంతో వడ్డించండి."
    }
  },
  "kn": {
    "kerala-pumpkin-erissery": {
      "title": "ಕುಂಬಳಕಾಯಿ ಎರಿಸ್ಸೇರಿ",
      "description": "ಹುರಿದ ತೆಂಗಿನಕಾಯಿ ಮತ್ತು ಕುಂಬಳಕಾಯಿ ಖಾದ್ಯ.",
      "prepTime": "15 ನಿಮಿಷ",
      "cookTime": "25 ನಿಮಿಷ",
      "servings": "4",
      "ingredients": [
        "1.5 ಕಪ್ ಮಹಾರಾಣಿ ತೆಂಗಿನಕಾಯಿ ಪುಡಿ",
        "ಕುಂಬಳಕಾಯಿ, ಅಲಸಂದೆ"
      ],
      "steps": [
        "01 — ನೆನೆಸಿ.",
        "02 — ಬೇಯಿಸಿ.",
        "03 — ರುಬ್ಬಿ ಸೇರಿಸಿ.",
        "04 — ಹುರಿದು ಸೇರಿಸಿ."
      ]
    },
    "kerala-vegetable-theeyal": {
      "title": "ತರಕಾರಿ ತೀಯಲ್",
      "description": "ಹುರಿದ ತೆಂಗಿನಕಾಯಿ ಗ್ರೇವಿ.",
      "prepTime": "15 ನಿಮಿಷ",
      "cookTime": "30 ನಿಮಿಷ",
      "servings": "4",
      "ingredients": [
        "1 ಕಪ್ ಮಹಾರಾಣಿ ತೆಂಗಿನಕಾಯಿ ಪುಡಿ",
        "ತರಕಾರಿಗಳು, ಹುಣಿಸೆಹಣ್ಣು"
      ],
      "steps": [
        "01 — ಹುರಿಯಿರಿ.",
        "02 — ಮಸಾಲೆ ಸೇರಿಸಿ.",
        "03 — ರುಬ್ಬಿ.",
        "04 — ಬೇಯಿಸಿ."
      ]
    },
    "coconut-based-vegetable-curry": {
      "title": "ತೆಂಗಿನಕಾಯಿ ತರಕಾರಿ ಕರಿ",
      "description": "ತೆಂಗಿನಕಾಯಿ ಪೇಸ್ಟ್‌ನಿಂದ ಮಾಡಿದ ಕರಿ.",
      "prepTime": "15 ನಿಮಿಷ",
      "cookTime": "20 ನಿಮಿಷ",
      "servings": "4",
      "ingredients": [
        "1 ಕಪ್ ಮಹಾರಾಣಿ ತೆಂಗಿನಕಾಯಿ ಪುಡಿ",
        "ತರಕಾರಿಗಳು, ಈರುಳ್ಳಿ, ಟೊಮೆಟೊ"
      ],
      "steps": [
        "01 — ರುಬ್ಬಿ.",
        "02 — ಒಗ್ಗರಣೆ.",
        "03 — ಬೇಯಿಸಿ.",
        "04 — ಸೇರಿಸಿ."
      ]
    },
    "kerala-style-coconut-chutney": {
      "title": "ತೆಂಗಿನಕಾಯಿ ಚಟ್ನಿ",
      "description": "ಇಡ್ಲಿ, ದೋಸೆಗೆ ಚಟ್ನಿ.",
      "prepTime": "10 ನಿಮಿಷ",
      "cookTime": "5 ನಿಮಿಷ",
      "servings": "4",
      "ingredients": [
        "1 ಕಪ್ ಮಹಾರಾಣಿ ತೆಂಗಿನಕಾಯಿ ಪುಡಿ",
        "ಹಸಿರು ಮೆಣಸಿನಕಾಯಿ, ಶುಂಠಿ"
      ],
      "steps": [
        "01 — ನೆನೆಸಿ.",
        "02 — ರುಬ್ಬಿ.",
        "03 — ಒಗ್ಗರಣೆ ಹಾಕಿ."
      ]
    },
    "coconut-appam": {
      "title": "ತೆಂಗಿನಕಾಯಿ ಅಪ್ಪಂ",
      "description": "ಮೃದುವಾದ ಅಪ್ಪಂ.",
      "prepTime": "8 ಗಂಟೆ",
      "cookTime": "20 ನಿಮಿಷ",
      "servings": "4",
      "ingredients": [
        "2 ಕಪ್ ಅಕ್ಕಿ",
        "1.5 ಕಪ್ ಮಹಾರಾಣಿ ತೆಂಗಿನಕಾಯಿ ಪುಡಿ"
      ],
      "steps": [
        "01 — ಹಾಲು ತೆಗೆಯಿರಿ.",
        "02 — ರುಬ್ಬಿ.",
        "03 — ಹುದುಗಲು ಬಿಡಿ.",
        "04 — ಬೇಯಿಸಿ."
      ]
    },
    "coconut-puttu": {
      "title": "ತೆಂಗಿನಕಾಯಿ ಪುಟ್ಟು",
      "description": "ಅಕ್ಕಿ ಹಿಟ್ಟು ಮತ್ತು ತೆಂಗಿನಕಾಯಿ ಪುಟ್ಟು.",
      "prepTime": "15 ನಿಮಿಷ",
      "cookTime": "15 ನಿಮಿಷ",
      "servings": "3",
      "ingredients": [
        "2 ಕಪ್ ಪುಟ್ಟು ಹಿಟ್ಟು",
        "1 ಕಪ್ ಮಹಾರಾಣಿ ತೆಂಗಿನಕಾಯಿ ಪುಡಿ"
      ],
      "steps": [
        "01 — ನೆನೆಸಿ.",
        "02 — ಹಿಟ್ಟು ಕಲೆಸಿ.",
        "03 — ತುಂಬಿ.",
        "04 — ಹಬೆಯಲ್ಲಿ ಬೇಯಿಸಿ."
      ]
    },
    "coconut-idiyappam": {
      "title": "ತೆಂಗಿನಕಾಯಿ ಇಡಿಯಪ್ಪಂ",
      "description": "ಇಡಿಯಪ್ಪಂ.",
      "prepTime": "15 ನಿಮಿಷ",
      "cookTime": "15 ನಿಮಿಷ",
      "servings": "4",
      "ingredients": [
        "2 ಕಪ್ ಅಕ್ಕಿ ಹಿಟ್ಟು",
        "1 ಕಪ್ ಮಹಾರಾಣಿ ತೆಂಗಿನಕಾಯಿ ಪುಡಿ"
      ],
      "steps": [
        "01 — ನೆನೆಸಿ.",
        "02 — ಹಿಟ್ಟು ಕಲೆಸಿ.",
        "03 — ಒತ್ತಿ.",
        "04 — ಹಬೆಯಲ್ಲಿ ಬೇಯಿಸಿ."
      ]
    },
    "coconut-unniyappam": {
      "title": "ಸಿಹಿ ಉಣ್ಣಿಯಪ್ಪಂ",
      "description": "ಸಿಹಿ ಅಪ್ಪಂ.",
      "prepTime": "30 ನಿಮಿಷ",
      "cookTime": "20 ನಿಮಿಷ",
      "servings": "6",
      "ingredients": [
        "1 ಕಪ್ ಅಕ್ಕಿ ಹಿಟ್ಟು",
        "1/2 ಕಪ್ ಮಹಾರಾಣಿ ತೆಂಗಿನಕಾಯಿ ಪುಡಿ",
        "ಬೆಲ್ಲ, ಬಾಳೆಹಣ್ಣು"
      ],
      "steps": [
        "01 — ಹಿಟ್ಟು ಕಲೆಸಿ.",
        "02 — ಎಣ್ಣೆಯಲ್ಲಿ ಕರಿಯಿರಿ."
      ]
    },
    "coconut-ada": {
      "title": "ತೆಂಗಿನಕಾಯಿ ಅಡ",
      "description": "ಎಲೆಯಲ್ಲಿ ಬೇಯಿಸಿದ ಅಡ.",
      "prepTime": "20 ನಿಮಿಷ",
      "cookTime": "20 ನಿಮಿಷ",
      "servings": "4",
      "ingredients": [
        "1 ಕಪ್ ಅಕ್ಕಿ ಹಿಟ್ಟು",
        "1.5 ಕಪ್ ಮಹಾರಾಣಿ ತೆಂಗಿನಕಾಯಿ ಪುಡಿ",
        "ಬೆಲ್ಲ, ಎಲೆ"
      ],
      "steps": [
        "01 — ಹೂರಣ.",
        "02 — ಹಿಟ್ಟು.",
        "03 — ಮಡಚಿ.",
        "04 — ಹಬೆಯಲ್ಲಿ ಬೇಯಿಸಿ."
      ]
    },
    "coconut-kozhukatta": {
      "title": "ಸಿಹಿ ಕೊಝುಕಟ್ಟೆ",
      "description": "ಸಿಹಿ ಉಂಡೆಗಳು.",
      "prepTime": "20 ನಿಮಿಷ",
      "cookTime": "15 ನಿಮಿಷ",
      "servings": "4",
      "ingredients": [
        "1 ಕಪ್ ಅಕ್ಕಿ ಹಿಟ್ಟು",
        "1 ಕಪ್ ಮಹಾರಾಣಿ ತೆಂಗಿನಕಾಯಿ ಪುಡಿ",
        "ಬೆಲ್ಲ"
      ],
      "steps": [
        "01 — ಹೂರಣ.",
        "02 — ಹಿಟ್ಟು.",
        "03 — ತುಂಬಿ.",
        "04 — ಹಬೆಯಲ್ಲಿ ಬೇಯಿಸಿ."
      ]
    },
    "coconut-ladoo": {
      "title": "ತೆಂಗಿನಕಾಯಿ ಲಡ್ಡು",
      "description": "ಕ್ಷಿಪ್ರ ಲಡ್ಡು.",
      "prepTime": "5 ನಿಮಿಷ",
      "cookTime": "10 ನಿಮಿಷ",
      "servings": "10 ಲಡ್ಡುಗಳು",
      "ingredients": [
        "2 ಕಪ್ ಮಹಾರಾಣಿ ತೆಂಗಿನಕಾಯಿ ಪುಡಿ",
        "ಕಂಡೆನ್ಸ್ಡ್ ಮಿಲ್ಕ್"
      ],
      "steps": [
        "01 — ಹುರಿಯಿರಿ.",
        "02 — ಸೇರಿಸಿ.",
        "03 — ಉಂಡೆ ಕಟ್ಟಿ."
      ]
    },
    "coconut-burfi": {
      "title": "ತೆಂಗಿನಕಾಯಿ ಬರ್ಫಿ",
      "description": "ಸಾಂಪ್ರದಾಯಿಕ ಬರ್ಫಿ.",
      "prepTime": "10 ನಿಮಿಷ",
      "cookTime": "20 ನಿಮಿಷ",
      "servings": "12 ತುಂಡುಗಳು",
      "ingredients": [
        "2 ಕಪ್ ಮಹಾರಾಣಿ ತೆಂಗಿನಕಾಯಿ ಪುಡಿ",
        "ಸಕ್ಕರೆ, ಹಾಲು"
      ],
      "steps": [
        "01 — ನೆನೆಸಿ.",
        "02 — ಬೇಯಿಸಿ.",
        "03 — ಕತ್ತರಿಸಿ."
      ]
    },
    "coconut-cookies": {
      "title": "ತೆಂಗಿನಕಾಯಿ ಕುಕೀಸ್",
      "description": "ಗರಿಗರಿಯಾದ ಕುಕೀಸ್.",
      "prepTime": "15 ನಿమిಷ",
      "cookTime": "15 ನಿಮಿಷ",
      "servings": "15 ಕುಕೀಸ್",
      "ingredients": [
        "1 ಕಪ್ ಮಹಾರಾಣಿ ತೆಂಗಿನಕಾಯಿ ಪುಡಿ",
        "ಮೈದಾ, ಬೆಣ್ಣೆ, ಸಕ್ಕರೆ"
      ],
      "steps": [
        "01 — ಸೇರಿಸಿ.",
        "02 — ಬೇಯಿಸಿ."
      ]
    },
    "coconut-cake": {
      "title": "ತೆಂಗಿನಕಾಯಿ ಕೇಕ್",
      "description": "ಮೃದುವಾದ ಕೇಕ್.",
      "prepTime": "20 ನಿಮಿಷ",
      "cookTime": "35 ನಿಮಿಷ",
      "servings": "8",
      "ingredients": [
        "1.5 ಕಪ್ ಮಹಾರಾಣಿ ತೆಂಗಿನಕಾಯಿ ಪುಡಿ",
        "ಮೈದಾ, ಸಕ್ಕರೆ, ಮೊಟ್ಟೆ"
      ],
      "steps": [
        "01 — ಸೇರಿಸಿ.",
        "02 — ಬೇಯಿಸಿ."
      ]
    },
    "coconut-muffins": {
      "title": "ತೆಂಗಿನಕಾಯಿ ಮಫಿನ್ಸ್",
      "description": "ಬೆಳಗಿನ ಮಫಿನ್ಸ್.",
      "prepTime": "15 ನಿಮಿಷ",
      "cookTime": "20 ನಿಮಿಷ",
      "servings": "12",
      "ingredients": [
        "1 ಕಪ್ ಮಹಾರಾಣಿ ತೆಂಗಿನಕಾಯಿ ಪುಡಿ",
        "ಮೈದಾ, ಹಾಲು, ಮೊಟ್ಟೆ"
      ],
      "steps": [
        "01 — ಸೇರಿಸಿ.",
        "02 — ಬೇಯಿಸಿ."
      ]
    },
    "traditional-thoran": {
      "title": "ಸಾಂಪ್ರದಾಯಿಕ ತೋರನ್",
      "description": "ತರಕಾರಿಗಳು ಮತ್ತು ಮಸಾಲೆಗಳೊಂದಿಗೆ ರುಚಿಯಾದ ಭಕ್ಷ್ಯ.",
      "prepTime": "15 ನಿಮಿಷ",
      "cookTime": "10 ನಿಮಿಷ",
      "servings": "4",
      "ingredients": [
        "1 ಕಪ್ ಮಹಾರಾಣಿ ತೆಂಗಿನಕಾಯಿ ಪುಡಿ",
        "1/2 ಕಪ್ ಬಿಸಿ ನೀರು",
        "2 ಕಪ್ ತರಕಾರಿಗಳು",
        "ಸಾಸಿವೆ, ಜೀರಿಗೆ, ಹಸಿರು ಮೆಣಸಿನಕಾಯಿ, ಉಪ್ಪು, ಎಣ್ಣೆ"
      ],
      "steps": [
        "01 — ತೆಂಗಿನಕಾಯಿ: ಪುಡಿಯನ್ನು ನೆನೆಸಿ.",
        "02 — ಒಗ್ಗರಣೆ: ಎಣ್ಣೆ ಬಿಸಿ ಮಾಡಿ ಒಗ್ಗರಣೆ ಹಾಕಿ.",
        "03 — ತರಕಾರಿ: ತರಕಾರಿಗಳನ್ನು ಬೇಯಿಸಿ.",
        "04 — ಸೇರಿಸಿ: ನೆನೆಸಿದ ತೆಂಗಿನಕಾಯಿ ಸೇರಿಸಿ.",
        "05 — ಬಡಿಸಿ: ಬಿಸಿಯಾಗಿ ಬಡಿಸಿ."
      ],
      "tips": [
        "ಜೀರಿಗೆ ಮತ್ತು ಮೆಣಸಿನಕಾಯಿಯನ್ನು ಸ್ವಲ್ಪ ಪುಡಿಮಾಡಿ ಸೇರಿಸಿ."
      ],
      "servingSuggestion": "ಅನ್ನದೊಂದಿಗೆ ಬಡಿಸಿ."
    },
    "kerala-avial": {
      "title": "ಕೇರಳ ಅವಿಯಲ್",
      "description": "ತೆಂಗಿನಕಾಯಿಯೊಂದಿಗೆ ಸಾಂಪ್ರದಾಯಿಕ ಅವಿಯಲ್.",
      "prepTime": "20 ನಿಮಿಷ",
      "cookTime": "20 ನಿಮಿಷ",
      "servings": "5",
      "ingredients": [
        "1.5 ಕಪ್ ಮಹಾರಾಣಿ ತೆಂಗಿನಕಾಯಿ ಪುಡಿ",
        "ತರಕಾರಿಗಳು, ಜೀರಿಗೆ, ಹಸಿರು ಮೆಣಸಿನಕಾಯಿ, ಮೊಸರು, ತೆಂಗಿನೆಣ್ಣೆ"
      ],
      "steps": [
        "01 — ತರಕಾರಿ: ತರಕಾರಿಗಳನ್ನು ಬೇಯಿಸಿ.",
        "02 — ತೆಂಗಿನಕಾಯಿ: ಪುಡಿಯನ್ನು ನೆನೆಸಿ.",
        "03 — ರುಬ್ಬಿ: ತೆಂಗಿನಕಾಯಿಯನ್ನು ರುಬ್ಬಿ.",
        "04 — ಸೇರಿಸಿ: ತೆಂಗಿನಕಾಯಿ ಪೇಸ್ಟ್ ಸೇರಿಸಿ ಬೇಯಿಸಿ.",
        "05 — ಬಡಿಸಿ: ಮೊಸರು ಮತ್ತು ತೆಂಗಿನೆಣ್ಣೆ ಸೇರಿಸಿ."
      ],
      "tips": [
        "ಮೊಸರು ಸೇರಿಸಿದ ನಂತರ ಕುದಿಸಬೇಡಿ."
      ],
      "servingSuggestion": "ಊಟದೊಂದಿಗೆ ಬಡಿಸಿ."
    },
    "coconut-stew": {
      "title": "ತೆಂಗಿನಕಾಯಿ ಹಾಲು ಸ್ಟ್ಯೂ",
      "description": "ರುಚಿಯಾದ ತೆಂಗಿನಕಾಯಿ ಹಾಲು ಸ್ಟ್ಯೂ.",
      "prepTime": "20 ನಿಮಿಷ",
      "cookTime": "25 ನಿಮಿಷ",
      "servings": "4",
      "ingredients": [
        "1 ಕಪ್ ಮಹಾರಾಣಿ ತೆಂಗಿನಕಾಯಿ ಪುಡಿ",
        "ತರಕಾರಿಗಳು, ಈರುಳ್ಳಿ, ಹಸಿರು ಮೆಣಸಿನಕಾಯಿ, ಶುಂಠಿ, ಮಸಾಲೆ"
      ],
      "steps": [
        "01 — ಹಾಲು: ತೆಂಗಿನಕಾಯಿ ಹಾಲು ತೆಗೆಯಿರಿ.",
        "02 — ಒಗ್ಗರಣೆ: ಮಸಾಲೆಗಳನ್ನು ಹುರಿಯಿರಿ.",
        "03 — ತರಕಾರಿ: ತರಕಾರಿಗಳನ್ನು ಬೇಯಿಸಿ.",
        "04 — ಸೇರಿಸಿ: ದಪ್ಪ ಹಾಲು ಸೇರಿಸಿ.",
        "05 — ಬಡಿಸಿ: ಬಿಸಿಯಾಗಿ ಬಡಿಸಿ."
      ],
      "tips": [
        "ಗೋಡಂಬಿ ರುಬ್ಬಿ ಸೇರಿಸಬಹುದು."
      ],
      "servingSuggestion": "ಅಪ್ಪಂ ಜೊತೆ ಬಡಿಸಿ."
    },
    "payasam": {
      "title": "ಪಾಯಸಂ",
      "description": "ಸಾಂಪ್ರದಾಯಿಕ ಪಾಯಸಂ.",
      "prepTime": "10 ನಿಮಿಷ",
      "cookTime": "30 ನಿಮಿಷ",
      "servings": "6",
      "ingredients": [
        "1.5 ಕಪ್ ಮಹಾರಾಣಿ ತೆಂಗಿನಕಾಯಿ ಪುಡಿ",
        "ಶಾವಿಗೆ, ಬೆಲ್ಲ, ಗೋಡಂಬಿ, ದ್ರಾಕ್ಷಿ, ತುಪ್ಪ"
      ],
      "steps": [
        "01 — ಹಾಲು: ತೆಂಗಿನಕಾಯಿ ಹಾಲು ತೆಗೆಯಿರಿ.",
        "02 — ಬೆಲ್ಲ: ಬೆಲ್ಲವನ್ನು ಕರಗಿಸಿ.",
        "03 — ಬೇಯಿಸಿ: ಶಾವಿಗೆ ಬೇಯಿಸಿ.",
        "04 — ಸೇರಿಸಿ: ಬೆಲ್ಲ ಸೇರಿಸಿ.",
        "05 — ಹಾಲು ಸೇರಿಸಿ: ದಪ್ಪ ಹಾಲು ಸೇರಿಸಿ.",
        "06 — ಅಲಂಕರಿಸಿ: ಗೋಡಂಬಿ ಹುರಿದು ಸೇರಿಸಿ."
      ],
      "tips": [
        "ಶುಂಠಿ ಪುಡಿ ಸೇರಿಸಬಹುದು."
      ],
      "servingSuggestion": "ಊಟದ ನಂತರ ಬಡಿಸಿ."
    },
    "kerala-cabbage-thoran": {
      "title": "ಎಲೆಕೋಸು ತೋರನ್",
      "description": "ತ್ವರಿತ ತೋರನ್.",
      "prepTime": "10 ನಿಮಿಷ",
      "cookTime": "10 ನಿಮಿಷ",
      "servings": "4",
      "ingredients": [
        "3/4 ಕಪ್ ಮಹಾರಾಣಿ ತೆಂಗಿನಕಾಯಿ ಪುಡಿ",
        "ಎಲೆಕೋಸು, ಸಾಸಿವೆ, ಜೀರಿಗೆ, ಎಣ್ಣೆ"
      ],
      "steps": [
        "01 — ತೆಂಗಿನಕಾಯಿ: ಪುಡಿಯನ್ನು ನೆನೆಸಿ.",
        "02 — ಒಗ್ಗರಣೆ: ಒಗ್ಗರಣೆ ಹಾಕಿ.",
        "03 — ಬೇಯಿಸಿ: ಎಲೆಕೋಸು ಬೇಯಿಸಿ.",
        "04 — ಸೇರಿಸಿ: ತೆಂಗಿನಕಾಯಿ ಸೇರಿಸಿ.",
        "05 — ಬಡಿಸಿ: ಬಿಸಿಯಾಗಿ ಬಡಿಸಿ."
      ],
      "servingSuggestion": "ಅನ್ನದೊಂದಿಗೆ ಬಡಿಸಿ."
    }
  }
};
