// Admin dashboard screens.

const ADMIN_NAV = [
  { section: "Overview" },
  { id: "admin-dash",       label: "Platform analytics", icon: "chart" },
  { id: "admin-revenue",    label: "Revenue reports",    icon: "dollar" },
  { section: "Operations" },
  { id: "admin-users",      label: "Users",              icon: "users" },
  { id: "admin-approvals",  label: "Seller approvals",   icon: "check", badge: "5" },
  { id: "admin-moderation", label: "Product moderation", icon: "flag",  badge: "3" },
  { id: "admin-orders",     label: "Orders monitoring",  icon: "package" },
  { section: "System" },
  { id: "admin-settings",   label: "Settings",           icon: "settings" },
];

function AdminShell({ active, go, children, title, search }) {
  return (
    <div className="app-shell">
      <Sidebar
        active={active} onPick={go} items={ADMIN_NAV}
        headerExtra={
          <div className="card" style={{ margin: "10px 4px 14px", padding: 10 }}>
            <div className="row gap-10">
              <div style={{ width: 32, height: 32, borderRadius: 9, background: "var(--teal-400)", color: "var(--ink-900)", display: "flex", alignItems: "center", justifyContent: "center" }}><Icon name="shield" size={16} /></div>
              <div className="col" style={{ minWidth: 0 }}>
                <span className="strong" style={{ fontSize: 13 }}>Admin</span>
                <span className="muted" style={{ fontSize: 11 }}>Platform · Owner</span>
              </div>
            </div>
          </div>
        }
        footer={
          <div className="col gap-4" style={{ paddingTop: 10, borderTop: "1px solid var(--ink-100)" }}>
            <button className="nav-link" onClick={() => go("buyer-dash")}><Icon name="cart" size={16} /> <span className="grow" style={{ textAlign: "left" }}>Buyer view</span></button>
            <button className="nav-link" onClick={() => go("seller-dash")}><Icon name="store" size={16} /> <span className="grow" style={{ textAlign: "left" }}>Seller view</span></button>
            <button className="nav-link" onClick={() => go("landing")}><Icon name="globe" size={16} /> <span className="grow" style={{ textAlign: "left" }}>Public site</span></button>
          </div>
        }
      />
      <main>
        <TopBar title={title} search={search} right={<>
          <span className="chip"><span style={{ width: 6, height: 6, borderRadius: 99, background: "var(--teal-500)" }} /> All systems normal</span>
          <button className="btn btn-ghost btn-sm"><Icon name="bell" size={15} /></button>
          <button className="btn btn-primary btn-sm">Export report</button>
        </>} />
        <div className="page fadein">{children}</div>
      </main>
    </div>
  );
}

