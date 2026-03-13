import { useState } from "react";
import { Link } from "react-router-dom";
import { martialArts, regionGroups, categories } from "@/data/martialArts";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/205c1f99-983e-4aad-8bcf-c32f5032ee69/files/f8b18786-19bd-4cea-b724-2e6c5cac88c1.jpg";

export default function Index() {
  const [activeCategory, setActiveCategory] = useState("Все");
  const [search, setSearch] = useState("");

  const allCategories = ["Все", ...categories];

  const filtered = martialArts.filter((art) => {
    const matchCat = activeCategory === "Все" || art.category === activeCategory;
    const matchSearch =
      search === "" ||
      art.name.toLowerCase().includes(search.toLowerCase()) ||
      art.nameEn.toLowerCase().includes(search.toLowerCase()) ||
      art.origin.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--dark)" }}>
      {/* ── NAV ── */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 border-b"
        style={{
          backgroundColor: "rgba(8,8,8,0.97)",
          borderColor: "rgba(255,85,0,0.25)",
          backdropFilter: "blur(12px)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl">⚔️</span>
            <span className="font-black text-white text-sm tracking-widest uppercase font-display">
              Боевые <span style={{ color: "var(--fire)" }}>Искусства</span>
            </span>
          </div>
          <div className="hidden lg:flex items-center gap-1 overflow-x-auto">
            {regionGroups.slice(0, 4).map((g) => (
              <a
                key={g.label}
                href="#arts"
                className="nav-link px-2 py-1 whitespace-nowrap text-xs"
              >
                {g.label}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className="btn-outline-fire text-xs px-4 py-2 uppercase tracking-widest font-display"
          >
            Контакты
          </a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-14">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${HERO_IMG})`,
            filter: "brightness(0.2) saturate(1.4)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,85,0,0.08) 0%, transparent 50%), linear-gradient(to bottom, transparent 40%, var(--dark) 100%)",
          }}
        />
        {/* animated scan */}
        <div
          className="absolute left-0 right-0 h-px pointer-events-none anim-pulse"
          style={{
            background:
              "linear-gradient(to right, transparent, rgba(255,85,0,0.5), transparent)",
            top: "40%",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-24">
          <p className="section-label mb-5 anim-up">
            ░ За пределами олимпийского огня
          </p>
          <h1
            className="font-black uppercase leading-none mb-6 anim-up d200"
            style={{
              fontFamily: "Oswald, sans-serif",
              fontSize: "clamp(2.8rem, 9vw, 7.5rem)",
              color: "white",
              textShadow: "0 0 80px rgba(255,85,0,0.25)",
            }}
          >
            БОЕВЫЕ
            <br />
            <span
              style={{
                color: "var(--fire)",
                textShadow: "0 0 50px var(--fire)",
              }}
            >
              ИСКУССТВА
            </span>
            <br />
            <span
              style={{
                fontSize: "0.38em",
                color: "#555",
                letterSpacing: "0.18em",
              }}
            >
              ВНЕ ОЛИМПИЙСКОЙ ПРОГРАММЫ
            </span>
          </h1>

          <p
            className="text-lg max-w-2xl mb-10 anim-up d300"
            style={{ color: "#999", fontFamily: "IBM Plex Sans, sans-serif", lineHeight: 1.7 }}
          >
            Энциклопедия{" "}
            <strong style={{ color: "var(--fire)" }}>
              {martialArts.length} боевых систем
            </strong>{" "}
            из 20+ стран мира. История создания, правила поединка,
            знаменитые мастера и видео демонстрации.
          </p>

          <div className="flex gap-3 flex-wrap anim-up d400">
            <a
              href="#arts"
              className="btn-fire flex items-center gap-2 px-8 py-4 font-bold uppercase tracking-widest text-sm"
            >
              <Icon name="Swords" size={18} />
              Изучить все {martialArts.length} стилей
            </a>
            <a
              href="#contents"
              className="btn-outline-fire flex items-center gap-2 px-8 py-4 font-bold uppercase tracking-widest text-sm"
            >
              <Icon name="BookOpen" size={18} />
              Содержание
            </a>
          </div>

          {/* stats */}
          <div className="flex gap-8 mt-16 anim-up d500">
            {[
              { v: `${martialArts.length}`, l: "Боевых систем" },
              { v: "20+", l: "Стран" },
              { v: "1500+", l: "Лет истории" },
              { v: "100+", l: "Легендарных мастеров" },
            ].map((s) => (
              <div key={s.l}>
                <p
                  className="text-4xl font-black"
                  style={{ fontFamily: "Oswald, sans-serif", color: "var(--fire)" }}
                >
                  {s.v}
                </p>
                <p className="text-xs uppercase tracking-widest" style={{ color: "#555" }}>
                  {s.l}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={24} style={{ color: "#333" }} />
        </div>
      </section>

      {/* ── CONTENTS ── */}
      <section id="contents" className="py-20 border-t" style={{ borderColor: "#141414" }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-4 mb-10">
            <span className="accent-bar h-10" />
            <div>
              <p className="section-label mb-1">Навигация</p>
              <h2
                className="text-4xl font-black uppercase"
                style={{ fontFamily: "Oswald, sans-serif", color: "white" }}
              >
                Содержание
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {regionGroups.map((group) => (
              <div key={group.label}>
                <p
                  className="text-xs uppercase tracking-widest mb-3 pb-2 border-b"
                  style={{
                    color: "var(--fire)",
                    borderColor: "rgba(255,85,0,0.2)",
                    fontFamily: "Oswald, sans-serif",
                  }}
                >
                  {group.label}
                </p>
                <ol className="space-y-1">
                  {group.ids.map((id, idx) => {
                    const art = martialArts.find((a) => a.id === id);
                    if (!art) return null;
                    return (
                      <li key={id}>
                        <Link
                          to={`/art/${id}`}
                          className="flex items-center gap-2 group py-1 transition-colors"
                          style={{ color: "#777" }}
                          onMouseEnter={(e) =>
                            ((e.currentTarget as HTMLElement).style.color =
                              art.color)
                          }
                          onMouseLeave={(e) =>
                            ((e.currentTarget as HTMLElement).style.color =
                              "#777")
                          }
                        >
                          <span
                            className="text-xs w-5 shrink-0"
                            style={{ fontFamily: "Oswald, sans-serif", color: "#333" }}
                          >
                            {idx + 1}.
                          </span>
                          <span className="text-sm" style={{ fontFamily: "IBM Plex Sans, sans-serif" }}>
                            {art.emoji} {art.name}
                          </span>
                          <Icon
                            name="ArrowRight"
                            size={12}
                            className="ml-auto opacity-0 group-hover:opacity-100 shrink-0 transition-opacity"
                          />
                        </Link>
                      </li>
                    );
                  })}
                </ol>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ARTS GRID ── */}
      <section id="arts" className="py-20 border-t" style={{ borderColor: "#141414", backgroundColor: "#060606" }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-4 mb-8">
            <span className="accent-bar h-10" />
            <div>
              <p className="section-label mb-1">Энциклопедия</p>
              <h2
                className="text-4xl font-black uppercase"
                style={{ fontFamily: "Oswald, sans-serif", color: "white" }}
              >
                Все боевые искусства
              </h2>
            </div>
          </div>

          {/* Filter bar */}
          <div className="flex flex-wrap gap-3 mb-8 items-center">
            <div
              className="flex items-center gap-2 px-3 py-2 rounded border flex-1 min-w-48 max-w-xs"
              style={{ backgroundColor: "var(--dark-card)", borderColor: "#1a1a1a" }}
            >
              <Icon name="Search" size={14} style={{ color: "#555" }} />
              <input
                type="text"
                placeholder="Поиск..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="bg-transparent outline-none text-sm flex-1"
                style={{ color: "white", fontFamily: "IBM Plex Sans, sans-serif" }}
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {allCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className="text-xs uppercase tracking-widest px-3 py-2 border transition-all"
                  style={
                    activeCategory === cat
                      ? {
                          backgroundColor: "var(--fire)",
                          borderColor: "var(--fire)",
                          color: "#0A0A0A",
                          fontFamily: "Oswald, sans-serif",
                        }
                      : {
                          backgroundColor: "transparent",
                          borderColor: "#222",
                          color: "#555",
                          fontFamily: "Oswald, sans-serif",
                        }
                  }
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20" style={{ color: "#444" }}>
              <Icon name="Search" size={40} className="mx-auto mb-4 opacity-30" />
              <p style={{ fontFamily: "Oswald, sans-serif", fontSize: "1.2rem" }}>
                Ничего не найдено
              </p>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {filtered.map((art) => (
              <Link
                key={art.id}
                to={`/art/${art.id}`}
                className="group block rounded-lg border overflow-hidden card-hover"
                style={{ backgroundColor: "var(--dark-card)", borderColor: "#1a1a1a" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = art.color;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "#1a1a1a";
                }}
              >
                {/* Image */}
                <div className="relative overflow-hidden" style={{ height: "180px" }}>
                  <img
                    src={art.image}
                    alt={art.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    style={{ filter: "brightness(0.5) saturate(1.2)" }}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        "https://cdn.poehali.dev/projects/205c1f99-983e-4aad-8bcf-c32f5032ee69/files/f8b18786-19bd-4cea-b724-2e6c5cac88c1.jpg";
                    }}
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(to bottom, transparent 30%, var(--dark-card) 100%)`,
                    }}
                  />
                  {/* category badge */}
                  <span
                    className="absolute top-3 left-3 region-badge"
                    style={{
                      backgroundColor: `${art.color}25`,
                      border: `1px solid ${art.color}50`,
                      color: art.color,
                    }}
                  >
                    {art.category}
                  </span>
                  {/* country */}
                  <span className="absolute top-3 right-3 text-xl">
                    {art.country}
                  </span>
                  {/* emoji */}
                  <span
                    className="absolute bottom-3 right-4 text-4xl"
                    style={{ filter: `drop-shadow(0 0 12px ${art.color}80)` }}
                  >
                    {art.emoji}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5">
                  <p
                    className="text-xs mb-1"
                    style={{ color: art.color, fontFamily: "Oswald, sans-serif", letterSpacing: "0.08em" }}
                  >
                    {art.origin}
                  </p>
                  <h3
                    className="text-2xl font-black uppercase leading-tight text-white mb-1"
                    style={{ fontFamily: "Oswald, sans-serif" }}
                  >
                    {art.nameEn}
                  </h3>
                  <p
                    className="text-base mb-3"
                    style={{ color: "#666", fontFamily: "Oswald, sans-serif", fontWeight: 300 }}
                  >
                    {art.name}
                  </p>
                  <p
                    className="text-sm italic mb-4 line-clamp-2"
                    style={{ color: "#555", fontFamily: "IBM Plex Sans, sans-serif" }}
                  >
                    «{art.tagline}»
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      {["История", "Правила", "Легенды"].map((t) => (
                        <span key={t} className="tag">
                          {t}
                        </span>
                      ))}
                    </div>
                    <div
                      className="flex items-center gap-1 text-xs font-bold uppercase tracking-widest transition-colors font-display"
                      style={{ color: art.color }}
                    >
                      <span>→</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── VIDEO SECTION ── */}
      <section className="py-20 border-t" style={{ borderColor: "#141414" }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-4 mb-10">
            <span className="accent-bar h-10" />
            <div>
              <p className="section-label mb-1">Мультимедиа</p>
              <h2
                className="text-4xl font-black uppercase"
                style={{ fontFamily: "Oswald, sans-serif", color: "white" }}
              >
                Видео демонстрации
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {martialArts.slice(0, 12).map((art) => (
              <Link
                key={art.id}
                to={`/art/${art.id}`}
                className="group block rounded overflow-hidden border relative"
                style={{ borderColor: "#1a1a1a", aspectRatio: "16/9" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = art.color;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "#1a1a1a";
                }}
              >
                <img
                  src={`https://img.youtube.com/vi/${art.videoId}/mqdefault.jpg`}
                  alt={art.name}
                  className="w-full h-full object-cover"
                  style={{ filter: "brightness(0.55) saturate(1.2)" }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-200 group-hover:scale-110"
                    style={{ backgroundColor: art.color }}
                  >
                    <Icon name="Play" size={12} style={{ color: "white", marginLeft: "2px" }} />
                  </div>
                </div>
                <div
                  className="absolute bottom-0 left-0 right-0 px-2 py-1"
                  style={{
                    background: "linear-gradient(to top, rgba(0,0,0,0.9), transparent)",
                  }}
                >
                  <p
                    className="text-xs text-white truncate"
                    style={{ fontFamily: "Oswald, sans-serif" }}
                  >
                    {art.nameEn}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACTS ── */}
      <section id="contact" className="py-24 border-t" style={{ borderColor: "#141414", backgroundColor: "#060606" }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="section-label mb-2">Связь</p>
              <h2
                className="text-5xl font-black uppercase mb-6"
                style={{ fontFamily: "Oswald, sans-serif", color: "white" }}
              >
                Контакты
              </h2>
              <p
                className="leading-relaxed mb-8"
                style={{
                  color: "#777",
                  fontFamily: "IBM Plex Sans, sans-serif",
                  maxWidth: "420px",
                }}
              >
                Вопросы о боевых искусствах? Хотите предложить сотрудничество
                или поделиться материалами? Напишите нам — ответим в течение суток.
              </p>

              <div className="space-y-3">
                {[
                  { icon: "Mail" as const, label: "Email", value: "info@martial-arts.ru" },
                  { icon: "MessageCircle" as const, label: "Telegram", value: "@martial_arts_ru" },
                  { icon: "Globe" as const, label: "Сайт", value: "martial-arts.ru" },
                ].map((c) => (
                  <div
                    key={c.label}
                    className="flex items-center gap-4 p-4 rounded border"
                    style={{
                      backgroundColor: "var(--dark-card)",
                      borderColor: "#1a1a1a",
                    }}
                  >
                    <div
                      className="w-10 h-10 rounded flex items-center justify-center shrink-0"
                      style={{
                        backgroundColor: "rgba(255,85,0,0.1)",
                        border: "1px solid rgba(255,85,0,0.3)",
                      }}
                    >
                      <Icon name={c.icon} size={16} className="text-fire" />
                    </div>
                    <div>
                      <p
                        className="text-xs uppercase tracking-widest mb-0.5"
                        style={{ color: "#444" }}
                      >
                        {c.label}
                      </p>
                      <p
                        className="text-white"
                        style={{ fontFamily: "IBM Plex Sans, sans-serif" }}
                      >
                        {c.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              {[
                { label: "Имя", type: "text", placeholder: "Ваше имя" },
                { label: "Email", type: "email", placeholder: "your@email.com" },
              ].map((f) => (
                <div key={f.label}>
                  <label
                    className="block text-xs uppercase tracking-widest mb-2"
                    style={{ color: "#555", fontFamily: "Oswald, sans-serif" }}
                  >
                    {f.label}
                  </label>
                  <input
                    type={f.type}
                    placeholder={f.placeholder}
                    className="input-dark"
                  />
                </div>
              ))}
              <div>
                <label
                  className="block text-xs uppercase tracking-widest mb-2"
                  style={{ color: "#555", fontFamily: "Oswald, sans-serif" }}
                >
                  Сообщение
                </label>
                <textarea
                  rows={5}
                  placeholder="Ваш вопрос или предложение..."
                  className="input-dark resize-none"
                />
              </div>
              <button
                type="submit"
                className="btn-fire w-full py-4 font-bold uppercase tracking-widest text-sm"
              >
                Отправить сообщение
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t py-8" style={{ borderColor: "#141414" }}>
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span>⚔️</span>
            <span
              className="font-black text-white text-sm tracking-widest uppercase font-display"
            >
              Боевые <span style={{ color: "var(--fire)" }}>Искусства</span>
            </span>
          </div>
          <p
            className="text-xs text-center"
            style={{ color: "#333", fontFamily: "IBM Plex Sans, sans-serif" }}
          >
            Энциклопедия {martialArts.length} боевых систем вне олимпийской
            программы • 2024
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            {martialArts.slice(0, 10).map((art) => (
              <Link
                key={art.id}
                to={`/art/${art.id}`}
                className="text-lg transition-transform hover:scale-125"
                title={art.name}
              >
                {art.emoji}
              </Link>
            ))}
            <span className="text-xs self-center" style={{ color: "#444" }}>
              +{martialArts.length - 10} ещё
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
