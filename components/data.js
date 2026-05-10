export const CATEGORIES = [
  { id: "home",       name: "Home & Living",  count: 1284, hue: 162 },
  { id: "fashion",    name: "Fashion",         count:  942, hue: 350 },
  { id: "tech",       name: "Tech & Gadgets",  count:  617, hue: 220 },
  { id: "beauty",     name: "Beauty",          count:  410, hue:  18 },
  { id: "kids",       name: "Kids",            count:  329, hue:  45 },
  { id: "sports",     name: "Sports",          count:  287, hue: 195 },
  { id: "stationery", name: "Stationery",      count:  156, hue:  90 },
  { id: "wellness",   name: "Wellness",        count:  204, hue: 280 },
];

export const PRODUCTS = [
  { id: "p1",  title: "Linen weave throw pillow",    seller: "Maple & Oak",       price:  38, rating: 4.8, reviews: 214, cat: "home",       tag: "Bestseller" },
  { id: "p2",  title: "Ceramic pour-over kettle",    seller: "Brewhaus",           price:  92, rating: 4.9, reviews: 142, cat: "home",       tag: "New" },
  { id: "p3",  title: "Minimal leather card holder", seller: "North & Hide",       price:  46, rating: 4.7, reviews: 309, cat: "fashion" },
  { id: "p4",  title: "Wireless desk lamp",          seller: "Lumen Studio",       price: 128, rating: 4.6, reviews:  87, cat: "tech",       tag: "Trending" },
  { id: "p5",  title: "Botanical face serum",        seller: "Verde Apothecary",   price:  54, rating: 4.9, reviews: 521, cat: "beauty" },
  { id: "p6",  title: "Cotton play mat",             seller: "Tiny Atlas",          price:  72, rating: 4.8, reviews:  76, cat: "kids" },
  { id: "p7",  title: "Recycled yoga mat",           seller: "Common Ground",       price:  64, rating: 4.7, reviews: 198, cat: "sports" },
  { id: "p8",  title: "Brass desk organizer",        seller: "Ledger Goods",        price:  84, rating: 4.6, reviews:  44, cat: "stationery" },
  { id: "p9",  title: "Adaptive running shoe",       seller: "Stride Lab",          price: 142, rating: 4.5, reviews: 612, cat: "sports",     tag: "Editor's pick" },
  { id: "p10", title: "Walnut wall shelf set",       seller: "Maple & Oak",         price: 118, rating: 4.8, reviews:  63, cat: "home" },
  { id: "p11", title: "Travel skincare set",         seller: "Verde Apothecary",    price:  39, rating: 4.7, reviews: 281, cat: "beauty" },
  { id: "p12", title: "Mechanical keyboard kit",     seller: "Keycraft",            price: 189, rating: 4.9, reviews: 156, cat: "tech",       tag: "Limited" },
];

export const ORDERS_BUYER = [
  { id: "ORD-7821", date: "May 8",  product: "Wireless desk lamp",       seller: "Lumen Studio",     total: 128, status: "Delivered" },
  { id: "ORD-7790", date: "May 4",  product: "Ceramic pour-over kettle", seller: "Brewhaus",          total:  92, status: "In transit" },
  { id: "ORD-7754", date: "Apr 28", product: "Botanical face serum",     seller: "Verde Apothecary",  total:  54, status: "Delivered" },
  { id: "ORD-7702", date: "Apr 19", product: "Linen weave throw pillow", seller: "Maple & Oak",       total:  38, status: "Delivered" },
  { id: "ORD-7689", date: "Apr 12", product: "Recycled yoga mat",        seller: "Common Ground",      total:  64, status: "Returned" },
];

