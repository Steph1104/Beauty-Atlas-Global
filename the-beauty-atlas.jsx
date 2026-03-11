import { useState } from "react";

const countries = [
  { name: "South Korea", flag: "🇰🇷", region: "Asia" },
  { name: "France", flag: "🇫🇷", region: "Europe" },
  { name: "Japan", flag: "🇯🇵", region: "Asia" },
  { name: "Brazil", flag: "🇧🇷", region: "Americas" },
  { name: "India", flag: "🇮🇳", region: "Asia" },
  { name: "Morocco", flag: "🇲🇦", region: "Africa" },
  { name: "USA", flag: "🇺🇸", region: "Americas" },
  { name: "Sweden", flag: "🇸🇪", region: "Europe" },
  { name: "Nigeria", flag: "🇳🇬", region: "Africa" },
  { name: "Mexico", flag: "🇲🇽", region: "Americas" },
  { name: "Australia", flag: "🇦🇺", region: "Oceania" },
  { name: "Egypt", flag: "🇪🇬", region: "Africa" },
  { name: "Italy", flag: "🇮🇹", region: "Europe" },
  { name: "Thailand", flag: "🇹🇭", region: "Asia" },
  { name: "Colombia", flag: "🇨🇴", region: "Americas" },
  { name: "Ethiopia", flag: "🇪🇹", region: "Africa" },
  { name: "Greece", flag: "🇬🇷", region: "Europe" },
  { name: "China", flag: "🇨🇳", region: "Asia" },
  { name: "Ghana", flag: "🇬🇭", region: "Africa" },
  { name: "Argentina", flag: "🇦🇷", region: "Americas" },
];

const categories = [
  { id: "all", label: "Full Edit", icon: "✦" },
  { id: "skincare", label: "Skincare", icon: "✨" },
  { id: "haircare", label: "Haircare", icon: "💆" },
  { id: "makeup", label: "Makeup", icon: "💄" },
  { id: "bodycare", label: "Body & Wellness", icon: "🌿" },
];

const regions = ["All", "Asia", "Europe", "Americas", "Africa", "Oceania"];

