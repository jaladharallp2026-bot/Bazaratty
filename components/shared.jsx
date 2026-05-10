'use client';
import React, { useState, useEffect, useRef } from 'react';

function LogoMark({ size = 32, radius = 8 }) {
  return (
    <img
      src="/assets/logo.jpg"
      alt="Bazaratty"
      width={size}
      height={size}
      style={{ width: size, height: size, borderRadius: radius, display: 'block', objectFit: 'cover' }}
    />
  );
}

export function Logo({ size = 32, mark = false, color, variant = 'auto' }) {
  const wordColor = color || (variant === 'light' ? '#fff' : 'var(--ink-900)');
  const radius = Math.round(size * 0.26);
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
      <LogoMark size={size} radius={radius} />
      {!mark && (
        <span style={{ fontFamily: 'var(--display)', fontWeight: 700, fontSize: size * 0.66, letterSpacing: '-0.025em', color: wordColor }}>
          Bazaratty
        </span>
      )}
    </span>
  );
}

export const Icon = ({ name, size = 18 }) => {
  const s = size, sw = 1.7;
  const common = { width: s, height: s, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: sw, strokeLinecap: 'round', strokeLinejoin: 'round' };
  switch (name) {
    case 'home':    return <svg {...common}><path d="M3 11l9-7 9 7"/><path d="M5 10v10h14V10"/></svg>;
    case 'grid':    return <svg {...common}><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg>;
    case 'tag':     return <svg {...common}><path d="M3 12l9-9h8v8l-9 9z"/><circle cx="15.5" cy="8.5" r="1.4"/></svg>;
    case 'store':   return <svg {...common}><path d="M3 9l1.5-5h15L21 9"/><path d="M4 9v11h16V9"/><path d="M9 20v-6h6v6"/></svg>;
    case 'info':    return <svg {...common}><circle cx="12" cy="12" r="9"/><path d="M12 8v.01M11 12h1v5h1"/></svg>;
    case 'mail':    return <svg {...common}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>;
    case 'search':  return <svg {...common}><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></svg>;
    case 'bell':    return <svg {...common}><path d="M6 17V11a6 6 0 1 1 12 0v6"/><path d="M4 17h16"/><path d="M10 20a2 2 0 0 0 4 0"/></svg>;
    case 'heart':   return <svg {...common}><path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.5-7 10-7 10z"/></svg>;
    case 'cart':    return <svg {...common}><path d="M3 4h2l2.4 12.3a2 2 0 0 0 2 1.7h7.7a2 2 0 0 0 2-1.6L21 8H6"/><circle cx="9" cy="21" r="1.3"/><circle cx="18" cy="21" r="1.3"/></svg>;
    case 'list':    return <svg {...common}><path d="M8 6h13M8 12h13M8 18h13"/><circle cx="4" cy="6" r="1"/><circle cx="4" cy="12" r="1"/><circle cx="4" cy="18" r="1"/></svg>;
    case 'user':    return <svg {...common}><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></svg>;
    case 'users':   return <svg {...common}><circle cx="9" cy="9" r="3.5"/><circle cx="17" cy="10" r="2.5"/><path d="M3 19a6 6 0 0 1 12 0"/><path d="M14 19a4 4 0 0 1 7 0"/></svg>;
    case 'chart':   return <svg {...common}><path d="M3 21h18"/><path d="M5 17V9M10 17v-5M15 17v-9M20 17v-3"/></svg>;
    case 'wallet':  return <svg {...common}><rect x="3" y="6" width="18" height="13" rx="2"/><path d="M3 10h18"/><circle cx="17" cy="14" r="1"/></svg>;
    case 'plus':    return <svg {...common}><path d="M12 5v14M5 12h14"/></svg>;
    case 'settings':return <svg {...common}><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/></svg>;
    case 'shield':  return <svg {...common}><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M9 12l2 2 4-4"/></svg>;
    case 'package': return <svg {...common}><path d="M3 7l9-4 9 4-9 4z"/><path d="M3 7v10l9 4 9-4V7"/><path d="M12 11v10"/></svg>;
    case 'truck':   return <svg {...common}><rect x="2" y="7" width="13" height="9" rx="1.5"/><path d="M15 10h4l2 3v3h-6"/><circle cx="6" cy="18" r="1.6"/><circle cx="18" cy="18" r="1.6"/></svg>;
    case 'star':    return <svg {...common}><path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17.7 6.6 19.9l1-6.1L3.2 9.5l6.1-.9z"/></svg>;
    case 'flag':    return <svg {...common}><path d="M5 21V4"/><path d="M5 4h12l-2 4 2 4H5"/></svg>;
    case 'check':   return <svg {...common}><path d="M5 12l4 4 10-10"/></svg>;
    case 'x':       return <svg {...common}><path d="M6 6l12 12M18 6L6 18"/></svg>;
    case 'arrow':   return <svg {...common}><path d="M5 12h14"/><path d="M13 6l6 6-6 6"/></svg>;
    case 'dollar':  return <svg {...common}><path d="M12 3v18"/><path d="M17 7H9.5a2.5 2.5 0 0 0 0 5h5a2.5 2.5 0 0 1 0 5H7"/></svg>;
    case 'filter':  return <svg {...common}><path d="M4 5h16M7 12h10M10 19h4"/></svg>;
    case 'sliders': return <svg {...common}><path d="M4 7h12M4 17h6"/><circle cx="18" cy="7" r="2.4"/><circle cx="13" cy="17" r="2.4"/></svg>;
    case 'lock':    return <svg {...common}><rect x="4" y="11" width="16" height="9" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg>;
    case 'image':   return <svg {...common}><rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="10" r="2"/><path d="M21 16l-5-5-9 9"/></svg>;
    case 'trash':   return <svg {...common}><path d="M4 7h16"/><path d="M9 7V4h6v3"/><path d="M6 7l1 13h10l1-13"/></svg>;
    case 'edit':    return <svg {...common}><path d="M4 20h4l11-11-4-4L4 16z"/></svg>;
    case 'menu':    return <svg {...common}><path d="M4 7h16M4 12h16M4 17h16"/></svg>;
    case 'globe':   return <svg {...common}><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></svg>;
    case 'sparkle': return <svg {...common}><path d="M12 3l1.6 5.4L19 10l-5.4 1.6L12 17l-1.6-5.4L5 10l5.4-1.6z"/></svg>;
    case 'chev':    return <svg {...common}><path d="M9 6l6 6-6 6"/></svg>;
    default: return null;
  }
};