export const ORDERS_SELLER = [
  { id: "ORD-7821", buyer: "M. Khan",    date: "May 8", product: "Walnut wall shelf set",    qty: 1, total: 118, status: "Awaiting ship" },
  { id: "ORD-7820", buyer: "S. Lopez",   date: "May 8", product: "Linen weave throw pillow", qty: 2, total:  76, status: "Awaiting ship" },
  { id: "ORD-7818", buyer: "T. Okafor",  date: "May 7", product: "Walnut wall shelf set",    qty: 1, total: 118, status: "Shipped" },
  { id: "ORD-7815", buyer: "A. Iverson", date: "May 6", product: "Linen weave throw pillow", qty: 1, total:  38, status: "Shipped" },
  { id: "ORD-7812", buyer: "R. Patel",   date: "May 5", product: "Walnut wall shelf set",    qty: 2, total: 236, status: "Delivered" },
  { id: "ORD-7807", buyer: "J. Müller",  date: "May 4", product: "Linen weave throw pillow", qty: 4, total: 152, status: "Delivered" },
  { id: "ORD-7801", buyer: "E. Tanaka",  date: "May 3", product: "Walnut wall shelf set",    qty: 1, total: 118, status: "Refunded" },
];

export const SELLER_PRODUCTS = [
  { id: "SP-01", name: "Walnut wall shelf set",    stock: 24, price: 118, sold: 142, status: "Active" },
  { id: "SP-02", name: "Linen weave throw pillow", stock: 86, price:  38, sold: 412, status: "Active" },
  { id: "SP-03", name: "Oak side table",           stock:  3, price: 248, sold:  37, status: "Low stock" },
  { id: "SP-04", name: "Brass picture rail",       stock:  0, price:  56, sold: 188, status: "Out of stock" },
  { id: "SP-05", name: "Hand-loomed runner rug",   stock: 12, price: 192, sold:  61, status: "Active" },
  { id: "SP-06", name: "Felted wool coasters (4)", stock: 38, price:  22, sold: 274, status: "Active" },
];

export const APPROVALS = [
  { id: "AP-301", seller: "Hearth & Home",    cat: "Home & Living",  submitted: "May 9", docs: "Complete" },
  { id: "AP-300", seller: "Pixel Forge",      cat: "Tech & Gadgets", submitted: "May 9", docs: "Pending tax ID" },
  { id: "AP-298", seller: "Bloom Botanicals", cat: "Beauty",         submitted: "May 8", docs: "Complete" },
  { id: "AP-296", seller: "Atlas Outfitters", cat: "Sports",         submitted: "May 7", docs: "Complete" },
  { id: "AP-294", seller: "Quill Paper Co.",  cat: "Stationery",     submitted: "May 6", docs: "Pending bank" },
];

export const MODERATION = [
  { id: "MOD-118", product: "Vintage analog watch",   seller: "Tide & Time",      reason: "Counterfeit risk", flagged: "May 9" },
  { id: "MOD-117", product: "Wellness elixir 6-pack", seller: "Verde Apothecary", reason: "Health claims",    flagged: "May 8" },
  { id: "MOD-115", product: "Designer handbag",       seller: "Hide & Seek",      reason: "Trademark",        flagged: "May 7" },
];

export const MESSAGES = [
  { id: "m1", who: "Lumen Studio",      last: "Your lamp shipped — should be there Thu.", time: "2h", unread: false, role: "seller" },
  { id: "m2", who: "Brewhaus",          last: "Yes, the kettle works on induction.",       time: "5h", unread: true,  role: "seller" },
  { id: "m3", who: "Bazaratty Support", last: "We've credited the return.",                time: "1d", unread: false, role: "support" },
  { id: "m4", who: "Verde Apothecary", last: "We've added a fragrance-free option.",      time: "2d", unread: false, role: "seller" },
];

export const NOTIFICATIONS = [
  { id: "n1", title: "Order delivered",       body: "ORD-7790 arrived at your address.",    time: "1h", kind: "ok" },
  { id: "n2", title: "Price drop",            body: "Mechanical keyboard kit is 12% off.",  time: "4h", kind: "info" },
  { id: "n3", title: "Message from Brewhaus", body: "Reply to your question about kettle.", time: "5h", kind: "msg" },
  { id: "n4", title: "Wishlist back in stock",body: "Cotton play mat is available again.",  time: "1d", kind: "info" },
];

