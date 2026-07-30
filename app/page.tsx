"use client";

import { useEffect, useState } from "react";

const models = [
  {
    name: "D7 DMH",
    type: "SUPER GIBRID SEDAN",
    image: "/images/d7-cutout.png",
    stat: "1 400 km",
    label: "umumiy masofa",
    tone: "champagne",
  },
  {
    name: "RX5",
    type: "INTELLEKTUAL SUV",
    image: "/images/rx5-cutout.png",
    stat: "1.5T",
    label: "turbo quvvat",
    tone: "silver",
  },
  {
    name: "iMAX8",
    type: "PREMIUM MPV",
    image: "/images/imax8-cutout.png",
    stat: "7 o‘rin",
    label: "biznes klass",
    tone: "graphite",
  },
];

const Arrow = () => <span aria-hidden="true">↗</span>;

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formOpen, setFormOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.body.style.overflow = formOpen || menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [formOpen, menuOpen]);

  const openForm = () => {
    setSubmitted(false);
    setFormOpen(true);
    setMenuOpen(false);
  };

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="ROEWE Uzbekistan bosh sahifa">
          <img src="/images/roewe-logo.png" alt="ROEWE" />
          <span>UZBEKISTAN</span>
        </a>

        <nav className="desktop-nav" aria-label="Asosiy navigatsiya">
          <a href="#models">Modellar</a>
          <a href="#technology">Texnologiya</a>
          <a href="#experience">ROEWE olami</a>
          <a href="#contact">Aloqa</a>
        </nav>

        <button className="header-cta" onClick={openForm}>
          Test-drayv <Arrow />
        </button>
        <button
          className="menu-button"
          aria-label="Menyuni ochish"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i />
          <i />
        </button>
      </header>

      <div className={`mobile-menu ${menuOpen ? "is-open" : ""}`}>
        <nav>
          <a href="#models" onClick={() => setMenuOpen(false)}>Modellar</a>
          <a href="#technology" onClick={() => setMenuOpen(false)}>Texnologiya</a>
          <a href="#experience" onClick={() => setMenuOpen(false)}>ROEWE olami</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Aloqa</a>
          <button onClick={openForm}>Test-drayvga yozilish <Arrow /></button>
        </nav>
      </div>

      <section className="hero" id="top">
        <img className="hero-image" src="/images/d7-hero.jpg" alt="ROEWE D7 EV zamonaviy shahar fonida" />
        <div className="hero-shade" />
        <div className="hero-copy">
          <span className="eyebrow light">YANGI DAVR. YANGI HARAKAT.</span>
          <h1>
            Harakatning
            <br />
            yangi <em>darajasi.</em>
          </h1>
          <p>
            Intellektual texnologiya, nafis dizayn va murosasiz
            qulaylik — endi O‘zbekistonda.
          </p>
          <div className="hero-actions">
            <button className="button primary" onClick={openForm}>
              Test-drayvga yozilish <Arrow />
            </button>
            <a className="button glass" href="#models">
              Modellarni ko‘rish
            </a>
          </div>
        </div>
        <div className="hero-specs">
          <div><strong>610</strong><span>KM GACHA ELEKTR<br />MASOFA</span></div>
          <div><strong>6.5</strong><span>SEK / 0–100 KM/S</span></div>
          <div><strong>155</strong><span>KW MAKSIMAL<br />QUVVAT</span></div>
        </div>
        <a className="scroll-mark" href="#models" aria-label="Pastga o‘tish">SCROLL <b>↓</b></a>
      </section>

      <section className="models section-pad" id="models">
        <div className="section-heading">
          <div>
            <span className="eyebrow">ROEWE MODELLARI</span>
            <h2>Har bir yo‘l uchun<br /><em>o‘z xarakteri.</em></h2>
          </div>
          <p>
            Shahar ritmidan uzoq sayohatlargacha — sizning hayot
            tarzingizga mos modelni tanlang.
          </p>
        </div>

        <div className="model-grid">
          {models.map((model, index) => (
            <article className={`model-card ${model.tone}`} key={model.name}>
              <div className="model-index">0{index + 1}</div>
              <span>{model.type}</span>
              <h3>{model.name}</h3>
              <img src={model.image} alt={`ROEWE ${model.name}`} />
              <div className="model-foot">
                <div><strong>{model.stat}</strong><small>{model.label}</small></div>
                <button onClick={openForm} aria-label={`${model.name} uchun test-drayv`}>Batafsil <Arrow /></button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="technology" id="technology">
        <div className="tech-image">
          <img src="/images/d7-cabin.jpg" alt="ROEWE D7 premium saloni" />
          <span>01 / 03</span>
        </div>
        <div className="tech-copy">
          <span className="eyebrow light">INTELLEKTUAL MAKON</span>
          <h2>Texnologiya<br />sizni <em>his qiladi.</em></h2>
          <p>
            Har bir detal inson uchun yaratilgan. Keng panoramik ekran,
            aqlli yordamchilar va sokin premium salon — yo‘l endi faqat
            manzil emas, zavqning o‘zi.
          </p>
          <div className="tech-facts">
            <div><strong>12.3″</strong><span>Dual panoramik displey</span></div>
            <div><strong>360°</strong><span>Atrofni to‘liq ko‘rish</span></div>
            <div><strong>L2</strong><span>Haydovchi assistenti</span></div>
            <div><strong>6</strong><span>Xavfsizlik yostiqchasi</span></div>
          </div>
        </div>
      </section>

      <section className="experience section-pad" id="experience">
        <div className="experience-head">
          <span className="eyebrow">ROEWE EXPERIENCE</span>
          <h2>Yo‘l — bu<br /><em>his-tuyg‘u.</em></h2>
        </div>
        <div className="editorial-grid">
          <article className="story story-main">
            <img src="/images/d7-road.jpg" alt="ROEWE D7 ochiq yo‘lda" />
            <div><span>DINAMIKA</span><h3>Sukunatdagi qudrat</h3><p>Bir lahzada his qilinadigan tezlanish. Har burilishda ishonch.</p></div>
          </article>
          <article className="story">
            <img src="/images/d7-interior.jpg" alt="ROEWE salonining premium detallari" />
            <div><span>KOMFORT</span><h3>Sizning shaxsiy makoningiz</h3></div>
          </article>
          <article className="story">
            <img src="/images/d7-design.jpg" alt="ROEWE D7 dizayn detallari" />
            <div><span>DIZAYN</span><h3>Vaqtdan oldinda</h3></div>
          </article>
        </div>
      </section>

      <section className="test-drive-banner">
        <img src="/images/d7-detail.jpg" alt="" />
        <div>
          <span className="eyebrow light">ROEWE’NI HIS QILING</span>
          <h2>Bir qarash yetmaydi.<br /><em>Uni boshqaring.</em></h2>
          <button className="button primary" onClick={openForm}>Test-drayvga yozilish <Arrow /></button>
        </div>
      </section>

      <footer id="contact">
        <div className="footer-main">
          <div className="footer-brand">
            <img src="/images/roewe-logo.png" alt="ROEWE" />
            <p>Harakatning yangi darajasi.</p>
          </div>
          <div className="footer-col">
            <span>MODELLAR</span>
            <a href="#models">D7 DMH</a><a href="#models">RX5</a><a href="#models">iMAX8</a>
          </div>
          <div className="footer-col">
            <span>MIJOZLARGA</span>
            <button onClick={openForm}>Test-drayv</button>
            <a href="#technology">Servis va kafolat</a>
            <a href="#experience">ROEWE haqida</a>
          </div>
          <div className="footer-contact">
            <span>BOG‘LANISH</span>
            <a href="tel:+998555080808">+998 55 508 08 08</a>
            <a
              className="instagram-link"
              href="https://www.instagram.com/roewe_uzbekistan"
              target="_blank"
              rel="noreferrer"
              aria-label="ROEWE Uzbekistan Instagram sahifasi"
            >
              <span className="instagram-icon" aria-hidden="true"><i /></span>
              <span>@roewe_uzbekistan</span>
              <b aria-hidden="true">↗</b>
            </a>
            <p>Toshkent shahri, O‘zbekiston</p>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 ROEWE Uzbekistan</span>
          <span>Maxfiylik siyosati</span>
          <span>SAIC MOTOR</span>
        </div>
      </footer>

      <div className={`modal ${formOpen ? "is-open" : ""}`} role="dialog" aria-modal="true" aria-label="Test-drayvga yozilish">
        <button className="modal-backdrop" onClick={() => setFormOpen(false)} aria-label="Yopish" />
        <div className="modal-card">
          <button className="modal-close" onClick={() => setFormOpen(false)} aria-label="Yopish">×</button>
          {submitted ? (
            <div className="success">
              <span>✓</span>
              <h2>So‘rovingiz qabul qilindi.</h2>
              <p>ROEWE mutaxassisi tez orada siz bilan bog‘lanadi.</p>
              <button className="button primary" onClick={() => setFormOpen(false)}>Yopish</button>
            </div>
          ) : (
            <>
              <span className="eyebrow">TEST-DRAYV</span>
              <h2>ROEWE’ni<br /><em>his qiling.</em></h2>
              <p>Ma’lumotlaringizni qoldiring — sizga qulay vaqtni birga tanlaymiz.</p>
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
                <label>Ismingiz<input required name="name" placeholder="Ismingizni kiriting" /></label>
                <label>Telefon raqamingiz<input required name="phone" type="tel" placeholder="+998 90 000 00 00" /></label>
                <label>Model<select name="model" defaultValue="D7 DMH"><option>D7 DMH</option><option>RX5</option><option>iMAX8</option></select></label>
                <button className="button primary" type="submit">So‘rovni yuborish <Arrow /></button>
              </form>
              <small>Tugmani bosish orqali shaxsiy ma’lumotlarni qayta ishlashga rozilik bildirasiz.</small>
            </>
          )}
        </div>
      </div>
    </main>
  );
}