export function Imagery({ ratio = '4/3', label, hue = 162, tone = 'soft', radius = 14, src, alt = '', style, overlay }) {
  const base = tone === 'ink' ? 'ink' : tone === 'teal' ? 'teal' : '';
  const tinted = tone === 'tinted';
  const bg = tinted
    ? `repeating-linear-gradient(135deg, hsla(${hue}, 50%, 50%, .14) 0 8px, transparent 8px 16px), hsl(${hue}, 60%, 96%)`
    : undefined;
  return (
    <div
      className={'img-ph ' + base}
      style={{ aspectRatio: ratio, borderRadius: radius, background: src ? 'var(--ink-50)' : bg, borderColor: tinted ? `hsl(${hue}, 50%, 88%)` : undefined, position: 'relative', overflow: 'hidden', ...style }}
    >
      {src && <img src={src} alt={alt} className="ph-img" loading="lazy" />}
      {!src && label && <span className="lbl">{label}</span>}
      {overlay}
    </div>
  );
}

export function Sparkline({ data, color = 'var(--teal-500)', w = 120, h = 36, fill = true }) {
  const min = Math.min(...data), max = Math.max(...data);
  const range = max - min || 1;
  const stepX = w / (data.length - 1);
  const pts = data.map((v, i) => [i * stepX, h - ((v - min) / range) * (h - 4) - 2]);
  const d = pts.map((p, i) => (i === 0 ? 'M' : 'L') + p[0].toFixed(1) + ' ' + p[1].toFixed(1)).join(' ');
  const dFill = d + ` L ${w} ${h} L 0 ${h} Z`;
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{ overflow: 'visible' }}>
      {fill && <path d={dFill} fill={color} opacity="0.12" />}
      <path d={d} fill="none" stroke={color} strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}