export const SERIES_REV     = [42, 38, 51, 47, 60, 58, 64, 70, 66, 78, 74, 88, 92, 104];
export const SERIES_ORD     = [12, 14, 11, 18, 16, 22, 19, 24, 26, 22, 28, 31, 30, 35];
export const SERIES_PVW     = [220,260,240,310,290,360,420,380,460,490,520,560,610,680];
export const SERIES_USR     = [8,  9,  12, 11, 15, 14, 18, 22, 20, 25, 27, 30, 32, 38];
export const SERIES_REV_12M = [22, 28, 31, 36, 42, 48, 55, 61, 70, 82, 96, 118];

export const PHOTOS = {
  hero1:    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
  hero2:    "https://images.unsplash.com/photo-1581539250439-c96689b516dd?w=900&q=80",
  hero3:    "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=900&q=80",
  hero4:    "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=900&q=80",
  hero5:    "https://images.unsplash.com/photo-1567016526105-22da7c13161a?w=900&q=80",
  store:    "https://images.unsplash.com/photo-1604754742629-3e5728249d73?w=900&q=80",
  workshop: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=900&q=80",
  pillow:   "https://images.unsplash.com/photo-1592078615290-033ee584e267?w=800&q=80",
  kettle:   "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=800&q=80",
  card:     "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
  lamp:     "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&q=80",
  serum:    "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80",
  playmat:  "https://images.unsplash.com/photo-1607344645866-009c320b63e0?w=800&q=80",
  yogamat:  "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=80",
  desk:     "https://images.unsplash.com/photo-1519219788971-8d9797e0928e?w=800&q=80",
  shoe:     "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80",
  shelf:    "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=800&q=80",
  skincare: "https://images.unsplash.com/photo-1570554886111-e80fcca6a029?w=800&q=80",
  keyboard: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&q=80",
  cat_home:       "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80",
  cat_fashion:    "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&q=80",
  cat_tech:       "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&q=80",
  cat_beauty:     "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=600&q=80",
  cat_kids:       "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&q=80",
  cat_sports:     "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600&q=80",
  cat_stationery: "https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?w=600&q=80",
  cat_wellness:   "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=600&q=80",
  seller_maple:    "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&q=80",
  seller_brewhaus: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&q=80",
  seller_verde:    "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=400&q=80",
};

export const PRODUCT_PHOTO = {
  p1: PHOTOS.pillow, p2: PHOTOS.kettle, p3: PHOTOS.card,     p4: PHOTOS.lamp,
  p5: PHOTOS.serum,  p6: PHOTOS.playmat, p7: PHOTOS.yogamat, p8: PHOTOS.desk,
  p9: PHOTOS.shoe,   p10: PHOTOS.shelf,  p11: PHOTOS.skincare, p12: PHOTOS.keyboard,
};

export const CATEGORY_PHOTO = {
  home: PHOTOS.cat_home, fashion: PHOTOS.cat_fashion, tech: PHOTOS.cat_tech,
  beauty: PHOTOS.cat_beauty, kids: PHOTOS.cat_kids, sports: PHOTOS.cat_sports,
  stationery: PHOTOS.cat_stationery, wellness: PHOTOS.cat_wellness,
};

const DATA = {
  CATEGORIES, PRODUCTS, ORDERS_BUYER, ORDERS_SELLER, SELLER_PRODUCTS,
  APPROVALS, MODERATION, MESSAGES, NOTIFICATIONS,
  SERIES_REV, SERIES_ORD, SERIES_PVW, SERIES_USR, SERIES_REV_12M,
  PHOTOS, PRODUCT_PHOTO, CATEGORY_PHOTO,
};

export default DATA;
