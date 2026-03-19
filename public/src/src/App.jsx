import { useState } from "react";

const beautyTabs = [
  { id: "skincare", label: "Skincare", icon: "✨" },
  { id: "haircare", label: "Haircare", icon: "💆" },
  { id: "makeup", label: "Makeup", icon: "💄" },
  { id: "bodycare", label: "Body & Wellness", icon: "🌿" },
];

const skinConcerns = [
  { id: "acne", label: "Acne & Breakouts", icon: "🔴", description: "Blemishes, congestion & breakout-prone skin" },
  { id: "aging", label: "Anti-Aging", icon: "⏳", description: "Fine lines, wrinkles & loss of firmness" },
  { id: "pigmentation", label: "Hyperpigmentation", icon: "🌗", description: "Dark spots, uneven tone & post-acne marks" },
  { id: "dryness", label: "Dryness & Dehydration", icon: "💧", description: "Tight, flaky or moisture-starved skin" },
  { id: "sensitivity", label: "Sensitivity & Redness", icon: "🌸", description: "Reactive, inflamed or easily irritated skin" },
  { id: "dullness", label: "Dullness & Uneven Tone", icon: "✦", description: "Lackluster, tired or uneven complexion" },
  { id: "oiliness", label: "Oiliness & Large Pores", icon: "💦", description: "Excess sebum, shine & visible pores" },
  { id: "darkcircles", label: "Dark Circles & Puffiness", icon: "👁", description: "Under-eye shadows, bags & puffiness" },
];

