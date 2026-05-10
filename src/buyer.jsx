// Buyer dashboard screens.

const BUYER_NAV = [
  { section: "Account" },
  { id: "buyer-dash",     label: "Overview",      icon: "home" },
  { id: "buyer-orders",   label: "Orders",        icon: "package", badge: "5" },
  { id: "buyer-wishlist", label: "Wishlist",      icon: "heart", badge: "12" },
  { id: "buyer-messages", label: "Messages",      icon: "mail",  badge: "1" },
  { id: "buyer-notifs",   label: "Notifications", icon: "bell" },
  { section: "Settings" },
  { id: "buyer-profile",  label: "Profile",       icon: "user" },
  { id: "buyer-payment",  label: "Payment",       icon: "wallet" },
];

function BuyerShell({ active, go, children, title, search }) {
  return (
    <div className="app-shell">
      <Sidebar
        active={active}
        onPick={go}
        items={BUYER_NAV}
        headerExtra={
          <div className="card" style={{ margin: "10px 4px 14px", padding: 10, background: "var(--teal-50)", borderColor: "var(--teal-100)" }}>
            <div className="row gap-10">
              <span className="avatar">EK</span>
              <div className="col" style={{ minWidth: 0 }}>
                <span className="strong" style={{ fontSize: 13 }}>Eli Khan</span>
                <span className="muted" style={{ fontSize: 11 }}>Buyer · Lisbon</span>
              </div>
            </div>
          </div>
        }
        footer={
          <div className="col gap-4" style={{ paddingTop: 10, borderTop: "1px solid var(--ink-100)", marginTop: 10 }}>
            <button className="nav-link" onClick={() => go("seller-dash")}><Icon name="store" size={16} /> <span className="grow" style={{ textAlign: "left" }}>Switch to selling</span></button>
            <button className="nav-link" onClick={() => go("landing")}><Icon name="globe" size={16} /> <span className="grow" style={{ textAlign: "left" }}>Public site</span></button>
          </div>
        }
      />
      <main>
        <TopBar
          title={title}
          search={search}
          right={<>
            <button className="btn btn-ghost btn-sm" onClick={() => go("buyer-notifs")}><Icon name="bell" size={15} /></button>
            <button className="btn btn-ghost btn-sm" onClick={() => go("buyer-wishlist")}><Icon name="heart" size={15} /></button>
            <button className="btn btn-primary btn-sm" onClick={() => go("market")}><Icon name="cart" size={14} /> Shop</button>
          </>}
        />
        <div className="page fadein">{children}</div>
      </main>
    </div>
  );
}

