// Seller dashboard screens.

const SELLER_NAV = [
  { section: "Store" },
  { id: "seller-dash",     label: "Analytics",        icon: "chart" },
  { id: "seller-products", label: "Products",         icon: "grid" },
  { id: "seller-add",      label: "Add product",      icon: "plus" },
  { id: "seller-orders",   label: "Orders",           icon: "package", badge: "7" },
  { id: "seller-revenue",  label: "Revenue",          icon: "dollar" },
  { id: "seller-store",    label: "Storefront",       icon: "store" },
  { id: "seller-msgs",     label: "Customers",        icon: "mail",  badge: "2" },
  { section: "Account" },
  { id: "seller-payouts",  label: "Payouts",          icon: "wallet" },
  { id: "seller-settings", label: "Settings",         icon: "settings" },
];

function SellerShell({ active, go, children, title, search }) {
  return (
    <div className="app-shell">
      <Sidebar
        active={active} onPick={go} items={SELLER_NAV}
        headerExtra={
          <div className="card" style={{ margin: "10px 4px 14px", padding: 10 }}>
            <div className="row gap-10">
              <div style={{ width: 32, height: 32, borderRadius: 9, background: "var(--ink-900)", color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 700, fontFamily: "var(--display)" }}>M&amp;O</div>
              <div className="col" style={{ minWidth: 0 }}>
                <span className="strong" style={{ fontSize: 13 }}>Maple &amp; Oak</span>
                <span className="muted" style={{ fontSize: 11 }}>Seller · Studio plan</span>
              </div>
            </div>
          </div>
        }
        footer={
          <div className="col gap-4" style={{ paddingTop: 10, borderTop: "1px solid var(--ink-100)" }}>
            <button className="nav-link" onClick={() => go("buyer-dash")}><Icon name="cart" size={16} /> <span className="grow" style={{ textAlign: "left" }}>Switch to buying</span></button>
            <button className="nav-link" onClick={() => go("landing")}><Icon name="globe" size={16} /> <span className="grow" style={{ textAlign: "left" }}>Public site</span></button>
          </div>
        }
      />
      <main>
        <TopBar title={title} search={search} right={
          <>
            <span className="chip teal"><span style={{ width: 6, height: 6, borderRadius: 99, background: "var(--teal-500)" }} /> Store live</span>
            <button className="btn btn-ghost btn-sm"><Icon name="bell" size={15} /></button>
            <button className="btn btn-primary btn-sm" onClick={() => go("seller-add")}><Icon name="plus" size={14} /> Add product</button>
          </>
        } />
        <div className="page fadein">{children}</div>
      </main>
    </div>
  );
}