export function BarChart({ data, w = 560, h = 200, color = 'var(--teal-400)' }) {
  const max = Math.max(...data) * 1.1;
  const barW = (w - 20) / data.length - 6;
  return (
    <svg width="100%" viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none" style={{ display: 'block' }}>
      {[0.25, 0.5, 0.75].map((g) => (
        <line key={g} x1="0" x2={w} y1={h - h * g} y2={h - h * g} stroke="var(--ink-100)" strokeWidth="1" />
      ))}
      {data.map((v, i) => {
        const bh = (v / max) * (h - 16);
        const x = 10 + i * (barW + 6);
        return (
          <g key={i}>
            <rect x={x} y={h - bh - 4} width={barW} height={bh} rx="6" fill={color} opacity={i === data.length - 1 ? 1 : 0.55} />
          </g>
        );
      })}
    </svg>
  );
}

export function LineChart({ series, w = 720, h = 240, color = 'var(--teal-500)' }) {
  const min = Math.min(...series), max = Math.max(...series);
  const range = max - min || 1;
  const padL = 36, padR = 12, padT = 16, padB = 28;
  const innerW = w - padL - padR, innerH = h - padT - padB;
  const stepX = innerW / (series.length - 1);
  const pts = series.map((v, i) => [padL + i * stepX, padT + innerH - ((v - min) / range) * innerH]);
  const d = pts.map((p, i) => (i === 0 ? 'M' : 'L') + p[0].toFixed(1) + ' ' + p[1].toFixed(1)).join(' ');
  const dFill = d + ` L ${padL + innerW} ${padT + innerH} L ${padL} ${padT + innerH} Z`;
  const yTicks = 4;
  return (
    <svg width="100%" viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none" style={{ display: 'block' }}>
      {Array.from({ length: yTicks + 1 }, (_, i) => {
        const y = padT + (innerH * i) / yTicks;
        const v = max - (range * i) / yTicks;
        return (
          <g key={i}>
            <line x1={padL} x2={padL + innerW} y1={y} y2={y} stroke="var(--ink-100)" />
            <text x={padL - 8} y={y + 4} fontSize="11" textAnchor="end" fill="var(--ink-400)" fontFamily="var(--mono)">
              {Math.round(v)}
            </text>
          </g>
        );
      })}
      <path d={dFill} fill={color} opacity="0.12" />
      <path d={d} fill="none" stroke={color} strokeWidth="2.2" />
      {pts.map((p, i) => (
        <circle key={i} cx={p[0]} cy={p[1]} r={i === pts.length - 1 ? 4 : 2.4} fill="white" stroke={color} strokeWidth="2" />
      ))}
    </svg>
  );
}

export function Donut({ slices, size = 132, thickness = 18, label }) {
  const total = slices.reduce((s, x) => s + x.value, 0);
  let acc = 0;
  const r = (size - thickness) / 2;
  const c = size / 2;
  const circ = 2 * Math.PI * r;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <circle cx={c} cy={c} r={r} fill="none" stroke="var(--ink-100)" strokeWidth={thickness} />
      {slices.map((s, i) => {
        const frac = s.value / total;
        const dash = `${frac * circ} ${circ}`;
        const off = -acc * circ;
        acc += frac;
        return <circle key={i} cx={c} cy={c} r={r} fill="none" stroke={s.color} strokeWidth={thickness} strokeDasharray={dash} strokeDashoffset={off} transform={`rotate(-90 ${c} ${c})`} strokeLinecap="butt" />;
      })}
      {label && (
        <g>
          <text x={c} y={c - 2} textAnchor="middle" fontSize="20" fontFamily="var(--display)" fontWeight="700" fill="var(--ink-900)">{label.value}</text>
          <text x={c} y={c + 16} textAnchor="middle" fontSize="11" fill="var(--ink-500)" letterSpacing=".04em">{label.sub}</text>
        </g>
      )}
    </svg>
  );
}

