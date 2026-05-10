// Auth screens: Login, Signup, Forgot, Seller onboarding (multi-step).

function AuthShell({ children, side }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: "100vh" }}>
      <div style={{ padding: "32px 48px", display: "flex", flexDirection: "column" }}>
        <Logo size={32} variant="chip" />
        <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ width: "100%", maxWidth: 400 }}>{children}</div>
        </div>
        <div className="muted" style={{ fontSize: 12 }}>© 2026 Bazaratty</div>
      </div>
      <div style={{ background: "var(--ink-900)", color: "white", padding: 36, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 80% 20%, rgba(88,195,163,.4), transparent 50%), radial-gradient(circle at 10% 90%, rgba(88,195,163,.18), transparent 60%)" }} />
        <div style={{ position: "relative", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          {side}
        </div>
      </div>
    </div>
  );
}

function Login({ go }) {
  return (
    <AuthShell
      side={
        <>
          <span className="chip teal" style={{ alignSelf: "flex-start", background: "rgba(88,195,163,.15)", color: "var(--teal-300)", borderColor: "rgba(88,195,163,.25)" }}>Welcome back</span>
          <div>
            <h1 style={{ color: "white", fontSize: 40, lineHeight: 1.1, maxWidth: 420 }}>Pick up where you left off.</h1>
            <p style={{ color: "rgba(255,255,255,.65)", marginTop: 14, maxWidth: 420 }}>Track orders, message sellers, and manage your store from a single, calm dashboard.</p>
          </div>
          <div className="card" style={{ padding: 16, background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.1)", color: "white", maxWidth: 360 }}>
            <div className="row gap-10"><Stars value={5} /><span style={{ fontSize: 12, opacity: .8 }}>Maple &amp; Oak · seller</span></div>
            <p style={{ marginTop: 8, fontSize: 14 }}>"Listed our shelves on Tuesday, sold the first set Wednesday."</p>
          </div>
        </>
      }
    >
      <h1 style={{ fontSize: 28 }}>Sign in</h1>
      <p className="muted" style={{ marginTop: 8 }}>New here? <a onClick={() => go("signup")} style={{ color: "var(--teal-700)", cursor: "pointer", fontWeight: 600 }}>Create an account</a></p>
      <div className="col gap-12" style={{ marginTop: 22 }}>
        <button className="btn btn-ghost" style={{ width: "100%", justifyContent: "center" }}>Continue with Google</button>
        <button className="btn btn-ghost" style={{ width: "100%", justifyContent: "center" }}>Continue with Apple</button>
      </div>
      <div className="row gap-12" style={{ margin: "20px 0", alignItems: "center" }}>
        <div className="divider grow" /><span className="muted" style={{ fontSize: 12 }}>or with email</span><div className="divider grow" />
      </div>
      <div className="col gap-12">
        <div><label className="label">Email</label><input className="input" placeholder="you@bazaratty.com" defaultValue="el@maple-oak.co" /></div>
        <div>
          <div className="row between"><label className="label">Password</label><a onClick={() => go("forgot")} style={{ fontSize: 12, color: "var(--teal-700)", cursor: "pointer", fontWeight: 500 }}>Forgot?</a></div>
          <input className="input" type="password" defaultValue="••••••••••" />
        </div>
        <label className="row gap-8" style={{ fontSize: 13, cursor: "pointer" }}><input type="checkbox" defaultChecked /> Keep me signed in</label>
        <button className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }} onClick={() => go("buyer-dash")}>Sign in</button>
      </div>
    </AuthShell>
  );
}