function BuyerOverview({ go }) {
  const D = window.DATA;
  return (
    <BuyerShell active="buyer-dash" go={go} title="Overview" search="Search orders, products, sellers…">
      <div className="row between" style={{ marginBottom: 22 }}>
        <div>
          <h1 style={{ fontSize: 28 }}>Welcome back, Eli.</h1>
          <p className="muted" style={{ marginTop: 4 }}>You have 1 order in transit and 12 saved items.</p>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14 }}>
        <Stat label="Orders this year"  value="14"   delta="+3" series={D.SERIES_ORD} />
        <Stat label="Spent this year"   value="$1,284" delta="+12%" series={D.SERIES_REV} />
        <Stat label="Saved sellers"     value="8"    delta="+2" series={[3,4,4,5,5,6,6,7,7,7,8,8,8,8]} />
        <Stat label="Reward points"     value="240"  delta="+40" series={[100,120,150,170,180,200,200,220,220,230,230,235,238,240]} />
      </div>

      <div style={{ marginTop: 24, display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 18 }}>
        <div className="card" style={{ padding: 22 }}>
          <div className="row between"><div><div className="strong">In transit</div><div className="muted" style={{ fontSize: 12 }}>ORD-7790 · Brewhaus</div></div><button className="btn btn-ghost btn-sm" onClick={() => go("buyer-orders")}>Track <Icon name="arrow" size={13} /></button></div>
          <div className="row gap-14" style={{ marginTop: 16 }}>
            <Imagery ratio="1/1" tone="tinted" hue={162} radius={14} style={{ width: 96, height: 96 }} />
            <div className="col gap-6 grow">
              <span className="strong">Ceramic pour-over kettle</span>
              <span className="muted" style={{ fontSize: 12 }}>Estimated arrival · Thu, May 14</span>
              <div className="bar" style={{ marginTop: 6 }}><i style={{ width: "65%" }} /></div>
              <div className="row between" style={{ fontSize: 11.5, color: "var(--ink-500)", marginTop: 6 }}>
                <span>Packed</span><span className="strong">Out for delivery</span><span>Arriving</span>
              </div>
            </div>
          </div>
        </div>

        <div className="card" style={{ padding: 22 }}>
          <div className="row between"><span className="strong">Recommended for you</span><a className="muted" style={{ fontSize: 12, cursor: "pointer" }} onClick={() => go("market")}>See all</a></div>
          <div className="col gap-12" style={{ marginTop: 14 }}>
            {D.PRODUCTS.slice(2, 5).map(p => (
              <button key={p.id} className="row gap-12 lift" style={{ padding: 8, borderRadius: 12, textAlign: "left" }} onClick={() => go("pdp", { product: p })}>
                <Imagery ratio="1/1" tone="tinted" hue={(D.CATEGORIES.find(c => c.id === p.cat)||{}).hue} radius={10} style={{ width: 56, height: 56 }} />
                <div className="col gap-4 grow"><span className="strong" style={{ fontSize: 13 }}>{p.title}</span><span className="muted" style={{ fontSize: 11.5 }}>{p.seller}</span></div>
                <span className="strong tnum" style={{ fontSize: 13 }}>${p.price}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div style={{ marginTop: 18 }}>
        <SectionHead kicker="History" title="Recent orders" right={<button className="btn btn-ghost btn-sm" onClick={() => go("buyer-orders")}>View all</button>} />
        <div className="card" style={{ marginTop: 14, overflow: "hidden" }}>
          <table className="tbl">
            <thead><tr><th>Order</th><th>Item</th><th>Seller</th><th>Total</th><th>Status</th><th></th></tr></thead>
            <tbody>
              {D.ORDERS_BUYER.slice(0,4).map(o => (
                <tr key={o.id}>
                  <td className="mono tnum" style={{ fontSize: 12.5 }}>{o.id}<br/><span className="muted" style={{ fontSize: 11 }}>{o.date}</span></td>
                  <td className="strong">{o.product}</td>
                  <td>{o.seller}</td>
                  <td className="tnum strong">${o.total}</td>
                  <td><StatusPill status={o.status} /></td>
                  <td style={{ textAlign: "right" }}><button className="btn btn-ghost btn-sm">Details</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </BuyerShell>
  );
}

function BuyerOrders({ go }) {
  const D = window.DATA;
  const [filter, setFilter] = useState("all");
  const filtered = filter === "all" ? D.ORDERS_BUYER : D.ORDERS_BUYER.filter(o => o.status.toLowerCase().includes(filter));
  return (
    <BuyerShell active="buyer-orders" go={go} title="Orders" search="Search orders…">
      <div className="row between" style={{ marginBottom: 16 }}>
        <h1 style={{ fontSize: 26 }}>Orders</h1>
        <div className="row gap-8">
          {[
            { id: "all", l: "All" }, { id: "transit", l: "In transit" },
            { id: "delivered", l: "Delivered" }, { id: "returned", l: "Returned" },
          ].map(t => (
            <button key={t.id} className={"btn btn-sm " + (filter === t.id ? "btn-primary" : "btn-ghost")} onClick={() => setFilter(t.id)}>{t.l}</button>
          ))}
        </div>
      </div>
      <div className="card" style={{ overflow: "hidden" }}>
        <table className="tbl">
          <thead><tr><th>Order</th><th>Item</th><th>Seller</th><th>Total</th><th>Status</th><th></th></tr></thead>
          <tbody>
            {filtered.map(o => (
              <tr key={o.id}>
                <td className="mono tnum" style={{ fontSize: 12.5 }}>{o.id}<br/><span className="muted" style={{ fontSize: 11 }}>{o.date}</span></td>
                <td><div className="row gap-10"><Imagery ratio="1/1" tone="tinted" hue={Math.random()*360} radius={8} style={{ width: 36, height: 36 }} /><span className="strong">{o.product}</span></div></td>
                <td>{o.seller}</td>
                <td className="tnum strong">${o.total}</td>
                <td><StatusPill status={o.status} /></td>
                <td style={{ textAlign: "right" }}>
                  <button className="btn btn-ghost btn-sm">Track</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </BuyerShell>
  );
}

function BuyerWishlist({ go }) {
  const items = window.DATA.PRODUCTS.slice(0, 6);
  return (
    <BuyerShell active="buyer-wishlist" go={go} title="Wishlist" search="Search saved items…">
      <div className="row between" style={{ marginBottom: 16 }}>
        <h1 style={{ fontSize: 26 }}>Saved for later</h1>
        <button className="btn btn-ghost btn-sm">Move all to cart</button>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 18 }}>
        {items.map(p => <ProductCard key={p.id} p={p} go={go} />)}
      </div>
    </BuyerShell>
  );
}

function BuyerMessages({ go }) {
  const M = window.DATA.MESSAGES;
  const [active, setActive] = useState(M[0].id);
  const cur = M.find(m => m.id === active);
  return (
    <BuyerShell active="buyer-messages" go={go} title="Messages" search="Search conversations…">
      <h1 style={{ fontSize: 26, marginBottom: 16 }}>Messages</h1>
      <div className="card" style={{ overflow: "hidden", display: "grid", gridTemplateColumns: "300px 1fr", height: 560 }}>
        <div style={{ borderRight: "1px solid var(--ink-100)", overflow: "auto" }}>
          {M.map(m => (
            <button key={m.id} onClick={() => setActive(m.id)} style={{ width: "100%", padding: "14px 16px", borderBottom: "1px solid var(--ink-100)", textAlign: "left", background: active === m.id ? "var(--ink-50)" : "transparent" }}>
              <div className="row between"><span className="strong" style={{ fontSize: 13 }}>{m.who}</span><span className="muted" style={{ fontSize: 11 }}>{m.time}</span></div>
              <div className="row between" style={{ marginTop: 4 }}>
                <span className="muted" style={{ fontSize: 12, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", maxWidth: 200 }}>{m.last}</span>
                {m.unread && <span style={{ width: 7, height: 7, borderRadius: 99, background: "var(--teal-500)" }} />}
              </div>
            </button>
          ))}
        </div>
        <div className="col" style={{ height: "100%" }}>
          <div className="row between" style={{ padding: 16, borderBottom: "1px solid var(--ink-100)" }}>
            <div className="row gap-10"><span className="avatar">{cur.who.split(" ").map(s => s[0]).join("").slice(0,2)}</span><div className="col"><span className="strong" style={{ fontSize: 13 }}>{cur.who}</span><span className="muted" style={{ fontSize: 11 }}>Usually replies in 2 hours</span></div></div>
            <button className="btn btn-ghost btn-sm">View store</button>
          </div>
          <div className="grow" style={{ padding: 24, overflow: "auto", display: "flex", flexDirection: "column", gap: 12, background: "var(--bg)" }}>
            <div style={{ alignSelf: "flex-start", maxWidth: 360, padding: "10px 14px", background: "var(--paper)", border: "1px solid var(--ink-100)", borderRadius: "14px 14px 14px 4px" }}>Hi Eli! Yes, the kettle is fully induction-compatible. Let me know if you'd like a specific color.</div>
            <div style={{ alignSelf: "flex-end", maxWidth: 360, padding: "10px 14px", background: "var(--ink-900)", color: "white", borderRadius: "14px 14px 4px 14px" }}>Perfect, I'll go with the matte black. Thanks!</div>
            <div style={{ alignSelf: "flex-start", maxWidth: 360, padding: "10px 14px", background: "var(--paper)", border: "1px solid var(--ink-100)", borderRadius: "14px 14px 14px 4px" }}>Great choice — shipping today.</div>
          </div>
          <div style={{ padding: 14, borderTop: "1px solid var(--ink-100)" }}>
            <div className="row gap-8">
              <input className="input grow" placeholder="Write a message…" />
              <button className="btn btn-primary">Send</button>
            </div>
          </div>
        </div>
      </div>
    </BuyerShell>
  );
}

function BuyerNotifs({ go }) {
  const N = window.DATA.NOTIFICATIONS;
  const ic = { ok: "check", info: "sparkle", msg: "mail" };
  return (
    <BuyerShell active="buyer-notifs" go={go} title="Notifications">
      <div className="row between" style={{ marginBottom: 16 }}><h1 style={{ fontSize: 26 }}>Notifications</h1><button className="btn btn-ghost btn-sm">Mark all read</button></div>
      <div className="card">
        {N.map((n, i) => (
          <div key={n.id} className="row gap-14" style={{ padding: 18, borderBottom: i < N.length - 1 ? "1px solid var(--ink-100)" : 0 }}>
            <span style={{ width: 36, height: 36, borderRadius: 10, background: "var(--teal-50)", color: "var(--teal-700)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}><Icon name={ic[n.kind]} size={16} /></span>
            <div className="col grow">
              <div className="row between"><span className="strong" style={{ fontSize: 13.5 }}>{n.title}</span><span className="muted" style={{ fontSize: 11.5 }}>{n.time}</span></div>
              <span className="muted" style={{ fontSize: 13, marginTop: 2 }}>{n.body}</span>
            </div>
          </div>
        ))}
      </div>
    </BuyerShell>
  );
}

function BuyerProfile({ go }) {
  return (
    <BuyerShell active="buyer-profile" go={go} title="Profile">
      <h1 style={{ fontSize: 26, marginBottom: 18 }}>Profile settings</h1>
      <div style={{ display: "grid", gridTemplateColumns: "260px 1fr", gap: 18 }}>
        <div className="card" style={{ padding: 18, alignSelf: "flex-start" }}>
          <div className="col" style={{ alignItems: "center", textAlign: "center" }}>
            <span className="avatar lg" style={{ width: 80, height: 80, fontSize: 26 }}>EK</span>
            <div className="strong" style={{ marginTop: 12 }}>Eli Khan</div>
            <div className="muted" style={{ fontSize: 12 }}>Member since Mar 2026</div>
            <button className="btn btn-ghost btn-sm" style={{ marginTop: 12 }}>Change photo</button>
          </div>
        </div>
        <div className="card" style={{ padding: 22 }}>
          <div className="strong">Personal information</div>
          <div className="divider" style={{ margin: "12px 0 18px" }} />
          <div className="row gap-12">
            <div className="grow"><label className="label">First name</label><input className="input" defaultValue="Eli" /></div>
            <div className="grow"><label className="label">Last name</label><input className="input" defaultValue="Khan" /></div>
          </div>
          <div className="row gap-12" style={{ marginTop: 14 }}>
            <div className="grow"><label className="label">Email</label><input className="input" defaultValue="el@maple-oak.co" /></div>
            <div className="grow"><label className="label">Phone</label><input className="input" defaultValue="+351 912 345 678" /></div>
          </div>
          <div style={{ marginTop: 14 }}><label className="label">Shipping address</label><input className="input" defaultValue="Rua das Flores 21, 1200-194 Lisbon, Portugal" /></div>
          <div className="row between" style={{ marginTop: 22 }}>
            <button className="btn btn-ghost">Cancel</button>
            <button className="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </BuyerShell>
  );
}

Object.assign(window, { BuyerOverview, BuyerOrders, BuyerWishlist, BuyerMessages, BuyerNotifs, BuyerProfile });
