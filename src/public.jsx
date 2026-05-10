// Public-facing screens: Landing, Marketplace, Categories, PDP, Search.

function Landing({ go }) {
  const D = window.DATA;
  const featured = D.PRODUCTS.slice(0, 4);
  const cats = D.CATEGORIES.slice(0, 6);
  return (
    <div className="fadein">
      {/* Top nav */}
      <div className="row between" style={{ padding: "20px 40px", borderBottom: "1px solid var(--ink-100)", background: "rgba(251,250,247,.85)", backdropFilter: "blur(10px)", position: "sticky", top: 0, zIndex: 20 }}>
        <Logo size={32} variant="chip" />
        <div className="row gap-24" style={{ fontSize: 13.5, color: "var(--ink-600)" }}>
          <a onClick={() => go("market")} style={{ cursor: "pointer" }}>Marketplace</a>
          <a onClick={() => go("categories")} style={{ cursor: "pointer" }}>Categories</a>
          <a onClick={() => go("about")} style={{ cursor: "pointer" }}>About</a>
          <a onClick={() => go("pricing")} style={{ cursor: "pointer" }}>Pricing</a>
          <a onClick={() => go("contact")} style={{ cursor: "pointer" }}>Contact</a>
        </div>
        <div className="row gap-8">
          <button className="btn btn-ghost btn-sm" onClick={() => go("login")}>Sign in</button>
          <button className="btn btn-primary btn-sm" onClick={() => go("signup")}>Get started <Icon name="arrow" size={14} /></button>
        </div>
      </div>

      {/* Editorial hero */}
      <section style={{ padding: "80px 40px 64px", maxWidth: 1320, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.05fr 1fr", gap: 56, alignItems: "center" }}>
          <div>
            <div className="row gap-12" style={{ marginBottom: 28 }}>
              <span className="eyebrow">Independent · Curated · 2026</span>
              <span className="rule" />
            </div>
            <h1 style={{ fontSize: "clamp(56px, 7vw, 96px)", lineHeight: 0.96, letterSpacing: "-0.035em", fontWeight: 400 }}>
              The marketplace for things <span className="ital" style={{ color: "var(--teal-600)" }}>worth keeping</span>.
            </h1>
            <p style={{ fontSize: 18, lineHeight: 1.55, color: "var(--ink-600)", marginTop: 28, maxWidth: 480 }}>
              Bazaratty is where independent makers meet curious buyers. Beautiful storefronts, honest reviews, fair payouts — built for the long run.
            </p>
            <div className="row gap-12" style={{ marginTop: 32 }}>
              <button className="btn btn-primary btn-lg" onClick={() => go("market")}>Start shopping <Icon name="arrow" size={16} /></button>
              <button className="btn btn-ghost btn-lg" onClick={() => go("seller-onboarding")}>Open a store</button>
            </div>
            <div className="row gap-32" style={{ marginTop: 44 }}>
              <div><div style={{ fontFamily: "var(--display)", fontSize: 32, lineHeight: 1, color: "var(--ink-900)" }}><Counter to={12400} suffix="+" /></div><div className="eyebrow ink" style={{ marginTop: 6 }}>Products listed</div></div>
              <div style={{ width: 1, background: "var(--ink-200)" }} />
              <div><div style={{ fontFamily: "var(--display)", fontSize: 32, lineHeight: 1, color: "var(--ink-900)" }}><Counter to={847} suffix="" /></div><div className="eyebrow ink" style={{ marginTop: 6 }}>Independent sellers</div></div>
              <div style={{ width: 1, background: "var(--ink-200)" }} />
              <div><div style={{ fontFamily: "var(--display)", fontSize: 32, lineHeight: 1, color: "var(--ink-900)" }}>4.<span className="ital">9</span></div><div className="eyebrow ink" style={{ marginTop: 6 }}>Average rating</div></div>
            </div>
          </div>

          {/* Asymmetric image collage */}
          <div style={{ position: "relative", height: 580 }}>
            <div className="zoomy" style={{ position: "absolute", top: 0, right: 0, width: "70%", height: 360, borderRadius: 24, overflow: "hidden" }}>
              <Imagery ratio="auto" radius={24} src={D.PHOTOS.hero1} style={{ height: "100%" }} />
            </div>
            <div className="zoomy" style={{ position: "absolute", bottom: 0, left: 0, width: "55%", height: 280, borderRadius: 24, overflow: "hidden", boxShadow: "var(--shadow-lg)" }}>
              <Imagery ratio="auto" radius={24} src={D.PHOTOS.hero2} style={{ height: "100%" }} />
            </div>
            <div className="zoomy" style={{ position: "absolute", bottom: 30, right: 20, width: "42%", height: 200, borderRadius: 24, overflow: "hidden", boxShadow: "var(--shadow-lg)" }}>
              <Imagery ratio="auto" radius={24} src={D.PHOTOS.hero3} style={{ height: "100%" }} />
            </div>
            {/* Floating product card */}
            <div className="card" style={{ position: "absolute", left: -8, top: 40, padding: 14, width: 240, boxShadow: "var(--shadow-lg)", background: "white", borderRadius: 16 }}>
              <div className="row gap-10">
                <div style={{ width: 48, height: 48, borderRadius: 10, overflow: "hidden", flexShrink: 0 }}>
                  <img src={D.PHOTOS.kettle} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <div className="col" style={{ minWidth: 0 }}>
                  <div className="eyebrow ink" style={{ fontSize: 10 }}>Brewhaus</div>
                  <div style={{ fontFamily: "var(--display)", fontSize: 16, lineHeight: 1.1 }}>Pour-over kettle</div>
                </div>
              </div>
              <div className="row between" style={{ marginTop: 10, alignItems: "center" }}>
                <span style={{ fontFamily: "var(--sans)", fontWeight: 600 }} className="tnum">$92</span>
                <span className="row gap-4" style={{ fontSize: 11.5, color: "var(--teal-700)" }}><Stars value={4.9} size={10} /> 4.9</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee proof bar */}
      <section style={{ padding: "20px 0", borderTop: "1px solid var(--ink-100)", borderBottom: "1px solid var(--ink-100)", background: "var(--paper)", overflow: "hidden" }}>
        <div className="row gap-32" style={{ maxWidth: 1320, margin: "0 auto", padding: "0 40px", alignItems: "center" }}>
          <span className="eyebrow ink" style={{ flexShrink: 0 }}>Featured in</span>
          <div className="rule" style={{ maxWidth: 60 }} />
          <div style={{ overflow: "hidden", flex: 1 }}>
            <div className="marquee-track" style={{ fontFamily: "var(--display)", fontSize: 22, color: "var(--ink-400)", letterSpacing: "-.01em" }}>
              {[..."Maple & Oak · Brewhaus · Verde Apothecary · Lumen Studio · Stride Lab · Keycraft · North & Hide · Tiny Atlas · Common Ground · Ledger Goods".split(" · "), ..."Maple & Oak · Brewhaus · Verde Apothecary · Lumen Studio · Stride Lab · Keycraft · North & Hide · Tiny Atlas · Common Ground · Ledger Goods".split(" · ")].map((n, i) => (
                <span key={i} className="ital">{n}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Editorial: featured */}
      <section style={{ padding: "88px 40px 48px", maxWidth: 1320, margin: "0 auto" }}>
        <Reveal>
          <div className="row between" style={{ alignItems: "flex-end", marginBottom: 36 }}>
            <div>
              <div className="eyebrow" style={{ marginBottom: 14 }}>Vol. 24 — Editor's selection</div>
              <h2 style={{ fontSize: 48, lineHeight: 1.05, letterSpacing: "-0.025em", maxWidth: 560 }}>
                Hand-picked <span className="ital">objects</span> for the season.
              </h2>
            </div>
            <button className="btn btn-ghost" onClick={() => go("market")}>View all 12,400 <Icon name="arrow" size={14} /></button>
          </div>
        </Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
          {featured.map((p, i) => <Reveal key={p.id} delay={i * 60}><ProductCard p={p} go={go} /></Reveal>)}
        </div>
      </section>

      {/* Story panel — cream block */}
      <section style={{ padding: "80px 0", margin: "48px 0", background: "var(--cream)", borderTop: "1px solid var(--cream-100)", borderBottom: "1px solid var(--cream-100)" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 40px", display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 64, alignItems: "center" }}>
          <div className="zoomy" style={{ borderRadius: 24, overflow: "hidden", height: 540 }}>
            <Imagery ratio="auto" radius={24} src={D.PHOTOS.workshop} style={{ height: "100%" }} />
          </div>
          <div>
            <div className="eyebrow amber" style={{ marginBottom: 18 }}>Why Bazaratty</div>
            <h2 style={{ fontSize: 56, lineHeight: 1.0, letterSpacing: "-0.03em" }}>
              A marketplace that feels like a <span className="ital" style={{ color: "var(--amber-700)" }}>great street</span> of independent shops.
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.65, color: "var(--ink-700)", marginTop: 28, maxWidth: 520 }}>
              We built Bazaratty for the makers who care — about materials, packaging, the customer note in the box. No big-box noise. Just real craft, beautifully presented, fairly priced.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginTop: 36 }}>
              {[
                { n: "01", t: "Independent first", b: "Every seller is a real, owner-operated business. We highlight makers, not warehouses." },
                { n: "02", t: "Transparent pricing", b: "Flat 6% commission. No tier games, no hidden upsells. Pay only when you sell." },
                { n: "03", t: "Long-term trust", b: "Buyer protection on every order. Real humans on support." },
                { n: "04", t: "Fast payouts", b: "Money in your account within 2 business days, every time." },
              ].map(c => (
                <div key={c.n} style={{ borderTop: "1px solid var(--cream-100)", paddingTop: 16 }}>
                  <span className="mono" style={{ fontSize: 11, color: "var(--ink-500)", letterSpacing: ".1em" }}>{c.n}</span>
                  <div style={{ fontFamily: "var(--display)", fontSize: 20, marginTop: 6, lineHeight: 1.2 }}>{c.t}</div>
                  <p className="muted" style={{ marginTop: 6, fontSize: 13.5, lineHeight: 1.5 }}>{c.b}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section style={{ padding: "48px 40px", maxWidth: 1320, margin: "0 auto" }}>
        <Reveal>
          <div className="row between" style={{ alignItems: "flex-end", marginBottom: 32 }}>
            <div>
              <div className="eyebrow" style={{ marginBottom: 14 }}>Browse by department</div>
              <h2 style={{ fontSize: 44, lineHeight: 1.05, letterSpacing: "-0.025em" }}>Eight worlds, one marketplace.</h2>
            </div>
            <button className="btn btn-ghost" onClick={() => go("categories")}>All categories <Icon name="arrow" size={14} /></button>
          </div>
        </Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 14 }}>
          {cats.map((c, i) => (
            <Reveal key={c.id} delay={i * 40}>
              <button onClick={() => go("market")} className="card lift zoomy" style={{ padding: 0, textAlign: "left", overflow: "hidden", borderRadius: 16, width: "100%" }}>
                <Imagery ratio="1/1" tone="tinted" hue={c.hue} radius={0} src={D.CATEGORY_PHOTO[c.id]} />
                <div style={{ padding: "12px 14px 14px" }}>
                  <div style={{ fontFamily: "var(--display)", fontSize: 18, lineHeight: 1.1 }}>{c.name}</div>
                  <div className="muted tnum" style={{ fontSize: 11.5, marginTop: 2 }}>{c.count.toLocaleString()} items</div>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Seller dashboard preview — 2-up */}
      <section style={{ padding: "80px 40px", maxWidth: 1320, margin: "0 auto" }}>
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div className="eyebrow" style={{ marginBottom: 14 }}>For sellers</div>
            <h2 style={{ fontSize: 56, lineHeight: 1.0, letterSpacing: "-0.03em", maxWidth: 800, margin: "0 auto" }}>
              A storefront, an inbox, and the <span className="ital" style={{ color: "var(--teal-600)" }}>numbers</span> that matter.
            </h2>
            <p style={{ fontSize: 17, color: "var(--ink-600)", marginTop: 20, maxWidth: 600, margin: "20px auto 0" }}>
              Open your store in minutes. Manage orders, track revenue, and grow — without wrestling spreadsheets.
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="card" style={{ padding: 32, background: "var(--navy-900)", borderColor: "var(--navy-800)", color: "white", borderRadius: 28, position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: -100, right: -80, width: 380, height: 380, borderRadius: "50%", background: "radial-gradient(circle, rgba(88,195,163,.45), transparent 65%)" }} />
            <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 32, position: "relative" }}>
              <div>
                <div className="row gap-16" style={{ marginBottom: 20 }}>
                  <div className="row gap-10">
                    <span style={{ width: 36, height: 36, borderRadius: 999, background: "var(--teal-400)" }} />
                    <div className="col">
                      <div style={{ fontFamily: "var(--display)", fontSize: 16 }}>Maple & Oak</div>
                      <div style={{ fontSize: 11.5, color: "rgba(255,255,255,.5)" }}>Seller dashboard · Last 14 days</div>
                    </div>
                  </div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14, marginBottom: 20 }}>
                  <div style={{ padding: 16, borderRadius: 14, background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.08)" }}>
                    <div style={{ fontSize: 11, color: "rgba(255,255,255,.55)", letterSpacing: ".06em", textTransform: "uppercase" }}>Revenue</div>
                    <div style={{ fontFamily: "var(--display)", fontSize: 28, lineHeight: 1, marginTop: 6 }}>$<Counter to={12480} /></div>
                    <div style={{ color: "var(--teal-300)", fontSize: 11.5, marginTop: 4 }}>↑ 23.4%</div>
                  </div>
                  <div style={{ padding: 16, borderRadius: 14, background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.08)" }}>
                    <div style={{ fontSize: 11, color: "rgba(255,255,255,.55)", letterSpacing: ".06em", textTransform: "uppercase" }}>Orders</div>
                    <div style={{ fontFamily: "var(--display)", fontSize: 28, lineHeight: 1, marginTop: 6 }}><Counter to={306} /></div>
                    <div style={{ color: "var(--teal-300)", fontSize: 11.5, marginTop: 4 }}>↑ 14.0%</div>
                  </div>
                  <div style={{ padding: 16, borderRadius: 14, background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.08)" }}>
                    <div style={{ fontSize: 11, color: "rgba(255,255,255,.55)", letterSpacing: ".06em", textTransform: "uppercase" }}>Conv. rate</div>
                    <div style={{ fontFamily: "var(--display)", fontSize: 28, lineHeight: 1, marginTop: 6 }}><Counter to={4.2} decimals={1} suffix="%" /></div>
                    <div style={{ color: "var(--teal-300)", fontSize: 11.5, marginTop: 4 }}>↑ 0.6 pp</div>
                  </div>
                </div>
                <div style={{ background: "rgba(255,255,255,.04)", borderRadius: 14, padding: 16, border: "1px solid rgba(255,255,255,.06)" }}>
                  <div className="row between" style={{ marginBottom: 8 }}>
                    <span style={{ fontSize: 12, color: "rgba(255,255,255,.6)" }}>Revenue trend</span>
                    <span className="mono" style={{ fontSize: 11, color: "rgba(255,255,255,.4)" }}>14d</span>
                  </div>
                  <Sparkline data={D.SERIES_REV} color="#84d6b8" w={520} h={70} />
                </div>
              </div>
              <div className="col gap-12">
                <div style={{ borderRadius: 14, overflow: "hidden", height: 220 }}>
                  <img src={D.PHOTOS.store} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <div style={{ padding: 16, borderRadius: 14, background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.08)", flex: 1 }}>
                  <div className="row between" style={{ marginBottom: 12 }}>
                    <span style={{ fontSize: 12, color: "rgba(255,255,255,.6)" }}>Top items</span>
                    <span className="mono" style={{ fontSize: 11, color: "rgba(255,255,255,.4)" }}>by revenue</span>
                  </div>
                  {[["Walnut wall shelf set", 142, 96], ["Linen weave throw pillow", 412, 64], ["Hand-loomed runner rug", 61, 38]].map((r, i) => (
                    <div key={i} style={{ marginBottom: 8 }}>
                      <div className="row between" style={{ fontSize: 12, marginBottom: 4 }}>
                        <span>{r[0]}</span><span className="mono" style={{ color: "rgba(255,255,255,.5)" }}>{r[1]}</span>
                      </div>
                      <div style={{ height: 4, background: "rgba(255,255,255,.08)", borderRadius: 99 }}>
                        <div style={{ width: r[2] + "%", height: "100%", background: "var(--teal-400)", borderRadius: 99 }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Testimonials */}
      <section style={{ padding: "48px 40px", maxWidth: 1320, margin: "0 auto" }}>
        <Reveal>
          <div className="eyebrow" style={{ marginBottom: 14 }}>Sellers, in their words</div>
          <h2 style={{ fontSize: 48, lineHeight: 1.0, letterSpacing: "-0.025em", maxWidth: 720 }}>
            Stories from the <span className="ital">first hundred</span>.
          </h2>
        </Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, marginTop: 40 }}>
          {[
            { q: "Listed our shelves on Tuesday, sold the first set Wednesday morning. The dashboard just makes sense.", who: "Eli K.", store: "Maple & Oak", img: D.PHOTOS.seller_maple },
            { q: "Payouts arrived in two days, on the dot. We migrated our whole catalog over the weekend.", who: "Marisol P.", store: "Verde Apothecary", img: D.PHOTOS.seller_verde },
            { q: "The product page templates are gorgeous out of the box. We barely had to edit anything.", who: "Devraj S.", store: "Brewhaus", img: D.PHOTOS.seller_brewhaus },
          ].map((t, i) => (
            <Reveal key={i} delay={i * 80}>
              <div className="card" style={{ padding: 28, height: "100%", borderRadius: 20, background: i === 1 ? "var(--ink-900)" : "white", color: i === 1 ? "white" : "var(--ink-900)", borderColor: i === 1 ? "var(--ink-900)" : "var(--ink-100)" }}>
                <span style={{ fontFamily: "var(--display)", fontSize: 56, lineHeight: 0.5, color: i === 1 ? "var(--teal-300)" : "var(--teal-500)" }}>"</span>
                <p style={{ marginTop: 10, fontFamily: "var(--display)", fontSize: 22, lineHeight: 1.3, letterSpacing: "-0.01em" }}>
                  {t.q}
                </p>
                <div className="row gap-12" style={{ marginTop: 24, paddingTop: 20, borderTop: i === 1 ? "1px solid rgba(255,255,255,.12)" : "1px solid var(--ink-100)" }}>
                  <div style={{ width: 40, height: 40, borderRadius: 999, overflow: "hidden", background: "var(--ink-100)" }}>
                    <img src={t.img} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  </div>
                  <div className="col">
                    <span style={{ fontWeight: 600, fontSize: 13, fontFamily: "var(--sans)" }}>{t.who}</span>
                    <span style={{ fontSize: 12, color: i === 1 ? "rgba(255,255,255,.6)" : "var(--ink-500)" }}>{t.store}</span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "64px 40px 96px", maxWidth: 1320, margin: "0 auto" }}>
        <div style={{ padding: "80px 64px", background: "var(--ink-900)", color: "white", borderRadius: 32, position: "relative", overflow: "hidden", textAlign: "center" }}>
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 30% 20%, rgba(88,195,163,.35), transparent 50%), radial-gradient(circle at 80% 80%, rgba(217,152,39,.15), transparent 60%)" }} />
          <div style={{ position: "relative" }}>
            <div className="eyebrow" style={{ color: "var(--teal-300)", marginBottom: 18 }}>Ready when you are</div>
            <h2 style={{ color: "white", fontSize: "clamp(48px, 6vw, 72px)", lineHeight: 1, letterSpacing: "-0.03em", maxWidth: 900, margin: "0 auto" }}>
              Open your store. <span className="ital" style={{ color: "var(--teal-300)" }}>Make something good.</span>
            </h2>
            <p style={{ color: "rgba(255,255,255,.7)", marginTop: 22, fontSize: 17, maxWidth: 540, margin: "22px auto 0" }}>Join the first 100 sellers and lock in launch pricing — forever.</p>
            <div className="row gap-12" style={{ justifyContent: "center", marginTop: 36 }}>
              <button className="btn btn-teal btn-lg" onClick={() => go("seller-onboarding")}>Become a seller <Icon name="arrow" size={16} /></button>
              <button className="btn btn-ghost btn-lg" style={{ color: "white", borderColor: "rgba(255,255,255,.2)" }} onClick={() => go("pricing")}>See pricing</button>
            </div>
          </div>
        </div>
      </section>

      <Footer go={go} />
    </div>
  );
}

function Footer({ go }) {
  return (
    <footer style={{ padding: "32px 40px 48px", borderTop: "1px solid var(--ink-100)", background: "var(--paper)" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1.2fr repeat(4, 1fr)", gap: 28 }}>
        <div>
          <Logo size={28} variant="chip" />
          <p className="muted" style={{ marginTop: 12, fontSize: 12.5, maxWidth: 280 }}>A modern marketplace for independent sellers and curious buyers.</p>
        </div>
        {[
          { h: "Marketplace", l: ["Browse", "Categories", "Featured", "New arrivals"] },
          { h: "Sellers",     l: ["Open a store", "Pricing", "Seller stories", "Help center"] },
          { h: "Company",     l: ["About", "Careers", "Press", "Contact"] },
          { h: "Legal",       l: ["Terms", "Privacy", "Buyer protection", "Cookies"] },
        ].map((g, i) => (
          <div key={i}>
            <div className="strong" style={{ fontSize: 12.5, marginBottom: 10 }}>{g.h}</div>
            <div className="col gap-8" style={{ fontSize: 13, color: "var(--ink-500)" }}>
              {g.l.map(x => <a key={x}>{x}</a>)}
            </div>
          </div>
        ))}
      </div>
      <div className="row between" style={{ maxWidth: 1280, margin: "32px auto 0", paddingTop: 18, borderTop: "1px solid var(--ink-100)", color: "var(--ink-500)", fontSize: 12 }}>
        <span>© 2026 Bazaratty, Inc.</span>
        <span className="row gap-12"><a>English</a><a>Privacy</a><a>Terms</a></span>
      </div>
    </footer>
  );
}

// ---------- Product card ----------
function ProductCard({ p, go }) {
  const [fav, setFav] = useState(false);
  const photo = window.DATA.PRODUCT_PHOTO[p.id];
  const cat = window.DATA.CATEGORIES.find(c => c.id === p.cat) || { hue: 162 };
  return (
    <div className="card lift" style={{ padding: 0, cursor: "pointer", overflow: "hidden", borderRadius: 16 }} onClick={() => go("pdp", { product: p })}>
      <div className="zoomy" style={{ position: "relative", borderRadius: 0 }}>
        <Imagery ratio="1/1" tone="tinted" hue={cat.hue} radius={0} src={photo} alt={p.title} />
        <button
          onClick={(e) => { e.stopPropagation(); setFav(!fav); }}
          style={{
            position: "absolute", top: 12, right: 12, zIndex: 2,
            width: 34, height: 34, borderRadius: 999, background: "rgba(255,255,255,.96)",
            border: "1px solid rgba(0,0,0,.06)", display: "flex", alignItems: "center", justifyContent: "center",
            color: fav ? "#c64a5b" : "var(--ink-700)",
            backdropFilter: "blur(6px)",
            boxShadow: "0 2px 8px rgba(0,0,0,.06)",
          }}
          aria-label="Favorite"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill={fav ? "#c64a5b" : "none"} stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.5-7 10-7 10z" />
          </svg>
        </button>
        {p.tag && (
          <span style={{ position: "absolute", left: 12, top: 12, zIndex: 2, background: "var(--ink-900)", color: "white", padding: "5px 10px", borderRadius: 999, fontSize: 11, fontWeight: 500, letterSpacing: ".02em" }}>
            {p.tag}
          </span>
        )}
      </div>
      <div style={{ padding: "14px 14px 16px" }}>
        <div className="row between" style={{ alignItems: "flex-start", gap: 10 }}>
          <div className="col gap-2" style={{ minWidth: 0 }}>
            <span className="eyebrow ink" style={{ fontSize: 10 }}>{p.seller}</span>
            <span style={{ fontFamily: "var(--display)", fontSize: 18, lineHeight: 1.2, color: "var(--ink-900)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", maxWidth: 220, marginTop: 3 }}>{p.title}</span>
          </div>
          <span className="tnum" style={{ fontFamily: "var(--sans)", fontWeight: 600, fontSize: 14 }}>${p.price}</span>
        </div>
        <div className="row gap-6" style={{ marginTop: 10 }}>
          <Stars value={p.rating} size={11} />
          <span className="muted tnum" style={{ fontSize: 11.5 }}>{p.rating} · {p.reviews}</span>
        </div>
      </div>
    </div>
  );
}

// ---------- Marketplace homepage ----------
function Marketplace({ go }) {
  const D = window.DATA;
  return (
    <div className="fadein">
      <PublicNav go={go} active="market" />
      {/* Hero strip */}
      <div style={{ padding: "32px 40px 0", maxWidth: 1280, margin: "0 auto" }}>
        <div className="card" style={{ padding: 28, background: "var(--teal-50)", borderColor: "var(--teal-100)", display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 24 }}>
          <div className="col gap-12" style={{ justifyContent: "center" }}>
            <span className="chip teal" style={{ alignSelf: "flex-start" }}>Spring edit</span>
            <h2 style={{ fontSize: 30, lineHeight: 1.1 }}>Quietly considered objects for the warmer months.</h2>
            <p className="muted" style={{ maxWidth: 480 }}>Curated picks from independent makers. Free shipping over $80.</p>
            <div className="row gap-10"><button className="btn btn-primary">Shop edit</button><button className="btn btn-ghost">Browse all</button></div>
          </div>
          <Imagery ratio="auto" tone="teal" label="campaign" radius={20} style={{ height: 220 }} />
        </div>
      </div>

      {/* Category strip */}
      <div style={{ padding: "28px 40px 0", maxWidth: 1280, margin: "0 auto" }}>
        <div className="row gap-12 scrollx" style={{ paddingBottom: 8 }}>
          {D.CATEGORIES.map(c => (
            <button key={c.id} className="card lift" style={{ padding: "10px 14px", display: "inline-flex", gap: 10, alignItems: "center" }}>
              <span style={{ width: 28, height: 28, borderRadius: 8, background: `hsl(${c.hue},60%,94%)`, border: `1px solid hsl(${c.hue},50%,88%)` }} />
              <span className="strong" style={{ fontSize: 13 }}>{c.name}</span>
              <span className="muted tnum" style={{ fontSize: 11.5 }}>{c.count}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Bestsellers */}
      <section style={{ padding: "32px 40px", maxWidth: 1280, margin: "0 auto" }}>
        <SectionHead kicker="Bestsellers" title="What everyone's buying" right={<button className="btn btn-ghost btn-sm" onClick={() => go("search")}>View all <Icon name="arrow" size={13} /></button>} />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 18, marginTop: 22 }}>
          {D.PRODUCTS.slice(0, 4).map(p => <ProductCard key={p.id} p={p} go={go} />)}
        </div>
      </section>

      {/* New arrivals */}
      <section style={{ padding: "8px 40px 32px", maxWidth: 1280, margin: "0 auto" }}>
        <SectionHead kicker="New" title="Just listed" right={<button className="btn btn-ghost btn-sm">See all</button>} />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 18, marginTop: 22 }}>
          {D.PRODUCTS.slice(4, 8).map(p => <ProductCard key={p.id} p={p} go={go} />)}
        </div>
      </section>

      <Footer go={go} />
    </div>
  );
}

function PublicNav({ go, active }) {
  const link = (id, label) => (
    <a onClick={() => go(id)} style={{ cursor: "pointer", color: active === id ? "var(--ink-900)" : "var(--ink-600)", fontWeight: active === id ? 600 : 500 }}>{label}</a>
  );
  return (
    <div className="row between" style={{ padding: "16px 40px", borderBottom: "1px solid var(--ink-100)", background: "rgba(255,255,255,.85)", backdropFilter: "blur(8px)", position: "sticky", top: 0, zIndex: 20 }}>
      <div className="row gap-32">
        <Logo size={28} variant="chip" />
        <div className="row gap-20" style={{ fontSize: 13.5 }}>
          {link("market", "Marketplace")}
          {link("categories", "Categories")}
          {link("about", "About")}
          {link("pricing", "Pricing")}
          {link("contact", "Contact")}
        </div>
      </div>
      <div className="row gap-12">
        <div className="row" style={{ position: "relative", width: 320 }}>
          <span style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", color: "var(--ink-400)" }}><Icon name="search" size={16} /></span>
          <input className="input" placeholder="Search products, sellers, categories…" style={{ paddingLeft: 36, height: 38 }} onClick={() => go("search")} readOnly />
        </div>
        <button className="btn btn-ghost btn-sm" aria-label="wishlist"><Icon name="heart" size={15} /></button>
        <button className="btn btn-ghost btn-sm" aria-label="cart"><Icon name="cart" size={15} /></button>
        <button className="btn btn-primary btn-sm" onClick={() => go("login")}>Sign in</button>
      </div>
    </div>
  );
}

// ---------- Categories page ----------
function CategoriesPage({ go }) {
  return (
    <div className="fadein">
      <PublicNav go={go} active="categories" />
      <section style={{ padding: "40px 40px 16px", maxWidth: 1280, margin: "0 auto" }}>
        <SectionHead kicker="All categories" title="Find your next favorite thing" sub="Eight curated departments and counting." />
      </section>
      <section style={{ padding: "8px 40px 56px", maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 18 }}>
        {window.DATA.CATEGORIES.map(c => (
          <button key={c.id} onClick={() => go("search")} className="card lift" style={{ padding: 0, overflow: "hidden", textAlign: "left" }}>
            <Imagery ratio="4/3" tone="tinted" hue={c.hue} radius={0} label={c.id} />
            <div style={{ padding: 14 }}>
              <div className="strong">{c.name}</div>
              <div className="muted tnum" style={{ fontSize: 12, marginTop: 2 }}>{c.count.toLocaleString()} items · 240+ sellers</div>
            </div>
          </button>
        ))}
      </section>
      <Footer go={go} />
    </div>
  );
}

// ---------- Search / Listing page ----------
function SearchPage({ go }) {
  const D = window.DATA;
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState("all");
  const [priceMax, setPriceMax] = useState(250);
  const [sort, setSort] = useState("relevance");

  const filtered = useMemo(() => {
    let xs = D.PRODUCTS.slice();
    if (cat !== "all") xs = xs.filter(p => p.cat === cat);
    if (query) xs = xs.filter(p => (p.title + " " + p.seller).toLowerCase().includes(query.toLowerCase()));
    xs = xs.filter(p => p.price <= priceMax);
    if (sort === "price-asc") xs.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") xs.sort((a, b) => b.price - a.price);
    if (sort === "rating") xs.sort((a, b) => b.rating - a.rating);
    return xs;
  }, [query, cat, priceMax, sort]);

  return (
    <div className="fadein">
      <PublicNav go={go} active="market" />
      <section style={{ padding: "32px 40px", maxWidth: 1280, margin: "0 auto" }}>
        <div className="row between" style={{ marginBottom: 18, flexWrap: "wrap", gap: 12 }}>
          <div>
            <div className="muted" style={{ fontSize: 12 }}>Marketplace · Search</div>
            <h2 style={{ fontSize: 24, marginTop: 4 }}>{filtered.length} results {query && <span className="muted" style={{ fontWeight: 400 }}>for &ldquo;{query}&rdquo;</span>}</h2>
          </div>
          <div className="row gap-10">
            <select className="input" style={{ width: 180, height: 38 }} value={sort} onChange={e => setSort(e.target.value)}>
              <option value="relevance">Sort: Relevance</option>
              <option value="price-asc">Price: low to high</option>
              <option value="price-desc">Price: high to low</option>
              <option value="rating">Top rated</option>
            </select>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "260px 1fr", gap: 24 }}>
          {/* Filters */}
          <aside className="card" style={{ padding: 18, alignSelf: "flex-start", position: "sticky", top: 80 }}>
            <div className="row between"><span className="strong" style={{ fontSize: 13 }}>Filters</span><button className="muted" style={{ fontSize: 12 }}>Reset</button></div>
            <div className="divider" style={{ margin: "12px 0" }} />
            <label className="label">Search</label>
            <input className="input" placeholder="What are you after?" value={query} onChange={e => setQuery(e.target.value)} />

            <div style={{ marginTop: 18 }}>
              <div className="label">Category</div>
              <div className="col gap-6">
                {[{ id: "all", name: "All categories" }, ...D.CATEGORIES].map(c => (
                  <label key={c.id} className="row gap-8" style={{ cursor: "pointer" }}>
                    <input type="radio" name="cat" checked={cat === c.id} onChange={() => setCat(c.id)} />
                    <span style={{ fontSize: 13 }}>{c.name}</span>
                  </label>
                ))}
              </div>
            </div>

            <div style={{ marginTop: 18 }}>
              <div className="row between"><span className="label" style={{ marginBottom: 0 }}>Max price</span><span className="mono tnum" style={{ fontSize: 12 }}>${priceMax}</span></div>
              <input type="range" min="20" max="250" step="5" value={priceMax} onChange={e => setPriceMax(+e.target.value)} style={{ width: "100%", accentColor: "var(--teal-500)" }} />
            </div>

            <div style={{ marginTop: 18 }}>
              <div className="label">Rating</div>
              <div className="col gap-6">
                {[5,4,3].map(r => (
                  <label key={r} className="row gap-8" style={{ cursor: "pointer" }}>
                    <input type="checkbox" /> <Stars value={r} /> <span className="muted" style={{ fontSize: 12 }}>&amp; up</span>
                  </label>
                ))}
              </div>
            </div>

            <div style={{ marginTop: 18 }}>
              <div className="label">Shipping</div>
              <label className="row gap-8" style={{ cursor: "pointer" }}><input type="checkbox" /> <span style={{ fontSize: 13 }}>Free shipping</span></label>
              <label className="row gap-8" style={{ cursor: "pointer", marginTop: 6 }}><input type="checkbox" /> <span style={{ fontSize: 13 }}>2-day delivery</span></label>
            </div>
          </aside>

          {/* Results */}
          <div>
            {filtered.length === 0 ? (
              <Empty icon="search" title="No matches yet" body="Try widening your filters or clearing the search." action={<button className="btn btn-teal" onClick={() => { setQuery(""); setCat("all"); setPriceMax(250); }}>Reset filters</button>} />
            ) : (
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18 }}>
                {filtered.map(p => <ProductCard key={p.id} p={p} go={go} />)}
              </div>
            )}
          </div>
        </div>
      </section>
      <Footer go={go} />
    </div>
  );
}

// ---------- PDP ----------
function ProductDetail({ go, product }) {
  const p = product || window.DATA.PRODUCTS[0];
  const cat = window.DATA.CATEGORIES.find(c => c.id === p.cat) || { hue: 162 };
  const [activeImg, setActiveImg] = useState(0);
  const [qty, setQty] = useState(1);
  const [tab, setTab] = useState("description");
  const related = window.DATA.PRODUCTS.filter(x => x.id !== p.id).slice(0, 4);
  return (
    <div className="fadein">
      <PublicNav go={go} active="market" />
      <section style={{ padding: "20px 40px 0", maxWidth: 1280, margin: "0 auto" }}>
        <div className="row gap-6" style={{ fontSize: 12.5, color: "var(--ink-500)" }}>
          <a onClick={() => go("market")} style={{ cursor: "pointer" }}>Marketplace</a>
          <Icon name="chev" size={12} />
          <a onClick={() => go("categories")} style={{ cursor: "pointer" }}>{(window.DATA.CATEGORIES.find(c => c.id === p.cat) || {}).name}</a>
          <Icon name="chev" size={12} />
          <span className="strong">{p.title}</span>
        </div>
      </section>

      <section style={{ padding: "20px 40px 32px", maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1.05fr 1fr", gap: 36 }}>
        {/* Gallery */}
        <div className="col gap-12">
          <Imagery ratio="1/1" tone="tinted" hue={cat.hue} radius={20} label={`view ${activeImg + 1}`} />
          <div className="row gap-10">
            {[0,1,2,3].map(i => (
              <button key={i} onClick={() => setActiveImg(i)} style={{ width: 80, height: 80, borderRadius: 12, padding: 0, border: i === activeImg ? "2px solid var(--ink-900)" : "1px solid var(--ink-100)", overflow: "hidden", background: "transparent" }}>
                <Imagery ratio="1/1" tone="tinted" hue={cat.hue + i * 8} radius={0} />
              </button>
            ))}
          </div>
        </div>

        {/* Info */}
        <div className="col gap-12">
          <div className="row gap-10">
            <span className="chip teal">{(window.DATA.CATEGORIES.find(c => c.id === p.cat) || {}).name}</span>
            {p.tag && <span className="chip">{p.tag}</span>}
          </div>
          <h1 style={{ fontSize: 32, lineHeight: 1.15 }}>{p.title}</h1>
          <div className="row gap-12" style={{ alignItems: "center" }}>
            <Stars value={p.rating} size={15} />
            <span className="strong tnum">{p.rating}</span>
            <span className="muted tnum">· {p.reviews} reviews</span>
          </div>
          <div className="row gap-10" style={{ marginTop: 4 }}>
            <span className="avatar">{p.seller.split(" ").map(s => s[0]).join("").slice(0,2)}</span>
            <div className="col">
              <span className="muted" style={{ fontSize: 12 }}>Sold by</span>
              <span className="strong" style={{ fontSize: 13 }}>{p.seller} · <a style={{ color: "var(--teal-700)", cursor: "pointer" }}>Visit store</a></span>
            </div>
          </div>

          <div className="row gap-12" style={{ alignItems: "baseline", marginTop: 6 }}>
            <span className="tnum" style={{ fontFamily: "var(--display)", fontWeight: 700, fontSize: 36, letterSpacing: "-0.02em" }}>${p.price}</span>
            <span className="muted" style={{ textDecoration: "line-through" }} >${(p.price * 1.18).toFixed(0)}</span>
            <span className="chip teal">Save 15%</span>
          </div>

          <div className="card" style={{ padding: 16 }}>
            <div className="label">Color</div>
            <div className="row gap-8">
              {["#0e1411","#58c3a3","#d6f2e6","#c9d2cd"].map((c, i) => (
                <button key={i} style={{ width: 28, height: 28, borderRadius: 999, background: c, border: i === 0 ? "2px solid var(--ink-900)" : "1px solid var(--ink-200)", padding: 0 }} />
              ))}
            </div>
            <div className="label" style={{ marginTop: 14 }}>Size</div>
            <div className="row gap-8">
              {["S","M","L","XL"].map((s, i) => (
                <button key={s} className={"btn " + (i === 1 ? "btn-primary btn-sm" : "btn-ghost btn-sm")} style={{ minWidth: 44, justifyContent: "center" }}>{s}</button>
              ))}
            </div>
          </div>

          <div className="row gap-10" style={{ marginTop: 4 }}>
            <div className="row" style={{ border: "1px solid var(--ink-200)", borderRadius: 999, height: 44 }}>
              <button onClick={() => setQty(Math.max(1, qty - 1))} style={{ width: 38, height: 44 }}>−</button>
              <span className="tnum" style={{ width: 32, textAlign: "center" }}>{qty}</span>
              <button onClick={() => setQty(qty + 1)} style={{ width: 38, height: 44 }}>+</button>
            </div>
            <button className="btn btn-teal btn-lg grow" style={{ justifyContent: "center" }}><Icon name="cart" size={16} /> Add to cart · ${p.price * qty}</button>
            <button className="btn btn-ghost btn-lg" aria-label="favorite"><Icon name="heart" size={16} /></button>
          </div>

          <div className="row gap-16" style={{ color: "var(--ink-500)", fontSize: 12.5, marginTop: 6 }}>
            <span className="row gap-6"><Icon name="truck" size={14} /> Free shipping over $80</span>
            <span className="row gap-6"><Icon name="shield" size={14} /> Buyer protection</span>
            <span className="row gap-6"><Icon name="package" size={14} /> 30-day returns</span>
          </div>

          {/* Tabs */}
          <div style={{ marginTop: 18 }}>
            <div className="row gap-20" style={{ borderBottom: "1px solid var(--ink-100)" }}>
              {["description","specs","reviews"].map(t => (
                <button key={t} onClick={() => setTab(t)} style={{ padding: "10px 0", textTransform: "capitalize", fontWeight: 600, fontSize: 13, color: tab === t ? "var(--ink-900)" : "var(--ink-500)", borderBottom: tab === t ? "2px solid var(--ink-900)" : "2px solid transparent" }}>
                  {t} {t === "reviews" && <span className="muted">({p.reviews})</span>}
                </button>
              ))}
            </div>
            <div style={{ padding: "16px 0", color: "var(--ink-700)", lineHeight: 1.6 }}>
              {tab === "description" && <p>Designed in small batches, this {p.title.toLowerCase()} balances utility with quiet detail. Each piece is finished by hand and shipped in recyclable packaging from the seller's studio.</p>}
              {tab === "specs" && (
                <ul className="col gap-6" style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  <li className="row between"><span className="muted">Material</span><span className="strong">Sustainably sourced</span></li>
                  <li className="row between"><span className="muted">Dimensions</span><span className="strong">42 × 28 × 6 cm</span></li>
                  <li className="row between"><span className="muted">Weight</span><span className="strong">1.4 kg</span></li>
                  <li className="row between"><span className="muted">Origin</span><span className="strong">Made in Portugal</span></li>
                </ul>
              )}
              {tab === "reviews" && (
                <div className="col gap-12">
                  {[{ who: "Eli K.", text: "Even better in person. Shipping was fast and the packaging was thoughtful.", r: 5 },
                    { who: "Marisol P.", text: "Exactly as described. The seller answered my question in under an hour.", r: 5 },
                    { who: "Devraj S.", text: "Lovely object, slightly smaller than I expected — check the dimensions!", r: 4 },
                  ].map((rv, i) => (
                    <div key={i} className="card" style={{ padding: 16 }}>
                      <div className="row gap-10" style={{ alignItems: "center" }}>
                        <span className="avatar">{rv.who.split(" ").map(s => s[0]).join("")}</span>
                        <div className="col"><span className="strong" style={{ fontSize: 13 }}>{rv.who}</span><Stars value={rv.r} /></div>
                      </div>
                      <p style={{ marginTop: 8 }}>{rv.text}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "32px 40px 64px", maxWidth: 1280, margin: "0 auto" }}>
        <SectionHead kicker="You might also like" title="Related items" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 18, marginTop: 22 }}>
          {related.map(rp => <ProductCard key={rp.id} p={rp} go={go} />)}
        </div>
      </section>
      <Footer go={go} />
    </div>
  );
}

// ---------- About / Contact / Pricing (compact) ----------
function AboutPage({ go }) {
  return (
    <div className="fadein">
      <PublicNav go={go} active="about" />
      <section style={{ padding: "64px 40px", maxWidth: 1024, margin: "0 auto" }}>
        <span className="chip teal">Our story</span>
        <h1 style={{ fontSize: 48, lineHeight: 1.05, marginTop: 14 }}>A marketplace for the next 100 brands you'll love.</h1>
        <p className="muted" style={{ fontSize: 17, lineHeight: 1.6, marginTop: 18, maxWidth: 720 }}>Bazaratty was built by makers, for makers. We believe a marketplace should feel like a great street of independent shops — beautiful, trustworthy, and full of personality.</p>
      </section>
      <section style={{ padding: "0 40px 48px", maxWidth: 1024, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18 }}>
        {[
          { h: "Independent first", b: "Every seller on Bazaratty is independently owned. We highlight the maker, not just the product." },
          { h: "Transparent pricing", b: "Flat 6% commission. No tier games, no hidden upsells. Pay only when you sell." },
          { h: "Long-term trust",    b: "Buyer protection on every order. Real humans on support. Reviews you can trust." },
        ].map(c => (
          <div key={c.h} className="card" style={{ padding: 22 }}>
            <div className="strong" style={{ fontSize: 16 }}>{c.h}</div>
            <p className="muted" style={{ marginTop: 8 }}>{c.b}</p>
          </div>
        ))}
      </section>
      <Footer go={go} />
    </div>
  );
}

function ContactPage({ go }) {
  return (
    <div className="fadein">
      <PublicNav go={go} active="contact" />
      <section style={{ padding: "56px 40px", maxWidth: 960, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
        <div>
          <span className="chip teal">Get in touch</span>
          <h1 style={{ fontSize: 36, lineHeight: 1.1, marginTop: 14 }}>We respond within a business day.</h1>
          <p className="muted" style={{ marginTop: 12 }}>For seller onboarding, partnership ideas, or buyer support — drop us a line and we'll route it to the right person.</p>
          <div className="col gap-12" style={{ marginTop: 24 }}>
            <div className="row gap-10"><Icon name="mail" /> <span>hello@bazaratty.com</span></div>
            <div className="row gap-10"><Icon name="globe" /> <span>Remote-first · HQ in Lisbon</span></div>
          </div>
        </div>
        <div className="card" style={{ padding: 22 }}>
          <div className="label">Name</div>
          <input className="input" placeholder="Your name" />
          <div className="label" style={{ marginTop: 12 }}>Email</div>
          <input className="input" placeholder="you@example.com" />
          <div className="label" style={{ marginTop: 12 }}>Topic</div>
          <select className="input"><option>General question</option><option>Become a seller</option><option>Order help</option></select>
          <div className="label" style={{ marginTop: 12 }}>Message</div>
          <textarea className="input" rows="4" placeholder="Tell us a little…"></textarea>
          <button className="btn btn-primary" style={{ marginTop: 14, width: "100%", justifyContent: "center" }}>Send message</button>
        </div>
      </section>
      <Footer go={go} />
    </div>
  );
}

function PricingPage({ go }) {
  const tiers = [
    { name: "Starter",  price: "$0",  per: "/month", best: false, fee: "8% per sale", lines: ["Up to 25 listings", "Standard storefront", "2-day payouts", "Email support"] },
    { name: "Studio",   price: "$29", per: "/month", best: true,  fee: "6% per sale", lines: ["Unlimited listings", "Custom storefront", "Priority payouts", "Promo tools", "Live chat support"] },
    { name: "Scale",    price: "$99", per: "/month", best: false, fee: "4% per sale", lines: ["Multi-store", "Wholesale tools", "API access", "Dedicated manager"] },
  ];
  return (
    <div className="fadein">
      <PublicNav go={go} active="pricing" />
      <section style={{ padding: "56px 40px 16px", maxWidth: 1024, margin: "0 auto", textAlign: "center" }}>
        <span className="chip teal">Pricing</span>
        <h1 style={{ fontSize: 44, lineHeight: 1.05, marginTop: 14 }}>Pay only when you grow.</h1>
        <p className="muted" style={{ fontSize: 16, marginTop: 12, maxWidth: 600, marginLeft: "auto", marginRight: "auto" }}>Simple, transparent plans for sellers at every stage. Switch anytime.</p>
      </section>
      <section style={{ padding: "32px 40px 64px", maxWidth: 1080, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18 }}>
        {tiers.map(t => (
          <div key={t.name} className="card" style={{ padding: 24, position: "relative", border: t.best ? "1px solid var(--ink-900)" : undefined, boxShadow: t.best ? "var(--shadow-md)" : undefined }}>
            {t.best && <span style={{ position: "absolute", top: -12, left: 24, background: "var(--ink-900)", color: "white", padding: "4px 10px", borderRadius: 999, fontSize: 11, fontWeight: 600 }}>Most popular</span>}
            <div className="strong" style={{ fontSize: 16 }}>{t.name}</div>
            <div className="row gap-6" style={{ alignItems: "baseline", marginTop: 10 }}>
              <span style={{ fontFamily: "var(--display)", fontWeight: 700, fontSize: 38 }}>{t.price}</span>
              <span className="muted">{t.per}</span>
            </div>
            <div className="muted" style={{ fontSize: 12.5, marginTop: 4 }}>{t.fee}</div>
            <button className={"btn " + (t.best ? "btn-primary" : "btn-ghost")} style={{ width: "100%", justifyContent: "center", marginTop: 18 }}>Choose {t.name}</button>
            <div className="divider" style={{ margin: "18px 0" }} />
            <div className="col gap-8">
              {t.lines.map(l => <div key={l} className="row gap-8" style={{ fontSize: 13 }}><Icon name="check" size={14} /> <span>{l}</span></div>)}
            </div>
          </div>
        ))}
      </section>
      <Footer go={go} />
    </div>
  );
}

Object.assign(window, { Landing, Marketplace, CategoriesPage, SearchPage, ProductDetail, AboutPage, ContactPage, PricingPage, ProductCard, PublicNav, Footer });