function Signup({ go }) {
  const [role, setRole] = useState("buyer");
  return (
    <AuthShell
      side={
        <>
          <span className="chip teal" style={{ alignSelf: "flex-start", background: "rgba(88,195,163,.15)", color: "var(--teal-300)", borderColor: "rgba(88,195,163,.25)" }}>Free forever for buyers</span>
          <div>
            <h1 style={{ color: "white", fontSize: 40, lineHeight: 1.1, maxWidth: 420 }}>Buy and sell smarter with Bazaratty.</h1>
            <p style={{ color: "rgba(255,255,255,.65)", marginTop: 14, maxWidth: 420 }}>One account, every role. Switch between buyer and seller dashboards anytime.</p>
          </div>
          <div className="row gap-16" style={{ color: "rgba(255,255,255,.7)", fontSize: 12.5 }}>
            <span className="row gap-6"><Icon name="shield" size={14} /> Buyer protection</span>
            <span className="row gap-6"><Icon name="wallet" size={14} /> 2-day payouts</span>
            <span className="row gap-6"><Icon name="sparkle" size={14} /> 6% commission</span>
          </div>
        </>
      }
    >
      <h1 style={{ fontSize: 28 }}>Create your account</h1>
      <p className="muted" style={{ marginTop: 8 }}>Already with us? <a onClick={() => go("login")} style={{ color: "var(--teal-700)", cursor: "pointer", fontWeight: 600 }}>Sign in</a></p>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: 22 }}>
        {[
          { id: "buyer", t: "I'm here to shop", b: "Browse the marketplace", icon: "cart" },
          { id: "seller",t: "I'm here to sell", b: "Open a storefront",      icon: "store" },
        ].map(r => (
          <button
            key={r.id}
            onClick={() => setRole(r.id)}
            className="card"
            style={{ padding: 14, textAlign: "left", border: role === r.id ? "1.5px solid var(--ink-900)" : "1px solid var(--ink-100)", background: role === r.id ? "var(--ink-50)" : "var(--paper)" }}
          >
            <div className="row between"><span style={{ width: 32, height: 32, borderRadius: 10, background: "var(--teal-50)", color: "var(--teal-700)", display: "flex", alignItems: "center", justifyContent: "center" }}><Icon name={r.icon} size={16} /></span>
              <span style={{ width: 16, height: 16, borderRadius: 99, border: "1.5px solid " + (role === r.id ? "var(--ink-900)" : "var(--ink-200)"), display: "flex", alignItems: "center", justifyContent: "center" }}>
                {role === r.id && <span style={{ width: 8, height: 8, background: "var(--ink-900)", borderRadius: 99 }} />}
              </span>
            </div>
            <div className="strong" style={{ marginTop: 10, fontSize: 13.5 }}>{r.t}</div>
            <div className="muted" style={{ fontSize: 12 }}>{r.b}</div>
          </button>
        ))}
      </div>

      <div className="col gap-12" style={{ marginTop: 18 }}>
        <div className="row gap-10">
          <div className="grow"><label className="label">First name</label><input className="input" placeholder="Eli" /></div>
          <div className="grow"><label className="label">Last name</label><input className="input" placeholder="Khan" /></div>
        </div>
        <div><label className="label">Email</label><input className="input" placeholder="you@bazaratty.com" /></div>
        <div><label className="label">Password</label><input className="input" type="password" placeholder="At least 10 characters" /></div>
        <button className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }} onClick={() => go(role === "seller" ? "seller-onboarding" : "buyer-dash")}>
          Create account <Icon name="arrow" size={14} />
        </button>
        <p className="muted" style={{ fontSize: 11.5, textAlign: "center" }}>By continuing you agree to our Terms &amp; Privacy.</p>
      </div>
    </AuthShell>
  );
}

function Forgot({ go }) {
  return (
    <AuthShell side={<><div /><div><h1 style={{ color: "white", fontSize: 40, lineHeight: 1.1 }}>Let's get you back in.</h1><p style={{ color: "rgba(255,255,255,.65)", marginTop: 12 }}>We'll email you a secure link to reset your password.</p></div><div /></>}>
      <h1 style={{ fontSize: 28 }}>Reset your password</h1>
      <p className="muted" style={{ marginTop: 8 }}>Enter the email you used to sign up.</p>
      <div className="col gap-12" style={{ marginTop: 22 }}>
        <div><label className="label">Email</label><input className="input" placeholder="you@bazaratty.com" /></div>
        <button className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }} onClick={() => go("login")}>Send reset link</button>
        <a onClick={() => go("login")} className="muted" style={{ textAlign: "center", cursor: "pointer", fontSize: 13 }}>Back to sign in</a>
      </div>
    </AuthShell>
  );
}