function AdminAnalytics({ go }) {
  const D = window.DATA;
  return (
    <AdminShell active="admin-dash" go={go} title="Platform analytics" search="Search users, sellers, orders…">
      <div className="row between" style={{ marginBottom: 22 }}>
        <div>
          <h1 style={{ fontSize: 28 }}>Platform overview</h1>
          <p className="muted" style={{ marginTop: 4 }}>14-day window · all currencies converted to USD.</p>
        </div>
        <div className="row gap-8">
          <select className="input" style={{ height: 38, width: 150 }}><option>Last 14 days</option><option>Last 30 days</option></select>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14 }}>
        <Stat label="GMV"               value="$284,910" delta="+18%" series={D.SERIES_REV.map(v => v*30)} />
        <Stat label="Orders"             value="3,124"   delta="+11%" series={D.SERIES_ORD.map(v => v*22)} />
        <Stat label="Active sellers"     value="142"     delta="+9"   series={D.SERIES_USR.map(v => v*4)} />
        <Stat label="New buyers / day"   value="86"      delta="+14%" series={D.SERIES_USR} />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr", gap: 18, marginTop: 22 }}>
        <div className="card" style={{ padding: 22 }}>
          <div className="row between"><div><div className="strong">GMV (gross merchandise value)</div><div className="muted" style={{ fontSize: 12 }}>Daily, last 14 days</div></div><span className="chip teal">+18% WoW</span></div>
          <div style={{ marginTop: 14 }}><LineChart series={D.SERIES_REV.map(v => v * 30)} /></div>
        </div>
        <div className="card" style={{ padding: 22 }}>
          <div className="strong">Marketplace mix</div>
          <div className="row" style={{ marginTop: 14, alignItems: "center", gap: 18 }}>
            <Donut
              slices={[
                { value: 38, color: "var(--teal-400)" },
                { value: 24, color: "var(--ink-900)" },
                { value: 16, color: "var(--teal-200)" },
                { value: 12, color: "var(--ink-300)" },
                { value: 10, color: "var(--teal-600)" },
              ]}
              label={{ value: "8", sub: "CATEGORIES" }}
            />
            <div className="col gap-10 grow">
              {[
                { c: "var(--teal-400)", l: "Home & Living", v: "38%" },
                { c: "var(--ink-900)",  l: "Fashion",       v: "24%" },
                { c: "var(--teal-200)", l: "Beauty",        v: "16%" },
                { c: "var(--ink-300)",  l: "Tech",          v: "12%" },
                { c: "var(--teal-600)", l: "Other",         v: "10%" },
              ].map(x => (
                <div key={x.l} className="row between"><div className="row gap-8"><span style={{ width: 8, height: 8, borderRadius: 99, background: x.c }} /><span style={{ fontSize: 13 }}>{x.l}</span></div><span className="strong tnum" style={{ fontSize: 13 }}>{x.v}</span></div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 18, marginTop: 18 }}>
        <div className="card" style={{ padding: 22 }}>
          <div className="strong">Top sellers</div>
          <div className="col gap-10" style={{ marginTop: 14 }}>
            {[
              { n: "Maple & Oak",       v: "$12,418", g: "+18%" },
              { n: "Brewhaus",          v: "$9,820",  g: "+12%" },
              { n: "Verde Apothecary",  v: "$8,640",  g: "+24%" },
              { n: "Lumen Studio",      v: "$7,210",  g: "+8%"  },
              { n: "Stride Lab",        v: "$6,180",  g: "+5%"  },
            ].map((s,i) => (
              <div key={s.n} className="row between"><div className="row gap-10"><span className="mono muted" style={{ fontSize: 11, width: 18 }}>0{i+1}</span><span className="avatar" style={{ width: 26, height: 26, fontSize: 10 }}>{s.n.split(" ").map(x => x[0]).join("").slice(0,2)}</span><span style={{ fontSize: 13 }}>{s.n}</span></div><div className="row gap-10"><span className="strong tnum" style={{ fontSize: 13 }}>{s.v}</span><span className="chip teal" style={{ fontSize: 11 }}>{s.g}</span></div></div>
            ))}
          </div>
        </div>
        <div className="card" style={{ padding: 22 }}>
          <div className="strong">Order activity</div>
          <div style={{ marginTop: 14 }}><BarChart data={D.SERIES_ORD.map(v => v*22)} /></div>
        </div>
        <div className="card" style={{ padding: 22 }}>
          <div className="strong">Open queues</div>
          <div className="col gap-10" style={{ marginTop: 14 }}>
            {[
              { l: "Seller approvals", v: 5, c: "var(--teal-400)", to: "admin-approvals" },
              { l: "Product moderation", v: 3, c: "#d59134",      to: "admin-moderation" },
              { l: "Buyer disputes",     v: 2, c: "#c64a5b",      to: "admin-orders" },
              { l: "Refund requests",    v: 4, c: "var(--ink-900)", to: "admin-orders" },
            ].map(q => (
              <button key={q.l} onClick={() => go(q.to)} className="row between lift" style={{ padding: "10px 14px", borderRadius: 12, border: "1px solid var(--ink-100)", background: "var(--paper)", textAlign: "left" }}>
                <div className="row gap-10"><span style={{ width: 8, height: 8, borderRadius: 99, background: q.c }} /><span style={{ fontSize: 13 }}>{q.l}</span></div>
                <div className="row gap-8"><span className="strong tnum">{q.v}</span><Icon name="chev" size={13} /></div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </AdminShell>
  );
}

function AdminUsers({ go }) {
  const users = [
    { n: "Eli Khan",       e: "el@maple-oak.co",     r: "Seller", j: "Mar 12", o: 142, s: "Active" },
    { n: "Marisol Pereira",e: "mp@verde.co",         r: "Seller", j: "Feb 04", o: 521, s: "Active" },
    { n: "Devraj Singh",   e: "dev@brewhaus.com",    r: "Seller", j: "Jan 28", o: 142, s: "Active" },
    { n: "Sara Lopez",     e: "sara.lopez@mail.com", r: "Buyer",  j: "Apr 21", o:   8, s: "Active" },
    { n: "Tao Okafor",     e: "tao.o@mail.com",      r: "Buyer",  j: "Apr 02", o:  12, s: "Active" },
    { n: "Anika Iverson",  e: "ai@mail.com",         r: "Buyer",  j: "Mar 30", o:   3, s: "Suspended" },
    { n: "Rohan Patel",    e: "rohan@mail.com",      r: "Buyer",  j: "Mar 17", o:  14, s: "Active" },
  ];
  return (
    <AdminShell active="admin-users" go={go} title="Users" search="Search by name, email, role…">
      <div className="row between" style={{ marginBottom: 16 }}>
        <h1 style={{ fontSize: 26 }}>Users</h1>
        <div className="row gap-8">
          {["All","Buyers","Sellers","Suspended"].map((t,i) => <button key={t} className={"btn btn-sm " + (i === 0 ? "btn-primary" : "btn-ghost")}>{t}</button>)}
        </div>
      </div>
      <div className="card" style={{ overflow: "hidden" }}>
        <table className="tbl">
          <thead><tr><th>User</th><th>Role</th><th>Joined</th><th>Orders</th><th>Status</th><th></th></tr></thead>
          <tbody>
            {users.map(u => (
              <tr key={u.e}>
                <td><div className="row gap-10"><span className="avatar">{u.n.split(" ").map(s => s[0]).join("")}</span><div className="col"><span className="strong">{u.n}</span><span className="muted" style={{ fontSize: 11.5 }}>{u.e}</span></div></div></td>
                <td><span className="chip">{u.r}</span></td>
                <td>{u.j}</td>
                <td className="tnum">{u.o}</td>
                <td><span className={"chip " + (u.s === "Active" ? "teal" : "rose")}><span style={{ width: 6, height: 6, borderRadius: 99, background: u.s === "Active" ? "var(--teal-500)" : "#c64a5b" }} />{u.s}</span></td>
                <td style={{ textAlign: "right" }}><button className="btn btn-ghost btn-sm">Manage</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminShell>
  );
}

function AdminApprovals({ go }) {
  const A = window.DATA.APPROVALS;
  return (
    <AdminShell active="admin-approvals" go={go} title="Seller approvals">
      <div className="row between" style={{ marginBottom: 16 }}><h1 style={{ fontSize: 26 }}>Seller approvals</h1><span className="chip amber">{A.length} pending</span></div>
      <div className="col gap-12">
        {A.map(a => (
          <div key={a.id} className="card" style={{ padding: 18 }}>
            <div className="row between" style={{ alignItems: "flex-start" }}>
              <div className="row gap-14">
                <span className="avatar lg">{a.seller.split(" ").map(s => s[0]).join("").slice(0,2)}</span>
                <div className="col gap-4">
                  <div className="row gap-10"><span className="strong" style={{ fontSize: 15 }}>{a.seller}</span><span className="chip">{a.cat}</span></div>
                  <span className="muted" style={{ fontSize: 12.5 }}>Submitted {a.submitted} · ID {a.id}</span>
                  <div className="row gap-8" style={{ marginTop: 6 }}>
                    <span className={"chip " + (a.docs === "Complete" ? "teal" : "amber")}>
                      <span style={{ width: 6, height: 6, borderRadius: 99, background: a.docs === "Complete" ? "var(--teal-500)" : "#d59134" }} />Docs: {a.docs}
                    </span>
                    <span className="chip">3 sample products</span>
                  </div>
                </div>
              </div>
              <div className="row gap-8">
                <button className="btn btn-ghost btn-sm">Review</button>
                <button className="btn btn-ghost btn-sm" style={{ color: "#9a2c3a" }}>Reject</button>
                <button className="btn btn-teal btn-sm">Approve</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </AdminShell>
  );
}

function AdminModeration({ go }) {
  const M = window.DATA.MODERATION;
  return (
    <AdminShell active="admin-moderation" go={go} title="Product moderation">
      <div className="row between" style={{ marginBottom: 16 }}><h1 style={{ fontSize: 26 }}>Product moderation</h1>
        <div className="row gap-8">{["Open","Reviewed","Closed"].map((t,i) => <button key={t} className={"btn btn-sm " + (i === 0 ? "btn-primary" : "btn-ghost")}>{t}</button>)}</div>
      </div>
      <div className="col gap-12">
        {M.map(m => (
          <div key={m.id} className="card" style={{ padding: 18 }}>
            <div className="row between" style={{ alignItems: "flex-start" }}>
              <div className="row gap-14">
                <Imagery ratio="1/1" tone="tinted" hue={Math.random()*360} radius={12} style={{ width: 76, height: 76 }} />
                <div className="col gap-4">
                  <div className="row gap-10"><span className="strong" style={{ fontSize: 15 }}>{m.product}</span><span className="chip rose">{m.reason}</span></div>
                  <span className="muted" style={{ fontSize: 12.5 }}>By {m.seller} · flagged {m.flagged} · {m.id}</span>
                  <p className="muted" style={{ marginTop: 6, maxWidth: 560, fontSize: 13 }}>Buyer flagged this listing as a potential brand misuse. Review the listing and seller's documentation.</p>
                </div>
              </div>
              <div className="row gap-8">
                <button className="btn btn-ghost btn-sm">View listing</button>
                <button className="btn btn-ghost btn-sm" style={{ color: "#9a2c3a" }}>Take down</button>
                <button className="btn btn-teal btn-sm">Approve</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </AdminShell>
  );
}

function AdminOrdersMonitor({ go }) {
  const D = window.DATA.ORDERS_SELLER;
  return (
    <AdminShell active="admin-orders" go={go} title="Orders monitoring">
      <div className="row between" style={{ marginBottom: 18 }}><h1 style={{ fontSize: 26 }}>Orders monitoring</h1>
        <div className="row gap-8"><span className="chip teal">98.2% fulfilment</span><span className="chip">2 disputes</span></div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14 }}>
        <Stat label="Orders today"  value="324" delta="+12%" series={window.DATA.SERIES_ORD.map(v => v*22)} />
        <Stat label="Avg ship time" value="1.4d" delta="-0.2" series={[2,2,1.9,1.9,1.8,1.8,1.7,1.7,1.6,1.6,1.5,1.5,1.4,1.4]} />
        <Stat label="Disputes"      value="2"   delta="-1" series={[5,4,4,3,3,2,3,2,2,2,3,2,2,2]} />
        <Stat label="Refund rate"   value="1.3%" delta="-0.1" series={[2,1.9,1.8,1.8,1.7,1.6,1.5,1.5,1.4,1.4,1.4,1.3,1.3,1.3]} />
      </div>
      <div className="card" style={{ overflow: "hidden", marginTop: 18 }}>
        <table className="tbl">
          <thead><tr><th>Order</th><th>Seller</th><th>Buyer</th><th>Total</th><th>Status</th><th>Region</th><th></th></tr></thead>
          <tbody>
            {D.map((o,i) => (
              <tr key={o.id}>
                <td className="mono tnum" style={{ fontSize: 12.5 }}>{o.id}</td>
                <td>Maple &amp; Oak</td>
                <td>{o.buyer}</td>
                <td className="tnum strong">${o.total}</td>
                <td><StatusPill status={o.status} /></td>
                <td className="muted">{["Lisbon, PT","London, UK","NYC, US","Berlin, DE","Paris, FR","Tokyo, JP","Toronto, CA"][i % 7]}</td>
                <td style={{ textAlign: "right" }}><button className="btn btn-ghost btn-sm">Open</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminShell>
  );
}

function AdminRevenue({ go }) {
  const D = window.DATA;
  return (
    <AdminShell active="admin-revenue" go={go} title="Revenue reports">
      <div className="row between" style={{ marginBottom: 18 }}><h1 style={{ fontSize: 26 }}>Revenue reports</h1>
        <div className="row gap-8"><select className="input" style={{ height: 38, width: 150 }}><option>This quarter</option><option>This year</option></select><button className="btn btn-ghost btn-sm">Download CSV</button></div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14 }}>
        <Stat label="Platform fee revenue" value="$17,094" delta="+18%" series={D.SERIES_REV.map(v => v*1.8)} />
        <Stat label="GMV"                  value="$284,910" delta="+18%" series={D.SERIES_REV.map(v => v*30)} />
        <Stat label="Avg take rate"        value="6.0%"     delta="0.0"  series={[6,6,6,6,6,6,6,6,6,6,6,6,6,6]} />
        <Stat label="Refund rate"          value="1.3%"     delta="-0.1" series={[2,1.9,1.8,1.8,1.7,1.6,1.5,1.5,1.4,1.4,1.4,1.3,1.3,1.3]} />
      </div>
      <div className="card" style={{ marginTop: 18, padding: 22 }}>
        <div className="strong">Platform fee · last 14 days</div>
        <div style={{ marginTop: 14 }}><LineChart series={D.SERIES_REV.map(v => v * 1.8)} /></div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18, marginTop: 18 }}>
        <div className="card" style={{ padding: 22 }}>
          <div className="strong">Revenue by category</div>
          <div className="col gap-10" style={{ marginTop: 14 }}>
            {[
              { l: "Home & Living", v: "$108,260", p: 38 },
              { l: "Fashion",       v: "$68,378",  p: 24 },
              { l: "Beauty",        v: "$45,585",  p: 16 },
              { l: "Tech",          v: "$34,189",  p: 12 },
              { l: "Other",         v: "$28,491",  p: 10 },
            ].map(c => (
              <div key={c.l}>
                <div className="row between" style={{ marginBottom: 6 }}><span style={{ fontSize: 13 }}>{c.l}</span><span className="strong tnum" style={{ fontSize: 13 }}>{c.v}</span></div>
                <div className="bar"><i style={{ width: c.p + "%" }} /></div>
              </div>
            ))}
          </div>
        </div>
        <div className="card" style={{ padding: 22 }}>
          <div className="strong">Top sellers · GMV</div>
          <table className="tbl" style={{ marginTop: 8 }}>
            <thead><tr><th>Seller</th><th>GMV</th><th>Orders</th><th>Take</th></tr></thead>
            <tbody>
              {[
                { n: "Maple & Oak",      g: "$24,180", o: 320, t: "$1,451" },
                { n: "Verde Apothecary", g: "$22,640", o: 410, t: "$1,358" },
                { n: "Brewhaus",         g: "$19,820", o: 215, t: "$1,189" },
                { n: "Lumen Studio",     g: "$15,210", o: 142, t: "$913"   },
                { n: "Keycraft",         g: "$13,800", o:  88, t: "$828"   },
              ].map(s => (
                <tr key={s.n}>
                  <td className="strong">{s.n}</td>
                  <td className="tnum">{s.g}</td>
                  <td className="tnum">{s.o}</td>
                  <td className="tnum">{s.t}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminShell>
  );
}

function AdminSettings({ go }) {
  return (
    <AdminShell active="admin-settings" go={go} title="Settings">
      <h1 style={{ fontSize: 26, marginBottom: 18 }}>Platform settings</h1>
      <div style={{ display: "grid", gridTemplateColumns: "260px 1fr", gap: 18 }}>
        <aside className="col gap-4">
          {["General","Commissions","Payouts","Email & notifications","API & webhooks","Audit log"].map((s,i) => (
            <button key={s} className={"nav-link " + (i === 1 ? "active" : "")}><Icon name="chev" size={14} /> <span className="grow" style={{ textAlign: "left" }}>{s}</span></button>
          ))}
        </aside>
        <div className="col gap-18">
          <div className="card" style={{ padding: 22 }}>
            <div className="strong">Commission tiers</div>
            <div className="divider" style={{ margin: "12px 0 18px" }} />
            <table className="tbl"><thead><tr><th>Plan</th><th>Monthly</th><th>Take rate</th><th></th></tr></thead><tbody>
              {[{ n: "Starter", m: "$0",  t: "8%" },
                { n: "Studio",  m: "$29", t: "6%" },
                { n: "Scale",   m: "$99", t: "4%" }].map(p => (
                <tr key={p.n}><td className="strong">{p.n}</td><td className="tnum">{p.m}</td><td className="tnum">{p.t}</td><td style={{ textAlign: "right" }}><button className="btn btn-ghost btn-sm"><Icon name="edit" size={13} /></button></td></tr>
              ))}
            </tbody></table>
          </div>
          <div className="card" style={{ padding: 22 }}>
            <div className="strong">Marketplace policies</div>
            <div className="divider" style={{ margin: "12px 0 18px" }} />
            <div className="row between" style={{ padding: "10px 0" }}><div className="col"><span className="strong" style={{ fontSize: 13.5 }}>Auto-approve verified sellers</span><span className="muted" style={{ fontSize: 12 }}>Skip manual review for sellers with all docs complete.</span></div><label className="row"><input type="checkbox" defaultChecked /></label></div>
            <div className="divider" />
            <div className="row between" style={{ padding: "10px 0" }}><div className="col"><span className="strong" style={{ fontSize: 13.5 }}>Hold first payout 7 days</span><span className="muted" style={{ fontSize: 12 }}>Reduce risk on new sellers' first orders.</span></div><label className="row"><input type="checkbox" defaultChecked /></label></div>
            <div className="divider" />
            <div className="row between" style={{ padding: "10px 0" }}><div className="col"><span className="strong" style={{ fontSize: 13.5 }}>Allow international shipping by default</span><span className="muted" style={{ fontSize: 12 }}>New sellers ship globally unless they opt out.</span></div><label className="row"><input type="checkbox" /></label></div>
          </div>
        </div>
      </div>
    </AdminShell>
  );
}

Object.assign(window, { AdminAnalytics, AdminUsers, AdminApprovals, AdminModeration, AdminOrdersMonitor, AdminRevenue, AdminSettings });