const countryData = [
  {
    name:"South Korea", flag:"🇰🇷", region:"Asia",
    philosophy:"Glass skin is not a trend — it is a way of life. Luminosity comes from layers of care, not a single product.",
    skincare:{
      product:"Snail Mucin 96 Essence", heroIngredient:"Snail Secretion Filtrate",
      editorNote:"The ingredient that launched a thousand serums — and rightfully so.",
      originStory:"In the 1980s, Chilean farmers raising escargot for the French food market noticed their hands were remarkably soft and cuts healed with uncanny speed. Korean cosmetic scientists recognized the potential immediately and pioneered the skincare application.",
      villageSpotlight:"Most Korean snail mucin is harvested on farms in Gyeonggi and South Chungcheong provinces where garden snails roam freely across mesh surfaces. The slime they secrete is collected without harm using a cruelty-free stimulation method.",
      theScience:"Snail secretion filtrate contains glycoproteins that stimulate fibroblast activity for collagen synthesis, naturally-occurring glycolic acid to resurface skin, and allantoin — a compound snails produce to repair their own injuries — which accelerates wound healing and cell turnover.",
      ritualInPractice:"In Korean households, snail mucin essence is pressed — never rubbed — into skin using warmed fingertips after cleansing and toning, morning and night. Multiple thin layers are always preferred over one heavy application.",
      ritual:"Snail mucin essence is pressed gently into skin with fingertips after toning, used morning and night as the cornerstone of the 10-step routine.",
      shopLink:"#"
    },
    haircare:{
      product:"Camellia Oil Hair Treatment", heroIngredient:"Camellia (Dongbaek) Oil",
      editorNote:"Korea's secret to hair so glossy it looks lacquered.",
      originStory:"Dongbaek oil was pressed from Camellia japonica seeds abundant on Jeju Island. The haenyeo — Jeju's famous free-diving women — used it for generations to protect hair against saltwater and sun exposure.",
      villageSpotlight:"The village of Wido on Jeju Island is celebrated for its camellia oil production. The cold-pressed oil from hand-harvested seeds has a golden color and lighter texture than mainland varieties. Jeju's tsubaki oil cooperative has operated for over 200 years.",
      theScience:"Camellia oil's oleic acid content — around 80% — is remarkably similar to human sebum, making it one of the most biocompatible hair oils. It penetrates the hair shaft rather than coating it, filling structural gaps in damaged hair from the inside.",
      ritualInPractice:"A few drops are warmed between the palms until body temperature, then worked through damp hair from mid-length to ends before blow-drying. For deeper treatment, a generous application is left overnight and washed out in the morning.",
      ritual:"A few drops of camellia oil warmed in palms and worked through damp hair before blow-drying. Weekly overnight masking delivers mirror-like shine.",
      shopLink:"#"
    },
    makeup:{
      product:"Cushion Foundation", heroIngredient:"Hyaluronic Acid & Integrated SPF",
      editorNote:"The innovation that changed how the whole world applies foundation.",
      originStory:"Cushion foundation was invented by Amorepacific in 2008. The IOPE Air Cushion became the fastest-selling product in Korean beauty history — suspending liquid foundation in a foam-soaked compact, making SPF base portable and hygienic.",
      villageSpotlight:"Amorepacific's R&D campus in Yongsan, Seoul, is where the cushion was engineered. The Amorepacific Museum of Art sits atop the headquarters, reflecting the brand's belief that beauty and culture are inseparable.",
      theScience:"The cushion applicator bounces rather than drags, preserving skin texture and delivering a translucent finish. Hyaluronic acid provides immediate plumping. High SPF is integrated so the product functions as simultaneous skincare, sun protection and base.",
      ritualInPractice:"Koreans bounce the cushion puff lightly across skin in a pressing motion — center outwards. They reapply throughout the day treating the cushion as a hydrating top-up rather than a heavy coverage tool. The goal is always the dewy look of healthy skin.",
      ritual:"The cushion puff is bounced lightly across skin for a dewy, skin-like base. Koreans reapply throughout the day — the goal is always glow, never a mask.",
      shopLink:"#"
    },
    bodycare:{
      product:"Italy Towel Exfoliation (Seshin)", heroIngredient:"Viscose Exfoliating Cloth",
      editorNote:"The most satisfying exfoliation ritual on the planet.",
      originStory:"The Italy towel was developed in Korea in the 1960s after Korean War-era viscose fabric from Italy was repurposed. Bathhouse workers discovered the fabric's coarse weave was extraordinary at removing dead skin when softened in warm water.",
      villageSpotlight:"The jjimjilbang bathhouses of Itaewon and Mangwon-dong in Seoul remain packed at weekends. Professional seshin practitioners called ttemir scrub clients on wet tables in a service that has continued unchanged for 60 years.",
      theScience:"After 20+ minutes of warm water immersion, the outermost stratum corneum becomes sufficiently hydrated to be physically rolled off without damage. The Italy towel's viscose weave creates exactly the right friction for this without tearing healthy skin.",
      ritualInPractice:"After soaking for at least 20 minutes in warm water, the Italy towel is rubbed in firm, long strokes down the limbs and torso. Dead skin rolls off in visible gray ribbons — immediately visible and deeply satisfying. Most Koreans do this monthly.",
      ritual:"After soaking 20 minutes in warm water, the Italy towel is rubbed firmly down the body. At the jjimjilbang, this becomes a communal, social and deeply satisfying ritual.",
      shopLink:"#"
    }
  },
  {
    name:"France", flag:"🇫🇷", region:"Europe",
    philosophy:"Beauty is effortless, never overdone — the French enhance what they have rather than transforming it.",
    skincare:{
      product:"Micellar Water", heroIngredient:"Micelles in Purified Water",
      editorNote:"The lazy girl's skincare step that is actually genius.",
      originStory:"Micellar water was invented by necessity. In the 19th century, Parisian tap water was notoriously hard and harsh on skin. French pharmacies formulated purified water with micelles to allow Parisians to cleanse without damaging tap water.",
      villageSpotlight:"The thermal spring towns of Avène and La Roche-Posay — small villages in Occitanie and Nouvelle-Aquitaine — shaped French skincare's understanding of water and skin. Avène's spring, first used therapeutically in 1736, now supplies the entire Avène cosmetic range.",
      theScience:"Micelles are spherical molecular structures with a hydrophilic outer layer and a lipophilic core. When swept across skin on a cotton pad, the lipophilic centers attract and trap oil, makeup and impurities with no surfactant, no rinsing and zero disruption to the skin barrier.",
      ritualInPractice:"A generously soaked cotton pad is swept — not scrubbed — across the face in one direction per swipe. French women use micellar water morning and evening as their only cleansing step for everyday wear. The micelles do the work, not friction.",
      ritual:"A cotton pad soaked in micellar water swept gently across the face — morning and evening, no rinsing required.",
      shopLink:"#"
    },
    haircare:{
      product:"The No-Wash Method", heroIngredient:"Rice Starch & Kaolin Dry Shampoo",
      editorNote:"Proof that doing less is sometimes the most luxurious choice.",
      originStory:"The French habit of washing hair infrequently is a deliberate philosophy rooted in understanding that over-washing strips the scalp's natural sebum, triggering compensatory overproduction. Parisian hairdressers codified this as an aesthetic in the mid-20th century.",
      villageSpotlight:"The Parisian atelier of Alexandre de Paris — established in the 1950s near the Palais Royal — is where the concept of textured, undone French hair was codified. The principle: the best hair looks like it has not been fussed over.",
      theScience:"Scalp sebum is a complex lipid mixture that conditions hair naturally from root to tip. When washed away daily, sebaceous glands produce more. By extending intervals, the scalp recalibrates. Dry shampoo absorbs surface oil and imparts volume without stripping.",
      ritualInPractice:"French women wash their hair once or twice a week. Between washes, dry shampoo is applied to roots, massaged in and brushed through. The resulting texture — lightly greased at roots, slightly matte, imperfectly undone — is considered ideal.",
      ritual:"Hair is washed only once or twice a week. Dry shampoo between washes preserves natural oils and creates the effortless, lived-in texture the world has tried to replicate.",
      shopLink:"#"
    },
    makeup:{
      product:"Classic Red Lip", heroIngredient:"Long-wear Carmine Pigment",
      editorNote:"One product. One minute. Entirely unforgettable.",
      originStory:"The red lip as French symbol was cemented in the liberation of Paris in 1944. As Allied troops entered, French women queued at reopened pharmacies specifically for red lipstick — a symbol of defiance, freedom and femininity simultaneously.",
      villageSpotlight:"The town of Grasse in the Alpes-Maritimes region historically supplied the pigment houses that formulated French lipstick. Guerlain and Chanel continue to treat the precise blue-red-warm balance of each shade as proprietary formulation secrets.",
      theScience:"The most wearable classic red sits between a blue-red and an orange-red — warm enough to complement cool undertones, versatile across complexions. Carmine provides the most stable, rich red pigment. A creamy base ensures even application and prevents bleeding.",
      ritualInPractice:"The French red lip is applied without a liner by women who have worn it since their twenties. One precise pass, pressed together, excess blotted with a single tissue. The rest of the face is left intentionally bare. The red lip IS the look.",
      ritual:"A single bold red lip on otherwise bare skin. Applied in seconds, worn with complete confidence, as an entire look in itself.",
      shopLink:"#"
    },
    bodycare:{
      product:"Thermal Spring Water Spray", heroIngredient:"Selenium & Silica-rich Spring Water",
      editorNote:"France bottled its spa water and created a hero product.",
      originStory:"Avène's healing springs were first noted in 1736. In 1975, Pierre Fabre Laboratories bottled the spring water for the first time, creating one of France's most-sold skincare products. La Roche-Posay's spring has treated post-radiation skin patients since 1905.",
      villageSpotlight:"The village of Avène-les-Bains in Hérault has just 300 residents and over 2,000 skin patients yearly at its hydrotherapy center. The spring flows at a constant 13°C. La Roche-Posay in Vienne has its own selenium-rich spring uniquely effective for sensitive skin.",
      theScience:"Avène thermal water contains Aquaphilus dolomiae, a micro-organism producing calming postbiotics. La Roche-Posay water is uniquely rich in selenium — an immunomodulating mineral that calms the overactive immune response driving sensitive skin redness. Neither profile can be synthetically replicated.",
      ritualInPractice:"The spray is held 20-30cm from the face and misted lightly, then patted — never rubbed — dry. French dermatologists prescribe it after any skin procedure and after sun exposure. On the Avène hydrotherapy course, patients walk through a continuous mist for 20 minutes daily.",
      ritual:"Thermal water misted on throughout the day to soothe and refresh. Applied before creams and whenever redness flares, then gently patted dry.",
      shopLink:"#"
    }
  },
  {
    name:"Japan", flag:"🇯🇵", region:"Asia",
    philosophy:"Mochi skin — soft, smooth and translucent — is achieved through patience, ritual and deep respect for the skin.",
    skincare:{
      product:"Fermented Rice Water Lotion", heroIngredient:"Galactomyces Ferment Filtrate",
      editorNote:"The step most Westerners skip that makes all the difference.",
      originStory:"The Toji — Japan's master sake brewers — were known for extraordinarily soft and youthful hands despite aging elsewhere. In the 1970s, SK-II scientists spent five years isolating over 350 yeast strains before identifying galactomyces ferment filtrate as the key compound.",
      villageSpotlight:"The Nada sake brewing district in Hyogo Prefecture around Kobe is Japan's most prestigious sake-producing region. The Kikumasamune brewery, founded in 1659, was among the first to formally market sake-based skincare after noticing workers' remarkable skin for decades.",
      theScience:"Fermentation via koji mold breaks rice proteins and starches into smaller bioavailable molecules — amino acids, vitamins, kojic acid and galactomyces filtrate. These reduced molecular weights allow significantly deeper skin penetration. Kojic acid inhibits the tyrosinase enzyme responsible for melanin production.",
      ritualInPractice:"Japanese lotion is applied using te-ate: hands warmed first, a small amount pooled in the palm, then pressed gently into the face in sections. Multiple layers of three to five presses are preferred. Some women leave a cotton pad soaked in lotion on their face for five minutes as a mini mask.",
      ritual:"Japanese lotion is pressed into skin using te-ate — warming the product in palms before each layer. Multiple thin layers build deep hydration.",
      shopLink:"#"
    },
    haircare:{
      product:"Tsubaki Camellia Oil", heroIngredient:"Oleic Acid-rich Camellia Oil",
      editorNote:"One oil, centuries of proof — Japan keeps it beautifully simple.",
      originStory:"Tsubaki-abura has been used in Japan since at least the Edo period (1603–1868). Geisha applied it before setting elaborate hairstyles to achieve the mirror-like lacquered finish their profession required. The oil and the wooden tsuge gushi comb became inseparable beauty objects.",
      villageSpotlight:"The island of Oshima south of Tokyo — sometimes called Camellia Island — is the camellia heartland of Japan. Wild camellia trees cover the hillsides. Oshima camellia oil is cold-pressed using hand-harvested seeds and considered the finest in Japan.",
      theScience:"Camellia oil's oleic acid content — around 80–85% — closely mirrors the fatty acid composition of human sebum. In hair, oleic acid penetrates the cortex rather than coating the cuticle, filling micro-gaps from within and providing structural flexibility that prevents breakage.",
      ritualInPractice:"A single drop of tsubaki oil is applied to dry or slightly damp fingertips, worked through lengths and ends. Used as both a pre-styling serum and a finishing touch. Japanese women use it on eyebrows, eyelashes and the backs of hands as well.",
      ritual:"A single drop of camellia oil applied to dry ends smooths frizz and adds mirror-like gloss. Japanese women have used this since the Edo period.",
      shopLink:"#"
    },
    makeup:{
      product:"Luminous Skin-First Base", heroIngredient:"Hyaluronic Acid & Pearl Powder",
      editorNote:"Japanese makeup doesn't hide skin. It celebrates it.",
      originStory:"The Japanese approach to base makeup was shaped by the geisha tradition — a perfectly prepared skin surface achieved through skincare, not concealment. Japanese brands pioneered BB and CC creams in the 1980s for skin that looks like perfected skin, never a mask.",
      villageSpotlight:"Kyoto's Gion district — home to Japan's most celebrated geisha houses — remains the living reference for the Japanese ideal of skin beauty. The geiko and maiko of Gion undergo intensive skincare rituals using nuka rice bran and camellia oil to achieve luminous translucent skin.",
      theScience:"Pearl powder contains conchiolin — a structural protein — alongside calcium, amino acids and trace minerals. Clinical studies show conchiolin stimulates fibroblast activity and supports collagen synthesis. Hyaluronic acid creates a plumping, light-diffusing effect at the skin's surface.",
      ritualInPractice:"A Japanese skin-first base is applied in thin layers using fingertip pressing — never a brush or sponge. Coverage is built gradually and only where needed. The result should look like exceptionally healthy, hydrated skin.",
      ritual:"Japanese makeup is applied in translucent layers that mimic healthy skin. The goal is luminosity — skin that looks cared for, not concealed.",
      shopLink:"#"
    },
    bodycare:{
      product:"Ofuro Hot Bath with Hinoki Cypress", heroIngredient:"Hinoki Cypress Essential Oil",
      editorNote:"The world's most civilised nightly ritual.",
      originStory:"The ofuro — the Japanese soaking bath — has been central to Japanese domestic life since the Edo period. Bathing in Japan is distinct from washing: you wash before entering the bath, then soak purely for relaxation and ritual. Hinoki cypress wood elevated the ofuro to luxury.",
      villageSpotlight:"The forests of Kiso Valley in Nagano Prefecture are Japan's primary source of hinoki cypress. Only trees over 300 years old may be felled under strict forestry laws. The small city of Kiso-Fukushima is the gateway to Kiso hinoki country — the scent of hinoki is said to be the smell of Japan itself.",
      theScience:"Hinoki essential oil contains alpha-pinene, beta-pinene and hinokitiol — a tropolone compound with proven antibacterial properties. At bath temperature, volatile aromatic compounds are released into steam and absorbed transdermally. Studies show hinoki aromatherapy reduces cortisol and stimulates parasympathetic nervous system activity.",
      ritualInPractice:"The evening ofuro begins with showering outside the tub before entering. Water temperature is set to precisely 40–42°C. Hinoki bath oil or a hinoki wood panel is added. The soaking is done in silence. The ritual is the defining boundary between the work day and the evening.",
      ritual:"The evening ofuro bath — water at 40°C with hinoki cypress oil for deep relaxation and skin softening. Mindfulness practice as much as hygiene.",
      shopLink:"#"
    }
  },
  {
    name:"Morocco", flag:"🇲🇦", region:"Africa",
    philosophy:"Beauty is a ritual of hammam steam and ancient oils — Moroccan women transform the ordinary into the sacred.",
    skincare:{
      product:"Pure Argan Oil", heroIngredient:"Oleic Acid & Vitamin E",
      editorNote:"Morocco's liquid gold — the oil that changed everything.",
      originStory:"The argan tree has grown only in Morocco's Souss Valley for over 65 million years. Phoenician traders reportedly traded argan oil as early as 1,500 BCE. Renaissance explorer Leo Africanus brought the first documented vial to Europe in 1510, where it was valued alongside pepper and saffron.",
      villageSpotlight:"The women's cooperatives of the Arganeraie Biosphere Reserve near Essaouira are the living custodians of argan oil. Berber women crack argan nuts by hand, grind kernels on stone querns and press them using methods unchanged for centuries. UNESCO inscribed these practices on its Intangible Cultural Heritage list in 2014.",
      theScience:"Argan oil contains 80% oleic and linoleic acids, providing both barrier restoration and reduced transepidermal water loss. Its tocopherol (Vitamin E) content is 50% higher than olive oil by weight. Unique triterpene alcohols have documented anti-inflammatory properties.",
      ritualInPractice:"Moroccan women press two drops of pure argan oil between their palms, warming it to skin temperature, then press it into damp skin immediately after cleansing. In the cooperatives, women apply it to face, hands, hair and nails in one single ritual — it is used on everything.",
      ritual:"Two drops of pure argan oil pressed onto damp skin after cleansing. Moroccan women have used this liquid gold for centuries as an all-in-one moisturizer and treatment.",
      shopLink:"#"
    },
    haircare:{
      product:"Rhassoul Clay Hair Mask", heroIngredient:"Atlas Mountain Ghassoul Clay",
      editorNote:"The original deep-cleanse hair treatment, straight from the Atlas Mountains.",
      originStory:"Rhassoul clay — from the Arabic rassala, meaning to wash — has been mined from a single deposit in the Atlas Mountains near Fez for over 1,400 years. Historical records show it was traded throughout North Africa and the Middle East from the 8th century CE.",
      villageSpotlight:"The rhassoul deposit is located in the Middle Atlas near the village of Moulay Idriss, 30km from Fez. The clay is mined by hand and sun-dried before processing. Fez's historic medina is home to the oldest hammams in continuous operation in the world, many still using Atlas rhassoul.",
      theScience:"Rhassoul clay is a smectite mineral with an exceptionally high cation exchange capacity — its negatively charged molecular structure attracts and binds positively charged sebum molecules with extraordinary efficiency. Studies show rhassoul absorbs up to 70% more oil than kaolin clay and improves hair's wet combability by 25%.",
      ritualInPractice:"Rhassoul clay is mixed with rosewater and a few drops of argan oil to a thick paste. Applied to hair and scalp after steaming in the hammam, left for 20 minutes and rinsed thoroughly. In traditional hammams, the professional worker applies the mask and scrubs simultaneously.",
      ritual:"Atlas Mountain rhassoul clay mixed with rosewater applied to hair and scalp. After 20 minutes it draws out impurities while conditioning hair to extraordinary softness.",
      shopLink:"#"
    },
    makeup:{
      product:"Kohl & Henna Art", heroIngredient:"Kohl & Lawsone (Henna)",
      editorNote:"Moroccan beauty is art form, ceremony and identity all at once.",
      originStory:"Kohl has been used in Morocco for over 4,000 years — predating even Ancient Egyptian use. Moroccan kohl is traditionally prepared from stibnite (antimony sulphide) mixed with argan oil. Henna arrived via North Africa from the Indian subcontinent, carried by Berber trade routes across the Sahara.",
      villageSpotlight:"Marrakech's Jemaa el-Fna square is where henna artists (negaafas) have practiced publicly for centuries. In the Berber villages of the High Atlas near Ouarzazate, the traditional triangular and geometric henna patterns differ from Arabic floral styles, carrying specific tribal identity within the designs.",
      theScience:"Lawsone — the dye molecule in henna — penetrates the outer keratin layer of both skin and hair through a chemical bonding process. Unlike synthetic dyes, it bonds to amino acid residues in keratin rather than melanin, making it safe for hair structure. Kohl's antimony sulphide provides an intensely black pigment with documented antibacterial properties.",
      ritualInPractice:"Kohl is applied to the inner waterline with a traditional mirwad stick and extended outward to a point. Henna paste is applied through a cone in intricate patterns, left to dry for 2–6 hours and scraped off without water. Moroccan women cover their henna overnight with lemon-sugar water to intensify the color.",
      ritual:"Kohl frames the eyes while henna creates intricate art for celebrations. Both are rooted in Moroccan cultural identity — beauty as ceremony, as identity, as inheritance.",
      shopLink:"#"
    },
    bodycare:{
      product:"Beldi Black Soap Hammam Ritual", heroIngredient:"Saponified Olive Oil & Eucalyptus",
      editorNote:"The most luxurious skin-renewing ritual in the world.",
      originStory:"Beldi soap — from the Moroccan Arabic beldi, meaning traditional — is made from saponified olive oil, water and eucalyptus essential oil. It has been produced in Moroccan homes and souks for at least 1,200 years. The black color comes from olives pressed with their skins.",
      villageSpotlight:"The souk near Medersa Ben Youssef in Marrakech is lined with artisanal soap sellers who still produce beldi using traditional cold-process methods. In Essaouira, beldi is made with locally grown olives and Atlas cedar bark. The women of the Souss region produce the most prized beldi — almost black in color and intensely aromatic.",
      theScience:"Beldi's saponified olive oil provides both cleansing and moisturization simultaneously — oleic acid integrates with the skin's lipid barrier rather than stripping it. Eucalyptus provides cineole — a proven antibacterial compound. Hammam steam opens pores completely, maximising the subsequent kessa mitt exfoliation.",
      ritualInPractice:"In the hammam, the body is steamed for 15–20 minutes. Beldi soap is applied all over and left for five minutes. A kessa mitt is rubbed firmly down the body in long strokes. Dead skin rolls off in visible gray rolls. Argan oil is applied to the still-warm damp skin before leaving.",
      ritual:"Beldi black soap applied to steamed skin in the hammam, scrubbed away with a kessa mitt to reveal extraordinarily smooth renewed skin beneath.",
      shopLink:"#"
    }
  },
  {
    name:"India", flag:"🇮🇳", region:"Asia",
    philosophy:"Ayurveda teaches that beauty reflects inner balance — radiance comes from nourishing both body and soul.",
    skincare:{
      product:"Turmeric & Sandalwood Ubtan", heroIngredient:"Curcumin (Turmeric)",
      editorNote:"India's ancient bridal secret is the original glow treatment.",
      originStory:"Ubtan — from the Sanskrit word for paste — has been used in India for over 4,000 years. The haldi ceremony before Hindu weddings, where turmeric paste is applied to the bride and groom by family members, remains one of the world's oldest documented skincare rituals still in active practice.",
      villageSpotlight:"Erode in Tamil Nadu is the turmeric capital of the world, responsible for over 60% of India's turmeric production. The Erode turmeric market is the world's largest trading point for the spice. Farmers here have cultivated medicinal-grade turmeric using the same land and methods for generations.",
      theScience:"Curcumin — turmeric's active polyphenol — inhibits the tyrosinase enzyme responsible for melanin production, gradually brightening pigmentation and post-acne marks. It simultaneously inhibits inflammatory cytokines, reducing active breakouts and redness. Sandalwood's alpha-santalol provides additional anti-inflammatory and antimicrobial properties.",
      ritualInPractice:"A thick paste of turmeric, sandalwood powder, raw milk and a few drops of rose water is applied to the face and left to dry for 20 minutes. The removal is done by rubbing in circular motions with damp hands — the friction provides gentle exfoliation simultaneously. The skin glows immediately afterwards.",
      ritual:"Turmeric and sandalwood paste applied and dried for 20 minutes, removed by gentle rubbing. Skin glows immediately. Used weekly and before significant occasions.",
      shopLink:"#"
    },
    haircare:{
      product:"Brahmi & Amla Hot Oil Treatment", heroIngredient:"Amla (Indian Gooseberry)",
      editorNote:"The Ayurvedic hair ritual that Indian women have sworn by for thousands of years.",
      originStory:"Amla — the Indian gooseberry — is one of Ayurveda's most sacred plants, mentioned in texts dating back to 2500 BCE. The Charaka Samhita, one of Ayurveda's founding texts, describes amla as the single most important plant for hair health. Brahmi oil has been prepared in South Indian households for generations.",
      villageSpotlight:"The Nilgiri Hills in Tamil Nadu and Kerala are the primary growing region for brahmi (Bacopa monnieri), while amla trees grow across the Gangetic plains and are especially abundant in Uttar Pradesh's forests. Ayurvedic apothecaries in Varanasi and Kochi still prepare these oils using traditional stone-grinding and slow-cooking methods.",
      theScience:"Amla contains the highest concentration of natural Vitamin C of any known plant — 20 times that of an orange — alongside tannins and gallic acid that inhibit 5-alpha reductase (the enzyme driving androgenic hair loss). Brahmi contains bacosides which improve scalp circulation and reduce cortisol-related hair shedding.",
      ritualInPractice:"Oil is warmed over a low flame until fragrant, then massaged in slow circular motions starting from the scalp outwards, working section by section. The hair is then wrapped in a warm towel for at least an hour, ideally overnight. This weekly ritual is considered as much meditative practice as haircare.",
      ritual:"Warm brahmi and amla oil massaged into the scalp in slow circular motions, left overnight under a warm towel. Weekly practice that calms the mind as it nourishes the hair.",
      shopLink:"#"
    },
    makeup:{
      product:"Kajal Eye Ritual", heroIngredient:"Traditional Kohl & Carbon Black",
      editorNote:"The world's oldest eye makeup — and still unbeatable.",
      originStory:"Kajal has been used in India for over 5,000 years. Ancient texts describe it as protective as well as cosmetic — kajal was applied to infants' eyes to protect against the evil eye and to adults to shield against harsh sun glare. The preparation of kajal from lamp soot mixed with ghee was a household practice across the subcontinent.",
      villageSpotlight:"Rajasthan — particularly Jaipur and Jodhpur — is the heartland of traditional kajal craft. Artisan families in the old bazaars of Jaipur's Pink City still prepare kajal by the ancient method: collecting soot from a ghee lamp, mixing it with almond oil and cooling it on a copper vessel. The Rajasthani kajal is considered the blackest and most intense in India.",
      theScience:"Traditional kajal prepared from lamp carbon contains fine carbonaceous particles that provide intense, matte black pigment. The ghee or almond oil base softens application and provides a light conditioning effect on the waterline. Applied to the inner waterline, kajal visually enlarges the eye more dramatically than liner applied only to the upper lash line.",
      ritualInPractice:"Kajal is applied to the inner waterline of both upper and lower lids using a rounded stick. The technique — a single confident stroke pulling slightly outward at the outer corner — is taught by mothers to daughters. A smudged, slightly smoky effect is considered more beautiful than a precise line.",
      ritual:"Kajal applied to the inner waterline with a single confident stroke. The world's most ancient eye ritual — taught from mother to daughter across five millennia.",
      shopLink:"#"
    },
    bodycare:{
      product:"Abhyanga Self-Massage with Sesame Oil", heroIngredient:"Cold-pressed Sesame Oil",
      editorNote:"Ayurveda's ultimate act of self-love — and it works.",
      originStory:"Abhyanga — full body self-massage with warm oil — is one of Ayurveda's foundational daily practices (dinacharya). The Ashtanga Hridayam, written in the 7th century CE, dedicates an entire chapter to the practice, calling it essential for longevity, softness of skin and resistance to fatigue and disease.",
      villageSpotlight:"The Ayurvedic treatment centers of Kerala — particularly in the villages of Thrissur and the Vaidya families of Kottakkal — are considered the living keepers of authentic abhyanga practice. The Kerala tradition differs from North Indian practice in using slightly lighter oils and longer, more meditative strokes.",
      theScience:"Sesame oil contains sesamolin and sesamol — unique lignans with potent antioxidant activity. Its warmth at skin temperature ensures deep penetration. The physical massage stimulates lymphatic drainage, improving circulation and removing accumulated metabolic waste from tissues. Studies show regular abhyanga reduces systolic blood pressure and cortisol levels.",
      ritualInPractice:"Sesame oil is warmed in a small vessel until comfortably hot to the touch. Applied from scalp to feet in long strokes along the limbs and circular motions over joints, working for 20 minutes. Left on for a minimum of 20 minutes before showering — not bathing. The shower is taken with hot water only, no soap, preserving the oil's effects.",
      ritual:"Warm sesame oil massaged from scalp to feet in slow, intentional strokes. Left on for 20 minutes before a hot shower. Ayurveda's foundational daily ritual for longevity.",
      shopLink:"#"
    }
  },
  {
    name:"Brazil", flag:"🇧🇷", region:"Americas",
    philosophy:"Brazilian beauty is unapologetic — bold, sensorial and deeply connected to the natural world of the Amazon.",
    skincare:{
      product:"Açaí & Buriti Face Oil", heroIngredient:"Buriti Oil (Mauritia flexuosa)",
      editorNote:"The Amazon's best-kept beauty secret — now the world's most coveted facial oil.",
      originStory:"Buriti oil is extracted from the fruit of the Mauritia flexuosa palm, known in Brazil as the 'tree of life'. Indigenous communities of the Cerrado and Amazon basin have used buriti for food, shelter and skincare for thousands of years. It was first documented in Western scientific literature in the 1970s when researchers analyzed its extraordinary beta-carotene content.",
      villageSpotlight:"The women of the Karajá people — indigenous to the Araguaia River region of central Brazil — have harvested and pressed buriti oil for generations. Sustainable cooperative harvesting initiatives in Maranhão state now allow Karajá and Guaraní women to produce and sell their oil globally while preserving the traditional extraction process.",
      theScience:"Buriti oil contains one of the highest concentrations of beta-carotene of any known plant oil — 20 times more than carrots by weight. Beta-carotene converts to Vitamin A at the skin's surface, stimulating collagen synthesis and accelerating cell turnover. Its oleic and palmitoleic acid content provides exceptional barrier restoration.",
      ritualInPractice:"In the Cerrado, buriti oil is warmed in the palm and pressed into damp skin after bathing. Brazilian women use it as a body oil as well as a facial oil — often mixed with a small amount of açaí powder for additional antioxidant power. It is also used to protect the skin before sun exposure in a tradition that predates commercial sunscreen by thousands of years.",
      ritual:"A few drops of buriti oil pressed into damp skin after bathing, used on face and body. The Amazon's answer to aging — rich in beta-carotene and deeply nourishing.",
      shopLink:"#"
    },
    haircare:{
      product:"Brazilian Keratin Treatment", heroIngredient:"Keratin Protein Complex",
      editorNote:"The treatment that revolutionised how the world manages frizzy hair.",
      originStory:"The Brazilian keratin treatment was developed in Rio de Janeiro in 2003, reportedly originating when a funeral home director noticed that formaldehyde used in embalming straightened curly hair. Brazilian hairdressers refined the formula using keratin protein — the structural component of hair — and the treatment went global within five years.",
      villageSpotlight:"The salons of Copacabana and Ipanema in Rio de Janeiro — where humidity is extreme and natural hair textures are wonderfully diverse — are where keratin treatments were first commercialized. Brazilian haircare culture is shaped by the country's extraordinary ethnic diversity, demanding formulas that work across all hair types and textures.",
      theScience:"Hair keratin consists of disulphide bonds between cysteine amino acids that determine its shape and texture. The keratin treatment works by temporarily cross-linking these bonds in a straighter configuration using heat, while depositing additional keratin protein to fill gaps in the hair's cuticle. The result is reduced porosity, smoother texture and significantly reduced frizz.",
      ritualInPractice:"A trained stylist applies keratin solution section by section, combs it through and seals it with a flat iron at high heat. The treatment takes 2–3 hours in salon and must not be washed for 3 days after application. Results last 3–6 months depending on hair porosity and wash frequency.",
      ritual:"A professional salon treatment applied with a flat iron that seals keratin protein into the hair shaft, eliminating frizz for 3–6 months.",
      shopLink:"#"
    },
    makeup:{
      product:"Bronzed Glow Routine", heroIngredient:"Vitamin C & Fine Shimmer Pigments",
      editorNote:"Brazil taught the world that sun-kissed is a state of mind.",
      originStory:"Brazilian beach culture — born in Rio de Janeiro's Ipanema and Copacabana beaches in the 1960s — created the global template for bronzed skin as the beauty ideal. The bossa nova and Carnival aesthetic merged into a beauty standard that valued glowing, healthy, luminous skin over pale, matte skin.",
      villageSpotlight:"The beauty salons of Ipanema — particularly on Rua Garcia d'Ávila — are the creative hub of Brazilian makeup artistry. Brazilian makeup artists pioneered the 'no makeup makeup' look for beach culture: sun protection underneath, bronzer and highlighter over healthy skin, nothing else.",
      theScience:"Vitamin C serums used as the base layer provide antioxidant protection while brightening skin. Bronzer pigments containing fine iron oxides mimic the warmth of a natural tan without UV damage. Strategic highlighter placement on the cheekbones and nose bridge uses light diffraction to create three-dimensionality.",
      ritualInPractice:"Vitamin C serum applied to clean skin, followed by SPF. A warm bronzer swept across the forehead, cheeks and nose bridge — wherever the sun would naturally hit. A liquid highlighter pressed to cheekbones and inner corners. Nothing else. Brazilian women never over-apply.",
      ritual:"Vitamin C serum, SPF, a sweep of warm bronzer and a touch of highlighter. Minimal, sun-kissed and deeply confident.",
      shopLink:"#"
    },
    bodycare:{
      product:"Guaraná & Coffee Body Scrub", heroIngredient:"Caffeine & Guaraná Extract",
      editorNote:"Brazil's anti-cellulite ritual — backed by real science.",
      originStory:"Guaraná — a native Amazonian plant with seeds containing twice the caffeine of coffee beans — has been used by the Sateré-Mawé indigenous people for centuries as an energising tonic. Brazilian women adopted guaraná and coffee grounds as a topical body treatment in a home beauty tradition that long predates commercial cellulite creams.",
      villageSpotlight:"The Sateré-Mawé people of Amazonas state are the original cultivators of guaraná and hold legal protection over its traditional use. Today, guaraná is grown in Maués in Amazonas and Bahia state. The annual Guaraná Festival in Maués celebrates the plant's cultural significance with traditional rituals.",
      theScience:"Topical caffeine is one of the few ingredients with documented efficacy on cellulite appearance. It works by inhibiting phosphodiesterase — an enzyme that breaks down cAMP, the molecule responsible for triglyceride metabolism in fat cells. Higher cAMP = increased lipolysis = reduced fat cell volume beneath the skin's surface.",
      ritualInPractice:"Used coffee grounds mixed with guaraná powder and a small amount of coconut oil are applied to damp skin and massaged in vigorous circular motions for five minutes before showering. Brazilian women do this three times a week in the shower, focusing on thighs, hips and buttocks. Results are visible within four to six weeks of consistent use.",
      ritual:"Coffee grounds and guaraná powder scrubbed vigorously into damp skin before showering. Used three times a week for visible, scientifically-supported results.",
      shopLink:"#"
    }
  },
  {
    name:"Sweden", flag:"🇸🇪", region:"Europe",
    philosophy:"Swedish beauty is rooted in lagom — just enough, not too much. Clean, minimal and profoundly effective.",
    skincare:{
      product:"Cloudberry & Sea Buckthorn Serum", heroIngredient:"Sea Buckthorn Berry Oil",
      editorNote:"Scandinavia's sub-zero conditions produced some of the most potent botanicals on earth.",
      originStory:"Sea buckthorn (Hippophae rhamnoides) grows on the Nordic coastline, enduring extreme cold and harsh winds. Scandinavian women have used its bright orange berries in skincare and diet since Viking times. Swedish cosmetic scientists in the 1990s began formally studying its extraordinary fatty acid profile and brought it into modern skincare formulation.",
      villageSpotlight:"The archipelago islands of the Stockholm coast and the windswept shores of Gotland island are prime sea buckthorn habitat. Small Swedish cooperatives harvest the berries by hand in late autumn — the extreme cold they endure gives the berries an unusually high concentration of protective compounds.",
      theScience:"Sea buckthorn seed oil contains the rare omega-7 fatty acid (palmitoleic acid) which is a structural component of the skin's own sebum — making it extraordinarily biocompatible. It contains all four fat-soluble vitamins (A, D, E and K) alongside 190 bioactive compounds. Its Vitamin C content is 15 times higher than oranges.",
      ritualInPractice:"A single drop of concentrated sea buckthorn oil is mixed into moisturizer or pressed alone into damp skin. Swedish women use it heavily in winter months when UV levels drop and the combination of cold and central heating dramatically depletes skin moisture. The orange color fades completely once absorbed.",
      ritual:"One drop of potent sea buckthorn oil mixed into moisturizer or pressed directly into damp skin. Scandinavia's answer to the long dark winter.",
      shopLink:"#"
    },
    haircare:{
      product:"Birch Sap Hair Rinse", heroIngredient:"Birch Sap (Betula pendula)",
      editorNote:"What Swedes have been doing since the Iron Age — for a reason.",
      originStory:"Birch sap — tapped in early spring when sap rises through the tree before leaves emerge — has been collected in Scandinavia since at least the Iron Age. Swedish farmers used it as a spring tonic drink and hair rinse, noting that it strengthened both body and hair after the nutrient-depleted winter months.",
      villageSpotlight:"Birch forests cover 22% of Sweden's land area. In the rural villages of Dalarna and Jämtland — Sweden's traditional heartland — the tapping of birch sap in early April is still practiced as a spring ritual. The window for tapping is only two weeks per year — the sap must be harvested quickly before the leaves emerge.",
      theScience:"Birch sap contains xylitol, fructose, organic acids, amino acids and minerals including silica. Silica strengthens the hair shaft and stimulates keratin synthesis. The xylitol has documented efficacy against Malassezia — the yeast responsible for dandruff. Applied as a rinse, birch sap remineralises the scalp and improves hair thickness over time.",
      ritualInPractice:"Fresh or bottled birch sap is poured through clean hair after shampooing, massaged gently into the scalp for 2–3 minutes and left as a final rinse — not washed out. Swedish women use it weekly in spring and preserve it in bottles throughout the year. It has no scent when applied and dries invisibly.",
      ritual:"Birch sap poured through hair after washing, massaged into the scalp and left in as a final rinse. A Scandinavian spring ritual for stronger, fuller hair.",
      shopLink:"#"
    },
    makeup:{
      product:"Nordic Naked Skin Look", heroIngredient:"Tinted SPF & Lip Tint",
      editorNote:"Swedish beauty proves that 'no makeup' is its own distinct aesthetic.",
      originStory:"Swedish beauty minimalism emerged from the cultural concept of lagom — a specifically Swedish notion meaning 'just the right amount.' Applied to beauty, lagom means enhancing without overdoing, looking healthy and effortless rather than made-up. Swedish makeup artists in the 1990s — including many who shaped the global 'clean girl' aesthetic — brought this philosophy to international runways.",
      villageSpotlight:"Stockholm's Östermalm district — the city's elegant, understated neighborhood — is where the Scandinavian beauty aesthetic was commercially codified. Swedish pharmacy chain Apotek Hjärtat (Heart Pharmacy) shaped the modern Swedish approach to beauty as health, not artifice.",
      theScience:"High-SPF tinted moisturizers provide UV protection while evening skin tone. Hyaluronic acid in the base provides a naturally plump, dewy effect. The goal is to amplify skin's existing luminosity rather than apply color — which requires genuinely well-maintained skin underneath, reinforcing the Swedish focus on skincare-first.",
      ritualInPractice:"A tinted SPF moisturizer applied with fingertips, a barely-there flush on the cheeks in a pink or peach tone, tinted lip balm, a single coat of mascara. Nothing else. Swedish women are comfortable going without foundation entirely on healthy skin. The look takes under three minutes and requires genuine skincare investment to work.",
      ritual:"Tinted SPF, a whisper of blush, tinted lip balm, mascara. Lagom in action — just enough, beautifully executed.",
      shopLink:"#"
    },
    bodycare:{
      product:"Sauna & Cold Plunge Ritual", heroIngredient:"Heat, Steam & Birch Whisk",
      editorNote:"Sweden's answer to everything — and science completely agrees.",
      originStory:"The sauna is Finnish in origin but has been deeply embedded in Swedish culture for over 1,000 years. Viking longhouses included sauna rooms. Swedish saunas became central to social and bathing life, with the birch whisk (björkris) used to improve circulation and fragrance the steam since ancient times.",
      villageSpotlight:"Sweden's Lake Mälaren region — with the old town of Sigtuna as its cultural center — has the highest density of traditional wood-burning saunas in the country. Many Swedish summer cottages include private saunas, and lakeside jumping after the sauna is a cultural institution. The village saunas of Dalarna county operate communally through winter.",
      theScience:"Heat exposure at 80–100°C dilates blood vessels and dramatically increases cutaneous blood flow. The subsequent cold plunge induces rapid vasoconstriction, flushing metabolic waste and dramatically reducing inflammation. Repeated heat-cold cycles improve cardiovascular endurance and have been shown to reduce all-cause mortality by 40% in regular sauna users.",
      ritualInPractice:"The Swedish sauna ritual: 15–20 minutes in the sauna at high heat, immediately followed by cold water immersion or lake jumping. Repeated two to three times. The björkris birch whisk is gently beaten against the skin to increase circulation. The ritual ends with a slow cooling period and a period of rest — equally important to the heat.",
      ritual:"20 minutes in a wood-burning sauna followed by cold lake plunge. Repeated two to three times. Sweden's ritual for skin, circulation, mood and longevity.",
      shopLink:"#"
    }
  },
  {
    name:"Nigeria", flag:"🇳🇬", region:"Africa",
    philosophy:"Nigerian beauty is bold, intentional and ceremonial — every product applied is an act of heritage and pride.",
    skincare:{
      product:"Shea Butter & Black Soap Routine", heroIngredient:"Unrefined Shea Butter",
      editorNote:"The ingredient that outperforms everything — and costs almost nothing.",
      originStory:"Shea butter — ori in Yoruba, nkuto in Igbo — has been produced by West African women for at least 1,500 years. Ancient trade routes connected the shea belt with North Africa, Arabia and Europe. Cleopatra reportedly required caravans of shea butter to be transported to Egypt. Queen Nefertiti was documented to have used it on her skin.",
      villageSpotlight:"The shea belt stretches across northern Nigeria, Ghana, Burkina Faso and Mali. In Benue and Kogi states of central Nigeria, women's shea cooperatives produce raw unrefined shea butter using the traditional boil-and-skim extraction method — a process passed exclusively from mother to daughter for generations.",
      theScience:"Unrefined shea butter contains 60% stearic and oleic fatty acids alongside significant concentrations of triterpene alcohols (lupeol, beta-amyrin) with potent anti-inflammatory activity. Its unsaponifiable fraction — the fraction that doesn't convert to soap — is remarkably high at 9–11%, compared to 1% in most plant oils, making it extraordinarily effective at skin barrier repair.",
      ritualInPractice:"In Northern and Middle Belt Nigeria, shea butter is applied to slightly damp skin after bathing — pressed in with the full palm rather than fingertips to maximize surface area coverage. Nigerian women apply it to their children's skin from birth, maintaining the tradition across generations. It is used on face, body, hair and as a lip treatment.",
      ritual:"Unrefined shea butter pressed into damp skin after bathing. Used on face, body, hair and lips since birth — the multi-generational cornerstone of West African skincare.",
      shopLink:"#"
    },
    haircare:{
      product:"African Black Soap Scalp Treatment", heroIngredient:"Plantain Ash & Palm Kernel Oil",
      editorNote:"Black soap is the original multi-use hero — and the most underrated ingredient in beauty.",
      originStory:"African black soap — ose dudu in Yoruba, alata samina in Akan — originated in West Africa over 1,500 years ago. The soap is made by burning plantain skins, cocoa pods and palm fronds to ash, then mixing the ash with water, palm oil, shea butter and coconut oil. The formula has remained unchanged and is still produced almost entirely by women.",
      villageSpotlight:"The Yoruba towns of Osogbo and Abeokuta in Ogun State, Nigeria, are the heartland of authentic black soap production. Osogbo — a UNESCO World Heritage city — is home to craft cooperatives where black soap is still prepared and sun-dried outdoors on wooden racks. The soap changes texture with weather and season in a way industrial soap never does.",
      theScience:"Black soap's high pH (around 11–12) provides excellent scalp-cleansing and anti-fungal activity against Malassezia. Palm oil's high carotene content provides antioxidant protection. The plantain ash contains potassium and saponins that gently cleanse without stripping. When used as a shampoo, it removes buildup without disrupting the scalp microbiome.",
      ritualInPractice:"A small piece of black soap is lathered in warm water, applied to the scalp and massaged for 3–5 minutes before thorough rinsing. It is followed by a deep shea butter conditioning treatment. Nigerian women use it weekly for scalp health. The soap also doubles as a face wash, body bar and shaving soap — one product, unlimited uses.",
      ritual:"Black soap massaged into the scalp weekly followed by a deep shea butter conditioning treatment. The original multi-tasking beauty product.",
      shopLink:"#"
    },
    makeup:{
      product:"Aso-Oke Ceremonial Glow", heroIngredient:"Face Powder & Highlighter",
      editorNote:"Nigerian celebrations demand skin that glows from across the room.",
      originStory:"Nigerian ceremonial beauty — particularly for events like traditional weddings (introduction ceremonies, engagement parties and white weddings), naming ceremonies and festivals — has developed its own distinct aesthetic. The gele head wrap, aso-oke fabric and skin that is visibly, dramatically luminous under festival lighting defines the Naija bride look that has gone global via Nigerian social media.",
      villageSpotlight:"Lagos Island — Balogun market and Idumota — is the world's largest market for African fabric and beauty supplies. The beauty parlours of Surulere, Lekki and Victoria Island are where Nigeria's extraordinary makeup artists refined the 'Naija bride' technique that has influenced African-American, UK Black and diaspora beauty globally.",
      theScience:"Deep skin tones — from NC45 to NC55 in foundation matching — require specially calibrated pigments that provide color without ashiness or gray cast. Gold-toned highlighters with large-particle shimmer provide the dramatic ceremonial luminosity associated with Nigerian celebrations. Blue-toned highlighters create the appearance of gray cast on deeper skin tones.",
      ritualInPractice:"A full coverage foundation matched precisely to neck and chest, set with a translucent or banana setting powder to prevent flashback. Dramatic contour and highlight applied for the event's lighting conditions. The final step — body luminiser applied to shoulders, décolletage and arms — transforms the look from face makeup to full-body ceremony.",
      ritual:"Full coverage foundation, dramatic contour and highlight, body luminiser on shoulders and décolletage. Nigerian celebration beauty — luminous, intentional and joyful.",
      shopLink:"#"
    },
    bodycare:{
      product:"Ori Body Butter Ritual", heroIngredient:"Unrefined Shea (Ori) & Coconut Oil",
      editorNote:"The body ritual that gives Nigerian women the most enviable skin in the world.",
      originStory:"Ori — the Yoruba word for shea butter — has been used as a body butter in Yoruba culture for centuries. In Yoruba cosmology, ori also refers to the personal spirit or soul that guides an individual's destiny — the fact that the word for shea butter and the word for one's spirit are identical reflects how profoundly the ingredient is embedded in cultural identity.",
      villageSpotlight:"In the markets of Ibadan, Ife and Akure in Yoruba land, raw ori is sold in carved calabash vessels or wrapped in leaves. The freshest, most fragrant unrefined shea comes from cooperatives in Kwara and Kogi states where women press it cold — the traditional method that preserves the most active compounds.",
      theScience:"The combination of shea butter and coconut oil creates a complementary fatty acid profile: shea's high stearic acid provides long-lasting barrier function while coconut's lauric acid provides antibacterial protection and rapid absorption. Applied to damp post-bath skin, the moisture is sealed into the stratum corneum, not just applied to the surface.",
      ritualInPractice:"A generous amount of ori whipped with coconut oil and a few drops of rose or orange blossom water is applied immediately after stepping out of the shower while the skin is still slightly wet. Massaged in long strokes from feet upwards. Nigerian women often add powdered cloves, turmeric or sandalwood for additional fragrance and antibacterial benefit.",
      ritual:"Whipped shea and coconut oil applied immediately after showering on damp skin, massaged from feet upwards in long strokes. The cornerstone of West African body rituals.",
      shopLink:"#"
    }
  },
  {
    name:"Australia", flag:"🇦🇺", region:"Oceania",
    philosophy:"Australian beauty is sun-smart, sustainable and deeply connected to the ancient wisdom of the land.",
    skincare:{
      product:"Kakadu Plum Vitamin C Serum", heroIngredient:"Kakadu Plum Extract",
      editorNote:"The world's most potent natural Vitamin C source — and Australia has had it for 65,000 years.",
      originStory:"Kakadu plum (Terminalia ferdinandiana) has been used by Aboriginal Australians for food and medicine for at least 65,000 years — making it part of the longest continuous food tradition on Earth. Australian cosmetic scientists identified its extraordinary Vitamin C content in the 1990s and the ingredient entered commercial skincare formulation in the early 2000s.",
      villageSpotlight:"Kakadu plum grows in the savanna woodlands of the Northern Territory, Western Australia and Queensland. Aboriginal communities in Arnhem Land and the Kimberley region harvest the plums sustainably. A number of certified 'First Nations' skincare brands — including Uluru-based producers — now bring the ingredient to market under Indigenous ownership and profit-sharing agreements.",
      theScience:"Kakadu plum contains up to 5,300mg of Vitamin C per 100g of fruit — 100 times more than oranges by weight. This makes it the highest known natural source of ascorbic acid on earth. Topical Vitamin C at this concentration inhibits tyrosinase, reduces hyperpigmentation, stimulates collagen synthesis and provides potent antioxidant protection against UV-induced free radical damage.",
      ritualInPractice:"A Kakadu plum Vitamin C serum is applied to clean skin in the morning after cleansing and before SPF — the two products work synergistically, with Vitamin C providing antioxidant protection and SPF blocking UV. Australian women (with some of the highest melanoma rates in the world) combine both religiously.",
      ritual:"Kakadu plum Vitamin C serum applied to clean skin every morning before SPF. Australia's 65,000-year botanical secret, now confirmed by clinical science.",
      shopLink:"#"
    },
    haircare:{
      product:"Tea Tree Scalp Treatment", heroIngredient:"Tea Tree Oil (Melaleuca alternifolia)",
      editorNote:"Australia's most well-known botanical — and genuinely one of the most effective.",
      originStory:"Tea tree oil has been used by the Bundjalung people of New South Wales for thousands of years as an antiseptic wound treatment. The name 'tea tree' was given by Captain James Cook's crew in 1770 after brewing the leaves as a substitute for tea. Scientific documentation of its antimicrobial properties began in the 1920s.",
      villageSpotlight:"The Bundjalung nation of northern New South Wales — around the Ballina and Lismore area — is the geographic origin of Melaleuca alternifolia, the specific tea tree species with the highest documented antimicrobial activity. Sustainable Australian tea tree farms now operate across this region under protocols developed with Aboriginal land owners.",
      theScience:"Tea tree oil's primary active compound — terpinen-4-ol — disrupts the cell membrane of bacteria, fungi and yeast, including Malassezia, the yeast responsible for dandruff and seborrhoeic dermatitis. At a concentration of 5% in shampoo, it has been clinically proven to reduce dandruff by 41% within four weeks.",
      ritualInPractice:"A few drops of tea tree oil diluted in carrier oil (never applied neat to the scalp) are massaged into the scalp before shampooing, left for 10 minutes. Alternatively, 5–10 drops added to regular shampoo provides consistent antimicrobial treatment. Australian women use it weekly during humid summer months when scalp conditions worsen.",
      ritual:"A few drops of tea tree oil diluted in carrier oil massaged into the scalp weekly. Australia's most powerful natural antiseptic applied to where it does most good.",
      shopLink:"#"
    },
    makeup:{
      product:"SPF-First Tinted Moisturizer Look", heroIngredient:"Zinc Oxide & Tinted Pigments",
      editorNote:"Australia invented sun-smart beauty long before it was fashionable.",
      originStory:"Australia has the world's highest rate of skin cancer — two in three Australians will be diagnosed with skin cancer by the age of 70. This reality shaped Australian beauty culture fundamentally. Australian cosmetic companies led the global development of SPF-integrated base makeup in the 1980s, driven by government public health campaigns that made UV protection a national priority.",
      villageSpotlight:"Sydney's Bondi Beach — the most visited beach in the Southern Hemisphere — has been ground zero for Australian sun-smart beauty culture since the lifeguard movement began there in 1907. The distinctive zinc oxide noses of Australian lifeguards became the cultural symbol of UV protection before sunscreen bottles existed.",
      theScience:"Mineral zinc oxide provides broad-spectrum UVA and UVB protection by physically scattering UV radiation, unlike chemical filters that absorb and convert it. Non-nano zinc oxide particles do not penetrate the skin barrier. SPF 50+ blocks 98% of UVB radiation. In Australia, cosmetic claims for SPF products are regulated by the Therapeutic Goods Administration to pharmaceutical standards.",
      ritualInPractice:"An SPF 50+ tinted moisturizer is applied as the only base product — Australian women do not layer foundation over SPF as this disrupts the protective film. Waterproof formulas are reapplied every two hours during sun exposure. The look is minimal, fresh and healthy — makeup is an afterthought to protection.",
      ritual:"SPF 50+ tinted moisturizer applied as the base and reapplied every two hours outdoors. In Australia, sun protection is the non-negotiable foundation of every beauty routine.",
      shopLink:"#"
    },
    bodycare:{
      product:"Eucalyptus & Lemon Myrtle Body Scrub", heroIngredient:"Eucalyptus Oil & Lemon Myrtle",
      editorNote:"Australia's botanical landscape is one of the most potent in the world — and its body care reflects this.",
      originStory:"Eucalyptus has been used by Aboriginal Australians for thousands of years as a healing vapour and topical antiseptic. Lemon myrtle — native to subtropical rainforests of Queensland — was used by rainforest communities as a cooking herb and skin treatment. Both plants were documented in the first European botanical surveys of Australia in the late 1700s.",
      villageSpotlight:"The eucalyptus forests of the Blue Mountains west of Sydney and the lemon myrtle forests of the Sunshine Coast hinterland in Queensland are both significant to Aboriginal cultural heritage. Several First Nations-owned enterprises in the Northern Territory now produce certified Indigenous skincare products using traditional plants under profit-sharing agreements.",
      theScience:"Lemon myrtle (Backhousia citriodora) contains the highest known concentration of citral — a naturally-occurring antimicrobial and antifungal compound — of any plant on earth. Eucalyptus globulus oil's 1,8-cineole content provides anti-inflammatory and analgesic effects on the skin. Combined in a scrub, they provide mechanical exfoliation alongside antimicrobial and aromatic therapy.",
      ritualInPractice:"Mixed with sea salt or sugar and coconut oil, eucalyptus and lemon myrtle scrub is applied to damp skin in the shower and massaged in circular motions before rinsing. The aromatic compounds evaporate upward in the shower steam, providing simultaneous inhalation therapy. Used two to three times a week.",
      ritual:"Eucalyptus and lemon myrtle body scrub massaged in the shower steam. Australia's unique botanicals working simultaneously on skin and senses.",
      shopLink:"#"
    }
  },
  {
    name:"Egypt", flag:"🇪🇬", region:"Africa",
    philosophy:"Egyptian beauty is the original science — 5,000 years of recorded formulation, tested on history's most celebrated faces.",
    skincare:{
      product:"Black Seed & Honey Face Mask", heroIngredient:"Nigella Sativa (Black Seed) Oil",
      editorNote:"Cleopatra's actual skincare — finally confirmed by modern science.",
      originStory:"Black seed oil — known in Arabic as habbatus sauda — was found in Tutankhamun's tomb and has been used in Egyptian medicine since at least 1550 BCE, documented in the Ebers Papyrus. The Prophet Muhammad reportedly said of black seed 'there is healing in it for every disease except death.' Egyptian women have applied it to skin and hair for millennia.",
      villageSpotlight:"The Nile Valley region of Upper Egypt — particularly around Luxor and Aswan — is where wild Nigella sativa has grown naturally and been harvested since Pharaonic times. Egyptian black seed is considered superior to Indian or Ethiopian varieties due to the specific alluvial soil of the Nile Delta. Small family farms in the El-Minia governorate produce cold-pressed oil using stone presses.",
      theScience:"Black seed oil's primary active compound — thymoquinone — has documented anti-inflammatory, antibacterial and antifungal properties across over 1,000 published studies. Its thymol content makes it effective against the bacterial strains responsible for acne. Raw honey is one of the most effective wound-healing ingredients known, with osmotic and antimicrobial properties confirmed by clinical trials.",
      ritualInPractice:"A small amount of black seed oil is mixed with Sidr or clover honey into a paste, applied to clean skin and left for 20 minutes. Egyptian women use this preparation for acne, dryness and as a general maintenance mask. It is also applied neat as a spot treatment overnight on active breakouts.",
      ritual:"Black seed oil mixed with raw honey applied as a mask for 20 minutes. An ancient Egyptian preparation confirmed by modern science — over 1,000 studies and counting.",
      shopLink:"#"
    },
    haircare:{
      product:"Castor & Black Seed Hair Oil", heroIngredient:"Cold-pressed Castor Oil",
      editorNote:"Egypt grew and sold castor oil while other civilisations were still using animal fat.",
      originStory:"Castor oil from the Ricinus communis plant has been used in Egypt since at least 4000 BCE. The Ebers Papyrus — a 3,500-year-old medical document — contains specific instructions for using castor oil as a hair growth treatment. Egyptian women also used it as a lamp oil, lubricant and medicine, making it one of the most versatile plants in the ancient world.",
      villageSpotlight:"The castor oil fields of the Nile Delta — particularly in the Beheira and Gharbia governorates — have produced castor beans for over 6,000 years. Egypt remains one of the world's top castor oil producers. The oil is still cold-pressed in small family operations using hydraulic presses, producing a pale yellow, high-grade cosmetic oil.",
      theScience:"Castor oil contains 90% ricinoleic acid — a hydroxy fatty acid unique to castor that is not found in any other plant oil. Ricinoleic acid binds to prostaglandin receptors in hair follicles, stimulating both the follicle's growth phase and inhibiting the breakdown of follicular proteins. Its viscosity creates a film over the hair shaft that dramatically increases light reflection.",
      ritualInPractice:"A small amount of castor oil mixed with black seed oil is warmed and massaged into the scalp in slow circular sections before wrapping in a towel overnight. Egyptian women use this treatment weekly during winter months when scalp conditions are driest. The overnight application is considered essential — quick treatments are viewed as insufficient.",
      ritual:"Warm castor oil and black seed oil massaged into the scalp and left overnight. Egypt's 4,000-year hair growth ritual — now supported by modern follicle research.",
      shopLink:"#"
    },
    makeup:{
      product:"Kohl Eye Ritual", heroIngredient:"Kohl (Antimony Sulphide)",
      editorNote:"The oldest makeup ritual in the world. Still completely incomparable.",
      originStory:"Ancient Egyptian kohl dates to at least 3100 BCE — among the earliest documented cosmetic practices in human history. Both men and women applied kohl in Ancient Egypt, believing it offered protection from the evil eye, relief from eye infections and spiritual alignment with the god Horus, whose eye was the symbol of royal power.",
      villageSpotlight:"The ancient city of Luxor — built over the ruins of Thebes — contains some of the best-preserved records of Egyptian cosmetic practice. The Valley of the Queens contains tomb paintings showing women applying kohl using applicators nearly identical to modern ones. Cairo's Khan el-Khalili bazaar sells traditionally prepared Egyptian kohl in the same alabaster vessels used for thousands of years.",
      theScience:"Lead-based kohl was historically used in Egypt and the Middle East despite lead's toxicity — interestingly, recent studies suggest the lead(II) chloride in galena-based kohl may have antimicrobial properties that were clinically beneficial in an era before antibiotics, protecting against bacterial eye infections. Modern kohl uses safe mineral alternatives.",
      ritualInPractice:"Egyptian kohl is applied with a pointed stick inside the waterline of both upper and lower lids, with a dramatic winged extension along the upper lid. The outer corners are extended deliberately beyond the natural lash line to elongate the eye shape. The look is bold, graphic and entirely intentional.",
      ritual:"Kohl drawn along the inner waterline with a winged extension. The 5,000-year Egyptian eye ritual that remains the most graphic and dramatic eye look in the world.",
      shopLink:"#"
    },
    bodycare:{
      product:"Ful Medames & Aloe Body Treatment", heroIngredient:"Aloe Vera & Nile Blue Lotus",
      editorNote:"Egypt's desert climate created some of the world's most effective soothing treatments.",
      originStory:"Aloe vera has been used in Egypt since at least 1750 BCE, documented in the Ebers Papyrus. Cleopatra reportedly used aloe vera gel as her primary skincare treatment. The blue lotus (Nymphaea caerulea) of the Nile was sacred in ancient Egypt — used in religious ceremonies and applied to skin for its calming fragrance and mild psychoactive alkaloids.",
      villageSpotlight:"The oases of the Western Desert — particularly Siwa Oasis near the Libyan border — are Egypt's primary aloe cultivation regions, where desert conditions produce exceptionally potent plants. The Nile Delta marshes around Lake Manzala were historically where blue lotus was gathered by hand by priestly classes.",
      theScience:"Aloe vera gel contains acemannan — a polysaccharide with documented wound-healing and anti-inflammatory properties. Its transdermal penetration enhancer (azone-equivalent) properties make it useful as a carrier for other active compounds. Blue lotus alkaloids — apomorphine and nuciferine — bind to dopamine receptors and have mild anxiolytic properties.",
      ritualInPractice:"Fresh aloe gel is scraped from the cut leaf and applied directly to sunburned, irritated or overheated skin. In Egypt it is kept refrigerated for maximum cooling effect. Blue lotus oil or water is added as a fragrance and calming enhancement. Applied generously to face and body after time in the sun — Egypt's heat makes this a near-daily practice.",
      ritual:"Fresh aloe vera gel scraped directly from the leaf and applied to sun-exposed skin. Egypt's desert climate produced this cooling ritual thousands of years before aftersun was invented.",
      shopLink:"#"
    }
  },
  {
    name:"Italy", flag:"🇮🇹", region:"Europe",
    philosophy:"La bella figura — beauty as a form of self-respect and the presentation of the finest version of oneself.",
    skincare:{
      product:"Olive Oil & Rosehip Serum", heroIngredient:"Extra Virgin Olive Oil & Squalane",
      editorNote:"The ingredient Italian women have used since before the Roman Empire.",
      originStory:"Olive oil has been used as a cosmetic in Italy since at least 700 BCE, documented in Etruscan burial sites. Roman women mixed olive oil with rose petals, wax and rosewater to create cold cream — the world's first formal moisturizer, a formula that remained largely unchanged until the 20th century. Pliny the Elder dedicated an entire section of his Natural History to olive oil's cosmetic applications.",
      villageSpotlight:"The olive groves of Puglia — particularly around Andria and the Valle d'Itria — produce some of the world's most prized extra virgin olive oil from ancient Leccino and Coratina trees. The Tenuta Arcamone cooperative, whose trees are documented to be over 1,500 years old, produces a cosmetic-grade oil of extraordinary purity used by Italian artisan skincare makers.",
      theScience:"Olive oil's squalane content — a natural skin lipid also produced by human sebocytes — makes it one of the most skin-compatible plant oils. Olive squalane does not clog pores and is among the most effective known emollients for restoring barrier function. Its polyphenol content provides significant antioxidant protection against UV-induced oxidative stress.",
      ritualInPractice:"Italian women press a small amount of extra virgin olive oil or squalane serum into damp skin immediately after cleansing. Many also use olive oil as an overnight lip treatment and as a cuticle oil. In Puglia, the tradition of using cooking-grade olive oil on skin alongside food is still common — the same bottle serves both purposes.",
      ritual:"A few drops of squalane or extra virgin olive oil pressed into damp skin after cleansing. The Italian tradition that predates Rome, still delivering extraordinary results.",
      shopLink:"#"
    },
    haircare:{
      product:"Rosemary Oil Scalp Ritual", heroIngredient:"Rosmarinus Officinalis (Rosemary Oil)",
      editorNote:"A recent viral trend that Italians have quietly been doing for centuries.",
      originStory:"Rosemary — native to the Mediterranean coast — has been used in Italian herbal medicine since at least the Renaissance. The famous 'Hungary Water' of the 14th century — the world's first alcohol-based perfume — contained rosemary oil as its primary active ingredient. Italian herbalists recommended rosemary oil for hair growth in manuscripts dating to the 15th century.",
      villageSpotlight:"The Ligurian coast — particularly the Cinque Terre region and the hills above La Spezia — grows wild rosemary in abundance on sun-baked terraces. Ligurian grandmothers have prepared rosemary oil infusions in olive oil for hair treatments for generations. Small family-run essential oil distilleries in Tuscany and Sicily produce cold-distilled rosemary oil for both cooking and hair use.",
      theScience:"A 2023 randomised clinical trial comparing rosemary oil to minoxidil (the gold-standard pharmaceutical hair loss treatment) found rosemary oil statistically equivalent to 2% minoxidil in promoting hair growth after six months — with significantly less scalp itching. Rosmarinic acid inhibits the hormonal pathways driving androgenic hair loss.",
      ritualInPractice:"A few drops of rosemary essential oil diluted in olive or jojoba oil are massaged into the scalp in circular motions for 5–10 minutes and left on for 30 minutes to overnight before washing. Italian women have done this weekly as a preventive measure long before it became a trending topic globally.",
      ritual:"Rosemary oil diluted in olive oil massaged into the scalp weekly. Clinically equivalent to minoxidil — and the Italian secret grandmother has known for centuries.",
      shopLink:"#"
    },
    makeup:{
      product:"The Italian Red Lip & Lash Look", heroIngredient:"Long-wear Lip Color & Volume Mascara",
      editorNote:"Italian glamor is theatrical, unapologetic and magnificent.",
      originStory:"Italian beauty aesthetics were cemented in the golden age of Italian cinema — the 1950s and 60s when directors Fellini and Visconti and actresses Sophia Loren and Monica Vitti created a template of bold, confident, sensual beauty that still defines Italian glamor globally. The Italian red lip is distinct from the French red lip: warmer, more dramatic, worn with confidence not minimalism.",
      villageSpotlight:"The fashion and beauty hub of Milan — particularly the Via della Spiga and Brera districts — is where Italy's influence on global makeup was codified. Italian makeup artists working for Italian Vogue in the 1970s and 80s defined the 'bella figura' aesthetic that continues to distinguish Italian beauty from its more austere European neighbors.",
      theScience:"Volume mascaras that use both a lengthening base and a volumising topcoat create the dramatic, full-lash effect associated with Italian beauty. Fiber technology in the topcoat extends each lash. Long-wear lip pigments using film-forming polymers maintain color under eating and drinking for 12+ hours.",
      ritualInPractice:"Italian women apply mascara in multiple coats — building volume slowly — allowing each to dry between applications. The lip is applied last, blotted, reapplied for intensity. The look is finished, complete and ready — la bella figura is about presenting the best possible version of oneself, always.",
      ritual:"Multiple coats of volumising mascara, a bold warm lip. Theatrical, intentional, magnificent. The Italian interpretation of bella figura expressed in two products.",
      shopLink:"#"
    },
    bodycare:{
      product:"Fango Mud & Thermal Bath Ritual", heroIngredient:"Volcanic Fango Mud",
      editorNote:"Italy's mineral-rich volcanic landscape makes its body treatments unlike anything else on earth.",
      originStory:"The thermal spas of Italy — terme — have been in continuous operation since at least the Roman Republic, when public bathing culture was central to social life. The volcanic fango mud of Abano Terme in the Veneto region has been used therapeutically since the Roman period. Roman soldiers used thermal baths to recover from battle injuries.",
      villageSpotlight:"Abano Terme and Montegrotto Terme in the Euganean Hills of the Veneto are Italy's most important thermal spa towns, in continuous operation for over 2,000 years. The fango mud here — a specific mixture of volcanic earth, thermal water and algae — requires a minimum six-month maturation period before use. Abano Terme has more four-star hotels per square kilometer than any other town in Italy.",
      theScience:"Abano fango mud contains smectite clay minerals alongside silica, sulfur compounds and microorganism metabolites from its six-month maturation in thermal water. Applied at 38–42°C, the heat improves joint mobility and reduces inflammatory cytokines. The mineral content — particularly sulfur — has documented anti-inflammatory effects on psoriasis and eczema.",
      ritualInPractice:"At the terme, volcanic fango mud is applied to the entire body at high temperature and wrapped for 20 minutes to allow mineralisation and heat penetration. This is followed by a thermal water bath and a rest period. Italians use terme prescriptively — two-week annual thermal cures are still subsidised by the Italian national health service for certain musculoskeletal conditions.",
      ritual:"Hot volcanic fango mud applied and wrapped for 20 minutes at the terme, followed by a thermal water bath. A Roman treatment still prescribed by Italian doctors today.",
      shopLink:"#"
    }
  },
  {
    name:"Thailand", flag:"🇹🇭", region:"Asia",
    philosophy:"Thai beauty is rooted in harmony — between nature and body, between ancient and modern, between inner calm and outer radiance.",
    skincare:{
      product:"Centella Asiatica (Cica) Treatment", heroIngredient:"Centella Asiatica (Tiger Grass)",
      editorNote:"The calming herb that tigers sought — now the world's favourite soothing ingredient.",
      originStory:"Centella asiatica — known in Thai as bua bok, in Korea as tiger grass — has been used in Thai traditional medicine for over 2,000 years. Thai legend holds that tigers wounded in jungle fights would roll in centella patches to heal. The plant's documented therapeutic use in Thai, Indian and Chinese medicine predates Western clinical science by two millennia.",
      villageSpotlight:"The central plains of Thailand — particularly Chiang Mai province and the Chao Phraya River basin — are the primary centella growing regions. In the fresh markets of Chiang Mai, bua bok is sold as a salad green alongside its use as medicine. Thai herbalists prepare it as both a drink and a topical preparation using the same raw plant.",
      theScience:"Centella asiatica contains three key active compounds: asiatic acid, madecassic acid and asiaticoside. Clinical studies show these compounds stimulate collagen synthesis in dermal fibroblasts by up to 38% while simultaneously inhibiting the inflammatory pathways that cause sensitisation and redness. It is one of the few ingredients with documented clinical evidence for both wound healing and anti-aging simultaneously.",
      ritualInPractice:"Thai women drink fresh centella juice (available everywhere in Thai markets) and apply a centella gel or cream topically. The same plant treats from inside and outside simultaneously — the Thai approach to skincare does not separate diet from topical treatment. After any skin procedure or significant sun exposure, centella cream is the immediate application.",
      ritual:"Centella juice consumed fresh from Thai markets alongside topical centella cream. Thailand's approach to skincare treats skin from inside and outside simultaneously.",
      shopLink:"#"
    },
    haircare:{
      product:"Kaffir Lime & Coconut Oil Hair Treatment", heroIngredient:"Makrut Lime (Kaffir Lime) Oil",
      editorNote:"The Thai kitchen ingredient that has secretly been the best hair treatment all along.",
      originStory:"Makrut lime — known in Thailand as ma-krut — is used across Thai cuisine for its double-lobed leaves and intensely fragrant zest. Thai women have used makrut lime juice on hair for centuries as a natural clarifying rinse that removes residue from the intense Thai heat and humidity, while the aromatic oils provide a uniquely Thai fragrance experience.",
      villageSpotlight:"The makrut lime orchards of the central plains around Nakhon Pathom and the floating markets of the Chao Phraya Delta sell fresh makrut fruit and leaves. In the Mae Klong market west of Bangkok — one of Thailand's most atmospheric traditional markets — bundles of makrut leaves are sold alongside fresh coconut alongside each other as if the connection between them is obvious.",
      theScience:"Makrut lime oil contains limonene, citronellal and linalool — compounds with documented antimicrobial effects on the scalp microbiome. Combined with coconut oil's lauric acid (which penetrates the hair shaft), the treatment simultaneously clarifies the scalp and conditions the hair from within the cortex. The acidic pH of makrut lime juice also closes the hair cuticle, increasing shine.",
      ritualInPractice:"Fresh makrut lime juice mixed with warm coconut oil is applied to the scalp and hair and left under a warm towel for 20 minutes before thorough washing. The intense fragrance of makrut lime in steam is a defining sensory experience. Thai women use this weekly throughout the hot season when scalp oiliness and product buildup increase dramatically.",
      ritual:"Makrut lime juice and warm coconut oil applied to hair and left under a warm towel. Thailand's aromatic weekly hair ritual — scalp clarity and shine in one treatment.",
      shopLink:"#"
    },
    makeup:{
      product:"Dewy Skin & Red Lip", heroIngredient:"Cushion Foundation & Long-wear Lip",
      editorNote:"Thai beauty combines Korean skin obsession with South East Asian ceremonial boldness.",
      originStory:"Thai beauty has been profoundly influenced by Korean beauty culture since the early 2010s, when Korean television dramas became dominant throughout South East Asia. The glass skin ideal merged with Thailand's own ceremonial beauty tradition — where elaborate makeup for festivals like Songkran and Loy Krathong was already part of the cultural fabric.",
      villageSpotlight:"The old city of Chiang Mai — Nimman Road and the Night Bazaar area — has become a hub for independent Thai beauty brands that blend Korean formulation with Thai botanicals. Bangkok's Siam Square and Emporium shopping centers are where Korean and Thai beauty brands compete directly, with Thai women showing exceptional sophistication in their use of both.",
      theScience:"South East Asian skin — predominantly fitzpatrick types IV and V — produces more melanin and is more prone to post-inflammatory hyperpigmentation than European skin types. Thai skincare formulation therefore emphasizes brightening actives (niacinamide, vitamin C, arbutin) more heavily than European equivalents to address this specific concern.",
      ritualInPractice:"A cushion foundation chosen one shade lighter than natural skin tone (a Thai beauty preference) is applied with a bouncing motion. A bold lip — deep red, berry or coral — is applied with precision. Niacinamide serum is the non-negotiable skincare step before makeup in most Thai women's routines.",
      ritual:"Cushion foundation applied one shade lighter, paired with a bold lip. Thai beauty combines Korean glass skin aspiration with South East Asian ceremonial boldness.",
      shopLink:"#"
    },
    bodycare:{
      product:"Thai Herbal Compress Massage", heroIngredient:"Lemongrass, Ginger & Turmeric Compress",
      editorNote:"A 2,000-year-old Thai treatment that modern wellness tourism has finally discovered.",
      originStory:"The luk pra kob — Thai herbal compress ball — is a traditional Thai massage tool used for over 2,000 years. The compress is made from dried Thai herbs bundled in muslin, steamed until hot and pressed against the body to release therapeutic aromatic compounds into the skin and underlying tissues. It was developed by Buddhist monks in temple medicine.",
      villageSpotlight:"The ancient city of Chiang Mai — home to Thailand's most important temple medicine traditions — is where the most authentic luk pra kob treatments are practiced. The Wat Pho temple in Bangkok, which is both a religious site and Thailand's most important traditional medicine school, has taught Thai massage and herbal compress techniques since the 18th century.",
      theScience:"Lemongrass contains citral — a potent antimicrobial and anti-inflammatory compound. Ginger contains shogaol and gingerol — compounds with documented vasodilatory effects that increase local blood flow by 20-40%. Turmeric's curcumin inhibits inflammatory cytokines. The combination of heat and medicinal compounds released through steam penetrates the skin barrier more effectively than topical application alone.",
      ritualInPractice:"The herbal compress ball is steamed for 10–15 minutes until hot, then pressed and rolled across the body in slow, deliberate circular motions while still fragrant. Applied repeatedly as the compress cools, it is reheated and reapplied. The treatment is traditionally done in silence with the recipient in a light meditative state.",
      ritual:"A steamed herbal compress ball of lemongrass, ginger and turmeric pressed across the body in slow circular motions. Thailand's ancient temple medicine available as a daily self-care ritual.",
      shopLink:"#"
    }
  },
  {
    name:"Ethiopia", flag:"🇪🇹", region:"Africa",
    philosophy:"Ethiopian beauty is ancient, ceremonial and tied to the sacred — fragrance and ritual are inseparable from identity.",
    skincare:{
      product:"Frankincense & Myrrh Face Oil", heroIngredient:"Boswellia (Frankincense) Resin Oil",
      editorNote:"Ethiopia produces 90% of the world's frankincense — and has always known its skin benefits.",
      originStory:"Boswellia papyrifera — the tree that produces frankincense — grows almost exclusively in Ethiopia's Tigray and Amhara regions and was traded on the ancient Incense Route from Ethiopia to Arabia, Egypt and Rome for over 5,000 years. Ethiopian women have applied frankincense resin directly to skin as a healing treatment since antiquity.",
      villageSpotlight:"The Tigray region of northern Ethiopia — particularly the areas around Axum and Adwa — contains the world's largest Boswellia papyrifera forests. Ethiopia produces over 90% of global frankincense. Small-scale tapping cooperatives in Tigray are the primary harvesters, using traditional slash-and-collect methods. The trees are now endangered due to over-tapping and climate stress.",
      theScience:"Frankincense oil contains boswellic acids — specifically AKBA (acetyl-keto-beta-boswellic acid) — which specifically inhibit the 5-lipoxygenase (5-LOX) enzyme responsible for inflammatory leukotriene production. This makes it one of the most targeted and specific natural anti-inflammatory compounds known. Clinical studies show it reduces transepidermal water loss and visibly improves skin texture.",
      ritualInPractice:"In Ethiopian households, frankincense resin is burned in a ceramic censer (menkeskesha) and women hold their faces in the fragrant smoke — absorbing the aroma and allowing the volatile compounds to penetrate the skin. Frankincense oil is also applied neat or diluted in argan oil as a facial treatment. Both methods are practiced daily.",
      ritual:"Frankincense resin burned in a ceramic censer, the fragrant smoke absorbed directly by the face. Ethiopia's ancient skin ritual — now supported by anti-inflammatory science.",
      shopLink:"#"
    },
    haircare:{
      product:"Chebe Powder & Butter Hair Treatment", heroIngredient:"Chebe Powder (Croton gratissimus)",
      editorNote:"The secret behind the world's longest, most impressive natural hair — from the Sahel.",
      originStory:"Chebe powder is a traditional hair treatment of the Basara Arab women of Chad and the Sahel region bordering Ethiopia. Made primarily from the seeds of Croton gratissimus alongside fragrant resins and cloves, it has been passed exclusively between women for generations. Ethiopian women of the borderland regions adopted it through Sahel trade.",
      villageSpotlight:"The Sahel borderlands between Chad, Sudan and Ethiopia — particularly the Amhara and Afar regions — are where chebe traditions merged with Ethiopian hair practices. Basara women are famed throughout Africa for their extraordinary hair length. The chebe recipe is closely guarded and often passed from mothers to daughters with ritual significance.",
      theScience:"Chebe powder's primary mechanism is surface coating rather than chemical treatment — it forms a protective film over the hair shaft that dramatically reduces mechanical damage, split ends and breakage. The reduction in breakage allows length retention over time. Croton gratissimus extracts have documented antimicrobial properties that support scalp health.",
      ritualInPractice:"Chebe powder is mixed with water, shea butter and fragrant resins into a thick paste applied generously to the length of the hair (not the roots). Hair is parted into sections and each section coated thoroughly. The hair is recoated weekly without washing, building a protective layer over months. The no-wash approach is essential to the treatment's efficacy.",
      ritual:"Chebe paste applied generously to hair lengths weekly without washing, building a protective layer over months. The Sahel's extraordinary secret for length retention.",
      shopLink:"#"
    },
    makeup:{
      product:"Kohl & Ocher Ceremonial Look", heroIngredient:"Kohl & Ethiopian Red Ocher",
      editorNote:"Ethiopian ceremonial beauty is some of the most distinctive and breathtaking in the world.",
      originStory:"Ethiopian ceremonial makeup — particularly among the Hamar, Surma and Mursi peoples of the Omo Valley — uses ocher pigments, clay and plant dyes to create elaborate body and face art for ceremonies. Kohl has been used in Ethiopia's Axumite kingdom since at least 400 BCE. The tradition of painting the body and face for ceremony is among the oldest continuous cultural practices in human history.",
      villageSpotlight:"The Omo Valley in southern Ethiopia — a UNESCO biosphere reserve — is home to numerous indigenous peoples whose ceremonial body art traditions remain entirely intact. The Hamar bull-jumping ceremony, the Surma stick-fighting competitions and the Mursi lip plate tradition each have associated beauty rituals of extraordinary complexity and visual impact.",
      theScience:"Ethiopian red ocher is iron oxide (hematite) — the most stable and ancient mineral pigment used by humans, with documented use in Ethiopia dating back 164,000 years (the oldest evidence of cosmetic use in human history). It has zero allergenicity and extraordinary lightfastness — it does not fade in sun and does not irritate skin.",
      ritualInPractice:"Ocher mixed with animal fat or plant oil is applied to skin in geometric patterns using fingers, combs or sticks. The application is ceremonial — done by a designated family member or elder for significant rites of passage. Kohl is applied to the inner waterline with a pointed stick. Both are worn as identity, not decoration.",
      ritual:"Red ocher mixed with plant oil applied in geometric patterns to face and body. The oldest cosmetic ritual in human history — 164,000 years of unbroken tradition in Ethiopia.",
      shopLink:"#"
    },
    bodycare:{
      product:"Coffee Ceremony Body Scrub", heroIngredient:"Ethiopian Coffee Grounds & Niter Kibbeh",
      editorNote:"Ethiopia invented coffee — and found 1,000 uses for it before anyone else.",
      originStory:"Ethiopia is the birthplace of coffee — the Kaffa region of southwestern Ethiopia is where Coffea arabica was first discovered and cultivated. The Ethiopian coffee ceremony (buna) — one of the world's most elaborate food rituals — produces fresh coffee grounds three times daily. Ethiopian women have always repurposed the grounds as a body scrub in a beauty tradition inseparable from the ceremony.",
      villageSpotlight:"The forests of Kaffa and Bale in southwestern Ethiopia are the origin of all arabica coffee globally. The Harari people of Harar city — the oldest walled city in Africa — have the most sophisticated coffee ceremony traditions, with specialist women (known as buna dabo naw — 'coffee is our bread') presiding over ceremonies that last two to three hours.",
      theScience:"Used coffee grounds provide mechanical exfoliation at a particle size that is gentle enough for facial use while being sufficiently abrasive for the body. Residual caffeine in the grounds provides topical anti-cellulite effects through phosphodiesterase inhibition. Niter kibbeh — Ethiopian clarified butter spiced with herbs — acts as a moisturizing carrier that integrates with the skin's lipid barrier.",
      ritualInPractice:"Fresh grounds from the third and final buna pour are allowed to cool, mixed with warm niter kibbeh and a pinch of salt, and applied to damp skin in the shower or bath. Massaged in circular motions for five minutes before rinsing. In Ethiopia this is a post-ceremony ritual — beauty and community inseparable.",
      ritual:"Fresh coffee grounds from the buna ceremony mixed with niter kibbeh and massaged into damp skin. Ethiopia's daily beauty ritual inseparable from its greatest cultural tradition.",
      shopLink:"#"
    }
  },
  {
    name:"Greece", flag:"🇬🇷", region:"Europe",
    philosophy:"Greek beauty is olive groves and sea air — ancient, elemental and utterly uncomplicated.",
    skincare:{
      product:"Greek Yoghurt & Honey Mask", heroIngredient:"Lactic Acid & Raw Thyme Honey",
      editorNote:"The original chemical exfoliant — used in Ancient Greece before chemistry had a name.",
      originStory:"Greek yoghurt has been made in the Greek islands since antiquity — thick, strained and intensely acidic due to its lactic acid content. Hippocrates documented yoghurt's medicinal properties in 400 BCE. Greek mountain women mixed yoghurt with Hymettus honey — the most prized honey in the ancient world — as a skin treatment that both exfoliated and healed simultaneously.",
      villageSpotlight:"Mount Hymettus near Athens has produced Greece's most celebrated honey since at least 600 BCE. The bees of Hymettus feed exclusively on wild thyme, sage and oregano, producing a honey with an extraordinary flavor and antimicrobial potency. Small beekeeping families on Hymettus have maintained hives on the mountain for generations. The island of Crete produces a separate prized variant — Cretan thyme honey.",
      theScience:"Greek yoghurt contains 2–5% lactic acid — an AHA (alpha hydroxy acid) that chemically loosens the bonds between dead skin cells, providing gentle resurfacing without physical abrasion. Raw honey contains hydrogen peroxide (generated by the enzyme glucose oxidase), methylglyoxal and defensins — three separate antimicrobial mechanisms that address acne-causing bacteria simultaneously.",
      ritualInPractice:"A mixture of strained Greek yoghurt and thyme honey is applied to clean skin, left for 20 minutes and rinsed with cool water. Greek women use this preparation weekly — or more frequently in summer when heat and sun increase pigmentation and congestion. It is also used as a soothing treatment after sunburn, when the lactic acid and honey work together on damaged skin.",
      ritual:"Greek yoghurt and thyme honey mask left for 20 minutes. Ancient Greece's original chemical exfoliant — lactic acid and honey working in perfect synergy.",
      shopLink:"#"
    },
    haircare:{
      product:"Olive Oil Deep Conditioning",  heroIngredient:"Squalene-rich Extra Virgin Olive Oil",
      editorNote:"Greek grandmothers have known this forever. The rest of us are finally catching up.",
      originStory:"The olive tree has been cultivated in Greece for over 7,000 years. Greek women applied olive oil to their hair before bathing in the gymnasion of Ancient Athens — the olive oil was then scraped off with a strigil, removing both oil and accumulated dirt. The tradition of olive oil as a hair conditioner has continued uninterrupted in rural Greece.",
      villageSpotlight:"The island of Crete — particularly the Heraklion and Messara Plain regions — has the highest density of olive trees per square kilometer on earth, with trees documented to be over 2,000 years old still producing olives. The village of Ano Vouves contains an olive tree estimated at 4,000 years old — possibly the oldest living olive tree in the world — still harvested annually.",
      theScience:"Olive oil penetrates the hair cortex due to its small molecular weight compared to mineral oil. Oleocanthal — a polyphenol found in fresh extra virgin olive oil — has anti-inflammatory properties on the scalp. Squalene in olive oil is structurally identical to the squalene produced by human sebaceous glands, making it the most biocompatible hair conditioning agent known.",
      ritualInPractice:"Warm olive oil is applied section by section to hair from scalp to tips, wrapped in a warm towel and left for at least 30 minutes — ideally overnight for very dry or damaged hair. A small amount of lemon juice added to the final rinse closes the cuticle and counteracts any potential greasiness. Greek island grandmothers do this weekly and have the hair to prove it.",
      ritual:"Warm olive oil applied from scalp to tips, wrapped in a warm towel for 30 minutes or overnight. The 7,000-year Greek hair ritual endorsed by every grandmother on Crete.",
      shopLink:"#"
    },
    makeup:{
      product:"Mediterranean Sun-Kissed Look", heroIngredient:"Bronze Eyeshadow & Terracotta Blush",
      editorNote:"Greek beauty is the sea and the sun — nothing more is required.",
      originStory:"Ancient Greek women used white lead powder to lighten their complexions and red mulberry juice or ocher on their lips and cheeks — the beginning of the Mediterranean cosmetic tradition. Modern Greek beauty aesthetic is defined by the summer islands: sun-kissed, healthy, effortlessly warm and utterly natural.",
      villageSpotlight:"The island of Santorini — whose whitewashed Cycladic architecture against the Aegean has defined a global aesthetic — is the visual symbol of Greek beauty's natural landscape. The beauty aesthetic of Mykonos, Paros and Crete — where the world's most beautiful people historically gather in August — is where the modern Mediterranean sun look was codified.",
      theScience:"Terracotta and brick-red blush pigments contain iron oxides that complement warm, olive and tan skin tones without adding artificial-looking pink. Bronze eyeshadow using mica and iron oxide creates dimension and sun-kissed depth that enhances brown and hazel eyes, which are the most common eye colors in Mediterranean populations.",
      ritualInPractice:"Terracotta blush swept across the nose and cheeks in a diagonal arc — mimicking a day in the sun. A warm bronze eyeshadow pressed across the lid with a fingertip. A tinted SPF balm on the lips. Three products, two minutes, completely and irrefutably beautiful.",
      ritual:"Terracotta blush, bronze eyeshadow, SPF lip balm. Three products to recreate a Mediterranean summer on any skin tone.",
      shopLink:"#"
    },
    bodycare:{
      product:"Seawater & Olive Oil Body Ritual", heroIngredient:"Aegean Sea Minerals & Olive Oil",
      editorNote:"The simplest body ritual in this entire atlas — and devastatingly effective.",
      originStory:"Swimming in the Aegean Sea and applying olive oil to skin afterwards is not a formal beauty ritual in Greece — it is simply life. Greek island women have done this daily in summer for as long as islands have been inhabited. The mineral composition of the Aegean — particularly its magnesium, calcium and potassium content — is exceptional compared to other Mediterranean seas.",
      villageSpotlight:"The villages of the Greek islands — Oia on Santorini, Naoussa on Paros, Chora on Folegandros — are where this ritual is most naturally embodied. No beauty counter, no packaging, no instruction. Simply the sea, the sun, the olive tree. The most ancient beauty ritual in this entire collection.",
      theScience:"Magnesium absorbed transdermally from seawater strengthens the skin barrier by supporting ceramide synthesis. Dead Sea studies show transdermal magnesium absorption reduces TEWL (transepidermal water loss) by 30% and visibly improves skin hydration within two weeks of regular exposure. The salt exfoliates gently as the body dries in the sun.",
      ritualInPractice:"Swim in the sea for as long as possible. Allow the salt water to dry on the skin in the sun for 10–15 minutes, providing gentle mineralisation and natural exfoliation. Then apply a thin layer of olive oil to still-slightly-damp skin. No shower required. No further products needed. Return to the sea. Repeat.",
      ritual:"Swim in the Aegean. Dry in the sun. Apply olive oil to damp skin. The simplest and most ancient body ritual — requiring nothing more than the sea.",
      shopLink:"#"
    }
  },
  {
    name:"China", flag:"🇨🇳", region:"Asia",
    philosophy:"Traditional Chinese beauty seeks harmony — balanced energy, clear skin and natural longevity through herbs and ritual.",
    skincare:{
      product:"Pearl Powder & Gua Sha Ritual", heroIngredient:"Pearl Powder (Hydrolysed Pearl)",
      editorNote:"Chinese imperial skincare — now available to everyone, still completely extraordinary.",
      originStory:"Pearl powder has been used in Chinese imperial medicine for over 2,000 years. Empress Wu Zetian — the only woman to rule China as emperor, in the 7th century CE — reportedly took pearl powder daily as both a skin and longevity treatment. The Song Dynasty physician Chen Ziming described pearl powder's skin benefits in his 1237 CE medical text Furen Daquan Liangfang.",
      villageSpotlight:"The Pearl River Delta in Guangdong Province and the freshwater pearl farming regions of Zhejiang Province — particularly around Zhuji, known as 'Pearl City' — are China's primary pearl cultivation centers. Zhuji produces over 70% of the world's freshwater pearls. Small family pearl farms on the lakes of Zhejiang still operate using traditional cultivation methods.",
      theScience:"Hydrolysed pearl powder contains conchiolin — a structural protein — alongside calcium, amino acids and trace minerals. Conchiolin has documented fibroblast-stimulating activity that promotes collagen and elastin synthesis. Gua sha — systematic scraping of the skin with a smooth stone tool — is now supported by clinical evidence showing it increases microcirculation and reduces fibrotic tissue.",
      ritualInPractice:"Pearl powder is mixed into moisturizer or a small amount of water and pressed into skin. Gua sha with a jade or rose quartz tool is performed in upward strokes along the jawline, cheekbones and forehead for five to ten minutes before serum application, improving product penetration and facial circulation.",
      ritual:"Pearl powder mixed into moisturizer, followed by gua sha in upward strokes. Two thousand years of Chinese imperial skincare confirmed by modern clinical evidence.",
      shopLink:"#"
    },
    haircare:{
      product:"Camellia & Ginger Scalp Oil", heroIngredient:"Ginger Root Extract & Camellia Oil",
      editorNote:"Traditional Chinese medicine's most consistent hair growth recommendation.",
      originStory:"Ginger has been used in Traditional Chinese Medicine (TCM) for hair growth for over 2,000 years. The Chinese pharmacopoeia Bencao Gangmu — written by Li Shizhen in 1578 CE — specifically recommends fresh ginger root rubbed on the scalp for hair thinning. This recommendation has appeared in Chinese medical texts across 20 consecutive centuries.",
      villageSpotlight:"The ginger growing regions of Shandong Province — particularly Laiwu city, China's largest ginger production center — supply both food and medicinal grades of ginger. Camellia oil for hair comes primarily from the Yangtze River basin in Hunan and Jiangxi provinces. Hunan camellia oil is considered superior to Zhejiang varieties due to its slightly higher oleic acid content.",
      theScience:"Fresh ginger contains 6-gingerol and 6-shogaol — compounds that stimulate type IV collagen synthesis in dermal papilla cells (the cells that determine hair growth). A 2023 study showed ginger extract applied to the scalp increased dermal papilla cell proliferation by 47% compared to controls. Its vasodilatory effects also increase follicular blood supply.",
      ritualInPractice:"Fresh ginger is grated and the juice extracted, mixed with warm camellia oil in a one-to-four ratio. The mixture is massaged into the scalp in sections for 10 minutes, left for 30 minutes under a warm towel and washed out. Chinese women do this twice weekly for hair thinning treatment and once weekly as general maintenance.",
      ritual:"Fresh ginger juice mixed with warm camellia oil, massaged into the scalp and left for 30 minutes. Two thousand years of TCM hair wisdom, confirmed by a 2023 clinical study.",
      shopLink:"#"
    },
    makeup:{
      product:"Qipao Red Lip & Porcelain Skin Base",  heroIngredient:"Full Coverage Foundation & Blue-Red Lip",
      editorNote:"Chinese beauty is porcelain perfection and a single statement lip — timeless and precise.",
      originStory:"The Chinese beauty ideal of porcelain skin — bai li tou hong, meaning 'rosy white like porcelain' — has been documented since the Tang Dynasty (618–907 CE). The classic Chinese opera makeup — heavy white powder, dramatic red lips and defined eyes — filtered into everyday beauty culture in the Republican era (1912–1949) through Shanghai's cosmopolitan beauty industry, which rivalled Paris in the 1930s.",
      villageSpotlight:"Shanghai — particularly the Bund and the former French Concession — was the epicenter of modern Chinese beauty culture in the early 20th century. The cosmetics company Maxam, founded in Shanghai in 1898, was China's first domestic beauty brand and shaped Chinese women's approach to base makeup and lip color for a century.",
      theScience:"Full coverage foundations for East Asian skin tones require calibration for the specific undertone range — yellow-neutral rather than the pink-neutral common in European formulation. Blue-based reds (as opposed to orange-based reds) complement cool and neutral undertones common in East Asian complexions. Setting powders for the classic Chinese look require a slight luminous finish — pure matte is considered harsh.",
      ritualInPractice:"A full coverage foundation applied with a damp beauty sponge, set with a light luminous powder. A precise blue-red lip applied to a natural lip shape without overlining — the Chinese aesthetic favours the natural lip line. A precise inner corner highlight. Nothing on the cheeks — the porcelain ideal requires a blank canvas effect.",
      ritual:"Full coverage porcelain base set with luminous powder, paired with a precise blue-red lip. The Shanghai golden era aesthetic, still defining Chinese beauty.",
      shopLink:"#"
    },
    bodycare:{
      product:"Red Dates & Longan Wellness Bath", heroIngredient:"Jujube (Red Date) & Chinese Wolfberry",
      editorNote:"TCM approaches beauty from the inside — and this bath does both simultaneously.",
      originStory:"The red date (jujube, Ziziphus jujuba) and longan fruit are two of TCM's most important blood-nourishing (bu xue) herbs, recommended for skin radiance, energy and women's health for over 2,000 years. Herbal baths — yao yu — containing TCM ingredients are documented in Chinese medical texts from the Han Dynasty (206 BCE–220 CE).",
      villageSpotlight:"The jujube orchards of Shanxi and Hebei provinces — particularly around Cangzhou in Hebei, known as the 'jujube city' — produce China's most prized red dates. Longan orchards are concentrated in Guangdong and Fujian provinces in southern China. Both ingredients are available dried in every Chinese herbal medicine shop globally.",
      theScience:"Red dates contain saponins, flavonoids and cyclic AMP, which improve microcirculation and have demonstrated skin-brightening properties. Transdermal absorption of flavonoids during a herbal bath is enhanced by hot water, which dilates pores and increases skin permeability. Chinese wolfberry (goji berry) contains zeaxanthin and beta-carotene with documented photoprotective effects.",
      ritualInPractice:"Dried red dates, longan flesh, wolfberries and a few slices of fresh ginger are simmered in water for 30 minutes and the strained liquid added to the bath. Soaked for 20–30 minutes. This is a traditional TCM winter health practice done weekly, believed to improve blood circulation, warm the body and nourish skin from the outside in.",
      ritual:"Red dates, longan and wolfberries simmered into a decoction and added to the bath. TCM's winter skin-nourishing ritual for radiance, circulation and warmth.",
      shopLink:"#"
    }
  },
  {
    name:"Ghana", flag:"🇬🇭", region:"Africa",
    philosophy:"Ghanaian beauty celebrates natural texture, vibrant color and the ancestral wisdom of West Africa's rainforests.",
    skincare:{
      product:"Raw Shea & Aloe Skin Treatment", heroIngredient:"Raw Ghanaian Shea Butter",
      editorNote:"Ghana produces some of the finest shea butter on earth — and knows exactly how to use it.",
      originStory:"The shea tree (Vitellaria paradoxa) grows in a belt across West Africa from Ghana to Ethiopia, but Ghanaian shea — particularly from the Northern and Upper East regions — is widely considered the highest quality globally, due to the specific soil composition and processing traditions of Ghanaian women's cooperatives.",
      villageSpotlight:"Tamale in the Northern Region is Ghana's shea capital. The Women's Shea Industry Cooperative in Tamale employs thousands of women in traditional shea processing. Bolgatanga in the Upper East Region is another center of shea excellence. These cooperatives — many now Fair Trade certified — have turned traditional knowledge into economic empowerment.",
      theScience:"Ghanaian shea has been measured to have a higher unsaponifiable fraction than shea from most other producing countries — typically 9–12% versus a global average of 6–8%. This higher unsaponifiable fraction is directly correlated with greater skin barrier repair activity and more significant anti-inflammatory effects.",
      ritualInPractice:"Raw Ghanaian shea is applied in the traditional manner: a small amount (less than a teaspoon) is taken between the palms, which heats it until liquid. The liquid shea is then pressed into damp post-bath skin from face to feet in one continuous ritual. Nothing else is needed — the quality of raw Ghanaian shea makes every other step redundant.",
      ritual:"A small amount of raw shea melted between the palms and pressed into damp skin from face to feet. The Ghanaian tradition that makes every other moisturizer redundant.",
      shopLink:"#"
    },
    haircare:{
      product:"Coconut & Shea Hair Butter", heroIngredient:"Shea Butter & Virgin Coconut Oil",
      editorNote:"Natural hair's greatest friends — a combination that has worked for generations.",
      originStory:"The combination of shea butter and coconut oil for natural hair care originated in West African coastal communities where both ingredients were readily available. Ghanaian women processing natural 4c hair texture developed this combination as the ideal balance of moisture (coconut oil) and seal (shea butter) — a principle now confirmed by modern hair science.",
      villageSpotlight:"The coconut groves of Ghana's Central and Western regions — particularly around Cape Coast and Takoradi — produce the coconuts that complement shea from the north. Traditional Ghanaian hair salons in Accra's Osu and Labone neighborhoods pioneered the natural hair treatment traditions that have influenced African-American and diaspora haircare globally.",
      theScience:"Coconut oil's small molecular size allows it to penetrate deep into the hair cortex, reducing protein loss from washing by up to 39% (clinically documented). Shea butter's high molecular weight means it cannot penetrate — instead it coats the hair cuticle as a sealant, preventing moisture escape. The two work in perfect complementary sequence: penetrate then seal.",
      ritualInPractice:"Liquid coconut oil is applied first to each section of dampened hair, massaged in and left for 5 minutes. Then whipped shea butter is applied over the top as a sealant, smoothing from roots to ends. The hair is then twist-set or braid-set and allowed to dry. The shea-coconut combination is Ghana's definitive moisture retention technique for natural hair.",
      ritual:"Coconut oil applied first to penetrate the hair shaft, sealed immediately with whipped shea butter. Ghana's moisture retention method for natural hair textures.",
      shopLink:"#"
    },
    makeup:{
      product:"Bold Lip & Kente-Inspired Color", heroIngredient:"Highly Pigmented Lip Color",
      editorNote:"Ghanaian beauty honors boldness — color is celebration, not decoration.",
      originStory:"Ghanaian celebration beauty — for outdoorings, weddings, funerals (which in Ghana are joyful celebrations), festivals and durbars — is characterized by extraordinary color, coordination with kente cloth and an unabashed boldness of expression. Ghanaian women are widely recognized throughout Africa for their confidence in wearing color.",
      villageSpotlight:"Accra's Makola Market — Ghana's largest open market — has an entire section dedicated to beauty supplies. Kaneshie and Osu are the beauty salon districts of Accra where Ghanaian makeup artists have developed a distinctly West African aesthetic that blends natural skin-forward beauty with bold lip and eye color.",
      theScience:"Highly pigmented lip products for deep skin tones require blue-shifted pigments to prevent a muted, muddy appearance against darker skin. Purple-based reds, blue-based reds and pure berry tones perform dramatically better on NC45-NC55 skin tones than orange-based reds. Deeply pigmented products should be highly moisturizing to prevent drying, as ashy dryness shows more prominently on deep skin.",
      ritualInPractice:"Ghanaian celebratory makeup begins with a flawlessly matched base — deep skin tone matching is taken seriously, with particular attention to neck and chest consistency. A bold lip is chosen to coordinate with the kente or ankara fabric being worn. Body luminiser is applied to shoulders and décolletage. The look is intentional, coordinated and joyful.",
      ritual:"Flawless base, coordinated bold lip, body luminiser on décolletage. Ghanaian celebration beauty — color as confidence, as culture, as joy.",
      shopLink:"#"
    },
    bodycare:{
      product:"Shea & Dawadawa Body Scrub", heroIngredient:"Shea Oil & Locust Bean (Dawadawa)",
      editorNote:"Ghana's multi-tasking body ritual using ingredients from the same tree to table tradition.",
      originStory:"Dawadawa — the fermented locust bean used throughout West African cooking — was traditionally applied as a topical skin treatment in northern Ghana alongside shea butter. The combined tradition of 'tree-to-table-to-skin' — using food ingredients for beauty — reflects the practical and sacred relationship between Ghanaian communities and the natural ingredients surrounding them.",
      villageSpotlight:"The Bolgatanga region of Ghana's Upper East — where both shea and locust bean trees grow — is where this combination tradition is most intact. Women's groups in Bolgatanga have developed it into a marketable body scrub product that preserves traditional knowledge in commercial form. The Bolgatanga artisan craft market, famous for its woven baskets, also sells traditional beauty preparations.",
      theScience:"Locust bean contains oleic acid-rich oil alongside saponins and tannins with antioxidant and antimicrobial properties. Shea oil (liquid fraction of shea butter) is a lighter carrier than solid shea, ideal for scrub formulation. Sea salt or fine clay added to the mixture provides mechanical exfoliation. The combination provides simultaneous cleansing, exfoliation and moisturization.",
      ritualInPractice:"Raw shea oil, ground locust bean powder, sea salt and a few drops of lemongrass oil are mixed into a paste. Applied to damp skin in circular motions in the bath or shower, then rinsed thoroughly. The skin is left soft and fragrant without requiring any additional moisturizer — the shea oil provides sufficient after-care.",
      ritual:"Shea oil, locust bean powder and sea salt scrubbed onto damp skin, leaving it so soft no moisturizer is needed afterwards. Ghana's tree-to-skin beauty ritual.",
      shopLink:"#"
    }
  },
  {
    name:"Colombia", flag:"🇨🇴", region:"Americas",
    philosophy:"Colombian beauty is vibrant and bold — shaped by the incredible biodiversity of the Andes, Amazon and Caribbean coast.",
    skincare:{
      product:"Coffee & Cacao Antioxidant Mask", heroIngredient:"Raw Cacao & Colombian Coffee",
      editorNote:"Colombia grows some of the world's finest coffee and cacao — and applies them directly to skin.",
      originStory:"Colombia is the world's third-largest coffee producer and a significant producer of fine-flavor cacao. Indigenous communities of the Andean and Amazonian regions have used cacao both internally and topically for centuries. The combination of coffee and cacao as a skin treatment emerged from Colombia's food culture — the same ingredients prized for their taste also became valued for their skin effects.",
      villageSpotlight:"The Coffee Cultural Landscape of Colombia — a UNESCO World Heritage site covering the departments of Caldas, Quindío, Risaralda and Valle del Cauca — is Colombia's most important coffee-growing region. The town of Salento in Quindío is the gateway to Colombia's coffee farms where artisan coffee producers also develop skin products from their own grounds.",
      theScience:"Raw cacao is the most concentrated natural source of flavanols — specifically epicatechin and catechin — which are among the most potent antioxidants known. Colombian coffee grounds provide caffeine for phosphodiesterase inhibition (anti-cellulite effects) alongside chlorogenic acid, a polyphenol with documented brightening and anti-inflammatory effects on skin.",
      ritualInPractice:"Raw cacao powder, finely ground Colombian coffee, coconut oil and a touch of honey are combined into a paste. Applied to the face as a mask for 15 minutes, or to the body as a scrub. Colombian women use this weekly — often as a social ritual between friends, reflecting the country's coffee ceremony culture.",
      ritual:"Raw cacao and Colombian coffee mask applied for 15 minutes on the face or as a body scrub. The most antioxidant-rich beauty treatment in this collection.",
      shopLink:"#"
    },
    haircare:{
      product:"Aguacate (Avocado) Deep Conditioning", heroIngredient:"Avocado Oil & Egg Protein",
      editorNote:"Colombia grows some of the world's finest avocados and understands their hair benefits deeply.",
      originStory:"The avocado (Persea americana) originated in the Americas and has been cultivated in Colombia for over 5,000 years. Indigenous Colombian communities have used avocado pulp as a hair and skin treatment since well before Spanish colonization. Colombian women in the Antioquia and Valle del Cauca regions developed the egg-and-avocado hair mask as a protein and moisture treatment combination.",
      villageSpotlight:"The avocado growing regions of Antioquia — particularly around Medellín and the coffee-growing valleys — produce Hass avocados of exceptional quality and fat content. The weekly plaza markets of Medellín's El Poblado and Laureles districts sell fresh avocados direct from farm to table. Colombian grandmothers use the same market avocados for cooking and haircare without distinction.",
      theScience:"Avocado oil contains unusually high levels of penetrating monounsaturated fatty acids (oleic acid) alongside vitamins E, D and B that support scalp health. Egg protein — specifically the hydrolysed proteins in egg yolk — temporarily fills gaps in the damaged hair shaft, improving tensile strength and reducing breakage by up to 30% in a single treatment.",
      ritualInPractice:"One ripe avocado mashed with one egg yolk and a tablespoon of coconut oil into a smooth paste. Applied generously to dry hair from scalp to tips, covered with a shower cap and left for 30–45 minutes under gentle heat. Rinsed thoroughly and followed by a light conditioning rinse with apple cider vinegar and water.",
      ritual:"Mashed avocado, egg yolk and coconut oil applied to hair under a shower cap for 45 minutes. Colombia's farm-to-hair deep conditioning treatment.",
      shopLink:"#"
    },
    makeup:{
      product:"Luminous Warm Skin Look", heroIngredient:"Illuminating Foundation & Peach Tones",
      editorNote:"Colombian beauty celebrates warm olive and tan skin — luminosity over coverage, always.",
      originStory:"Colombian beauty culture — shaped by extraordinary ethnic diversity, including Spanish, African, indigenous and Lebanese heritage — developed an aesthetic that celebrates warm skin tones, natural curves and a confidence that is distinctly different from the pale-skin ideals that dominated Latin American beauty for decades after colonization. The telenovela beauty revolution of the 1990s and 2000s popularized a warmer, more inclusive Colombian beauty standard globally.",
      villageSpotlight:"Cartagena de Indias on Colombia's Caribbean coast — one of the best-preserved colonial cities in the Americas — is the cultural capital of Afro-Colombian beauty culture, where African, Spanish and indigenous traditions merged into Colombia's most distinctive beauty aesthetic. Bogotá's Zona Rosa is the commercial beauty hub, while Medellín is Colombia's beauty surgery and cosmetics industry capital.",
      theScience:"Illuminating foundations with a satin or dewy finish perform better on warm-toned Latina skin than matte formulas, which can appear flat or ashy on olive and tan complexions. Peach and coral blush tones complement warm undertones with yellow or golden undertones. Bronze and warm terracotta contour shades more accurately mimic natural shadow on medium skin tones than cool-gray contour.",
      ritualInPractice:"A light-coverage illuminating tinted moisturizer with SPF applied with fingertips. A warm peach blush swept across the apples of the cheeks and blended upward. A terracotta bronzer dusted along the temples and jawline. A warm lip — nude, peach or terracotta. The look is effortlessly warm and deeply beautiful.",
      ritual:"Illuminating tinted SPF, peach blush, terracotta bronzer and a warm lip. Colombian warmth in four products — celebrating olive and tan skin in its natural glory.",
      shopLink:"#"
    },
    bodycare:{
      product:"Panela & Coconut Body Polish", heroIngredient:"Unrefined Cane Sugar (Panela)",
      editorNote:"Colombia's sweetest beauty ingredient — straight from the sugarcane fields.",
      originStory:"Panela — unrefined whole cane sugar — is Colombia's most beloved traditional sweetener, produced in trapiches (sugarcane mills) throughout the Andean highlands since the Spanish introduced sugarcane in the 16th century. Colombian women in the sugarcane growing regions of Cundinamarca and Boyacá have used warm panela dissolved in water or coconut oil as a body scrub for centuries.",
      villageSpotlight:"The trapiches of Colombia's Cundinamarca and Boyacá departments — often operating in the same families for multiple generations — produce panela through a traditional process of pressing sugarcane and simmering the juice in large copper pots. The small town of Villeta in Cundinamarca is known as the capital of panela production and hosts an annual panela festival.",
      theScience:"Unrefined panela contains glycolic acid — an AHA that provides chemical exfoliation — in addition to the physical exfoliation of its sugar crystals. This dual-action makes it more effective than refined sugar which provides only physical exfoliation. Panela also contains minerals (iron, calcium, magnesium) and B vitamins present in molasses that are absent from refined sugar.",
      ritualInPractice:"Panela is dissolved in warm coconut oil to a granular paste — firm enough to exfoliate but with enough oil to moisturize. Applied to damp skin in the shower in circular motions on the body. The panela dissolves gradually as it exfoliates, leaving the skin moisturized without a film. Used twice weekly — particularly on knees, elbows and heels.",
      ritual:"Panela and coconut oil scrubbed in circular motions on damp skin. Colombia's dual-action sugar scrub — glycolic acid meets physical exfoliation in one step.",
      shopLink:"#"
    }
  },
  {
    name:"Argentina", flag:"🇦🇷", region:"Americas",
    philosophy:"Argentine beauty is sophisticated, European in influence yet distinctly South American — effortless elegance with passionate warmth.",
    skincare:{
      product:"Rosa Mosqueta (Rosehip) Oil", heroIngredient:"Rosa Moschata Seed Oil",
      editorNote:"Patagonia gave the world the original rosehip oil — and it remains unrepeated.",
      originStory:"Rosa moschata — the musk rose whose seeds produce rosehip oil — grows wild across Patagonia, the Andean foothills and much of southern South America. Mapuche indigenous women of the Andean region have used rosehip seed oil as a skin treatment and wound healer for centuries, noting its ability to fade scars and restore skin color. Chilean and Argentine cosmetic scientists formally studied the oil in the 1980s, identifying it as the world's richest plant source of trans-retinoic acid.",
      villageSpotlight:"The Patagonian steppe of Neuquén Province in Argentina — where rosa moschata grows wild on windswept slopes — is the geographic origin of the world's most potent rosehip oil. Small Argentine cooperatives harvest the wild rosehips by hand in autumn when the seeds are most concentrated. Patagonian rosehip oil is darker, more intensely orange and more potent than cultivated Chilean varieties.",
      theScience:"Patagonian rosehip seed oil contains naturally-occurring trans-retinoic acid — the same compound as prescription tretinoin, though in much lower concentration — alongside beta-carotene (pro-Vitamin A) and an exceptionally high concentration of linoleic and alpha-linolenic acids. Clinical studies show rosehip oil applied twice daily reduces post-surgical scars, pigmentation and fine lines significantly after 12 weeks.",
      ritualInPractice:"Two to three drops of rosehip oil are pressed into clean, slightly damp skin in the evening — after water-based serums and before a heavier moisturizer if needed. Argentine women use it for both face and the décolletage. It is applied immediately after any sun exposure, skin irritation or as a scar treatment. The golden-orange color fades completely within minutes.",
      ritual:"Two drops of rosehip oil pressed into clean skin every evening. Patagonia's gift to the world — trans-retinoic acid from the wild musk rose.",
      shopLink:"#"
    },
    haircare:{
      product:"Yerba Mate Scalp Rinse", heroIngredient:"Yerba Mate Extract",
      editorNote:"Argentina's national drink is also one of its most underrated beauty ingredients.",
      originStory:"Yerba mate — consumed by over 90% of Argentines daily — has been drunk by the Guaraní people of the Río de la Plata region for thousands of years. The Guaraní used yerba mate leaves for both internal and topical purposes. Argentine women began using strong brewed mate as a final hair rinse in a folk tradition that persists in rural provinces.",
      villageSpotlight:"The Mesopotamia region of northeastern Argentina — particularly Misiones Province, which borders Brazil and Paraguay — is Argentina's yerba mate capital. The town of Apóstoles in Misiones is known as the 'world capital of yerba mate' and holds an annual yerba mate festival. The vast plantations of Misiones, surrounded by Atlantic Forest, produce Argentina's finest and most aromatic mate.",
      theScience:"Yerba mate contains saponins, polyphenols, caffeine, theobromine and 196 bioactive compounds. Caffeic acid — a polyphenol abundant in yerba mate — has documented stimulation effects on dermal papilla cells, the hair follicle cells that determine hair growth. Applied as a scalp rinse, the antioxidant polyphenols reduce oxidative stress on follicles and the caffeine provides scalp stimulation.",
      ritualInPractice:"Strong brewed yerba mate (cooled to room temperature) is poured through clean hair as a final rinse after conditioning. Massaged into the scalp for two minutes and left in — not rinsed out. It adds a subtle fragrance and a light gloss to the hair as it dries. Argentine women use this weekly — particularly those with scalp concerns.",
      ritual:"Strong brewed yerba mate poured through clean hair as a final rinse after conditioning and left in. Argentina's national drink serving double duty on the scalp.",
      shopLink:"#"
    },
    makeup:{
      product:"Buenos Aires Tango Red", heroIngredient:"Long-wear Satin Red Lip",
      editorNote:"If Paris owns the red lip, Argentina owns it after midnight.",
      originStory:"Buenos Aires tango culture — born in the conventillos (tenements) of La Boca and San Telmo in the late 19th century among immigrant Italian, Spanish and Afro-Argentine communities — developed a beauty aesthetic of passionate intensity. The tango red lip is distinct: warmer than the French version, worn with smoky eyes and a confidence that is entirely Argentine.",
      villageSpotlight:"The neighborhood of San Telmo in Buenos Aires — cobblestone streets, belle époque architecture and tango milongas on every corner — is the living heartland of Argentine beauty culture. The Sunday antique market in Plaza Dorrego, where tango dancers perform in elaborate dress and makeup, is the most concentrated expression of Argentine ceremonial beauty in the world.",
      theScience:"Satin-finish lip products provide the glossy drama of the tango aesthetic without the instability of pure gloss. Film-forming polymers in long-wear formulas maintain color through eating and drinking while the satin sheen reflects light dramatically under the tungsten lighting of milonga ballrooms.",
      ritualInPractice:"A warm red lip — brick red or vermilion rather than blue-red — applied with precision over a lined lip for longevity. Smoky brown or copper eyeshadow blended dramatically. A classic Argentine tango face takes fifteen minutes and is designed to last until dawn.",
      ritual:"A warm brick-red lip, smoky eyes and confidence. Buenos Aires tango beauty — built for intensity, designed to last until dawn.",
      shopLink:"#"
    },
    bodycare:{
      product:"Malbec Wine & Grape Seed Polish", heroIngredient:"Grape Seed Extract & Resveratrol",
      editorNote:"Mendoza's wine country produces more than the world's finest Malbec.",
      originStory:"The vineyards of Mendoza in Argentina's Cuyo region produce some of the world's most celebrated Malbec wines. Winemakers noticed that workers in the vineyards — constantly handling grapes and grape marc (pomace) — had remarkably soft hands and youthful-looking skin on their hands and forearms. This observation parallels the French Toji phenomenon and led to the development of wine-based skincare in Mendoza.",
      villageSpotlight:"The wine estate spa of Mendoza — particularly at vineyards like Clos de los Siete and Achaval Ferrer in Luján de Cuyo — have developed vinoterapi treatments using their own wine by-products. The town of Maipú — Argentina's wine tourism capital — is where vinotherapy as a beauty treatment was first formalised as a commercial offering in South America.",
      theScience:"Grape seed extract contains oligomeric proanthocyanidins (OPCs) — one of the most potent antioxidant compounds known, with free-radical scavenging capacity 20 times greater than Vitamin C. Resveratrol from grape skins activates sirtuins — the 'longevity genes' — and has documented anti-aging effects on fibroblast activity. Used as a body scrub, crushed grape seeds provide mechanical exfoliation alongside chemical antioxidant delivery.",
      ritualInPractice:"Crushed grape seeds, red wine lees (marc) and olive oil are combined into a coarse scrub paste and applied to damp skin in the shower. Massaged vigorously in long strokes across the body and rinsed thoroughly. Argentine spa vinotherapy treatments extend this into full-body wraps, baths and massages. The scent of warm wine and grape on the skin is deeply distinctive.",
      ritual:"Crushed grape seeds and red wine marc scrubbed vigorously across damp skin. Mendoza's vinotherapy brought home — resveratrol and antioxidants from Malbec country.",
      shopLink:"#"
    }
  },
  {
    name:"USA", flag:"🇺🇸", region:"Americas",
    philosophy:"American beauty is laboratory-driven — the country that invented SPF, AHAs, retinol and bond repair chemistry, then shared all of it with the world.",
    skincare:{
      product:"Retinol + AHA Science Regimen", heroIngredient:"Retinol (Vitamin A) & Glycolic Acid",
      editorNote:"America gave the world the two most clinically proven skincare ingredients in history — in the same decade, from the same city.",
      originStory:"Both retinol and AHAs were born in Philadelphia. Dr. Albert Kligman at the University of Pennsylvania discovered tretinoin's anti-aging effects in the 1970s–80s. Just blocks away, Dr. Eugene Van Scott and Dr. Ruey Yu filed their landmark 1973 patent on alpha hydroxy acids — coining the abbreviation 'AHA' — demonstrating that lactic, glycolic and citric acids could chemically resurface skin at concentrations far below anything abrasive. In 1984, Dr. Kligman coined the term 'cosmeceutical' to describe the new class of actives that fell between drug and cosmetic. American dermatology had effectively invented the modern science-first skincare era — and the FDA's regulatory framework made American ingredient claims the most rigorously tested in the world.",
      villageSpotlight:"Philadelphia's University of Pennsylvania School of Medicine is the unlikely birthplace of modern skincare science. Kligman's lab in the Department of Dermatology at Penn produced the retinoid research. Van Scott and Yu's AHA work — which earned over 125 patents licensed to 60 companies globally — also originated at Penn. Their company Polystrata eventually grew into NeoStrata, the skincare brand that first commercialized AHAs for the public. Van Scott and Yu defended their patents so vigorously that in 2007 they won a $41 million settlement against Mary Kay for patent infringement.",
      theScience:"Retinol converts to retinoic acid in the skin, binding to nuclear receptors that directly regulate gene expression — the only non-prescription ingredient proven to work at the DNA level. It normalizes cell turnover, stimulates collagen production, reduces melanin transfer and reverses UV-induced damage. AHAs work by a completely different mechanism: lowering the skin's surface pH to dissolve the ionic bonds that hold dead corneocytes together, chemically exfoliating without any abrasion. Used on alternating evenings — retinol to rebuild, AHA to resurface — they produce compounding results no single ingredient can replicate.",
      ritualInPractice:"The American dermatologist's alternating evening protocol: AHA exfoliant on Monday, Wednesday and Friday evenings. Retinol on Tuesday, Thursday and Sunday. Every single morning without exception: broad-spectrum SPF 30 minimum — both ingredients increase photosensitivity significantly and UV exposure will undo their effects completely. This alternating method achieves maximum benefit from both actives while managing the sensitivity that direct nightly alternation causes.",
      ritual:"AHA on alternate evenings to resurface, retinol on others to rebuild, SPF every single morning without fail. America's clinically alternating protocol — the most evidence-backed skincare routine ever constructed.",
      shopLink:"#"
    },
    haircare:{
      product:"Bond Repair Treatment (Olaplex Method)", heroIngredient:"Bis-Aminopropyl Diglycol Dimaleate",
      editorNote:"American chemistry solved the hair damage problem the rest of the world had accepted as permanent.",
      originStory:"Olaplex was developed in 2014 by Dr. Craig Hawker and Dr. Eric Pressly at UC Santa Barbara. It solved a problem the professional hair industry had accepted as irreversible: disulphide bond breakage from chemical processing. The patent-protected active molecule was the first ever proven to re-link broken bonds — not coat them, not mask them, but structurally repair them at a molecular level. It launched through Beverly Hills salons and within two years had fundamentally changed how the entire global hair industry understood damage. Van Scott and Yu's AHA work had its parallel in haircare: an American university chemistry department changing what the world believed was possible.",
      villageSpotlight:"Santa Barbara's UCSB chemistry department is the birthplace of the Olaplex molecule — a pure polymer chemistry discovery that crossed over from materials science into haircare. The Beverly Hills and New York professional colorist community validated it in practice: clients' hair was surviving bleach lifts that would previously have caused catastrophic breakage. The bond repair category Olaplex created now generates billions annually with dozens of competing brands, each attempting to replicate the underlying chemistry.",
      theScience:"Hair damage breaks the disulphide bonds connecting cysteine amino acids in the hair's keratin structure — these bonds determine the hair's shape, strength and elasticity. Bis-aminopropyl diglycol dimaleate actively seeks out free thiol groups (the exposed ends of broken bonds) and forms a new maleic acid bridge between them — a chemical crosslink that restores structural integrity from the inside out. It is the only ingredient with peer-reviewed clinical evidence for actual structural hair repair rather than surface coating or smoothing.",
      ritualInPractice:"The at-home weekly protocol: bond repair treatment applied generously to dry hair, left for a minimum of 10 minutes (up to 90 for severely damaged hair), then washed out with shampoo and conditioner. Used weekly as preventive maintenance. American colorists apply it in-salon during every bleach or color service as a structural insurance policy. The results are cumulative — each treatment builds measurably on the last.",
      ritual:"Bond repair treatment applied to dry hair weekly before shampooing. The only ingredient that actually repairs the hair from inside — not smooths, not coats, but structurally re-links broken bonds.",
      shopLink:"#"
    },
    makeup:{
      product:"Full Glam Contour & Highlight", heroIngredient:"High-Pigment Contour & Strobing Powder",
      editorNote:"American makeup is the most technically accomplished and boldest on earth — Hollywood invented every technique now used globally.",
      originStory:"The modern contour and highlight technique was developed by American makeup artists in Hollywood in the 1940s–60s, originally to create three-dimensional facial structure under the flat, high-key studio lighting of film sets. Max Factor — who emigrated from Poland and established his Hollywood studio in 1909 — invented the first foundation formulated for the specific light properties of cinema and is considered the father of modern film makeup. The technique globalised dramatically through social media from 2012 onwards, when American influencer culture exported Hollywood technique to every living room on earth.",
      villageSpotlight:"Hollywood and Beverly Hills are the birthplace of modern American glamor makeup. The Max Factor Museum on Hollywood Boulevard — now a landmark — is where the language of foundation, contour, highlight and blush was first formalised as teachable technique. The MAC Pro store on La Cienega Boulevard in West Hollywood and the makeup studios of Burbank shaped the high-definition makeup techniques that now define global beauty education and YouTube tutorials worldwide.",
      theScience:"Contouring uses cool-toned deeper shades to absorb light in areas meant to appear recessed — the brain reads shadow as depth. Highlighting uses light-reflective mica-based shimmers to bounce light from areas meant to appear prominent. High-definition formulas developed for 4K television production use extremely finely milled pigments under 10 microns to avoid pixelation, flashback and patchiness under professional lighting — the standard that has now become the consumer expectation.",
      ritualInPractice:"Foundation matched precisely to neck and chest is applied and set with translucent powder. A cool-toned contour powder defines the hollows of the cheeks, temples and jawline. A warm bronzer adds natural warmth over the contour. A highly reflective highlight is pressed to cheekbones, brow bone and nose bridge with a fan brush. Each layer requires its own brush and its own blending time. The technique takes 15–25 minutes mastered — and is designed for results that read across a room.",
      ritual:"Foundation, cool contour, warm bronzer, reflective highlight with precision brushes. Hollywood's three-dimensional sculpting technique — the most technically ambitious makeup tradition in the world.",
      shopLink:"#"
    },
    bodycare:{
      product:"SPF Science & CBD Recovery Ritual", heroIngredient:"Broad-Spectrum UV Filters & Full-Spectrum CBD",
      editorNote:"America invented the concept of measurable sun protection — and then did the same for evidence-based recovery.",
      originStory:"The SPF rating system was developed in the United States in the 1960s — providing consumers for the first time with a standardised, measurable way to compare sun protection levels. American dermatological research through the 1980s and 90s established that UVA rays were equally damaging to UVB, prompting the 'broad-spectrum' requirement that is now global standard. The Smithsonian Institution's National Museum of American History formally recognizes SPF as one of America's most significant contributions to public health. Separately, the 2018 US Farm Bill legalising hemp-derived CBD triggered the most significant new American wellness product category in decades — topical CBD for inflammation, skin barrier support and post-exercise recovery.",
      villageSpotlight:"The American Academy of Dermatology in Chicago has been the institutional force behind daily sunscreen adoption since the 1970s — their 'SPF every day, rain or shine' message is the single most impactful public health beauty campaign in history. For CBD, the wellness hubs of Boulder, Colorado and Asheville, North Carolina became the commercial development centers where topical CBD body products were first tested as luxury recovery treatments. American functional medicine — pioneered at institutions like the Cleveland Clinic's Center for Functional Medicine — validated transdermal mineral therapy and CBD as evidence-based recovery protocols.",
      theScience:"Mineral zinc oxide provides broad-spectrum UVA and UVB protection by physically scattering radiation — it is the only UV filter with a perfect safety record across 50 years of use. SPF 50 blocks 98% of UVB; a true broad-spectrum formula protects equivalently against UVA. Topical CBD binds to CB2 receptors in the skin's endocannabinoid system, reducing inflammatory cytokine production and muscle tension. Transdermal magnesium chloride bypasses gastrointestinal absorption, directly supplementing a mineral that is cofactor in over 300 enzymatic reactions including ATP production, muscle relaxation and cortisol regulation.",
      ritualInPractice:"Morning non-negotiable: broad-spectrum SPF 50 applied as the absolute final step over all skincare, under all makeup, every day regardless of weather, season or plans. This single habit, applied consistently from the age of 25, produces more measurable anti-aging benefit than any other single step — confirmed by identical twin UV studies. Post-exercise evening: CBD body oil massaged into muscles in long strokes, followed by magnesium spray on the soles of feet and calves. Monthly: a 20-minute magnesium chloride flake bath.",
      ritual:"Broad-spectrum SPF 50 every morning as the final non-negotiable step. CBD body oil and magnesium spray after exercise. The two greatest American contributions to preventive beauty science — daily protection and evidence-based recovery.",
      shopLink:"#"
    }
  },
  {
    name:"Mexico", flag:"🇲🇽", region:"Americas",
    philosophy:"Mexican beauty is rooted in Aztec and Mayan wisdom — ancient plants, volcanic earth and ceremonial ritual that have endured five centuries of history.",
    skincare:{
      product:"Nopal Cactus & Tepezcohuite Mask", heroIngredient:"Nopal Gel & Mimosa Tenuiflora Bark",
      editorNote:"The Aztec and Mayan skincare pantry is one of the most extraordinary on earth — and the world is only just discovering it.",
      originStory:"Nopal cactus — the prickly pear, Opuntia ficus-indica — is the most ancient symbol of Mexico, depicted on the national flag and cultivated since at least 65 BCE. The Aztecs used its gel for skin healing and the Spanish chronicler Francisco Hernández documented its medicinal applications in 1570. Tepezcohuite (Mimosa tenuiflora) bark was used by the Maya for skin regeneration for centuries before modern science caught up. It gained global attention after a devastating 1984 gas explosion in Mexico City — Mexican doctors applied tepezcohuite poultices to burn victims with documented extraordinary healing rates. Salma Hayek has publicly credited it as her primary anti-aging treatment, bringing the Mayan ingredient to international attention.",
      villageSpotlight:"Nopal grows wild and cultivated in 18 Mexican states across over 7.4 million acres. The Milpa Alta district of Mexico City produces 70% of Mexico's fresh nopal harvest and is considered the nopal capital of the world. Tepezcohuite bark comes primarily from the Sierra Madre del Sur mountains in Oaxaca and Chiapas, where indigenous communities harvest it sustainably. The women's skincare cooperatives of Oaxaca — particularly those operating in the valleys near Monte Albán — prepare both ingredients using stone-grinding methods unchanged for centuries.",
      theScience:"Nopal gel contains betalains, flavonoids, amino acids and polysaccharides that hydrate by binding water to the skin's surface — a mechanism similar to hyaluronic acid but with additional antioxidant activity. Tepezcohuite bark contains tannins, flavonoids and lupeol — a triterpene compound with documented collagen-stimulating and anti-inflammatory properties. Studies show tepezcohuite bark extract accelerates keratinocyte proliferation by 40%, directly explaining its extraordinary burn-healing reputation and now its anti-aging applications.",
      ritualInPractice:"Fresh nopal gel is scraped from a dethorned pad and applied directly to clean skin as a 20-minute hydrating mask — identical to the method Mexican grandmothers have used for generations. Tepezcohuite powder mixed with raw honey and a few drops of argan oil is applied as a resurfacing mask twice weekly. In the markets of Oaxaca, both ingredients are sold fresh and prepared at home as a weekly Sunday ritual that functions as a full skin reset.",
      ritual:"Fresh nopal gel scraped directly from the cactus pad applied for 20 minutes. Tepezcohuite powder and honey twice weekly for regeneration. Mexico's most ancient skincare, now confirmed by cell biology.",
      shopLink:"#"
    },
    haircare:{
      product:"Nopal & Aloe Hair Mask", heroIngredient:"Nopal Mucilage & Aloe Vera",
      editorNote:"Mexico's two most powerful hydrating plants — applied to the hair they were always meant for.",
      originStory:"Both nopal cactus and aloe vera are native to Mexico and have been used by indigenous communities for hair care for thousands of years. The Aztec codices describe using nopal juice to strengthen and thicken hair. The Mayan healing tradition of Yucatán documented nopal as the most effective plant for hair loss prevention. The combination of nopal and aloe vera is one of the oldest recorded hair treatments in the Americas — available in every Mexican market today for the same price as a vegetable.",
      villageSpotlight:"The markets of Oaxaca City — particularly the Mercado Benito Juárez — sell fresh nopal pads and cut aloe vera leaves side by side without any suggestion that they are beauty products. In the Yucatán Peninsula, Mayan herbalists (h-men) still prepare and sell hair treatments from both plants. The town of Mérida is where Yucatecan plant medicine traditions are most commercially intact, with specialist market stalls offering customized hair and skin preparations.",
      theScience:"Nopal mucilage — the thick gel of the cactus — contains amino acids that strengthen the hair shaft and polysaccharides that coat each strand with a moisture-retaining film, improving tensile strength and reducing breakage. The stimulating compounds in nopal juice improve scalp microcirculation, supporting follicular activity. Aloe vera's proteolytic enzymes repair dead skin cells on the scalp while its naturally occurring amino acids condition the hair shaft from within.",
      ritualInPractice:"One fresh nopal pad is blended with two tablespoons of aloe vera gel and a tablespoon of coconut oil into a smooth paste. Applied generously to the scalp and all the hair, wrapped in a warm towel for one hour and rinsed thoroughly with cool water. Mexican women use this weekly treatment year-round, considering it essential for maintaining the thick, dark, lustrous hair that Mexico's botanical heritage supports.",
      ritual:"Fresh nopal and aloe vera blended into a paste, applied to scalp and hair under a warm towel for one hour. Mexico's ancient hair ritual — the two most hydrating plants in the Americas working together.",
      shopLink:"#"
    },
    makeup:{
      product:"Frida-Inspired Bold Brow & Dark Lip", heroIngredient:"Defining Brow Pomade & Matte Lip",
      editorNote:"Mexican beauty is unapologetically bold — dark brows, dark lips and a complete refusal to soften either.",
      originStory:"Mexican makeup culture draws from pre-Columbian indigenous use of natural pigments — cochineal dye from insects that live on nopal cactus for lips and cheeks, charcoal for eyes — and the 20th-century celebration of indigenous identity. Frida Kahlo's deliberate, defiant emphasis on her natural brow, her dark lip and her indigenous Tehuana dress transformed features that colonial beauty standards had labelled as corrections into symbols of fierce pride. The Frida aesthetic reversed decades of colonial beauty pressure across Latin America and continues to shape how Mexican women relate to their appearance.",
      villageSpotlight:"The neighborhood of Coyoacán in Mexico City — where Frida Kahlo's Casa Azul still stands as a museum — is the spiritual center of Mexican artistic beauty culture. The markets of Tehuantepec in Oaxaca, where Tehuana women whose dress and aesthetic Kahlo adopted still wear full traditional regalia for festivals, remain the living source of this tradition. Cochineal dye — carmine — is still produced in Oaxaca from insects that feed on nopal, completing an extraordinary circle: the national symbol produces the national pigment.",
      theScience:"Full, defined brows frame the face and direct attention to the eyes more powerfully than almost any other single makeup technique. Dark, matte lip colors use high concentrations of red and brown iron oxides — the most stable, deeply pigmented cosmetic compounds known — alongside carmine for intensity. Mexican cochineal carmine is still the most potent natural red pigment available, used in luxury lipsticks globally, and produced from the Dactylopius coccus insect that lives exclusively on nopal.",
      ritualInPractice:"Brows are brushed upward and defined with a pomade or pencil in a full, natural shape — the Frida rule is no correction, no overplucking, no apology. A dark matte lip — deep wine, terracotta or chocolate — is applied with precision over a lined lip. The rest of the face is left minimal. The Mexican aesthetic of fuerte (strong) is complete in two products and requires no supporting cast whatsoever.",
      ritual:"Full defined brows, a dark matte lip, clean skin. Mexican beauty is fuerte — strong, intentional and rooted in a cultural pride that makes every feature a statement.",
      shopLink:"#"
    },
    bodycare:{
      product:"Temazcal Sweat Ceremony", heroIngredient:"Volcanic Steam, Copal Resin & Medicinal Herbs",
      editorNote:"The Aztec sweat lodge is one of the world's oldest and most complete body rituals — it cleanses, heals and reconnects simultaneously.",
      originStory:"The temazcal — from the Nahuatl temazcalli, meaning 'house of heat' — is a pre-Columbian Mesoamerican sweat lodge used by indigenous cultures across Mexico for at least 3,000 years. Used by the Aztecs for healing after battle, during and after pregnancy and as general purification, it was documented by Spanish missionaries in the 16th century who attempted — and failed — to suppress it as a pagan practice. The temazcal survived colonization intact and has been reclaimed as the central wellness ritual of modern Mexico, now practiced from remote mountain villages to five-star Tulum resorts.",
      villageSpotlight:"The Zapotec communities of the Sierra Norte mountains in Oaxaca maintain some of the oldest active temazcal traditions. In the village of Teotitlán del Valle near Oaxaca City — renowned for its hand-woven textiles — temazcal ceremonies are still led by women curanderas (healers) using traditional medicinal plants and copal resin. The modern temazcal wellness centers of Tulum have brought the ritual to global attention, but the most authentic experiences remain in the mountain villages of Oaxaca, Chiapas and Puebla states.",
      theScience:"The temazcal operates at 40–70°C with very high humidity, creating conditions that dilate blood vessels dramatically and trigger profuse sweating. Sweat contains urea, salts and trace metabolic waste — their removal through the skin's surface provides genuine physiological cleansing that no topical product can replicate. Copal resin (Bursera species) burned in the temazcal releases alpha-pinene and limonene — documented antimicrobial terpenes that also have anxiolytic effects on the nervous system via inhalation and transdermal absorption in the steam.",
      ritualInPractice:"A traditional temazcal is led by a curandera who controls the heat by pouring herbal water (infused with rosemary, eucalyptus, copal and seasonal medicinal plants) over heated volcanic rocks called abuelas — grandmothers. Participants enter for two rounds of 15–20 minutes, cooling completely between rounds. Herb bundles are beaten gently against the body while inside. The ceremony ends with a full cold water rinse and mandatory silent rest. Participants emerge with dramatically cleansed, deeply glowing skin.",
      ritual:"A temazcal sweat ceremony with volcanic rocks, herbal steam and copal resin led by a curandera. Mexico's 3,000-year purification ritual — body, skin and spirit renewed in a single ceremony.",
      shopLink:"#"
    }
  },
  {
    name:"New Zealand", flag:"🇳🇿", region:"Oceania",
    philosophy:"Aotearoa's beauty wisdom comes from Rongoā Māori — the healing system of the land itself, where every plant is a taonga, a sacred treasure.",
    skincare:{
      product:"Mānuka Honey & Kawakawa Mask", heroIngredient:"Methylglyoxal (MGO) Mānuka Honey",
      editorNote:"New Zealand produced the most antibacterial honey on earth. The Māori called it taonga — treasure — centuries before science explained why.",
      originStory:"Mānuka honey's modern scientific story begins in the 1980s when Dr. Peter Molan at the University of Waikato discovered its non-peroxide antibacterial activity — naming it the Unique Mānuka Factor (UMF). But Māori had been using the mānuka tree (Leptospermum scoparium) in rongoā Māori (traditional medicine) as a taonga, a sacred treasure, for centuries before this. Mānuka gum was applied to burns, bark infusions treated skin conditions, and ash from burned mānuka soothed scalp conditions. The honey bees that produce mānuka honey arrived in New Zealand in 1839; Māori beekeepers were among the first commercial producers and remain the most culturally connected custodians of the ingredient.",
      villageSpotlight:"The east coast of New Zealand's North Island — particularly the rugged coastal regions of Gisborne and the East Cape — contains the densest wild mānuka forests and produces the highest-UMF honey. Mānuka blooms for only a few weeks each year; bees must work at extraordinary speed during this narrow window. Māori-owned mānuka enterprises in Ngāti Porou territory on the East Cape operate under principles of kaitiakitanga — guardianship of the land — and are the most culturally authentic producers. Kawakawa (Piper excelsum) grows abundantly throughout New Zealand's coastal forests and is the most important plant in Rongoā Māori.",
      theScience:"Mānuka honey's active compound methylglyoxal (MGO) provides antibacterial activity up to 100 times stronger than conventional honey. Unlike regular honey's antibacterial hydrogen peroxide — which degrades rapidly — MGO is stable and retains its activity when diluted, heated or exposed to light. Clinical studies confirm mānuka honey's efficacy against Staphylococcus aureus, Streptococcus pyogenes and MRSA. Kawakawa contains myristicin — a potent antiseptic compound — alongside pipermethystine with documented anti-inflammatory and antimicrobial properties confirmed by the Journal of Ethnopharmacology.",
      ritualInPractice:"UMF 10+ or higher mānuka honey is applied directly to clean skin as a 20-minute mask — its high viscosity holds it in place without sliding. Fresh kawakawa leaves are simmered in water for 10 minutes, cooled and strained, and the infusion used as a toning rinse after the honey is removed. In traditional rongoā practice, kawakawa leaves are also prepared as a direct poultice for active skin conditions and inflammatory breakouts.",
      ritual:"UMF 10+ mānuka honey applied to skin for 20 minutes, followed by a kawakawa leaf rinse. New Zealand's two most powerful healing plants — one ancient tradition, now confirmed by clinical microbiology.",
      shopLink:"#"
    },
    haircare:{
      product:"Mānuka Honey & Harakeke Deep Conditioner", heroIngredient:"Mānuka Honey & Harakeke (Flax) Seed Oil",
      editorNote:"Aotearoa's native plants produce haircare ingredients found nowhere else on earth.",
      originStory:"Harakeke — New Zealand flax (Phormium tenax) — is one of the most important plants in Māori culture, used for weaving, medicine and beauty for over 700 years. The seed oil pressed from harakeke seeds was used in traditional rongoā as a hair and skin conditioning treatment. Mānuka honey was incorporated into hair treatments by early Māori beekeepers who observed its conditioning effects alongside its healing properties. The two ingredients together — harakeke oil to penetrate and condition, mānuka honey to humect and heal — represent the foundational Rongoā Māori approach to hair as part of the body's overall health system.",
      villageSpotlight:"The wetlands and river margins of the Waikato and Bay of Plenty regions are where harakeke grows most abundantly. The town of Te Awamutu in the Waikato has a particularly strong harakeke weaving tradition, and the plants cultivated here for cultural purposes supply the seed oil used in New Zealand boutique haircare. The Māori cultural renaissance from the 1980s onwards drove renewed commercial and medicinal interest in harakeke's applications beyond weaving.",
      theScience:"Harakeke seed oil contains a fatty acid profile rich in linoleic acid (omega-6) and oleic acid, with an exceptionally high concentration of ferulic acid — a potent antioxidant that protects lipids from oxidative degradation and has documented passive UV-absorbing properties, providing photoprotection for color-treated hair. Mānuka honey's humectant properties draw atmospheric moisture into the hair shaft, while its low pH gently closes the cuticle to increase shine. Together, harakeke penetrates and mānuka seals.",
      ritualInPractice:"One tablespoon of mānuka honey is mixed with two tablespoons of harakeke seed oil and warmed gently until combined. Applied generously from scalp to ends on dry or dampened hair, wrapped in a warm towel for 30–45 minutes and rinsed out with cool water to preserve the cuticle-closing effect of the honey. New Zealand women use this monthly as a deep conditioning ritual, particularly in summer after beach and sun exposure.",
      ritual:"Mānuka honey and harakeke flax oil applied to hair under a warm towel for 45 minutes. New Zealand's most culturally rooted hair treatment — Māori wisdom and the world's most antibacterial honey in one ritual.",
      shopLink:"#"
    },
    makeup:{
      product:"Clean Minimal Glow", heroIngredient:"High-SPF Tinted Moisturizer & Mānuka Lip Balm",
      editorNote:"New Zealand is the world's most ethically serious beauty country — fewer products, uncompromising standards, extraordinary skin underneath.",
      originStory:"New Zealand's beauty aesthetic is shaped by its outdoor culture, extraordinary natural environment and a strong ethical framework around sustainability and indigenous rights. The brands that put New Zealand on the global beauty map — Trilogy (rosehip oil), Emma Lewisham, Antipodes — all share the same philosophy: minimal, clean, scientifically validated, ethically sourced. Emma Lewisham's circular beauty model — founded on the principle that beauty packaging should never go to landfill — has been cited globally as the future of the industry. The country has the most rigorous sustainability credentials of any beauty-producing nation.",
      villageSpotlight:"The regenerative farm supplying Emma Lewisham's ingredients in Northland is a model for ethical sourcing. Trilogy's rosehip oil is sourced from Patagonian cooperatives under fair-trade principles. The Māori-owned beauty enterprises emerging from Rotorua — using geothermal mineral-infused ingredients — represent a new wave of indigenous beauty that is both culturally authentic and globally competitive. New Zealand's small domestic market forces brands to compete on performance rather than price or advertising.",
      theScience:"New Zealand clean beauty formulations are characterized by unusually high active concentrations. Emma Lewisham's Vitamin C serum uses stabilized ascorbic acid at pharmaceutical concentrations. Trilogy's rosehip oil has clinical trials demonstrating statistically significant reduction in scar tissue and hyperpigmentation. The UMF mānuka grading system — with its independent third-party laboratory verification — is the most rigorous honey certification in the world, the gold standard that every other honey certification is measured against.",
      ritualInPractice:"A high-SPF tinted moisturizer applied with fingertips as the only base layer. A mānuka-infused lip balm. One coat of mascara if desired — nothing else. New Zealand's minimalist approach only works if the skincare underneath is genuinely excellent: the look is not achievable without the routine that precedes it. This is the point. The makeup ritual is inseparable from the skincare ritual that makes it possible.",
      ritual:"SPF tinted moisturizer, mānuka lip balm, mascara. Clean, minimal and deeply ethical. New Zealand beauty is what happens when the skincare is so good, the makeup step becomes genuinely optional.",
      shopLink:"#"
    },
    bodycare:{
      product:"Rotorua Geothermal Mud & Thermal Pool Ritual", heroIngredient:"Sulfur-rich Geothermal Silica Minerals",
      editorNote:"New Zealand sits on one of the most geologically active landscapes on earth — and its body treatments are unlike anything produced anywhere else.",
      originStory:"Rotorua — the geothermal city on the North Island's volcanic plateau — has been a site of Māori healing for over 700 years. The thermal pools of Whakarewarewa and the Polynesian Spa on Lake Rotorua were used for treating skin conditions, rheumatic pain and general wellness long before European settlement. Māori named the region Te Whakarewarewatanga o te opo o Wahiao — the gathering place for healing. European settlers arrived in the 1870s seeking treatment for various conditions and the thermal bathing culture that emerged has been in continuous operation since.",
      villageSpotlight:"The living Māori village of Whakarewarewa in Rotorua is built directly on the geothermal field — residents cook in thermal pools and bathe in them daily, a tradition of 700+ continuous years. The Polynesian Spa on the shores of Lake Rotorua is one of the world's premier thermal bathing facilities, fed by 28 separate mineral springs, each with a different mineral composition and documented therapeutic indication. It has been in continuous operation since 1882.",
      theScience:"Rotorua's geothermal waters contain sulfur, silica, bicarbonate, calcium and magnesium. Sulfur has documented keratolytic (skin-softening) and antibacterial properties — it dissolves the disulphide bonds in excess keratin, effectively treating psoriasis, eczema and scalp conditions. Silica improves skin elasticity by stimulating dermal fibroblast activity. Transdermal mineral absorption during thermal bathing is measurable: studies show statistically significant increases in serum magnesium and calcium after 20-minute soaks.",
      ritualInPractice:"In Rotorua, thermal bathing is a daily practice — the mineral pools are a social and healing institution used morning and evening by locals. Rotorua volcanic silica mud — the gray cooling mud of the thermal pools — is applied to skin and left to dry completely before rinsing, drawing impurities from pores while depositing minerals. The sulfurous smell dissipates completely within minutes of rinsing. Visitors emerge with visibly improved skin texture after a single session that no other body treatment replicates.",
      ritual:"Volcanic geothermal mud applied to skin and left to dry, followed by a mineral thermal pool soak. Seven hundred years of Māori therapeutic practice — now confirmed by mineral absorption science.",
      shopLink:"#"
    }
  },
];

