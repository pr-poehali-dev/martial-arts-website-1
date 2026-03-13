import { useParams, Link } from "react-router-dom";
import { martialArts } from "@/data/martialArts";
import Icon from "@/components/ui/icon";

export default function MartialArtPage() {
  const { id } = useParams<{ id: string }>();
  const art = martialArts.find((a) => a.id === id);

  if (!art) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-muted-foreground text-xl mb-4">Страница не найдена</p>
          <Link to="/" className="text-fire hover:underline">← На главную</Link>
        </div>
      </div>
    );
  }

  const currentIndex = martialArts.findIndex((a) => a.id === id);
  const prevArt = currentIndex > 0 ? martialArts[currentIndex - 1] : null;
  const nextArt = currentIndex < martialArts.length - 1 ? martialArts[currentIndex + 1] : null;

  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--dark)" }}>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b" style={{ backgroundColor: "rgba(10,10,10,0.95)", borderColor: "var(--fire)", backdropFilter: "blur(10px)" }}>
        <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-sm hover:text-fire transition-colors" style={{ color: "#999" }}>
            <Icon name="ArrowLeft" size={16} />
            <span style={{ fontFamily: "Oswald, sans-serif", letterSpacing: "0.1em" }}>БОЕВЫЕ ИСКУССТВА</span>
          </Link>
          <span className="text-fire font-bold text-lg" style={{ fontFamily: "Oswald, sans-serif" }}>
            {art.emoji} {art.nameEn}
          </span>
        </div>
      </nav>

      {/* Hero */}
      <section
        className="pt-14 relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, #0A0A0A 0%, rgba(${art.color === "#FF5500" ? "255,85,0" : art.color === "#FFB800" ? "255,184,0" : art.color === "#FF2200" ? "255,34,0" : art.color === "#FF6600" ? "255,102,0" : art.color === "#0099FF" ? "0,153,255" : "0,204,102"},0.15) 50%, #0A0A0A 100%)`,
          minHeight: "320px",
        }}
      >
        <div className="max-w-6xl mx-auto px-4 py-16 flex items-end gap-8 relative z-10">
          <div className="text-8xl select-none" style={{ filter: "drop-shadow(0 0 30px rgba(255,85,0,0.5))" }}>
            {art.emoji}
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest mb-2" style={{ color: art.color }}>
              {art.origin}
            </p>
            <h1
              className="text-6xl md:text-8xl font-black uppercase leading-none mb-4"
              style={{
                fontFamily: "Oswald, sans-serif",
                color: "white",
                textShadow: `0 0 60px ${art.color}40`,
              }}
            >
              {art.nameEn}
            </h1>
            <p className="text-xl italic" style={{ color: "#aaa", fontFamily: "IBM Plex Sans, sans-serif" }}>
              «{art.tagline}»
            </p>
          </div>
        </div>

        {/* Decorative line */}
        <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: `linear-gradient(to right, transparent, ${art.color}, transparent)` }} />
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Main content */}
          <div className="lg:col-span-2 space-y-10">

            {/* History */}
            <section>
              <h2 className="text-3xl font-bold uppercase mb-6 flex items-center gap-3" style={{ fontFamily: "Oswald, sans-serif", color: "white" }}>
                <span className="w-1 h-8 rounded" style={{ backgroundColor: art.color, display: "inline-block", flexShrink: 0 }} />
                История создания
              </h2>
              <div className="space-y-4">
                {art.history.map((paragraph, i) => (
                  <p key={i} className="leading-relaxed" style={{ color: "#ccc", fontFamily: "IBM Plex Sans, sans-serif", fontSize: "1rem" }}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>

            {/* Rules */}
            <section>
              <h2 className="text-3xl font-bold uppercase mb-6 flex items-center gap-3" style={{ fontFamily: "Oswald, sans-serif", color: "white" }}>
                <span className="w-1 h-8 rounded" style={{ backgroundColor: art.color, display: "inline-block", flexShrink: 0 }} />
                Правила и особенности
              </h2>
              <div className="space-y-3">
                {art.rules.map((rule, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-lg border" style={{ backgroundColor: "var(--dark-card)", borderColor: "#1e1e1e" }}>
                    <span className="text-lg font-black shrink-0 w-8 text-center" style={{ color: art.color, fontFamily: "Oswald, sans-serif" }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p style={{ color: "#ddd", fontFamily: "IBM Plex Sans, sans-serif" }}>{rule}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Video */}
            <section>
              <h2 className="text-3xl font-bold uppercase mb-6 flex items-center gap-3" style={{ fontFamily: "Oswald, sans-serif", color: "white" }}>
                <span className="w-1 h-8 rounded" style={{ backgroundColor: art.color, display: "inline-block", flexShrink: 0 }} />
                Видео — техники и бои
              </h2>
              <div className="rounded-lg overflow-hidden border" style={{ borderColor: "#1e1e1e" }}>
                <div className="relative" style={{ paddingBottom: "56.25%" }}>
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${art.videoId}?rel=0&modestbranding=1`}
                    title={art.videoTitle}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar — Legends */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold uppercase flex items-center gap-3" style={{ fontFamily: "Oswald, sans-serif", color: "white" }}>
              <span className="w-1 h-8 rounded" style={{ backgroundColor: art.color, display: "inline-block", flexShrink: 0 }} />
              Легенды
            </h2>
            {art.legends.map((legend, i) => (
              <div
                key={i}
                className="p-5 rounded-lg border transition-all duration-300"
                style={{ backgroundColor: "var(--dark-card)", borderColor: "#1e1e1e" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = art.color;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "#1e1e1e";
                }}
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 rounded flex items-center justify-center text-lg shrink-0" style={{ backgroundColor: `${art.color}20`, border: `1px solid ${art.color}40` }}>
                    {["🥇", "🥈", "🥉"][i]}
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg leading-tight" style={{ fontFamily: "Oswald, sans-serif" }}>
                      {legend.name}
                    </h3>
                    <p className="text-xs" style={{ color: art.color }}>{legend.years}</p>
                  </div>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "#aaa", fontFamily: "IBM Plex Sans, sans-serif" }}>
                  {legend.achievement}
                </p>
              </div>
            ))}

            {/* Back to main */}
            <Link
              to="/"
              className="flex items-center gap-2 p-4 rounded-lg border text-center justify-center transition-all duration-300 w-full"
              style={{ backgroundColor: "var(--dark-card)", borderColor: "#1e1e1e", color: "#999" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--fire)";
                (e.currentTarget as HTMLElement).style.color = "var(--fire)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "#1e1e1e";
                (e.currentTarget as HTMLElement).style.color = "#999";
              }}
            >
              <Icon name="Grid2X2" size={16} />
              <span style={{ fontFamily: "Oswald, sans-serif", letterSpacing: "0.1em", fontSize: "0.9rem" }}>ВСЕ БОЕВЫЕ ИСКУССТВА</span>
            </Link>
          </div>
        </div>

        {/* Prev / Next navigation */}
        <div className="mt-16 pt-8 border-t grid grid-cols-2 gap-4" style={{ borderColor: "#1e1e1e" }}>
          <div>
            {prevArt && (
              <Link
                to={`/${prevArt.id}`}
                className="flex items-center gap-3 p-4 rounded-lg border transition-all duration-300 group"
                style={{ backgroundColor: "var(--dark-card)", borderColor: "#1e1e1e" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--fire)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "#1e1e1e"; }}
              >
                <Icon name="ChevronLeft" size={20} className="text-fire shrink-0" />
                <div>
                  <p className="text-xs mb-0.5" style={{ color: "#666" }}>Предыдущее</p>
                  <p className="font-bold" style={{ fontFamily: "Oswald, sans-serif", color: "white" }}>{prevArt.emoji} {prevArt.nameEn}</p>
                </div>
              </Link>
            )}
          </div>
          <div>
            {nextArt && (
              <Link
                to={`/${nextArt.id}`}
                className="flex items-center gap-3 p-4 rounded-lg border transition-all duration-300 justify-end text-right"
                style={{ backgroundColor: "var(--dark-card)", borderColor: "#1e1e1e" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--fire)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "#1e1e1e"; }}
              >
                <div>
                  <p className="text-xs mb-0.5" style={{ color: "#666" }}>Следующее</p>
                  <p className="font-bold" style={{ fontFamily: "Oswald, sans-serif", color: "white" }}>{nextArt.emoji} {nextArt.nameEn}</p>
                </div>
                <Icon name="ChevronRight" size={20} className="text-fire shrink-0" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