export function Stat({ label, value, delta, series, accent = 'var(--teal-500)' }) {
  const positive = delta && delta.startsWith('+');
  return (
    <div className="card" style={{ padding: 18 }}>
      <div className="row between" style={{ alignItems: 'flex-start' }}>
        <div className="col gap-4">
          <div className="muted" style={{ fontSize: 12.5 }}>{label}</div>
          <div className="tnum" style={{ fontFamily: 'var(--display)', fontWeight: 700, fontSize: 26, letterSpacing: '-0.02em' }}>{value}</div>
        </div>
        {delta && (
          <span style={{ fontSize: 12, fontWeight: 600, color: positive ? 'var(--teal-700)' : '#9a2c3a', background: positive ? 'var(--teal-50)' : '#fdecee', padding: '4px 8px', borderRadius: 999 }}>
            {delta}
          </span>
        )}
      </div>
      {series && <div style={{ marginTop: 10 }}><Sparkline data={series} color={accent} w={220} h={42} /></div>}
    </div>
  );
}

export function Stars({ value, size = 13 }) {
  return (
    <span style={{ display: 'inline-flex', gap: 1, color: 'var(--teal-500)' }}>
      {[0,1,2,3,4].map(i => (
        <svg key={i} width={size} height={size} viewBox="0 0 24 24" fill={i < Math.round(value) ? 'currentColor' : 'var(--ink-200)'}>
          <path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17.7 6.6 19.9l1-6.1L3.2 9.5l6.1-.9z" />
        </svg>
      ))}
    </span>
  );
}

export function StatusPill({ status }) {
  const map = {
    'Delivered':      { cls: 'teal', dot: 'var(--teal-500)' },
    'Shipped':        { cls: 'teal', dot: 'var(--teal-500)' },
    'In transit':     { cls: '',     dot: 'var(--ink-400)' },
    'Awaiting ship':  { cls: 'amber',dot: '#d59134' },
    'Returned':       { cls: 'rose', dot: '#c64a5b' },
    'Refunded':       { cls: 'rose', dot: '#c64a5b' },
    'Active':         { cls: 'teal', dot: 'var(--teal-500)' },
    'Low stock':      { cls: 'amber',dot: '#d59134' },
    'Out of stock':   { cls: 'rose', dot: '#c64a5b' },
    'Complete':       { cls: 'teal', dot: 'var(--teal-500)' },
    'Pending tax ID': { cls: 'amber',dot: '#d59134' },
    'Pending bank':   { cls: 'amber',dot: '#d59134' },
  };
  const m = map[status] || { cls: '', dot: 'var(--ink-400)' };
  return (
    <span className={'chip ' + m.cls}>
      <span style={{ width: 6, height: 6, borderRadius: 99, background: m.dot, display: 'inline-block' }} />
      {status}
    </span>
  );
}

export function TopBar({ title, search, right, onMenuToggle }) {
  return (
    <div className="topbar">
      <div className="row gap-12 grow" style={{ minWidth: 0 }}>
        <button className="topbar-hamburger btn btn-ghost btn-sm" onClick={onMenuToggle} style={{ padding: '7px 9px' }}>
          <Icon name="menu" size={17} />
        </button>
        <div style={{ fontFamily: 'var(--display)', fontWeight: 700, fontSize: 16, color: 'var(--ink-900)' }}>{title}</div>
        {search && (
          <div className="row" style={{ marginLeft: 12, flex: 1, maxWidth: 520, position: 'relative' }}>
            <span style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: 'var(--ink-400)' }}>
              <Icon name="search" size={16} />
            </span>
            <input className="input" placeholder={search} style={{ paddingLeft: 38, height: 40 }} />
          </div>
        )}
      </div>
      <div className="row gap-8">{right}</div>
    </div>
  );
}

