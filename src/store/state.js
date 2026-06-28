/* Global Store & Localization State Manager with LocalStorage Persistence */

export const CATEGORY_TREE = [
  { id: 'discounts', titleAr: 'تخفيضات', titleEn: 'Discounts', image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=50&q=80' },
  { id: 'pink-tale', titleAr: 'حكاية وردية', titleEn: 'A pink tale', image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=50&q=80' },
  {
    id: 'dibaj',
    titleAr: 'ديباج',
    titleEn: 'Dibaj',
    image: '/linda_yellow_comforter.png',
    subcategories: [
      {
        id: 'dibaj-summer',
        titleAr: 'صيفي',
        titleEn: 'صيفي',
        image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=50&q=80',
        subcategories: [
          { id: 'dibaj-summer-double', titleAr: 'شخصين', titleEn: 'شخصين', image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=50&q=80' },
          { id: 'dibaj-summer-single', titleAr: 'شخص', titleEn: 'شخص', image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=50&q=80' },
          { id: 'dibaj-summer-queen', titleAr: 'كوين', titleEn: 'كوين', image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=50&q=80' }
        ]
      },
      {
        id: 'dibaj-winter',
        titleAr: 'شتوي',
        titleEn: 'شتوي',
        image: 'https://images.unsplash.com/photo-1511978241413-aae96a6f5da1?w=50&q=80',
        subcategories: [
          { id: 'dibaj-winter-double', titleAr: 'شخصين', titleEn: 'شخصين', image: 'https://images.unsplash.com/photo-1511978241413-aae96a6f5da1?w=50&q=80' },
          { id: 'dibaj-winter-single', titleAr: 'شخص', titleEn: 'شخص', image: 'https://images.unsplash.com/photo-1511978241413-aae96a6f5da1?w=50&q=80' },
          { id: 'dibaj-winter-queen', titleAr: 'كوين', titleEn: 'كوين', image: 'https://images.unsplash.com/photo-1511978241413-aae96a6f5da1?w=50&q=80' }
        ]
      }
    ]
  },
  {
    id: 'bridal-boxes',
    titleAr: 'بوكس معاريس',
    titleEn: 'Bridal Boxes',
    image: '/bridal_bedding_banner.png',
    subcategories: [
      { id: 'bridal-boxes-single', titleAr: 'شخص', titleEn: 'شخص', image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=50&q=80' },
      { id: 'bridal-boxes-double', titleAr: 'شخصين', titleEn: 'شخصين', image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=50&q=80' }
    ]
  },
  {
    id: 'bedspreads',
    titleAr: 'مفارش مضغوطة',
    titleEn: 'Bedspreads',
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=50&q=80',
    subcategories: [
      { id: 'bedspreads-single', titleAr: 'شخص', titleEn: 'شخص', image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=50&q=80' },
      { id: 'bedspreads-double', titleAr: 'شخصين', titleEn: 'شخصين', image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=50&q=80' }
    ]
  },
  { id: 'kids-bedding', titleAr: 'مفارش اطفال', titleEn: 'Kids Bedding', image: '/kids_bedding_banner.png' },
  { id: 'duvet-covers', titleAr: 'تلبيس لحاف', titleEn: 'Duvet Covers', image: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=50&q=80' },
  { id: 'duvets', titleAr: 'حشوة مفرش', titleEn: 'Duvets', image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=50&q=80' },
  { id: 'mattress-toppers', titleAr: 'لباد سرير', titleEn: 'Mattress Toppers', image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=50&q=80' },
  { id: 'bed-pillows', titleAr: 'مخدات نوم', titleEn: 'Bed Pillows', image: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=50&q=80' },
  { id: 'bedsheets', titleAr: 'شراشف السرير', titleEn: 'Bedsheets', image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=50&q=80' },
  { id: 'waterproof-sheets', titleAr: 'شراشف عازلة', titleEn: 'Waterproof Sheets', image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=50&q=80' },
  { id: 'bath-towels', titleAr: 'فوط الحمام', titleEn: 'Bath Towels', image: 'https://images.unsplash.com/photo-1616627547901-52f2066fa19b?w=50&q=80' },
  { id: 'bathrobes', titleAr: 'ارواب حمام', titleEn: 'Bathrobes', image: 'https://images.unsplash.com/photo-1616627547901-52f2066fa19b?w=50&q=80' },
  { id: 'mattresses', titleAr: 'مراتب السرير', titleEn: 'Mattresses', image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=50&q=80' },
  { id: 'packages', titleAr: 'بكجات', titleEn: 'Packages', image: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=50&q=80' },
  {
    id: 'newborn',
    titleAr: 'حديثي الولادة',
    titleEn: 'Newborn',
    image: 'https://images.unsplash.com/photo-1515488042361-404e9250afef?w=50&q=80',
    subcategories: [
      { id: 'newborn-bed-cover', titleAr: 'تلبيسة السرير', titleEn: 'bed cover', image: 'https://images.unsplash.com/photo-1515488042361-404e9250afef?w=50&q=80' },
      { id: 'newborn-prisoner', titleAr: 'حباسة', titleEn: 'prisoner', image: 'https://images.unsplash.com/photo-1515488042361-404e9250afef?w=50&q=80' },
      { id: 'wooden-bed', titleAr: 'سرير خشب', titleEn: 'wooden bed', image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=50&q=80' },
      { id: 'strollers', titleAr: 'عراية', titleEn: 'Cart', image: '/stroller_grey.png' }
    ]
  },
  {
    id: 'blankets',
    titleAr: 'بطانيات',
    titleEn: 'Blankets',
    image: 'https://images.unsplash.com/photo-1511978241413-aae96a6f5da1?w=50&q=80',
    subcategories: [
      { id: 'blankets-single', titleAr: 'شخص', titleEn: 'شخص', image: 'https://images.unsplash.com/photo-1511978241413-aae96a6f5da1?w=50&q=80' },
      { id: 'blankets-double', titleAr: 'شخصين', titleEn: 'شخصين', image: 'https://images.unsplash.com/photo-1511978241413-aae96a6f5da1?w=50&q=80' }
    ]
  },
  {
    id: 'brands',
    titleAr: 'براندات',
    titleEn: 'Brands',
    image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=50&q=80',
    subcategories: [
      { id: 'brand-feather', titleAr: 'فذر', titleEn: 'Feather', image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=50&q=80' },
      { id: 'brand-silk', titleAr: 'حرير', titleEn: 'Silk', image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=50&q=80' },
      { id: 'brand-calvo', titleAr: 'كالفو', titleEn: 'Calvo', image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=50&q=80' },
      { id: 'brand-venice', titleAr: 'فينيسيا', titleEn: 'Venezia', image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=50&q=80' },
      { id: 'brand-highcrest', titleAr: 'هاي كريست', titleEn: 'High Crest', image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=50&q=80' }
    ]
  }
];

export function findCategoryInTree(tree, key) {
  for (let i = 0; i < tree.length; i++) {
    const cat = tree[i];
    if (cat.id === key) return cat;
    if (cat.subcategories) {
      const found = findCategoryInTree(cat.subcategories, key);
      if (found) return found;
    }
  }
  return null;
}

const DEFAULT_PRODUCTS = [
  {
    id: 1,
    category: "double",
    categoryEn: "Double Bedding",
    categoryAr: "شخصين",
    titleEn: "Linda Bedding Set | Soft Comforter with Filling - Linda-006",
    titleAr: "لحاف ليندا | نظام تلبيسة مع حشوة | خامة ناعمة - Linda-006",
    price: 22.500,
    originalPrice: 35.000,
    isNew: true,
    isBestSeller: true,
    isFeatured: true,
    stock: 100,
    sku: "LN-YEL-006",
    barcode: "6901234567801",
    rating: 4.8,
    reviewsCount: 34,
    image: "/linda_yellow_comforter.png",
    images: ["/linda_yellow_comforter.png"],
    colors: [{ nameEn: "Linda Yellow", nameAr: "أصفر ليندا", code: "#f9d71c" }],
    sizes: ["King Size"],
    descriptionEn: "Experience absolute sleeping comfort with Linda soft comforter cover system. Crafted with high quality materials.",
    descriptionAr: "جرب الراحة المطلقة للنوم مع نظام غطاء لحاف ليندا الناعم المبطن. مصنوع من مواد عالية الجودة ووبرة ممتازة.",
    specsEn: { Material: "Premium Microfiber", Origin: "Imported" },
    specsAr: { "الخامة": "مايكروفايبر ناعم", "المنشأ": "مستورد" }
  },
  {
    id: 2,
    category: "double",
    categoryEn: "Double Bedding",
    categoryAr: "شخصين",
    titleEn: "Luxury King Size Jacquard Comforter Set | 6 Pieces - NEIVE-001",
    titleAr: "لحاف ديباج كينج سايز | جاكار | 6 قطع - NEIVE-001",
    price: 16.900,
    originalPrice: 24.500,
    isNew: true,
    isBestSeller: true,
    isFeatured: true,
    stock: 100,
    sku: "NV-WHT-001",
    barcode: "6901234567802",
    rating: 4.9,
    reviewsCount: 52,
    image: "/neive_white_comforter.png",
    images: ["/neive_white_comforter.png"],
    colors: [{ nameEn: "Jacquard White", nameAr: "أبيض جاكار", code: "#ffffff" }],
    sizes: ["King Size (240x260cm)"],
    descriptionEn: "Luxury jacquard comforter set with delicate embroidery and cotton backing for comfort and style.",
    descriptionAr: "لحاف ديباج جاكار فاخر منسوج بنقوش يدوية راقية مع بطانة قطنية توفر النعومة والدفء المعتدل.",
    specsEn: { Material: "Jacquard & Cotton", Origin: "Imported" },
    specsAr: { "الخامة": "جاكار وقطن طبيعي", "المنشأ": "مستورد" }
  },
  {
    id: 3,
    category: "double",
    categoryEn: "Double Bedding",
    categoryAr: "شخصين",
    titleEn: "Bana Printed Comforter Set | Soft Cover with Filling - BANA 104",
    titleAr: "لحاف بانا | نظام تلبيسة مع حشوة | مشجر | خامة ناعمة - BANA 104",
    price: 22.500,
    originalPrice: 35.000,
    isNew: true,
    isBestSeller: true,
    isFeatured: true,
    stock: 100,
    sku: "BN-PNK-104",
    barcode: "6901234567803",
    rating: 4.7,
    reviewsCount: 19,
    image: "/bana_pink_comforter.png",
    images: ["/bana_pink_comforter.png"],
    colors: [{ nameEn: "Bana Pink", nameAr: "وردي بانا", code: "#ecd4db" }],
    sizes: ["King Size"],
    descriptionEn: "Printed double comforter cover set from Bana brand. Delicate textures and premium filling.",
    descriptionAr: "طقم غطاء لحاف بانا المشجر بنظام التلبيسة الفاخر مع حشوة متوسطة السُمك لراحة طوال فصول السنة.",
    specsEn: { Material: "Soft Combed Cotton", Origin: "Imported" },
    specsAr: { "الخامة": "قطن ناعم ممشط", "المنشأ": "مستورد" }
  },
  {
    id: 4,
    category: "double",
    categoryEn: "Double Bedding",
    categoryAr: "شخصين",
    titleEn: "Bana Printed Comforter Set | Soft Cover with Filling - BANA 101",
    titleAr: "لحاف بانا | نظام تلبيسة مع حشوة | مشجر | خامة ناعمة - BANA 101",
    price: 22.500,
    originalPrice: 35.000,
    isNew: true,
    isBestSeller: true,
    isFeatured: true,
    stock: 100,
    sku: "BN-PRP-101",
    barcode: "6901234567804",
    rating: 4.6,
    reviewsCount: 8,
    image: "/bana_purple_comforter.png",
    images: ["/bana_purple_comforter.png"],
    colors: [{ nameEn: "Bana Purple", nameAr: "بنفسجي بانا", code: "#a370f7" }],
    sizes: ["King Size"],
    descriptionEn: "Bana luxury printed comforter set in rich purple color, perfect design for modern rooms.",
    descriptionAr: "لحاف بانا المشجر بلون بنفسجي فاخر بتصميم عصري يناسب غرف النوم الحديثة ونظام تلبيسة مريح وعملي.",
    specsEn: { Material: "Luxury Microfiber", Origin: "Imported" },
    specsAr: { "الخامة": "مايكروفايبر ناعم", "المنشأ": "مستورد" }
  },
  {
    id: 5,
    category: "double",
    categoryEn: "Double Bedding",
    categoryAr: "شخصين",
    titleEn: "Bana Printed Comforter Set | Soft Cover with Filling - BANA 102",
    titleAr: "لحاف بانا | نظام تلبيسة مع حشوة | مشجر | خامة ناعمة - BANA 102",
    price: 22.500,
    originalPrice: 35.000,
    isNew: true,
    isBestSeller: true,
    isFeatured: true,
    stock: 100,
    sku: "BN-BLU-102",
    barcode: "6901234567805",
    rating: 4.9,
    reviewsCount: 41,
    image: "/bana_blue_comforter.png",
    images: ["/bana_blue_comforter.png"],
    colors: [{ nameEn: "Bana Blue", nameAr: "أزرق بانا", code: "#d9e2ec" }],
    sizes: ["King Size"],
    descriptionEn: "Blue printed comforter cover set from Bana brand. Double sided layout for multiple bedroom themes.",
    descriptionAr: "لحاف بانا بنقوش مشجرة باللون الأزرق المريح. تصميم مميز بوجهين ملائم لديكورات غرف النوم الكلاسيكية والحديثة.",
    specsEn: { Material: "Premium Cotton Mix", Origin: "Imported" },
    specsAr: { "الخامة": "مزيج قطن ممتاز", "المنشأ": "مستورد" }
  },
  {
    id: 6,
    category: "double",
    categoryEn: "Double Bedding",
    categoryAr: "شخصين",
    titleEn: "Bana Printed Comforter Set | Soft Cover with Filling - BANA 103",
    titleAr: "لحاف بانا | نظام تلبيسة مع حشوة | مشجر | خامة ناعمة - BANA 103",
    price: 22.500,
    originalPrice: 35.000,
    isNew: true,
    isBestSeller: true,
    isFeatured: true,
    stock: 100,
    sku: "BN-BGE-103",
    barcode: "6901234567806",
    rating: 4.9,
    reviewsCount: 15,
    image: "/bana_beige_comforter.png",
    images: ["/bana_beige_comforter.png"],
    colors: [{ nameEn: "Bana Beige", nameAr: "بيج بانا", code: "#c19a6b" }],
    sizes: ["King Size"],
    descriptionEn: "Luxury comforter set in warm beige color with elegant floral patterns, styled in a modern high-end bedroom.",
    descriptionAr: "لحاف بانا المشجر بنظام تلبيسة مبطن باللون البيج الدافئ ونقوش ناعمة كلاسيكية لغرفة نوم مريحة وأنيقة.",
    specsEn: { Material: "Premium Cotton Mix", Origin: "Imported" },
    specsAr: { "الخامة": "مزيج قطن ممتاز", "المنشأ": "مستورد" }
  },
  {
    id: 7,
    category: "strollers",
    categoryEn: "Baby Strollers",
    categoryAr: "عربات الأطفال",
    titleEn: "Premium Baby Stroller | Model No. 2700",
    titleAr: "عربة بيبي | موديل رقم 2700",
    price: 27.000,
    originalPrice: 27.000,
    isNew: true,
    isBestSeller: false,
    isFeatured: false,
    stock: 100,
    sku: "ST-GRY-2700",
    barcode: "6901234567807",
    rating: 4.8,
    reviewsCount: 22,
    image: "/stroller_grey.png",
    images: ["/stroller_grey.png"],
    colors: [{ nameEn: "Grey", nameAr: "رمادي", code: "#808080" }],
    sizes: ["Standard"],
    descriptionEn: "High quality premium baby stroller with adjustable seating and suspension for smooth rides.",
    descriptionAr: "عربة أطفال فاخرة وعملية تتميز بهيكل قوي وخفيف الوزن ومقعد قابل للتعديل لتوفير الراحة القصوى لطفلك.",
    specsEn: { Material: "Aluminum Frame", Origin: "Imported" },
    specsAr: { "الخامة": "إطار ألومنيوم معزز", "المنشأ": "مستورد" }
  },
  {
    id: 8,
    category: "strollers",
    categoryEn: "Baby Strollers",
    categoryAr: "عربات الأطفال",
    titleEn: "Premium Baby Stroller | Model No. 2500",
    titleAr: "عربة بيبي | موديل رقم 2500",
    price: 25.000,
    originalPrice: 25.000,
    isNew: true,
    isBestSeller: false,
    isFeatured: false,
    stock: 100,
    sku: "ST-BLK-2500",
    barcode: "6901234567808",
    rating: 4.7,
    reviewsCount: 14,
    image: "/stroller_black.png",
    images: ["/stroller_black.png"],
    colors: [{ nameEn: "Black Rose", nameAr: "أسود وردي", code: "#000000" }],
    sizes: ["Standard"],
    descriptionEn: "Luxury baby stroller in black color with elegant rose gold metallic accents and safety harness.",
    descriptionAr: "عربة أطفال فاخرة باللون الأسود الملكي مع إضافات بلون روز جولد اللامع وحزام أمان خماسي النقاط.",
    specsEn: { Material: "Premium Carbon Steel", Origin: "Imported" },
    specsAr: { "الخامة": "فولاذ كربوني خفيف", "المنشأ": "مستورد" }
  },
  {
    id: 9,
    category: "strollers",
    categoryEn: "Baby Strollers",
    categoryAr: "عربات الأطفال",
    titleEn: "Premium Baby Stroller | Model No. 6800",
    titleAr: "عربانة بيبي | موديل رقم 6800",
    price: 42.000,
    originalPrice: 42.000,
    isNew: true,
    isBestSeller: false,
    isFeatured: false,
    stock: 100,
    sku: "ST-TEL-6800",
    barcode: "6901234567809",
    rating: 4.9,
    reviewsCount: 31,
    image: "/stroller_teal.png",
    images: ["/stroller_teal.png"],
    colors: [{ nameEn: "Teal Green", nameAr: "أخضر تيل", code: "#008080" }],
    sizes: ["Standard"],
    descriptionEn: "Stylish teal green baby stroller with lightweight metallic frame and quick folding mechanism.",
    descriptionAr: "عربة أطفال بتصميم عصري باللون التركوازي الجذاب مع ميكانيكية طي سريعة بيد واحدة لسهولة التنقل.",
    specsEn: { Material: "Reinforced Alloy", Origin: "Imported" },
    specsAr: { "الخامة": "سبائك معززة خفيفة", "المنشأ": "مستورد" }
  },
  {
    id: 10,
    category: "strollers",
    categoryEn: "Baby Strollers",
    categoryAr: "عربات الأطفال",
    titleEn: "Premium Baby Stroller | Model No. 2680",
    titleAr: "عربانة بيبي | موديل رقم 2680",
    price: 32.000,
    originalPrice: 32.000,
    isNew: true,
    isBestSeller: false,
    isFeatured: false,
    stock: 100,
    sku: "ST-RED-2680",
    barcode: "6901234567810",
    rating: 4.8,
    reviewsCount: 16,
    image: "/stroller_red.png",
    images: ["/stroller_red.png"],
    colors: [{ nameEn: "Red Beige", nameAr: "أحمر بيج", code: "#a30000" }],
    sizes: ["Standard"],
    descriptionEn: "Red and beige baby stroller with double layer canopy and large shopping basket.",
    descriptionAr: "عربة أطفال باللونين الأحمر والبيج مع مظلة واقية مزدوجة وسلة تسوق سفلية واسعة لتخزين الاحتياجات.",
    specsEn: { Material: "Durable Steel Frame", Origin: "Imported" },
    specsAr: { "الخامة": "هيكل فولاذي متين", "المنشأ": "مستورد" }
  },
  {
    id: 11,
    category: "double",
    categoryEn: "Double Bedding",
    categoryAr: "شخصين",
    titleEn: "Jada Embroidered Comforter Set | 100% Cotton 6 Pieces - jada-014",
    titleAr: "لحاف جادا مطرز | قطن 100% نفرين 6 قطع - jada-014",
    price: 22.500,
    originalPrice: 35.000,
    isNew: true,
    isBestSeller: false,
    isFeatured: false,
    stock: 100,
    sku: "JD-PNK-014",
    barcode: "6901234567811",
    rating: 4.8,
    reviewsCount: 12,
    image: "/bana_pink_comforter.png",
    images: ["/bana_pink_comforter.png"],
    colors: [{ nameEn: "Jada Pink", nameAr: "وردي جادا", code: "#f3c1c6" }],
    sizes: ["King Size"],
    descriptionEn: "Premium 100% Cotton embroidered comforter set from Jada collection. Excellent feel and elegant stitches.",
    descriptionAr: "طقم لحاف جادا المطرز والمصنوع 100% من القطن الطبيعي الفاخر. نعومة فائقة ووبرة ناعمة تدوم طويلاً.",
    specsEn: { Material: "100% Natural Cotton", Origin: "Imported" },
    specsAr: { "الخامة": "قطن طبيعي 100%", "المنشأ": "مستورد" }
  },
  {
    id: 12,
    category: "double",
    categoryEn: "Double Bedding",
    categoryAr: "شخصين",
    titleEn: "Jada Embroidered Comforter Set | 100% Cotton 6 Pieces - jada-012",
    titleAr: "لحاف جادا مطرز | قطن 100% نفرين 6 قطع - jada-012",
    price: 22.500,
    originalPrice: 35.000,
    isNew: true,
    isBestSeller: false,
    isFeatured: false,
    stock: 100,
    sku: "JD-BGE-012",
    barcode: "6901234567812",
    rating: 4.8,
    reviewsCount: 19,
    image: "/bana_beige_comforter.png",
    images: ["/bana_beige_comforter.png"],
    colors: [{ nameEn: "Jada Beige", nameAr: "بيج جادا", code: "#f5f5dc" }],
    sizes: ["King Size"],
    descriptionEn: "Premium 100% Cotton embroidered comforter set from Jada collection in warm beige color.",
    descriptionAr: "طقم لحاف جادا المطرز والمصنوع 100% من القطن الطبيعي بلون بيج أنيق ومريح للنفس.",
    specsEn: { Material: "100% Natural Cotton", Origin: "Imported" },
    specsAr: { "الخامة": "قطن طبيعي 100%", "المنشأ": "مستورد" }
  },
  {
    id: 13,
    category: "bridal",
    categoryEn: "Bridal Bedding",
    categoryAr: "مفارش عرايسي",
    titleEn: "Luxury Lace Bridal Bedding Set 8 Pieces",
    titleAr: "طقم لحاف عرايسي دانتيل فاخر 8 قطع",
    price: 85.000,
    originalPrice: 120.000,
    isNew: true,
    isBestSeller: true,
    isFeatured: true,
    stock: 50,
    sku: "BR-LCE-001",
    barcode: "6901234567813",
    rating: 5.0,
    reviewsCount: 5,
    image: "/bridal_bedding_banner.png",
    images: ["/bridal_bedding_banner.png"],
    colors: [{ nameEn: "Bridal White", nameAr: "أبيض عرايسي", code: "#ffffff" }],
    sizes: ["Super King Size"],
    descriptionEn: "Luxury embroidered bridal comforter set with delicate lace trim, adding a touch of royalty to your bedroom.",
    descriptionAr: "طقم لحاف عرايسي مطرز بالدانتيل الفاخر. يضفي لمسة ملكية وجمالاً راقياً لغرفة النوم لليلة العمر.",
    specsEn: { Material: "Premium Cotton Satin", Origin: "Imported" },
    specsAr: { "الخامة": "ساتان قطني فاخر", "المنشأ": "مستورد" }
  },
  {
    id: 14,
    category: "kids",
    categoryEn: "Kids Bedding",
    categoryAr: "مفارش الأطفال",
    titleEn: "Soft Cotton Kids Bedding Set Comforter",
    titleAr: "طقم لحاف أطفال مشجر قطن ناعم",
    price: 18.000,
    originalPrice: 25.000,
    isNew: true,
    isBestSeller: true,
    isFeatured: true,
    stock: 75,
    sku: "KD-PNK-001",
    barcode: "6901234567814",
    rating: 4.8,
    reviewsCount: 14,
    image: "/kids_bedding_banner.png",
    images: ["/kids_bedding_banner.png"],
    colors: [{ nameEn: "Kids Pink", nameAr: "وردي أطفال", code: "#ffb6c1" }],
    sizes: ["Single Size"],
    descriptionEn: "Fun and colorful kids bedding set comforter made from 100% natural soft cotton yarn.",
    descriptionAr: "لحاف أطفال قطني ناعم وصحي 100% بنقوش رسومية ممتعة وألوان زاهية يحبها طفلك.",
    specsEn: { Material: "100% Soft Cotton", Origin: "Imported" },
    specsAr: { "الخامة": "قطن طبيعي ناعم 100%", "المنشأ": "مستورد" }
  }
];

class StateManager {
  constructor() {
    this.listeners = {};
    
    // Clear and force-migrate local storage catalog to the new Linda/Bana/Strollers design
    let storedProducts = localStorage.getItem("sana_products");
    if (storedProducts) {
      try {
        const parsed = JSON.parse(storedProducts);
        if (parsed.length === 0 || !parsed[0].titleAr.includes("ليندا")) {
          localStorage.removeItem("sana_products");
          storedProducts = null;
        }
      } catch (e) {
        localStorage.removeItem("sana_products");
        storedProducts = null;
      }
    }

    this.state = {
      products: storedProducts ? JSON.parse(storedProducts) : DEFAULT_PRODUCTS,
      cart: JSON.parse(localStorage.getItem("sana_cart") || "[]"),
      wishlist: JSON.parse(localStorage.getItem("sana_wishlist") || "[]"),
      lang: localStorage.getItem("sana_lang") || "ar", // Default to Arabic (as per kuwait stores preference)
      currency: "KWD",
      currencyRate: 3.25, // 1 KWD = 3.25 USD
      coupons: [
        { code: "SAVE10", discount: 10, type: "percent" },
        { code: "SAVE20", discount: 20, type: "percent" },
        { code: "WELCOM5", discount: 5.000, type: "fixed" }
      ],
      appliedCoupon: JSON.parse(localStorage.getItem("sana_applied_coupon") || "null"),
      orders: JSON.parse(localStorage.getItem("sana_orders") || "[]"),
      user: JSON.parse(localStorage.getItem("sana_user") || JSON.stringify({
        name: "خالد العتيبي",
        email: "khaled@domain.com",
        phone: "+965 99887766",
        addresses: [
          { id: 1, type: "المنزل", typeEn: "Home", city: "الكويت", area: "السالمية", street: "شارع الخليج العربي", building: "برج الزمردة", floor: "الدور 5", block: "قطعة 4" }
        ]
      })),
      searchQuery: "",
      filters: {
        category: "all",
        priceRange: [0, 400],
        colors: [],
        sizes: [],
        availability: "all",
        sort: "featured"
      },
      lastProduct: JSON.parse(localStorage.getItem("sana_last_product") || "null"),
      bannerPairs: JSON.parse(localStorage.getItem("sana_banner_pairs") || JSON.stringify([
        [
          { id: 'bridal', nameAr: 'مفارش عرايسي', nameEn: 'Bridal Bedding', image: '/bridal_bedding_banner.png' },
          { id: 'kids', nameAr: 'مفارش الأطفال', nameEn: 'Kids Bedding', image: '/kids_bedding_banner.png' }
        ],
        [
          { id: 'toppers', nameAr: 'لباد ومخدات', nameEn: 'Toppers & Pillows', image: '/toppers_pillows_banner.png' },
          { id: 'sheets', nameAr: 'شراشف سرير', nameEn: 'Bed Sheets', image: '/bed_sheets_banner.png' }
        ],
        [
          { id: 'single', nameAr: 'شخص واحد', nameEn: 'Single Bedding', image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&q=80' },
          { id: 'bath', nameAr: 'مستلزمات الحمام', nameEn: 'Bath Essentials', image: 'https://images.unsplash.com/photo-1616627547901-52f2066fa19b?w=800&q=80' }
        ]
      ])),
      homeSlides: JSON.parse(localStorage.getItem("sana_home_slides") || JSON.stringify([
        {
          subtitleEn: "LUXURY DIBBAJ COLLECTION",
          subtitleAr: "مجموعة الديباج الفاخرة",
          titleEn: "Five-Star Bedding Comfort For Your Home",
          titleAr: "راحة فندقية تليق بغرفة نومك",
          descEn: "Discover our exclusive comforters and custom toppers made to guarantee a deep peaceful sleep.",
          descAr: "اكتشف تشكيلاتنا الحصرية من الديباج القطني الفاخر واللباد الطبيعي المريح لراحة لا تضاهى.",
          link: "#/category",
          btnTextEn: "Shop Collection",
          btnTextAr: "تسوق المجموعة",
          image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1600&q=80"
        },
        {
          subtitleEn: "PREMIUM TURKISH BATH ROBES",
          subtitleAr: "مستلزمات الاستحمام والأرواب",
          titleEn: "Premium Absorbent Turkish Linens",
          titleAr: "نعومة وامتصاص فائق الجودة",
          descEn: "Turkish cotton bathrobes and towels crafted for everyday luxury and high absorption.",
          descAr: "أرواب ومناشف قطنية 100% بنعومة فائقة تناسب احتياجات عائلتك اليومية.",
          link: "#/category?category=bath",
          btnTextEn: "Explore Bathrobe Sets",
          btnTextAr: "تصفح المناشف والأرواب",
          image: "https://images.unsplash.com/photo-1616627547901-52f2066fa19b?w=1600&q=80"
        }
      ]))
    };
  }

  // Save specific core properties to LocalStorage
  save(key) {
    try {
      if (key === "products") localStorage.setItem("sana_products", JSON.stringify(this.state.products));
      if (key === "cart") localStorage.setItem("sana_cart", JSON.stringify(this.state.cart));
      if (key === "wishlist") localStorage.setItem("sana_wishlist", JSON.stringify(this.state.wishlist));
      if (key === "lang") localStorage.setItem("sana_lang", this.state.lang);
      if (key === "orders") localStorage.setItem("sana_orders", JSON.stringify(this.state.orders));
      if (key === "user") localStorage.setItem("sana_user", JSON.stringify(this.state.user));
      if (key === "appliedCoupon") localStorage.setItem("sana_applied_coupon", JSON.stringify(this.state.appliedCoupon));
      if (key === "bannerPairs") localStorage.setItem("sana_banner_pairs", JSON.stringify(this.state.bannerPairs));
      if (key === "homeSlides") localStorage.setItem("sana_home_slides", JSON.stringify(this.state.homeSlides));
    } catch (e) {
      console.error("StateManager: localStorage write failed:", e);
      if (e.name === 'QuotaExceededError') {
        this.showToast(
          this.state.lang === "ar" 
            ? "عذراً، مساحة التخزين ممتلئة! يرجى استخدام صور أصغر حجماً للمنتج." 
            : "Storage limit exceeded! Please use smaller product images.", 
          "error"
        );
      }
    }
  }

  // Pub-sub pattern handlers
  subscribe(event, callback) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }
    this.listeners[event].push(callback);
    return () => {
      this.listeners[event] = this.listeners[event].filter(cb => cb !== callback);
    };
  }

  notify(event, data) {
    if (this.listeners[event]) {
      this.listeners[event].forEach(callback => callback(data || this.state));
    }
  }

  // Language management
  setLanguage(lang) {
    this.state.lang = lang;
    this.save("lang");
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    this.notify("lang_changed");
    this.notify("state_changed");
  }

  compareAttr(a, b) {
    const s1 = (a || "").toString().trim().toLowerCase();
    const s2 = (b || "").toString().trim().toLowerCase();
    return s1 === s2;
  }

  // Cart operations
  addToCart(product, quantity = 1, selectedColor = null, selectedSize = null) {
    if (product.stock <= 0) {
      this.showToast(this.state.lang === "ar" ? "عذراً، المنتج غير متوفر بالمخزون حالياً" : "Sorry, this product is out of stock.", "error");
      return;
    }

    const color = selectedColor || (product.colors && product.colors[0] ? product.colors[0].nameEn : null);
    const size = selectedSize || (product.sizes && product.sizes[0] ? product.sizes[0] : null);

    const existingIndex = this.state.cart.findIndex(
      item => item.product.id === product.id && this.compareAttr(item.color, color) && this.compareAttr(item.size, size)
    );

    const variation = product.variations && product.variations.find(
      v => (this.compareAttr(v.colorEn, color) || this.compareAttr(v.colorAr, color) || (v.color && this.compareAttr(v.color.nameEn, color))) && this.compareAttr(v.size, size)
    );
    const price = variation ? variation.price : product.price;
    const image = variation ? variation.image : product.image;

    if (existingIndex > -1) {
      const currentQty = this.state.cart[existingIndex].quantity;
      const availableStock = variation ? variation.stock : product.stock;
      if (currentQty + quantity > availableStock) {
        this.showToast(this.state.lang === "ar" ? `عذراً، لا تتوفر كمية كافية بالمخزون (الحد الأقصى: ${availableStock})` : `Sorry, not enough stock (Max: ${availableStock})`, "error");
        return;
      }
      this.state.cart[existingIndex].quantity += quantity;
    } else {
      this.state.cart.push({
        product,
        quantity,
        color,
        size,
        price,
        image
      });
    }

    this.save("cart");
    this.notify("cart_changed");
    this.notify("state_changed");
    this.showToast(this.state.lang === "ar" ? "تمت إضافة المنتج إلى عربة التسوق بنجاح" : "Product added to cart successfully!", "success");
  }

  updateCartQty(productId, color, size, qty) {
    const item = this.state.cart.find(
      i => i.product.id === productId && this.compareAttr(i.color, color) && this.compareAttr(i.size, size)
    );
    if (item) {
      if (qty <= 0) {
        this.removeFromCart(productId, color, size);
        return;
      }
      if (qty > item.product.stock) {
        this.showToast(this.state.lang === "ar" ? `الكمية المطلوبة تتعدى المخزون المتوفر (${item.product.stock})` : `Requested quantity exceeds stock (${item.product.stock})`, "error");
        return;
      }
      item.quantity = qty;
      this.save("cart");
      this.notify("cart_changed");
      this.notify("state_changed");
    }
  }

  removeFromCart(productId, color, size) {
    this.state.cart = this.state.cart.filter(
      item => !(item.product.id === productId && this.compareAttr(item.color, color) && this.compareAttr(item.size, size))
    );
    this.save("cart");
    this.notify("cart_changed");
    this.notify("state_changed");
    this.showToast(this.state.lang === "ar" ? "تمت إزالة المنتج من السلة" : "Product removed from cart.", "info");
  }

  clearCart() {
    this.state.cart = [];
    this.state.appliedCoupon = null;
    this.save("cart");
    this.save("appliedCoupon");
    this.notify("cart_changed");
    this.notify("state_changed");
  }

  setLastViewedProduct(id, titleAr, titleEn) {
    this.state.lastProduct = { id, titleAr, titleEn };
    localStorage.setItem("sana_last_product", JSON.stringify(this.state.lastProduct));
  }

  // Cart summary calculations
  getCartSubtotal() {
    return this.state.cart.reduce((total, item) => total + ((item.price || item.product.price) * item.quantity), 0);
  }

  getCartDiscount() {
    const subtotal = this.getCartSubtotal();
    const coupon = this.state.appliedCoupon;
    if (!coupon) return 0;
    if (coupon.type === "percent") {
      return (subtotal * coupon.discount) / 100;
    }
    return Math.min(coupon.discount, subtotal);
  }

  getCartTotal() {
    const subtotal = this.getCartSubtotal();
    const discount = this.getCartDiscount();
    const shipping = subtotal > 100 ? 0 : 2.500; // Free shipping over 100 KWD, otherwise 2.500 KWD
    return Math.max(0, subtotal - discount + shipping);
  }

  applyCouponCode(code) {
    const coupon = this.state.coupons.find(c => c.code.toUpperCase() === code.trim().toUpperCase());
    if (coupon) {
      this.state.appliedCoupon = coupon;
      this.save("appliedCoupon");
      this.notify("cart_changed");
      this.notify("state_changed");
      this.showToast(this.state.lang === "ar" ? `تم تطبيق الكوبون (${coupon.code}) بنجاح!` : `Coupon (${coupon.code}) applied successfully!`, "success");
      return true;
    } else {
      this.showToast(this.state.lang === "ar" ? "الكوبون المدخل غير صالح أو انتهت صلاحيته" : "Invalid or expired coupon code.", "error");
      return false;
    }
  }

  removeCoupon() {
    this.state.appliedCoupon = null;
    this.save("appliedCoupon");
    this.notify("cart_changed");
    this.notify("state_changed");
    this.showToast(this.state.lang === "ar" ? "تمت إزالة كوبون الخصم" : "Coupon removed.", "info");
  }

  // Wishlist management
  toggleWishlist(product) {
    const index = this.state.wishlist.findIndex(item => item.id === product.id);
    if (index > -1) {
      this.state.wishlist.splice(index, 1);
      this.showToast(this.state.lang === "ar" ? "تم إزالة المنتج من قائمة الأمنيات" : "Removed from wishlist.", "info");
    } else {
      this.state.wishlist.push(product);
      this.showToast(this.state.lang === "ar" ? "تمت إضافة المنتج لقائمة الأمنيات" : "Added to wishlist!", "success");
    }
    this.save("wishlist");
    this.notify("wishlist_changed");
    this.notify("state_changed");
  }

  isInWishlist(productId) {
    return this.state.wishlist.some(item => item.id === productId);
  }

  // Order submission
  createOrder(shippingInfo, paymentMethod, shippingCompany) {
    const newOrder = {
      id: "ORD-" + Math.floor(100000 + Math.random() * 900000),
      date: new Date().toLocaleDateString("en-US"),
      items: [...this.state.cart],
      subtotal: this.getCartSubtotal(),
      discount: this.getCartDiscount(),
      shippingCost: this.getCartSubtotal() > 100 ? 0 : 2.500,
      total: this.getCartTotal(),
      shippingInfo,
      paymentMethod,
      shippingCompany,
      status: "pending", // pending, shipped, delivered, cancelled
      statusHistory: [
        { status: "pending", time: new Date().toLocaleTimeString("en-US", { hour: '2-digit', minute: '2-digit' }) }
      ]
    };

    // Deduct stock
    this.state.cart.forEach(item => {
      const prod = this.state.products.find(p => p.id === item.product.id);
      if (prod) {
        prod.stock = Math.max(0, prod.stock - item.quantity);
      }
    });

    this.state.orders.unshift(newOrder);
    this.save("orders");
    this.save("products");
    this.clearCart();
    this.notify("orders_changed");
    this.notify("state_changed");
    return newOrder;
  }

  // Admin CRUD operations
  addProduct(productData) {
    const newId = this.state.products.length > 0 ? Math.max(...this.state.products.map(p => p.id)) + 1 : 1;
    const newProduct = {
      id: newId,
      ...productData,
      rating: 5.0,
      reviewsCount: 0,
      isNew: true
    };
    this.state.products.push(newProduct);
    this.save("products");
    this.notify("products_changed");
    this.notify("state_changed");
    this.showToast(this.state.lang === "ar" ? "تم إضافة المنتج بنجاح" : "Product added successfully!", "success");
    return newProduct;
  }

  editProduct(productId, productData) {
    const idx = this.state.products.findIndex(p => p.id === productId);
    if (idx > -1) {
      this.state.products[idx] = {
        ...this.state.products[idx],
        ...productData
      };
      this.save("products");
      this.notify("products_changed");
      this.notify("state_changed");
      this.showToast(this.state.lang === "ar" ? "تم تعديل بيانات المنتج" : "Product updated successfully!", "success");
      return true;
    }
    return false;
  }

  deleteProduct(productId) {
    this.state.products = this.state.products.filter(p => p.id !== productId);
    this.save("products");
    this.notify("products_changed");
    this.notify("state_changed");
    this.showToast(this.state.lang === "ar" ? "تم حذف المنتج بنجاح" : "Product deleted successfully!", "info");
  }

  updateOrderStatus(orderId, nextStatus) {
    const order = this.state.orders.find(o => o.id === orderId);
    if (order) {
      order.status = nextStatus;
      order.statusHistory.push({
        status: nextStatus,
        time: new Date().toLocaleTimeString("en-US", { hour: '2-digit', minute: '2-digit' })
      });
      this.save("orders");
      this.notify("orders_changed");
      this.notify("state_changed");
      this.showToast(this.state.lang === "ar" ? `تم تحديث حالة الطلب إلى (${nextStatus})` : `Order status updated to (${nextStatus})`, "success");
    }
  }

  editBanners(updatedBannerPairs) {
    this.state.bannerPairs = updatedBannerPairs;
    this.save("bannerPairs");
    this.notify("state_changed");
    this.showToast(this.state.lang === "ar" ? "تم حفظ البنرات بنجاح" : "Banners saved successfully!", "success");
  }

  editHomeSlides(updatedSlides) {
    this.state.homeSlides = updatedSlides;
    this.save("homeSlides");
    this.notify("state_changed");
    this.showToast(this.state.lang === "ar" ? "تم حفظ السلايدر بنجاح" : "Slider saved successfully!", "success");
  }

  // Toast UI trigger
  showToast(message, type = "success") {
    const container = document.getElementById("toast-container");
    if (!container) return;

    const toast = document.createElement("div");
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
      <span>${message}</span>
      <button style="background:none; border:none; color:inherit; font-size:1.1rem; cursor:pointer;" onclick="this.parentElement.remove()">&times;</button>
    `;

    container.appendChild(toast);
    setTimeout(() => {
      toast.remove();
    }, 4000);
  }

  // Filter updates
  setFilters(newFilters) {
    this.state.filters = {
      ...this.state.filters,
      ...newFilters
    };
    this.notify("filters_changed");
    this.notify("state_changed");
  }

  resetFilters() {
    this.state.filters = {
      category: "all",
      priceRange: [0, 400],
      colors: [],
      sizes: [],
      availability: "all",
      sort: "featured"
    };
    this.notify("filters_changed");
    this.notify("state_changed");
  }
}

export const State = new StateManager();
// Set initial setup on load
document.documentElement.lang = State.state.lang;
document.documentElement.dir = State.state.lang === "ar" ? "rtl" : "ltr";