function SellerAnalytics({ go }) {
  const D = window.DATA;
  return (
    <SellerShell active="seller-dash" go={go} title="Analytics" search="Search products, orders, customers…">
      <div className="row between" style={{ marginBottom: 22 }}>
        <div>
          <h1 style={{ fontSize: 28 }}>Good morning, Eli.</h1>
          <p className="muted" style={{ marginTop: 4 }}>Here's how Maple &amp; Oak performed in the last 14 days.</p>
        </div>
        <div className="row gap-8">
          <select className="input" style={{ height: 38, width: 140 }}><option>Last 14 days</option><option>Last 30 days</option><option>This quarter</option></select>
          <button className="btn btn-ghost btn-sm">Export</button>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14 }}>
        <Stat label="Revenue"     value="$12,418" delta="+18%" series={D.SERIES_REV} />
        <Stat label="Orders"      value="142"     delta="+9%"  series={D.SERIES_ORD} />
        <Stat label="Page views"  value="6,210"   delta="+22%" series={D.SERIES_PVW} />
        <Stat label="Conversion"  value="2.8%"    delta="+0.4" series={[1.4,1.6,1.8,1.7,2.0,2.1,2.2,2.3,2.5,2.4,2.6,2.7,2.8,2.8]} />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr", gap: 18, marginTop: 22 }}>
        <div className="card" style={{ padding: 22 }}>
          <div className="row between"><div><div className="strong">Revenue trend</div><div className="muted" style={{ fontSize: 12 }}>USD · last 14 days</div></div>
            <div className="row gap-8"><span className="chip teal">Revenue</span><span className="chip">Orders</span></div>
          </div>
          <div style={{ marginTop: 14 }}>
            <LineChart series={D.SERIES_REV} />
          </div>
        </div>
        <div className="card" style={{ padding: 22 }}>
          <div className="strong">Top categories</div>
          <div className="row" style={{ marginTop: 14, alignItems: "center", gap: 18 }}>
            <Donut
              slices={[
                { value: 52, color: "var(--teal-400)" },
                { value: 28, color: "var(--ink-900)" },
                { value: 12, color: "var(--teal-200)" },
                { value: 8,  color: "var(--ink-300)" },
              ]}
              label={{ value: "$12.4k", sub: "REVENUE" }}
            />
            <div className="col gap-10 grow">
              {[
                { c: "var(--teal-400)", l: "Home & Living", v: "52%" },
                { c: "var(--ink-900)",  l: "Furniture",     v: "28%" },
                { c: "var(--teal-200)", l: "Decor",         v: "12%" },
                { c: "var(--ink-300)",  l: "Other",         v: "8%" },
              ].map(x => (
                <div key={x.l} className="row between"><div className="row gap-8"><span style={{ width: 8, height: 8, borderRadius: 99, background: x.c }} /><span style={{ fontSize: 13 }}>{x.l}</span></div><span className="strong tnum" style={{ fontSize: 13 }}>{x.v}</span></div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18, marginTop: 18 }}>
        <div className="card" style={{ padding: 22 }}>
          <div className="row between"><div className="strong">Orders per day</div><a className="muted" style={{ fontSize: 12, cursor: "pointer" }} onClick={() => go("seller-orders")}>View orders</a></div>
          <div style={{ marginTop: 14 }}><BarChart data={D.SERIES_ORD} /></div>
        </div>
        <div className="card" style={{ padding: 22 }}>
          <div className="strong">Top products</div>
          <div className="col gap-10" style={{ marginTop: 14 }}>
            {D.SELLER_PRODUCTS.slice(0,4).map((p,i) => (
              <div key={p.id} className="row gap-12">
                <span className="mono muted" style={{ fontSize: 11, width: 18 }}>0{i+1}</span>
                <Imagery ratio="1/1" tone="tinted" hue={162 + i*20} radius={8} style={{ width: 40, height: 40 }} />
                <div className="col gap-4 grow"><span className="strong" style={{ fontSize: 13 }}>{p.name}</span>
                  <div className="bar"><i style={{ width: (p.sold / 412 * 100) + "%" }} /></div>
                </div>
                <span className="strong tnum" style={{ fontSize: 13 }}>{p.sold}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SellerShell>
  );
}

function SellerProducts({ go }) {
  const D = window.DATA.SELLER_PRODUCTS;
  return (
    <SellerShell active="seller-products" go={go} title="Products" search="Search products…">
      <div className="row between" style={{ marginBottom: 16 }}>
        <h1 style={{ fontSize: 26 }}>Products</h1>
        <div className="row gap-10">
          <button className="btn btn-ghost btn-sm"><Icon name="filter" size={14} /> Filters</button>
          <button className="btn btn-primary btn-sm" onClick={() => go("seller-add")}><Icon name="plus" size={14} /> New product</button>
        </div>
      </div>
      <div className="card" style={{ overflow: "hidden" }}>
        <table className="tbl">
          <thead><tr><th style={{ width: 28 }}><input type="checkbox" /></th><th>Product</th><th>SKU</th><th>Price</th><th>Stock</th><th>Sold</th><th>Status</th><th></th></tr></thead>
          <tbody>
            {D.map((p, i) => (
              <tr key={p.id}>
                <td><input type="checkbox" /></td>
                <td><div className="row gap-10"><Imagery ratio="1/1" tone="tinted" hue={162 + i*22} radius={8} style={{ width: 40, height: 40 }} /><div className="col"><span className="strong">{p.name}</span><span className="muted" style={{ fontSize: 11 }}>Home &amp; Living</span></div></div></td>
                <td className="mono muted" style={{ fontSize: 12.5 }}>{p.id}</td>
                <td className="tnum strong">${p.price}</td>
                <td className="tnum">{p.stock}</td>
                <td className="tnum">{p.sold}</td>
                <td><StatusPill status={p.status} /></td>
                <td style={{ textAlign: "right" }}>
                  <div className="row gap-6" style={{ justifyContent: "flex-end" }}>
                    <button className="btn btn-ghost btn-sm"><Icon name="edit" size={13} /></button>
                    <button className="btn btn-ghost btn-sm"><Icon name="trash" size={13} /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </SellerShell>
  );
}

function SellerAddProduct({ go }) {
  return (
    <SellerShell active="seller-add" go={go} title="Add product">
      <div className="row between" style={{ marginBottom: 18 }}>
        <h1 style={{ fontSize: 26 }}>Add a new product</h1>
        <div className="row gap-10">
          <button className="btn btn-ghost" onClick={() => go("seller-products")}>Cancel</button>
          <button className="btn btn-ghost">Save draft</button>
          <button className="btn btn-primary" onClick={() => go("seller-products")}>Publish</button>
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: 18 }}>
        <div className="col gap-18">
          <div className="card" style={{ padding: 22 }}>
            <div className="strong">Basics</div>
            <div className="divider" style={{ margin: "12px 0 18px" }} />
            <label className="label">Title</label><input className="input" placeholder="e.g. Walnut wall shelf set" />
            <label className="label" style={{ marginTop: 12 }}>Description</label><textarea className="input" rows="4" placeholder="Tell buyers what makes it special…"></textarea>
            <div className="row gap-12" style={{ marginTop: 12 }}>
              <div className="grow"><label className="label">Category</label><select className="input">{window.DATA.CATEGORIES.map(c => <option key={c.id}>{c.name}</option>)}</select></div>
              <div style={{ width: 200 }}><label className="label">Tags</label><input className="input" placeholder="walnut, shelf, wall" /></div>
            </div>
          </div>
          <div className="card" style={{ padding: 22 }}>
            <div className="strong">Photos</div>
            <div className="divider" style={{ margin: "12px 0 18px" }} />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 10 }}>
              {[0,1,2,3,4,5,6,7].map(i => (
                <div key={i} style={{ aspectRatio: "1/1", borderRadius: 12, border: i < 3 ? "1px solid var(--ink-100)" : "1px dashed var(--ink-200)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--ink-400)", overflow: "hidden" }}>
                  {i < 3 ? <Imagery ratio="1/1" tone="tinted" hue={162 + i*30} radius={11} /> : <Icon name="plus" size={18} />}
                </div>
              ))}
            </div>
          </div>
          <div className="card" style={{ padding: 22 }}>
            <div className="strong">Variants</div>
            <div className="divider" style={{ margin: "12px 0 18px" }} />
            <table className="tbl"><thead><tr><th>Variant</th><th>Price</th><th>Stock</th><th>SKU</th></tr></thead><tbody>
              {[{v: "Natural / Small", p: 118, s: 12, k: "WS-NS"}, {v: "Natural / Large", p: 168, s: 8, k: "WS-NL"}, {v: "Black / Small", p: 128, s: 14, k: "WS-BS"}].map(r => (
                <tr key={r.k}><td className="strong">{r.v}</td><td className="tnum">${r.p}</td><td className="tnum">{r.s}</td><td className="mono muted" style={{ fontSize: 12 }}>{r.k}</td></tr>
              ))}
            </tbody></table>
            <button className="btn btn-ghost btn-sm" style={{ marginTop: 12 }}><Icon name="plus" size={13} /> Add variant</button>
          </div>
        </div>
        <div className="col gap-18">
          <div className="card" style={{ padding: 22 }}>
            <div className="strong">Pricing</div>
            <div className="divider" style={{ margin: "12px 0 18px" }} />
            <div className="row gap-12">
              <div className="grow"><label className="label">Price</label><input className="input" placeholder="$0.00" defaultValue="$118" /></div>
              <div className="grow"><label className="label">Compare at</label><input className="input" placeholder="$0.00" /></div>
            </div>
            <label className="row gap-8" style={{ marginTop: 12, fontSize: 13 }}><input type="checkbox" defaultChecked /> Charge tax</label>
          </div>
          <div className="card" style={{ padding: 22 }}>
            <div className="strong">Inventory</div>
            <div className="divider" style={{ margin: "12px 0 18px" }} />
            <div className="row gap-12">
              <div className="grow"><label className="label">SKU</label><input className="input" defaultValue="SP-01" /></div>
              <div className="grow"><label className="label">Stock</label><input className="input" defaultValue="24" /></div>
            </div>
            <label className="row gap-8" style={{ marginTop: 12, fontSize: 13 }}><input type="checkbox" /> Continue selling when out of stock</label>
          </div>
          <div className="card" style={{ padding: 22 }}>
            <div className="strong">Shipping</div>
            <div className="divider" style={{ margin: "12px 0 18px" }} />
            <div className="row gap-12">
              <div className="grow"><label className="label">Weight</label><input className="input" defaultValue="1.4 kg" /></div>
              <div className="grow"><label className="label">Origin</label><input className="input" defaultValue="Portugal" /></div>
            </div>
          </div>
        </div>
      </div>
    </SellerShell>
  );
}

function SellerOrders({ go }) {
  const D = window.DATA.ORDERS_SELLER;
  return (
    <SellerShell active="seller-orders" go={go} title="Orders" search="Search by order, customer, product…">
      <div className="row between" style={{ marginBottom: 16 }}>
        <h1 style={{ fontSize: 26 }}>Orders</h1>
        <div className="row gap-8">
          {["All","Awaiting ship","Shipped","Delivered","Refunded"].map((t,i) => <button key={t} className={"btn btn-sm " + (i === 1 ? "btn-primary" : "btn-ghost")}>{t}</button>)}
        </div>
      </div>
      <div className="card" style={{ overflow: "hidden" }}>
        <table className="tbl">
          <thead><tr><th>Order</th><th>Customer</th><th>Product</th><th>Qty</th><th>Total</th><th>Status</th><th></th></tr></thead>
          <tbody>
            {D.map(o => (
              <tr key={o.id}>
                <td className="mono tnum" style={{ fontSize: 12.5 }}>{o.id}<br/><span className="muted" style={{ fontSize: 11 }}>{o.date}</span></td>
                <td><div className="row gap-10"><span className="avatar">{o.buyer.split(" ").map(s => s[0]).join("")}</span><span className="strong">{o.buyer}</span></div></td>
                <td>{o.product}</td>
                <td className="tnum">{o.qty}</td>
                <td className="tnum strong">${o.total}</td>
                <td><StatusPill status={o.status} /></td>
                <td style={{ textAlign: "right" }}>
                  <button className="btn btn-ghost btn-sm">{o.status === "Awaiting ship" ? "Ship" : "View"}</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </SellerShell>
  );
}

function SellerRevenue({ go }) {
  const D = window.DATA;
  return (
    <SellerShell active="seller-revenue" go={go} title="Revenue">
      <div className="row between" style={{ marginBottom: 18 }}><h1 style={{ fontSize: 26 }}>Revenue</h1>
        <div className="row gap-8"><select className="input" style={{ height: 38, width: 140 }}><option>This quarter</option><option>This year</option></select></div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14 }}>
        <Stat label="Gross revenue" value="$38,920" delta="+22%" series={D.SERIES_REV} />
        <Stat label="Net payout"    value="$36,587" delta="+21%" series={D.SERIES_REV.map(v => v*0.94)} />
        <Stat label="Avg order"     value="$87.42"  delta="+3%"  series={[78,80,82,81,82,84,85,84,86,86,87,87,87,87.4]} />
        <Stat label="Refunds"       value="$420"    delta="-12%" series={[80,75,70,68,60,55,52,50,48,45,42,40,42,42]} />
      </div>
      <div className="card" style={{ marginTop: 18, padding: 22 }}>
        <div className="strong">Revenue · last 14 days</div>
        <div style={{ marginTop: 14 }}><LineChart series={D.SERIES_REV} /></div>
      </div>
      <div className="card" style={{ marginTop: 18, padding: 22 }}>
        <div className="row between"><div className="strong">Recent payouts</div><a className="muted" style={{ fontSize: 12, cursor: "pointer" }}>View all</a></div>
        <table className="tbl" style={{ marginTop: 8 }}>
          <thead><tr><th>Reference</th><th>Date</th><th>Method</th><th>Amount</th><th>Status</th></tr></thead>
          <tbody>
            {[
              { ref: "PAY-3041", d: "May 8",  m: "Bank transfer · ··15 4", a: "$2,148", s: "Complete" },
              { ref: "PAY-3032", d: "May 6",  m: "Bank transfer · ··15 4", a: "$1,892", s: "Complete" },
              { ref: "PAY-3018", d: "May 4",  m: "Bank transfer · ··15 4", a: "$2,560", s: "Complete" },
              { ref: "PAY-3007", d: "May 2",  m: "Bank transfer · ··15 4", a: "$1,420", s: "Complete" },
            ].map(p => (
              <tr key={p.ref}>
                <td className="mono tnum" style={{ fontSize: 12.5 }}>{p.ref}</td>
                <td>{p.d}</td>
                <td>{p.m}</td>
                <td className="tnum strong">{p.a}</td>
                <td><StatusPill status={p.s} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </SellerShell>
  );
}

function SellerStorefront({ go }) {
  const [accent, setAccent] = useState("#58c3a3");
  const [layout, setLayout] = useState("editorial");
  return (
    <SellerShell active="seller-store" go={go} title="Storefront">
      <div className="row between" style={{ marginBottom: 18 }}><h1 style={{ fontSize: 26 }}>Customize storefront</h1>
        <div className="row gap-10"><button className="btn btn-ghost">Preview</button><button className="btn btn-primary">Publish changes</button></div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "320px 1fr", gap: 18 }}>
        <div className="card" style={{ padding: 22, alignSelf: "flex-start" }}>
          <div className="strong">Theme</div>
          <div className="divider" style={{ margin: "12px 0 18px" }} />
          <label className="label">Accent color</label>
          <div className="row gap-8">
            {["#58c3a3","#0e1411","#ec7a52","#5e7ce2","#b08bd9"].map(c => (
              <button key={c} onClick={() => setAccent(c)} style={{ width: 32, height: 32, borderRadius: 999, background: c, border: c === accent ? "2px solid var(--ink-900)" : "1px solid var(--ink-200)" }} />
            ))}
          </div>
          <label className="label" style={{ marginTop: 18 }}>Layout</label>
          <div className="col gap-8">
            {[{ id: "editorial", l: "Editorial — large hero" }, { id: "grid", l: "Grid — product first" }, { id: "lookbook", l: "Lookbook — long-scroll" }].map(o => (
              <label key={o.id} className="row gap-8 card" style={{ padding: 10, cursor: "pointer", border: layout === o.id ? "1.5px solid var(--ink-900)" : "1px solid var(--ink-100)" }}>
                <input type="radio" checked={layout === o.id} onChange={() => setLayout(o.id)} /><span style={{ fontSize: 13 }}>{o.l}</span>
              </label>
            ))}
          </div>
          <label className="label" style={{ marginTop: 18 }}>Tagline</label>
          <input className="input" defaultValue="Hand-finished wood goods, made in Lisbon." />
        </div>
        <div className="card" style={{ padding: 0, overflow: "hidden" }}>
          <div style={{ padding: "10px 14px", borderBottom: "1px solid var(--ink-100)", background: "var(--ink-50)" }} className="row gap-6">
            <span style={{ width: 10, height: 10, borderRadius: 99, background: "#ed6a5e" }} /><span style={{ width: 10, height: 10, borderRadius: 99, background: "#f5bf4f" }} /><span style={{ width: 10, height: 10, borderRadius: 99, background: "#62c554" }} />
            <span className="mono muted" style={{ fontSize: 11.5, marginLeft: 12 }}>bazaratty.com/store/maple-oak</span>
          </div>
          <div style={{ padding: 28 }}>
            <div className="row between"><Logo size={22} /><div className="row gap-16 muted" style={{ fontSize: 12 }}><span>Shop</span><span>Story</span><span>Contact</span></div></div>
            <div style={{ marginTop: 28, padding: 28, borderRadius: 22, background: accent, color: "white" }}>
              <span style={{ fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", opacity: .85 }}>Maple &amp; Oak</span>
              <h2 style={{ color: "white", fontSize: 36, lineHeight: 1.05, marginTop: 8, maxWidth: 480 }}>Hand-finished wood goods, made in Lisbon.</h2>
              <button className="btn" style={{ background: "white", color: "var(--ink-900)", marginTop: 18 }}>Shop the collection</button>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14, marginTop: 22 }}>
              {window.DATA.SELLER_PRODUCTS.slice(0,3).map((p, i) => (
                <div key={p.id} className="card" style={{ padding: 10 }}>
                  <Imagery ratio="4/3" tone="tinted" hue={162 + i*20} radius={10} />
                  <div className="strong" style={{ marginTop: 10, fontSize: 13 }}>{p.name}</div>
                  <div className="row between" style={{ marginTop: 4 }}><span className="muted" style={{ fontSize: 12 }}>Maple &amp; Oak</span><span className="strong tnum">${p.price}</span></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SellerShell>
  );
}

function SellerCustomerMessages({ go }) {
  return (
    <SellerShell active="seller-msgs" go={go} title="Customer messages">
      <h1 style={{ fontSize: 26, marginBottom: 16 }}>Customer messages</h1>
      <div className="card" style={{ overflow: "hidden", display: "grid", gridTemplateColumns: "300px 1fr", height: 560 }}>
        <div style={{ borderRight: "1px solid var(--ink-100)", overflow: "auto" }}>
          {[
            { who: "M. Khan",    last: "Will the bracket fit a 28mm rail?", time: "12m", unread: true },
            { who: "S. Lopez",   last: "Can I cancel ORD-7820?",            time: "1h",  unread: true },
            { who: "T. Okafor",  last: "Thanks, the shelf looks great!",    time: "3h",  unread: false },
            { who: "A. Iverson", last: "Do you ship to the UK?",            time: "1d",  unread: false },
          ].map((m,i) => (
            <div key={i} style={{ padding: "14px 16px", borderBottom: "1px solid var(--ink-100)", background: i === 0 ? "var(--ink-50)" : "transparent" }}>
              <div className="row between"><span className="strong" style={{ fontSize: 13 }}>{m.who}</span><span className="muted" style={{ fontSize: 11 }}>{m.time}</span></div>
              <div className="row between" style={{ marginTop: 4 }}>
                <span className="muted" style={{ fontSize: 12, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", maxWidth: 200 }}>{m.last}</span>
                {m.unread && <span style={{ width: 7, height: 7, borderRadius: 99, background: "var(--teal-500)" }} />}
              </div>
            </div>
          ))}
        </div>
        <div className="col" style={{ height: "100%" }}>
          <div className="row between" style={{ padding: 16, borderBottom: "1px solid var(--ink-100)" }}>
            <div className="row gap-10"><span className="avatar">MK</span><div className="col"><span className="strong" style={{ fontSize: 13 }}>M. Khan</span><span className="muted" style={{ fontSize: 11 }}>Order ORD-7821</span></div></div>
            <button className="btn btn-ghost btn-sm">View order</button>
          </div>
          <div className="grow" style={{ padding: 24, overflow: "auto", display: "flex", flexDirection: "column", gap: 12, background: "var(--bg)" }}>
            <div style={{ alignSelf: "flex-start", maxWidth: 360, padding: "10px 14px", background: "var(--paper)", border: "1px solid var(--ink-100)", borderRadius: "14px 14px 14px 4px" }}>Will the bracket fit a 28mm rail?</div>
            <div style={{ alignSelf: "flex-end",   maxWidth: 360, padding: "10px 14px", background: "var(--ink-900)", color: "white", borderRadius: "14px 14px 4px 14px" }}>Hi! Yes — the brackets fit rails up to 32mm.</div>
          </div>
          <div style={{ padding: 14, borderTop: "1px solid var(--ink-100)" }}><div className="row gap-8"><input className="input grow" placeholder="Reply…" /><button className="btn btn-primary">Send</button></div></div>
        </div>
      </div>
    </SellerShell>
  );
}

function SellerPayouts({ go }) {
  return (
    <SellerShell active="seller-payouts" go={go} title="Payouts">
      <h1 style={{ fontSize: 26, marginBottom: 18 }}>Payout settings</h1>
      <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 18 }}>
        <div className="card" style={{ padding: 22 }}>
          <div className="strong">Bank account</div>
          <div className="divider" style={{ margin: "12px 0 18px" }} />
          <div className="row gap-12">
            <div className="grow"><label className="label">Account holder</label><input className="input" defaultValue="Eli Khan" /></div>
            <div className="grow"><label className="label">Bank name</label><input className="input" defaultValue="Banco Comercial" /></div>
          </div>
          <div className="row gap-12" style={{ marginTop: 12 }}>
            <div className="grow"><label className="label">IBAN</label><input className="input" defaultValue="PT50 0002 0123 1234 5678 9015 4" /></div>
            <div style={{ width: 160 }}><label className="label">SWIFT</label><input className="input" defaultValue="BCOMPTPL" /></div>
          </div>
          <div style={{ marginTop: 18 }}><label className="label">Tax ID</label><input className="input" defaultValue="PT 123 456 789" /></div>
          <div className="row between" style={{ marginTop: 22 }}><button className="btn btn-ghost">Cancel</button><button className="btn btn-primary">Save changes</button></div>
        </div>
        <div className="col gap-18">
          <div className="card" style={{ padding: 22, background: "var(--teal-50)", borderColor: "var(--teal-100)" }}>
            <div className="strong">Next payout</div>
            <div className="row between" style={{ alignItems: "baseline", marginTop: 10 }}>
              <span className="tnum" style={{ fontFamily: "var(--display)", fontWeight: 700, fontSize: 28 }}>$2,418</span>
              <span className="muted" style={{ fontSize: 12 }}>Tue, May 13</span>
            </div>
            <div className="bar" style={{ marginTop: 14 }}><i style={{ width: "75%" }} /></div>
            <div className="muted" style={{ fontSize: 12, marginTop: 6 }}>From 24 orders · paid every 2 business days</div>
          </div>
          <div className="card" style={{ padding: 22 }}>
            <div className="strong">Schedule</div>
            <div className="divider" style={{ margin: "12px 0 14px" }} />
            <label className="row gap-8" style={{ fontSize: 13, cursor: "pointer" }}><input type="radio" name="sched" defaultChecked /> Every 2 business days</label>
            <label className="row gap-8" style={{ fontSize: 13, cursor: "pointer", marginTop: 8 }}><input type="radio" name="sched" /> Weekly (Fridays)</label>
            <label className="row gap-8" style={{ fontSize: 13, cursor: "pointer", marginTop: 8 }}><input type="radio" name="sched" /> Monthly (1st of month)</label>
          </div>
        </div>
      </div>
    </SellerShell>
  );
}

Object.assign(window, { SellerAnalytics, SellerProducts, SellerAddProduct, SellerOrders, SellerRevenue, SellerStorefront, SellerCustomerMessages, SellerPayouts });