export function Sidebar({ items, active, onPick, footer, headerExtra, open }) {
  return (
    <aside className={'sidebar' + (open ? ' open' : '')}>
      <div style={{ padding: '4px 10px 12px' }}>
        <Logo size={30} variant="chip" />
      </div>
      {headerExtra}
      {items.map((it, i) =>
        it.section ? (
          <div key={i} className="nav-section">{it.section}</div>
        ) : (
          <button
            key={it.id}
            className={'nav-link ' + (active === it.id ? 'active' : '')}
            onClick={() => onPick(it.id)}
          >
            <span className="nav-icon" style={{ display: 'inline-flex' }}><Icon name={it.icon} size={16} /></span>
            <span className="grow" style={{ textAlign: 'left' }}>{it.label}</span>
            {it.badge && <span style={{ fontSize: 11, fontWeight: 600, background: active === it.id ? 'rgba(255,255,255,.12)' : 'var(--ink-100)', color: active === it.id ? 'white' : 'var(--ink-600)', padding: '2px 7px', borderRadius: 999 }}>{it.badge}</span>}
          </button>
        )
      )}
      <div style={{ flex: 1 }} />
      {footer}
    </aside>
  );
}

export function Empty({ icon = 'package', title, body, action }) {
  return (
    <div className="card" style={{ padding: 48, textAlign: 'center', border: '1px dashed var(--ink-200)', background: 'transparent' }}>
      <div style={{ width: 56, height: 56, borderRadius: 16, background: 'var(--teal-50)', color: 'var(--teal-700)', margin: '0 auto 14px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Icon name={icon} size={22} />
      </div>
      <div style={{ fontFamily: 'var(--display)', fontWeight: 700, fontSize: 18, marginBottom: 6 }}>{title}</div>
      <div className="muted" style={{ maxWidth: 360, margin: '0 auto' }}>{body}</div>
      {action && <div style={{ marginTop: 18 }}>{action}</div>}
    </div>
  );
}

export function SectionHead({ kicker, title, sub, right }) {
  return (
    <div className="row between" style={{ alignItems: 'flex-end', gap: 16, flexWrap: 'wrap' }}>
      <div>
        {kicker && <div style={{ color: 'var(--teal-700)', fontWeight: 600, fontSize: 12, letterSpacing: '.08em', textTransform: 'uppercase', marginBottom: 6 }}>{kicker}</div>}
        <h2 style={{ fontSize: 22, lineHeight: 1.2 }}>{title}</h2>
        {sub && <p className="muted" style={{ marginTop: 6, maxWidth: 560 }}>{sub}</p>}
      </div>
      {right}
    </div>
  );
}

export function Counter({ to, prefix = '', suffix = '', duration = 1400, decimals = 0 }) {
  const [v, setV] = useState(0);
  const ref = useRef();
  useEffect(() => {
    let raf, start;
    const from = 0;
    const step = (t) => {
      if (!start) start = t;
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setV(from + (to - from) * eased);
      if (p < 1) raf = requestAnimationFrame(step);
    };
    const io = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) { raf = requestAnimationFrame(step); io.disconnect(); }
    }, { threshold: 0.3 });
    if (ref.current) io.observe(ref.current);
    return () => { if (raf) cancelAnimationFrame(raf); io.disconnect(); };
  }, [to, duration]);
  const fmt = decimals > 0 ? v.toFixed(decimals) : Math.round(v).toLocaleString();
  return <span ref={ref} className="tnum">{prefix}{fmt}{suffix}</span>;
}

export function Reveal({ children, delay = 0, style }) {
  const ref = useRef();
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) { setShown(true); io.disconnect(); }
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return <div ref={ref} className={'reveal ' + (shown ? 'in' : '')} style={{ transitionDelay: shown ? `${delay}ms` : '0ms', ...style }}>{children}</div>;
}