// ---------- Seller Onboarding (4 steps) ----------
function SellerOnboarding({ go }) {
  const [step, setStep] = useState(0);
  const steps = [
    { t: "Tell us about your store", s: "We'll personalize your dashboard." },
    { t: "Add your first product",   s: "You can edit details later." },
    { t: "Connect payouts",          s: "Get paid every two business days." },
    { t: "You're ready to launch",   s: "Welcome to Bazaratty." },
  ];
  const cur = steps[step];

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)", display: "flex", flexDirection: "column" }}>
      <div className="row between" style={{ padding: "20px 40px", borderBottom: "1px solid var(--ink-100)", background: "var(--paper)" }}>
        <Logo size={28} variant="chip" />
        <a onClick={() => go("landing")} className="muted" style={{ fontSize: 13, cursor: "pointer" }}>Save &amp; exit</a>
      </div>

      <div style={{ flex: 1, display: "grid", gridTemplateColumns: "260px 1fr", maxWidth: 1100, margin: "32px auto", width: "100%", gap: 32, padding: "0 40px" }}>
        {/* Step rail */}
        <aside className="col gap-6">
          {steps.map((s, i) => (
            <div key={i} className="row gap-12" style={{ padding: "10px 12px", borderRadius: 10, background: i === step ? "var(--ink-50)" : "transparent" }}>
              <span style={{
                width: 26, height: 26, borderRadius: 99, fontSize: 12, fontWeight: 600,
                display: "flex", alignItems: "center", justifyContent: "center",
                background: i < step ? "var(--teal-400)" : i === step ? "var(--ink-900)" : "var(--ink-100)",
                color: i <= step ? "white" : "var(--ink-500)"
              }}>{i < step ? <Icon name="check" size={13} /> : i + 1}</span>
              <div className="col">
                <span className="strong" style={{ fontSize: 13 }}>{s.t}</span>
                <span className="muted" style={{ fontSize: 11.5 }}>{s.s}</span>
              </div>
            </div>
          ))}
        </aside>

        {/* Step content */}
        <div>
          <span className="muted mono" style={{ fontSize: 11 }}>STEP {step + 1} / {steps.length}</span>
          <h1 style={{ fontSize: 32, marginTop: 6, lineHeight: 1.1 }}>{cur.t}</h1>
          <p className="muted" style={{ marginTop: 8 }}>{cur.s}</p>

          <div className="card" style={{ padding: 28, marginTop: 22 }}>
            {step === 0 && (
              <div className="col gap-14">
                <div className="row gap-12">
                  <div className="grow"><label className="label">Store name</label><input className="input" defaultValue="Maple &amp; Oak" /></div>
                  <div style={{ width: 200 }}><label className="label">Handle</label><input className="input" defaultValue="@maple-oak" /></div>
                </div>
                <div><label className="label">What do you sell?</label>
                  <div className="row gap-8" style={{ flexWrap: "wrap" }}>
                    {window.DATA.CATEGORIES.map(c => (
                      <button key={c.id} className="chip" style={{ cursor: "pointer" }}>{c.name}</button>
                    ))}
                  </div>
                </div>
                <div><label className="label">One-line description</label><input className="input" placeholder="e.g. Hand-finished wood goods from Lisbon." /></div>
                <div className="row gap-12">
                  <div className="grow"><label className="label">Country</label><select className="input"><option>Portugal</option><option>United Kingdom</option><option>United States</option></select></div>
                  <div className="grow"><label className="label">Currency</label><select className="input"><option>EUR €</option><option>USD $</option><option>GBP £</option></select></div>
                </div>
              </div>
            )}
            {step === 1 && (
              <div className="col gap-14">
                <div className="row gap-12">
                  <div className="grow"><label className="label">Title</label><input className="input" defaultValue="Walnut wall shelf set" /></div>
                  <div style={{ width: 140 }}><label className="label">Price</label><input className="input" defaultValue="$118" /></div>
                </div>
                <div><label className="label">Photos</label>
                  <div className="row gap-10">
                    {[0,1,2,3].map(i => (
                      <div key={i} style={{ width: 90, height: 90, borderRadius: 12, border: "1px dashed var(--ink-200)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--ink-400)", background: i === 0 ? "var(--teal-50)" : "transparent" }}>
                        {i === 0 ? <Imagery ratio="1/1" tone="tinted" hue={162} radius={11} /> : <Icon name="plus" size={18} />}
                      </div>
                    ))}
                  </div>
                </div>
                <div><label className="label">Description</label><textarea className="input" rows="3" defaultValue="Solid walnut, hand-oiled finish. Ships in two pieces with hidden brackets."></textarea></div>
              </div>
            )}
            {step === 2 && (
              <div className="col gap-14">
                <div className="card" style={{ padding: 16, background: "var(--teal-50)", borderColor: "var(--teal-100)" }}>
                  <div className="strong">Payouts every two business days</div>
                  <div className="muted" style={{ fontSize: 12.5, marginTop: 4 }}>We'll deposit your earnings (less platform fees) directly to your bank.</div>
                </div>
                <div><label className="label">Account holder</label><input className="input" defaultValue="Eli Khan" /></div>
                <div className="row gap-12">
                  <div className="grow"><label className="label">IBAN</label><input className="input" defaultValue="PT50 0002 0123 1234 5678 9015 4" /></div>
                  <div style={{ width: 160 }}><label className="label">SWIFT</label><input className="input" defaultValue="BCOMPTPL" /></div>
                </div>
                <div><label className="label">Tax ID</label><input className="input" defaultValue="PT 123 456 789" /></div>
              </div>
            )}
            {step === 3 && (
              <div className="col" style={{ alignItems: "center", textAlign: "center", padding: "24px 0" }}>
                <div style={{ width: 96, height: 96, borderRadius: 28, background: "var(--teal-50)", color: "var(--teal-700)", display: "flex", alignItems: "center", justifyContent: "center" }}><Icon name="check" size={36} /></div>
                <h2 style={{ marginTop: 18, fontSize: 24 }}>Your store is ready.</h2>
                <p className="muted" style={{ marginTop: 8, maxWidth: 420 }}>Customize your storefront, add more products, and start selling. Your dashboard is live.</p>
              </div>
            )}
          </div>

          <div className="row between" style={{ marginTop: 22 }}>
            <button className="btn btn-ghost" disabled={step === 0} onClick={() => setStep(Math.max(0, step - 1))} style={{ opacity: step === 0 ? .4 : 1 }}>Back</button>
            {step < steps.length - 1
              ? <button className="btn btn-primary" onClick={() => setStep(step + 1)}>Continue <Icon name="arrow" size={14} /></button>
              : <button className="btn btn-teal" onClick={() => go("seller-dash")}>Open dashboard <Icon name="arrow" size={14} /></button>}
          </div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { Login, Signup, Forgot, SellerOnboarding, AuthShell });