const concernData = {
  acne: {
    label: "Acne & Breakouts", icon: "🔴",
    description: "Blemishes, congestion & breakout-prone skin",
    intro: "These five traditions approach blemish-prone skin with the wisdom of centuries — each tackling the root causes of acne through different but complementary pathways.",
    countries: [
      { country:"India", flag:"🇮🇳", product:"Turmeric & Neem Face Wash", heroIngredient:"Curcumin & Nimbidin",
        ritual:"Turmeric and neem powder paste applied to active blemishes overnight. India's Ayurvedic approach directly targets the bacteria and inflammation responsible for acne simultaneously.", shopLink:"#" },
      { country:"Japan", flag:"🇯🇵", product:"Fermented Rice Sake Toner", heroIngredient:"Galactomyces & Kojic Acid",
        ritual:"Fermented sake lotion applied in multiple thin layers using te-ate technique to clear congestion and normalize sebum without stripping the skin barrier.", shopLink:"#" },
      { country:"Morocco", flag:"🇲🇦", product:"Black Seed & Clay Mask", heroIngredient:"Nigella Sativa & Rhassoul",
        ritual:"Rhassoul clay mixed with black seed oil applied weekly to draw out impurities while reducing inflammation. Morocco's desert botanicals provide powerful antibacterial action.", shopLink:"#" },
      { country:"Australia", flag:"🇦🇺", product:"Tea Tree Spot Treatment", heroIngredient:"Terpinen-4-ol",
        ritual:"Diluted tea tree oil applied directly to active blemishes. Clinical trials show 5% tea tree oil gel is equivalent to 5% benzoyl peroxide for acne — without dryness.", shopLink:"#" },
      { country:"Egypt", flag:"🇪🇬", product:"Black Seed & Honey Mask", heroIngredient:"Thymoquinone & Hydrogen Peroxide",
        ritual:"Black seed oil mixed with Sidr honey applied as a mask for 20 minutes. Thymoquinone from black seed is effective against the exact bacterial strain (C. acnes) driving breakouts.", shopLink:"#" },
    ]
  },
  aging: {
    label: "Anti-Aging", icon: "⏳",
    description: "Fine lines, wrinkles & loss of firmness",
    intro: "From retinol science to ancient oils and fermented actives — the world's most effective anti-aging traditions approach cell renewal from every angle.",
    countries: [
      { country:"USA", flag:"🇺🇸", product:"Retinol Serum Regimen", heroIngredient:"Retinol (Vitamin A)",
        ritual:"A pea-sized amount of retinol applied every evening, the only non-prescription ingredient proven to regulate gene expression and reverse UV-induced damage.", shopLink:"#" },
      { country:"Japan", flag:"🇯🇵", product:"Galactomyces Essence + Gua Sha", heroIngredient:"Fermented Rice Filtrate",
        ritual:"Fermented essence pressed in multiple layers using te-ate, followed by gua sha in upward strokes. Japan's two-pronged approach to cellular renewal and lymphatic stimulation.", shopLink:"#" },
      { country:"France", flag:"🇫🇷", product:"Thermal Water + Squalane Serum", heroIngredient:"Olive Squalane",
        ritual:"Thermal water misted as a base, squalane pressed in as the final step. The French approach to aging is barrier preservation first — the skin that holds its moisture holds its youth.", shopLink:"#" },
      { country:"Argentina", flag:"🇦🇷", product:"Patagonian Rosehip Oil", heroIngredient:"Trans-Retinoic Acid",
        ritual:"Two drops of wild-harvested rosehip oil pressed into skin each evening. The world's richest natural source of retinoic acid — the compound that turns back the clock.", shopLink:"#" },
      { country:"China", flag:"🇨🇳", product:"Pearl Powder & Gua Sha", heroIngredient:"Conchiolin Protein",
        ritual:"Pearl powder mixed into moisturizer followed by gua sha in upward strokes. Empress Wu Zetian's daily imperial ritual — now confirmed by dermatological science.", shopLink:"#" },
    ]
  },
  pigmentation: {
    label: "Hyperpigmentation", icon: "🌗",
    description: "Dark spots, uneven tone & post-acne marks",
    intro: "The world's most effective brightening traditions — from India's turmeric science to Japan's sake ferment — tackle pigmentation at its enzymatic source.",
    countries: [
      { country:"India", flag:"🇮🇳", product:"Turmeric Ubtan", heroIngredient:"Curcumin",
        ritual:"Turmeric and sandalwood paste applied weekly and left for 20 minutes. Curcumin inhibits tyrosinase — the enzyme that produces melanin — at the source.", shopLink:"#" },
      { country:"Japan", flag:"🇯🇵", product:"Sake & Kojic Acid Toner", heroIngredient:"Kojic Acid",
        ritual:"Fermented rice sake toner pressed in multiple layers morning and evening. Kojic acid — named for koji mold — inhibits tyrosinase with extraordinary precision.", shopLink:"#" },
      { country:"Australia", flag:"🇦🇺", product:"Kakadu Plum Vitamin C Serum", heroIngredient:"Ascorbic Acid",
        ritual:"Kakadu plum serum applied every morning under SPF. The world's highest natural Vitamin C source inhibits tyrosinase and protects against UV-induced pigmentation simultaneously.", shopLink:"#" },
      { country:"Morocco", flag:"🇲🇦", product:"Pure Argan Oil", heroIngredient:"Vitamin E & Linoleic Acid",
        ritual:"Two drops of pure argan oil pressed into damp skin after cleansing. Vitamin E and linoleic acid gradually fade dark spots while restoring the skin barrier.", shopLink:"#" },
      { country:"Greece", flag:"🇬🇷", product:"Greek Yoghurt & Honey Mask", heroIngredient:"Lactic Acid",
        ritual:"Greek yoghurt and thyme honey mask applied weekly for 20 minutes. Lactic acid chemically exfoliates the hyperpigmented dead cell layer, progressively revealing even skin beneath.", shopLink:"#" },
    ]
  },
  dryness: {
    label: "Dryness & Dehydration", icon: "💧",
    description: "Tight, flaky or moisture-starved skin",
    intro: "From Moroccan argan to Korean snail mucin — the world's most effective moisturizing traditions all prioritize barrier repair over surface hydration.",
    countries: [
      { country:"Morocco", flag:"🇲🇦", product:"Pure Argan Oil on Damp Skin", heroIngredient:"Oleic Acid & Vitamin E",
        ritual:"Two drops of argan oil pressed into damp skin immediately after cleansing. Traps water in the skin with a barrier oil the Berber women of Essaouira have used for 5,000 years.", shopLink:"#" },
      { country:"Nigeria", flag:"🇳🇬", product:"Unrefined Shea Butter", heroIngredient:"Triterpene Alcohols",
        ritual:"Raw shea melted between the palms and pressed into damp post-bath skin. The highest unsaponifiable fraction of any plant butter — extraordinary barrier repair.", shopLink:"#" },
      { country:"South Korea", flag:"🇰🇷", product:"Snail Mucin Essence", heroIngredient:"Hyaluronic Acid & Allantoin",
        ritual:"Snail mucin essence pressed in multiple thin layers — morning and night. Hyaluronic acid draws water into the skin while allantoin accelerates the repair of the moisture barrier.", shopLink:"#" },
      { country:"Japan", flag:"🇯🇵", product:"Fermented Rice Lotion + Cotton Mask", heroIngredient:"Fermented Amino Acids",
        ritual:"A cotton pad soaked in Japanese lotion placed over the face for five minutes as a mini mask. Multiple applications of fermented lotion build skin's own moisture-holding capacity.", shopLink:"#" },
      { country:"Sweden", flag:"🇸🇪", product:"Sea Buckthorn Oil", heroIngredient:"Omega-7 & All Fat-Soluble Vitamins",
        ritual:"One drop of sea buckthorn oil mixed into moisturizer morning and evening through winter. Contains all four fat-soluble vitamins alongside the skin-identical omega-7 fatty acid.", shopLink:"#" },
    ]
  },
  sensitivity: {
    label: "Sensitivity & Redness", icon: "🌸",
    description: "Reactive, inflamed or easily irritated skin",
    intro: "The world's gentlest and most effective calming traditions — from French thermal water to Thai centella — address sensitivity at its inflammatory root.",
    countries: [
      { country:"France", flag:"🇫🇷", product:"Thermal Spring Water Spray", heroIngredient:"Selenium & Aquaphilus Postbiotics",
        ritual:"La Roche-Posay thermal water misted on and gently patted dry throughout the day. Selenium calms the overactive immune response. Prescribed by French dermatologists for reactive skin.", shopLink:"#" },
      { country:"Thailand", flag:"🇹🇭", product:"Centella Asiatica Cica Cream", heroIngredient:"Asiaticoside & Madecassoside",
        ritual:"Centella cream applied to sensitive areas twice daily. Clinically proven to reduce inflammatory cytokines while simultaneously stimulating collagen — soothing and strengthening in one.", shopLink:"#" },
      { country:"Ethiopia", flag:"🇪🇹", product:"Frankincense Facial Oil", heroIngredient:"AKBA Boswellic Acid",
        ritual:"A few drops of diluted frankincense oil pressed into sensitised skin. Boswellic acids specifically inhibit the 5-LOX inflammatory pathway — one of the most targeted natural anti-inflammatories known.", shopLink:"#" },
      { country:"Australia", flag:"🇦🇺", product:"Tea Tree & Aloe Serum", heroIngredient:"Terpinen-4-ol & Acemannan",
        ritual:"Aloe vera gel with a diluted drop of tea tree oil applied to reactive areas. Australia's most gentle botanicals combining anti-microbial and wound-healing properties.", shopLink:"#" },
      { country:"Japan", flag:"🇯🇵", product:"Lightweight Centella Lotion", heroIngredient:"Fermented Plant Extracts",
        ritual:"A light Japanese lotion pressed gently into reactive skin using the warmth of hands only — no cotton pads which can cause friction. The te-ate technique is especially important for sensitive skin.", shopLink:"#" },
    ]
  },
  dullness: {
    label: "Dullness & Uneven Tone", icon: "✦",
    description: "Lackluster, tired or uneven complexion",
    intro: "The world's most radiance-boosting traditions — from Japan's sake ferment to Ethiopia's frankincense — attack dullness from every angle.",
    countries: [
      { country:"South Korea", flag:"🇰🇷", product:"Vitamin C + Niacinamide Serum Stack", heroIngredient:"Ascorbic Acid & Niacinamide",
        ritual:"Vitamin C pressed in first, niacinamide serum layered over it. The Korean method of layering targeted actives achieves more radiance than either could alone.", shopLink:"#" },
      { country:"Japan", flag:"🇯🇵", product:"Sake Ferment Lotion", heroIngredient:"Galactomyces & Kojic Acid",
        ritual:"Three or more layers of fermented sake lotion pressed into skin using te-ate. Kojic acid brightens, fermented compounds resurface — the original glow treatment.", shopLink:"#" },
      { country:"India", flag:"🇮🇳", product:"Turmeric & Papaya Enzyme Mask", heroIngredient:"Curcumin & Papain",
        ritual:"Turmeric and ripe papaya mashed into a mask, applied for 20 minutes. Papain enzymatically dissolves the dead surface cells blocking light while curcumin evens tone beneath.", shopLink:"#" },
      { country:"Morocco", flag:"🇲🇦", product:"Hammam Steam + Kessa Exfoliation", heroIngredient:"Beldi Olive Soap & Steam",
        ritual:"Full hammam ritual: steam, beldi soap and kessa mitt. The physical removal of the dead skin layer in one session produces immediately visible, dramatic luminosity.", shopLink:"#" },
      { country:"Brazil", flag:"🇧🇷", product:"Buriti Oil & Vitamin C Serum", heroIngredient:"Beta-Carotene & Ascorbic Acid",
        ritual:"Vitamin C serum applied first, buriti oil pressed over it to seal. Amazon's richest beta-carotene source combined with topical Vitamin C — the two brightest ingredients on earth.", shopLink:"#" },
    ]
  },
  oiliness: {
    label: "Oiliness & Large Pores", icon: "💦",
    description: "Excess sebum, shine & visible pores",
    intro: "The world's most effective oil-control traditions — all based on the same principle: work with sebum, not against it.",
    countries: [
      { country:"France", flag:"🇫🇷", product:"Micellar Water Cleansing Only", heroIngredient:"Micelles in Purified Water",
        ritual:"Micellar water as the only cleansing step — never a foaming cleanser. The French principle: over-cleansing triggers more sebum production, not less. Remove oil gently to produce less.", shopLink:"#" },
      { country:"Morocco", flag:"🇲🇦", product:"Rhassoul Clay Mask", heroIngredient:"Smectite Clay Minerals",
        ritual:"Rhassoul clay mask applied to oily zones twice weekly. Absorbs 70% more oil than kaolin clay while reducing pore appearance without disrupting the skin's microbiome.", shopLink:"#" },
      { country:"South Korea", flag:"🇰🇷", product:"BHA Exfoliant + Cushion Foundation", heroIngredient:"Salicylic Acid (BHA)",
        ritual:"BHA exfoliant applied to congested pores twice weekly, followed by a cushion foundation that controls shine without clogging. Korea's two-step approach to oily, pore-prone skin.", shopLink:"#" },
      { country:"Japan", flag:"🇯🇵", product:"Lightweight Essence + Blotting Paper", heroIngredient:"Fermented Actives & Rice Paper",
        ritual:"Multiple thin layers of lightweight Japanese lotion hydrate without adding oil. Japanese blotting papers — the world's finest — absorb shine throughout the day without disturbing makeup.", shopLink:"#" },
      { country:"India", flag:"🇮🇳", product:"Multani Mitti Clay Mask", heroIngredient:"Fuller's Earth (Multani Mitti)",
        ritual:"Fuller's earth mixed with rosewater applied weekly to oily T-zone. India's most powerful natural clay — used in Ayurveda for centuries to purify and mattify without stripping.", shopLink:"#" },
    ]
  },
  darkcircles: {
    label: "Dark Circles & Puffiness", icon: "👁",
    description: "Under-eye shadows, bags & puffiness",
    intro: "From Japan's lymphatic gua sha to Sweden's cold plunge — the world's most effective eye treatments address the circulation and pigmentation driving shadows and bags.",
    countries: [
      { country:"Japan", flag:"🇯🇵", product:"Fermented Eye Essence + Jade Roller", heroIngredient:"Galactomyces & Cold Jade",
        ritual:"Fermented eye essence patted — never rubbed — under the eyes, followed by a refrigerated jade roller in outward strokes to stimulate lymphatic drainage. Japan's most delicate eye ritual.", shopLink:"#" },
      { country:"Egypt", flag:"🇪🇬", product:"Black Seed & Aloe Eye Treatment", heroIngredient:"Thymoquinone & Acemannan",
        ritual:"A drop of black seed oil mixed with aloe vera gel applied under the eyes overnight. Reduces the oxidative stress driving periorbital pigmentation while the aloe soothes puffiness.", shopLink:"#" },
      { country:"Sweden", flag:"🇸🇪", product:"Cold Compress & Sea Buckthorn Eye Oil", heroIngredient:"Cold Vasoconstriction & Omega-7",
        ritual:"Cold spoon or ice compress applied to under-eyes for five minutes to reduce puffiness through vasoconstriction, followed by one drop of sea buckthorn oil patted in to nourish the thin skin.", shopLink:"#" },
      { country:"India", flag:"🇮🇳", product:"Almond Oil Overnight Treatment", heroIngredient:"Vitamin E & Emollin",
        ritual:"A single drop of sweet almond oil patted under each eye before bed. Ayurveda's traditional treatment for dark circles — emollin compounds reduce the thinning of the periorbital skin that makes vessels show through.", shopLink:"#" },
      { country:"South Korea", flag:"🇰🇷", product:"Snail & Peptide Eye Cream", heroIngredient:"Snail Filtrate & Collagen Peptides",
        ritual:"Snail mucin eye cream patted around the entire orbital bone — not just under the eyes. Korea's comprehensive approach using allantoin to repair the delicate skin barrier around the eye.", shopLink:"#" },
    ]
  },
};

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&display=swap');
  *{box-sizing:border-box;margin:0;padding:0}
  body{background:#faf7f4}
  .ba-btn{font-family:'Cormorant Garamond',serif;cursor:pointer;transition:all 0.3s}
  .ba-btn:hover{opacity:0.75}
  .tab-btn{background:none;border:none;font-family:'Cormorant Garamond',serif;cursor:pointer;transition:all 0.3s;padding:10px 20px}
  .tab-btn:hover{opacity:0.7}
  .region-btn{background:none;border:none;cursor:pointer;font-family:'Cormorant Garamond',serif;transition:all 0.2s;padding:6px 14px;font-size:11px;letter-spacing:2px;text-transform:uppercase}
  .region-btn:hover{opacity:0.7}
  .country-card{background:#fff;border:1px solid rgba(196,168,130,0.2);transition:all 0.3s;cursor:pointer}
  .country-card:hover{border-color:#c4a882;box-shadow:0 8px 40px rgba(196,168,130,0.15);transform:translateY(-2px)}
  .concern-card{background:#fff;border:1px solid rgba(196,168,130,0.2);cursor:pointer;transition:all 0.3s;padding:20px}
  .concern-card:hover{border-color:#c4a882;box-shadow:0 4px 20px rgba(196,168,130,0.15)}
  .shop-link{color:#c4a882;font-family:'Cormorant Garamond',serif;font-size:11px;letter-spacing:3px;text-transform:uppercase;text-decoration:none;transition:opacity 0.2s;cursor:pointer}
  .shop-link:hover{opacity:0.6}
  .deep-toggle{background:none;border:none;cursor:pointer;width:100%;text-align:left;padding:10px 0;font-family:'Cormorant Garamond',serif;transition:all 0.2s}
  .deep-toggle:hover{opacity:0.7}
  .back-btn{background:none;border:none;cursor:pointer;font-family:'Cormorant Garamond',serif;color:#8b7355;font-size:11px;letter-spacing:3px;text-transform:uppercase;transition:opacity 0.2s;padding:0}
  .back-btn:hover{opacity:0.6}
  .land-btn{font-family:'Cormorant Garamond',serif;cursor:pointer;transition:all 0.3s;letter-spacing:6px;text-transform:uppercase;font-size:10px}
  .land-btn:hover{opacity:0.7;transform:translateY(-1px)}
  @keyframes fadeUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
  .ff{animation:fadeUp 0.8s ease forwards}
`;

function AtlasHeader({ onLogoClick }) {
  return (
    <div style={{borderBottom:"1px solid rgba(196,168,130,0.2)",padding:"16px 32px",display:"flex",alignItems:"center",justifyContent:"space-between",background:"#faf7f4",position:"sticky",top:0,zIndex:100}}>
      <button onClick={onLogoClick} style={{background:"none",border:"none",cursor:"pointer",display:"flex",alignItems:"center",gap:12}}>
        <span style={{fontFamily:"'Playfair Display',serif",fontSize:20,fontWeight:400,color:"#1C1008",letterSpacing:6,textTransform:"uppercase"}}>Beauty</span>
        <span style={{fontFamily:"'Playfair Display',serif",fontStyle:"italic",fontSize:20,fontWeight:400,color:"#c4a882",letterSpacing:4}}>Atlas</span>
      </button>
      <div style={{fontSize:8,letterSpacing:5,color:"rgba(196,168,130,0.6)",textTransform:"uppercase",fontFamily:"'Cormorant Garamond',serif"}}>A Global Beauty Compendium</div>
    </div>
  );
}

function DeepDiveSection({ title, content, icon }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{borderTop:"1px solid rgba(196,168,130,0.15)",marginTop:12}}>
      <button className="deep-toggle" onClick={() => setOpen(!open)}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
          <span style={{fontSize:9,letterSpacing:4,textTransform:"uppercase",color:"#8b7355"}}>{icon} {title}</span>
          <span style={{fontSize:14,color:"#c4a882",transition:"transform 0.3s",display:"inline-block",transform:open?"rotate(90deg)":"rotate(0deg)"}}>›</span>
        </div>
      </button>
      {open && (
        <div style={{padding:"8px 0 14px",fontFamily:"'Cormorant Garamond',serif",fontStyle:"italic",fontSize:15,color:"#5a4a38",lineHeight:1.75,fontWeight:300}}>
          {content}
        </div>
      )}
    </div>
  );
}

function ShopLink({ href, label = "Shop This Ritual →" }) {
  if (!href || href === "#") {
    return <span style={{color:"rgba(196,168,130,0.45)",fontFamily:"'Cormorant Garamond',serif",fontSize:10,letterSpacing:3,textTransform:"uppercase"}}>Shop link coming soon</span>;
  }
  return <a href={href} target="_blank" rel="noopener noreferrer" className="shop-link">{label}</a>;
}

function ProductCard({ tab, data, countryName, flag }) {
  const d = data[tab];
  if (!d) return null;
  return (
    <div style={{padding:"24px 0"}}>
      <div style={{marginBottom:6,fontSize:9,letterSpacing:4,color:"#8b7355",textTransform:"uppercase",fontFamily:"'Cormorant Garamond',serif"}}>{flag} {countryName}</div>
      <h3 style={{fontFamily:"'Playfair Display',serif",fontSize:20,fontWeight:400,color:"#1C1008",marginBottom:4}}>{d.product}</h3>
      <div style={{fontSize:10,letterSpacing:3,color:"#c4a882",textTransform:"uppercase",fontFamily:"'Cormorant Garamond',serif",marginBottom:12}}>{d.heroIngredient}</div>
      <p style={{fontFamily:"'Cormorant Garamond',serif",fontStyle:"italic",fontSize:15,color:"#8b7355",marginBottom:14,lineHeight:1.6}}>"{d.editorNote}"</p>
      <p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:15,color:"#5a4a38",lineHeight:1.75,marginBottom:16}}>{d.ritual}</p>
      <DeepDiveSection icon="📜" title="Origin Story" content={d.originStory} />
      <DeepDiveSection icon="📍" title="Village Spotlight" content={d.villageSpotlight} />
      <DeepDiveSection icon="🔬" title="The Science" content={d.theScience} />
      <DeepDiveSection icon="🌿" title="Ritual in Practice" content={d.ritualInPractice} />
      <div style={{marginTop:16,paddingTop:12,borderTop:"1px solid rgba(196,168,130,0.15)"}}>
        <ShopLink href={d.shopLink} />
      </div>
    </div>
  );
}

function ExploreScreen({ onBack }) {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [activeTab, setActiveTab] = useState("skincare");
  const [activeRegion, setActiveRegion] = useState("All");
  const regions = ["All","Asia","Europe","Americas","Africa","Oceania"];
  const filtered = activeRegion === "All" ? countryData : countryData.filter(c => c.region === activeRegion);

  return (
    <div style={{minHeight:"100vh",background:"#faf7f4"}}>
      <style>{css}</style>
      <AtlasHeader onLogoClick={onBack} />
      <div style={{maxWidth:1200,margin:"0 auto",padding:"32px 24px"}}>
        {selectedCountry ? (
          <div style={{maxWidth:720,margin:"0 auto"}}>
            <button className="back-btn" onClick={() => setSelectedCountry(null)} style={{marginBottom:24}}>← All Countries</button>
            <div style={{display:"flex",alignItems:"flex-start",gap:16,marginBottom:28}}>
              <span style={{fontSize:52}}>{selectedCountry.flag}</span>
              <div>
                <h1 style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(28px,5vw,44px)",fontWeight:400,color:"#1C1008",letterSpacing:4,textTransform:"uppercase"}}>{selectedCountry.name}</h1>
                <p style={{fontFamily:"'Cormorant Garamond',serif",fontStyle:"italic",fontSize:16,color:"#8b7355",marginTop:4,lineHeight:1.6}}>{selectedCountry.philosophy}</p>
              </div>
            </div>
            <div style={{display:"flex",gap:0,borderBottom:"1px solid rgba(196,168,130,0.25)",marginBottom:28,overflowX:"auto"}}>
              {beautyTabs.map(t => (
                <button key={t.id} className="tab-btn" onClick={() => setActiveTab(t.id)}
                  style={{color:activeTab===t.id?"#1C1008":"#8b7355",borderBottom:activeTab===t.id?"2px solid #c4a882":"2px solid transparent",fontSize:11,letterSpacing:3,whiteSpace:"nowrap"}}>
                  {t.icon} {t.label}
                </button>
              ))}
            </div>
            <ProductCard tab={activeTab} data={selectedCountry} countryName={selectedCountry.name} flag={selectedCountry.flag} />
          </div>
        ) : (
          <>
            <div style={{marginBottom:32,textAlign:"center"}}>
              <h1 style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(24px,4vw,38px)",fontWeight:400,color:"#1C1008",letterSpacing:8,textTransform:"uppercase",marginBottom:8}}>Explore the Atlas</h1>
              <p style={{fontFamily:"'Cormorant Garamond',serif",fontStyle:"italic",fontSize:16,color:"#8b7355"}}>Twenty-one countries, four beauty categories, centuries of ritual</p>
            </div>
            <div style={{display:"flex",gap:8,justifyContent:"center",flexWrap:"wrap",marginBottom:32}}>
              {regions.map(r => (
                <button key={r} className="region-btn" onClick={() => setActiveRegion(r)}
                  style={{color:activeRegion===r?"#c4a882":"#8b7355",borderBottom:activeRegion===r?"1px solid #c4a882":"1px solid transparent"}}>
                  {r}
                </button>
              ))}
            </div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(280px,1fr))",gap:24}}>
              {filtered.map(country => (
                <div key={country.name} className="country-card" onClick={() => { setSelectedCountry(country); setActiveTab("skincare"); }} style={{padding:"24px"}}>
                  <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:14}}>
                    <span style={{fontSize:32}}>{country.flag}</span>
                    <div>
                      <div style={{fontFamily:"'Playfair Display',serif",fontSize:18,fontWeight:400,color:"#1C1008",letterSpacing:2}}>{country.name}</div>
                      <div style={{fontSize:9,letterSpacing:3,color:"#c4a882",textTransform:"uppercase",fontFamily:"'Cormorant Garamond',serif"}}>{country.region}</div>
                    </div>
                  </div>
                  <p style={{fontFamily:"'Cormorant Garamond',serif",fontStyle:"italic",fontSize:14,color:"#8b7355",lineHeight:1.6,marginBottom:16}}>{country.philosophy}</p>
                  <div style={{display:"flex",flexWrap:"wrap",gap:8}}>
                    {beautyTabs.map(t => (
                      <span key={t.id} style={{fontSize:9,letterSpacing:2,textTransform:"uppercase",color:"rgba(139,115,85,0.7)",fontFamily:"'Cormorant Garamond',serif",background:"rgba(196,168,130,0.1)",padding:"4px 8px",borderRadius:2}}>
                        {t.icon} {t.label}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function SkinConcernScreen({ onBack }) {
  const [selected, setSelected] = useState(null);
  const data = selected ? concernData[selected.id] : null;

  return (
    <div style={{minHeight:"100vh",background:"#faf7f4"}}>
      <style>{css}</style>
      <AtlasHeader onLogoClick={onBack} />
      <div style={{maxWidth:900,margin:"0 auto",padding:"32px 24px"}}>
        {selected && data ? (
          <>
            <button className="back-btn" onClick={() => setSelected(null)} style={{marginBottom:28}}>← All Concerns</button>
            <div style={{marginBottom:32}}>
              <div style={{fontSize:36,marginBottom:12}}>{selected.icon}</div>
              <h1 style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(24px,4vw,36px)",fontWeight:400,color:"#1C1008",letterSpacing:4,textTransform:"uppercase",marginBottom:8}}>{data.label}</h1>
              <p style={{fontFamily:"'Cormorant Garamond',serif",fontStyle:"italic",fontSize:16,color:"#8b7355",lineHeight:1.6,maxWidth:600}}>{data.intro}</p>
            </div>
            <div style={{display:"flex",flexDirection:"column",gap:24}}>
              {data.countries.map((c, i) => (
                <div key={i} style={{background:"#fff",border:"1px solid rgba(196,168,130,0.2)",padding:"28px"}}>
                  <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:16}}>
                    <span style={{fontSize:28}}>{c.flag}</span>
                    <div>
                      <div style={{fontFamily:"'Playfair Display',serif",fontSize:16,color:"#1C1008",letterSpacing:2}}>{c.country}</div>
                      <div style={{fontSize:9,letterSpacing:3,color:"#c4a882",textTransform:"uppercase",fontFamily:"'Cormorant Garamond',serif"}}>{c.heroIngredient}</div>
                    </div>
                    <div style={{marginLeft:"auto",fontFamily:"'Playfair Display',serif",fontStyle:"italic",fontSize:22,color:"rgba(196,168,130,0.4)"}}>#{i+1}</div>
                  </div>
                  <h3 style={{fontFamily:"'Playfair Display',serif",fontSize:18,fontWeight:400,color:"#1C1008",marginBottom:12}}>{c.product}</h3>
                  <p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:15,color:"#5a4a38",lineHeight:1.75,marginBottom:16}}>{c.ritual}</p>
                  <ShopLink href={c.shopLink} />
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            <div style={{textAlign:"center",marginBottom:36}}>
              <h1 style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(24px,4vw,38px)",fontWeight:400,color:"#1C1008",letterSpacing:8,textTransform:"uppercase",marginBottom:8}}>My Skin Concern</h1>
              <p style={{fontFamily:"'Cormorant Garamond',serif",fontStyle:"italic",fontSize:16,color:"#8b7355"}}>The world's most effective rituals, curated for your specific needs</p>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(240px,1fr))",gap:16}}>
              {skinConcerns.map(c => (
                <div key={c.id} className="concern-card" onClick={() => setSelected(c)}>
                  <div style={{fontSize:28,marginBottom:10}}>{c.icon}</div>
                  <div style={{fontFamily:"'Playfair Display',serif",fontSize:17,fontWeight:400,color:"#1C1008",marginBottom:6,letterSpacing:1}}>{c.label}</div>
                  <div style={{fontFamily:"'Cormorant Garamond',serif",fontStyle:"italic",fontSize:14,color:"#8b7355",lineHeight:1.5}}>{c.description}</div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function LandingScreen({ onEnter }) {
  const floatingFlags = ["🇰🇷","🇫🇷","🇯🇵","🇧🇷","🇮🇳","🇲🇦","🇺🇸","🇸🇪","🇳🇬","🇦🇺","🇪🇬","🇮🇹","🇹🇭","🇨🇴","🇪🇹","🇬🇷","🇨🇳","🇬🇭","🇦🇷"];
  return (
    <div style={{minHeight:"100vh",background:"#1C1008",display:"flex",alignItems:"center",justifyContent:"center",position:"relative",overflow:"hidden"}}>
      <style>{css}</style>
      <style>{`
        @keyframes floatFlag{0%,100%{transform:translateY(0) rotate(0deg)}50%{transform:translateY(-12px) rotate(2deg)}}
        .flag-float{animation:floatFlag var(--dur,6s) ease-in-out infinite;animation-delay:var(--delay,0s)}
      `}</style>
      <div style={{position:"absolute",inset:0,pointerEvents:"none"}}>
        {floatingFlags.map((flag, i) => (
          <div key={i} className="flag-float"
            style={{position:"absolute",fontSize:28,opacity:0.12,
              left:`${5 + (i * 23) % 90}%`,top:`${10 + (i * 17) % 80}%`,
              "--dur":`${5 + (i % 4)}s`,"--delay":`${(i * 0.4) % 3}s`}}>
            {flag}
          </div>
        ))}
      </div>
      <div style={{position:"absolute",inset:0,background:"radial-gradient(ellipse at 50% 50%, rgba(196,168,130,0.06) 0%, transparent 70%)",pointerEvents:"none"}} />
      <div className="ff" style={{textAlign:"center",position:"relative",zIndex:10,padding:"24px"}}>
        <div style={{fontSize:9,letterSpacing:8,color:"rgba(196,168,130,0.55)",textTransform:"uppercase",fontFamily:"'Cormorant Garamond',serif",marginBottom:24}}>A Global Beauty Compendium</div>
        <div style={{marginBottom:6}}>
          <h1 style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(40px,10vw,92px)",fontWeight:400,color:"#f5f0eb",letterSpacing:14,textTransform:"uppercase",lineHeight:1,display:"inline"}}>Beauty</h1>
        </div>
        <div style={{marginBottom:32}}>
          <h1 style={{fontFamily:"'Playfair Display',serif",fontStyle:"italic",fontSize:"clamp(40px,10vw,92px)",fontWeight:400,color:"#c4a882",letterSpacing:10,textTransform:"uppercase",lineHeight:1,display:"inline"}}>Atlas</h1>
        </div>
        <div style={{width:80,height:1,background:"rgba(196,168,130,0.35)",margin:"0 auto 28px"}} />
        <p style={{fontFamily:"'Cormorant Garamond',serif",fontStyle:"italic",fontSize:"clamp(15px,2.5vw,19px)",color:"rgba(245,240,235,0.55)",maxWidth:500,margin:"0 auto 44px",lineHeight:1.8,fontWeight:300}}>
          Twenty-one countries. Eighty-four rituals. Centuries of origin stories, village secrets, and the science behind why it all works.
        </p>
        <div style={{display:"flex",gap:16,justifyContent:"center",flexWrap:"wrap",marginBottom:52}}>
          <button className="land-btn" onClick={() => onEnter("explore")}
            style={{padding:"17px 42px",border:"1px solid #c4a882",background:"transparent",color:"#c4a882"}}>
            Explore by Country
          </button>
          <button className="land-btn" onClick={() => onEnter("concern")}
            style={{padding:"17px 42px",border:"1px solid rgba(245,240,235,0.25)",background:"transparent",color:"rgba(245,240,235,0.6)"}}>
            My Skin Concern
          </button>
        </div>
        <div style={{display:"flex",gap:36,justifyContent:"center",flexWrap:"wrap"}}>
          {[["21","Countries"],["4","Categories"],["8","Concerns"],["Deep","Research"]].map(([n,l]) => (
            <div key={l} style={{textAlign:"center"}}>
              <div style={{fontFamily:"'Playfair Display',serif",fontSize:22,color:"#c4a882",marginBottom:4}}>{n}</div>
              <div style={{fontSize:8,letterSpacing:4,color:"rgba(196,168,130,0.85)",textTransform:"uppercase",fontFamily:"'Cormorant Garamond',serif"}}>{l}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function PrivacyPolicy({ onBack }) {
  return (
    <div style={{minHeight:"100vh",background:"#faf7f4"}}>
      <style>{css}</style>
      <AtlasHeader onLogoClick={onBack} />
      <div style={{maxWidth:720,margin:"0 auto",padding:"48px 24px"}}>
        <button className="back-btn" onClick={onBack} style={{marginBottom:32}}>← Back</button>
        <h1 style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(28px,5vw,42px)",fontWeight:400,color:"#1C1008",letterSpacing:4,textTransform:"uppercase",marginBottom:8}}>Privacy Policy</h1>
        <p style={{fontFamily:"'Cormorant Garamond',serif",fontStyle:"italic",fontSize:15,color:"#8b7355",marginBottom:40}}>Last updated: {new Date().toLocaleDateString('en-US', {year:'numeric',month:'long',day:'numeric'})}</p>

        {[
          ["Who We Are", "Beauty Atlas (beautyatlas.com) is an independent beauty education and product discovery platform. We curate global beauty rituals, ingredients and traditions to help you find products suited to your skin and hair."],
          ["Information We Collect", "Beauty Atlas does not collect personal information beyond standard anonymous analytics data (pages visited, time on site) used solely to improve the site experience. We do not collect your name, email address, or payment information."],
          ["Affiliate Links & Third Party Sites", "Beauty Atlas participates in affiliate marketing programs including the Amazon Associates Program and other affiliate networks. This means we may earn a small commission when you click a product link and make a purchase — at no additional cost to you. We only recommend products we genuinely believe in. When you click an affiliate link, you will be directed to a third-party website. We are not responsible for the privacy practices of those websites and encourage you to read their privacy policies."],
          ["Amazon Associates Disclosure", "Beauty Atlas is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com."],
          ["Cookies", "Beauty Atlas may use standard cookies to remember your preferences and improve your browsing experience. You can disable cookies in your browser settings at any time."],
          ["Children's Privacy", "Beauty Atlas is not directed at children under the age of 13. We do not knowingly collect information from children."],
          ["Changes to This Policy", "We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated date."],
          ["Contact", "If you have any questions about this Privacy Policy, please contact us at hello@beautyatlas.com."],
        ].map(([title, body]) => (
          <div key={title} style={{marginBottom:32}}>
            <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:18,fontWeight:400,color:"#1C1008",letterSpacing:2,marginBottom:10}}>{title}</h2>
            <p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:16,color:"#5a4a38",lineHeight:1.8}}>{body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function TermsOfUse({ onBack }) {
  return (
    <div style={{minHeight:"100vh",background:"#faf7f4"}}>
      <style>{css}</style>
      <AtlasHeader onLogoClick={onBack} />
      <div style={{maxWidth:720,margin:"0 auto",padding:"48px 24px"}}>
        <button className="back-btn" onClick={onBack} style={{marginBottom:32}}>← Back</button>
        <h1 style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(28px,5vw,42px)",fontWeight:400,color:"#1C1008",letterSpacing:4,textTransform:"uppercase",marginBottom:8}}>Terms of Use</h1>
        <p style={{fontFamily:"'Cormorant Garamond',serif",fontStyle:"italic",fontSize:15,color:"#8b7355",marginBottom:40}}>Last updated: {new Date().toLocaleDateString('en-US', {year:'numeric',month:'long',day:'numeric'})}</p>

        {[
          ["Acceptance of Terms", "By accessing and using Beauty Atlas, you accept and agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use this site."],
          ["Informational Purposes Only", "All content on Beauty Atlas — including descriptions of beauty rituals, skincare ingredients, haircare practices and product recommendations — is provided for informational and educational purposes only. Nothing on this site constitutes medical, dermatological or health advice. Always consult a qualified healthcare professional before making changes to your skincare or health routine, particularly if you have a skin condition, allergy or medical concern."],
          ["Affiliate Relationships", "Beauty Atlas participates in affiliate marketing programs. Some links on this site are affiliate links, meaning we may earn a commission if you click through and make a purchase. This does not affect our editorial independence — we only feature products and brands we genuinely believe serve our readers."],
          ["Intellectual Property", "All original content on Beauty Atlas — including text, design and editorial writing — is the intellectual property of Beauty Atlas. You may not reproduce, distribute or republish our content without written permission."],
          ["Third Party Links", "Beauty Atlas contains links to third-party websites. We are not responsible for the content, accuracy or practices of those sites. The inclusion of any link does not imply endorsement."],
          ["Disclaimer of Warranties", "Beauty Atlas is provided 'as is' without warranties of any kind. We make no guarantees that product recommendations will work for your specific skin type or condition. Individual results will always vary."],
          ["Limitation of Liability", "Beauty Atlas and its owners shall not be liable for any direct, indirect, incidental or consequential damages resulting from your use of this site or any products purchased through our affiliate links."],
          ["Changes to Terms", "We reserve the right to update these Terms of Use at any time. Continued use of the site following any changes constitutes acceptance of the revised terms."],
          ["Contact", "For any questions regarding these Terms of Use, please contact us at hello@beautyatlas.com."],
        ].map(([title, body]) => (
          <div key={title} style={{marginBottom:32}}>
            <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:18,fontWeight:400,color:"#1C1008",letterSpacing:2,marginBottom:10}}>{title}</h2>
            <p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:16,color:"#5a4a38",lineHeight:1.8}}>{body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Footer({ onNav }) {
  return (
    <div style={{borderTop:"1px solid rgba(196,168,130,0.2)",padding:"32px 24px",textAlign:"center",background:"#faf7f4"}}>
      <p style={{fontFamily:"'Cormorant Garamond',serif",fontStyle:"italic",fontSize:13,color:"#8b7355",marginBottom:16,lineHeight:1.7,maxWidth:600,margin:"0 auto 16px"}}>
        Content on Beauty Atlas is for informational purposes only and does not constitute medical advice. Some links are affiliate links — we may earn a small commission at no cost to you.
      </p>
      <div style={{display:"flex",gap:24,justifyContent:"center",flexWrap:"wrap"}}>
        {[["Privacy Policy","privacy"],["Terms of Use","terms"]].map(([label,page]) => (
          <button key={page} onClick={() => onNav(page)}
            style={{background:"none",border:"none",cursor:"pointer",fontFamily:"'Cormorant Garamond',serif",fontSize:12,letterSpacing:3,textTransform:"uppercase",color:"#8b7355",textDecoration:"underline"}}>
            {label}
          </button>
        ))}
      </div>
      <p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:11,color:"rgba(139,115,85,0.5)",marginTop:16,letterSpacing:2}}>
        © {new Date().getFullYear()} BEAUTY ATLAS — A GLOBAL BEAUTY COMPENDIUM
      </p>
    </div>
  );
}

export default function BeautyAtlas() {
  const [screen, setScreen] = useState("landing");
  if (screen === "privacy") return <PrivacyPolicy onBack={() => setScreen("landing")} />;
  if (screen === "terms") return <TermsOfUse onBack={() => setScreen("landing")} />;
  if (screen === "explore") return (
    <div style={{minHeight:"100vh",display:"flex",flexDirection:"column"}}>
      <ExploreScreen onBack={() => setScreen("landing")} />
      <Footer onNav={setScreen} />
    </div>
  );
  if (screen === "concern") return (
    <div style={{minHeight:"100vh",display:"flex",flexDirection:"column"}}>
      <SkinConcernScreen onBack={() => setScreen("landing")} />
      <Footer onNav={setScreen} />
    </div>
  );
  return (
    <div style={{minHeight:"100vh",display:"flex",flexDirection:"column"}}>
      <LandingScreen onEnter={setScreen} />
      <Footer onNav={setScreen} />
    </div>
  );
}
