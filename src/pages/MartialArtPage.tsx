import { useParams, Link } from "react-router-dom";
import { martialArts } from "@/data/martialArts";
import Icon from "@/components/ui/icon";

export default function MartialArtPage() {
  const { id } = useParams<{ id: string }>();
  const art = martialArts.find((a) => a.id === id);

  if (!art) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: "var(--dark)" }}>
        <div className="text-center">
          <p className="text-4xl mb-4">⚔️</p>
          <p className="text-xl mb-4" style={{ color: "#555", fontFamily: "Oswald, sans-serif" }}>Страница не найдена</p>
          <Link to="/" className="text-fire hover:underline text-sm" style={{ fontFamily: "IBM Plex Sans, sans-serif" }}>← На главную</Link>
        </div>
      </div>
    );
  }

  const currentIndex = martialArts.findIndex((a) => a.id === id);
  const prevArt = currentIndex > 0 ? martialArts[currentIndex - 1] : null;
  const nextArt = currentIndex < martialArts.length - 1 ? martialArts[currentIndex + 1] : null;

  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--dark)" }}>
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b" style={{ backgroundColor: "rgba(8,8,8,0.97)", borderColor: `${art.color}30`, backdropFilter: "blur(12px)" }}>
        <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-sm transition-colors hover:text-fire" style={{ color: "#666", fontFamily: "Oswald, sans-serif", letterSpacing: "0.08em" }}>
            <Icon name="ArrowLeft" size={16} />
            <span className="hidden sm:inline uppercase">Энциклопедия</span>
          </Link>
          <span className="font-bold text-lg" style={{ fontFamily: "Oswald, sans-serif", color: art.color }}>{art.emoji} {art.nameEn}</span>
          <div className="flex items-center gap-2 text-xs" style={{ color: "#444" }}>
            <span style={{ fontFamily: "Oswald, sans-serif" }}>{currentIndex + 1} / {martialArts.length}</span>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-14 relative overflow-hidden" style={{ minHeight: "380px" }}>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${art.image})`, filter: "brightness(0.18) saturate(1.3)" }} />
        <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, rgba(8,8,8,0.8) 0%, ${art.color}18 50%, rgba(8,8,8,0.9) 100%)` }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 50%, var(--dark) 100%)" }} />

        <div className="relative z-10 max-w-6xl mx-auto px-4 py-16 flex items-end gap-8">
          <div className="text-8xl select-none hidden md:block shrink-0" style={{ filter: `drop-shadow(0 0 30px ${art.color}80)` }}>
            {art.emoji}
          </div>
          <div>
            <div className="flex items-center gap-3 mb-3 flex-wrap">
              <span className="region-badge" style={{ backgroundColor: `${art.color}20`, border: `1px solid ${art.color}50`, color: art.color }}>{art.category}</span>
              <span className="text-xl">{art.country}</span>
              <span className="text-xs" style={{ color: "#555", fontFamily: "IBM Plex Sans, sans-serif" }}>{art.origin}</span>
            </div>
            <h1 className="font-black uppercase leading-none mb-3" style={{ fontFamily: "Oswald, sans-serif", fontSize: "clamp(2.5rem, 7vw, 5.5rem)", color: "white", textShadow: `0 0 60px ${art.color}30` }}>
              {art.nameEn}
            </h1>
            <p className="text-2xl font-light mb-3" style={{ color: art.color, fontFamily: "Oswald, sans-serif" }}>{art.name}</p>
            <p className="text-lg italic" style={{ color: "#666", fontFamily: "IBM Plex Sans, sans-serif" }}>«{art.tagline}»</p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: `linear-gradient(to right, transparent, ${art.color}60, transparent)` }} />
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* MAIN */}
          <div className="lg:col-span-2 space-y-12">
            {/* History */}
            <section>
              <h2 className="text-3xl font-bold uppercase mb-6 flex items-center gap-3" style={{ fontFamily: "Oswald, sans-serif", color: "white" }}>
                <span className="accent-bar h-8" style={{ backgroundColor: art.color }} />
                История создания
              </h2>
              <div className="space-y-5">
                {art.history.map((p, i) => (
                  <div key={i} className="flex gap-4">
                    <span className="text-xs font-black shrink-0 mt-1 w-6" style={{ color: `${art.color}60`, fontFamily: "Oswald, sans-serif" }}>{String(i + 1).padStart(2, "0")}</span>
                    <p className="leading-relaxed" style={{ color: "#ccc", fontFamily: "IBM Plex Sans, sans-serif", fontSize: "0.97rem" }}>{p}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Photo */}
            <section>
              <h2 className="text-3xl font-bold uppercase mb-6 flex items-center gap-3" style={{ fontFamily: "Oswald, sans-serif", color: "white" }}>
                <span className="accent-bar h-8" style={{ backgroundColor: art.color }} />
                Фотография
              </h2>
              <div className="rounded-lg overflow-hidden border" style={{ borderColor: "#1e1e1e" }}>
                <img
                  src={art.image}
                  alt={art.name}
                  className="w-full object-cover"
                  style={{ maxHeight: "400px", filter: "brightness(0.85) saturate(1.1)" }}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://cdn.poehali.dev/projects/205c1f99-983e-4aad-8bcf-c32f5032ee69/files/f8b18786-19bd-4cea-b724-2e6c5cac88c1.jpg";
                  }}
                />
                <div className="p-3 text-xs" style={{ backgroundColor: "var(--dark-card)", color: "#444", fontFamily: "IBM Plex Sans, sans-serif" }}>{art.name} · {art.origin}</div>
              </div>
            </section>

            {/* Rules */}
            <section>
              <h2 className="text-3xl font-bold uppercase mb-6 flex items-center gap-3" style={{ fontFamily: "Oswald, sans-serif", color: "white" }}>
                <span className="accent-bar h-8" style={{ backgroundColor: art.color }} />
                Правила и особенности
              </h2>
              <div className="space-y-3">
                {art.rules.map((rule, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-lg border" style={{ backgroundColor: "var(--dark-card)", borderColor: "#1e1e1e" }}>
                    <span className="text-lg font-black shrink-0 w-8 text-center" style={{ color: art.color, fontFamily: "Oswald, sans-serif" }}>{String(i + 1).padStart(2, "0")}</span>
                    <p style={{ color: "#ddd", fontFamily: "IBM Plex Sans, sans-serif", fontSize: "0.95rem" }}>{rule}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Video */}
            <section>
              <h2 className="text-3xl font-bold uppercase mb-6 flex items-center gap-3" style={{ fontFamily: "Oswald, sans-serif", color: "white" }}>
                <span className="accent-bar h-8" style={{ backgroundColor: art.color }} />
                Видео — техники и бои
              </h2>
              <div className="rounded-lg overflow-hidden border" style={{ borderColor: "#1e1e1e" }}>
                <div className="relative" style={{ paddingBottom: "56.25%" }}>
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${art.videoId}?rel=0&modestbranding=1`}
                    title={`${art.name} — видео`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </section>
          </div>

          {/* SIDEBAR */}
          <div className="space-y-6">
            {/* Quick info */}
            <div className="p-5 rounded-lg border" style={{ backgroundColor: "var(--dark-card)", borderColor: `${art.color}30` }}>
              <h3 className="text-sm uppercase tracking-widest mb-4" style={{ color: art.color, fontFamily: "Oswald, sans-serif" }}>Информация</h3>
              {[
                { label: "Страна", value: `${art.country} ${art.origin}` },
                { label: "Категория", value: art.category },
                { label: "Раздел", value: `${currentIndex + 1} из ${martialArts.length}` },
              ].map((item) => (
                <div key={item.label} className="flex justify-between items-center py-2 border-b" style={{ borderColor: "#1e1e1e" }}>
                  <span className="text-xs uppercase tracking-widest" style={{ color: "#555", fontFamily: "Oswald, sans-serif" }}>{item.label}</span>
                  <span className="text-sm text-right" style={{ color: "#ccc", fontFamily: "IBM Plex Sans, sans-serif" }}>{item.value}</span>
                </div>
              ))}
            </div>

            {/* Legends */}
            <div>
              <h2 className="text-2xl font-bold uppercase mb-4 flex items-center gap-3" style={{ fontFamily: "Oswald, sans-serif", color: "white" }}>
                <span className="accent-bar h-7" style={{ backgroundColor: art.color }} />
                Легенды
              </h2>
              <div className="space-y-4">
                {art.legends.map((legend, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-lg border transition-all duration-250"
                    style={{ backgroundColor: "var(--dark-card)", borderColor: "#1e1e1e" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = art.color; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "#1e1e1e"; }}
                  >
                    <div className="flex items-start gap-3 mb-2">
                      <div className="w-9 h-9 rounded flex items-center justify-center text-base shrink-0" style={{ backgroundColor: `${art.color}20`, border: `1px solid ${art.color}40` }}>
                        {["🥇", "🥈", "🥉"][i] ?? "🏆"}
                      </div>
                      <div>
                        <h3 className="font-bold text-white leading-tight" style={{ fontFamily: "Oswald, sans-serif", fontSize: "1rem" }}>{legend.name}</h3>
                        <p className="text-xs" style={{ color: art.color }}>{legend.years}</p>
                      </div>
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: "#888", fontFamily: "IBM Plex Sans, sans-serif" }}>{legend.achievement}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Back */}
            <Link
              to="/"
              className="flex items-center gap-2 p-4 rounded-lg border justify-center transition-all duration-250 w-full"
              style={{ backgroundColor: "var(--dark-card)", borderColor: "#1e1e1e", color: "#666", fontFamily: "Oswald, sans-serif", letterSpacing: "0.1em", fontSize: "0.85rem" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--fire)"; (e.currentTarget as HTMLElement).style.color = "var(--fire)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "#1e1e1e"; (e.currentTarget as HTMLElement).style.color = "#666"; }}
            >
              <Icon name="Grid2X2" size={15} />
              ВСЕ БОЕВЫЕ ИСКУССТВА
            </Link>
          </div>
        </div>

        {/* Prev / Next */}
        <div className="mt-16 pt-8 border-t grid grid-cols-2 gap-4" style={{ borderColor: "#1e1e1e" }}>
          <div>
            {prevArt && (
              <Link
                to={`/art/${prevArt.id}`}
                className="flex items-center gap-3 p-4 rounded-lg border transition-all duration-250"
                style={{ backgroundColor: "var(--dark-card)", borderColor: "#1e1e1e" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = prevArt.color; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "#1e1e1e"; }}
              >
                <Icon name="ChevronLeft" size={20} className="text-fire shrink-0" />
                <div>
                  <p className="text-xs mb-0.5" style={{ color: "#444" }}>Предыдущее</p>
                  <p className="font-bold text-white" style={{ fontFamily: "Oswald, sans-serif" }}>{prevArt.emoji} {prevArt.nameEn}</p>
                </div>
              </Link>
            )}
          </div>
          <div>
            {nextArt && (
              <Link
                to={`/art/${nextArt.id}`}
                className="flex items-center gap-3 p-4 rounded-lg border transition-all duration-250 justify-end text-right"
                style={{ backgroundColor: "var(--dark-card)", borderColor: "#1e1e1e" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = nextArt.color; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "#1e1e1e"; }}
              >
                <div>
                  <p className="text-xs mb-0.5" style={{ color: "#444" }}>Следующее</p>
                  <p className="font-bold text-white" style={{ fontFamily: "Oswald, sans-serif" }}>{nextArt.emoji} {nextArt.nameEn}</p>
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
