'use client';
import React, { useState, useEffect, useCallback } from 'react';
import { Icon } from './shared';

import { Landing, Marketplace, CategoriesPage, SearchPage, ProductDetail, AboutPage, ContactPage, PricingPage } from './public';
import { Login, Signup, Forgot, SellerOnboarding } from './auth';
import { BuyerOverview, BuyerOrders, BuyerWishlist, BuyerMessages, BuyerNotifs, BuyerProfile } from './buyer';
import { SellerAnalytics, SellerProducts, SellerAddProduct, SellerOrders, SellerRevenue, SellerStorefront, SellerCustomerMessages, SellerPayouts } from './seller';
import { AdminAnalytics, AdminUsers, AdminApprovals, AdminModeration, AdminOrdersMonitor, AdminRevenue, AdminSettings } from './admin';

export default function App() {
  const [route, setRoute] = useState({ id: "landing", params: {} });

  useEffect(() => {
    try {
      const raw = localStorage.getItem("bz-route");
      if (raw) setRoute(JSON.parse(raw));
    } catch {}
  }, []);

  const go = useCallback((id, params = {}) => {
    const next = { id, params };
    setRoute(next);
    try { localStorage.setItem("bz-route", JSON.stringify(next)); } catch {}
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const Jumper = () => {
    const [open, setOpen] = useState(false);
    const groups = [
      { name: "Public", items: [
        ["landing", "Landing"], ["market", "Marketplace"], ["categories", "Categories"],
        ["search", "Search results"], ["pdp", "Product detail"],
        ["about", "About"], ["contact", "Contact"], ["pricing", "Pricing"],
      ]},
      { name: "Auth", items: [
        ["login", "Sign in"], ["signup", "Sign up"],
        ["forgot", "Forgot password"], ["seller-onboarding", "Seller onboarding"],
      ]},
      { name: "Buyer", items: [
        ["buyer-dash", "Overview"], ["buyer-orders", "Orders"], ["buyer-wishlist", "Wishlist"],
        ["buyer-messages", "Messages"], ["buyer-notifs", "Notifications"], ["buyer-profile", "Profile"],
      ]},
      { name: "Seller", items: [
        ["seller-dash", "Analytics"], ["seller-products", "Products"], ["seller-add", "Add product"],
        ["seller-orders", "Orders"], ["seller-revenue", "Revenue"], ["seller-store", "Storefront"],
        ["seller-msgs", "Customers"], ["seller-payouts", "Payouts"],
      ]},
      { name: "Admin", items: [
        ["admin-dash", "Platform analytics"], ["admin-revenue", "Revenue reports"],
        ["admin-users", "Users"], ["admin-approvals", "Seller approvals"],
        ["admin-moderation", "Moderation"], ["admin-orders", "Orders monitor"], ["admin-settings", "Settings"],
      ]},
    ];
    const total = groups.reduce((a, g) => a + g.items.length, 0);
    return (
      <div style={{ position: "fixed", right: 18, bottom: 18, zIndex: 100 }}>
        {open && (
          <div className="card" style={{ width: 320, marginBottom: 10, padding: 6, boxShadow: "var(--shadow-lg)", maxHeight: 540, overflow: "auto" }}>
            <div style={{ padding: "10px 12px 6px" }}>
              <div className="strong" style={{ fontSize: 13 }}>Jump to screen</div>
              <div className="muted" style={{ fontSize: 11.5 }}>Prototype navigation · {total} screens</div>
            </div>
            {groups.map(g => (
              <div key={g.name} style={{ padding: "4px 6px 8px" }}>
                <div className="nav-section" style={{ padding: "8px 8px 4px" }}>{g.name}</div>
                {g.items.map(([id, label]) => (
                  <button
                    key={id}
                    onClick={() => { go(id); setOpen(false); }}
                    className="row between"
                    style={{
                      width: "100%", padding: "7px 10px", borderRadius: 8, fontSize: 12.5,
                      background: route.id === id ? "var(--ink-50)" : "transparent",
                      color: route.id === id ? "var(--ink-900)" : "var(--ink-700)",
                      fontWeight: route.id === id ? 600 : 500, textAlign: "left",
                    }}
                  >
                    <span>{label}</span>
                    {route.id === id && <Icon name="check" size={12} />}
                  </button>
                ))}
              </div>
            ))}
          </div>
        )}
        <button
          className="btn btn-primary"
          onClick={() => setOpen(!open)}
          style={{ boxShadow: "var(--shadow-lg)", padding: "12px 16px" }}
        >
          <Icon name={open ? "x" : "menu"} size={15} /> {open ? "Close" : "Screens"}
        </button>
      </div>
    );
  };

  const screens = {
    landing:              () => <Landing go={go} />,
    market:               () => <Marketplace go={go} />,
    categories:           () => <CategoriesPage go={go} />,
    search:               () => <SearchPage go={go} />,
    pdp:                  () => <ProductDetail go={go} product={route.params.product} />,
    about:                () => <AboutPage go={go} />,
    contact:              () => <ContactPage go={go} />,
    pricing:              () => <PricingPage go={go} />,

    login:                () => <Login go={go} />,
    signup:               () => <Signup go={go} />,
    forgot:               () => <Forgot go={go} />,
    "seller-onboarding":  () => <SellerOnboarding go={go} />,

    "buyer-dash":         () => <BuyerOverview go={go} />,
    "buyer-orders":       () => <BuyerOrders go={go} />,
    "buyer-wishlist":     () => <BuyerWishlist go={go} />,
    "buyer-messages":     () => <BuyerMessages go={go} />,
    "buyer-notifs":       () => <BuyerNotifs go={go} />,
    "buyer-profile":      () => <BuyerProfile go={go} />,
    "buyer-payment":      () => <BuyerProfile go={go} />,

    "seller-dash":        () => <SellerAnalytics go={go} />,
    "seller-products":    () => <SellerProducts go={go} />,
    "seller-add":         () => <SellerAddProduct go={go} />,
    "seller-orders":      () => <SellerOrders go={go} />,
    "seller-revenue":     () => <SellerRevenue go={go} />,
    "seller-store":       () => <SellerStorefront go={go} />,
    "seller-msgs":        () => <SellerCustomerMessages go={go} />,
    "seller-payouts":     () => <SellerPayouts go={go} />,
    "seller-settings":    () => <SellerPayouts go={go} />,

    "admin-dash":         () => <AdminAnalytics go={go} />,
    "admin-users":        () => <AdminUsers go={go} />,
    "admin-approvals":    () => <AdminApprovals go={go} />,
    "admin-moderation":   () => <AdminModeration go={go} />,
    "admin-orders":       () => <AdminOrdersMonitor go={go} />,
    "admin-revenue":      () => <AdminRevenue go={go} />,
    "admin-settings":     () => <AdminSettings go={go} />,
  };

  const Screen = screens[route.id] || screens.landing;
  return (
    <>
      <Screen />
      <Jumper />
    </>
  );
}