export default function TheBeautyAtlas() {
  const [selected, setSelected] = useState(null);
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeRegion, setActiveRegion] = useState("All");
  const [results, setResults] = useState({});
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("skincare");

  const filtered = activeRegion === "All" ? countries : countries.filter(c => c.region === activeRegion);

  async function fetchCountryBeauty(country) {
    setSelected(country);
    setLoading(true);

    const cacheKey = `${country.name}-${activeCategory}`;
    if (results[cacheKey]) { setLoading(false); return; }

    const categoryPrompt = activeCategory === "all"
      ? "Give me the #1 hero product in each of these 4 categories: skincare, haircare, makeup, bodycare/wellness."
      : `Give me the #1 hero ${activeCategory} product.`;

    try {
      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1500,
          messages: [{
            role: "user",
            content: `You are a world-renowned beauty editor. ${categoryPrompt} from ${country.name}.

Respond ONLY with a valid JSON object (no markdown, no backticks, no explanation) with this structure:
{
  "country": "${country.name}",
  "beautyPhilosophy": "One elegant sentence describing this country's overall beauty philosophy",
  "skincare": {
    "product": "product name",
    "heroIngredient": "star ingredient",
    "ritual": "2 sentences on the cultural ritual or tradition",
    "editorNote": "1 punchy editorial sentence why this is iconic"
  },
  "haircare": {
    "product": "product name",
    "heroIngredient": "star ingredient",
    "ritual": "2 sentences on the cultural ritual or tradition",
    "editorNote": "1 punchy editorial sentence why this is iconic"
  },
  "makeup": {
    "product": "product name or technique",
    "heroIngredient": "star ingredient or finish",
    "ritual": "2 sentences on the look or technique",
    "editorNote": "1 punchy editorial sentence why this is iconic"
  },
  "bodycare": {
    "product": "product name",
    "heroIngredient": "star ingredient",
    "ritual": "2 sentences on the cultural ritual or tradition",
    "editorNote": "1 punchy editorial sentence why this is iconic"
  }
}`
          }]
        })
      });
      const data = await response.json();
      const text = data.content.map(i => i.text || "").join("");
      const clean = text.replace(/```json|```/g, "").trim();
      const parsed = JSON.parse(clean);
      setResults(prev => ({ ...prev, [cacheKey]: parsed }));
      setActiveTab("skincare");
    } catch (e) {
      setResults(prev => ({ ...prev, [cacheKey]: { error: true } }));
    }
    setLoading(false);
  }

  const cacheKey = selected ? `${selected.name}-${activeCategory}` : null;
  const currentResult = cacheKey ? results[cacheKey] : null;

  const tabs = [
    { id: "skincare", label: "Skincare", icon: "✨" },
    { id: "haircare", label: "Haircare", icon: "💆" },
    { id: "makeup", label: "Makeup", icon: "💄" },
    { id: "bodycare", label: "Body & Wellness", icon: "🌿" },
  ];

  return (
    <div style={{
      minHeight: "100vh",
      background: "#faf7f4",
      fontFamily: "'Didot', 'Bodoni MT', 'Playfair Display', Georgia, serif",
      color: "#1a1410",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400&family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300&display=swap');
        * { box-sizing: border-box; }
        .country-btn:hover { background: #f0ebe4 !important; border-color: #c4a882 !important; }
        .tab-btn:hover { color: #1a1410 !important; }
        @keyframes fadeIn { from { opacity:0; transform:translateY(12px); } to { opacity:1; transform:translateY(0); } }
        @keyframes shimmer { 0%,100% { opacity:0.4; } 50% { opacity:1; } }
        .fade-in { animation: fadeIn 0.6s ease forwards; }
        .shimmer { animation: shimmer 1.8s ease infinite; }
        ::-webkit-scrollbar { width: 4px; } 
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: #d4c4b0; border-radius: 2px; }
      `}</style>

      {/* Masthead */}
      <header style={{
        borderBottom: "1px solid #e8e0d6",
        padding: "0 40px",
        background: "#faf7f4",
        position: "sticky", top: 0, zIndex: 100,
      }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: 20, paddingBottom: 8 }}>
            <div style={{ fontSize: 10, letterSpacing: 4, color: "#b8a898", textTransform: "uppercase", fontFamily: "'Cormorant Garamond', serif" }}>
              Est. 2025
            </div>
            <div style={{ textAlign: "center" }}>
              <h1 style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "clamp(28px, 5vw, 48px)",
                fontWeight: 400,
                margin: 0,
                letterSpacing: 6,
                textTransform: "uppercase",
                color: "#1a1410"
              }}>
                Beauty Atlas
              </h1>
              <div style={{ fontSize: 9, letterSpacing: 5, color: "#b8a898", textTransform: "uppercase", marginTop: 4, fontFamily: "'Cormorant Garamond', serif" }}>
                The Global Beauty Edit
              </div>
            </div>
            <div style={{ fontSize: 10, letterSpacing: 4, color: "#b8a898", textTransform: "uppercase", fontFamily: "'Cormorant Garamond', serif" }}>
              Vol. I
            </div>
          </div>

          {/* Category Nav */}
          <nav style={{ display: "flex", justifyContent: "center", gap: 0, borderTop: "1px solid #e8e0d6", marginTop: 8 }}>
            {categories.map(cat => (
              <button key={cat.id} onClick={() => setActiveCategory(cat.id)} style={{
                padding: "12px 20px",
                background: "transparent",
                border: "none",
                borderBottom: activeCategory === cat.id ? "2px solid #1a1410" : "2px solid transparent",
                color: activeCategory === cat.id ? "#1a1410" : "#a09080",
                fontSize: 10,
                letterSpacing: 3,
                textTransform: "uppercase",
                cursor: "pointer",
                fontFamily: "'Cormorant Garamond', serif",
                transition: "all 0.2s",
                whiteSpace: "nowrap"
              }}>
                {cat.icon} {cat.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main style={{ maxWidth: 1100, margin: "0 auto", padding: "40px 20px" }}>

        {/* Hero Intro */}
        {!selected && (
          <div className="fade-in" style={{ textAlign: "center", marginBottom: 48, maxWidth: 560, margin: "0 auto 48px" }}>
            <p style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
              fontSize: "clamp(18px, 3vw, 26px)",
              fontWeight: 300,
              color: "#6a5a4a",
              lineHeight: 1.7,
              margin: "0 0 8px"
            }}>
              "Every culture holds a beauty secret the world deserves to know."
            </p>
            <div style={{ width: 40, height: 1, background: "#c4a882", margin: "16px auto" }} />
            <p style={{ fontSize: 12, letterSpacing: 3, color: "#b8a898", textTransform: "uppercase", fontFamily: "'Cormorant Garamond', serif" }}>
              Select a country to begin
            </p>
          </div>
        )}

        {/* Region Filter */}
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", justifyContent: "center", marginBottom: 28 }}>
          {regions.map(r => (
            <button key={r} onClick={() => setActiveRegion(r)} style={{
              padding: "5px 14px",
              borderRadius: 0,
              border: "1px solid",
              borderColor: activeRegion === r ? "#1a1410" : "#e0d8d0",
              background: activeRegion === r ? "#1a1410" : "transparent",
              color: activeRegion === r ? "#faf7f4" : "#a09080",
              fontSize: 9, letterSpacing: 3, textTransform: "uppercase",
              cursor: "pointer", transition: "all 0.2s",
              fontFamily: "'Cormorant Garamond', serif"
            }}>{r}</button>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: selected ? "280px 1fr" : "1fr", gap: 32, alignItems: "start" }}>

          {/* Country Grid */}
          <div>
            <div style={{
              display: "grid",
              gridTemplateColumns: selected ? "1fr 1fr" : "repeat(auto-fill, minmax(140px, 1fr))",
              gap: 8
            }}>
              {filtered.map(country => (
                <button
                  key={country.name}
                  className="country-btn"
                  onClick={() => fetchCountryBeauty(country)}
                  style={{
                    padding: selected ? "14px 10px" : "20px 12px",
                    border: "1px solid",
                    borderColor: selected?.name === country.name ? "#1a1410" : "#e8e0d6",
                    background: selected?.name === country.name ? "#1a1410" : "#fff",
                    cursor: "pointer",
                    transition: "all 0.25s",
                    textAlign: "center",
                    display: "flex", flexDirection: "column", alignItems: "center",
                    gap: selected ? 4 : 8
                  }}
                >
                  <span style={{ fontSize: selected ? 24 : 32 }}>{country.flag}</span>
                  <span style={{
                    fontSize: 9, letterSpacing: 2, textTransform: "uppercase",
                    color: selected?.name === country.name ? "#faf7f4" : "#6a5a4a",
                    fontFamily: "'Cormorant Garamond', serif"
                  }}>
                    {country.name}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Result Panel */}
          {selected && (
            <div>
              {loading && (
                <div style={{ padding: "80px 40px", textAlign: "center", border: "1px solid #e8e0d6", background: "#fff" }}>
                  <div className="shimmer" style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 32, color: "#c4a882", marginBottom: 16
                  }}>✦</div>
                  <p style={{ fontSize: 10, letterSpacing: 4, color: "#b8a898", textTransform: "uppercase", fontFamily: "'Cormorant Garamond', serif" }}>
                    Curating {selected.name}'s beauty edit...
                  </p>
                </div>
              )}

              {currentResult && !loading && (
                <div className="fade-in" style={{ border: "1px solid #e8e0d6", background: "#fff" }}>

                  {/* Country Header */}
                  <div style={{
                    padding: "32px 40px",
                    borderBottom: "1px solid #e8e0d6",
                    background: "linear-gradient(135deg, #faf7f4 0%, #f5efe8 100%)",
                    display: "flex", alignItems: "center", gap: 20
                  }}>
                    <span style={{ fontSize: 52 }}>{selected.flag}</span>
                    <div>
                      <div style={{ fontSize: 9, letterSpacing: 4, color: "#b8a898", textTransform: "uppercase", fontFamily: "'Cormorant Garamond', serif", marginBottom: 6 }}>
                        The Beauty Edit
                      </div>
                      <h2 style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: "clamp(24px, 4vw, 38px)",
                        fontWeight: 400, margin: "0 0 10px", color: "#1a1410"
                      }}>
                        {selected.name}
                      </h2>
                      {currentResult.beautyPhilosophy && (
                        <p style={{
                          fontFamily: "'Cormorant Garamond', serif",
                          fontStyle: "italic", fontSize: 15, color: "#8a7a6a",
                          margin: 0, lineHeight: 1.6
                        }}>
                          {currentResult.beautyPhilosophy}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Category Tabs */}
                  <div style={{ display: "flex", borderBottom: "1px solid #e8e0d6" }}>
                    {tabs.map(tab => (
                      <button key={tab.id} className="tab-btn" onClick={() => setActiveTab(tab.id)} style={{
                        flex: 1, padding: "14px 8px",
                        background: "transparent", border: "none",
                        borderBottom: activeTab === tab.id ? "2px solid #1a1410" : "2px solid transparent",
                        color: activeTab === tab.id ? "#1a1410" : "#b8a898",
                        fontSize: 9, letterSpacing: 2, textTransform: "uppercase",
                        cursor: "pointer", transition: "all 0.2s",
                        fontFamily: "'Cormorant Garamond', serif"
                      }}>
                        {tab.icon} {tab.label}
                      </button>
                    ))}
                  </div>

                  {/* Tab Content */}
                  {currentResult[activeTab] && (
                    <div className="fade-in" style={{ padding: "36px 40px" }}>
                      <div style={{ marginBottom: 24 }}>
                        <div style={{ fontSize: 9, letterSpacing: 4, color: "#b8a898", textTransform: "uppercase", fontFamily: "'Cormorant Garamond', serif", marginBottom: 8 }}>
                          Hero Product
                        </div>
                        <h3 style={{
                          fontFamily: "'Playfair Display', serif",
                          fontSize: "clamp(20px, 3vw, 30px)",
                          fontWeight: 400, margin: "0 0 6px", color: "#1a1410"
                        }}>
                          {currentResult[activeTab].product}
                        </h3>
                        <p style={{
                          fontFamily: "'Cormorant Garamond', serif",
                          fontStyle: "italic", fontSize: 15, color: "#c4a882",
                          margin: 0
                        }}>
                          "{currentResult[activeTab].editorNote}"
                        </p>
                      </div>

                      <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "8px 16px", background: "#faf7f4", border: "1px solid #e8e0d6", marginBottom: 28 }}>
                        <span style={{ fontSize: 9, letterSpacing: 3, color: "#b8a898", textTransform: "uppercase", fontFamily: "'Cormorant Garamond', serif" }}>Hero Ingredient</span>
                        <span style={{ width: 1, height: 12, background: "#e0d8d0" }} />
                        <span style={{ fontSize: 12, color: "#6a5a4a", fontFamily: "'Cormorant Garamond', serif" }}>
                          🌿 {currentResult[activeTab].heroIngredient}
                        </span>
                      </div>

                      <div style={{ borderLeft: "2px solid #e8e0d6", paddingLeft: 20 }}>
                        <div style={{ fontSize: 9, letterSpacing: 4, color: "#b8a898", textTransform: "uppercase", fontFamily: "'Cormorant Garamond', serif", marginBottom: 10 }}>
                          The Ritual
                        </div>
                        <p style={{
                          fontFamily: "'Cormorant Garamond', serif",
                          fontSize: 16, lineHeight: 1.85, color: "#4a3a2a", margin: 0, fontWeight: 300
                        }}>
                          {currentResult[activeTab].ritual}
                        </p>
                      </div>

                      {/* Tab navigation hint */}
                      <div style={{ marginTop: 32, paddingTop: 24, borderTop: "1px solid #f0e8e0", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <span style={{ fontSize: 9, letterSpacing: 3, color: "#c4b8ac", textTransform: "uppercase", fontFamily: "'Cormorant Garamond', serif" }}>
                      Beauty Atlas · {tabs.find(t => t.id === activeTab)?.label}
                        </span>
                        <div style={{ display: "flex", gap: 4 }}>
                          {tabs.map(t => (
                            <button key={t.id} onClick={() => setActiveTab(t.id)} style={{
                              width: 6, height: 6,
                              borderRadius: "50%",
                              border: "none",
                              background: activeTab === t.id ? "#1a1410" : "#e0d8d0",
                              cursor: "pointer", padding: 0, transition: "all 0.2s"
                            }} />
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {currentResult.error && (
                    <div style={{ padding: 40, textAlign: "center", color: "#b8a898", fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}>
                      Could not retrieve this edit. Please try again.
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid #e8e0d6", padding: "24px 40px", marginTop: 60, textAlign: "center" }}>
        <p style={{ fontSize: 9, letterSpacing: 5, color: "#c4b8ac", textTransform: "uppercase", margin: 0, fontFamily: "'Cormorant Garamond', serif" }}>
          Beauty Atlas · The Global Beauty Edit · All Rights Reserved
        </p>
      </footer>
    </div>
  );
}
