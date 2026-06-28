(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=[{id:`discounts`,titleAr:`تخفيضات`,titleEn:`Discounts`,image:`https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=50&q=80`},{id:`pink-tale`,titleAr:`حكاية وردية`,titleEn:`A pink tale`,image:`https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=50&q=80`},{id:`dibaj`,titleAr:`ديباج`,titleEn:`Dibaj`,image:`/linda_yellow_comforter.png`,subcategories:[{id:`dibaj-summer`,titleAr:`صيفي`,titleEn:`صيفي`,image:`https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=50&q=80`,subcategories:[{id:`dibaj-summer-double`,titleAr:`شخصين`,titleEn:`شخصين`,image:`https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=50&q=80`},{id:`dibaj-summer-single`,titleAr:`شخص`,titleEn:`شخص`,image:`https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=50&q=80`},{id:`dibaj-summer-queen`,titleAr:`كوين`,titleEn:`كوين`,image:`https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=50&q=80`}]},{id:`dibaj-winter`,titleAr:`شتوي`,titleEn:`شتوي`,image:`https://images.unsplash.com/photo-1511978241413-aae96a6f5da1?w=50&q=80`,subcategories:[{id:`dibaj-winter-double`,titleAr:`شخصين`,titleEn:`شخصين`,image:`https://images.unsplash.com/photo-1511978241413-aae96a6f5da1?w=50&q=80`},{id:`dibaj-winter-single`,titleAr:`شخص`,titleEn:`شخص`,image:`https://images.unsplash.com/photo-1511978241413-aae96a6f5da1?w=50&q=80`},{id:`dibaj-winter-queen`,titleAr:`كوين`,titleEn:`كوين`,image:`https://images.unsplash.com/photo-1511978241413-aae96a6f5da1?w=50&q=80`}]}]},{id:`bridal-boxes`,titleAr:`بوكس معاريس`,titleEn:`Bridal Boxes`,image:`/bridal_bedding_banner.png`,subcategories:[{id:`bridal-boxes-single`,titleAr:`شخص`,titleEn:`شخص`,image:`https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=50&q=80`},{id:`bridal-boxes-double`,titleAr:`شخصين`,titleEn:`شخصين`,image:`https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=50&q=80`}]},{id:`bedspreads`,titleAr:`مفارش مضغوطة`,titleEn:`Bedspreads`,image:`https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=50&q=80`,subcategories:[{id:`bedspreads-single`,titleAr:`شخص`,titleEn:`شخص`,image:`https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=50&q=80`},{id:`bedspreads-double`,titleAr:`شخصين`,titleEn:`شخصين`,image:`https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=50&q=80`}]},{id:`kids-bedding`,titleAr:`مفارش اطفال`,titleEn:`Kids Bedding`,image:`/kids_bedding_banner.png`},{id:`duvet-covers`,titleAr:`تلبيس لحاف`,titleEn:`Duvet Covers`,image:`https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=50&q=80`},{id:`duvets`,titleAr:`حشوة مفرش`,titleEn:`Duvets`,image:`https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=50&q=80`},{id:`mattress-toppers`,titleAr:`لباد سرير`,titleEn:`Mattress Toppers`,image:`https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=50&q=80`},{id:`bed-pillows`,titleAr:`مخدات نوم`,titleEn:`Bed Pillows`,image:`https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=50&q=80`},{id:`bedsheets`,titleAr:`شراشف السرير`,titleEn:`Bedsheets`,image:`https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=50&q=80`},{id:`waterproof-sheets`,titleAr:`شراشف عازلة`,titleEn:`Waterproof Sheets`,image:`https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=50&q=80`},{id:`bath-towels`,titleAr:`فوط الحمام`,titleEn:`Bath Towels`,image:`https://images.unsplash.com/photo-1616627547901-52f2066fa19b?w=50&q=80`},{id:`bathrobes`,titleAr:`ارواب حمام`,titleEn:`Bathrobes`,image:`https://images.unsplash.com/photo-1616627547901-52f2066fa19b?w=50&q=80`},{id:`mattresses`,titleAr:`مراتب السرير`,titleEn:`Mattresses`,image:`https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=50&q=80`},{id:`packages`,titleAr:`بكجات`,titleEn:`Packages`,image:`https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=50&q=80`},{id:`newborn`,titleAr:`حديثي الولادة`,titleEn:`Newborn`,image:`https://images.unsplash.com/photo-1515488042361-404e9250afef?w=50&q=80`,subcategories:[{id:`newborn-bed-cover`,titleAr:`تلبيسة السرير`,titleEn:`bed cover`,image:`https://images.unsplash.com/photo-1515488042361-404e9250afef?w=50&q=80`},{id:`newborn-prisoner`,titleAr:`حباسة`,titleEn:`prisoner`,image:`https://images.unsplash.com/photo-1515488042361-404e9250afef?w=50&q=80`},{id:`wooden-bed`,titleAr:`سرير خشب`,titleEn:`wooden bed`,image:`https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=50&q=80`},{id:`strollers`,titleAr:`عراية`,titleEn:`Cart`,image:`/stroller_grey.png`}]},{id:`blankets`,titleAr:`بطانيات`,titleEn:`Blankets`,image:`https://images.unsplash.com/photo-1511978241413-aae96a6f5da1?w=50&q=80`,subcategories:[{id:`blankets-single`,titleAr:`شخص`,titleEn:`شخص`,image:`https://images.unsplash.com/photo-1511978241413-aae96a6f5da1?w=50&q=80`},{id:`blankets-double`,titleAr:`شخصين`,titleEn:`شخصين`,image:`https://images.unsplash.com/photo-1511978241413-aae96a6f5da1?w=50&q=80`}]},{id:`brands`,titleAr:`براندات`,titleEn:`Brands`,image:`https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=50&q=80`,subcategories:[{id:`brand-feather`,titleAr:`فذر`,titleEn:`Feather`,image:`https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=50&q=80`},{id:`brand-silk`,titleAr:`حرير`,titleEn:`Silk`,image:`https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=50&q=80`},{id:`brand-calvo`,titleAr:`كالفو`,titleEn:`Calvo`,image:`https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=50&q=80`},{id:`brand-venice`,titleAr:`فينيسيا`,titleEn:`Venezia`,image:`https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=50&q=80`},{id:`brand-highcrest`,titleAr:`هاي كريست`,titleEn:`High Crest`,image:`https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=50&q=80`}]}];function t(e,n){for(let r=0;r<e.length;r++){let i=e[r];if(i.id===n)return i;if(i.subcategories){let e=t(i.subcategories,n);if(e)return e}}return null}var n=[{id:1,category:`double`,categoryEn:`Double Bedding`,categoryAr:`شخصين`,titleEn:`Linda Bedding Set | Soft Comforter with Filling - Linda-006`,titleAr:`لحاف ليندا | نظام تلبيسة مع حشوة | خامة ناعمة - Linda-006`,price:22.5,originalPrice:35,isNew:!0,isBestSeller:!0,isFeatured:!0,stock:100,sku:`LN-YEL-006`,barcode:`6901234567801`,rating:4.8,reviewsCount:34,image:`/linda_yellow_comforter.png`,images:[`/linda_yellow_comforter.png`],colors:[{nameEn:`Linda Yellow`,nameAr:`أصفر ليندا`,code:`#f9d71c`}],sizes:[`King Size`],descriptionEn:`Experience absolute sleeping comfort with Linda soft comforter cover system. Crafted with high quality materials.`,descriptionAr:`جرب الراحة المطلقة للنوم مع نظام غطاء لحاف ليندا الناعم المبطن. مصنوع من مواد عالية الجودة ووبرة ممتازة.`,specsEn:{Material:`Premium Microfiber`,Origin:`Imported`},specsAr:{الخامة:`مايكروفايبر ناعم`,المنشأ:`مستورد`}},{id:2,category:`double`,categoryEn:`Double Bedding`,categoryAr:`شخصين`,titleEn:`Luxury King Size Jacquard Comforter Set | 6 Pieces - NEIVE-001`,titleAr:`لحاف ديباج كينج سايز | جاكار | 6 قطع - NEIVE-001`,price:16.9,originalPrice:24.5,isNew:!0,isBestSeller:!0,isFeatured:!0,stock:100,sku:`NV-WHT-001`,barcode:`6901234567802`,rating:4.9,reviewsCount:52,image:`/neive_white_comforter.png`,images:[`/neive_white_comforter.png`],colors:[{nameEn:`Jacquard White`,nameAr:`أبيض جاكار`,code:`#ffffff`}],sizes:[`King Size (240x260cm)`],descriptionEn:`Luxury jacquard comforter set with delicate embroidery and cotton backing for comfort and style.`,descriptionAr:`لحاف ديباج جاكار فاخر منسوج بنقوش يدوية راقية مع بطانة قطنية توفر النعومة والدفء المعتدل.`,specsEn:{Material:`Jacquard & Cotton`,Origin:`Imported`},specsAr:{الخامة:`جاكار وقطن طبيعي`,المنشأ:`مستورد`}},{id:3,category:`double`,categoryEn:`Double Bedding`,categoryAr:`شخصين`,titleEn:`Bana Printed Comforter Set | Soft Cover with Filling - BANA 104`,titleAr:`لحاف بانا | نظام تلبيسة مع حشوة | مشجر | خامة ناعمة - BANA 104`,price:22.5,originalPrice:35,isNew:!0,isBestSeller:!0,isFeatured:!0,stock:100,sku:`BN-PNK-104`,barcode:`6901234567803`,rating:4.7,reviewsCount:19,image:`/bana_pink_comforter.png`,images:[`/bana_pink_comforter.png`],colors:[{nameEn:`Bana Pink`,nameAr:`وردي بانا`,code:`#ecd4db`}],sizes:[`King Size`],descriptionEn:`Printed double comforter cover set from Bana brand. Delicate textures and premium filling.`,descriptionAr:`طقم غطاء لحاف بانا المشجر بنظام التلبيسة الفاخر مع حشوة متوسطة السُمك لراحة طوال فصول السنة.`,specsEn:{Material:`Soft Combed Cotton`,Origin:`Imported`},specsAr:{الخامة:`قطن ناعم ممشط`,المنشأ:`مستورد`}},{id:4,category:`double`,categoryEn:`Double Bedding`,categoryAr:`شخصين`,titleEn:`Bana Printed Comforter Set | Soft Cover with Filling - BANA 101`,titleAr:`لحاف بانا | نظام تلبيسة مع حشوة | مشجر | خامة ناعمة - BANA 101`,price:22.5,originalPrice:35,isNew:!0,isBestSeller:!0,isFeatured:!0,stock:100,sku:`BN-PRP-101`,barcode:`6901234567804`,rating:4.6,reviewsCount:8,image:`/bana_purple_comforter.png`,images:[`/bana_purple_comforter.png`],colors:[{nameEn:`Bana Purple`,nameAr:`بنفسجي بانا`,code:`#a370f7`}],sizes:[`King Size`],descriptionEn:`Bana luxury printed comforter set in rich purple color, perfect design for modern rooms.`,descriptionAr:`لحاف بانا المشجر بلون بنفسجي فاخر بتصميم عصري يناسب غرف النوم الحديثة ونظام تلبيسة مريح وعملي.`,specsEn:{Material:`Luxury Microfiber`,Origin:`Imported`},specsAr:{الخامة:`مايكروفايبر ناعم`,المنشأ:`مستورد`}},{id:5,category:`double`,categoryEn:`Double Bedding`,categoryAr:`شخصين`,titleEn:`Bana Printed Comforter Set | Soft Cover with Filling - BANA 102`,titleAr:`لحاف بانا | نظام تلبيسة مع حشوة | مشجر | خامة ناعمة - BANA 102`,price:22.5,originalPrice:35,isNew:!0,isBestSeller:!0,isFeatured:!0,stock:100,sku:`BN-BLU-102`,barcode:`6901234567805`,rating:4.9,reviewsCount:41,image:`/bana_blue_comforter.png`,images:[`/bana_blue_comforter.png`],colors:[{nameEn:`Bana Blue`,nameAr:`أزرق بانا`,code:`#d9e2ec`}],sizes:[`King Size`],descriptionEn:`Blue printed comforter cover set from Bana brand. Double sided layout for multiple bedroom themes.`,descriptionAr:`لحاف بانا بنقوش مشجرة باللون الأزرق المريح. تصميم مميز بوجهين ملائم لديكورات غرف النوم الكلاسيكية والحديثة.`,specsEn:{Material:`Premium Cotton Mix`,Origin:`Imported`},specsAr:{الخامة:`مزيج قطن ممتاز`,المنشأ:`مستورد`}},{id:6,category:`double`,categoryEn:`Double Bedding`,categoryAr:`شخصين`,titleEn:`Bana Printed Comforter Set | Soft Cover with Filling - BANA 103`,titleAr:`لحاف بانا | نظام تلبيسة مع حشوة | مشجر | خامة ناعمة - BANA 103`,price:22.5,originalPrice:35,isNew:!0,isBestSeller:!0,isFeatured:!0,stock:100,sku:`BN-BGE-103`,barcode:`6901234567806`,rating:4.9,reviewsCount:15,image:`/bana_beige_comforter.png`,images:[`/bana_beige_comforter.png`],colors:[{nameEn:`Bana Beige`,nameAr:`بيج بانا`,code:`#c19a6b`}],sizes:[`King Size`],descriptionEn:`Luxury comforter set in warm beige color with elegant floral patterns, styled in a modern high-end bedroom.`,descriptionAr:`لحاف بانا المشجر بنظام تلبيسة مبطن باللون البيج الدافئ ونقوش ناعمة كلاسيكية لغرفة نوم مريحة وأنيقة.`,specsEn:{Material:`Premium Cotton Mix`,Origin:`Imported`},specsAr:{الخامة:`مزيج قطن ممتاز`,المنشأ:`مستورد`}},{id:7,category:`strollers`,categoryEn:`Baby Strollers`,categoryAr:`عربات الأطفال`,titleEn:`Premium Baby Stroller | Model No. 2700`,titleAr:`عربة بيبي | موديل رقم 2700`,price:27,originalPrice:27,isNew:!0,isBestSeller:!1,isFeatured:!1,stock:100,sku:`ST-GRY-2700`,barcode:`6901234567807`,rating:4.8,reviewsCount:22,image:`/stroller_grey.png`,images:[`/stroller_grey.png`],colors:[{nameEn:`Grey`,nameAr:`رمادي`,code:`#808080`}],sizes:[`Standard`],descriptionEn:`High quality premium baby stroller with adjustable seating and suspension for smooth rides.`,descriptionAr:`عربة أطفال فاخرة وعملية تتميز بهيكل قوي وخفيف الوزن ومقعد قابل للتعديل لتوفير الراحة القصوى لطفلك.`,specsEn:{Material:`Aluminum Frame`,Origin:`Imported`},specsAr:{الخامة:`إطار ألومنيوم معزز`,المنشأ:`مستورد`}},{id:8,category:`strollers`,categoryEn:`Baby Strollers`,categoryAr:`عربات الأطفال`,titleEn:`Premium Baby Stroller | Model No. 2500`,titleAr:`عربة بيبي | موديل رقم 2500`,price:25,originalPrice:25,isNew:!0,isBestSeller:!1,isFeatured:!1,stock:100,sku:`ST-BLK-2500`,barcode:`6901234567808`,rating:4.7,reviewsCount:14,image:`/stroller_black.png`,images:[`/stroller_black.png`],colors:[{nameEn:`Black Rose`,nameAr:`أسود وردي`,code:`#000000`}],sizes:[`Standard`],descriptionEn:`Luxury baby stroller in black color with elegant rose gold metallic accents and safety harness.`,descriptionAr:`عربة أطفال فاخرة باللون الأسود الملكي مع إضافات بلون روز جولد اللامع وحزام أمان خماسي النقاط.`,specsEn:{Material:`Premium Carbon Steel`,Origin:`Imported`},specsAr:{الخامة:`فولاذ كربوني خفيف`,المنشأ:`مستورد`}},{id:9,category:`strollers`,categoryEn:`Baby Strollers`,categoryAr:`عربات الأطفال`,titleEn:`Premium Baby Stroller | Model No. 6800`,titleAr:`عربانة بيبي | موديل رقم 6800`,price:42,originalPrice:42,isNew:!0,isBestSeller:!1,isFeatured:!1,stock:100,sku:`ST-TEL-6800`,barcode:`6901234567809`,rating:4.9,reviewsCount:31,image:`/stroller_teal.png`,images:[`/stroller_teal.png`],colors:[{nameEn:`Teal Green`,nameAr:`أخضر تيل`,code:`#008080`}],sizes:[`Standard`],descriptionEn:`Stylish teal green baby stroller with lightweight metallic frame and quick folding mechanism.`,descriptionAr:`عربة أطفال بتصميم عصري باللون التركوازي الجذاب مع ميكانيكية طي سريعة بيد واحدة لسهولة التنقل.`,specsEn:{Material:`Reinforced Alloy`,Origin:`Imported`},specsAr:{الخامة:`سبائك معززة خفيفة`,المنشأ:`مستورد`}},{id:10,category:`strollers`,categoryEn:`Baby Strollers`,categoryAr:`عربات الأطفال`,titleEn:`Premium Baby Stroller | Model No. 2680`,titleAr:`عربانة بيبي | موديل رقم 2680`,price:32,originalPrice:32,isNew:!0,isBestSeller:!1,isFeatured:!1,stock:100,sku:`ST-RED-2680`,barcode:`6901234567810`,rating:4.8,reviewsCount:16,image:`/stroller_red.png`,images:[`/stroller_red.png`],colors:[{nameEn:`Red Beige`,nameAr:`أحمر بيج`,code:`#a30000`}],sizes:[`Standard`],descriptionEn:`Red and beige baby stroller with double layer canopy and large shopping basket.`,descriptionAr:`عربة أطفال باللونين الأحمر والبيج مع مظلة واقية مزدوجة وسلة تسوق سفلية واسعة لتخزين الاحتياجات.`,specsEn:{Material:`Durable Steel Frame`,Origin:`Imported`},specsAr:{الخامة:`هيكل فولاذي متين`,المنشأ:`مستورد`}},{id:11,category:`double`,categoryEn:`Double Bedding`,categoryAr:`شخصين`,titleEn:`Jada Embroidered Comforter Set | 100% Cotton 6 Pieces - jada-014`,titleAr:`لحاف جادا مطرز | قطن 100% نفرين 6 قطع - jada-014`,price:22.5,originalPrice:35,isNew:!0,isBestSeller:!1,isFeatured:!1,stock:100,sku:`JD-PNK-014`,barcode:`6901234567811`,rating:4.8,reviewsCount:12,image:`/bana_pink_comforter.png`,images:[`/bana_pink_comforter.png`],colors:[{nameEn:`Jada Pink`,nameAr:`وردي جادا`,code:`#f3c1c6`}],sizes:[`King Size`],descriptionEn:`Premium 100% Cotton embroidered comforter set from Jada collection. Excellent feel and elegant stitches.`,descriptionAr:`طقم لحاف جادا المطرز والمصنوع 100% من القطن الطبيعي الفاخر. نعومة فائقة ووبرة ناعمة تدوم طويلاً.`,specsEn:{Material:`100% Natural Cotton`,Origin:`Imported`},specsAr:{الخامة:`قطن طبيعي 100%`,المنشأ:`مستورد`}},{id:12,category:`double`,categoryEn:`Double Bedding`,categoryAr:`شخصين`,titleEn:`Jada Embroidered Comforter Set | 100% Cotton 6 Pieces - jada-012`,titleAr:`لحاف جادا مطرز | قطن 100% نفرين 6 قطع - jada-012`,price:22.5,originalPrice:35,isNew:!0,isBestSeller:!1,isFeatured:!1,stock:100,sku:`JD-BGE-012`,barcode:`6901234567812`,rating:4.8,reviewsCount:19,image:`/bana_beige_comforter.png`,images:[`/bana_beige_comforter.png`],colors:[{nameEn:`Jada Beige`,nameAr:`بيج جادا`,code:`#f5f5dc`}],sizes:[`King Size`],descriptionEn:`Premium 100% Cotton embroidered comforter set from Jada collection in warm beige color.`,descriptionAr:`طقم لحاف جادا المطرز والمصنوع 100% من القطن الطبيعي بلون بيج أنيق ومريح للنفس.`,specsEn:{Material:`100% Natural Cotton`,Origin:`Imported`},specsAr:{الخامة:`قطن طبيعي 100%`,المنشأ:`مستورد`}},{id:13,category:`bridal`,categoryEn:`Bridal Bedding`,categoryAr:`مفارش عرايسي`,titleEn:`Luxury Lace Bridal Bedding Set 8 Pieces`,titleAr:`طقم لحاف عرايسي دانتيل فاخر 8 قطع`,price:85,originalPrice:120,isNew:!0,isBestSeller:!0,isFeatured:!0,stock:50,sku:`BR-LCE-001`,barcode:`6901234567813`,rating:5,reviewsCount:5,image:`/bridal_bedding_banner.png`,images:[`/bridal_bedding_banner.png`],colors:[{nameEn:`Bridal White`,nameAr:`أبيض عرايسي`,code:`#ffffff`}],sizes:[`Super King Size`],descriptionEn:`Luxury embroidered bridal comforter set with delicate lace trim, adding a touch of royalty to your bedroom.`,descriptionAr:`طقم لحاف عرايسي مطرز بالدانتيل الفاخر. يضفي لمسة ملكية وجمالاً راقياً لغرفة النوم لليلة العمر.`,specsEn:{Material:`Premium Cotton Satin`,Origin:`Imported`},specsAr:{الخامة:`ساتان قطني فاخر`,المنشأ:`مستورد`}},{id:14,category:`kids`,categoryEn:`Kids Bedding`,categoryAr:`مفارش الأطفال`,titleEn:`Soft Cotton Kids Bedding Set Comforter`,titleAr:`طقم لحاف أطفال مشجر قطن ناعم`,price:18,originalPrice:25,isNew:!0,isBestSeller:!0,isFeatured:!0,stock:75,sku:`KD-PNK-001`,barcode:`6901234567814`,rating:4.8,reviewsCount:14,image:`/kids_bedding_banner.png`,images:[`/kids_bedding_banner.png`],colors:[{nameEn:`Kids Pink`,nameAr:`وردي أطفال`,code:`#ffb6c1`}],sizes:[`Single Size`],descriptionEn:`Fun and colorful kids bedding set comforter made from 100% natural soft cotton yarn.`,descriptionAr:`لحاف أطفال قطني ناعم وصحي 100% بنقوش رسومية ممتعة وألوان زاهية يحبها طفلك.`,specsEn:{Material:`100% Soft Cotton`,Origin:`Imported`},specsAr:{الخامة:`قطن طبيعي ناعم 100%`,المنشأ:`مستورد`}}],r=new class{constructor(){this.listeners={};let e=localStorage.getItem(`sana_products`);if(e)try{let t=JSON.parse(e);(t.length===0||!t[0].titleAr.includes(`ليندا`))&&(localStorage.removeItem(`sana_products`),e=null)}catch{localStorage.removeItem(`sana_products`),e=null}this.state={products:e?JSON.parse(e):n,cart:JSON.parse(localStorage.getItem(`sana_cart`)||`[]`),wishlist:JSON.parse(localStorage.getItem(`sana_wishlist`)||`[]`),lang:localStorage.getItem(`sana_lang`)||`ar`,currency:`KWD`,currencyRate:3.25,coupons:[{code:`SAVE10`,discount:10,type:`percent`},{code:`SAVE20`,discount:20,type:`percent`},{code:`WELCOM5`,discount:5,type:`fixed`}],appliedCoupon:JSON.parse(localStorage.getItem(`sana_applied_coupon`)||`null`),orders:JSON.parse(localStorage.getItem(`sana_orders`)||`[]`),user:JSON.parse(localStorage.getItem(`sana_user`)||JSON.stringify({name:`خالد العتيبي`,email:`khaled@domain.com`,phone:`+965 99887766`,addresses:[{id:1,type:`المنزل`,typeEn:`Home`,city:`الكويت`,area:`السالمية`,street:`شارع الخليج العربي`,building:`برج الزمردة`,floor:`الدور 5`,block:`قطعة 4`}]})),searchQuery:``,filters:{category:`all`,priceRange:[0,400],colors:[],sizes:[],availability:`all`,sort:`featured`},lastProduct:JSON.parse(localStorage.getItem(`sana_last_product`)||`null`),bannerPairs:JSON.parse(localStorage.getItem(`sana_banner_pairs`)||JSON.stringify([[{id:`bridal`,nameAr:`مفارش عرايسي`,nameEn:`Bridal Bedding`,image:`/bridal_bedding_banner.png`},{id:`kids`,nameAr:`مفارش الأطفال`,nameEn:`Kids Bedding`,image:`/kids_bedding_banner.png`}],[{id:`toppers`,nameAr:`لباد ومخدات`,nameEn:`Toppers & Pillows`,image:`/toppers_pillows_banner.png`},{id:`sheets`,nameAr:`شراشف سرير`,nameEn:`Bed Sheets`,image:`/bed_sheets_banner.png`}],[{id:`single`,nameAr:`شخص واحد`,nameEn:`Single Bedding`,image:`https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&q=80`},{id:`bath`,nameAr:`مستلزمات الحمام`,nameEn:`Bath Essentials`,image:`https://images.unsplash.com/photo-1616627547901-52f2066fa19b?w=800&q=80`}]])),homeSlides:JSON.parse(localStorage.getItem(`sana_home_slides`)||JSON.stringify([{subtitleEn:`LUXURY DIBBAJ COLLECTION`,subtitleAr:`مجموعة الديباج الفاخرة`,titleEn:`Five-Star Bedding Comfort For Your Home`,titleAr:`راحة فندقية تليق بغرفة نومك`,descEn:`Discover our exclusive comforters and custom toppers made to guarantee a deep peaceful sleep.`,descAr:`اكتشف تشكيلاتنا الحصرية من الديباج القطني الفاخر واللباد الطبيعي المريح لراحة لا تضاهى.`,link:`#/category`,btnTextEn:`Shop Collection`,btnTextAr:`تسوق المجموعة`,image:`https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1600&q=80`},{subtitleEn:`PREMIUM TURKISH BATH ROBES`,subtitleAr:`مستلزمات الاستحمام والأرواب`,titleEn:`Premium Absorbent Turkish Linens`,titleAr:`نعومة وامتصاص فائق الجودة`,descEn:`Turkish cotton bathrobes and towels crafted for everyday luxury and high absorption.`,descAr:`أرواب ومناشف قطنية 100% بنعومة فائقة تناسب احتياجات عائلتك اليومية.`,link:`#/category?category=bath`,btnTextEn:`Explore Bathrobe Sets`,btnTextAr:`تصفح المناشف والأرواب`,image:`https://images.unsplash.com/photo-1616627547901-52f2066fa19b?w=1600&q=80`}]))}}save(e){try{e===`products`&&localStorage.setItem(`sana_products`,JSON.stringify(this.state.products)),e===`cart`&&localStorage.setItem(`sana_cart`,JSON.stringify(this.state.cart)),e===`wishlist`&&localStorage.setItem(`sana_wishlist`,JSON.stringify(this.state.wishlist)),e===`lang`&&localStorage.setItem(`sana_lang`,this.state.lang),e===`orders`&&localStorage.setItem(`sana_orders`,JSON.stringify(this.state.orders)),e===`user`&&localStorage.setItem(`sana_user`,JSON.stringify(this.state.user)),e===`appliedCoupon`&&localStorage.setItem(`sana_applied_coupon`,JSON.stringify(this.state.appliedCoupon)),e===`bannerPairs`&&localStorage.setItem(`sana_banner_pairs`,JSON.stringify(this.state.bannerPairs)),e===`homeSlides`&&localStorage.setItem(`sana_home_slides`,JSON.stringify(this.state.homeSlides))}catch(e){console.error(`StateManager: localStorage write failed:`,e),e.name===`QuotaExceededError`&&this.showToast(this.state.lang===`ar`?`عذراً، مساحة التخزين ممتلئة! يرجى استخدام صور أصغر حجماً للمنتج.`:`Storage limit exceeded! Please use smaller product images.`,`error`)}}subscribe(e,t){return this.listeners[e]||(this.listeners[e]=[]),this.listeners[e].push(t),()=>{this.listeners[e]=this.listeners[e].filter(e=>e!==t)}}notify(e,t){this.listeners[e]&&this.listeners[e].forEach(e=>e(t||this.state))}setLanguage(e){this.state.lang=e,this.save(`lang`),document.documentElement.lang=e,document.documentElement.dir=e===`ar`?`rtl`:`ltr`,this.notify(`lang_changed`),this.notify(`state_changed`)}compareAttr(e,t){return(e||``).toString().trim().toLowerCase()===(t||``).toString().trim().toLowerCase()}addToCart(e,t=1,n=null,r=null){if(e.stock<=0){this.showToast(this.state.lang===`ar`?`عذراً، المنتج غير متوفر بالمخزون حالياً`:`Sorry, this product is out of stock.`,`error`);return}let i=n||(e.colors&&e.colors[0]?e.colors[0].nameEn:null),a=r||(e.sizes&&e.sizes[0]?e.sizes[0]:null),o=this.state.cart.findIndex(t=>t.product.id===e.id&&this.compareAttr(t.color,i)&&this.compareAttr(t.size,a)),s=e.variations&&e.variations.find(e=>(this.compareAttr(e.colorEn,i)||this.compareAttr(e.colorAr,i)||e.color&&this.compareAttr(e.color.nameEn,i))&&this.compareAttr(e.size,a)),c=s?s.price:e.price,l=s?s.image:e.image;if(o>-1){let n=this.state.cart[o].quantity,r=s?s.stock:e.stock;if(n+t>r){this.showToast(this.state.lang===`ar`?`عذراً، لا تتوفر كمية كافية بالمخزون (الحد الأقصى: ${r})`:`Sorry, not enough stock (Max: ${r})`,`error`);return}this.state.cart[o].quantity+=t}else this.state.cart.push({product:e,quantity:t,color:i,size:a,price:c,image:l});this.save(`cart`),this.notify(`cart_changed`),this.notify(`state_changed`),this.showToast(this.state.lang===`ar`?`تمت إضافة المنتج إلى عربة التسوق بنجاح`:`Product added to cart successfully!`,`success`)}updateCartQty(e,t,n,r){let i=this.state.cart.find(r=>r.product.id===e&&this.compareAttr(r.color,t)&&this.compareAttr(r.size,n));if(i){if(r<=0){this.removeFromCart(e,t,n);return}if(r>i.product.stock){this.showToast(this.state.lang===`ar`?`الكمية المطلوبة تتعدى المخزون المتوفر (${i.product.stock})`:`Requested quantity exceeds stock (${i.product.stock})`,`error`);return}i.quantity=r,this.save(`cart`),this.notify(`cart_changed`),this.notify(`state_changed`)}}removeFromCart(e,t,n){this.state.cart=this.state.cart.filter(r=>!(r.product.id===e&&this.compareAttr(r.color,t)&&this.compareAttr(r.size,n))),this.save(`cart`),this.notify(`cart_changed`),this.notify(`state_changed`),this.showToast(this.state.lang===`ar`?`تمت إزالة المنتج من السلة`:`Product removed from cart.`,`info`)}clearCart(){this.state.cart=[],this.state.appliedCoupon=null,this.save(`cart`),this.save(`appliedCoupon`),this.notify(`cart_changed`),this.notify(`state_changed`)}setLastViewedProduct(e,t,n){this.state.lastProduct={id:e,titleAr:t,titleEn:n},localStorage.setItem(`sana_last_product`,JSON.stringify(this.state.lastProduct))}getCartSubtotal(){return this.state.cart.reduce((e,t)=>e+(t.price||t.product.price)*t.quantity,0)}getCartDiscount(){let e=this.getCartSubtotal(),t=this.state.appliedCoupon;return t?t.type===`percent`?e*t.discount/100:Math.min(t.discount,e):0}getCartTotal(){let e=this.getCartSubtotal(),t=this.getCartDiscount(),n=e>100?0:2.5;return Math.max(0,e-t+n)}applyCouponCode(e){let t=this.state.coupons.find(t=>t.code.toUpperCase()===e.trim().toUpperCase());return t?(this.state.appliedCoupon=t,this.save(`appliedCoupon`),this.notify(`cart_changed`),this.notify(`state_changed`),this.showToast(this.state.lang===`ar`?`تم تطبيق الكوبون (${t.code}) بنجاح!`:`Coupon (${t.code}) applied successfully!`,`success`),!0):(this.showToast(this.state.lang===`ar`?`الكوبون المدخل غير صالح أو انتهت صلاحيته`:`Invalid or expired coupon code.`,`error`),!1)}removeCoupon(){this.state.appliedCoupon=null,this.save(`appliedCoupon`),this.notify(`cart_changed`),this.notify(`state_changed`),this.showToast(this.state.lang===`ar`?`تمت إزالة كوبون الخصم`:`Coupon removed.`,`info`)}toggleWishlist(e){let t=this.state.wishlist.findIndex(t=>t.id===e.id);t>-1?(this.state.wishlist.splice(t,1),this.showToast(this.state.lang===`ar`?`تم إزالة المنتج من قائمة الأمنيات`:`Removed from wishlist.`,`info`)):(this.state.wishlist.push(e),this.showToast(this.state.lang===`ar`?`تمت إضافة المنتج لقائمة الأمنيات`:`Added to wishlist!`,`success`)),this.save(`wishlist`),this.notify(`wishlist_changed`),this.notify(`state_changed`)}isInWishlist(e){return this.state.wishlist.some(t=>t.id===e)}createOrder(e,t,n){let r={id:`ORD-`+Math.floor(1e5+Math.random()*9e5),date:new Date().toLocaleDateString(`en-US`),items:[...this.state.cart],subtotal:this.getCartSubtotal(),discount:this.getCartDiscount(),shippingCost:this.getCartSubtotal()>100?0:2.5,total:this.getCartTotal(),shippingInfo:e,paymentMethod:t,shippingCompany:n,status:`pending`,statusHistory:[{status:`pending`,time:new Date().toLocaleTimeString(`en-US`,{hour:`2-digit`,minute:`2-digit`})}]};return this.state.cart.forEach(e=>{let t=this.state.products.find(t=>t.id===e.product.id);t&&(t.stock=Math.max(0,t.stock-e.quantity))}),this.state.orders.unshift(r),this.save(`orders`),this.save(`products`),this.clearCart(),this.notify(`orders_changed`),this.notify(`state_changed`),r}addProduct(e){let t={id:this.state.products.length>0?Math.max(...this.state.products.map(e=>e.id))+1:1,...e,rating:5,reviewsCount:0,isNew:!0};return this.state.products.push(t),this.save(`products`),this.notify(`products_changed`),this.notify(`state_changed`),this.showToast(this.state.lang===`ar`?`تم إضافة المنتج بنجاح`:`Product added successfully!`,`success`),t}editProduct(e,t){let n=this.state.products.findIndex(t=>t.id===e);return n>-1?(this.state.products[n]={...this.state.products[n],...t},this.save(`products`),this.notify(`products_changed`),this.notify(`state_changed`),this.showToast(this.state.lang===`ar`?`تم تعديل بيانات المنتج`:`Product updated successfully!`,`success`),!0):!1}deleteProduct(e){this.state.products=this.state.products.filter(t=>t.id!==e),this.save(`products`),this.notify(`products_changed`),this.notify(`state_changed`),this.showToast(this.state.lang===`ar`?`تم حذف المنتج بنجاح`:`Product deleted successfully!`,`info`)}updateOrderStatus(e,t){let n=this.state.orders.find(t=>t.id===e);n&&(n.status=t,n.statusHistory.push({status:t,time:new Date().toLocaleTimeString(`en-US`,{hour:`2-digit`,minute:`2-digit`})}),this.save(`orders`),this.notify(`orders_changed`),this.notify(`state_changed`),this.showToast(this.state.lang===`ar`?`تم تحديث حالة الطلب إلى (${t})`:`Order status updated to (${t})`,`success`))}editBanners(e){this.state.bannerPairs=e,this.save(`bannerPairs`),this.notify(`state_changed`),this.showToast(this.state.lang===`ar`?`تم حفظ البنرات بنجاح`:`Banners saved successfully!`,`success`)}editHomeSlides(e){this.state.homeSlides=e,this.save(`homeSlides`),this.notify(`state_changed`),this.showToast(this.state.lang===`ar`?`تم حفظ السلايدر بنجاح`:`Slider saved successfully!`,`success`)}showToast(e,t=`success`){let n=document.getElementById(`toast-container`);if(!n)return;let r=document.createElement(`div`);r.className=`toast toast-${t}`,r.innerHTML=`
      <span>${e}</span>
      <button style="background:none; border:none; color:inherit; font-size:1.1rem; cursor:pointer;" onclick="this.parentElement.remove()">&times;</button>
    `,n.appendChild(r),setTimeout(()=>{r.remove()},4e3)}setFilters(e){this.state.filters={...this.state.filters,...e},this.notify(`filters_changed`),this.notify(`state_changed`)}resetFilters(){this.state.filters={category:`all`,priceRange:[0,400],colors:[],sizes:[],availability:`all`,sort:`featured`},this.notify(`filters_changed`),this.notify(`state_changed`)}};document.documentElement.lang=r.state.lang,document.documentElement.dir=r.state.lang===`ar`?`rtl`:`ltr`;function i(){let t=r.state.lang===`ar`,n=r.state.cart.reduce((e,t)=>e+t.quantity,0),i=r.state.wishlist.length,a=e=>{let n=e.subcategories&&e.subcategories.length>0,r=t?e.titleAr:e.titleEn;return n?`
        <div class="nav-item-dropdown">
          <a href="#/category?category=${e.id}" class="nav-link dropdown-trigger">
            ${r}
            <svg class="dropdown-chevron" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
              <path d="M6 9l6 6 6-6"></path>
            </svg>
          </a>
          <div class="megamenu-panel">
            <div class="megamenu-grid">
              ${e.subcategories.map(e=>{let n=t?e.titleAr:e.titleEn,r=e.subcategories&&e.subcategories.length>0;return`
                  <div class="megamenu-col">
                    <a href="#/category?category=${e.id}" class="megamenu-title-link">
                      <img src="${e.image}" class="megamenu-thumb">
                      <span>${n}</span>
                    </a>
                    ${r?`
                      <ul class="megamenu-sublist">
                        ${e.subcategories.map(e=>`
                          <li>
                            <a href="#/category?category=${e.id}" class="megamenu-item-link">
                              <img src="${e.image}" class="nested-thumb">
                              <span>${t?e.titleAr:e.titleEn}</span>
                            </a>
                          </li>
                        `).join(``)}
                      </ul>
                    `:``}
                  </div>
                `}).join(``)}
            </div>
          </div>
        </div>
      `:`
        <a href="#/category?category=${e.id}" class="nav-link">${r}</a>
      `},o=e.map(e=>a(e)).join(``);return`
    <!-- Top Announcement Bar -->
    <div class="announcement-bar">
      <div class="container bar-content">
        <p>${t?`شحن مجاني للطلبات بقيمة 100 د.ك أو أكثر!`:`Free Shipping on orders 100 KWD or above!`}</p>
        <div class="top-links">
          <a href="#/faq">${t?`الأسئلة الشائعة`:`FAQs`}</a>
          <span class="divider">|</span>
          <button id="lang-switch-btn" class="lang-switch-btn">
            ${t?`English`:`العربية`}
          </button>
        </div>
      </div>
    </div>

    <!-- Main Navigation Bar -->
    <div class="nav-bar-wrapper">
      <div class="container nav-bar-container">
        <!-- Mobile Menu Toggle -->
        <button id="mobile-menu-toggle" class="mobile-menu-toggle">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>

        <!-- Brand Logo -->
        <a href="#/" class="logo" style="display: flex; align-items: center; max-height: 48px;">
          <img src="/feather_logo.png" alt="Feather Home Textile" style="height: 45px; width: auto; object-fit: contain;">
        </a>

        <!-- Desktop Categories Navbar Links Wrapper with scroll arrows -->
        <div class="nav-scroll-container">
          <button type="button" class="nav-scroll-arrow arrow-left" id="nav-arrow-left" aria-label="Scroll left">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
              <path d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>
          
          <nav class="desktop-nav" id="desktop-nav-scroller">
            ${o}
          </nav>

          <button type="button" class="nav-scroll-arrow arrow-right" id="nav-arrow-right" aria-label="Scroll right">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
              <path d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>

        <!-- Search Bar Header Widget -->
        <div class="header-search-container">
          <div class="search-input-wrapper">
            <input type="text" id="header-search-input" class="search-input" placeholder="${t?`ابحث عن منتج...`:`Search product...`}">
            <svg class="search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>
          <!-- Live search dropdown list -->
          <div id="search-suggestions" class="search-suggestions-dropdown"></div>
        </div>

        <!-- Quick Icons Menu -->
        <div class="header-icons">
          <!-- Profile/Admin -->
          <a href="#/dashboard" class="btn-icon" title="${t?`حسابي`:`Account`}">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>
            </svg>
          </a>

          <!-- Wishlist -->
          <a href="#/dashboard?tab=wishlist" class="btn-icon" title="${t?`المفضلة`:`Wishlist`}">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
            ${i>0?`<span class="badge">${i}</span>`:``}
          </a>

          <!-- Shopping Cart -->
          <button id="cart-drawer-toggle" class="btn-icon" title="${t?`السلة`:`Cart`}">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
            ${n>0?`<span class="badge">${n}</span>`:``}
          </button>
          
          <!-- Admin Panel Shortcut -->
          <a href="#/admin" class="btn-icon admin-shortcut" title="${t?`لوحة الإدارة`:`Admin Board`}">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="3" width="7" height="9"></rect><rect x="14" y="3" width="7" height="5"></rect>
              <rect x="14" y="12" width="7" height="9"></rect><rect x="3" y="16" width="7" height="5"></rect>
            </svg>
          </a>
        </div>
      </div>
    </div>

    <!-- Mobile Drawer Navigation -->
    <div id="mobile-menu-backdrop" class="drawer-backdrop">
      <div class="drawer-panel mobile-nav-panel">
        <div class="drawer-header">
          <span class="logo" style="display: flex; align-items: center; max-height: 40px;">
            <img src="/feather_logo.png" alt="Feather Home Textile" style="height: 35px; width: auto; object-fit: contain;">
          </span>
          <button id="mobile-menu-close" style="background:none; border:none; cursor:pointer;">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        <div class="drawer-body">
          <nav class="mobile-nav-links">
            <a href="#/" class="mobile-nav-link">${t?`الرئيسية`:`Home`}</a>
            <a href="#/category" class="mobile-nav-link">${t?`جميع المنتجات`:`All Products`}</a>
            ${e.map(e=>`
              <a href="#/category?category=${e.id}" class="mobile-nav-link" style="font-weight:600;">
                ${t?e.titleAr:e.titleEn}
              </a>
              ${e.subcategories?e.subcategories.map(e=>`
                <a href="#/category?category=${e.id}" class="mobile-nav-link" style="padding-inline-start: 1.5rem; font-size: 0.95rem;">
                  — ${t?e.titleAr:e.titleEn}
                </a>
              `).join(``):``}
            `).join(``)}
          </nav>
          
          <!-- Mobile Search -->
          <div class="mobile-search-wrapper" style="margin-top: 2rem;">
            <input type="text" id="mobile-search-input" class="form-control" placeholder="${t?`ابحث عن منتج...`:`Search product...`}">
            <div id="mobile-search-suggestions" class="search-suggestions-dropdown" style="position:relative; width:100%; top:5px;"></div>
          </div>
        </div>
        <div class="drawer-footer">
          <button id="mobile-lang-switch" class="btn btn-primary" style="width:100%">
            ${t?`English Language`:`اللغة العربية`}
          </button>
        </div>
      </div>
    </div>

    <style>
      /* Announcement Bar */
      .announcement-bar {
        background-color: var(--text-primary);
        color: var(--bg-primary);
        font-size: 0.8rem;
        padding: 0.5rem 0;
        border-bottom: 1px solid var(--border-color);
      }
      .bar-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .top-links {
        display: flex;
        align-items: center;
        gap: 0.8rem;
      }
      .top-links a {
        color: inherit;
        text-decoration: none;
      }
      .top-links a:hover {
        color: var(--accent-gold);
      }
      .lang-switch-btn {
        background: none;
        border: none;
        color: inherit;
        cursor: pointer;
        font-size: 0.8rem;
        font-weight: 500;
        transition: var(--transition-fast);
      }
      .lang-switch-btn:hover {
        color: var(--accent-gold);
      }
      
      /* Navigation Bar Wrapper */
      .nav-bar-wrapper {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        height: var(--header-height);
        background-color: rgba(252, 251, 250, 0.95);
        backdrop-filter: blur(8px);
        border-bottom: 1px solid var(--border-light);
        z-index: 900;
        transition: var(--transition-smooth);
      }
      .dark-theme .nav-bar-wrapper {
        background-color: rgba(15, 15, 17, 0.95);
      }
      .sticky-shrink .nav-bar-wrapper {
        height: var(--header-height-shrink);
        box-shadow: 0 4px 15px rgba(0,0,0,0.05);
      }
      .announcement-bar + .nav-bar-wrapper {
        top: 31px;
      }
      .sticky-shrink.announcement-bar + .nav-bar-wrapper {
        top: 0;
      }
      
      .nav-bar-container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 100%;
        gap: 1rem;
      }

      /* Logo Styling */
      .logo {
        font-size: 1.25rem;
        font-weight: 700;
        letter-spacing: 0.05em;
        text-decoration: none;
        color: var(--text-primary);
        flex-shrink: 0;
      }
      .logo span {
        font-weight: 300;
        font-size: 0.75rem;
        color: var(--accent-gold);
        letter-spacing: 0.05em;
        display: block;
        margin-top: -4px;
      }
      
      /* Desktop Navigation Scroll Container */
      .nav-scroll-container {
        display: flex;
        align-items: center;
        flex: 1;
        position: relative;
        overflow: hidden;
        margin: 0 1rem;
        padding: 0 28px;
      }
      .nav-scroll-arrow {
        background: var(--bg-primary);
        border: 1px solid var(--border-color);
        color: var(--text-primary);
        width: 24px;
        height: 24px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        z-index: 10;
        transition: var(--transition-fast);
        opacity: 0.8;
        flex-shrink: 0;
        box-shadow: 0 2px 5px rgba(0,0,0,0.05);
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
      }
      .nav-scroll-arrow.arrow-left {
        left: 2px;
      }
      .nav-scroll-arrow.arrow-right {
        right: 2px;
      }
      .nav-scroll-arrow:hover {
        background: var(--text-primary);
        color: var(--bg-primary);
        opacity: 1;
        border-color: var(--text-primary);
      }
      .nav-scroll-arrow:disabled {
        opacity: 0;
        pointer-events: none;
      }
      
      /* Desktop Navigation Categories */
      .desktop-nav {
        display: flex;
        gap: 0.8rem;
        flex: 1;
        overflow-x: auto;
        padding: 0 0.5rem;
        scrollbar-width: none; /* Firefox */
        align-items: center;
        scroll-behavior: smooth;
      }
      .desktop-nav::-webkit-scrollbar {
        display: none; /* Chrome/Safari */
      }
      .nav-link {
        font-size: 0.82rem;
        font-weight: 600;
        text-decoration: none;
        color: var(--text-primary);
        position: relative;
        padding: 0.5rem 0.4rem;
        transition: var(--transition-fast);
        white-space: nowrap;
        display: flex;
        align-items: center;
        gap: 0.2rem;
      }
      .nav-link:hover {
        color: var(--accent-gold);
      }
      .dropdown-chevron {
        opacity: 0.6;
        transition: transform 0.2s ease;
      }
      .nav-item-dropdown:hover .dropdown-chevron {
        transform: rotate(180deg);
      }

      /* Dropdown Mega-Menu Panel */
      .nav-item-dropdown {
        position: relative;
      }
      .megamenu-panel {
        position: absolute;
        top: 100%;
        left: 50%;
        transform: translateX(-50%) translateY(10px);
        background-color: var(--bg-primary);
        border: 1px solid var(--border-color);
        box-shadow: var(--modal-shadow);
        border-radius: 8px;
        width: max-content;
        min-width: 280px;
        max-width: 600px;
        padding: 1rem;
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.25s ease, transform 0.25s ease;
        z-index: 1000;
      }
      .nav-item-dropdown:hover .megamenu-panel {
        opacity: 1;
        pointer-events: auto;
        transform: translateX(-50%) translateY(0);
      }
      .megamenu-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
        gap: 1rem;
      }
      .megamenu-col {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
      }
      .megamenu-title-link {
        font-size: 0.85rem;
        font-weight: 700;
        text-decoration: none;
        color: var(--text-primary);
        display: flex;
        align-items: center;
        gap: 0.4rem;
        padding-bottom: 0.35rem;
        border-bottom: 1px solid var(--border-light);
      }
      .megamenu-title-link:hover {
        color: var(--accent-gold);
      }
      .megamenu-thumb {
        width: 24px;
        height: 24px;
        object-fit: cover;
        border-radius: 4px;
      }
      .nested-thumb {
        width: 18px;
        height: 18px;
        object-fit: cover;
        border-radius: 3px;
      }
      .megamenu-sublist {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        gap: 0.35rem;
      }
      .megamenu-item-link {
        font-size: 0.78rem;
        font-weight: 500;
        text-decoration: none;
        color: var(--text-secondary);
        display: flex;
        align-items: center;
        gap: 0.35rem;
        padding: 0.15rem 0;
        transition: var(--transition-fast);
      }
      .megamenu-item-link:hover {
        color: var(--accent-gold);
        transform: translateX(3px);
      }
      [dir="rtl"] .megamenu-item-link:hover {
        transform: translateX(-3px);
      }

      /* Search Bar widget styles */
      .header-search-container {
        position: relative;
        flex-shrink: 0;
        width: 180px;
        transition: width 0.3s ease;
      }
      .header-search-container:focus-within {
        width: 220px;
      }
      .search-input-wrapper {
        position: relative;
        display: flex;
        align-items: center;
      }
      .search-input {
        width: 100%;
        padding: 0.4rem 1rem 0.4rem 2rem;
        background-color: var(--bg-secondary);
        border: 1px solid transparent;
        border-radius: 20px;
        font-size: 0.8rem;
        color: var(--text-primary);
        outline: none;
        transition: var(--transition-fast);
      }
      [dir="rtl"] .search-input {
        padding: 0.4rem 2rem 0.4rem 1rem;
      }
      .search-input:focus {
        background-color: var(--bg-primary);
        border-color: var(--accent-gold);
        box-shadow: 0 0 0 3px rgba(197, 168, 128, 0.1);
      }
      .search-icon {
        position: absolute;
        left: 0.6rem;
        color: var(--text-muted);
        pointer-events: none;
        width: 14px;
        height: 14px;
      }
      [dir="rtl"] .search-icon {
        left: auto;
        right: 0.6rem;
      }
      .search-suggestions-dropdown {
        position: absolute;
        top: calc(100% + 8px);
        left: 0;
        right: 0;
        background-color: var(--bg-primary);
        border: 1px solid var(--border-color);
        border-radius: 8px;
        box-shadow: var(--modal-shadow);
        z-index: 999;
        max-height: 380px;
        overflow-y: auto;
        display: none;
      }
      .search-suggestions-dropdown.active {
        display: block;
      }
      .suggestion-item {
        display: flex;
        align-items: center;
        gap: 0.8rem;
        padding: 0.6rem 1rem;
        cursor: pointer;
        text-decoration: none;
        color: inherit;
        border-bottom: 1px solid var(--border-light);
        transition: var(--transition-fast);
      }
      .suggestion-item:hover {
        background-color: var(--bg-secondary);
      }
      .suggestion-item img {
        width: 40px;
        height: 50px;
        object-fit: cover;
        border-radius: 3px;
      }
      .suggestion-item .info {
        flex: 1;
      }
      .suggestion-item .title {
        font-size: 0.85rem;
        font-weight: 500;
        margin-bottom: 0.15rem;
      }
      .suggestion-item .price {
        font-size: 0.8rem;
        color: var(--accent-gold);
        font-weight: 600;
      }

      /* Icons styling */
      .header-icons {
        display: flex;
        gap: 0.2rem;
        align-items: center;
        flex-shrink: 0;
      }
      .btn-icon {
        position: relative;
      }
      .btn-icon .badge {
        position: absolute;
        top: -4px;
        right: -4px;
        background-color: var(--accent-gold);
        color: white;
        font-size: 0.65rem;
        padding: 0.1rem 0.3rem;
        border-radius: 10px;
        font-weight: 700;
      }
      
      .admin-shortcut {
        color: var(--accent-gold) !important;
      }

      /* Mobile elements */
      .mobile-menu-toggle {
        display: none;
        background: none;
        border: none;
        color: var(--text-primary);
        cursor: pointer;
        padding: 0.5rem;
      }
      .mobile-nav-panel {
        transform: translateX(-100%);
      }
      [dir="rtl"] .mobile-nav-panel {
        transform: translateX(100%);
      }
      .mobile-nav-links {
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }
      .mobile-nav-link {
        font-size: 1rem;
        font-weight: 500;
        text-decoration: none;
        color: var(--text-primary);
        border-bottom: 1px solid var(--border-light);
        padding-bottom: 0.4rem;
      }

      @media (max-width: 1024px) {
        .desktop-nav {
          display: none;
        }
        .mobile-menu-toggle {
          display: block;
        }
        .header-search-container {
          display: none; /* Show mobile search instead */
        }
      }
    </style>
  `}i.onMount=()=>{window.addEventListener(`scroll`,()=>{window.scrollY>40?document.body.classList.add(`sticky-shrink`):document.body.classList.remove(`sticky-shrink`)});let e=document.getElementById(`lang-switch-btn`),t=document.getElementById(`mobile-lang-switch`),n=()=>{let e=r.state.lang===`ar`?`en`:`ar`;r.setLanguage(e)};e&&e.addEventListener(`click`,n),t&&t.addEventListener(`click`,n);let i=document.getElementById(`mobile-menu-toggle`),a=document.getElementById(`mobile-menu-close`),o=document.getElementById(`mobile-menu-backdrop`);i&&o&&i.addEventListener(`click`,()=>{o.classList.add(`active`),o.querySelector(`.drawer-panel`).style.transform=`translateX(0)`});let s=()=>{if(o){o.classList.remove(`active`);let e=r.state.lang===`ar`;o.querySelector(`.drawer-panel`).style.transform=e?`translateX(100%)`:`translateX(-100%)`}};a&&a.addEventListener(`click`,s),o&&o.addEventListener(`click`,e=>{e.target===o&&s()});let c=document.getElementById(`cart-drawer-toggle`);c&&c.addEventListener(`click`,()=>{let e=document.getElementById(`cart-drawer-backdrop`);e&&(e.classList.add(`active`),e.querySelector(`.drawer-panel`).style.transform=`translateX(0)`)});let l=(e,t)=>{let n=document.getElementById(e),i=document.getElementById(t);!n||!i||(n.addEventListener(`input`,e=>{let t=e.target.value.trim().toLowerCase();if(!t){i.classList.remove(`active`),i.innerHTML=``;return}let a=r.state.lang===`ar`,o=r.state.products.filter(e=>{let n=a?e.titleAr.toLowerCase():e.titleEn.toLowerCase(),r=a?e.categoryAr.toLowerCase():e.categoryEn.toLowerCase(),i=e.sku.toLowerCase();return n.includes(t)||r.includes(t)||i.includes(t)});if(o.length===0){i.innerHTML=`
          <div style="padding:1rem; text-align:center; font-size:0.85rem; color:var(--text-muted);">
            ${a?`لا توجد نتائج مطابقة`:`No matching results found.`}
          </div>
        `,i.classList.add(`active`);return}i.innerHTML=o.slice(0,5).map(e=>`
        <a href="#/product/${e.id}" class="suggestion-item">
          <img src="${e.image}" alt="${a?e.titleAr:e.titleEn}">
          <div class="info">
            <div class="title">${a?e.titleAr:e.titleEn}</div>
            <div class="price">${e.price.toFixed(3)} KWD</div>
          </div>
        </a>
      `).join(``),i.classList.add(`active`),i.querySelectorAll(`.suggestion-item`).forEach(e=>{e.addEventListener(`click`,()=>{i.classList.remove(`active`),n.value=``,s()})})}),n.addEventListener(`keydown`,e=>{if(e.key===`Enter`){let t=e.target.value.trim();t&&(i.classList.remove(`active`),window.location.hash=`#/category?q=${encodeURIComponent(t)}`,typeof s==`function`&&s())}}),document.addEventListener(`click`,e=>{!n.contains(e.target)&&!i.contains(e.target)&&i.classList.remove(`active`)}))};l(`header-search-input`,`search-suggestions`),l(`mobile-search-input`,`mobile-search-suggestions`);let u=document.getElementById(`desktop-nav-scroller`),d=document.getElementById(`nav-arrow-left`),f=document.getElementById(`nav-arrow-right`);if(u&&d&&f){let e=()=>{let e=u.scrollLeft,t=u.scrollWidth-u.clientWidth;if(r.state.lang===`ar`){let n=Math.abs(e);f.disabled=n<=5,d.disabled=n>=t-5}else d.disabled=e<=5,f.disabled=e>=t-5};e(),u.addEventListener(`scroll`,e),window.addEventListener(`resize`,e),r.state.lang,d.addEventListener(`click`,()=>{u.scrollBy({left:-150,behavior:`smooth`})}),f.addEventListener(`click`,()=>{u.scrollBy({left:150,behavior:`smooth`})})}};function a(){let e=r.state.lang===`ar`;return`
    <div class="footer-wrapper">
      <!-- Upper Section: Newsletter & Socials -->
      <div class="footer-top">
        <div class="container top-grid">
          <div class="newsletter-area">
            <h4>${e?`اشترك في النشرة البريدية`:`Subscribe to our Newsletter`}</h4>
            <p>${e?`كن أول من يعرف عن العروض الحصرية وتشكيلاتنا الجديدة`:`Be the first to receive updates on exclusive offers and new collections.`}</p>
            <form id="newsletter-form" class="newsletter-form">
              <input type="email" id="newsletter-email" class="form-control" placeholder="${e?`أدخل بريدك الإلكتروني`:`Enter your email address`}" required>
              <button type="submit" class="btn btn-primary">${e?`اشترك الآن`:`Subscribe`}</button>
            </form>
          </div>
          <div class="socials-area">
            <h4>${e?`تابعنا على مواقع التواصل`:`Follow Us`}</h4>
            <div class="social-icons">
              <a href="#" class="social-icon" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" class="social-icon" aria-label="Twitter">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
              <a href="#" class="social-icon" aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" class="social-icon" aria-label="Snapchat">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M12 2C7.03 2 3 6.03 3 11c0 2.21.8 4.23 2.12 5.8L3.25 21h17.5l-1.87-4.2C20.2 15.23 21 13.21 21 11c0-4.97-4.03-9-9-9z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Center Section: Site Map Columns -->
      <div class="footer-center">
        <div class="container center-grid">
          <!-- Column 1: Info -->
          <div class="footer-col">
            <h5 class="logo" style="display: flex; align-items: center; max-height: 48px; margin-bottom: 1rem;">
              <img src="/feather_logo.png" alt="Feather Home Textile" style="height: 42px; width: auto; object-fit: contain;">
            </h5>
            <p class="about-desc">
              ${e?`وجهتكم الأولى في الكويت لتسوق أطقم الديباج الفاخرة، شراشف السرير المطاطية، اللباد الفندقي والمخاد والمناشف ذات الجودة العالية التي تمنحكم نوماً هنيئاً.`:`Your premiere destination in Kuwait for luxury bedding comforters, mattress toppers, hotel pillows, and premium bath linens designed to elevate your sleep.`}
            </p>
            <div class="contact-details">
              <p>📞 +965 99887766</p>
              <p>✉️ service@newlinekuwait.com</p>
              <p>📍 ${e?`الكويت، الفروانية، الضجيج (مقابل سلطان سنتر)`:`Kuwait, Farwaniya, Al-Dajeej (Opposite Sultan Center)`}</p>
            </div>
          </div>

          <!-- Column 2: Quick Links -->
          <div class="footer-col">
            <h5>${e?`تصنيفات المتجر`:`Product Categories`}</h5>
            <ul class="footer-links">
              <li><a href="#/category">${e?`كل المنتجات`:`All Products`}</a></li>
              <li><a href="#/category?category=quilts">${e?`أطقم ديباج ولحاف`:`Quilts & Comforters`}</a></li>
              <li><a href="#/category?category=toppers">${e?`لباد ومخدات فندقية`:`Toppers & Pillows`}</a></li>
              <li><a href="#/category?category=sheets">${e?`شراشف سرير`:`Bed Sheets`}</a></li>
              <li><a href="#/category?category=blankets">${e?`بطانيات ناعمة`:`Blankets`}</a></li>
            </ul>
          </div>

          <!-- Column 3: Customer Care -->
          <div class="footer-col">
            <h5>${e?`خدمة العملاء`:`Customer Care`}</h5>
            <ul class="footer-links">
              <li><a href="#/dashboard">${e?`حسابي`:`My Account`}</a></li>
              <li><a href="#/dashboard?tab=orders">${e?`تتبع الطلبات`:`Track Order`}</a></li>
              <li><a href="#/dashboard?tab=wishlist">${e?`المفضلة`:`Wishlist`}</a></li>
              <li><a href="#/faq">${e?`الأسئلة الشائعة`:`FAQs`}</a></li>
              <li><a href="#/contact">${e?`تواصل معنا`:`Contact Us`}</a></li>
            </ul>
          </div>

          <!-- Column 4: Policies -->
          <div class="footer-col">
            <h5>${e?`السياسات والقوانين`:`Policies & Terms`}</h5>
            <ul class="footer-links">
              <li><a href="#/shipping-policy">${e?`سياسة الشحن والتوصيل`:`Shipping Policy`}</a></li>
              <li><a href="#/return-policy">${e?`سياسة الإرجاع والاستبدال`:`Return & Refund Policy`}</a></li>
              <li><a href="#/privacy-policy">${e?`سياسة الخصوصية`:`Privacy Policy`}</a></li>
              <li><a href="#/terms">${e?`الشروط والأحكام`:`Terms & Conditions`}</a></li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Bottom Section: Legal & Payments -->
      <div class="footer-bottom">
        <div class="container bottom-flex">
          <p class="copyright">&copy; 2026 Feather Home Textile. ${e?`جميع الحقوق محفوظة`:`All rights reserved.`}</p>
          
          <!-- Payment Icons -->
          <div class="payment-methods">
            <span class="payment-badge knet" title="KNET">KNET</span>
            <span class="payment-badge visa" title="Visa">VISA</span>
            <span class="payment-badge mastercard" title="Mastercard">MC</span>
            <span class="payment-badge cod" title="Cash on Delivery">${e?`الدفع عند الاستلام`:`COD`}</span>
          </div>
        </div>
      </div>
    </div>

    <style>
      .footer-wrapper {
        background-color: var(--bg-secondary);
        border-top: 1px solid var(--border-color);
        margin-top: 4rem;
        color: var(--text-primary);
        font-size: 0.9rem;
      }
      
      .footer-top {
        padding: 3rem 0;
        border-bottom: 1px solid var(--border-color);
      }
      .top-grid {
        display: grid;
        grid-template-columns: 2fr 1fr;
        gap: 3rem;
        align-items: center;
      }
      .newsletter-area h4, .socials-area h4 {
        margin-bottom: 0.5rem;
        font-weight: 600;
      }
      .newsletter-area p {
        color: var(--text-secondary);
        font-size: 0.85rem;
        margin-bottom: 1rem;
      }
      .newsletter-form {
        display: flex;
        gap: 0.5rem;
        max-width: 500px;
      }
      .social-icons {
        display: flex;
        gap: 0.8rem;
        margin-top: 1rem;
      }
      .social-icon {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        border: 1px solid var(--border-color);
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--text-secondary);
        transition: var(--transition-fast);
      }
      .social-icon:hover {
        background-color: var(--text-primary);
        color: var(--bg-primary);
        border-color: var(--text-primary);
        transform: translateY(-3px);
      }

      /* Center Grid */
      .footer-center {
        padding: 4rem 0;
        border-bottom: 1px solid var(--border-color);
      }
      .center-grid {
        display: grid;
        grid-template-columns: 1.5fr 1fr 1fr 1fr;
        gap: 2.5rem;
      }
      .footer-col h5 {
        font-size: 1rem;
        font-weight: 600;
        margin-bottom: 1.5rem;
        color: var(--text-primary);
      }
      .about-desc {
        color: var(--text-secondary);
        font-size: 0.85rem;
        line-height: 1.6;
        margin-bottom: 1.5rem;
      }
      .contact-details p {
        font-size: 0.85rem;
        margin-bottom: 0.5rem;
        color: var(--text-secondary);
      }
      .footer-links {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 0.8rem;
      }
      .footer-links a {
        text-decoration: none;
        color: var(--text-secondary);
        transition: var(--transition-fast);
        font-size: 0.85rem;
      }
      .footer-links a:hover {
        color: var(--accent-gold);
        padding-inline-start: 4px;
      }

      /* Bottom bar */
      .footer-bottom {
        padding: 1.5rem 0;
        background-color: var(--bg-tertiary);
      }
      .bottom-flex {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        gap: 1rem;
      }
      .copyright {
        font-size: 0.8rem;
        color: var(--text-muted);
      }
      .payment-methods {
        display: flex;
        gap: 0.5rem;
      }
      .payment-badge {
        font-size: 0.7rem;
        font-weight: 700;
        padding: 0.3rem 0.6rem;
        border-radius: 4px;
        background-color: var(--bg-primary);
        border: 1px solid var(--border-color);
        color: var(--text-secondary);
      }
      .payment-badge.knet {
        border-color: #007a3d;
        color: #007a3d;
      }
      .payment-badge.visa {
        border-color: #1a1f71;
        color: #1a1f71;
      }

      @media (max-width: 768px) {
        .top-grid {
          grid-template-columns: 1fr;
          gap: 2rem;
        }
        .center-grid {
          grid-template-columns: 1fr 1fr;
        }
        .bottom-flex {
          flex-direction: column;
          text-align: center;
        }
      }
      @media (max-width: 480px) {
        .center-grid {
          grid-template-columns: 1fr;
        }
      }
    </style>
  `}a.onMount=()=>{let e=document.getElementById(`newsletter-form`);e&&e.addEventListener(`submit`,t=>{t.preventDefault();let n=document.getElementById(`newsletter-email`).value,i=r.state.lang===`ar`;r.showToast(i?`شكراً للاشتراك! سنرسل العروض إلى ${n}`:`Thanks for subscribing! Offers will be sent to ${n}`,`success`),e.reset()})};function o(){let e=r.state.lang===`ar`,t=r.state.cart,n=r.getCartSubtotal(),i=r.getCartDiscount(),a=r.getCartTotal(),o=n>100?0:2.5,s=r.state.appliedCoupon;return`
    <div id="cart-drawer-backdrop" class="drawer-backdrop">
      <div class="drawer-panel cart-drawer-panel">
        <!-- Header -->
        <div class="drawer-header">
          <span style="font-weight:600; font-size:1.1rem;">
            ${e?`عربة التسوق`:`Shopping Cart`} (${t.reduce((e,t)=>e+t.quantity,0)})
          </span>
          <button id="cart-drawer-close" style="background:none; border:none; cursor:pointer; color:var(--text-primary);">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <!-- Body: Cart Items -->
        <div class="drawer-body">
          ${t.length===0?`
            <div class="empty-cart-view">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="color:var(--text-muted); margin-bottom:1rem;">
                <circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
              <p style="color:var(--text-muted); font-size:0.95rem; margin-bottom:1.5rem;">
                ${e?`عربة التسوق فارغة حالياً`:`Your cart is currently empty.`}
              </p>
              <a href="#/category" class="btn btn-primary" id="cart-drawer-shop-btn">
                ${e?`ابدأ التسوق`:`Start Shopping`}
              </a>
            </div>
          `:`
            <div class="cart-items-list">
              ${t.map(t=>{let n=t.product,r=e?n.titleAr:n.titleEn;n.price.toFixed(3);let i=t.image||n.image,a=t.price||n.price;return`
                  <div class="cart-drawer-item">
                    <img src="${i}" alt="${r}" class="item-img">
                    <div class="item-details">
                      <a href="#/product/${n.id}" class="item-title">${r}</a>
                      <div class="item-meta">
                        ${t.color?`<span>${e?`اللون:`:`Color:`} ${t.color}</span>`:``}
                        ${t.size?`<span>${e?`المقاس:`:`Size:`} ${t.size}</span>`:``}
                      </div>
                      <div class="qty-price-flex">
                        <!-- Qty Selector -->
                        <div class="qty-counter">
                          <button class="qty-btn dec-qty" data-id="${n.id}" data-color="${t.color||``}" data-size="${t.size||``}">-</button>
                          <span class="qty-num">${t.quantity}</span>
                          <button class="qty-btn inc-qty" data-id="${n.id}" data-color="${t.color||``}" data-size="${t.size||``}">+</button>
                        </div>
                        <span class="item-price">${(a*t.quantity).toFixed(3)} KWD</span>
                      </div>
                    </div>
                    <!-- Delete Button -->
                    <button class="delete-item-btn" data-id="${n.id}" data-color="${t.color||``}" data-size="${t.size||``}" title="${e?`إزالة`:`Remove`}">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                      </svg>
                    </button>
                  </div>
                `}).join(``)}
            </div>
          `}
        </div>

        <!-- Footer -->
        ${t.length>0?`
          <div class="drawer-footer">
            <!-- Coupon Input -->
            <div class="drawer-coupon-section">
              ${s?`
                <div class="applied-coupon-row">
                  <span>🏷️ ${s.code} (-${s.type===`percent`?s.discount+`%`:s.discount.toFixed(3)+` KWD`})</span>
                  <button id="drawer-remove-coupon" class="btn-text-remove">${e?`إزالة`:`Remove`}</button>
                </div>
              `:`
                <form id="drawer-coupon-form" class="coupon-form-inline">
                  <input type="text" id="drawer-coupon-input" placeholder="${e?`كوبون الخصم`:`Coupon Code`}" class="form-control">
                  <button type="submit" class="btn btn-secondary">${e?`تطبيق`:`Apply`}</button>
                </form>
              `}
            </div>

            <!-- Price Summary -->
            <div class="cart-summary-lines">
              <div class="summary-line">
                <span>${e?`المجموع الفرعي:`:`Subtotal:`}</span>
                <span>${n.toFixed(3)} KWD</span>
              </div>
              ${i>0?`
                <div class="summary-line discount">
                  <span>${e?`الخصم:`:`Discount:`}</span>
                  <span>-${i.toFixed(3)} KWD</span>
                </div>
              `:``}
              <div class="summary-line">
                <span>${e?`الشحن:`:`Shipping:`}</span>
                <span>${o===0?e?`مجاني`:`Free`:o.toFixed(3)+` KWD`}</span>
              </div>
              <div class="summary-line total-row">
                <span>${e?`الإجمالي:`:`Total:`}</span>
                <span>${a.toFixed(3)} KWD</span>
              </div>
            </div>

            <!-- Checkout Buttons -->
            <div class="drawer-actions-grid">
              <a href="#/cart" id="drawer-view-cart-btn" class="btn btn-secondary">${e?`عرض السلة الكاملة`:`View Full Cart`}</a>
              <a href="#/checkout" id="drawer-checkout-btn" class="btn btn-primary">${e?`إتمام الشراء`:`Checkout Now`}</a>
            </div>
          </div>
        `:``}
      </div>
    </div>

    <style>
      .cart-drawer-panel {
        transform: translateX(100%);
      }
      [dir="rtl"] .cart-drawer-panel {
        transform: translateX(-100%);
      }
      
      .empty-cart-view {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
        text-align: center;
      }
      
      /* Items list */
      .cart-items-list {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
      }
      .cart-drawer-item {
        display: flex;
        gap: 1rem;
        position: relative;
        border-bottom: 1px solid var(--border-light);
        padding-bottom: 1.2rem;
      }
      .cart-drawer-item:last-child {
        border-bottom: none;
        padding-bottom: 0;
      }
      .cart-drawer-item .item-img {
        width: 70px;
        height: 90px;
        object-fit: cover;
        border-radius: 4px;
        background-color: var(--bg-secondary);
      }
      .cart-drawer-item .item-details {
        flex: 1;
        display: flex;
        flex-direction: column;
      }
      .cart-drawer-item .item-title {
        font-size: 0.9rem;
        font-weight: 500;
        text-decoration: none;
        color: var(--text-primary);
        line-height: 1.3;
        margin-bottom: 0.25rem;
      }
      .cart-drawer-item .item-title:hover {
        color: var(--accent-gold);
      }
      .cart-drawer-item .item-meta {
        font-size: 0.75rem;
        color: var(--text-muted);
        display: flex;
        gap: 0.8rem;
        margin-bottom: 0.6rem;
      }
      .qty-price-flex {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: auto;
      }
      .qty-counter {
        display: flex;
        align-items: center;
        border: 1px solid var(--border-color);
        border-radius: 4px;
        overflow: hidden;
      }
      .qty-btn {
        background: none;
        border: none;
        width: 26px;
        height: 26px;
        cursor: pointer;
        font-weight: 500;
        font-size: 0.9rem;
        color: var(--text-primary);
      }
      .qty-btn:hover {
        background-color: var(--bg-secondary);
      }
      .qty-num {
        font-size: 0.85rem;
        font-weight: 600;
        width: 30px;
        text-align: center;
      }
      .item-price {
        font-weight: 600;
        font-size: 0.95rem;
        color: var(--accent-gold);
      }
      .delete-item-btn {
        background: none;
        border: none;
        color: var(--text-muted);
        cursor: pointer;
        padding: 0.25rem;
        transition: var(--transition-fast);
        align-self: flex-start;
      }
      .delete-item-btn:hover {
        color: var(--error-color);
      }

      /* Coupon row */
      .drawer-coupon-section {
        margin-bottom: 1.2rem;
      }
      .coupon-form-inline {
        display: flex;
        gap: 0.5rem;
      }
      .coupon-form-inline input {
        padding: 0.5rem 0.8rem;
        font-size: 0.85rem;
      }
      .coupon-form-inline button {
        padding: 0.5rem 1rem;
        font-size: 0.85rem;
      }
      .applied-coupon-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 0.85rem;
        background-color: var(--accent-gold-light);
        padding: 0.6rem 1rem;
        border-radius: 4px;
        border: 1px dashed var(--accent-gold);
      }
      .btn-text-remove {
        background: none;
        border: none;
        color: var(--error-color);
        font-weight: 600;
        cursor: pointer;
        font-size: 0.8rem;
      }

      /* Summary lines */
      .cart-summary-lines {
        display: flex;
        flex-direction: column;
        gap: 0.6rem;
        margin-bottom: 1.5rem;
      }
      .summary-line {
        display: flex;
        justify-content: space-between;
        font-size: 0.9rem;
        color: var(--text-secondary);
      }
      .summary-line.discount {
        color: var(--success-color);
      }
      .summary-line.total-row {
        font-size: 1.1rem;
        font-weight: 600;
        color: var(--text-primary);
        border-top: 1px solid var(--border-color);
        padding-top: 0.8rem;
        margin-top: 0.2rem;
      }

      /* Actions Grid */
      .drawer-actions-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 0.8rem;
      }
    </style>
  `}o.onMount=()=>{let e=document.getElementById(`cart-drawer-backdrop`),t=document.getElementById(`cart-drawer-close`),n=document.getElementById(`cart-drawer-shop-btn`),i=document.getElementById(`drawer-view-cart-btn`),a=document.getElementById(`drawer-checkout-btn`),o=()=>{if(e){e.classList.remove(`active`);let t=r.state.lang===`ar`;e.querySelector(`.drawer-panel`).style.transform=t?`translateX(-100%)`:`translateX(100%)`}};t&&t.addEventListener(`click`,o),e&&e.addEventListener(`click`,t=>{t.target===e&&o()}),n&&n.addEventListener(`click`,o),i&&i.addEventListener(`click`,o),a&&a.addEventListener(`click`,o),e.querySelectorAll(`.inc-qty`).forEach(e=>{e.addEventListener(`click`,()=>{let t=parseInt(e.dataset.id),n=e.dataset.color||null,i=e.dataset.size||null,a=r.state.cart.find(e=>e.product.id===t&&e.color===n&&e.size===i);a&&r.updateCartQty(t,n,i,a.quantity+1)})}),e.querySelectorAll(`.dec-qty`).forEach(e=>{e.addEventListener(`click`,()=>{let t=parseInt(e.dataset.id),n=e.dataset.color||null,i=e.dataset.size||null,a=r.state.cart.find(e=>e.product.id===t&&e.color===n&&e.size===i);a&&r.updateCartQty(t,n,i,a.quantity-1)})}),e.querySelectorAll(`.delete-item-btn`).forEach(e=>{e.addEventListener(`click`,()=>{let t=parseInt(e.dataset.id),n=e.dataset.color||null,i=e.dataset.size||null;r.removeFromCart(t,n,i)})});let s=document.getElementById(`drawer-coupon-form`);s&&s.addEventListener(`submit`,e=>{e.preventDefault();let t=document.getElementById(`drawer-coupon-input`).value;r.applyCouponCode(t)});let c=document.getElementById(`drawer-remove-coupon`);c&&c.addEventListener(`click`,()=>{r.removeCoupon()})};function s(){let e=r.state.lang===`ar`;return`
    <div class="whatsapp-widget-wrapper">
      <!-- Chat Balloon (Hidden by default) -->
      <div id="wa-chat-balloon" class="wa-chat-balloon">
        <div class="chat-header">
          <div class="chat-avatar">✨</div>
          <div class="chat-info">
            <span class="chat-name">Sana Boutique Support</span>
            <span class="chat-status">${e?`متصل حالياً`:`Online`}</span>
          </div>
          <button id="wa-close-btn" class="chat-close-btn">&times;</button>
        </div>
        
        <div class="chat-body" id="wa-chat-body">
          <div class="chat-message bot">
            <p>${e?`أهلاً بك في بوتيك سناء! كيف يمكننا مساعدتك اليوم؟`:`Hello and welcome to Sana Boutique! How can we help you today?`}</p>
            <span class="time">Just now</span>
          </div>
        </div>

        <div class="chat-quick-replies">
          <button class="quick-reply-btn" data-type="track">${e?`📦 تتبع طلبي`:`📦 Track Order`}</button>
          <button class="quick-reply-btn" data-type="coupon">${e?`🏷️ كود خصم ترحيبي`:`🏷️ Welcome Coupon`}</button>
        </div>

        <div class="chat-footer">
          <input type="text" id="wa-chat-input" placeholder="${e?`اكتب رسالتك هنا...`:`Type message...`}" class="form-control">
          <button id="wa-send-btn" class="send-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </button>
        </div>
      </div>

      <!-- Main Floating Trigger Button -->
      <button id="wa-trigger-btn" class="wa-trigger-btn" title="Contact WhatsApp">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
        </svg>
        <span class="pulse-indicator"></span>
      </button>
    </div>

    <style>
      .whatsapp-widget-wrapper {
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        z-index: 1000;
      }
      [dir="rtl"] .whatsapp-widget-wrapper {
        right: auto;
        left: 2rem;
      }
      
      /* Trigger Button */
      .wa-trigger-btn {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background-color: #25d366;
        color: white;
        border: none;
        box-shadow: 0 5px 25px rgba(37, 211, 102, 0.4);
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        transition: var(--transition-smooth);
      }
      .wa-trigger-btn:hover {
        transform: scale(1.08) rotate(5deg);
        box-shadow: 0 8px 30px rgba(37, 211, 102, 0.55);
      }
      
      .pulse-indicator {
        position: absolute;
        top: 0;
        right: 0;
        width: 14px;
        height: 14px;
        background-color: var(--accent-gold);
        border: 2px solid white;
        border-radius: 50%;
        animation: pulseEffect 2s infinite;
      }
      @keyframes pulseEffect {
        0% { transform: scale(0.9); opacity: 1; }
        50% { transform: scale(1.3); opacity: 0.5; }
        100% { transform: scale(0.9); opacity: 1; }
      }

      /* Chat Balloon panel */
      .wa-chat-balloon {
        position: absolute;
        bottom: 75px;
        right: 0;
        width: 320px;
        background-color: var(--bg-primary);
        border: 1px solid var(--border-color);
        border-radius: 12px;
        box-shadow: var(--modal-shadow);
        display: flex;
        flex-direction: column;
        overflow: hidden;
        opacity: 0;
        transform: translateY(20px) scale(0.95);
        visibility: hidden;
        transition: var(--transition-smooth);
      }
      [dir="rtl"] .wa-chat-balloon {
        right: auto;
        left: 0;
      }
      .wa-chat-balloon.active {
        opacity: 1;
        transform: translateY(0) scale(1);
        visibility: visible;
      }

      .chat-header {
        background-color: #25d366;
        color: white;
        padding: 1rem;
        display: flex;
        align-items: center;
        gap: 0.8rem;
        position: relative;
      }
      .chat-avatar {
        width: 38px;
        height: 38px;
        border-radius: 50%;
        background-color: rgba(255,255,255,0.2);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.2rem;
      }
      .chat-info {
        display: flex;
        flex-direction: column;
      }
      .chat-name {
        font-size: 0.85rem;
        font-weight: 600;
      }
      .chat-status {
        font-size: 0.7rem;
        opacity: 0.9;
      }
      .chat-close-btn {
        position: absolute;
        top: 0.8rem;
        right: 0.8rem;
        background: none;
        border: none;
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
        line-height: 1;
      }
      [dir="rtl"] .chat-close-btn {
        right: auto;
        left: 0.8rem;
      }

      .chat-body {
        padding: 1rem;
        max-height: 200px;
        overflow-y: auto;
        display: flex;
        flex-direction: column;
        gap: 0.8rem;
        background-color: var(--bg-secondary);
      }
      .chat-message {
        max-width: 85%;
        padding: 0.6rem 0.8rem;
        border-radius: 8px;
        font-size: 0.8rem;
        line-height: 1.4;
      }
      .chat-message.bot {
        background-color: var(--bg-primary);
        color: var(--text-primary);
        align-self: flex-start;
        border-top-left-radius: 0;
      }
      [dir="rtl"] .chat-message.bot {
        border-top-left-radius: 8px;
        border-top-right-radius: 0;
      }
      .chat-message.user {
        background-color: #dcf8c6;
        color: #151515;
        align-self: flex-end;
        border-top-right-radius: 0;
      }
      [dir="rtl"] .chat-message.user {
        border-top-right-radius: 8px;
        border-top-left-radius: 0;
      }
      .chat-message .time {
        display: block;
        font-size: 0.65rem;
        color: var(--text-muted);
        text-align: right;
        margin-top: 0.25rem;
      }

      /* Quick replies */
      .chat-quick-replies {
        display: flex;
        gap: 0.4rem;
        padding: 0.5rem 1rem;
        background-color: var(--bg-secondary);
        border-top: 1px solid var(--border-light);
        flex-wrap: wrap;
      }
      .quick-reply-btn {
        font-size: 0.75rem;
        background-color: var(--bg-primary);
        border: 1px solid var(--border-color);
        padding: 0.3rem 0.6rem;
        border-radius: 12px;
        cursor: pointer;
        transition: var(--transition-fast);
      }
      .quick-reply-btn:hover {
        background-color: var(--accent-gold-light);
        border-color: var(--accent-gold);
      }

      /* Footer */
      .chat-footer {
        padding: 0.6rem 1rem;
        border-top: 1px solid var(--border-color);
        display: flex;
        gap: 0.5rem;
      }
      .chat-footer input {
        font-size: 0.8rem;
        padding: 0.4rem 0.8rem;
      }
      .send-btn {
        background-color: #25d366;
        color: white;
        border: none;
        width: 32px;
        height: 32px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: var(--transition-fast);
      }
      .send-btn:hover {
        transform: scale(1.05);
      }
    </style>
  `}s.onMount=()=>{let e=document.getElementById(`wa-trigger-btn`),t=document.getElementById(`wa-chat-balloon`),n=document.getElementById(`wa-close-btn`),i=document.getElementById(`wa-chat-input`),a=document.getElementById(`wa-send-btn`),o=document.getElementById(`wa-chat-body`),s=r.state.lang===`ar`;e&&t&&e.addEventListener(`click`,()=>{t.classList.toggle(`active`)}),n&&t&&n.addEventListener(`click`,()=>{t.classList.remove(`active`)});let c=(e,t)=>{let n=new Date().toLocaleTimeString([],{hour:`2-digit`,minute:`2-digit`}),r=document.createElement(`div`);r.className=`chat-message ${t}`,r.innerHTML=`<p>${e}</p><span class="time">${n}</span>`,o.appendChild(r),o.scrollTop=o.scrollHeight},l=()=>{let e=i.value.trim();e&&(c(e,`user`),i.value=``,setTimeout(()=>{let t=``;t=e.toLowerCase().includes(`order`)||e.includes(`طلب`)?s?`لتتبع طلبك، يرجى الانتقال إلى صفحة لوحة التحكم ومن ثم اختيار "تتبع الطلبات" أو إدخال رقم الطلب هنا.`:`To track your order, please navigate to the Account Dashboard and select "Track Order" or send the Order ID here.`:e.toLowerCase().includes(`discount`)||e.includes(`خصم`)||e.toLowerCase().includes(`coupon`)?s?`يمكنك استخدام الكوبون الترحيبي (WELCOME) للحصول على خصم 15% على إجمالي عربة التسوق الخاصة بك!`:`You can use the welcome coupon (SAVE10) for 10% off or (SAVE20) for 20% off your next purchase!`:s?`تم استلام استفسارك! يمكنك أيضاً النقر للدردشة المباشرة مع وكلائنا عبر الواتساب على +96599887766.`:`Your inquiry has been received! You can also click to chat directly with our agents on WhatsApp at +96599887766.`,c(t,`bot`)},1e3))};a&&a.addEventListener(`click`,l),i&&i.addEventListener(`keydown`,e=>{e.key===`Enter`&&l()}),t.querySelectorAll(`.quick-reply-btn`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.type;t===`track`?(c(s?`أريد تتبع طلبي`:`I want to track my order`,`user`),setTimeout(()=>{c(s?`تفضل بزيارة صفحة حسابي > تتبع الطلبات أو أرسل رقم طلبك (مثال: ORD-123456) لمعرفة مكانه.`:`Visit My Account > Order History or provide your Order ID (e.g. ORD-123456) for status updates.`,`bot`)},1e3)):t===`coupon`&&(c(s?`ما هي الكوبونات المتاحة؟`:`What coupons are available?`,`user`),setTimeout(()=>{c(s?`استخدم الكوبون الكود SAVE20 للحصول على خصم 20%!`:`Try applying coupon code SAVE20 for a 20% flat discount on your cart!`,`bot`)},1e3))})})};function c(){let e=r.state.lang===`ar`,t=[{id:`double`,nameAr:`شخصين`,nameEn:`Double Bedding`},{id:`single`,nameAr:`شخص واحد`,nameEn:`Single Bedding`},{id:`bridal`,nameAr:`مفارش عرايسي`,nameEn:`Bridal Bedding`},{id:`kids`,nameAr:`مفارش الأطفال`,nameEn:`Kids Bedding`},{id:`toppers`,nameAr:`لباد ومخدات`,nameEn:`Toppers & Pillows`},{id:`sheets`,nameAr:`شراشف سرير`,nameEn:`Bed Sheets`},{id:`strollers`,nameAr:`عربات الأطفال`,nameEn:`Baby Strollers`},{id:`bath`,nameAr:`مستلزمات الحمام`,nameEn:`Bath Essentials`}],n=r.state.bannerPairs,i=[],a=[...r.state.products].filter(e=>e.isNew).reverse();a.length>0&&i.push({id:`new-arrivals`,nameAr:`وصل حديثاً`,nameEn:`New Arrivals`,link:`#/category`,products:a.slice(0,10)}),t.forEach(e=>{let t=r.state.products.filter(t=>t.category===e.id);t.length>0&&i.push({id:e.id,nameAr:e.nameAr,nameEn:e.nameEn,link:`#/category?category=${e.id}`,products:t.slice(0,10)})});let o=``;return i.forEach((t,r)=>{if(o+=`
      <!-- Section: ${t.nameEn} -->
      <section class="${t.id}-section container">
        <div class="homepage-section-header">
          <a href="${t.link}" class="view-all-link">${e?`عرض الكل`:`View All`}</a>
          <h2 class="section-title">${e?t.nameAr:t.nameEn}</h2>
        </div>
        <div class="products-grid">
          ${t.products.map(t=>l(t,e)).join(``)}
        </div>
      </section>
    `,r<i.length-1){let t=n[r%n.length];o+=`
        <!-- Alternating Promo Banners -->
        <section class="promo-banners-container container animate-fade-in">
          <div class="promo-banners-row">
            <a href="#/category?category=${t[0].id}" class="promo-banner-card" style="background-image: linear-gradient(rgba(0,0,0,0.15), rgba(0,0,0,0.3)), url('${t[0].image}');">
              <span class="banner-title">${e?t[0].nameAr:t[0].nameEn}</span>
            </a>
            <a href="#/category?category=${t[1].id}" class="promo-banner-card" style="background-image: linear-gradient(rgba(0,0,0,0.15), rgba(0,0,0,0.3)), url('${t[1].image}');">
              <span class="banner-title">${e?t[1].nameAr:t[1].nameEn}</span>
            </a>
          </div>
        </section>
      `}}),`
    <div class="home-page-container animate-fade-in">
      
      <!-- Hero Carousel Slider -->
      <section class="hero-slider">
        <div class="slides-container" id="hero-slides">
          ${r.state.homeSlides.map((t,n)=>`
            <div class="hero-slide ${n===0?`active`:``}" style="background-image: linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.45)), url('${t.image}');">
              <div class="hero-content container">
                <span class="subtitle">${e?t.subtitleAr:t.subtitleEn}</span>
                <h1>${e?t.titleAr:t.titleEn}</h1>
                <p>${e?t.descAr:t.descEn}</p>
                <a href="${t.link}" class="btn btn-accent">${e?t.btnTextAr:t.btnTextEn}</a>
              </div>
            </div>
          `).join(``)}
        </div>
        <!-- Dots Navigation -->
        <div class="slider-dots">
          ${r.state.homeSlides.map((e,t)=>`
            <span class="dot ${t===0?`active`:``}" data-index="${t}"></span>
          `).join(``)}
        </div>
      </section>

      <!-- Premium Brands Showcase Bar -->
      <section class="store-features" style="background-color: var(--bg-secondary); padding: 2.2rem 0; border-bottom: 1px solid var(--border-light);">
        <div class="container" style="display:flex; justify-content:space-around; align-items:center; flex-wrap:wrap; gap:2.5rem;">
          <a href="#/category?category=brand-feather" style="text-decoration:none; color:inherit;"><span class="brand-logo" style="font-size:1.6rem; font-weight:700; letter-spacing:0.25em; color:var(--text-muted); opacity:0.6; transition:var(--transition-fast); cursor:pointer;">FEATHER</span></a>
          <a href="#/category?category=brand-calvo" style="text-decoration:none; color:inherit;"><span class="brand-logo" style="font-size:1.6rem; font-weight:700; letter-spacing:0.25em; color:var(--text-muted); opacity:0.6; transition:var(--transition-fast); cursor:pointer;">CALVO</span></a>
          <a href="#/category?category=brand-venice" style="text-decoration:none; color:inherit;"><span class="brand-logo" style="font-size:1.6rem; font-weight:700; letter-spacing:0.25em; color:var(--text-muted); opacity:0.6; transition:var(--transition-fast); cursor:pointer;">VENEZIA</span></a>
          <a href="#/category?category=brand-silk" style="text-decoration:none; color:inherit;"><span class="brand-logo" style="font-size:1.6rem; font-weight:700; letter-spacing:0.25em; color:var(--text-muted); opacity:0.6; transition:var(--transition-fast); cursor:pointer;">HARIR</span></a>
          <a href="#/category?category=brand-highcrest" style="text-decoration:none; color:inherit;"><span class="brand-logo" style="font-size:1.6rem; font-weight:700; letter-spacing:0.25em; color:var(--text-muted); opacity:0.6; transition:var(--transition-fast); cursor:pointer;">HIGH CREST</span></a>
        </div>
      </section>

      ${o}

      <!-- Customer Testimonials Slider -->
      <section class="testimonials-section container">
        <div class="section-header">
          <h2>${e?`آراء عملائنا`:`Client Testimonials`}</h2>
          <p>${e?`ماذا يقول عشاق الفخامة عن تجربتهم معنا`:`Hear from our premium clients about their experience`}</p>
        </div>
        <div class="testimonials-slider">
          <div class="testimonial-card">
            <div class="stars">⭐⭐⭐⭐⭐</div>
            <p class="quote">"${e?`لحاف قطني مريح جداً ونوعية ممتازة، التوصيل في نفس اليوم، واللباد 8 سم حكاية ثانية غير شكل نومي تماماً. شكراً نيو لاين!`:`Incredibly soft cotton comforter. Delivery was fast, and the 8cm topper completely resolved my back pain. Highly recommended!`}"</p>
            <div class="client">
              <span class="name">${e?`أحمد الشمري`:`Ahmad Al-Shammari`}</span>
              <span class="loc">${e?`الكويت، السالمية`:`Salmiya, Kuwait`}</span>
            </div>
          </div>
          <div class="testimonial-card">
            <div class="stars">⭐⭐⭐⭐⭐</div>
            <p class="quote">"${e?`أرواب ومناشف الحمام ناعمة وتمتص الماء بسرعة، والمقاسات مريحة جداً. بالتأكيد سأكرر الطلب!`:`The bathrobes are incredibly soft and absorb moisture instantly. Great customer support and premium package box!`}"</p>
            <div class="client">
              <span class="name">${e?`مريم العتيبي`:`Maryam Al-Otaibi`}</span>
              <span class="loc">${e?`الكويت، ضاحية عبد الله السالم`:`Abdullah Al-Salem, KW`}</span>
            </div>
          </div>
        </div>
      </section>
    </div>

    <style>
      /* Custom Homepage Layout Styling */
      .home-page-container .products-grid {
        display: flex;
        flex-wrap: nowrap;
        overflow-x: auto;
        justify-content: flex-start;
        scroll-snap-type: x mandatory;
        -webkit-overflow-scrolling: touch;
        gap: 1.5rem;
        padding-bottom: 1.2rem;
        scrollbar-width: thin;
        scroll-behavior: smooth;
      }
      .home-page-container .products-grid::-webkit-scrollbar {
        height: 6px;
      }
      .home-page-container .products-grid::-webkit-scrollbar-thumb {
        background-color: var(--border-color);
        border-radius: 4px;
      }
      .home-page-container .products-grid::-webkit-scrollbar-thumb:hover {
        background-color: var(--accent-gold);
      }
      .home-page-container .product-card {
        flex: 0 0 calc(20% - 1.2rem); /* 5 items on desktop */
        min-width: 250px;
        scroll-snap-align: start;
      }
      @media (max-width: 1200px) {
        .home-page-container .product-card {
          flex: 0 0 calc(25% - 1.125rem); /* 4 items */
        }
      }
      @media (max-width: 992px) {
        .home-page-container .product-card {
          flex: 0 0 calc(33.333% - 1rem); /* 3 items */
        }
      }
      @media (max-width: 768px) {
        .home-page-container .product-card {
          flex: 0 0 calc(50% - 0.75rem); /* 2 items */
        }
      }
      @media (max-width: 480px) {
        .home-page-container .product-card {
          flex: 0 0 80%; /* 1.25 items */
        }
      }

      .homepage-section-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 3.5rem 0 1.5rem 0;
        border-bottom: 1.5px solid var(--border-light);
        padding-bottom: 0.75rem;
      }
      .homepage-section-header .section-title {
        font-size: 1.8rem;
        font-weight: 700;
        margin: 0;
        color: var(--text-primary);
        font-family: 'Cairo', 'Playfair Display', serif;
      }
      .homepage-section-header .view-all-link {
        font-size: 0.95rem;
        color: var(--accent-gold);
        text-decoration: none;
        font-weight: 600;
        transition: var(--transition-fast);
      }
      .homepage-section-header .view-all-link:hover {
        color: var(--text-primary);
        text-decoration: underline;
      }
      .promo-banners-row {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1.5rem;
        margin: 3.5rem auto;
      }
      .promo-banner-card {
        height: 260px;
        background-size: cover;
        background-position: center;
        border-radius: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        position: relative;
        overflow: hidden;
        transition: var(--transition-smooth);
        box-shadow: var(--card-shadow);
      }
      .promo-banner-card::before {
        content: '';
        position: absolute;
        top: 0; left: 0; right: 0; bottom: 0;
        background: rgba(0, 0, 0, 0.25);
        transition: var(--transition-smooth);
        z-index: 1;
      }
      .promo-banner-card:hover::before {
        background: rgba(0, 0, 0, 0.35);
      }
      .promo-banner-card:hover {
        transform: translateY(-4px);
        box-shadow: var(--card-shadow-hover);
      }
      .promo-banner-card .banner-title {
        color: #ffffff;
        font-size: 2.2rem;
        font-weight: 700;
        font-family: 'Cairo', sans-serif;
        z-index: 2;
        text-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
      }
      @media (max-width: 768px) {
        .promo-banners-row {
          grid-template-columns: 1fr;
        }
        .promo-banner-card {
          height: 180px;
        }
        .promo-banner-card .banner-title {
          font-size: 1.6rem;
        }
      }

      /* Hero Slider CSS */
      .hero-slider {
        position: relative;
        height: 580px;
        overflow: hidden;
        margin-top: -1px;
      }
      .hero-slide {
        position: absolute;
        top: 0; left: 0; right: 0; bottom: 0;
        background-size: cover;
        background-position: center;
        display: flex;
        align-items: center;
        opacity: 0;
        transition: opacity 1s cubic-bezier(0.4, 0, 0.2, 1);
        z-index: 1;
      }
      .hero-slide.active {
        opacity: 1;
        z-index: 2;
      }
      .hero-content {
        color: white;
        max-width: 700px;
        animation: heroFadeUp 1s ease forwards;
        transform: translateY(20px);
        opacity: 0;
      }
      .hero-slide.active .hero-content {
        animation: heroFadeUp 0.8s 0.2s cubic-bezier(0.25, 0.8, 0.25, 1) forwards;
      }
      .hero-content .subtitle {
        color: var(--accent-gold);
        font-size: 0.9rem;
        font-weight: 600;
        letter-spacing: 0.15em;
        display: block;
        margin-bottom: 1rem;
      }
      .hero-content h1 {
        font-family: 'Playfair Display', serif;
        font-size: 3.2rem;
        font-weight: 500;
        margin-bottom: 1.5rem;
        color: #ffffff;
        line-height: 1.2;
      }
      .hero-content p {
        font-size: 1.1rem;
        margin-bottom: 2rem;
        opacity: 0.9;
        line-height: 1.6;
      }
      
      @keyframes heroFadeUp {
        to { transform: translateY(0); opacity: 1; }
      }

      .slider-dots {
        position: absolute;
        bottom: 1.5rem;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        gap: 0.8rem;
        z-index: 3;
      }
      .slider-dots .dot {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: rgba(255,255,255,0.4);
        cursor: pointer;
        transition: var(--transition-fast);
      }
      .slider-dots .dot.active {
        background-color: var(--accent-gold);
        transform: scale(1.2);
      }

      /* Store Features */
      .store-features {
        background-color: var(--bg-secondary);
        padding: 2rem 0;
        border-bottom: 1px solid var(--border-light);
      }
      .features-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 2rem;
      }
      .feature-item {
        display: flex;
        align-items: center;
        gap: 1rem;
      }
      .feature-item .icon {
        font-size: 1.8rem;
      }
      .feature-item h6 {
        font-size: 0.9rem;
        font-weight: 600;
        margin-bottom: 0.15rem;
      }
      .feature-item p {
        font-size: 0.8rem;
        color: var(--text-secondary);
      }

      /* Category Cards */
      .section-header {
        text-align: center;
        margin: 4rem 0 2.5rem 0;
      }
      .section-header h2 {
        font-family: 'Playfair Display', serif;
        font-size: 2.2rem;
        font-weight: 500;
        margin-bottom: 0.5rem;
      }
      .section-header p {
        color: var(--text-secondary);
        font-size: 0.95rem;
      }
      
      .categories-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, 250px);
        justify-content: center;
        gap: 1.5rem;
      }
      .category-card {
        width: 250px;
        height: 250px;
        background-size: cover;
        background-position: center;
        border-radius: 6px;
        display: flex;
        align-items: flex-end;
        padding: 1.5rem;
        text-decoration: none;
        transition: var(--transition-smooth);
        overflow: hidden;
      }
      .category-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 15px 35px rgba(0,0,0,0.12);
      }
      .category-card .title {
        color: white;
        font-size: 1.15rem;
        font-weight: 600;
        letter-spacing: 0.02em;
        text-shadow: 0 2px 10px rgba(0,0,0,0.3);
      }

      /* Tabbed products */
      .tabbed-products-section {
        margin: 5rem auto;
      }

      /* Flash Sale Banner */
      .flash-sale-banner {
        background-color: var(--bg-secondary);
        padding: 5rem 0;
        margin: 5rem 0;
      }
      .sale-flex {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 4rem;
        align-items: center;
      }
      .sale-info h2 {
        font-family: 'Playfair Display', serif;
        font-size: 2.2rem;
        margin-bottom: 1.2rem;
      }
      .sale-info p {
        color: var(--text-secondary);
        font-size: 1rem;
        margin-bottom: 2rem;
        line-height: 1.6;
      }
      .countdown-timer {
        display: flex;
        gap: 1rem;
        margin-top: 1.5rem;
      }
      .timer-box {
        background-color: var(--bg-primary);
        border: 1px solid var(--border-color);
        border-radius: 6px;
        width: 75px;
        height: 75px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        box-shadow: var(--card-shadow);
      }
      .timer-box .num {
        font-size: 1.4rem;
        font-weight: 700;
        color: var(--accent-gold);
      }
      .timer-box .label {
        font-size: 0.75rem;
        color: var(--text-muted);
        font-weight: 500;
      }
      .sale-image-wrapper {
        border-radius: 8px;
        overflow: hidden;
        box-shadow: var(--card-shadow-hover);
        aspect-ratio: 4 / 3;
      }
      .sale-image-wrapper img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      /* Testimonials */
      .testimonials-section {
        margin: 5rem auto;
      }
      .testimonials-slider {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
      }
      .testimonial-card {
        background-color: var(--bg-secondary);
        border: 1px solid var(--border-light);
        border-radius: 6px;
        padding: 2.5rem;
        display: flex;
        flex-direction: column;
        gap: 1.2rem;
      }
      .testimonial-card .stars {
        color: var(--accent-gold);
        font-size: 1rem;
      }
      .testimonial-card .quote {
        font-style: italic;
        color: var(--text-secondary);
        line-height: 1.6;
        font-size: 0.95rem;
      }
      .testimonial-card .client {
        display: flex;
        flex-direction: column;
        margin-top: auto;
      }
      .testimonial-card .name {
        font-weight: 600;
        font-size: 0.9rem;
      }
      .testimonial-card .loc {
        font-size: 0.75rem;
        color: var(--text-muted);
      }

      /* Brands showcase */
      .brands-section {
        padding: 3rem 0;
        border-top: 1px solid var(--border-light);
        border-bottom: 1px solid var(--border-light);
        margin: 5rem auto;
      }
      .brands-flex {
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-wrap: wrap;
        gap: 2rem;
      }
      .brand-logo {
        font-size: 1.5rem;
        font-weight: 700;
        letter-spacing: 0.2em;
        color: var(--text-muted);
        opacity: 0.5;
        cursor: pointer;
        transition: var(--transition-fast);
      }
      .brand-logo:hover {
        color: var(--text-primary);
        opacity: 1;
        transform: scale(1.08);
      }

      @media (max-width: 992px) {
        .hero-slider { height: 420px; }
        .hero-content h1 { font-size: 2.3rem; }
        .features-grid { grid-template-columns: repeat(2, 1fr); gap: 1.5rem; }
        .sale-flex { grid-template-columns: 1fr; gap: 2rem; }
        .testimonials-slider { grid-template-columns: 1fr; }
      }
      @media (max-width: 576px) {
        .hero-slider { height: 350px; }
        .hero-content h1 { font-size: 1.8rem; }
        .features-grid { grid-template-columns: 1fr; gap: 1rem; }
      }
    </style>
  `}function l(e,t){let n=r.isInWishlist(e.id),i=e.originalPrice>e.price?Math.round((e.originalPrice-e.price)/e.originalPrice*100):0;return`
    <div class="product-card" onclick="window.location.hash = '#/product/${e.id}'" style="cursor: pointer;">
      <div class="img-wrapper">
        <img src="${e.image}" alt="${t?e.titleAr:e.titleEn}" loading="lazy">
        
        <!-- Badges -->
        ${e.stock<=0?`
          <span class="badge badge-soldout">${t?`نفذت الكمية`:`Sold Out`}</span>
        `:i>0?`
          <span class="badge badge-sale">${t?`خصم ${i}%`:`${i}% OFF`}</span>
        `:e.isNew?`
          <span class="badge badge-new">${t?`جديد`:`New`}</span>
        `:``}

        <!-- Actions panel -->
        <div class="card-actions" onclick="event.stopPropagation()">
          <button class="action-btn card-toggle-wish" data-id="${e.id}" title="${t?`المفضلة`:`Wishlist`}">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="${n?`currentColor`:`none`}" stroke="currentColor" stroke-width="2" style="${n?`color:var(--error-color)`:``}">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </button>
          
          <button class="action-btn card-quick-add" data-id="${e.id}" ${e.stock<=0?`disabled`:``} title="${t?`إضافة للسلة`:`Add to Cart`}">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
          </button>
        </div>
      </div>
      <div class="content">
        <span class="category">${t?e.categoryAr:e.categoryEn}</span>
        <a href="#/product/${e.id}" class="title" onclick="event.stopPropagation()">${t?e.titleAr:e.titleEn}</a>
        <div class="price-wrapper">
          <span class="price">${e.price%1==0?e.price.toFixed(0):e.price.toFixed(3)} KWD</span>
          ${e.originalPrice>e.price?`<span class="old-price">${e.originalPrice%1==0?e.originalPrice.toFixed(0):e.originalPrice.toFixed(3)} KWD</span>`:``}
        </div>
      </div>
    </div>
  `}c.onMount=()=>{let e=document.querySelectorAll(`.hero-slide`),t=document.querySelectorAll(`.slider-dots .dot`),n=0,i,a=r=>{e.forEach((e,n)=>{e.classList.toggle(`active`,n===r),t[n].classList.toggle(`active`,n===r)}),n=r},o=()=>{i=setInterval(()=>{a((n+1)%e.length)},6e3)};t.forEach(e=>{e.addEventListener(`click`,()=>{clearInterval(i),a(parseInt(e.dataset.index)),o()})}),o();let s=document.querySelector(`.home-page-container`);s&&(s.querySelectorAll(`.card-quick-add`).forEach(e=>{e.addEventListener(`click`,t=>{t.stopPropagation();let n=parseInt(e.dataset.id),i=r.state.products.find(e=>e.id===n);i&&r.addToCart(i,1)})}),s.querySelectorAll(`.card-toggle-wish`).forEach(e=>{e.addEventListener(`click`,t=>{t.stopPropagation();let n=parseInt(e.dataset.id),i=r.state.products.find(e=>e.id===n);i&&r.toggleWishlist(i)})}))};function u(t,n){let i=r.state.lang===`ar`;n&&n.category&&r.state.filters.category!==n.category&&(r.state.filters.category=n.category),r.state.searchQuery=n&&n.q?n.q:``;let a=(e,t=0)=>{let n=e.subcategories&&e.subcategories.length>0,o=t*12,s=`
      <button class="filter-link-btn ${r.state.filters.category===e.id?`active`:``}" data-cat="${e.id}" style="padding-inline-start:${o+8}px; font-size:${t===0?`0.85rem`:`0.78rem`}; font-weight:${t===0?`600`:`400`}; text-align:start; display:flex; align-items:center; width:100%; gap:0.4rem; border:none; background:none; cursor:pointer; color:var(--text-primary); transition:var(--transition-fast); padding-top:0.35rem; padding-bottom:0.35rem;">
        ${t>0?`<span style="opacity:0.35;">—</span>`:``}
        <span>${i?e.titleAr:e.titleEn}</span>
      </button>
    `;return n&&e.subcategories.forEach(e=>{s+=a(e,t+1)}),s},o=e.map(e=>a(e)).join(``);return`
    <div class="category-page-container container animate-fade-in">
      <!-- Breadcrumbs -->
      <div class="breadcrumbs">
        <a href="#/">${i?`الرئيسية`:`Home`}</a>
        <span>/</span>
        <a href="#/category">${i?`المتجر`:`Shop`}</a>
        ${r.state.filters.category===`all`?``:`
          <span>/</span>
          <span class="active">${i?f(r.state.filters.category):d(r.state.filters.category)}</span>
        `}
      </div>

      <!-- Main Layout: Sidebar & Content -->
      <div class="shop-layout">
        
        <!-- Sidebar Filters -->
        <aside class="filters-sidebar">
          <div class="filter-header">
            <h5>${i?`تصفية المنتجات`:`Filter Products`}</h5>
            <button id="reset-filters-btn" class="btn-text-reset">${i?`إعادة ضبط`:`Reset All`}</button>
          </div>

          <!-- Category Selection -->
          <div class="filter-group">
            <h6>${i?`التصنيفات`:`Categories`}</h6>
            <div class="filter-links-list">
              <button class="filter-link-btn ${r.state.filters.category===`all`?`active`:``}" data-cat="all" style="font-size:0.85rem; font-weight:600; text-align:start; display:flex; align-items:center; width:100%; gap:0.4rem; border:none; background:none; cursor:pointer; color:var(--text-primary); transition:var(--transition-fast); padding-top:0.35rem; padding-bottom:0.35rem;">
                <span>${i?`جميع المنتجات`:`All Products`}</span>
              </button>
              ${o}
            </div>
          </div>

          <!-- Price Range Slider -->
          <div class="filter-group">
            <h6>${i?`السعر (د.ك)`:`Price (KWD)`}</h6>
            <div class="price-slider-wrapper">
              <input type="range" id="price-range-slider" min="0" max="400" step="5" value="${r.state.filters.priceRange[1]}">
              <div class="price-labels">
                <span>0 KWD</span>
                <span id="price-max-label">${r.state.filters.priceRange[1]} KWD</span>
              </div>
            </div>
          </div>

          <!-- Availability filter -->
          <div class="filter-group">
            <h6>${i?`حالة التوفر`:`Availability`}</h6>
            <div class="checkbox-options">
              <label class="checkbox-label">
                <input type="radio" name="availability" value="all" ${r.state.filters.availability===`all`?`checked`:``}>
                <span>${i?`الكل`:`All`}</span>
              </label>
              <label class="checkbox-label">
                <input type="radio" name="availability" value="instock" ${r.state.filters.availability===`instock`?`checked`:``}>
                <span>${i?`متوفر بالمخزون`:`In Stock only`}</span>
              </label>
            </div>
          </div>
        </aside>

        <!-- Product Listing Grid Area -->
        <div class="listing-area">
          <!-- Top Tool Bar (Sorting / Grid List toggle) -->
          <div class="listing-toolbar" style="flex-direction:column; align-items:flex-start; gap:0.5rem;">
            ${r.state.searchQuery?`
              <div style="font-size:0.95rem; color:var(--text-primary); margin-bottom:0.25rem;">
                ${i?`نتائج البحث عن:`:`Search results for:`} <strong style="color:var(--accent-gold);">"${r.state.searchQuery}"</strong>
              </div>
            `:``}
            <div class="results-count" style="display:flex; justify-content:space-between; width:100%; align-items:center; flex-wrap:wrap; gap:0.5rem;">
              <div>
                <span id="total-results-count">0</span> ${i?`منتج تم العثور عليه`:`products found`}
              </div>
            </div>
            
            <div class="toolbar-controls">
              <!-- Sort Select -->
              <div class="sort-select-wrapper">
                <label for="sort-select">${i?`ترتيب حسب:`:`Sort By:`}</label>
                <select id="sort-select" class="form-control sort-select">
                  <option value="featured" ${r.state.filters.sort===`featured`?`selected`:``}>${i?`المميز`:`Featured`}</option>
                  <option value="price-asc" ${r.state.filters.sort===`price-asc`?`selected`:``}>${i?`السعر: من الأقل للأعلى`:`Price: Low to High`}</option>
                  <option value="price-desc" ${r.state.filters.sort===`price-desc`?`selected`:``}>${i?`السعر: من الأعلى للأقل`:`Price: High to Low`}</option>
                  <option value="rating" ${r.state.filters.sort===`rating`?`selected`:``}>${i?`الأعلى تقييماً`:`Highest Rated`}</option>
                </select>
              </div>

              <!-- Grid / List Switcher -->
              <div class="view-switcher">
                <button id="grid-view-btn" class="btn-icon active" title="${i?`عرض شبكي`:`Grid View`}">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect>
                    <rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect>
                  </svg>
                </button>
                <button id="list-view-btn" class="btn-icon" title="${i?`عرض طولي`:`List View`}">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line>
                    <line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line>
                    <line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <!-- Product Cards Grid / Container -->
          <div id="shop-products-container" class="products-grid">
            <!-- Dynamic products loaded by script -->
          </div>

          <!-- Pagination -->
          <div class="pagination-container" id="shop-pagination">
            <!-- Dynamic page numbers -->
          </div>
        </div>

      </div>
    </div>

    <style>
      .category-page-container {
        padding-top: 2rem;
      }
      .breadcrumbs {
        display: flex;
        gap: 0.5rem;
        font-size: 0.85rem;
        color: var(--text-muted);
        margin-bottom: 2rem;
      }
      .breadcrumbs a {
        text-decoration: none;
        color: inherit;
        transition: var(--transition-fast);
      }
      .breadcrumbs a:hover {
        color: var(--accent-gold);
      }
      .breadcrumbs .active {
        color: var(--text-primary);
        font-weight: 500;
      }

      /* Main layout */
      .shop-layout {
        display: grid;
        grid-template-columns: 280px 1fr;
        gap: 2.5rem;
      }
      @media (max-width: 992px) {
        .shop-layout {
          grid-template-columns: 1fr;
        }
      }

      /* Sidebar Filters */
      .filters-sidebar {
        background-color: var(--bg-secondary);
        border: 1px solid var(--border-light);
        border-radius: 6px;
        padding: 1.5rem;
        height: fit-content;
      }
      .filter-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid var(--border-color);
        padding-bottom: 1rem;
        margin-bottom: 1.5rem;
      }
      .filter-header h5 {
        font-size: 1rem;
        font-weight: 600;
      }
      .btn-text-reset {
        background: none;
        border: none;
        color: var(--accent-gold);
        font-size: 0.8rem;
        font-weight: 600;
        cursor: pointer;
      }
      .btn-text-reset:hover {
        color: var(--text-primary);
      }

      .filter-group {
        border-bottom: 1px solid var(--border-color);
        padding-bottom: 1.5rem;
        margin-bottom: 1.5rem;
      }
      .filter-group:last-child {
        border-bottom: none;
        padding-bottom: 0;
        margin-bottom: 0;
      }
      .filter-group h6 {
        font-size: 0.85rem;
        text-transform: uppercase;
        font-weight: 600;
        color: var(--text-primary);
        margin-bottom: 1rem;
        letter-spacing: 0.05em;
      }
      
      .filter-links-list {
        display: flex;
        flex-direction: column;
        gap: 0.6rem;
      }
      .filter-link-btn {
        background: none;
        border: none;
        text-align: inherit;
        font-size: 0.9rem;
        color: var(--text-secondary);
        cursor: pointer;
        padding: 0.2rem 0;
        transition: var(--transition-fast);
      }
      .filter-link-btn.active, .filter-link-btn:hover {
        color: var(--accent-gold);
        font-weight: 500;
      }

      .price-slider-wrapper input {
        width: 100%;
        accent-color: var(--accent-gold);
      }
      .price-labels {
        display: flex;
        justify-content: space-between;
        font-size: 0.8rem;
        color: var(--text-secondary);
        margin-top: 0.5rem;
      }

      .checkbox-options {
        display: flex;
        flex-direction: column;
        gap: 0.8rem;
      }
      .checkbox-label {
        display: flex;
        align-items: center;
        gap: 0.6rem;
        font-size: 0.9rem;
        color: var(--text-secondary);
        cursor: pointer;
      }
      .checkbox-label input {
        accent-color: var(--accent-gold);
      }

      /* Toolbar */
      .listing-toolbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid var(--border-color);
        padding-bottom: 1rem;
        margin-bottom: 1.5rem;
      }
      .results-count {
        font-size: 0.9rem;
        color: var(--text-secondary);
      }
      .toolbar-controls {
        display: flex;
        align-items: center;
        gap: 1.5rem;
      }
      .sort-select-wrapper {
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }
      .sort-select-wrapper label {
        font-size: 0.85rem;
        color: var(--text-secondary);
        white-space: nowrap;
      }
      .sort-select {
        padding: 0.4rem 2rem 0.4rem 0.8rem;
        font-size: 0.85rem;
        border-radius: 4px;
        width: auto;
      }
      [dir="rtl"] .sort-select {
        padding: 0.4rem 0.8rem 0.4rem 2rem;
      }
      
      .view-switcher {
        display: flex;
        gap: 0.3rem;
      }

      /* List View Override styling */
      .products-grid.list-view {
        grid-template-columns: 1fr !important;
        gap: 1.5rem;
      }
      .products-grid.list-view .product-card {
        flex-direction: row;
        height: 200px;
      }
      .products-grid.list-view .product-card .img-wrapper {
        width: 160px;
        aspect-ratio: auto;
        height: 100%;
      }
      .products-grid.list-view .product-card .content {
        padding: 1.5rem;
      }
      .products-grid.list-view .product-card .card-actions {
        transform: translateY(0);
        background: none;
        position: relative;
        padding: 0;
        justify-content: flex-start;
        margin-top: 1rem;
      }
      .products-grid.list-view .product-card .action-btn {
        box-shadow: none;
        border: 1px solid var(--border-color);
      }

      /* Pagination */
      .pagination-container {
        display: flex;
        justify-content: center;
        gap: 0.5rem;
        margin-top: 3rem;
      }
      .page-btn {
        width: 36px;
        height: 36px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid var(--border-color);
        background-color: var(--bg-primary);
        color: var(--text-primary);
        cursor: pointer;
        border-radius: 4px;
        font-size: 0.9rem;
        font-weight: 500;
        transition: var(--transition-fast);
      }
      .page-btn:hover, .page-btn.active {
        background-color: var(--text-primary);
        border-color: var(--text-primary);
        color: var(--bg-primary);
      }
    </style>
  `}function d(n){let r=t(e,n);return r?r.titleEn:`All`}function f(n){let r=t(e,n);return r?r.titleAr:`الكل`}u.onMount=()=>{let n=document.getElementById(`shop-products-container`),i=document.getElementById(`total-results-count`),a=document.getElementById(`sort-select`),o=document.getElementById(`price-range-slider`),s=document.getElementById(`price-max-label`),c=document.getElementById(`reset-filters-btn`),u=document.getElementById(`grid-view-btn`),d=document.getElementById(`list-view-btn`),f=1,p=`grid`,m=()=>{let a=r.state.lang===`ar`,o=r.state.filters,s=e=>{let t=[e.id];return e.subcategories&&e.subcategories.forEach(e=>{t=t.concat(s(e))}),t},c=r.state.products.filter(n=>{if(o.category!==`all`){let r=t(e,o.category);if(r){if(!s(r).includes(n.category))return!1}else if(n.category!==o.category)return!1}if(n.price>o.priceRange[1]||o.availability===`instock`&&n.stock<=0)return!1;if(r.state.searchQuery){let e=r.state.searchQuery.trim().toLowerCase(),t=a?n.titleAr.toLowerCase():n.titleEn.toLowerCase(),i=a?n.categoryAr.toLowerCase():n.categoryEn.toLowerCase(),o=n.sku.toLowerCase();if(!t.includes(e)&&!i.includes(e)&&!o.includes(e))return!1}return!0});o.sort===`price-asc`?c.sort((e,t)=>e.price-t.price):o.sort===`price-desc`?c.sort((e,t)=>t.price-e.price):o.sort===`rating`?c.sort((e,t)=>t.rating-e.rating):c.sort((e,t)=>!!t.isFeatured-+!!e.isFeatured),i&&(i.innerText=c.length);let u=Math.ceil(c.length/4),d=(f-1)*4,h=c.slice(d,d+4);n&&(h.length===0?n.innerHTML=`
          <div style="grid-column: 1 / -1; padding: 4rem; text-align: center; color: var(--text-muted);">
            ${a?`لا توجد منتجات مطابقة لخيارات التصفية الحالية.`:`No products match the selected filters.`}
          </div>
        `:(n.className=`products-grid ${p}-view`,n.innerHTML=h.map(e=>l(e,a)).join(``),n.querySelectorAll(`.card-quick-add`).forEach(e=>{e.addEventListener(`click`,t=>{t.stopPropagation();let n=parseInt(e.dataset.id),i=r.state.products.find(e=>e.id===n);i&&r.addToCart(i,1)})}),n.querySelectorAll(`.card-toggle-wish`).forEach(e=>{e.addEventListener(`click`,t=>{t.stopPropagation();let n=parseInt(e.dataset.id),i=r.state.products.find(e=>e.id===n);i&&(r.toggleWishlist(i),m())})})));let g=document.getElementById(`shop-pagination`);if(g&&(g.innerHTML=``,u>1))for(let e=1;e<=u;e++){let t=document.createElement(`button`);t.className=`page-btn ${e===f?`active`:``}`,t.innerText=e,t.addEventListener(`click`,()=>{f=e,m(),window.scrollTo({top:150,behavior:`smooth`})}),g.appendChild(t)}},h=document.querySelectorAll(`.filter-link-btn`);h.forEach(e=>{e.addEventListener(`click`,()=>{h.forEach(e=>e.classList.remove(`active`)),e.classList.add(`active`);let t=e.dataset.cat;r.state.filters.category=t,f=1,m()})}),o&&s&&o.addEventListener(`input`,e=>{let t=parseInt(e.target.value);s.innerText=`${t} KWD`,r.state.filters.priceRange[1]=t,f=1,m()});let g=document.querySelectorAll(`input[name="availability"]`);g.forEach(e=>{e.addEventListener(`change`,e=>{r.state.filters.availability=e.target.value,f=1,m()})}),a&&a.addEventListener(`change`,e=>{r.state.filters.sort=e.target.value,m()}),u&&d&&(u.addEventListener(`click`,()=>{u.classList.add(`active`),d.classList.remove(`active`),p=`grid`,m()}),d.addEventListener(`click`,()=>{d.classList.add(`active`),u.classList.remove(`active`),p=`list`,m()})),c&&c.addEventListener(`click`,()=>{r.resetFilters(),o&&(o.value=400,s.innerText=`400 KWD`),g.forEach(e=>{e.value===`all`&&(e.checked=!0)}),h.forEach(e=>{e.classList.toggle(`active`,e.dataset.cat===`all`)}),a&&(a.value=`featured`),f=1,m()}),m()};function p(e){let t=r.state.lang===`ar`,n=parseInt(e.id),i=r.state.products.find(e=>e.id===n);if(!i)return`
      <div class="container" style="padding: 6rem 0; text-align: center;">
        <h2>${t?`عذراً، المنتج غير موجود`:`Product Not Found`}</h2>
        <a href="#/category" class="btn btn-primary" style="margin-top: 1.5rem;">${t?`العودة للمتجر`:`Back to Shop`}</a>
      </div>
    `;r.state.recentlyViewed||(r.state.recentlyViewed=[]),r.state.recentlyViewed.includes(n)||(r.state.recentlyViewed.unshift(n),r.state.recentlyViewed.length>4&&r.state.recentlyViewed.pop());let a=r.isInWishlist(i.id),o=i.originalPrice>i.price?Math.round((i.originalPrice-i.price)/i.originalPrice*100):0,s=r.state.products.filter(e=>e.category===i.category&&e.id!==i.id).slice(0,3),c=r.state.products.filter(e=>r.state.recentlyViewed.includes(e.id)&&e.id!==i.id);return`
    <div class="product-page-container container animate-fade-in">
      
      <!-- Breadcrumbs -->
      <div class="breadcrumbs">
        <a href="#/">${t?`الرئيسية`:`Home`}</a>
        <span>/</span>
        <a href="#/category">${t?`المتجر`:`Shop`}</a>
        <span>/</span>
        <a href="#/category?category=${i.category}">${t?i.categoryAr:i.categoryEn}</a>
        <span>/</span>
        <span class="active">${t?i.titleAr:i.titleEn}</span>
      </div>

      <!-- Main Columns: Gallery & Buy Actions -->
      <div class="product-hero-layout">
        
        <!-- Left: Image Gallery & Zoom -->
        <div class="gallery-column">
          <!-- Main Display image with magnifying lens zoom wrapper -->
          <div class="main-image-zoom-container" id="zoom-img-wrapper">
            <img src="${i.image}" alt="${t?i.titleAr:i.titleEn}" id="zoom-display-image">
            <div class="lens" id="zoom-lens"></div>
            <div class="zoom-panel-result" id="zoom-result-panel" style="background-image: url('${i.image}');"></div>
          </div>

          <!-- Thumbnails Row -->
          <div class="thumbnails-row">
            ${i.images.map((e,t)=>`
              <div class="thumbnail-wrapper ${t===0?`active`:``}" data-url="${e}">
                <img src="${e}" alt="Thumbnail">
              </div>
            `).join(``)}
          </div>
        </div>

        <!-- Right: Actions Form details -->
        <div class="actions-column">
          <span class="category-tag">${t?i.categoryAr:i.categoryEn}</span>
          <h1 class="product-title">${t?i.titleAr:i.titleEn}</h1>
          
          <!-- Price & Discounts -->
          <div class="price-box">
            <span class="price">${i.price%1==0?i.price.toFixed(0):i.price.toFixed(3)} KWD</span>
            ${i.originalPrice>i.price?`
              <span class="old-price">${i.originalPrice%1==0?i.originalPrice.toFixed(0):i.originalPrice.toFixed(3)} KWD</span>
              <span class="discount-badge">${t?`وفر ${o}%`:`${o}% OFF`}</span>
            `:``}
          </div>

          <hr class="divider">

          <!-- SKU / Stock -->
          <div class="meta-rows">
            <p><strong>SKU:</strong> <span class="num">${i.sku}</span></p>
            <p>
              <strong>${t?`التوفر:`:`Stock Status:`}</strong> 
              ${i.stock>0?i.stock<5?`<span class="stock-badge low">${t?`مخزون منخفض - متبقي <span class="num">${i.stock}</span> فقط!`:`Low Stock - Only <span class="num">${i.stock}</span> left!`}</span>`:`<span class="stock-badge in">${t?`متوفر بالمخزون`:`In Stock`}</span>`:`<span class="stock-badge out">${t?`نفذت الكمية`:`Out of Stock`}</span>`}
            </p>
          </div>

          <!-- Color Swatches selection -->
          ${i.colors&&i.colors.length>0?`
            <div class="swatches-group">
              <span class="label">
                ${t?`اختر اللون:`:`Select Color:`} 
                <strong id="selected-color-label">${t?i.colors[0].nameAr:i.colors[0].nameEn}</strong>
              </span>
              <div class="swatches">
                ${i.colors.map((e,t)=>`
                  <div class="color-swatch ${t===0?`active`:``}" 
                       style="background-color: ${e.code};" 
                       data-color-en="${e.nameEn}" 
                       data-color-ar="${e.nameAr}">
                  </div>
                `).join(``)}
              </div>
            </div>
          `:``}

          <!-- Size Selection swatches -->
          ${i.sizes&&i.sizes.length>0?`
            <div class="swatches-group">
              <span class="label">
                ${t?`المقاس:`:`Size:`} 
                <strong id="selected-size-label">${i.sizes[0]}</strong>
              </span>
              <div class="swatches">
                ${i.sizes.map((e,t)=>`
                  <div class="size-swatch ${t===0?`active`:``}" data-size="${e}">${e}</div>
                `).join(``)}
              </div>
            </div>
          `:``}

          <!-- Quantity Counter and Action Buttons -->
          <div class="buy-section-actions">
            <div class="quantity-controller">
              <button id="detail-dec-qty" class="qty-control">-</button>
              <input type="text" id="detail-qty-input" class="number-input" value="1" readonly translate="no">
              <button id="detail-inc-qty" class="qty-control">+</button>
            </div>

            <div class="buttons-grid">
              <button id="detail-add-to-cart" class="btn btn-primary btn-lg" ${i.stock<=0?`disabled`:``}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <path d="M16 10a4 4 0 0 1-8 0"></path>
                </svg>
                <span>${t?`إضافة إلى السلة`:`Add to Cart`}</span>
              </button>
              <button id="detail-buy-now" class="btn btn-accent btn-lg" ${i.stock<=0?`disabled`:``}>
                ${t?`شراء الآن`:`Buy Now`}
              </button>
            </div>
          </div>

          <!-- Wishlist & Share Shortcuts -->
          <div class="extra-actions-flex">
            <button id="detail-wish-btn" class="btn-text-action">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="${a?`currentColor`:`none`}" stroke="currentColor" stroke-width="2" style="${a?`color:var(--error-color)`:``}">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
              <span>${a?t?`مضاف في المفضلة`:`In Wishlist`:t?`أضف للمفضلة`:`Add to Wishlist`}</span>
            </button>
            <span class="divider">|</span>
            <button id="detail-share-btn" class="btn-text-action">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle>
                <circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
              </svg>
              <span>${t?`مشاركة المنتج`:`Share Product`}</span>
            </button>
          </div>

        </div>
      </div>

      <!-- Description Section -->
      <section class="description-tabs-container" style="border-top:1px solid var(--border-light); padding-top:2rem; margin-top:2rem;">
        <h2 style="font-size: 1.2rem; font-weight: 700; margin-bottom: 1rem; color: var(--text-primary); border-bottom: 2px solid var(--accent-gold); display: inline-block; padding-bottom: 0.25rem;">
          ${t?`وصف المنتج`:`Product Description`}
        </h2>
        <div class="tab-panel active" id="panel-desc" style="display: block; padding-top: 0.5rem;">
          <p class="tab-paragraph" style="line-height: 1.8; font-size: 0.95rem; color: var(--text-secondary);">${t?i.descriptionAr:i.descriptionEn}</p>
          <ul class="features-bullets-list" style="margin-top: 1rem; list-style: none; padding: 0;">
            ${(t?i.featuresAr:i.featuresEn).map(e=>`<li style="margin-bottom: 0.5rem; font-size: 0.9rem; color: var(--text-primary);">✨ ${e}</li>`).join(``)}
          </ul>
        </div>
      </section>

      <!-- Related Products Grid -->
      ${s.length>0?`
        <section class="related-products-section">
          <h4 class="section-title">${t?`منتجات ذات صلة`:`Related Products`}</h4>
          <div class="products-grid">
            ${s.map(e=>l(e,t)).join(``)}
          </div>
        </section>
      `:``}

      <!-- Recently Viewed section -->
      ${c.length>0?`
        <section class="related-products-section" style="margin-top: 4rem;">
          <h4 class="section-title">${t?`منتجات شاهدتها مؤخراً`:`Recently Viewed`}</h4>
          <div class="products-grid">
            ${c.map(e=>l(e,t)).join(``)}
          </div>
        </section>
      `:``}

      <!-- Share Modal (Hidden by default) -->
      <div id="share-modal-backdrop" class="modal-backdrop">
        <div class="share-modal-content">
          <h6>${t?`مشاركة هذا المنتج`:`Share this Product`}</h6>
          <div class="share-buttons">
            <button class="btn btn-secondary share-link-copy-btn">${t?`نسخ الرابط`:`Copy Link`}</button>
            <a href="https://twitter.com" target="_blank" class="btn btn-secondary">Twitter</a>
            <a href="https://facebook.com" target="_blank" class="btn btn-secondary">Facebook</a>
          </div>
          <button id="close-share-modal" class="btn btn-primary" style="margin-top:1.5rem; width:100%">${t?`إغلاق`:`Close`}</button>
        </div>
      </div>

    </div>

    <style>
      .product-page-container {
        padding-top: 2rem;
      }
      .product-hero-layout {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 3.5rem;
        margin-top: 1rem;
      }
      @media (max-width: 992px) {
        .product-hero-layout {
          grid-template-columns: 1fr;
          gap: 2rem;
        }
      }

      /* Gallery styling */
      .gallery-column {
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }
      .main-image-zoom-container {
        position: relative;
        aspect-ratio: 4 / 5;
        background-color: var(--bg-secondary);
        border: 1px solid var(--border-light);
        border-radius: 6px;
        overflow: hidden;
        cursor: crosshair;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .main-image-zoom-container img {
        max-width: 100%;
        max-height: 100%;
        width: auto;
        height: auto;
        object-fit: contain;
      }
      
      /* Lens & Result zoom panel */
      .main-image-zoom-container .lens {
        position: absolute;
        border: 1px solid var(--accent-gold);
        width: 120px;
        height: 120px;
        background-color: rgba(197, 168, 128, 0.15);
        display: none;
        pointer-events: none;
      }
      .zoom-panel-result {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-repeat: no-repeat;
        background-size: 200% 200%; /* zoom level */
        display: none;
        pointer-events: none;
        z-index: 5;
      }

      .thumbnails-row {
        display: none !important;
        gap: 0.8rem;
      }
      .thumbnail-wrapper {
        width: 70px;
        height: 90px;
        border-radius: 4px;
        overflow: hidden;
        border: 1px solid var(--border-color);
        cursor: pointer;
        transition: var(--transition-fast);
      }
      .thumbnail-wrapper.active, .thumbnail-wrapper:hover {
        border-color: var(--text-primary);
        box-shadow: 0 4px 10px rgba(0,0,0,0.05);
      }
      .thumbnail-wrapper img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      /* Detail Info */
      .actions-column {
        display: flex;
        flex-direction: column;
      }
      .category-tag {
        font-size: 0.8rem;
        text-transform: uppercase;
        color: var(--text-muted);
        letter-spacing: 0.05em;
        margin-bottom: 0.5rem;
      }
      .product-title {
        font-family: 'Playfair Display', serif;
        font-size: 2.2rem;
        font-weight: 500;
        line-height: 1.25;
        margin-bottom: 0.8rem;
      }
      .rating-row {
        display: flex;
        align-items: center;
        gap: 0.8rem;
        font-size: 0.85rem;
        color: var(--text-secondary);
        margin-bottom: 1.5rem;
      }
      
      .price-box {
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-bottom: 1.5rem;
      }
      .price-box .price {
        font-size: 1.8rem;
        font-weight: 600;
        color: var(--accent-gold);
      }
      .price-box .old-price {
        text-decoration: line-through;
        font-size: 1.2rem;
        color: var(--text-muted);
      }
      .price-box .discount-badge {
        background-color: var(--accent-gold-light);
        color: var(--accent-gold);
        font-size: 0.8rem;
        font-weight: 600;
        padding: 0.25rem 0.6rem;
        border-radius: 4px;
      }
      
      .meta-rows {
        display: flex;
        flex-direction: column;
        gap: 0.6rem;
        font-size: 0.9rem;
        margin: 1.5rem 0;
      }
      .meta-rows strong {
        color: var(--text-primary);
      }
      .meta-rows span {
        color: var(--text-secondary);
      }
      .stock-badge {
        font-size: 0.75rem;
        font-weight: 600;
        padding: 0.15rem 0.5rem;
        border-radius: 3px;
      }
      .stock-badge.in { background-color: #e8f5e9; color: var(--success-color); }
      .stock-badge.low { background-color: #fff3e0; color: var(--warning-color); }
      .stock-badge.out { background-color: #ffebee; color: var(--error-color); }

      .swatches-group {
        margin-bottom: 1.5rem;
      }
      .swatches-group .label {
        font-size: 0.85rem;
        color: var(--text-secondary);
        display: block;
        margin-bottom: 0.6rem;
      }

      /* Buttons & Qty */
      .buy-section-actions {
        display: flex;
        gap: 1rem;
        margin: 2rem 0;
        flex-wrap: wrap;
      }
      .quantity-controller {
        display: flex;
        border: 1px solid var(--border-color);
        border-radius: 4px;
        overflow: hidden;
        height: 50px;
        background-color: var(--bg-primary);
      }
      .qty-control {
        background: none;
        border: none;
        width: 45px;
        cursor: pointer;
        font-size: 1.2rem;
        font-weight: 500;
      }
      .qty-control:hover {
        background-color: var(--bg-secondary);
      }
      .quantity-controller input {
        width: 50px;
        text-align: center;
        border: none;
        border-left: 1px solid var(--border-color);
        border-right: 1px solid var(--border-color);
        font-weight: 600;
        font-size: 1rem;
        background-color: transparent;
        color: var(--text-primary);
      }
      
      .buttons-grid {
        display: flex;
        gap: 0.8rem;
        flex: 1;
        min-width: 250px;
      }
      .buttons-grid button {
        flex: 1;
        height: 50px;
      }
      
      .extra-actions-flex {
        display: flex;
        gap: 1.5rem;
        font-size: 0.85rem;
        color: var(--text-secondary);
        align-items: center;
      }
      .btn-text-action {
        background: none;
        border: none;
        display: flex;
        align-items: center;
        gap: 0.4rem;
        cursor: pointer;
        color: inherit;
        font-size: inherit;
        transition: var(--transition-fast);
      }
      .btn-text-action:hover {
        color: var(--text-primary);
      }

      /* Tabs description */
      .description-tabs-container {
        margin: 5rem 0;
      }
      .tab-paragraph {
        font-size: 1rem;
        color: var(--text-secondary);
        line-height: 1.7;
        margin-bottom: 1.5rem;
      }
      .features-bullets-list {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 0.6rem;
        font-size: 0.95rem;
        color: var(--text-secondary);
      }
      .specs-table {
        width: 100%;
        border-collapse: collapse;
        font-size: 0.95rem;
      }
      .specs-table tr {
        border-bottom: 1px solid var(--border-light);
      }
      .specs-table td {
        padding: 0.8rem 1rem;
        color: var(--text-secondary);
      }
      .specs-table td:first-child {
        width: 30%;
        color: var(--text-primary);
      }

      .related-products-section .section-title {
        font-family: 'Playfair Display', serif;
        font-size: 1.6rem;
        margin-bottom: 1.8rem;
      }

      /* Share Modal style */
      .share-modal-content {
        background-color: var(--bg-primary);
        padding: 2rem;
        border-radius: 8px;
        max-width: 400px;
        width: calc(100% - 4rem);
        box-shadow: var(--modal-shadow);
        text-align: center;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 1002;
      }
      .share-modal-content h6 {
        font-size: 1.1rem;
        margin-bottom: 1.5rem;
        font-weight: 600;
      }
      .share-buttons {
        display: flex;
        justify-content: center;
        gap: 0.8rem;
      }
    </style>
  `}p.onMount=e=>{let t=r.state.lang===`ar`,n=parseInt(e.id),i=r.state.products.find(e=>e.id===n);if(!i)return;r.setLastViewedProduct(i.id,i.titleAr,i.titleEn);let a=document.querySelectorAll(`.thumbnail-wrapper`),o=document.getElementById(`zoom-display-image`),s=document.getElementById(`zoom-result-panel`);a.forEach(e=>{e.addEventListener(`click`,()=>{a.forEach(e=>e.classList.remove(`active`)),e.classList.add(`active`);let t=e.dataset.url;o&&(o.src=t),s&&(s.style.backgroundImage=`url('${t}')`)})});let c=document.getElementById(`zoom-img-wrapper`),l=document.getElementById(`zoom-lens`);c&&o&&l&&s&&(c.addEventListener(`mousemove`,e=>{s.style.display=`block`,l.style.display=`block`;let t=c.getBoundingClientRect(),n=e.clientX-t.left-l.offsetWidth/2,r=e.clientY-t.top-l.offsetHeight/2;n<0&&(n=0),r<0&&(r=0),n>c.offsetWidth-l.offsetWidth&&(n=c.offsetWidth-l.offsetWidth),r>c.offsetHeight-l.offsetHeight&&(r=c.offsetHeight-l.offsetHeight),l.style.left=`${n}px`,l.style.top=`${r}px`;let i=n/(c.offsetWidth-l.offsetWidth)*100,a=r/(c.offsetHeight-l.offsetHeight)*100;s.style.backgroundPosition=`${i}% ${a}%`}),c.addEventListener(`mouseleave`,()=>{s.style.display=`none`,l.style.display=`none`}));let u=document.querySelectorAll(`.color-swatch`),d=document.getElementById(`selected-color-label`),f=i.colors&&i.colors[0]?i.colors[0].nameEn:null,p=()=>{if(!i.variations||i.variations.length===0)return;let e=i.variations.find(e=>(e.colorEn===f||e.colorAr===f||e.color&&e.color.nameEn===f)&&e.size===g);if(e){let n=document.querySelector(`.price-box`);n&&(n.innerHTML=`<span class="price">${e.price%1==0?e.price.toFixed(0):e.price.toFixed(3)} KWD</span>`),e.image&&(o&&(o.src=e.image),s&&(s.style.backgroundImage=`url('${e.image}')`));let r=document.querySelector(`.meta-rows`);if(r){let n=r.querySelector(`p:nth-child(3)`);n&&(n.innerHTML=`
            <strong>${t?`التوفر:`:`Stock Status:`}</strong> 
            ${e.stock>0?e.stock<5?`<span class="stock-badge low">${t?`مخزون منخفض - متبقي <span class="num">${e.stock}</span> فقط!`:`Low Stock - Only <span class="num">${e.stock}</span> left!`}</span>`:`<span class="stock-badge in">${t?`متوفر بالمخزون`:`In Stock`}</span>`:`<span class="stock-badge out">${t?`نفذت الكمية`:`Out of Stock`}</span>`}
          `)}}};u.forEach(e=>{e.addEventListener(`click`,()=>{u.forEach(e=>e.classList.remove(`active`)),e.classList.add(`active`);let n=t?e.dataset.colorAr:e.dataset.colorEn;f=e.dataset.colorEn,d&&(d.innerText=n),p()})});let m=document.querySelectorAll(`.size-swatch`),h=document.getElementById(`selected-size-label`),g=i.sizes&&i.sizes[0]?i.sizes[0]:null;m.forEach(e=>{e.addEventListener(`click`,()=>{m.forEach(e=>e.classList.remove(`active`)),e.classList.add(`active`);let t=e.dataset.size;g=t,h&&(h.innerText=t),p()})}),p();let _=document.getElementById(`detail-dec-qty`),v=document.getElementById(`detail-inc-qty`),y=document.getElementById(`detail-qty-input`),b=1;_&&v&&y&&(_.addEventListener(`click`,()=>{b>1&&(b--,y.value=b)}),v.addEventListener(`click`,()=>{b<i.stock?(b++,y.value=b):r.showToast(t?`عذراً، الحد الأقصى المتوفر بالمخزون هو ${i.stock}`:`Sorry, maximum available stock is ${i.stock}`,`error`)}));let x=document.getElementById(`detail-add-to-cart`);x&&x.addEventListener(`click`,()=>{let e=document.querySelector(`.actions-column .color-swatch.active`)||document.querySelector(`.color-swatch.active`),t=document.querySelector(`.actions-column .size-swatch.active`)||document.querySelector(`.size-swatch.active`),n=e?e.dataset.colorEn:i.colors&&i.colors[0]?i.colors[0].nameEn:null,a=t?t.dataset.size:i.sizes&&i.sizes[0]?i.sizes[0]:null;r.addToCart(i,b,n,a)});let S=document.getElementById(`detail-buy-now`);S&&S.addEventListener(`click`,()=>{let e=document.querySelector(`.actions-column .color-swatch.active`)||document.querySelector(`.color-swatch.active`),t=document.querySelector(`.actions-column .size-swatch.active`)||document.querySelector(`.size-swatch.active`),n=e?e.dataset.colorEn:i.colors&&i.colors[0]?i.colors[0].nameEn:null,a=t?t.dataset.size:i.sizes&&i.sizes[0]?i.sizes[0]:null;r.addToCart(i,b,n,a),AppRouter.navigateTo(`/checkout`)});let C=document.getElementById(`detail-wish-btn`);C&&C.addEventListener(`click`,()=>{r.toggleWishlist(i),AppRouter.handleRoute()});let w=document.getElementById(`detail-share-btn`),T=document.getElementById(`share-modal-backdrop`),E=document.getElementById(`close-share-modal`),D=document.querySelector(`.share-link-copy-btn`);w&&T&&w.addEventListener(`click`,()=>{T.classList.add(`active`)});let O=()=>{T&&T.classList.remove(`active`)};E&&E.addEventListener(`click`,O),T&&T.addEventListener(`click`,e=>{e.target===T&&O()}),D&&D.addEventListener(`click`,()=>{let e=window.location.href;navigator.clipboard.writeText(e).then(()=>{r.showToast(t?`تم نسخ رابط المنتج للحافظة!`:`Product link copied to clipboard!`,`success`),O()})});let k=document.querySelectorAll(`.description-tabs-container .tab-header`),A=document.querySelectorAll(`.description-tabs-container .tab-panel`);k.forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.tab;k.forEach(t=>t.classList.toggle(`active`,t===e)),A.forEach(e=>e.classList.toggle(`active`,e.id===`panel-${t}`))})}),document.querySelectorAll(`.related-products-section`).forEach(e=>{e.querySelectorAll(`.card-quick-add`).forEach(e=>{e.addEventListener(`click`,t=>{t.stopPropagation();let n=parseInt(e.dataset.id),i=r.state.products.find(e=>e.id===n);i&&r.addToCart(i,1)})}),e.querySelectorAll(`.card-toggle-wish`).forEach(e=>{e.addEventListener(`click`,t=>{t.stopPropagation();let n=parseInt(e.dataset.id),i=r.state.products.find(e=>e.id===n);i&&(r.toggleWishlist(i),AppRouter.handleRoute())})})})};function m(){let e=r.state.lang===`ar`,t=r.state.cart,n=r.getCartSubtotal(),i=r.getCartDiscount(),a=r.getCartTotal(),o=n>100?0:2.5,s=r.state.appliedCoupon;return`
    <div class="cart-page-container container animate-fade-in">
      <h1 class="page-title">${e?`عربة التسوق`:`Shopping Cart`}</h1>

      ${t.length===0?`
        <div class="empty-cart-full-view">
          <div class="icon-wrap">🛍️</div>
          <h3>${e?`عربة التسوق فارغة حالياً!`:`Your shopping cart is empty!`}</h3>
          <p>${e?`لم تقم بإضافة أي منتجات للسلة بعد. ابدأ باكتشاف مجموعتنا الفاخرة الآن.`:`You have not added any products to your cart yet. Discover our premium collections now.`}</p>
          <a href="#/category" class="btn btn-primary btn-lg">${e?`ابدأ التسوق`:`Start Shopping`}</a>
        </div>
      `:`
        <div class="cart-grid-layout">
          <!-- Left Column: Items Table list -->
          <div class="cart-items-column">
            <div class="cart-table-header">
              <span class="col-prod">${e?`المنتج`:`Product`}</span>
              <span class="col-price">${e?`السعر`:`Price`}</span>
              <span class="col-qty">${e?`الكمية`:`Quantity`}</span>
              <span class="col-total">${e?`الإجمالي`:`Total`}</span>
              <span class="col-actions"></span>
            </div>

            <div class="cart-items-body">
              ${t.map(t=>{let n=t.product,r=e?n.titleAr:n.titleEn,i=t.price||n.price,a=t.image||n.image,o=i*t.quantity;return`
                  <div class="cart-item-row">
                    <div class="col-prod prod-cell">
                      <img src="${a}" alt="${r}">
                      <div class="prod-details">
                        <a href="#/product/${n.id}" class="title">${r}</a>
                        <div class="options">
                          ${t.color?`<span><strong>${e?`اللون:`:`Color:`}</strong> ${t.color}</span>`:``}
                          ${t.size?`<span><strong>${e?`المقاس:`:`Size:`}</strong> ${t.size}</span>`:``}
                        </div>
                        <span class="mobile-price">${i%1==0?i.toFixed(0):i.toFixed(3)} KWD</span>
                      </div>
                    </div>
                    
                    <div class="col-price price-cell">
                      <span>${i%1==0?i.toFixed(0):i.toFixed(3)} KWD</span>
                    </div>

                    <div class="col-qty qty-cell">
                      <div class="quantity-controller">
                        <button class="qty-control dec-cart-qty" data-id="${n.id}" data-color="${t.color||``}" data-size="${t.size||``}">-</button>
                        <input type="text" class="number-input" value="${t.quantity}" readonly translate="no">
                        <button class="qty-control inc-cart-qty" data-id="${n.id}" data-color="${t.color||``}" data-size="${t.size||``}">+</button>
                      </div>
                    </div>

                    <div class="col-total total-cell">
                      <span>${o%1==0?o.toFixed(0):o.toFixed(3)} KWD</span>
                    </div>

                    <div class="col-actions action-cell">
                      <button class="remove-cart-item-btn" data-id="${n.id}" data-color="${t.color||``}" data-size="${t.size||``}" title="${e?`إزالة`:`Remove`}">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                          <polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                `}).join(``)}
            </div>
            
            <div class="cart-actions-row">
              <a href="#/category" class="btn btn-secondary">${e?`⬅️ مواصلة التسوق`:`⬅️ Continue Shopping`}</a>
              <button id="clear-cart-btn" class="btn btn-secondary delete-all-btn">${e?`⚠️ تفريغ السلة`:`⚠️ Clear Cart`}</button>
            </div>
          </div>

          <!-- Right Column: Order summary & coupon actions -->
          <div class="cart-summary-column">
            <div class="summary-card">
              <h5>${e?`ملخص الطلب`:`Order Summary`}</h5>
              
              <!-- Coupon Box -->
              <div class="summary-coupon-area">
                ${s?`
                  <div class="active-coupon-card">
                    <div class="info">
                      <span class="code">🏷️ ${s.code}</span>
                      <span class="desc">${e?`كوبون فعال ومطبق`:`Active coupon code`}</span>
                    </div>
                    <button id="cart-remove-coupon" class="btn-remove-link">${e?`إزالة`:`Remove`}</button>
                  </div>
                `:`
                  <label>${e?`هل لديك كود خصم؟`:`Have a Promo Code?`}</label>
                  <form id="cart-coupon-form" class="coupon-input-group">
                    <input type="text" id="cart-coupon-input" placeholder="${e?`أدخل الكود هنا`:`Enter code`}" class="form-control" required>
                    <button type="submit" class="btn btn-primary">${e?`تطبيق`:`Apply`}</button>
                  </form>
                `}
              </div>

              <hr class="divider">

              <!-- Pricing lines -->
              <div class="summary-lines">
                <div class="summary-line">
                  <span>${e?`المجموع الفرعي`:`Subtotal`}</span>
                  <span>${n%1==0?n.toFixed(0):n.toFixed(3)} KWD</span>
                </div>
                ${i>0?`
                  <div class="summary-line discount">
                    <span>${e?`خصم الكوبون`:`Coupon Discount`}</span>
                    <span>-${i%1==0?i.toFixed(0):i.toFixed(3)} KWD</span>
                  </div>
                `:``}
                <div class="summary-line">
                  <span>${e?`تكلفة الشحن`:`Shipping Fee`}</span>
                  <span>${o===0?e?`مجاني`:`Free`:(o%1==0?o.toFixed(0):o.toFixed(3))+` KWD`}</span>
                </div>
                
                <div class="summary-line total-line">
                  <span>${e?`الإجمالي النهائي`:`Estimated Total`}</span>
                  <span>${a%1==0?a.toFixed(0):a.toFixed(3)} KWD</span>
                </div>
              </div>

              <!-- Checkout Action -->
              <a href="#/checkout" class="btn btn-accent btn-lg checkout-btn" style="width: 100%; margin-top: 1.5rem; height: 50px;">
                ${e?`إتمام عملية الشراء ➡️`:`Proceed to Checkout ➡️`}
              </a>

              <!-- Trust Payments Badges -->
              <div class="trust-badges-area">
                <p>${e?`تسوق آمن ومحمي 100%`:`100% Safe & Secure Checkout`}</p>
                <div class="badges">
                  <span>KNET</span>
                  <span>VISA</span>
                  <span>MASTERCARD</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      `}
    </div>

    <style>
      .cart-page-container {
        padding-top: 3rem;
      }
      .page-title {
        font-family: 'Playfair Display', serif;
        font-size: 2.2rem;
        margin-bottom: 2rem;
      }

      /* Empty View */
      .empty-cart-full-view {
        text-align: center;
        padding: 6rem 1.5rem;
        background-color: var(--bg-secondary);
        border-radius: 8px;
        border: 1px dashed var(--border-color);
        max-width: 600px;
        margin: 2rem auto;
      }
      .empty-cart-full-view .icon-wrap {
        font-size: 4rem;
        margin-bottom: 1.5rem;
      }
      .empty-cart-full-view h3 {
        font-size: 1.4rem;
        margin-bottom: 0.8rem;
      }
      .empty-cart-full-view p {
        color: var(--text-secondary);
        margin-bottom: 2rem;
        font-size: 0.95rem;
      }

      /* Grid Layout */
      .cart-grid-layout {
        display: grid;
        grid-template-columns: 1fr 360px;
        gap: 3rem;
        align-items: start;
      }
      @media (max-width: 992px) {
        .cart-grid-layout {
          grid-template-columns: 1fr;
          gap: 2rem;
        }
      }

      /* Items Table */
      .cart-table-header {
        display: grid;
        grid-template-columns: 3fr 1.2fr 1.5fr 1.2fr 0.5fr;
        padding: 1rem;
        background-color: var(--bg-secondary);
        border-radius: 4px;
        font-size: 0.85rem;
        font-weight: 600;
        color: var(--text-secondary);
        text-transform: uppercase;
        letter-spacing: 0.05em;
        margin-bottom: 1rem;
      }
      .cart-item-row {
        display: grid;
        grid-template-columns: 3fr 1.2fr 1.5fr 1.2fr 0.5fr;
        padding: 1.5rem 1rem;
        border-bottom: 1px solid var(--border-light);
        align-items: center;
      }
      .prod-cell {
        display: flex;
        gap: 1rem;
        align-items: center;
      }
      .prod-cell img {
        width: 65px;
        height: 85px;
        object-fit: cover;
        border-radius: 4px;
        background-color: var(--bg-secondary);
      }
      .prod-details .title {
        font-size: 0.95rem;
        font-weight: 500;
        color: var(--text-primary);
        text-decoration: none;
        display: block;
        margin-bottom: 0.3rem;
      }
      .prod-details .title:hover {
        color: var(--accent-gold);
      }
      .prod-details .options {
        font-size: 0.75rem;
        color: var(--text-muted);
        display: flex;
        gap: 0.8rem;
      }
      .prod-details .mobile-price {
        display: none;
        font-size: 0.85rem;
        color: var(--accent-gold);
        font-weight: 600;
        margin-top: 0.4rem;
      }

      .price-cell, .total-cell {
        font-weight: 600;
        color: var(--text-primary);
        font-size: 0.95rem;
      }
      .total-cell {
        color: var(--accent-gold);
      }

      .remove-cart-item-btn {
        background: none;
        border: none;
        color: var(--text-muted);
        cursor: pointer;
        transition: var(--transition-fast);
      }
      .remove-cart-item-btn:hover {
        color: var(--error-color);
      }

      .cart-actions-row {
        display: flex;
        justify-content: space-between;
        margin-top: 2rem;
      }

      /* Summary sidebar */
      .summary-card {
        background-color: var(--bg-secondary);
        border: 1px solid var(--border-light);
        border-radius: 6px;
        padding: 2rem;
      }
      .summary-card h5 {
        font-size: 1.1rem;
        font-weight: 600;
        margin-bottom: 1.5rem;
      }
      
      .summary-coupon-area {
        margin-bottom: 1.5rem;
      }
      .summary-coupon-area label {
        font-size: 0.8rem;
        font-weight: 500;
        color: var(--text-secondary);
        display: block;
        margin-bottom: 0.5rem;
      }
      .coupon-input-group {
        display: flex;
        gap: 0.5rem;
      }
      .coupon-input-group input {
        padding: 0.5rem 0.8rem;
        font-size: 0.85rem;
      }
      .coupon-input-group button {
        padding: 0.5rem 1rem;
        font-size: 0.85rem;
      }

      .active-coupon-card {
        background-color: var(--accent-gold-light);
        border: 1px dashed var(--accent-gold);
        border-radius: 4px;
        padding: 0.8rem 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .active-coupon-card .code {
        font-size: 0.9rem;
        font-weight: 600;
        color: var(--text-primary);
        display: block;
      }
      .active-coupon-card .desc {
        font-size: 0.75rem;
        color: var(--text-secondary);
      }
      .btn-remove-link {
        background: none;
        border: none;
        color: var(--error-color);
        font-weight: 600;
        font-size: 0.8rem;
        cursor: pointer;
      }

      .summary-lines {
        display: flex;
        flex-direction: column;
        gap: 0.8rem;
        margin: 1.5rem 0;
      }
      .summary-lines .summary-line {
        display: flex;
        justify-content: space-between;
        font-size: 0.9rem;
        color: var(--text-secondary);
      }
      .summary-lines .summary-line.discount {
        color: var(--success-color);
        font-weight: 500;
      }
      .summary-lines .total-line {
        font-size: 1.15rem;
        font-weight: 600;
        color: var(--text-primary);
        border-top: 1px solid var(--border-color);
        padding-top: 1rem;
        margin-top: 0.4rem;
      }

      .trust-badges-area {
        text-align: center;
        margin-top: 2rem;
        font-size: 0.75rem;
        color: var(--text-muted);
      }
      .trust-badges-area p {
        margin-bottom: 0.6rem;
      }
      .trust-badges-area .badges {
        display: flex;
        gap: 0.4rem;
        justify-content: center;
      }
      .trust-badges-area span {
        background-color: var(--bg-primary);
        border: 1px solid var(--border-color);
        padding: 0.2rem 0.5rem;
        border-radius: 3px;
        font-weight: 700;
      }

      @media (max-width: 768px) {
        .cart-table-header {
          display: none;
        }
        .cart-item-row {
          grid-template-columns: 1fr;
          gap: 1rem;
          padding: 1.5rem 0.5rem;
          text-align: center;
          position: relative;
        }
        .prod-cell {
          flex-direction: column;
          align-items: center;
        }
        .prod-details .options {
          justify-content: center;
        }
        .prod-details .mobile-price {
          display: block;
        }
        .price-cell, .total-cell {
          display: none;
        }
        .qty-cell {
          display: flex;
          justify-content: center;
        }
        .action-cell {
          position: absolute;
          top: 1rem;
          right: 0.5rem;
        }
        [dir="rtl"] .action-cell {
          right: auto;
          left: 0.5rem;
        }
      }
    </style>
  `}m.onMount=()=>{let e=document.querySelector(`.cart-page-container`),t=r.state.lang===`ar`;if(!e)return;e.querySelectorAll(`.inc-cart-qty`).forEach(e=>{e.addEventListener(`click`,()=>{let t=parseInt(e.dataset.id),n=e.dataset.color||null,i=e.dataset.size||null,a=r.state.cart.find(e=>e.product.id===t&&e.color===n&&e.size===i);a&&(r.updateCartQty(t,n,i,a.quantity+1),r.notify(`state_changed`))})}),e.querySelectorAll(`.dec-cart-qty`).forEach(e=>{e.addEventListener(`click`,()=>{let t=parseInt(e.dataset.id),n=e.dataset.color||null,i=e.dataset.size||null,a=r.state.cart.find(e=>e.product.id===t&&e.color===n&&e.size===i);a&&(r.updateCartQty(t,n,i,a.quantity-1),r.notify(`state_changed`))})}),e.querySelectorAll(`.remove-cart-item-btn`).forEach(e=>{e.addEventListener(`click`,()=>{let t=parseInt(e.dataset.id),n=e.dataset.color||null,i=e.dataset.size||null;r.removeFromCart(t,n,i),r.notify(`state_changed`)})});let n=document.getElementById(`clear-cart-btn`);n&&n.addEventListener(`click`,()=>{confirm(t?`هل أنت متأكد من رغبتك في تفريغ السلة بالكامل؟`:`Are you sure you want to clear your cart?`)&&r.clearCart()});let i=document.getElementById(`cart-coupon-form`);i&&i.addEventListener(`submit`,e=>{e.preventDefault();let t=document.getElementById(`cart-coupon-input`).value;r.applyCouponCode(t)&&r.notify(`state_changed`)});let a=document.getElementById(`cart-remove-coupon`);a&&a.addEventListener(`click`,()=>{r.removeCoupon(),r.notify(`state_changed`)})};function h(){let e=r.state.lang===`ar`,t=r.state.cart,n=r.getCartSubtotal(),i=r.getCartDiscount(),a=r.getCartTotal(),o=n>100?0:2.5,s=r.state.user;if(t.length===0&&!h.successOrder)return`
      <div class="container" style="padding: 6rem 0; text-align: center;">
        <h2>${e?`عربة التسوق فارغة`:`Your cart is empty`}</h2>
        <p style="color:var(--text-muted); margin-bottom: 1.5rem;">${e?`يرجى إضافة منتجات للسلة أولاً لإتمام عملية الشراء.`:`Please add items to your cart to checkout.`}</p>
        <a href="#/category" class="btn btn-primary">${e?`تصفح المنتجات`:`Browse Products`}</a>
      </div>
    `;if(h.successOrder){let t=h.successOrder;return setTimeout(()=>{h.successOrder=null},100),`
      <div class="checkout-success-view container animate-fade-in">
        <div class="success-card">
          <div class="checkmark-circle">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
          <h1>${e?`تم استلام طلبك بنجاح!`:`Order Placed Successfully!`}</h1>
          <p class="order-id-label">${e?`رقم الطلب:`:`Order ID:`} <strong>${t.id}</strong></p>
          <p class="sub-msg">
            ${e?`نشكرك على تسوقك من سناء بوتيك. تم إرسال رسالة تأكيد إلكترونية وتفاصيل التوصيل إلى بريدك الإلكتروني.`:`Thank you for shopping at Sana Boutique. A confirmation email with details has been sent to your email.`}
          </p>

          <div class="order-summary-box">
            <h6>${e?`تفاصيل الطلب`:`Order Details`}</h6>
            <div class="detail-line"><span>${e?`تاريخ الطلب:`:`Date:`}</span> <span>${t.date}</span></div>
            <div class="detail-line"><span>${e?`وسيلة الدفع:`:`Payment Method:`}</span> <span>${t.paymentMethod.toUpperCase()}</span></div>
            <div class="detail-line"><span>${e?`شركة التوصيل:`:`Carrier:`}</span> <span>${t.shippingCompanyEn}</span></div>
            <div class="detail-line total"><span>${e?`الإجمالي النهائي:`:`Final Total:`}</span> <span>${t.total%1==0?t.total.toFixed(0):t.total.toFixed(3)} KWD</span></div>
          </div>

          <div class="success-actions">
            <a href="#/dashboard?tab=orders" class="btn btn-primary">${e?`📦 تتبع طلبك الآن`:`📦 Track Your Order`}</a>
            <a href="#/" class="btn btn-secondary">${e?`العودة للرئيسية`:`Back to Home`}</a>
          </div>
        </div>
      </div>

      <style>
        .checkout-success-view { padding: 4rem 1rem; display: flex; justify-content: center; }
        .success-card { background-color: var(--bg-primary); border: 1px solid var(--border-color); border-radius: 8px; box-shadow: var(--modal-shadow); max-width: 550px; width:100%; padding: 3rem 2rem; text-align:center; }
        .checkmark-circle { width: 80px; height: 80px; border-radius: 50%; background-color: var(--success-color); display:flex; align-items:center; justify-content:center; margin: 0 auto 2rem auto; }
        .success-card h1 { font-family: 'Playfair Display', serif; font-size: 2rem; margin-bottom: 0.5rem; }
        .order-id-label { font-size: 1.1rem; color: var(--accent-gold); margin-bottom: 1.5rem; }
        .sub-msg { color: var(--text-secondary); font-size: 0.95rem; line-height: 1.6; margin-bottom: 2rem; }
        
        .order-summary-box { background-color: var(--bg-secondary); border-radius: 6px; padding: 1.2rem; margin-bottom: 2rem; text-align: left; }
        [dir="rtl"] .order-summary-box { text-align: right; }
        .order-summary-box h6 { font-size: 0.9rem; font-weight: 600; margin-bottom: 0.8rem; border-bottom: 1px solid var(--border-color); padding-bottom: 0.5rem; }
        .detail-line { display: flex; justify-content: space-between; font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 0.4rem; }
        .detail-line.total { border-top: 1px solid var(--border-color); padding-top: 0.6rem; font-weight: 600; color: var(--text-primary); font-size: 0.95rem; margin-top: 0.4rem; }
        
        .success-actions { display: flex; gap: 1rem; justify-content: center; }
        @media (max-width: 480px) { .success-actions { flex-direction: column; } }
      </style>
    `}return`
    <div class="checkout-page-container container animate-fade-in">
      <h1 class="page-title">${e?`إتمام عملية الشراء`:`Checkout`}</h1>

      <div class="checkout-grid-layout">
        <!-- Left Column: Forms -->
        <div class="checkout-forms-column">
          <form id="checkout-main-form">
            
            <!-- Shipping Info Section -->
            <div class="form-section">
              <h5 class="section-title"><span>1</span> ${e?`عنوان الشحن والتوصيل`:`Shipping Address`}</h5>
              
              <div class="form-row-2">
                <div class="form-group">
                  <label>${e?`الاسم بالكامل *`:`Full Name *`}</label>
                  <input type="text" id="chk-name" class="form-control" value="${s?s.name:``}" required>
                </div>
                <div class="form-group">
                  <label>${e?`رقم الهاتف *`:`Phone Number *`}</label>
                  <input type="tel" id="chk-phone" class="form-control number-input" value="${s?s.phone:``}" translate="no" required placeholder="+965 99887766">
                </div>
              </div>

              <div class="form-group">
                <label>${e?`البريد الإلكتروني *`:`Email Address *`}</label>
                <input type="email" id="chk-email" class="form-control" value="${s?s.email:``}" required>
              </div>

              <!-- Address Specific to Kuwait (Governorate/Area/Block/Street/Apt) -->
              <div class="form-row-2">
                <div class="form-group">
                  <label>${e?`المنطقة *`:`Area *`}</label>
                  <input type="text" id="chk-area" class="form-control" required placeholder="${e?`السالمية، الجابرية...`:`Salmiya, Jabriya...`}">
                </div>
                <div class="form-group">
                  <label>${e?`القطعة *`:`Block *`}</label>
                  <input type="text" id="chk-block" class="form-control number-input" required translate="no" placeholder="1">
                </div>
              </div>

              <div class="form-row-3">
                <div class="form-group">
                  <label>${e?`الشارع *`:`Street *`}</label>
                  <input type="text" id="chk-street" class="form-control" required>
                </div>
                <div class="form-group">
                  <label>${e?`المنزل/المبنى *`:`Building / House *`}</label>
                  <input type="text" id="chk-building" class="form-control" required>
                </div>
                <div class="form-group">
                  <label>${e?`الدور والشقة (اختياري)`:`Floor / Apartment (Optional)`}</label>
                  <input type="text" id="chk-floor" class="form-control">
                </div>
              </div>
            </div>

            <!-- Shipping Carrier choice -->
            <div class="form-section">
              <h5 class="section-title"><span>2</span> ${e?`شركة الشحن وسرعة التوصيل`:`Shipping Carrier`}</h5>
              <div class="carrier-selector-group">
                <label class="carrier-card active">
                  <input type="radio" name="shipping-carrier" value="express" checked>
                  <div class="carrier-info">
                    <span class="name">${e?`سناء إكسبرس (خلال 24 ساعة)`:`Sana Express (Under 24h)`}</span>
                    <span class="price">${o===0?e?`مجاني`:`Free`:`2.5 KWD`}</span>
                  </div>
                </label>
                <label class="carrier-card">
                  <input type="radio" name="shipping-carrier" value="dhl">
                  <div class="carrier-info">
                    <span class="name">${e?`شحن دي إتش إل السريع (يصل غداً)`:`DHL Next Day Delivery`}</span>
                    <span class="price">4 KWD</span>
                  </div>
                </label>
              </div>
            </div>

            <!-- Payment gateway selection -->
            <div class="form-section">
              <h5 class="section-title"><span>3</span> ${e?`طريقة الدفع`:`Payment Method`}</h5>
              
              <div class="payment-method-selector-group">
                <!-- KNET (Kuwait Local) -->
                <label class="pay-method-card active">
                  <input type="radio" name="payment-method" value="knet" checked>
                  <span class="icon">💻</span>
                  <div class="info">
                    <span class="name">KNET</span>
                    <span class="desc">${e?`الدفع الآمن الفوري عبر كي نت`:`Direct local bank payment`}</span>
                  </div>
                </label>
                <!-- Credit Card -->
                <label class="pay-method-card">
                  <input type="radio" name="payment-method" value="cc">
                  <span class="icon">💳</span>
                  <div class="info">
                    <span class="name">${e?`بطاقة ائتمانية`:`Credit Card`}</span>
                    <span class="desc">Visa / Mastercard</span>
                  </div>
                </label>
                <!-- Cash On Delivery -->
                <label class="pay-method-card">
                  <input type="radio" name="payment-method" value="cod">
                  <span class="icon">💵</span>
                  <div class="info">
                    <span class="name">${e?`الدفع عند الاستلام`:`Cash on Delivery`}</span>
                    <span class="desc">${e?`رسوم إضافية بقيمة 1.000 د.ك`:`Extra 1.000 KWD fee applies`}</span>
                  </div>
                </label>
              </div>

              <!-- Credit Card Fields Wrapper (Hidden by default, shown if CC selected) -->
              <div id="credit-card-fields-area" class="credit-card-fields-area" style="display:none; margin-top: 1.5rem;">
                <div class="form-group">
                  <label>${e?`اسم حامل البطاقة *`:`Cardholder Name *`}</label>
                  <input type="text" id="cc-name" class="form-control">
                </div>
                <div class="form-group">
                  <label>${e?`رقم البطاقة *`:`Card Number *`}</label>
                  <input type="text" id="cc-number" class="form-control number-input" translate="no" placeholder="1234 5678 9012 3456">
                </div>
                <div class="form-row-2">
                  <div class="form-group">
                    <label>${e?`تاريخ الانتهاء *`:`Expiry Date *`}</label>
                    <input type="text" id="cc-expiry" class="form-control number-input" translate="no" placeholder="MM/YY">
                  </div>
                  <div class="form-group">
                    <label>CVV *</label>
                    <input type="text" id="cc-cvv" class="form-control number-input" translate="no" placeholder="123">
                  </div>
                </div>
              </div>
            </div>

            <!-- Submit buttons -->
            <button type="submit" class="btn btn-accent btn-lg order-submit-btn" style="width: 100%; height:52px; margin-top: 2rem;">
              ${e?`تأكيد الطلب والدفع`:`Confirm Order & Pay`}
            </button>
          </form>
        </div>

        <!-- Right Column: Summary Box -->
        <div class="checkout-summary-column">
          <div class="summary-box">
            <h6>${e?`مراجعة طلبك`:`Review Your Order`}</h6>
            
            <div class="checkout-items-list">
              ${t.map(t=>{let n=t.price||t.product.price,r=t.image||t.product.image,i=n*t.quantity;return`
                  <div class="chk-item">
                    <img src="${r}" alt="${e?t.product.titleAr:t.product.titleEn}">
                    <div class="info">
                      <span class="title">${e?t.product.titleAr:t.product.titleEn}</span>
                      <span class="meta">${e?`الكمية:`:`Qty:`} ${t.quantity} ${t.color?`| ${t.color}`:``}</span>
                    </div>
                    <span class="price">${i%1==0?i.toFixed(0):i.toFixed(3)} KWD</span>
                  </div>
                `}).join(``)}
            </div>

            <hr class="divider" style="margin: 1.2rem 0;">

            <div class="summary-lines">
              <div class="line"><span>${e?`المجموع الفرعي`:`Subtotal`}</span> <span>${n%1==0?n.toFixed(0):n.toFixed(3)} KWD</span></div>
              ${i>0?`<div class="line discount"><span>${e?`خصم كوبون`:`Coupon Discount`}</span> <span>-${i%1==0?i.toFixed(0):i.toFixed(3)} KWD</span></div>`:``}
              <div class="line"><span>${e?`تكلفة الشحن`:`Shipping`}</span> <span>${o===0?e?`مجاني`:`Free`:(o%1==0?o.toFixed(0):o.toFixed(3))+` KWD`}</span></div>
              <div class="line total-line"><span>${e?`إجمالي الدفع`:`Total Amount`}</span> <span>${a%1==0?a.toFixed(0):a.toFixed(3)} KWD</span></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Realistic KNET Payment Gateway Overlay Gateway Modal (Popup simulated) -->
      <div id="knet-gateway-modal" class="knet-modal-backdrop">
        <div class="knet-modal-box">
          <div class="knet-modal-header">
            <span class="knet-logo-text">knet</span>
            <span class="title">${e?`بوابة الدفع الإلكتروني كي نت`:`KNET Payment Gateway`}</span>
          </div>
          <div class="knet-modal-body">
            <div class="knet-summary-row">
              <div class="lbl">${e?`التاجر:`:`Merchant:`}</div>
              <div class="val">SANA BOUTIQUE CO.</div>
            </div>
            <div class="knet-summary-row">
              <div class="lbl">${e?`المبلغ:`:`Amount:`}</div>
              <div class="val text-gold">${a%1==0?a.toFixed(0):a.toFixed(3)} KWD</div>
            </div>

            <hr style="border:0; border-top:1px solid #ddd; margin:1rem 0;">

            <div class="form-group">
              <label>${e?`البنك المصدر *`:`Select Bank *`}</label>
              <select id="knet-bank" class="form-control" style="font-size:0.9rem; padding: 0.5rem;">
                <option value="nbk">National Bank of Kuwait (NBK)</option>
                <option value="kfh">Kuwait Finance House (KFH)</option>
                <option value="burgan">Burgan Bank</option>
                <option value="gulf">Gulf Bank</option>
                <option value="boubyan">Boubyan Bank</option>
              </select>
            </div>

            <div class="form-group">
              <label>${e?`رقم البطاقة *`:`Card Number *`}</label>
              <div style="display:flex; gap:0.4rem; align-items:center;">
                <span style="font-size:0.85rem; font-weight:600; padding:0.5rem; background:#eee; border-radius:4px; border:1px solid #ccc;" class="num" translate="no">5069</span>
                <input type="text" id="knet-card" class="form-control number-input" translate="no" placeholder="12345678" style="padding:0.5rem; font-size:0.9rem;" required>
              </div>
            </div>

            <div class="form-row-2">
              <div class="form-group">
                <label>${e?`تاريخ الانتهاء`:`Expiry Date`}</label>
                <input type="text" id="knet-expiry" class="form-control number-input" translate="no" placeholder="MM/YY" style="padding:0.5rem;">
              </div>
              <div class="form-group">
                <label>${e?`رقم السر (PIN) *`:`PIN Code *`}</label>
                <input type="password" id="knet-pin" class="form-control number-input" translate="no" placeholder="****" style="padding:0.5rem;" required>
              </div>
            </div>

            <div class="knet-actions">
              <button id="knet-cancel-btn" type="button" class="btn btn-secondary">${e?`إلغاء`:`Cancel`}</button>
              <button id="knet-submit-btn" type="button" class="btn btn-primary">${e?`دفع الآن`:`Pay Now`}</button>
            </div>

            <!-- Loader spinner (Hidden by default) -->
            <div id="knet-spinner" class="knet-loader-overlay">
              <div class="spinner"></div>
              <p>${e?`جاري التحقق من عملية الدفع وإتمام الطلب...`:`Verifying transaction & finalizing order...`}</p>
            </div>
          </div>
        </div>
      </div>

    </div>

    <style>
      .checkout-page-container { padding-top: 3rem; }
      .page-title { font-family: 'Playfair Display', serif; font-size: 2.2rem; margin-bottom: 2rem; }

      .checkout-grid-layout { display: grid; grid-template-columns: 1fr 380px; gap: 3.5rem; align-items: start; }
      @media (max-width: 992px) { .checkout-grid-layout { grid-template-columns: 1fr; gap: 2.5rem; } }

      /* Form Sections */
      .form-section { background-color: var(--bg-primary); border: 1px solid var(--border-color); border-radius: 6px; padding: 2rem; margin-bottom: 2rem; }
      .form-section .section-title { font-size: 1.1rem; font-weight: 600; margin-bottom: 1.5rem; display: flex; align-items: center; gap: 0.8rem; }
      .form-section .section-title span { width: 24px; height: 24px; background-color: var(--accent-gold); color: #151515; font-size: 0.8rem; font-weight: 700; border-radius: 50%; display: flex; align-items: center; justify-content: center; }

      .form-row-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
      .form-row-3 { display: grid; grid-template-columns: 1.5fr 1fr 1fr; gap: 1rem; }
      
      @media (max-width: 576px) { 
        .form-row-2, .form-row-3 { grid-template-columns: 1fr; gap: 0; } 
      }

      /* Carriers */
      .carrier-selector-group { display: flex; flex-direction: column; gap: 0.8rem; }
      .carrier-card { display: flex; align-items: center; gap: 1rem; border: 1px solid var(--border-color); border-radius: 4px; padding: 1rem; cursor: pointer; transition: var(--transition-fast); }
      .carrier-card.active, .carrier-card:hover { border-color: var(--accent-gold); background-color: var(--accent-gold-light); }
      .carrier-card input { accent-color: var(--accent-gold); }
      .carrier-info { display: flex; justify-content: space-between; flex:1; font-size: 0.9rem; font-weight: 500; }
      .carrier-info .price { font-weight: 600; color: var(--accent-gold); }

      /* Payments options */
      .payment-method-selector-group { display: flex; flex-direction: column; gap: 0.8rem; }
      .pay-method-card { display: flex; align-items: center; gap: 1rem; border: 1px solid var(--border-color); border-radius: 4px; padding: 1rem; cursor: pointer; transition: var(--transition-fast); }
      .pay-method-card.active, .pay-method-card:hover { border-color: var(--accent-gold); background-color: var(--accent-gold-light); }
      .pay-method-card input { accent-color: var(--accent-gold); }
      .pay-method-card .icon { font-size: 1.4rem; }
      .pay-method-card .name { font-weight: 600; font-size: 0.95rem; display: block; }
      .pay-method-card .desc { font-size: 0.75rem; color: var(--text-secondary); }

      /* CC wrapper */
      .credit-card-fields-area { padding: 1.2rem; background-color: var(--bg-secondary); border-radius: 4px; border: 1px solid var(--border-color); }

      /* Summary Box */
      .summary-box { background-color: var(--bg-secondary); border: 1px solid var(--border-light); border-radius: 6px; padding: 1.8rem; }
      .summary-box h6 { font-size: 1.05rem; font-weight: 600; margin-bottom: 1.2rem; }
      
      .checkout-items-list { display: flex; flex-direction: column; gap: 1rem; }
      .chk-item { display: flex; gap: 0.8rem; align-items: center; font-size: 0.85rem; }
      .chk-item img { width: 45px; height: 60px; object-fit: cover; border-radius: 3px; background-color: var(--bg-primary); }
      .chk-item .info { flex: 1; }
      .chk-item .title { font-weight: 500; display: block; margin-bottom: 0.15rem; color: var(--text-primary); }
      .chk-item .meta { color: var(--text-muted); font-size: 0.75rem; }
      .chk-item .price { font-weight: 600; color: var(--text-primary); }

      .summary-lines .line { display: flex; justify-content: space-between; font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 0.5rem; }
      .summary-lines .line.discount { color: var(--success-color); }
      .summary-lines .total-line { border-top: 1px solid var(--border-color); padding-top: 0.8rem; margin-top: 0.5rem; font-size: 1.1rem; font-weight: 600; color: var(--text-primary); }

      /* KNET Simulation Modal */
      .knet-modal-backdrop { position: fixed; top: 0; left: 0; right: 0; bottom: 0; background-color: rgba(0,0,0,0.65); backdrop-filter: blur(5px); z-index: 2000; display: flex; align-items: center; justify-content: center; opacity: 0; visibility: hidden; transition: var(--transition-smooth); }
      .knet-modal-backdrop.active { opacity: 1; visibility: visible; }
      .knet-modal-box { background-color: white; color: #333; width: 100%; max-width: 440px; border-radius: 8px; overflow: hidden; box-shadow: 0 15px 45px rgba(0,0,0,0.3); border: 2px solid #005a9c; }
      
      .knet-modal-header { background-color: #005a9c; color: white; padding: 1rem; display: flex; align-items: center; gap: 1rem; }
      .knet-logo-text { font-size: 1.3rem; font-weight: 800; font-style: italic; background-color: white; color: #005a9c; padding: 0.1rem 0.6rem; border-radius: 4px; letter-spacing: -0.05em; }
      .knet-modal-header .title { font-size: 0.9rem; font-weight: 600; }
      
      .knet-modal-body { padding: 1.5rem; position: relative; }
      .knet-summary-row { display: flex; justify-content: space-between; font-size: 0.85rem; margin-bottom: 0.5rem; }
      .knet-summary-row .lbl { color: #666; }
      .knet-summary-row .val { font-weight: 600; }
      .knet-summary-row .val.text-gold { color: #b8860b; font-size: 1rem; }

      .knet-actions { display: flex; justify-content: space-between; margin-top: 1.5rem; gap: 1rem; }
      .knet-actions button { flex:1; font-size: 0.85rem; padding: 0.6rem; }
      
      .knet-loader-overlay { position: absolute; top:0; left:0; right:0; bottom:0; background-color: rgba(255,255,255,0.92); z-index: 10; display: none; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 1.5rem; }
      .knet-loader-overlay.active { display: flex; }
      .knet-loader-overlay .spinner { width: 40px; height: 40px; border: 4px solid #f3f3f3; border-top: 4px solid #005a9c; border-radius: 50%; animation: knetSpin 1s linear infinite; margin-bottom: 1rem; }
      @keyframes knetSpin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
      .knet-loader-overlay p { font-size: 0.85rem; color: #333; font-weight: 500; }
    </style>
  `}h.successOrder=null,h.onMount=()=>{let e=r.state.lang===`ar`,t=document.getElementById(`checkout-main-form`);if(!t)return;let n=e=>{let t=[`٠`,`١`,`٢`,`٣`,`٤`,`٥`,`٦`,`٧`,`٨`,`٩`];return e.replace(/[٠-٩]/g,e=>t.indexOf(e))},i=e=>{let t=e.target.selectionStart,r=e.target.selectionEnd,i=e.target.value,a=n(i);i!==a&&(e.target.value=a,e.target.setSelectionRange(t,r))};document.querySelectorAll(`.number-input`).forEach(e=>{e.addEventListener(`input`,i)}),document.querySelectorAll(`input[name="shipping-carrier"]`).forEach(e=>{e.addEventListener(`change`,()=>{document.querySelectorAll(`.carrier-card`).forEach(e=>e.classList.remove(`active`)),e.closest(`.carrier-card`).classList.add(`active`)})});let a=document.querySelectorAll(`input[name="payment-method"]`),o=document.getElementById(`credit-card-fields-area`);a.forEach(e=>{e.addEventListener(`change`,()=>{document.querySelectorAll(`.pay-method-card`).forEach(e=>e.classList.remove(`active`)),e.closest(`.pay-method-card`).classList.add(`active`),e.value===`cc`?o.style.display=`block`:o.style.display=`none`})});let s=document.getElementById(`knet-gateway-modal`),c=document.getElementById(`knet-cancel-btn`),l=document.getElementById(`knet-submit-btn`),u=document.getElementById(`knet-spinner`),d=()=>s.classList.add(`active`),f=()=>s.classList.remove(`active`);c&&c.addEventListener(`click`,f),t.addEventListener(`submit`,e=>{e.preventDefault();let n=t.querySelector(`input[name="payment-method"]:checked`).value;n===`knet`?d():p(n)}),l&&l.addEventListener(`click`,()=>{let t=document.getElementById(`knet-card`).value.trim(),n=document.getElementById(`knet-pin`).value.trim();if(!t||!n){alert(e?`يرجى ملء جميع حقول بطاقة كي نت المطلوبة!`:`Please enter card number and PIN code.`);return}u.classList.add(`active`),setTimeout(()=>{u.classList.remove(`active`),f(),p(`knet`)},2500)});let p=e=>{let n={name:document.getElementById(`chk-name`).value,phone:document.getElementById(`chk-phone`).value,email:document.getElementById(`chk-email`).value,area:document.getElementById(`chk-area`).value,block:document.getElementById(`chk-block`).value,street:document.getElementById(`chk-street`).value,building:document.getElementById(`chk-building`).value,floor:document.getElementById(`chk-floor`).value||``},i=t.querySelector(`input[name="shipping-carrier"]:checked`).value===`dhl`?`DHL Express`:`Sana Courier`,a=r.createOrder(n,e,i);a.shippingCompanyEn=i,h.successOrder=a,r.notify(`state_changed`)}};function g(e,t){let n=r.state.lang===`ar`,i=r.state.user,a=r.state.orders,o=r.state.wishlist,s=`orders`;return t&&t.tab&&(s=t.tab),`
    <div class="dashboard-page-container container animate-fade-in">
      <h1 class="page-title">${n?`لوحة التحكم الشخصية`:`My Account`}</h1>

      <div class="dashboard-layout">
        <!-- Sidebar Navigation -->
        <aside class="dashboard-sidebar">
          <div class="user-profile-summary">
            <div class="avatar-large">${i.name.charAt(0)}</div>
            <div class="info">
              <h6>${i.name}</h6>
              <p>${i.email}</p>
            </div>
          </div>

          <div class="dashboard-menu">
            <button class="menu-btn ${s===`orders`?`active`:``}" data-tab="orders">
              📦 ${n?`طلباتي`:`My Orders`} (${a.length})
            </button>
            <button class="menu-btn ${s===`wishlist`?`active`:``}" data-tab="wishlist">
              ❤️ ${n?`المفضلة`:`Wishlist`} (${o.length})
            </button>
            <button class="menu-btn ${s===`addresses`?`active`:``}" data-tab="addresses">
              📍 ${n?`عناوين التوصيل`:`Address Book`}
            </button>
            <button class="menu-btn ${s===`profile`?`active`:``}" data-tab="profile">
              ⚙️ ${n?`بيانات الحساب`:`Profile Settings`}
            </button>
          </div>
        </aside>

        <!-- Dynamic Content Section -->
        <main class="dashboard-content-area" style="padding-top: 0;">
          
          <!-- Orders Panel -->
          <div class="dashboard-panel-view ${s===`orders`?`active`:``}" id="panel-orders">
            <h3>${n?`تتبع طلباتي`:`Order History`}</h3>
            
            ${a.length===0?`
              <div class="empty-dashboard-state">
                <p>${n?`لم تقم بإنشاء أي طلبات حتى الآن.`:`You have not placed any orders yet.`}</p>
                <a href="#/category" class="btn btn-primary">${n?`تصفح المتجر الآن`:`Shop Our Store`}</a>
              </div>
            `:`
              <div class="orders-accordion-list">
                ${a.map(e=>{let t=e.status,r=t=>e.statusHistory.some(e=>e.status===t);return`
                    <div class="order-card-accordion" data-id="${e.id}">
                      <div class="order-header-trigger">
                        <div class="summary-details">
                          <span class="id">#${e.id}</span>
                          <span class="date">${e.date}</span>
                          <span class="badge-status ${t}">${n?v(e.status):_(e.status)}</span>
                        </div>
                        <div class="summary-total">
                          <strong class="price">${e.total%1==0?e.total.toFixed(0):e.total.toFixed(3)} KWD</strong>
                          <span class="chevron">▼</span>
                        </div>
                      </div>

                      <div class="order-details-drawer">
                        <!-- Tracking Stepper -->
                        <div class="stepper-wrapper">
                          <h6>${n?`تتبع مسار الشحنة`:`Delivery Tracking`}</h6>
                          <div class="stepper">
                            <div class="step ${r(`pending`)?`completed`:``}">
                              <div class="step-bubble">1</div>
                              <span class="step-label">${n?`تم استلام الطلب`:`Received`}</span>
                            </div>
                            <div class="step ${r(`shipped`)?`completed`:e.status===`pending`?`active`:``}">
                              <div class="step-bubble">2</div>
                              <span class="step-label">${n?`جاري التجهيز والشحن`:`Shipped`}</span>
                            </div>
                            <div class="step ${r(`delivered`)?`completed`:e.status===`shipped`?`active`:``}">
                              <div class="step-bubble">3</div>
                              <span class="step-label">${n?`مع المندوب للتوصيل`:`Out for Delivery`}</span>
                            </div>
                            <div class="step ${e.status===`delivered`?`completed`:``}">
                              <div class="step-bubble">4</div>
                              <span class="step-label">${n?`تم التوصيل بنجاح`:`Delivered`}</span>
                            </div>
                          </div>
                        </div>

                        <!-- Items details list -->
                        <div class="order-items-grid">
                          ${e.items.map(e=>`
                            <div class="order-item-mini">
                              <img src="${e.product.image}" alt="${n?e.product.titleAr:e.product.titleEn}">
                              <div class="details">
                                <span class="name">${n?e.product.titleAr:e.product.titleEn}</span>
                                <span class="meta">${n?`الكمية:`:`Qty:`} <span class="num">${e.quantity}</span> ${e.color?`| ${e.color}`:``} ${e.size?`| ${e.size}`:``}</span>
                              </div>
                              <span class="item-total">${e.product.price*e.quantity%1==0?(e.product.price*e.quantity).toFixed(0):(e.product.price*e.quantity).toFixed(3)} KWD</span>
                            </div>
                          `).join(``)}
                        </div>

                        <!-- Address Info summary -->
                        <div class="order-address-box">
                          <h6>${n?`عنوان التوصيل`:`Delivery Address`}</h6>
                          <p>${e.shippingInfo.name} | <span class="num">${e.shippingInfo.phone}</span></p>
                          <p>${e.shippingInfo.area}، ${n?`قطعة`:`Block`} <span class="num">${e.shippingInfo.block}</span>، ${n?`شارع`:`Street`} ${e.shippingInfo.street}، ${n?`منزل/مبنى`:`Bldg/House`} <span class="num">${e.shippingInfo.building}</span> ${e.shippingInfo.floor?`، ${n?`دور/شقة`:`Floor/Apt`} <span class="num">${e.shippingInfo.floor}</span>`:``}</p>
                        </div>
                      </div>
                    </div>
                  `}).join(``)}
              </div>
            `}
          </div>

          <!-- Wishlist Panel -->
          <div class="dashboard-panel-view ${s===`wishlist`?`active`:``}" id="panel-wishlist">
            <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:1rem; margin-bottom:1.5rem; border-bottom:1px solid var(--border-light); padding-bottom:1rem;">
              <h3 style="margin:0;">${n?`المنتجات المفضلة`:`Wishlist`}</h3>
              ${r.state.lastProduct?`
                <a href="#/product/${r.state.lastProduct.id}" class="btn btn-secondary btn-sm" style="display:flex; align-items:center; gap:0.4rem; padding:0.4rem 0.8rem; font-size:0.85rem; font-weight:600; border-radius:30px; text-decoration:none; background:var(--bg-secondary); border:1px solid var(--border-color); color:var(--text-primary); transition:var(--transition-fast);">
                  <span>${n?`← العودة للمنتج:`:`← Back to product:`} ${n?r.state.lastProduct.titleAr:r.state.lastProduct.titleEn}</span>
                </a>
              `:``}
            </div>
            
            ${o.length===0?`
              <div class="empty-dashboard-state">
                <p>${n?`قائمة الأمنيات فارغة حالياً.`:`Your wishlist is empty.`}</p>
                <a href="#/category" class="btn btn-primary">${n?`تصفح المنتجات`:`Browse Products`}</a>
              </div>
            `:`
              <div class="wishlist-cards-grid">
                ${o.map(e=>`
                  <div class="wish-item-card" data-id="${e.id}">
                    <img src="${e.image}" alt="${n?e.titleAr:e.titleEn}">
                    <div class="details">
                      <span class="cat">${n?e.categoryAr:e.categoryEn}</span>
                      <a href="#/product/${e.id}" class="title">${n?e.titleAr:e.titleEn}</a>
                      <span class="price">${e.price%1==0?e.price.toFixed(0):e.price.toFixed(3)} KWD</span>
                      
                      <div class="actions">
                        <button class="btn btn-primary btn-sm wish-add-to-cart" data-id="${e.id}">${n?`أضف للسلة`:`Add to Cart`}</button>
                        <button class="btn btn-secondary btn-sm wish-remove" data-id="${e.id}">${n?`إزالة`:`Remove`}</button>
                      </div>
                    </div>
                  </div>
                `).join(``)}
              </div>
            `}
          </div>

          <!-- Addresses Panel -->
          <div class="dashboard-panel-view ${s===`addresses`?`active`:``}" id="panel-addresses">
            <h3>${n?`عناوين التوصيل المسجلة`:`Address Book`}</h3>
            
            <div class="address-grid">
              ${i.addresses.map(e=>`
                <div class="address-card">
                  <h6>${n?e.type:e.typeEn}</h6>
                  <p>${e.city}، ${e.area}</p>
                  <p>${n?`شارع`:`Street`} ${e.street}، ${n?`قطعة`:`Block`} <span class="num">${e.block}</span>، ${n?`مبنى`:`Bldg`} <span class="num">${e.building}</span></p>
                  <p class="num">${e.floor}</p>
                  <button class="btn-text-remove remove-address-btn" data-id="${e.id}" style="margin-top:1rem;">${n?`حذف العنوان`:`Delete Address`}</button>
                </div>
              `).join(``)}

              <!-- Add Address Form Card -->
              <div class="address-card add-new-box">
                <button id="show-add-address-form" class="btn btn-secondary" style="width:100%; height:100%; min-height:120px;">
                  ➕ ${n?`إضافة عنوان جديد`:`Add New Address`}
                </button>
              </div>
            </div>

            <!-- New Address Form (Hidden by default) -->
            <form id="add-address-form" class="address-form-box" style="display:none; margin-top:2rem; padding:1.5rem; background:var(--bg-secondary); border-radius:6px;">
              <h5>${n?`إضافة عنوان توصيل جديد`:`New Shipping Address`}</h5>
              <div class="form-row-2">
                <div class="form-group">
                  <label>${n?`نوع العنوان (منزل، عمل...)`:`Address Label (Home, Office)`}</label>
                  <input type="text" id="addr-label" class="form-control" required placeholder="منزل">
                </div>
                <div class="form-group">
                  <label>${n?`المنطقة *`:`Area *`}</label>
                  <input type="text" id="addr-area" class="form-control" required>
                </div>
              </div>
              <div class="form-row-3">
                <div class="form-group">
                  <label>${n?`القطعة *`:`Block *`}</label>
                  <input type="text" id="addr-block" class="form-control number-input" translate="no" required>
                </div>
                <div class="form-group">
                  <label>${n?`الشارع *`:`Street *`}</label>
                  <input type="text" id="addr-street" class="form-control" required>
                </div>
                <div class="form-group">
                  <label>${n?`المنزل/المبنى *`:`Bldg / House *`}</label>
                  <input type="text" id="addr-building" class="form-control number-input" translate="no" required>
                </div>
              </div>
              <div class="form-group">
                <label>${n?`الدور والشقة (اختياري)`:`Floor / Apartment (Optional)`}</label>
                <input type="text" id="addr-floor" class="form-control number-input" translate="no">
              </div>
              <div class="knet-actions">
                <button type="button" id="cancel-addr-btn" class="btn btn-secondary">${n?`إلغاء`:`Cancel`}</button>
                <button type="submit" class="btn btn-primary">${n?`حفظ العنوان`:`Save Address`}</button>
              </div>
            </form>
          </div>

          <!-- Profile Settings Panel -->
          <div class="dashboard-panel-view ${s===`profile`?`active`:``}" id="panel-profile">
            <h3>${n?`تعديل بيانات الحساب`:`Profile Settings`}</h3>
            
            <form id="profile-settings-form" style="max-width: 500px; margin-top: 1.5rem;">
              <div class="form-group">
                <label>${n?`الاسم بالكامل *`:`Full Name *`}</label>
                <input type="text" id="prof-name" class="form-control" value="${i.name}" required>
              </div>
              <div class="form-group">
                <label>${n?`البريد الإلكتروني *`:`Email Address *`}</label>
                <input type="email" id="prof-email" class="form-control" value="${i.email}" required>
              </div>
              <div class="form-group">
                <label>${n?`رقم الهاتف *`:`Phone Number *`}</label>
                <input type="tel" id="prof-phone" class="form-control number-input" value="${i.phone}" translate="no" required>
              </div>

              <hr class="divider" style="margin:1.5rem 0;">
              
              <h5>${n?`تغيير كلمة المرور`:`Change Password`}</h5>
              <div class="form-group">
                <label>${n?`كلمة المرور الحالية`:`Current Password`}</label>
                <input type="password" id="prof-curr-pass" class="form-control">
              </div>
              <div class="form-group">
                <label>${n?`كلمة المرور الجديدة`:`New Password`}</label>
                <input type="password" id="prof-new-pass" class="form-control">
              </div>

              <button type="submit" class="btn btn-primary" style="margin-top: 1.5rem;">${n?`حفظ التعديلات`:`Save Changes`}</button>
            </form>
          </div>

        </main>
      </div>
    </div>

    <style>
      .dashboard-page-container { padding-top: 3rem; }
      .dashboard-layout { display: grid; grid-template-columns: 280px 1fr; gap: 3rem; align-items: start; }
      
      @media (max-width: 992px) {
        .dashboard-layout { grid-template-columns: 1fr; gap: 2rem; }
      }

      /* Sidebar */
      .dashboard-sidebar { background-color: var(--bg-secondary); border: 1px solid var(--border-light); border-radius: 6px; padding: 1.5rem; }
      
      .user-profile-summary { display: flex; align-items: center; gap: 1rem; border-bottom: 1px solid var(--border-color); padding-bottom: 1.2rem; margin-bottom: 1.5rem; }
      .avatar-large { width: 50px; height: 50px; border-radius: 50%; background-color: var(--accent-gold); color: #151515; font-size: 1.4rem; font-weight: 700; display: flex; align-items: center; justify-content: center; }
      .user-profile-summary h6 { font-size: 0.95rem; font-weight: 600; }
      .user-profile-summary p { font-size: 0.75rem; color: var(--text-muted); }

      .dashboard-menu { display: flex; flex-direction: column; gap: 0.5rem; }
      .menu-btn { background: none; border: none; text-align: inherit; padding: 0.8rem 1rem; border-radius: 4px; color: var(--text-secondary); font-size: 0.9rem; font-weight: 500; cursor: pointer; transition: var(--transition-fast); }
      .menu-btn:hover, .menu-btn.active { background-color: var(--bg-tertiary); color: var(--text-primary); }
      .menu-btn.active { border-left: 3px solid var(--accent-gold); }
      [dir="rtl"] .menu-btn.active { border-left: none; border-right: 3px solid var(--accent-gold); }

      @media (max-width: 992px) {
        .dashboard-menu { flex-direction: row; overflow-x: auto; padding: 0.2rem 0; }
        .menu-btn { white-space: nowrap; }
        .menu-btn.active { border-left: none; border-bottom: 2px solid var(--accent-gold); }
        [dir="rtl"] .menu-btn.active { border-right: none; border-bottom: 2px solid var(--accent-gold); }
      }

      /* Panel visibility */
      .dashboard-panel-view { display: none; }
      .dashboard-panel-view.active { display: block; animation: fadeIn 0.4s ease; }
      .dashboard-panel-view h3 { font-size: 1.3rem; font-weight: 600; margin-bottom: 1.5rem; }

      .empty-dashboard-state { text-align: center; padding: 4rem 1rem; background-color: var(--bg-secondary); border-radius: 6px; }
      .empty-dashboard-state p { color: var(--text-muted); margin-bottom: 1.5rem; font-size: 0.9rem; }

      /* Orders Accordion */
      .orders-accordion-list { display: flex; flex-direction: column; gap: 1rem; }
      .order-card-accordion { background-color: var(--bg-secondary); border: 1px solid var(--border-light); border-radius: 6px; overflow: hidden; }
      .order-header-trigger { display: flex; justify-content: space-between; align-items: center; padding: 1.2rem; cursor: pointer; user-select: none; }
      .order-header-trigger:hover { background-color: var(--bg-tertiary); }
      .order-header-trigger .chevron { font-size: 0.75rem; color: var(--text-muted); transition: transform 0.3s; }
      .order-card-accordion.expanded .chevron { transform: rotate(180deg); }

      .order-header-trigger .summary-details { display: flex; align-items: center; gap: 1.2rem; flex-wrap: wrap; }
      .order-header-trigger .id { font-weight: 600; }
      .order-header-trigger .date { font-size: 0.85rem; color: var(--text-muted); }

      .order-details-drawer { display: none; padding: 1.5rem; border-top: 1px solid var(--border-color); background-color: var(--bg-primary); }
      .order-card-accordion.expanded .order-details-drawer { display: block; }
      
      .stepper-wrapper { margin-bottom: 2rem; }
      .stepper-wrapper h6 { font-size: 0.85rem; text-transform: uppercase; font-weight: 600; margin-bottom: 1rem; }

      .order-items-grid { display: flex; flex-direction: column; gap: 0.8rem; margin-bottom: 1.5rem; }
      .order-item-mini { display: flex; gap: 0.8rem; align-items: center; border-bottom: 1px solid var(--border-light); padding-bottom: 0.8rem; }
      .order-item-mini:last-child { border-bottom: none; padding-bottom: 0; }
      .order-item-mini img { width: 40px; height: 50px; object-fit: cover; border-radius: 3px; background-color: var(--bg-secondary); }
      .order-item-mini .details { flex: 1; }
      .order-item-mini .name { font-size: 0.85rem; font-weight: 500; display: block; }
      .order-item-mini .meta { font-size: 0.75rem; color: var(--text-muted); }
      .order-item-mini .item-total { font-weight: 600; font-size: 0.85rem; }

      .order-address-box { padding: 1rem; background-color: var(--bg-secondary); border-radius: 4px; font-size: 0.85rem; }
      .order-address-box h6 { font-weight: 600; margin-bottom: 0.4rem; }
      .order-address-box p { color: var(--text-secondary); line-height: 1.4; }

      /* Wishlist Cards Grid */
      .wishlist-cards-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1.5rem; }
      .wish-item-card { display: flex; gap: 1rem; background-color: var(--bg-secondary); border: 1px solid var(--border-light); border-radius: 6px; padding: 1rem; align-items: center; }
      .wish-item-card img { width: 70px; height: 95px; object-fit: cover; border-radius: 4px; }
      .wish-item-card .details { flex: 1; display: flex; flex-direction: column; gap: 0.25rem; }
      .wish-item-card .cat { font-size: 0.7rem; text-transform: uppercase; color: var(--text-muted); }
      .wish-item-card .title { font-size: 0.85rem; font-weight: 600; text-decoration: none; color: var(--text-primary); line-height: 1.3; }
      .wish-item-card .price { font-size: 0.9rem; font-weight: 600; color: var(--accent-gold); }
      .wish-item-card .actions { display: flex; gap: 0.4rem; margin-top: 0.5rem; }
      
      /* Addresses Grid */
      .address-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 1.5rem; }
      .address-card { background-color: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: 6px; padding: 1.5rem; font-size: 0.85rem; }
      .address-card h6 { font-size: 0.9rem; font-weight: 600; margin-bottom: 0.8rem; }
      .address-card p { color: var(--text-secondary); margin-bottom: 0.2rem; }
      .add-new-box { display: flex; align-items: center; justify-content: center; border-style: dashed; }
    </style>
  `}function _(e){return e===`pending`?`Processing`:e===`shipped`?`Shipped`:e===`delivered`?`Delivered`:`Cancelled`}function v(e){return e===`pending`?`قيد التجهيز`:e===`shipped`?`تم الشحن`:e===`delivered`?`تم التوصيل`:`ملغي`}g.onMount=(e,t)=>{let n=document.querySelector(`.dashboard-page-container`),i=r.state.lang===`ar`;if(!n)return;let a=e=>{let t=[`٠`,`١`,`٢`,`٣`,`٤`,`٥`,`٦`,`٧`,`٨`,`٩`];return e.replace(/[٠-٩]/g,e=>t.indexOf(e))},o=e=>{let t=e.target.selectionStart,n=e.target.selectionEnd,r=e.target.value,i=a(r);r!==i&&(e.target.value=i,e.target.setSelectionRange(t,n))};n.querySelectorAll(`.number-input`).forEach(e=>{e.addEventListener(`input`,o)});let s=n.querySelectorAll(`.menu-btn`),c=n.querySelectorAll(`.dashboard-panel-view`);s.forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.tab;s.forEach(t=>t.classList.toggle(`active`,t===e)),c.forEach(e=>e.classList.toggle(`active`,e.id===`panel-${t}`)),window.history.pushState(null,null,`#/dashboard?tab=${t}`)})});let l=n.querySelectorAll(`.order-card-accordion`);l.forEach(e=>{e.querySelector(`.order-header-trigger`).addEventListener(`click`,()=>{let t=e.classList.contains(`expanded`);l.forEach(e=>e.classList.remove(`expanded`)),t||e.classList.add(`expanded`)})}),n.querySelectorAll(`.wish-add-to-cart`).forEach(e=>{e.addEventListener(`click`,()=>{let t=parseInt(e.dataset.id),n=r.state.products.find(e=>e.id===t);n&&r.addToCart(n,1)})}),n.querySelectorAll(`.wish-remove`).forEach(e=>{e.addEventListener(`click`,()=>{let t=parseInt(e.dataset.id),n=r.state.products.find(e=>e.id===t);n&&(r.toggleWishlist(n),r.notify(`state_changed`))})});let u=document.getElementById(`show-add-address-form`),d=document.getElementById(`add-address-form`),f=document.getElementById(`cancel-addr-btn`);u&&d&&u.addEventListener(`click`,()=>{d.style.display=`block`,u.closest(`.add-new-box`).style.display=`none`}),f&&d&&f.addEventListener(`click`,()=>{d.reset(),d.style.display=`none`,u&&(u.closest(`.add-new-box`).style.display=`flex`)}),d&&d.addEventListener(`submit`,e=>{e.preventDefault();let t={id:Date.now(),type:document.getElementById(`addr-label`).value,typeEn:document.getElementById(`addr-label`).value,city:i?`الكويت`:`Kuwait`,area:document.getElementById(`addr-area`).value,block:document.getElementById(`addr-block`).value,street:document.getElementById(`addr-street`).value,building:document.getElementById(`addr-building`).value,floor:document.getElementById(`addr-floor`).value||``};r.state.user.addresses.push(t),r.save(`user`),r.showToast(i?`تم حفظ العنوان بنجاح!`:`Address saved successfully!`,`success`),r.notify(`state_changed`)}),n.querySelectorAll(`.remove-address-btn`).forEach(e=>{e.addEventListener(`click`,()=>{let t=parseInt(e.dataset.id);r.state.user.addresses=r.state.user.addresses.filter(e=>e.id!==t),r.save(`user`),r.showToast(i?`تم حذف العنوان.`:`Address deleted.`,`info`),r.notify(`state_changed`)})});let p=document.getElementById(`profile-settings-form`);p&&p.addEventListener(`submit`,e=>{e.preventDefault();let t=document.getElementById(`prof-name`).value,n=document.getElementById(`prof-email`).value,a=document.getElementById(`prof-phone`).value;r.state.user.name=t,r.state.user.email=n,r.state.user.phone=a,r.save(`user`),r.showToast(i?`تم تحديث بيانات الحساب بنجاح!`:`Profile settings updated successfully!`,`success`),r.notify(`state_changed`)})};function y(t,n){let i=r.state.lang===`ar`,a=r.state.products,o=r.state.orders,s=r.state.coupons,c=`overview`;n&&n.tab&&(c=n.tab);let l=o.reduce((e,t)=>e+(t.status===`cancelled`?0:t.total),0),u=o.filter(e=>e.status===`pending`||e.status===`shipped`).length,d=a.filter(e=>e.stock<5).length,f=(e,t=0)=>{let n=e.subcategories&&e.subcategories.length>0,r=`
      <div class="category-list-item" style="margin-inline-start:${t*15}px; border-inline-start:${t>0?`1px dashed var(--border-color)`:`none`}; padding-inline-start:${t>0?`10px`:`0`}; display:flex; align-items:center; justify-content:space-between; padding-top:0.4rem; padding-bottom:0.4rem;">
        <div style="display:flex; align-items:center; gap:0.5rem;">
          <input type="checkbox" name="categories_select" id="cat-${e.id}" value="${e.id}">
          <label for="cat-${e.id}" style="display:flex; align-items:center; gap:0.5rem; margin:0; cursor:pointer;">
            <img src="${e.image}" class="cat-thumb" style="width:28px; height:28px; border-radius:4px; object-fit:cover;">
            <div class="cat-meta" style="display:flex; flex-direction:column;">
              <span class="title" style="font-size:0.85rem; font-weight:600; color:var(--text-primary);">${i?e.titleAr:e.titleEn}</span>
              <span class="en" style="font-size:0.7rem; color:var(--text-secondary);">${e.titleEn}</span>
            </div>
          </label>
        </div>
        ${n?`
          <span style="font-size: 0.65rem; background: var(--border-light); color: var(--text-secondary); padding: 0.15rem 0.4rem; border-radius: 20px; font-weight: 600; white-space: nowrap; margin-inline-start:0.5rem;">
            ${e.subcategories.length} ${i?`الفئات الفرعية`:`Subcategories`}
          </span>
        `:``}
      </div>
    `;return n&&e.subcategories.forEach(e=>{r+=f(e,t+1)}),r},p=e.map(e=>f(e)).join(``);return`
    <div class="admin-page-container animate-fade-in">
      <div class="container admin-header">
        <h1>${i?`لوحة التحكم بالإدارة`:`Admin Control Panel`}</h1>
        <p>${i?`إدارة المنتجات، الطلبات، الكوبونات والتقارير في مكان واحد`:`Manage products, orders, coupons, and view metrics in one place.`}</p>
      </div>

      <div class="admin-layout">
        <!-- Admin Sidebar -->
        <aside class="admin-sidebar">
          <a href="#/admin?tab=overview" class="admin-nav-item ${c===`overview`?`active`:``}">
            📊 ${i?`نظرة عامة والتقارير`:`Dashboard Overview`}
          </a>
          <a href="#/admin?tab=products" class="admin-nav-item ${c===`products`?`active`:``}">
            🛍️ ${i?`إدارة المنتجات`:`Manage Products`}
          </a>
          <a href="#/admin?tab=orders" class="admin-nav-item ${c===`orders`?`active`:``}">
            📦 ${i?`إدارة الطلبات`:`Manage Orders`} (${o.length})
          </a>
          <a href="#/admin?tab=coupons" class="admin-nav-item ${c===`coupons`?`active`:``}">
            🏷️ ${i?`الكوبونات والخصومات`:`Coupons & Promos`}
          </a>
          <a href="#/admin?tab=banners" class="admin-nav-item ${c===`banners`?`active`:``}">
            🖼️ ${i?`إدارة البنرات`:`Manage Banners`}
          </a>
          <a href="#/admin?tab=slides" class="admin-nav-item ${c===`slides`?`active`:``}">
            🎠 ${i?`إدارة السلايدر الرئيسي`:`Manage Hero Slider`}
          </a>
        </aside>

        <!-- Admin Main Content -->
        <main class="admin-content" style="padding-top: 0;">
          
          <!-- Tab 1: Overview Dashboard -->
          <div class="admin-panel-view ${c===`overview`?`active`:``}" id="adm-overview">
            <div class="admin-metrics">
              <div class="metric-card">
                <span class="title">${i?`إجمالي المبيعات`:`Total Revenue`}</span>
                <span class="value" style="color:var(--success-color);">${l%1==0?l.toFixed(0):l.toFixed(3)} KWD</span>
              </div>
              <div class="metric-card">
                <span class="title">${i?`الطلبات النشطة`:`Active Orders`}</span>
                <span class="value">${u}</span>
              </div>
              <div class="metric-card">
                <span class="title">${i?`تنبيهات المخزون المنخفض`:`Low Stock Alerts`}</span>
                <span class="value" style="color:${d>0?`var(--error-color)`:`inherit`};">${d}</span>
              </div>
              <div class="metric-card">
                <span class="title">${i?`كوبونات الخصم النشطة`:`Active Coupons`}</span>
                <span class="value">${s.length}</span>
              </div>
            </div>

            <!-- Recent Orders Section -->
            <div class="admin-section-box">
              <h5>${i?`آخر عمليات الشراء`:`Recent Transactions`}</h5>
              ${o.length===0?`
                <p style="color:var(--text-muted); font-size:0.9rem;">${i?`لا توجد طلبات مسجلة حالياً.`:`No transactions recorded yet.`}</p>
              `:`
                <table class="admin-table">
                  <thead>
                    <tr>
                      <th>${i?`رقم الطلب`:`Order ID`}</th>
                      <th>${i?`العميل`:`Customer`}</th>
                      <th>${i?`التاريخ`:`Date`}</th>
                      <th>${i?`وسيلة الدفع`:`Payment`}</th>
                      <th>${i?`الإجمالي`:`Total`}</th>
                      <th>${i?`الحالة`:`Status`}</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${o.slice(0,5).map(e=>`
                      <tr>
                        <td><strong class="id">#${e.id}</strong></td>
                        <td>${e.shippingInfo.name}</td>
                        <td><span class="date">${e.date}</span></td>
                        <td>${e.paymentMethod.toUpperCase()}</td>
                        <td><span class="price">${e.total%1==0?e.total.toFixed(0):e.total.toFixed(3)} KWD</span></td>
                        <td><span class="badge-status ${e.status}">${i?x(e.status):b(e.status)}</span></td>
                      </tr>
                    `).join(``)}
                  </tbody>
                </table>
              `}
            </div>
          </div>

          <!-- Tab 2: Manage Products Catalog CRUD -->
          <div class="admin-panel-view ${c===`products`?`active`:``}" id="adm-products">
            <div class="admin-section-header-row">
              <h3>${i?`كتالوج المنتجات`:`Products Catalog`}</h3>
              <button id="show-add-product-modal" class="btn btn-primary">➕ ${i?`إضافة منتج جديد`:`Add New Product`}</button>
            </div>

            <!-- Add/Edit product form (Hidden by default) -->
            <form id="product-crud-form" class="new-admin-form" style="display:none; margin-bottom:2.5rem;">
              <h5 id="form-action-title" style="display:none;">${i?`إدخال منتج جديد`:`New Product Details`}</h5>
              <input type="hidden" id="crud-prod-id">
              <div class="form-body-grid">
                <!-- Right/Main Column -->
                <div class="form-main-col">
                  
                  <!-- Form Header: Product Type Cards -->
                  <div class="product-type-cards">
                    <div class="type-card active" data-type="simple">
                      <span class="radio-indicator"></span>
                      <div class="type-info">
                        <label>${i?`بسيط`:`Simple`}</label>
                        <p>${i?`المنتج البسيط هو عنصر مادي بدون تنويعات`:`Simple product is a physical item with no variations`}</p>
                      </div>
                      <input type="radio" name="product_type" id="type-simple" checked style="display:none;">
                    </div>
                    <div class="type-card" data-type="variable">
                      <span class="radio-indicator"></span>
                      <div class="type-info">
                        <label>${i?`متغير`:`Variable`}</label>
                        <p>${i?`المنتج المتغير له تنويعات متعددة (الحجم، اللون، إلخ)`:`Variable product has multiple options like size, color, etc.`}</p>
                      </div>
                      <input type="radio" name="product_type" id="type-variable" style="display:none;">
                    </div>
                    <div class="type-card" data-type="multiple">
                      <span class="radio-indicator"></span>
                      <div class="type-info">
                        <label>${i?`متعدد`:`Multiple`}</label>
                        <p>${i?`أنشئ عدة منتجات بسيطة دفعة واحدة من نموذج واحد`:`Create multiple simple products at once from a single model`}</p>
                      </div>
                      <input type="radio" name="product_type" id="type-multiple" style="display:none;">
                    </div>
                  </div>

                  <!-- Section 1: Basic Information -->
                  <div class="form-section-card">
                    <div class="card-header">
                      <span class="section-icon">📝</span>
                      <h5>${i?`المعلومات الأساسية`:`Basic Information`}</h5>
                    </div>
                    <div class="card-body">
                      <div class="form-group">
                        <label>${i?`اسم المنتج (العربية) *`:`Product Name (Arabic) *`}</label>
                        <input type="text" id="crud-title-ar" class="form-control" placeholder="${i?`شراشف قطن مصري`:`e.g. Cotton sheet set`}" required>
                        <span class="input-subtitle">${i?`سيتم ترجمة النص الإنجليزي تلقائياً من العربية`:`English title will be auto-translated from Arabic`}</span>
                        <input type="hidden" id="crud-title-en">
                      </div>
                      
                      <div class="form-group">
                        <label>${i?`رمز المنتج *`:`Product SKU *`}</label>
                        <input type="text" id="crud-sku" class="form-control" placeholder="CVH-BS-EC-Q-001" required>
                        <input type="hidden" id="crud-type" value="simple">
                      </div>

                      <div class="form-group">
                        <label>${i?`الوصف (العربية) *`:`Description (Arabic) *`}</label>
                        <textarea id="crud-desc-ar" class="form-control" rows="4" placeholder="${i?`وصف المنتج باللغة العربية`:`Product description in Arabic`}" required></textarea>
                        <span class="input-subtitle">${i?`سيتم ترجمة الوصف تلقائياً للغة الإنجليزية`:`Description will be auto-translated to English`}</span>
                        <textarea id="crud-desc-en" class="form-control" style="display:none;"></textarea>
                      </div>
                    </div>
                  </div>

                  <!-- Section 2: Pricing and Inventory -->
                  <div class="form-section-card" id="pricing-inventory-section">
                    <div class="card-header">
                      <span class="section-icon">💵</span>
                      <h5>${i?`التسعير والمخزون`:`Pricing & Inventory`}</h5>
                    </div>
                    <div class="card-body">
                      <div class="form-row-3">
                        <div class="form-group">
                          <label>${i?`السعر *`:`Price *`}</label>
                          <input type="text" inputmode="decimal" pattern="[0-9]*\\.?[0-9]*" id="crud-price" class="form-control number-input" placeholder="299.99" translate="no" required>
                        </div>
                        <div class="form-group">
                          <label>${i?`سعر التخفيض`:`Sale Price`}</label>
                          <input type="text" inputmode="decimal" pattern="[0-9]*\\.?[0-9]*" id="crud-old-price" class="form-control number-input" placeholder="249.99" translate="no">
                        </div>
                        <div class="form-group">
                          <label>${i?`كمية المخزون *`:`Stock Quantity *`}</label>
                          <input type="text" inputmode="numeric" pattern="[0-9]*" id="crud-stock" class="form-control number-input" value="100" translate="no" required>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Section 4: Variable Attributes & Variations -->
                  <div class="form-section-card" id="variable-attributes-section" style="display:none; padding: 1.5rem; background: var(--bg-primary); border-radius: 8px; border: 1px solid var(--border-color);">
                    <div class="card-header" style="display:flex; align-items:center; justify-content:space-between; border-bottom:1px solid var(--border-light); padding-bottom:0.75rem; margin-bottom:1rem;">
                      <h5 style="margin:0; font-weight:700; font-size:1.1rem; display:flex; align-items:center; gap:0.5rem;">
                        ⚙️ ${i?`إعدادات المنتج المتغير`:`Variable Product Settings`}
                      </h5>
                      <span id="variations-combos-count" style="font-size:0.8rem; color:var(--text-muted); font-weight:600;">0 ${i?`تركيبة ممكنة`:`possible combinations`}</span>
                    </div>

                    <!-- Tabs switcher -->
                    <div class="var-tabs" style="display:flex; border-bottom:2px solid var(--border-light); margin-bottom:1.5rem; gap:1rem;">
                      <button type="button" class="var-tab-btn active" data-tab="attribs" style="background:none; border:none; padding:0.6rem 1.2rem; font-weight:700; font-size:0.9rem; cursor:pointer; color:var(--text-muted); position:relative; border-bottom:2px solid transparent;">
                        🎛️ ${i?`الخصائص`:`Attributes`}
                      </button>
                      <button type="button" class="var-tab-btn" data-tab="preview" style="background:none; border:none; padding:0.6rem 1.2rem; font-weight:700; font-size:0.9rem; cursor:pointer; color:var(--text-muted); position:relative; border-bottom:2px solid transparent;">
                        👁️ ${i?`المعاينة`:`Preview`} <span class="badge" id="preview-tab-count-badge" style="background:var(--accent-gold); color:white; font-size:0.7rem; padding:0.1rem 0.4rem; border-radius:10px; margin-inline-start:0.3rem; display:none;">0</span>
                      </button>
                    </div>

                    <!-- Panel 1: Attributes -->
                    <div class="var-panel active" id="var-panel-attribs">
                      <p style="font-size:0.9rem; font-weight:700; margin-bottom:0.8rem;">${i?`اختر خصائص الأشكال`:`Select variation attributes`}</p>
                      <p style="font-size:0.78rem; color:var(--text-muted); margin-bottom:1.5rem;">${i?`اختر الخصائص التي ستنشئ أشكالاً لهذا المنتج`:`Choose attributes that will create variations for this product`}</p>

                      <!-- Color Attribute Block -->
                      <div class="attr-box" style="border:1px solid var(--border-color); border-radius:6px; padding:1.2rem; margin-bottom:1.25rem; background:var(--bg-secondary);">
                        <label style="display:flex; align-items:center; gap:0.6rem; font-weight:700; font-size:0.9rem; cursor:pointer;">
                          <input type="checkbox" id="attr-enable-color" style="width:18px; height:18px; accent-color:var(--accent-gold);">
                          <span>color (${i?`اللون`:`Color`})</span>
                        </label>

                        <div id="attr-color-inputs-area" style="display:none; margin-top:1rem; border-top:1px solid var(--border-light); padding-top:1rem;">
                          <div style="display:grid; grid-template-columns: 2fr 1fr auto; gap:0.75rem; align-items:end;">
                            <div class="form-group" style="margin-bottom:0;">
                              <label style="font-size:0.8rem; font-weight:600; color:var(--text-secondary);">${i?`القيمة (عربي) *`:`Value (Arabic) *`}</label>
                              <input type="text" id="attr-color-val" class="form-control" placeholder="${i?`مثال: أزرق كحلي`:`e.g. Navy Blue`}" style="padding:0.4rem;">
                            </div>
                            <div class="form-group" style="margin-bottom:0;">
                              <label style="font-size:0.8rem; font-weight:600; color:var(--text-secondary);">${i?`اللون`:`Color`}</label>
                              <input type="color" id="attr-color-picker" class="form-control" value="#c5a880" style="padding:0; height:36px; cursor:pointer;">
                            </div>
                            <button type="button" id="add-color-val-btn" class="btn btn-secondary" style="height:36px; padding:0 1rem; font-weight:700;">
                              + ${i?`إضافة قيمة`:`Add Value`}
                            </button>
                          </div>

                          <!-- Colors tag list -->
                          <div id="added-colors-list" style="display:flex; flex-wrap:wrap; gap:0.5rem; margin-top:1rem;">
                          </div>
                        </div>
                      </div>

                      <!-- Size Attribute Block -->
                      <div class="attr-box" style="border:1px solid var(--border-color); border-radius:6px; padding:1.2rem; margin-bottom:1.5rem; background:var(--bg-secondary);">
                        <label style="display:flex; align-items:center; gap:0.6rem; font-weight:700; font-size:0.9rem; cursor:pointer;">
                          <input type="checkbox" id="attr-enable-size" style="width:18px; height:18px; accent-color:var(--accent-gold);">
                          <span>size (${i?`المقاس`:`Size`})</span>
                        </label>

                        <div id="attr-size-inputs-area" style="display:none; margin-top:1rem; border-top:1px solid var(--border-light); padding-top:1rem;">
                          <div style="display:grid; grid-template-columns: 2fr auto; gap:0.75rem; align-items:end;">
                            <div class="form-group" style="margin-bottom:0;">
                              <label style="font-size:0.8rem; font-weight:600; color:var(--text-secondary);">${i?`القيمة (عربي) *`:`Value (Arabic) *`}</label>
                              <input type="text" id="attr-size-val" class="form-control" placeholder="${i?`مثال: L, XL, XXL`:`e.g. L, XL, XXL`}" style="padding:0.4rem;">
                            </div>
                            <button type="button" id="add-size-val-btn" class="btn btn-secondary" style="height:36px; padding:0 1rem; font-weight:700;">
                              + ${i?`إضافة قيمة`:`Add Value`}
                            </button>
                          </div>

                          <!-- Sizes tag list -->
                          <div id="added-sizes-list" style="display:flex; flex-wrap:wrap; gap:0.5rem; margin-top:1rem;">
                          </div>
                        </div>
                      </div>

                      <!-- Default Stock Quantity -->
                      <div class="form-group" style="margin-bottom:1.5rem;">
                        <label style="font-weight:700; font-size:0.85rem; margin-bottom:0.4rem; display:block;">${i?`الكمية الافتراضية للمخزون`:`Default stock quantity`}</label>
                        <input type="text" inputmode="numeric" pattern="[0-9]*" id="var-default-stock" class="form-control number-input" value="100" style="padding:0.5rem; font-weight:600;" translate="no">
                      </div>

                      <button type="button" id="var-preview-trigger-btn" class="btn btn-secondary" style="width:100%; padding:0.6rem; font-weight:700; font-size:0.95rem;">
                        👁️ ${i?`معاينة الأشكال`:`Preview Variations`}
                      </button>
                      <p style="font-size:0.75rem; color:var(--text-muted); margin-top:0.5rem; text-align:center;" id="attribs-summary-help">
                        ${i?`سيتم إنشاء 0 شكل عند نشر المنتج.`:`0 variations will be created when publishing.`}
                      </p>
                    </div>

                    <!-- Panel 2: Preview -->
                    <div class="var-panel" id="var-panel-preview" style="display:none;">
                      <!-- Summary metrics row -->
                      <div style="display:flex; justify-content:space-between; align-items:center; background:var(--bg-secondary); border:1px solid var(--border-color); border-radius:6px; padding:0.75rem 1rem; margin-bottom:1.25rem; font-size:0.85rem; font-weight:600;">
                        <span>👁️ ${i?`معاينة عدد الأشكال:`:`Preview Variations count:`} <strong id="preview-metric-count">0</strong></span>
                        <span>✅ ${i?`المحدد:`:`Selected:`} <strong id="preview-metric-selected">0</strong></span>
                        <span>📦 ${i?`المخزون:`:`Stock:`} <strong id="preview-metric-stock">0</strong></span>
                      </div>

                      <p style="font-size:0.85rem; font-weight:700; margin-bottom:0.25rem;">${i?`أشكال المنتج`:`Product Variations`}</p>
                      <p style="font-size:0.75rem; color:var(--text-muted); margin-bottom:1rem;">${i?`راجع وخصص كل شكل قبل الحفظ`:`Review and customize each variation before saving`}</p>

                      <div style="overflow-x:auto;">
                        <table class="admin-table" style="font-size:0.85rem; width:100%; border-collapse:collapse;">
                          <thead>
                            <tr>
                              <th style="padding:0.5rem;">${i?`الخيار`:`Variation`}</th>
                              <th style="padding:0.5rem;">${i?`رمز المنتج`:`SKU`}</th>
                              <th style="padding:0.5rem;">${i?`السعر`:`Price`}</th>
                              <th style="padding:0.5rem;">${i?`سعر التخفيض`:`Sale Price`}</th>
                              <th style="padding:0.5rem;">${i?`المخزون`:`Stock`}</th>
                              <th style="padding:0.5rem; text-align:center;">${i?`الصورة`:`Image`}</th>
                            </tr>
                          </thead>
                          <tbody id="var-matrix-tbody">
                          </tbody>
                        </table>
                      </div>

                      <div style="display:flex; justify-content:flex-end; gap:0.75rem; margin-top:1.5rem; border-top:1px solid var(--border-light); padding-top:1.25rem;">
                        <span style="font-size:0.8rem; color:var(--text-muted); align-self:center;" id="preview-summary-footer-text">
                          ${i?`جاهز للنشر مع 0 شكل. سيتم إنشاء الأشكال عند نشر المنتج.`:`Ready to publish with 0 variations.`}
                        </span>
                      </div>
                    </div>
                  </div>


                  <!-- Section 3: Categories -->
                  <div class="form-section-card">
                    <div class="card-header">
                      <span class="section-icon">🗂️</span>
                      <h5>${i?`الفئات *`:`Categories *`}</h5>
                    </div>
                    <div class="card-body">
                      <p class="section-desc">${i?`تنظيم المنتج في فئات ذات صلة`:`Organize product in relevant categories`}</p>
                      <label class="list-label" style="font-weight:600; font-size:0.85rem; margin-bottom:0.5rem; display:block;">${i?`اختيار الفئة`:`Select Category`}</label>
                      
                      <div class="categories-list-scroll">
                        ${p}
                      </div>
                    </div>
                  </div>



                  <!-- Section 5: Images -->
                  <div class="form-section-card">
                    <div class="card-header">
                      <span class="section-icon">🖼️</span>
                      <h5>${i?`صور المنتج`:`Product Images`}</h5>
                    </div>
                    <div class="card-body">
                      <p class="section-desc">${i?`رفع صور عالية الجودة للمنتج`:`Upload high quality product images`}</p>
                      <div class="upload-dropzone" id="image-upload-zone">
                        <div class="upload-icon">📤</div>
                        <p>${i?`اسحب وأفلت الصور هنا أو انقر لتوليد صورة عشوائية فاخرة`:`Drag & drop images here or click to auto-generate a luxury comforter photo`}</p>
                        <small>${i?`الحد الأقصى لحجم الملف 5 ميجابايت`:`Max file size 5MB`}</small>
                        
                        <!-- Browse local file button -->
                        <div style="margin-top: 1rem;">
                          <button type="button" class="btn btn-secondary" id="crud-browse-btn" style="padding: 0.4rem 1.5rem; font-size: 0.8rem; font-weight: 600; display: inline-flex; align-items: center; gap: 0.4rem;">
                            📂 ${i?`تصفح من جهازك`:`Browse from computer`}
                          </button>
                          <input type="file" id="crud-file-input" accept="image/*" multiple style="display:none;">
                        </div>

                        <!-- Image Preview Container -->
                        <div id="image-preview-container" style="display:none; margin-top: 1.25rem; display: flex; flex-wrap: wrap; gap: 0.75rem; justify-content: center; width: 100%;">
                        </div>

                        <input type="hidden" id="crud-image" value="">
                      </div>
                    </div>
                  </div>

                  <!-- Submit Actions -->
                  <div class="form-actions-bar">
                    <button type="button" id="cancel-crud-btn" class="btn btn-secondary">${i?`إلغاء`:`Cancel`}</button>
                    <button type="submit" class="btn btn-primary">${i?`حفظ المنتج`:`Save Product`}</button>
                  </div>
                </div>

                <!-- Left Sidebar Column (Tips & Status) -->
                <div class="form-sidebar-col">
                  <!-- Top Status Widget -->
                  <div class="sidebar-widget">
                    <label>${i?`الحالة *`:`Status *`}</label>
                    <select id="crud-status-select" class="form-control" style="font-weight: 600;">
                      <option value="active">${i?`نشط`:`Active`}</option>
                      <option value="draft" selected>${i?`مسودة`:`Draft`}</option>
                    </select>
                  </div>

                  <!-- Tips Box Card -->
                  <div class="tips-box-card">
                    <h6>💡 ${i?`نصائح وإرشادات`:`Tips & Guidelines`}</h6>
                    <ul class="tips-list">
                      <li>${i?`استخدم صور عالية الجودة لتحسين المبيعات`:`Use high quality photos to improve sales.`}</li>
                      <li>${i?`اكتب أوصاف مفصلة بكلتا اللغتين`:`Write detailed descriptions in both languages.`}</li>
                      <li>${i?`حدد أسعار تنافسية بناء على أبحاث السوق`:`Set competitive prices based on market.`}</li>
                      <li>${i?`فعّل تنبيهات المخزون المنخفض لتجنب نفاد المخزون`:`Enable low stock warnings to avoid stockouts.`}</li>
                      <li>${i?`حسّن العناوين والأوصاف لمحركات البحث`:`Optimize titles/descriptions for search engines.`}</li>
                    </ul>
                  </div>
                </div>

              </div>
            </form>

            <!-- Products List Table -->
            <table class="admin-table">
              <thead>
                <tr>
                  <th>${i?`صورة`:`Image`}</th>
                  <th>SKU</th>
                  <th>${i?`الاسم`:`Title`}</th>
                  <th>${i?`التصنيف`:`Category`}</th>
                  <th>${i?`السعر`:`Price`}</th>
                  <th>${i?`المخزون`:`Stock`}</th>
                  <th>${i?`الإجراءات`:`Actions`}</th>
                </tr>
              </thead>
              <tbody>
                ${a.map(e=>`
                  <tr>
                    <td><img src="${e.image}" alt="${e.titleEn}" style="width:35px; height:45px; object-fit:cover; border-radius:3px;"></td>
                    <td><code>${e.sku}</code></td>
                    <td><strong>${i?e.titleAr:e.titleEn}</strong></td>
                    <td><span style="font-size:0.8rem; color:var(--text-muted);">${e.category.toUpperCase()}</span></td>
                    <td><span class="price">${e.price%1==0?e.price.toFixed(0):e.price.toFixed(3)} KWD</span></td>
                    <td>
                      ${e.stock===0?`<span style="color:var(--error-color); font-weight:600;">${i?`نفذت`:`Out`}</span>`:e.stock<5?`<span style="color:var(--warning-color); font-weight:600;"><span class="num">${e.stock}</span> (${i?`قليل`:`Low`})</span>`:`<span class="num">${e.stock}</span>`}
                    </td>
                    <td>
                      <div style="display:flex; gap:0.4rem;">
                        <button class="btn btn-secondary btn-sm edit-prod-btn" data-id="${e.id}">${i?`تعديل`:`Edit`}</button>
                        <button class="btn btn-secondary btn-sm delete-prod-btn" data-id="${e.id}" style="color:var(--error-color);">${i?`حذف`:`Delete`}</button>
                      </div>
                    </td>
                  </tr>
                `).join(``)}
              </tbody>
            </table>
          </div>

          <!-- Tab 3: Manage Orders Status -->
          <div class="admin-panel-view ${c===`orders`?`active`:``}" id="adm-orders">
            <h3>${i?`إدارة طلبات العملاء`:`Client Orders Log`}</h3>
            
            ${o.length===0?`
              <p style="color:var(--text-muted); font-size:0.95rem; margin-top:1.5rem;">${i?`لا توجد طلبات مسجلة بعد.`:`No orders submitted yet.`}</p>
            `:`
              <table class="admin-table">
                <thead>
                  <tr>
                    <th>${i?`رقم الطلب`:`Order ID`}</th>
                    <th>${i?`العميل`:`Customer`}</th>
                    <th>${i?`التاريخ`:`Date`}</th>
                    <th>${i?`الإجمالي`:`Total`}</th>
                    <th>${i?`طريقة الدفع`:`Payment`}</th>
                    <th>${i?`الحالة الحالية`:`Current Status`}</th>
                    <th>${i?`تغيير الحالة`:`Modify Status`}</th>
                  </tr>
                </thead>
                <tbody>
                  ${o.map(e=>`
                    <tr>
                      <td><strong class="id">#${e.id}</strong></td>
                      <td>
                        <div style="display:flex; flex-direction:column;">
                          <span>${e.shippingInfo.name}</span>
                          <span style="font-size:0.75rem; color:var(--text-muted);" class="num">${e.shippingInfo.phone}</span>
                        </div>
                      </td>
                      <td><span class="date">${e.date}</span></td>
                      <td><strong class="price">${e.total%1==0?e.total.toFixed(0):e.total.toFixed(3)} KWD</strong></td>
                      <td><span style="font-size:0.8rem;">${e.paymentMethod.toUpperCase()}</span></td>
                      <td><span class="badge-status ${e.status}">${i?x(e.status):b(e.status)}</span></td>
                      <td>
                        <!-- Status Update Quick Select -->
                        <select class="form-control admin-status-select" data-id="${e.id}" style="font-size:0.8rem; padding:0.25rem 0.5rem; width:120px;">
                          <option value="pending" ${e.status===`pending`?`selected`:``}>Processing</option>
                          <option value="shipped" ${e.status===`shipped`?`selected`:``}>Shipped</option>
                          <option value="delivered" ${e.status===`delivered`?`selected`:``}>Delivered</option>
                          <option value="cancelled" ${e.status===`cancelled`?`selected`:``}>Cancelled</option>
                        </select>
                      </td>
                    </tr>
                  `).join(``)}
                </tbody>
              </table>
            `}
          </div>

          <!-- Tab 4: Coupons and Promo codes -->
          <div class="admin-panel-view ${c===`coupons`?`active`:``}" id="adm-coupons">
            <h3>${i?`كوبونات الخصم الترويجية`:`Coupons & Promos`}</h3>
            
            <!-- Create Coupon Inline -->
            <div class="admin-section-box" style="margin-top: 1.5rem; background:var(--bg-secondary); padding: 1.5rem; border-radius:6px;">
              <h5>${i?`توليد كوبون خصم جديد`:`Generate New Coupon`}</h5>
              <form id="create-coupon-form" class="coupon-inline-form" style="display:grid; grid-template-columns: 2fr 1fr 1fr auto; gap:1rem; margin-top:1rem; align-items:end;">
                <div class="form-group" style="margin-bottom:0;">
                  <label>${i?`رمز الكوبون *`:`Coupon Code *`}</label>
                  <input type="text" id="new-coup-code" class="form-control" required placeholder="SAVE30" translate="no" style="padding:0.5rem;">
                </div>
                <div class="form-group" style="margin-bottom:0;">
                  <label>${i?`قيمة الخصم *`:`Value *`}</label>
                  <input type="text" inputmode="decimal" pattern="[0-9]*\\.?[0-9]*" id="new-coup-val" class="form-control number-input" translate="no" required style="padding:0.5rem;">
                </div>
                <div class="form-group" style="margin-bottom:0;">
                  <label>${i?`النوع *`:`Type *`}</label>
                  <select id="new-coup-type" class="form-control" style="padding:0.5rem;">
                    <option value="percent">Percent (%)</option>
                    <option value="fixed">Fixed Price (KWD)</option>
                  </select>
                </div>
                <button type="submit" class="btn btn-primary" style="height:38px;">${i?`توليد الكوبون`:`Create`}</button>
              </form>
            </div>

            <!-- Coupons List -->
            <table class="admin-table" style="margin-top: 2rem;">
              <thead>
                <tr>
                  <th>${i?`رمز الكوبون`:`Coupon Code`}</th>
                  <th>${i?`قيمة الخصم`:`Discount Value`}</th>
                  <th>${i?`نوع الخصم`:`Type`}</th>
                  <th>${i?`الإجراء`:`Action`}</th>
                </tr>
              </thead>
              <tbody>
                ${s.map(e=>`
                  <tr>
                    <td>🏷️ <strong>${e.code}</strong></td>
                    <td><span class="num">${e.discount}</span></td>
                    <td>${e.type===`percent`?`%`:`KWD`}</td>
                    <td>
                      <!-- Cannot delete default system test coupon directly for safety -->
                      <button class="btn-text-remove remove-coupon-btn" data-code="${e.code}">${i?`حذف الكوبون`:`Delete`}</button>
                    </td>
                  </tr>
                `).join(``)}
              </tbody>
            </table>
          </div>

          <!-- Tab 5: Manage Alternating Promo Banners -->
          <div class="admin-panel-view ${c===`banners`?`active`:``}" id="adm-banners">
            <h3>${i?`إدارة بنرات العروض الترويجية`:`Manage Promo Banners`}</h3>
            <p class="section-desc">${i?`قم بتعديل صور وروابط البنرات التناوبية في الصفحة الرئيسية`:`Update the alternating homepage banner images, titles and target categories.`}</p>
            
            <form id="update-banners-form" style="background:var(--bg-secondary); padding:2rem; border-radius:8px; border:1px solid var(--border-color); display:flex; flex-direction:column; gap:1.5rem;">
              ${r.state.bannerPairs.map((e,t)=>`
                <div class="banner-pair-box" style="border: 1px solid var(--border-color); padding: 1.5rem; border-radius: 6px; background: var(--bg-primary);">
                  <h5 style="margin-bottom:1rem; font-weight:700;">${i?`المجموعة الثنائية رقم ${t+1}`:`Banner Pair #${t+1}`}</h5>
                  <div style="display:grid; grid-template-columns: 1fr 1fr; gap:1.5rem;">
                    
                    <!-- Left Banner -->
                    <div style="display:flex; flex-direction:column; gap:0.75rem;">
                      <strong style="font-size:0.9rem;">${i?`البنر الأول (يسار / أعلى)`:`Banner 1`}</strong>
                      <div>
                        <label style="font-size:0.75rem; color:var(--text-muted);">${i?`العنوان بالعربية`:`Title (Arabic)`}</label>
                        <input type="text" class="form-control" name="banner-${t}-0-titleAr" value="${e[0].nameAr}">
                      </div>
                      <div>
                        <label style="font-size:0.75rem; color:var(--text-muted);">${i?`العنوان بالإنجليزية`:`Title (English)`}</label>
                        <input type="text" class="form-control" name="banner-${t}-0-titleEn" value="${e[0].nameEn}">
                      </div>
                      <div>
                        <label style="font-size:0.75rem; color:var(--text-muted);">${i?`رابط التصنيف (ID)`:`Category ID Link`}</label>
                        <input type="text" class="form-control" name="banner-${t}-0-id" value="${e[0].id}">
                      </div>
                      <div>
                        <label style="font-size:0.75rem; color:var(--text-muted); font-weight: 700;">${i?`صورة البنر (المقاس الموصى به: 570 × 260 بكسل)`:`Banner Image (Recommended size: 570x260 px)`}</label>
                        <div style="display: flex; gap: 0.5rem; align-items: center;">
                          <button type="button" class="btn btn-secondary btn-sm browse-banner-img-btn" data-target="banner-${t}-0-image" style="padding:0.4rem 0.8rem; font-size:0.78rem;">📁 ${i?`تصفح من الكمبيوتر`:`Browse File`}</button>
                          <span class="file-chosen-status" id="status-banner-${t}-0-image" style="font-size:0.75rem; color:var(--text-muted); overflow:hidden; text-overflow:ellipsis; white-space:nowrap; max-width:180px;">${e[0].image?e[0].image.startsWith(`data:`)?`Image uploaded`:e[0].image.substring(e[0].image.lastIndexOf(`/`)+1):i?`لم يتم اختيار ملف`:`No file chosen`}</span>
                        </div>
                        <input type="hidden" name="banner-${t}-0-image" id="banner-${t}-0-image" value="${e[0].image}">
                        <div style="display:none;" data-width="570" data-height="260">Hidden Banner Dimensions Info</div>
                      </div>
                    </div>

                    <!-- Right Banner -->
                    <div style="display:flex; flex-direction:column; gap:0.75rem;">
                      <strong style="font-size:0.9rem;">${i?`البنر الثاني (يمين / أسفل)`:`Banner 2`}</strong>
                      <div>
                        <label style="font-size:0.75rem; color:var(--text-muted);">${i?`العنوان بالعربية`:`Title (Arabic)`}</label>
                        <input type="text" class="form-control" name="banner-${t}-1-titleAr" value="${e[1].nameAr}">
                      </div>
                      <div>
                        <label style="font-size:0.75rem; color:var(--text-muted);">${i?`العنوان بالإنجليزية`:`Title (English)`}</label>
                        <input type="text" class="form-control" name="banner-${t}-1-titleEn" value="${e[1].nameEn}">
                      </div>
                      <div>
                        <label style="font-size:0.75rem; color:var(--text-muted);">${i?`رابط التصنيف (ID)`:`Category ID Link`}</label>
                        <input type="text" class="form-control" name="banner-${t}-1-id" value="${e[1].id}">
                      </div>
                      <div>
                        <label style="font-size:0.75rem; color:var(--text-muted); font-weight: 700;">${i?`صورة البنر (المقاس الموصى به: 570 × 260 بكسل)`:`Banner Image (Recommended size: 570x260 px)`}</label>
                        <div style="display: flex; gap: 0.5rem; align-items: center;">
                          <button type="button" class="btn btn-secondary btn-sm browse-banner-img-btn" data-target="banner-${t}-1-image" style="padding:0.4rem 0.8rem; font-size:0.78rem;">📁 ${i?`تصفح من الكمبيوتر`:`Browse File`}</button>
                          <span class="file-chosen-status" id="status-banner-${t}-1-image" style="font-size:0.75rem; color:var(--text-muted); overflow:hidden; text-overflow:ellipsis; white-space:nowrap; max-width:180px;">${e[1].image?e[1].image.startsWith(`data:`)?`Image uploaded`:e[1].image.substring(e[1].image.lastIndexOf(`/`)+1):i?`لم يتم اختيار ملف`:`No file chosen`}</span>
                        </div>
                        <input type="hidden" name="banner-${t}-1-image" id="banner-${t}-1-image" value="${e[1].image}">
                        <div style="display:none;" data-width="570" data-height="260">Hidden Banner Dimensions Info</div>
                      </div>
                    </div>

                  </div>
                </div>
              `).join(``)}
              <button type="submit" class="btn btn-primary" style="align-self: flex-start; padding: 0.75rem 2rem; margin-top: 1rem;">${i?`حفظ تعديلات البنرات`:`Save Banners`}</button>
            </form>
          </div>

          <!-- Tab 6: Manage Hero Slider Slides -->
          <div class="admin-panel-view ${c===`slides`?`active`:``}" id="adm-slides">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1rem; flex-wrap:wrap; gap:1rem;">
              <div>
                <h3>${i?`إدارة السلايدر الرئيسي`:`Manage Hero Slides`}</h3>
                <p class="section-desc" style="margin-bottom:0;">${i?`تعديل الصور، النصوص وأزرار التوجيه للسلايدر المعروض في الصفحة الرئيسية`:`Modify banner image slides, captions, action links and translations for the home hero carousel.`}</p>
              </div>
              <button type="button" id="add-new-slide-btn" class="btn btn-primary" style="padding: 0.6rem 1.5rem; font-size: 0.85rem; font-weight: 700;">➕ ${i?`إضافة شريحة جديدة`:`Add New Slide`}</button>
            </div>
            
            <form id="update-slides-form" style="background:var(--bg-secondary); padding:2rem; border-radius:8px; border:1px solid var(--border-color); display:flex; flex-direction:column; gap:1.5rem;">
              ${r.state.homeSlides.map((e,t)=>`
                <div class="banner-pair-box" style="border: 1px solid var(--border-color); padding: 1.5rem; border-radius: 6px; background: var(--bg-primary); position:relative;">
                  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1rem; border-bottom:1px solid var(--border-light); padding-bottom:0.5rem;">
                    <h5 style="margin:0; font-weight:700;">${i?`الشريحة رقم ${t+1}`:`Slide #${t+1}`}</h5>
                    ${r.state.homeSlides.length>1?`
                      <button type="button" class="btn-text-remove remove-slide-btn" data-index="${t}" style="font-size:0.8rem; font-weight:700; color:var(--error-color); cursor:pointer; background:none; border:none; display:flex; align-items:center; gap:0.25rem;">
                        🗑️ ${i?`إزالة هذه الشريحة`:`Remove Slide`}
                      </button>
                    `:``}
                  </div>
                  <div style="display:grid; grid-template-columns: 1fr 1fr; gap:1.5rem;">
                    
                    <!-- Text Translations (Arabic) -->
                    <div style="display:flex; flex-direction:column; gap:0.75rem;">
                      <strong style="font-size:0.9rem; color:var(--accent-gold);">${i?`المحتوى باللغة العربية`:`Arabic Content`}</strong>
                      <div>
                        <label style="font-size:0.75rem; color:var(--text-muted);">${i?`العنوان الفرعي`:`Subtitle`}</label>
                        <input type="text" class="form-control" name="slide-${t}-subtitleAr" value="${e.subtitleAr}">
                      </div>
                      <div>
                        <label style="font-size:0.75rem; color:var(--text-muted);">${i?`العنوان الرئيسي`:`Main Title`}</label>
                        <input type="text" class="form-control" name="slide-${t}-titleAr" value="${e.titleAr}">
                      </div>
                      <div>
                        <label style="font-size:0.75rem; color:var(--text-muted);">${i?`الوصف التوضيحي`:`Description`}</label>
                        <textarea class="form-control" rows="2" name="slide-${t}-descAr">${e.descAr}</textarea>
                      </div>
                      <div>
                        <label style="font-size:0.75rem; color:var(--text-muted);">${i?`نص زر التوجيه`:`Button Text`}</label>
                        <input type="text" class="form-control" name="slide-${t}-btnTextAr" value="${e.btnTextAr}">
                      </div>
                    </div>

                    <!-- Text Translations (English) & Link/Image settings -->
                    <div style="display:flex; flex-direction:column; gap:0.75rem;">
                      <strong style="font-size:0.9rem; color:var(--accent-gold);">${i?`الإعدادات والمحتوى الإنجليزي`:`Settings & English Content`}</strong>
                      <div>
                        <label style="font-size:0.75rem; color:var(--text-muted);">${i?`العنوان الفرعي (En)`:`Subtitle (En)`}</label>
                        <input type="text" class="form-control" name="slide-${t}-subtitleEn" value="${e.subtitleEn}">
                      </div>
                      <div>
                        <label style="font-size:0.75rem; color:var(--text-muted);">${i?`العنوان الرئيسي (En)`:`Main Title (En)`}</label>
                        <input type="text" class="form-control" name="slide-${t}-titleEn" value="${e.titleEn}">
                      </div>
                      <div>
                        <label style="font-size:0.75rem; color:var(--text-muted);">${i?`الوصف التوضيحي (En)`:`Description (En)`}</label>
                        <textarea class="form-control" rows="2" name="slide-${t}-descEn">${e.descEn}</textarea>
                      </div>
                      <div>
                        <label style="font-size:0.75rem; color:var(--text-muted);">${i?`نص زر التوجيه (En)`:`Button Text (En)`}</label>
                        <input type="text" class="form-control" name="slide-${t}-btnTextEn" value="${e.btnTextEn}">
                      </div>
                    </div>

                  </div>

                  <!-- Link & Image Fields spanned -->
                  <div style="display:grid; grid-template-columns: 1fr 2fr; gap:1.5rem; margin-top:1rem; border-top:1px solid var(--border-light); padding-top:1rem;">
                    <div>
                      <label style="font-size:0.75rem; color:var(--text-muted); font-weight:700;">${i?`رابط التوجيه عند النقر (مثال: #/category?category=bath)`:`Action Link URL`}</label>
                      <input type="text" class="form-control" name="slide-${t}-link" value="${e.link}">
                    </div>
                    <div>
                      <label style="font-size:0.75rem; color:var(--text-muted); font-weight:700;">${i?`صورة الشريحة (المقاس الموصى به: 1920 × 580 بكسل)`:`Slide Image (Recommended size: 1920x580 px)`}</label>
                      <div style="display: flex; gap: 0.5rem; align-items: center;">
                        <button type="button" class="btn btn-secondary btn-sm browse-slide-img-btn" data-target="slide-${t}-image" style="padding:0.4rem 0.8rem; font-size:0.78rem;">📁 ${i?`تصفح من الكمبيوتر`:`Browse File`}</button>
                        <span class="file-chosen-status" id="status-slide-${t}-image" style="font-size:0.75rem; color:var(--text-muted); overflow:hidden; text-overflow:ellipsis; white-space:nowrap; max-width:280px;">${e.image?e.image.startsWith(`data:`)?`Image uploaded`:e.image.substring(e.image.lastIndexOf(`/`)+1):i?`لم يتم اختيار ملف`:`No file chosen`}</span>
                      </div>
                      <input type="hidden" name="slide-${t}-image" id="slide-${t}-image" value="${e.image}">
                      <div style="display:none;" data-width="1920" data-height="580">Hidden Hero Slide Dimensions Info</div>
                    </div>
                  </div>

                </div>
              `).join(``)}
              <button type="submit" class="btn btn-primary" style="align-self: flex-start; padding: 0.75rem 2rem;">${i?`حفظ تعديلات السلايدر`:`Save Hero Slides`}</button>
            </form>
          </div>

        </main>
      </div>
    </div>

    <style>
      .admin-header { padding: 2rem 0; border-bottom: 1px solid var(--border-color); }
      .admin-header h1 { font-family: 'Playfair Display', serif; font-size: 2.2rem; }
      .admin-header p { color: var(--text-muted); font-size: 0.95rem; margin-top: 0.25rem; }

      .admin-section-header-row { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem; }
      .admin-section-box { background: var(--bg-secondary); border: 1px solid var(--border-light); border-radius: 6px; padding: 1.8rem; margin-top: 2rem; }
      .admin-section-box h5 { font-size: 1.15rem; font-weight: 600; margin-bottom: 1.2rem; }

      /* Admin Tables custom */
      .admin-table { width: 100%; border-collapse: collapse; margin-top: 1rem; font-size: 0.9rem; text-align: left; }
      [dir="rtl"] .admin-table { text-align: right; }
      .admin-table th { background-color: var(--bg-secondary); font-weight: 600; padding: 0.8rem 1rem; border-bottom: 2px solid var(--border-color); }
      .admin-table td { padding: 1rem; border-bottom: 1px solid var(--border-light); color: var(--text-secondary); }
      .admin-table tr:hover td { background-color: var(--bg-secondary); }

      /* Coupon Form Grid Mobile fallback */
      @media (max-width: 768px) {
        .coupon-inline-form { grid-template-columns: 1fr !important; gap: 0.8rem !important; }
        .coupon-inline-form button { width: 100%; }
      }

      /* High-fidelity Product Form Styles */
      .new-admin-form {
        background: var(--bg-secondary);
        border: 1px solid var(--border-color);
        border-radius: 8px;
        padding: 2rem;
        margin-top: 1.5rem;
      }
      .product-type-cards {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1.25rem;
        margin-bottom: 2rem;
      }
      .type-card {
        background: var(--bg-primary);
        border: 1.5px solid var(--border-color);
        border-radius: 8px;
        padding: 1.2rem;
        cursor: pointer;
        display: flex;
        align-items: flex-start;
        gap: 1rem;
        transition: var(--transition-smooth);
        position: relative;
      }
      .type-card:hover {
        border-color: var(--accent-gold);
        transform: translateY(-2px);
      }
      .type-card.active {
        border-color: var(--accent-gold);
        background-color: var(--accent-gold-light);
        box-shadow: 0 4px 15px rgba(197, 168, 128, 0.1);
      }
      .radio-indicator {
        width: 18px;
        height: 18px;
        border-radius: 50%;
        border: 2px solid var(--text-muted);
        display: inline-block;
        flex-shrink: 0;
        margin-top: 2px;
        position: relative;
      }
      .type-card.active .radio-indicator {
        border-color: var(--accent-gold);
      }
      .type-card.active .radio-indicator::after {
        content: '';
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: var(--accent-gold);
        position: absolute;
        top: 50%; left: 50%;
        transform: translate(-50%, -50%);
      }
      .type-info label {
        font-weight: 700;
        font-size: 0.95rem;
        color: var(--text-primary);
        cursor: pointer;
        display: block;
        margin-bottom: 0.3rem;
      }
      .type-info p {
        font-size: 0.75rem;
        color: var(--text-secondary);
        line-height: 1.4;
        margin: 0;
      }

      .form-row-2 {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1.25rem;
      }
      .form-row-3 {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 1.25rem;
      }

      .form-body-grid {
        display: grid;
        grid-template-columns: 3fr 1.1fr;
        gap: 2rem;
      }
      .form-main-col {
        display: flex;
        flex-direction: column;
        gap: 1.8rem;
      }
      .form-sidebar-col {
        display: flex;
        flex-direction: column;
        gap: 1.8rem;
      }
      .form-section-card {
        background: var(--bg-primary);
        border: 1px solid var(--border-light);
        border-radius: 8px;
        box-shadow: var(--card-shadow);
        padding: 1.8rem;
      }
      .form-section-card .card-header {
        display: flex;
        align-items: center;
        gap: 0.8rem;
        border-bottom: 1px solid var(--border-light);
        padding-bottom: 1rem;
        margin-bottom: 1.5rem;
      }
      .form-section-card .card-header h5 {
        font-size: 1.05rem;
        font-weight: 700;
        margin: 0;
        color: var(--text-primary);
      }
      .form-section-card .card-header .section-icon {
        font-size: 1.25rem;
      }
      .input-subtitle {
        font-size: 0.75rem;
        color: var(--text-muted);
        margin-top: 0.25rem;
        display: block;
      }
      .section-desc {
        font-size: 0.8rem;
        color: var(--text-muted);
        margin-bottom: 1rem;
      }

      /* Categories Checklist scrollable */
      .categories-list-scroll {
        border: 1px solid var(--border-color);
        border-radius: 6px;
        max-height: 240px;
        overflow-y: auto;
        background: var(--bg-secondary);
      }
      .category-list-item {
        display: flex;
        align-items: center;
        gap: 0.8rem;
        padding: 0.75rem 1rem;
        border-bottom: 1px solid var(--border-light);
      }
      .category-list-item:last-child {
        border-bottom: none;
      }
      .category-list-item input[type="checkbox"] {
        width: 18px;
        height: 18px;
        accent-color: var(--accent-gold);
        cursor: pointer;
      }
      .category-list-item label {
        display: flex;
        align-items: center;
        gap: 1rem;
        flex: 1;
        cursor: pointer;
        user-select: none;
      }
      .cat-thumb {
        width: 40px;
        height: 40px;
        border-radius: 4px;
        object-fit: cover;
        border: 1px solid var(--border-color);
      }
      .cat-meta {
        display: flex;
        flex-direction: column;
      }
      .cat-meta .title {
        font-size: 0.88rem;
        font-weight: 700;
        color: var(--text-primary);
      }
      .cat-meta .en {
        font-size: 0.75rem;
        color: var(--text-muted);
      }
      .subcat-pill {
        font-size: 0.7rem;
        background: var(--accent-gold-light);
        color: var(--accent-gold);
        border: 1px solid rgba(197, 168, 128, 0.2);
        padding: 0.2rem 0.6rem;
        border-radius: 12px;
        font-weight: 600;
        margin-inline-start: auto;
      }

      /* Tags widgets */
      .tags-input-wrapper {
        display: flex;
        align-items: center;
        gap: 1rem;
      }
      .manage-tags-link {
        font-size: 0.8rem;
        color: var(--accent-gold);
        text-decoration: none;
        font-weight: 600;
        white-space: nowrap;
      }
      .manage-tags-link:hover {
        text-decoration: underline;
      }
      .tags-pills-list {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        margin-top: 1rem;
      }
      .tag-pill {
        background: var(--bg-secondary);
        border: 1px solid var(--border-color);
        color: var(--text-secondary);
        font-size: 0.78rem;
        font-weight: 500;
        padding: 0.3rem 0.7rem;
        border-radius: 4px;
        display: inline-flex;
        align-items: center;
        gap: 0.4rem;
      }
      .tag-pill .remove-tag {
        cursor: pointer;
        color: var(--error-color);
        font-weight: 700;
      }

      /* Image dropzone widget */
      .upload-dropzone {
        border: 2px dashed var(--border-color);
        background: var(--bg-secondary);
        border-radius: 8px;
        padding: 2.2rem 1.5rem;
        text-align: center;
        cursor: pointer;
        transition: var(--transition-smooth);
      }
      .upload-dropzone:hover {
        border-color: var(--accent-gold);
        background: var(--bg-primary);
      }
      .upload-dropzone.highlight {
        border-color: var(--accent-gold);
        background: var(--bg-primary);
      }
      .upload-icon {
        font-size: 2.2rem;
        margin-bottom: 0.8rem;
      }
      .upload-dropzone p {
        font-size: 0.85rem;
        font-weight: 500;
        margin-bottom: 0.2rem;
      }
      .upload-dropzone small {
        font-size: 0.75rem;
        color: var(--text-muted);
        display: block;
      }

      /* Sidebar widgets */
      .sidebar-widget {
        background: var(--bg-primary);
        border: 1px solid var(--border-light);
        border-radius: 8px;
        padding: 1.25rem;
        box-shadow: var(--card-shadow);
      }
      .sidebar-widget label {
        font-size: 0.8rem;
        font-weight: 700;
        color: var(--text-muted);
        text-transform: uppercase;
        display: block;
        margin-bottom: 0.5rem;
      }
      .tips-box-card {
        background: #fdfaf2;
        border: 1px solid #f3e5ab;
        border-radius: 8px;
        padding: 1.5rem;
        box-shadow: var(--card-shadow);
      }
      .dark-theme .tips-box-card {
        background: #252219;
        border-color: #d4af37;
      }
      .tips-box-card h6 {
        font-size: 0.92rem;
        font-weight: 700;
        color: var(--warning-color);
        margin-bottom: 0.8rem;
      }
      .tips-list {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        gap: 0.6rem;
      }
      .tips-list li {
        font-size: 0.78rem;
        color: var(--text-secondary);
        line-height: 1.5;
        position: relative;
        padding-inline-start: 1rem;
      }
      .tips-list li::before {
        content: '•';
        color: var(--accent-gold);
        position: absolute;
        left: 0;
      }
      [dir="rtl"] .tips-list li::before {
        left: auto;
        right: 0;
      }
      .form-actions-bar {
        display: flex;
        justify-content: flex-end;
        gap: 1rem;
        border-top: 1px solid var(--border-color);
        padding-top: 1.5rem;
        margin-top: 1.5rem;
      }

      @media (max-width: 992px) {
        .form-body-grid {
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }
        .product-type-cards {
          grid-template-columns: 1fr;
          gap: 0.8rem;
        }
      }

      /* Premium Variations switcher & tags styling */
      .var-tab-btn.active {
        color: var(--accent-gold) !important;
        border-bottom-color: var(--accent-gold) !important;
      }
      .attr-tag {
        background: var(--bg-primary);
        border: 1px solid var(--border-color);
        border-radius: 4px;
        padding: 0.25rem 0.6rem;
        font-size: 0.8rem;
        font-weight: 600;
        display: inline-flex;
        align-items: center;
        gap: 0.4rem;
        box-shadow: var(--card-shadow);
      }
      .attr-tag .remove {
        color: var(--error-color);
        cursor: pointer;
        font-weight: 700;
        font-size: 0.9rem;
      }

      /* Explicit Tab Isolation Rules */
      .admin-panel-view {
        display: none !important;
      }
      .admin-panel-view.active {
        display: block !important;
      }
    </style>
  `}function b(e){return e===`pending`?`Processing`:e===`shipped`?`Shipped`:e===`delivered`?`Delivered`:`Cancelled`}function x(e){return e===`pending`?`قيد التجهيز`:e===`shipped`?`تم الشحن`:e===`delivered`?`تم التوصيل`:`ملغي`}y.onMount=(e,t)=>{let n=r.state.lang===`ar`,i=document.querySelector(`.admin-page-container`);if(!i)return;let a=e=>{let t=[`٠`,`١`,`٢`,`٣`,`٤`,`٥`,`٦`,`٧`,`٨`,`٩`];return e.replace(/[٠-٩]/g,e=>t.indexOf(e))},o=(e,t,i=600,a=800)=>{let o=new FileReader;o.onload=e=>{let o=new Image;o.onload=()=>{let e=document.createElement(`canvas`),n=o.width,r=o.height,s=i,c=a;n>r?n>s&&(r=Math.round(r*s/n),n=s):r>c&&(n=Math.round(n*c/r),r=c),e.width=n,e.height=r,e.getContext(`2d`).drawImage(o,0,0,n,r),t(e.toDataURL(`image/jpeg`,.85))},o.onerror=()=>{r.showToast(n?`عذراً، فشل قراءة ملف الصورة.`:`Failed to read image file.`,`error`)},o.src=e.target.result},o.onerror=()=>{r.showToast(n?`عذراً، فشل قراءة الملف.`:`Failed to read file.`,`error`)},o.readAsDataURL(e)},s=e=>{let t=e.target.selectionStart,n=e.target.selectionEnd,r=e.target.value,i=a(r);r!==i&&(e.target.value=i,e.target.setSelectionRange(t,n))};i.querySelectorAll(`.number-input`).forEach(e=>{e.addEventListener(`input`,s)});let c=i.querySelectorAll(`.type-card`);c.forEach(e=>{e.addEventListener(`click`,()=>{c.forEach(e=>e.classList.remove(`active`)),e.classList.add(`active`);let t=e.querySelector(`input[type="radio"]`);t&&(t.checked=!0);let n=e.dataset.type,r=document.getElementById(`crud-type`);r&&(r.value=n===`simple`||n===`multiple`?`simple`:`variable`);let i=document.getElementById(`pricing-inventory-section`),a=document.getElementById(`variable-attributes-section`);n===`variable`?(i&&(i.style.display=`none`),a&&(a.style.display=`block`),document.getElementById(`crud-price`).removeAttribute(`required`),document.getElementById(`crud-stock`).removeAttribute(`required`)):(i&&(i.style.display=`block`),a&&(a.style.display=`none`),document.getElementById(`crud-price`).setAttribute(`required`,`required`),document.getElementById(`crud-stock`).setAttribute(`required`,`required`))})});let l=document.getElementById(`show-add-product-modal`),u=document.getElementById(`product-crud-form`),d=document.getElementById(`cancel-crud-btn`);l&&u&&l.addEventListener(`click`,()=>{document.getElementById(`form-action-title`).innerText=n?`إدخال منتج جديد`:`New Product Details`,u.reset(),document.getElementById(`crud-prod-id`).value=``,document.getElementById(`crud-image`).value=``,R=[],z();let e=document.getElementById(`variable-colors`),t=document.getElementById(`variable-sizes`);e&&(e.value=``),t&&(t.value=``),g=[],_=[],v=[];let r=document.getElementById(`added-colors-list`),a=document.getElementById(`added-sizes-list`);r&&(r.innerHTML=``),a&&(a.innerHTML=``);let o=document.getElementById(`var-matrix-tbody`);o&&(o.innerHTML=``);let s=document.getElementById(`variations-table-wrapper`);s&&(s.style.display=`none`);let l=document.getElementById(`pricing-inventory-section`),d=document.getElementById(`variable-attributes-section`);l&&(l.style.display=`block`),d&&(d.style.display=`none`),document.getElementById(`crud-price`).setAttribute(`required`,`required`),document.getElementById(`crud-stock`).setAttribute(`required`,`required`),i.querySelectorAll(`input[name="categories_select"]`).forEach(e=>e.checked=!1),m=[],h(),c.forEach(e=>e.classList.remove(`active`));let f=i.querySelector(`.type-card[data-type="simple"]`);f&&f.classList.add(`active`),u.style.display=`block`}),d&&u&&d.addEventListener(`click`,()=>{u.reset(),document.getElementById(`crud-image`).value=``,R=[],z(),u.style.display=`none`});let f=document.getElementById(`crud-tags`),p=document.getElementById(`crud-tags-list`),m=[],h=()=>{p&&(p.innerHTML=m.map((e,t)=>`
      <span class="tag-pill">
        ${e}
        <span class="remove-tag" data-index="${t}">&times;</span>
      </span>
    `).join(``),p.querySelectorAll(`.remove-tag`).forEach(e=>{e.addEventListener(`click`,()=>{let t=parseInt(e.dataset.index);m.splice(t,1),h()})}))};f&&f.addEventListener(`keydown`,e=>{if(e.key===`Enter`){e.preventDefault();let t=f.value.trim();t&&!m.includes(t)&&(m.push(t),h(),f.value=``)}});let g=[],_=[],v=[],y=document.getElementById(`attr-enable-color`),b=document.getElementById(`attr-enable-size`),x=document.getElementById(`attr-color-inputs-area`),T=document.getElementById(`attr-size-inputs-area`);y&&x&&y.addEventListener(`change`,()=>{x.style.display=y.checked?`block`:`none`,A()}),b&&T&&b.addEventListener(`change`,()=>{T.style.display=b.checked?`block`:`none`,A()});let E=document.getElementById(`add-color-val-btn`);E&&E.addEventListener(`click`,()=>{let e=document.getElementById(`attr-color-val`).value.trim(),t=document.getElementById(`attr-color-picker`).value;if(e){if(g.some(t=>t.value===e)){r.showToast(n?`تم إضافة هذا اللون بالفعل!`:`Color already added!`,`error`);return}g.push({value:e,code:t}),document.getElementById(`attr-color-val`).value=``,D(),A()}});let D=()=>{let e=document.getElementById(`added-colors-list`);e&&(e.innerHTML=g.map((e,t)=>`
      <span class="attr-tag" style="margin: 2px;">
        <span style="width:12px; height:12px; border-radius:50%; background-color:${e.code}; display:inline-block; border:1px solid #ccc; vertical-align:middle;"></span>
        <span style="font-size:0.8rem; margin:0 4px; vertical-align:middle;">${e.value}</span>
        <span class="remove" data-index="${t}" style="cursor:pointer; color:var(--error-color); font-weight:700; margin-inline-start:4px; vertical-align:middle;">&times;</span>
      </span>
    `).join(``),e.querySelectorAll(`.remove`).forEach(e=>{e.addEventListener(`click`,()=>{let t=parseInt(e.dataset.index);g.splice(t,1),D(),A()})}))},O=document.getElementById(`add-size-val-btn`);O&&O.addEventListener(`click`,()=>{let e=document.getElementById(`attr-size-val`).value.trim();e&&(e.split(`,`).map(e=>e.trim()).filter(Boolean).forEach(e=>{_.includes(e)||_.push(e)}),document.getElementById(`attr-size-val`).value=``,k(),A())});let k=()=>{let e=document.getElementById(`added-sizes-list`);e&&(e.innerHTML=_.map((e,t)=>`
      <span class="attr-tag" style="margin: 2px;">
        <span style="font-size:0.8rem; vertical-align:middle;">${e}</span>
        <span class="remove" data-index="${t}" style="cursor:pointer; color:var(--error-color); font-weight:700; margin-inline-start:4px; vertical-align:middle;">&times;</span>
      </span>
    `).join(``),e.querySelectorAll(`.remove`).forEach(e=>{e.addEventListener(`click`,()=>{let t=parseInt(e.dataset.index);_.splice(t,1),k(),A()})}))},A=()=>{let e=0,t=y&&y.checked?g.length:0,r=b&&b.checked?_.length:0;t>0&&r>0?e=t*r:t>0?e=t:r>0&&(e=r);let i=document.getElementById(`variations-combos-count`);i&&(i.innerText=n?`${e} تركيبة ممكنة`:`${e} possible combinations`);let a=document.getElementById(`attribs-summary-help`);return a&&(a.innerText=n?`سيتم إنشاء ${e} شكل عند نشر المنتج.`:`${e} variations will be created when publishing.`),e},j=i.querySelectorAll(`.var-tab-btn`),M=i.querySelectorAll(`.var-panel`),N=e=>{j.forEach(t=>{t.classList.toggle(`active`,t.dataset.tab===e)}),M.forEach(t=>{t.style.display=t.id===`var-panel-${e}`?`block`:`none`})};j.forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.tab;t===`preview`&&F(),N(t)})});let P=document.getElementById(`var-preview-trigger-btn`);P&&P.addEventListener(`click`,()=>{F(),N(`preview`)});let F=()=>{let e=y&&y.checked?g:[],t=b&&b.checked?_:[],i=parseInt(document.getElementById(`var-default-stock`).value)||100;if(e.length===0&&t.length===0){r.showToast(n?`يرجى إدخال وتفعيل صفة واحدة على الأقل (ألوان أو مقاسات)!`:`Please configure and enable at least one attribute!`,`error`);return}let a=[];e.length>0&&t.length>0?e.forEach(e=>{t.forEach(t=>{a.push({color:e,size:t})})}):e.length>0?e.forEach(e=>{a.push({color:e,size:``})}):t.forEach(e=>{a.push({color:null,size:e})}),v=a.map(e=>({colorEn:e.color?e.color.value:null,colorAr:e.color?e.color.value:null,colorCode:e.color?e.color.code:null,size:e.size,price:``,salePrice:``,stock:i,image:``,sku:``})),I()},I=()=>{let e=document.getElementById(`var-matrix-tbody`);if(!e)return;e.innerHTML=``;let t=document.getElementById(`crud-sku`).value.trim()||`VAR`;v.forEach((r,i)=>{let a=[r.colorEn?`${n?`اللون:`:`Color:`} ${r.colorEn}`:``,r.size?`${n?`المقاس:`:`Size:`} ${r.size}`:``].filter(Boolean).map(e=>`<span style="font-size:0.75rem; background:var(--accent-gold-light); color:var(--accent-gold); padding:0.15rem 0.4rem; border-radius:10px; font-weight:600; margin-inline-end:0.25rem;">${e}</span>`).join(``),o=`${t}-${r.colorEn?r.colorEn.toLowerCase():``}${r.size?`-`+r.size.toLowerCase():``}`;r.sku=o;let s=document.createElement(`tr`);s.innerHTML=`
        <td style="padding:0.5rem; vertical-align:middle;">
          <div style="display:flex; align-items:center; gap:0.2rem; flex-wrap:wrap;">
            ${a}
          </div>
        </td>
        <td style="padding:0.5rem; vertical-align:middle;">
          <input type="text" class="form-control matrix-sku" data-index="${i}" value="${o}" style="padding:0.25rem; font-size:0.8rem; width:110px;" translate="no">
        </td>
        <td style="padding:0.5rem; vertical-align:middle;">
          <div style="display:flex; align-items:center; gap:0.2rem;">
            <span>$</span>
            <input type="text" inputmode="decimal" pattern="[0-9]*\\.?[0-9]*" class="form-control matrix-price number-input" data-index="${i}" value="${r.price}" placeholder="22.50" style="padding:0.25rem; font-size:0.8rem; width:65px;" translate="no" required>
          </div>
        </td>
        <td style="padding:0.5rem; vertical-align:middle;">
          <input type="text" inputmode="decimal" pattern="[0-9]*\\.?[0-9]*" class="form-control matrix-saleprice number-input" data-index="${i}" value="${r.salePrice}" placeholder="19.99" style="padding:0.25rem; font-size:0.8rem; width:65px;" translate="no">
        </td>
        <td style="padding:0.5rem; vertical-align:middle;">
          <input type="text" inputmode="numeric" pattern="[0-9]*" class="form-control matrix-stock number-input" data-index="${i}" value="${r.stock}" style="padding:0.25rem; font-size:0.8rem; width:55px;" translate="no" required>
        </td>
        <td style="padding:0.5rem; vertical-align:middle; text-align:center;">
          <div style="display:flex; align-items:center; justify-content:center; gap:0.4rem;">
            <button type="button" class="btn btn-secondary btn-sm matrix-upload-btn" data-index="${i}" style="padding:0.25rem 0.5rem; font-size:0.75rem; font-weight:600;">
              ${n?`اختر ملف`:`Choose file`}
            </button>
            <input type="file" class="matrix-file-input" data-index="${i}" accept="image/*" style="display:none;">
            <div class="matrix-img-preview-box" data-index="${i}" style="width:30px; height:35px; border-radius:3px; border:1px solid var(--border-color); overflow:hidden; display:${r.image?`block`:`none`};">
              <img src="${r.image||``}" style="width:100%; height:100%; object-fit:cover;">
            </div>
          </div>
        </td>
      `,e.appendChild(s)}),e.querySelectorAll(`.matrix-sku`).forEach(e=>{e.addEventListener(`input`,t=>{let n=parseInt(e.dataset.index);v[n].sku=t.target.value})}),e.querySelectorAll(`.matrix-price`).forEach(e=>{e.addEventListener(`input`,t=>{let n=parseInt(e.dataset.index);v[n].price=t.target.value,L()})}),e.querySelectorAll(`.matrix-saleprice`).forEach(e=>{e.addEventListener(`input`,t=>{let n=parseInt(e.dataset.index);v[n].salePrice=t.target.value})}),e.querySelectorAll(`.matrix-stock`).forEach(e=>{e.addEventListener(`input`,t=>{let n=parseInt(e.dataset.index);v[n].stock=parseInt(t.target.value)||0,L()})}),e.querySelectorAll(`.matrix-upload-btn`).forEach(t=>{let i=parseInt(t.dataset.index),a=e.querySelector(`.matrix-file-input[data-index="${i}"]`);t.addEventListener(`click`,()=>a.click()),a.addEventListener(`change`,t=>{let a=t.target.files[0];a&&o(a,t=>{v[i].image=t;let a=e.querySelector(`.matrix-img-preview-box[data-index="${i}"]`),o=a.querySelector(`img`);o.src=t,a.style.display=`block`,r.showToast(n?`تم رفع صورة هذا الشكل بنجاح!`:`Variation image uploaded!`,`success`)})})}),L()},L=()=>{let e=v.length,t=v.reduce((e,t)=>e+(t.stock||0),0),r=document.getElementById(`preview-tab-count-badge`);r&&(r.innerText=e,r.style.display=e>0?`inline-block`:`none`);let i=document.getElementById(`preview-metric-count`),a=document.getElementById(`preview-metric-selected`),o=document.getElementById(`preview-metric-stock`),s=document.getElementById(`preview-summary-footer-text`);i&&(i.innerText=e),a&&(a.innerText=e),o&&(o.innerText=t),s&&(s.innerText=n?`جاهز للنشر مع ${e} شكل. سيتم إنشاء الأشكال عند نشر المنتج.`:`Ready to publish with ${e} variations.`)},R=[],z=()=>{let e=document.getElementById(`image-preview-container`);if(!e)return;if(R.length===0){e.style.display=`none`,e.innerHTML=``;let t=document.getElementById(`crud-image`);t&&(t.value=``);return}e.style.display=`flex`,e.style.flexWrap=`wrap`,e.style.gap=`0.75rem`,e.style.justifyContent=`center`,e.innerHTML=R.map((e,t)=>`
      <div class="thumb-preview-item" style="position: relative; width: 120px; border: 1.5px solid var(--border-color); border-radius: 6px; overflow: hidden; box-shadow: var(--card-shadow); display: flex; flex-direction: column; background: var(--bg-primary); padding: 4px;">
        <div style="width: 100%; height: 100px; position: relative;">
          <img src="${e.src}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 4px;">
          <button type="button" class="remove-thumb-btn" data-index="${t}" style="position: absolute; top: 4px; right: 4px; background: rgba(0,0,0,0.65); color: white; border: none; border-radius: 50%; width: 22px; height: 22px; font-size: 11px; cursor: pointer; display: flex; align-items: center; justify-content: center; font-weight: 700; line-height: 1;">&times;</button>
        </div>
        <input type="text" class="thumb-name-input" data-index="${t}" value="${e.name||``}" style="width: 100%; font-size: 0.75rem; padding: 0.2rem; margin-top: 4px; border: 1px solid var(--border-color); border-radius: 3px; text-align: center;" placeholder="${n?`الاسم / اللون`:`Name / Color`}">
      </div>
    `).join(``),e.querySelectorAll(`.remove-thumb-btn`).forEach(e=>{e.addEventListener(`click`,t=>{t.stopPropagation();let n=parseInt(e.dataset.index);R.splice(n,1),z()})}),e.querySelectorAll(`.thumb-name-input`).forEach(e=>{e.addEventListener(`input`,t=>{let n=parseInt(e.dataset.index);R[n].name=t.target.value.trim()})});let t=document.getElementById(`crud-image`);t&&(t.value=R[0]?R[0].src:``)},B=document.getElementById(`image-upload-zone`),V=document.getElementById(`crud-browse-btn`),H=document.getElementById(`crud-file-input`),U=[`https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&q=80`,`https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&q=80`,`https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=800&q=80`,`https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&q=80`,`https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=800&q=80`,`https://images.unsplash.com/photo-1580301762395-21ce84d00bc6?w=800&q=80`,`https://images.unsplash.com/photo-1616627547901-52f2066fa19b?w=800&q=80`];V&&H&&(V.addEventListener(`click`,e=>{e.stopPropagation(),H.click()}),H.addEventListener(`change`,e=>{let t=Array.from(e.target.files);if(t.length>0){let e=i.querySelector(`.type-card.active`),a=e&&e.dataset.type===`multiple`;a||(R=[]);let s=0;t.forEach(e=>{let i=e.name.substring(0,e.name.lastIndexOf(`.`))||e.name;o(e,e=>{let o={src:e,name:i};a?R.push(o):R=[o],s++,s===t.length&&(z(),B&&(B.style.borderColor=`var(--success-color)`,setTimeout(()=>{B.style.borderColor=``},1500)),r.showToast(n?`تم قراءة وضغط صورة/صور المنتج بنجاح!`:`Product photo(s) compressed and uploaded successfully!`,`success`))})})}})),B&&([`dragenter`,`dragover`,`dragleave`,`drop`].forEach(e=>{B.addEventListener(e,e=>{e.preventDefault(),e.stopPropagation()},!1)}),[`dragenter`,`dragover`].forEach(e=>{B.addEventListener(e,()=>{B.classList.add(`highlight`),B.style.borderColor=`var(--accent-gold)`,B.style.background=`var(--bg-primary)`},!1)}),[`dragleave`,`drop`].forEach(e=>{B.addEventListener(e,()=>{B.classList.remove(`highlight`),B.style.borderColor=``,B.style.background=``},!1)}),B.addEventListener(`drop`,e=>{let t=e.dataTransfer,a=Array.from(t.files);if(a.length>0){let e=a.filter(e=>e.type.startsWith(`image/`));if(e.length===0){r.showToast(n?`يرجى إسقاط ملفات الصور فقط!`:`Please drop image files only!`,`error`);return}let t=i.querySelector(`.type-card.active`),s=t&&t.dataset.type===`multiple`;s||(R=[]);let c=0;e.forEach(t=>{let i=t.name.substring(0,t.name.lastIndexOf(`.`))||t.name;o(t,t=>{let a={src:t,name:i};s?R.push(a):R=[a],c++,c===e.length&&(z(),B&&(B.style.borderColor=`var(--success-color)`,setTimeout(()=>{B.style.borderColor=``},1500)),r.showToast(n?`تم قراءة وضغط صورة/صور المنتج بنجاح!`:`Product photo(s) compressed and uploaded successfully!`,`success`))})})}}),B.addEventListener(`click`,e=>{if(e.target.id===`crud-image`||e.target.id===`crud-browse-btn`||e.target.id===`crud-file-input`||e.target.closest(`#crud-browse-btn`)||e.target.closest(`.remove-thumb-btn`)||e.target.closest(`.thumb-name-input`))return;let t=i.querySelector(`.type-card.active`),a=t&&t.dataset.type===`multiple`,o={src:U[Math.floor(Math.random()*U.length)],name:`preset-${Math.floor(100+Math.random()*900)}`};a?R.push(o):R=[o],z(),r.showToast(n?`تم توليد صورة للمفرش الفاخر بنجاح!`:`Generated bedding image preset successfully!`,`success`)})),u&&u.addEventListener(`submit`,e=>{e.preventDefault();let t=document.getElementById(`crud-sku`).value.trim(),a=i.querySelector(`.type-card.active`),o=a?a.dataset.type:`simple`;if(o!==`variable`&&R.length===0){r.showToast(n?`يرجى رفع أو توليد صورة للمنتج أولاً!`:`Please upload or generate a product image first!`,`error`);return}let s=document.getElementById(`crud-prod-id`).value,c=document.getElementById(`crud-title-ar`).value,l=C(c),d=document.getElementById(`crud-desc-ar`).value,f=w(d),p=[];i.querySelectorAll(`input[name="categories_select"]:checked`).forEach(e=>{p.push(e.value)});let h=p[0]||`quilts`;if(o===`variable`){if(!v||v.length===0){r.showToast(n?`يرجى توليد جدول التنويعات أولاً!`:`Please generate variations table first!`,`error`);return}let e=[],i=0,a=1/0;for(let t=0;t<v.length;t++){let o=v[t],s=parseFloat(o.price),c=parseInt(o.stock)||0;if(isNaN(s)||s<=0){r.showToast(n?`يرجى إدخال سعر صالح لكل خيار!`:`Please enter a valid price for each variation!`,`error`);return}i+=c,s<a&&(a=s);let l=parseFloat(o.salePrice),u=!isNaN(l)&&l>0&&l<s?l:s;e.push({colorEn:o.colorEn,colorAr:o.colorAr||o.colorEn,colorCode:o.colorCode,size:o.size,price:u,originalPrice:s,salePrice:!isNaN(l)&&l>0?l:null,stock:c,image:o.image||(R[0]?R[0].src:``),sku:o.sku})}let o=[...new Set(e.map(e=>e.colorEn).filter(Boolean))].map(t=>{let n=e.find(e=>e.colorEn===t);return{nameEn:t,nameAr:n.colorAr||t,code:n.colorCode||`#c5a880`}}),u=[...new Set(e.filter(e=>e.size).map(e=>e.size))],p=`690`+Math.floor(1e9+Math.random()*9e9),g={titleEn:l,titleAr:c,category:h,categoryEn:h===`double`?`Double Bedding`:h===`single`?`Single Bedding`:h===`bridal`?`Bridal Bedding`:h===`kids`?`Kids Bedding`:h===`toppers`?`Toppers & Pillows`:h===`sheets`?`Bed Sheets`:h===`strollers`?`Baby Strollers`:h===`bath`?`Bath Essentials`:h===`discounts`?`Discounts & Offers`:`Bath Essentials`,categoryAr:S(h),price:a,originalPrice:a,stock:i,sku:t,barcode:p,image:e[0].image||(R[0]?R[0].src:``),images:e.map(e=>e.image).filter(Boolean),colors:o,sizes:u,variations:e,descriptionEn:f,descriptionAr:d,specsEn:{Origin:`Imported`},specsAr:{المنشأ:`مستورد`},featuresEn:[`Luxury premium design`,...m],featuresAr:[`تصميم فاخر وعصري`,...m]};s?r.editProduct(parseInt(s),g):r.addProduct(g)}else{let e=parseFloat(document.getElementById(`crud-price`).value),n=parseFloat(document.getElementById(`crud-old-price`).value),i=e,a=e;if(!isNaN(n)&&n>0&&(i=n,a=e),o===`multiple`&&!s)R.forEach((e,n)=>{let o=`${t}${`-${String(n+1).padStart(2,`0`)}`}`,s=`690`+Math.floor(1e9+Math.random()*9e9),u=e.name?`${c} - ${e.name}`:c,p={titleEn:e.name?`${l} - ${e.name}`:l,titleAr:u,category:h,categoryEn:h===`double`?`Double Bedding`:h===`single`?`Single Bedding`:h===`bridal`?`Bridal Bedding`:h===`kids`?`Kids Bedding`:h===`toppers`?`Toppers & Pillows`:h===`sheets`?`Bed Sheets`:h===`strollers`?`Baby Strollers`:h===`bath`?`Bath Essentials`:h===`discounts`?`Discounts & Offers`:`Bath Essentials`,categoryAr:S(h),price:i,originalPrice:a,stock:parseInt(document.getElementById(`crud-stock`).value),sku:o,barcode:s,image:e.src,images:[e.src],descriptionEn:f,descriptionAr:d,specsEn:{Origin:`Imported`},specsAr:{المنشأ:`مستورد`},featuresEn:[`Luxury premium design`,...m],featuresAr:[`تصميم فاخر وعصري`,...m]};r.addProduct(p)});else{let e=`690`+Math.floor(1e9+Math.random()*9e9),n={titleEn:l,titleAr:c,category:h,categoryEn:h===`double`?`Double Bedding`:h===`single`?`Single Bedding`:h===`bridal`?`Bridal Bedding`:h===`kids`?`Kids Bedding`:h===`toppers`?`Toppers & Pillows`:h===`sheets`?`Bed Sheets`:h===`strollers`?`Baby Strollers`:h===`bath`?`Bath Essentials`:h===`discounts`?`Discounts & Offers`:`Bath Essentials`,categoryAr:S(h),price:i,originalPrice:a,stock:parseInt(document.getElementById(`crud-stock`).value),sku:t,barcode:e,image:R[0].src,images:[R[0].src],descriptionEn:f,descriptionAr:d,specsEn:{Origin:`Imported`},specsAr:{المنشأ:`مستورد`},featuresEn:[`Luxury premium design`,...m],featuresAr:[`تصميم فاخر وعصري`,...m]};s?r.editProduct(parseInt(s),n):r.addProduct(n)}}u.reset(),u.style.display=`none`,R=[],z(),r.notify(`state_changed`)}),i.querySelectorAll(`.edit-prod-btn`).forEach(e=>{e.addEventListener(`click`,()=>{let t=parseInt(e.dataset.id),a=r.state.products.find(e=>e.id===t);if(a&&u){document.getElementById(`form-action-title`).innerText=n?`تعديل بيانات المنتج`:`Edit Product Details`,document.getElementById(`crud-prod-id`).value=a.id,document.getElementById(`crud-title-ar`).value=a.titleAr,document.getElementById(`crud-sku`).value=a.sku,document.getElementById(`crud-stock`).value=a.stock,document.getElementById(`crud-image`).value=a.image||``,R=a.image?[a.image]:[],z(),document.getElementById(`crud-desc-ar`).value=a.descriptionAr;let e=a.variations&&a.variations.length>0,t=e?`variable`:`simple`;i.querySelectorAll(`.type-card`).forEach(e=>e.classList.remove(`active`));let r=i.querySelector(`.type-card[data-type="${t}"]`);if(r){r.classList.add(`active`);let e=r.querySelector(`input[type="radio"]`);e&&(e.checked=!0)}let o=document.getElementById(`crud-type`);o&&(o.value=t);let s=document.getElementById(`pricing-inventory-section`),c=document.getElementById(`variable-attributes-section`);if(e){s&&(s.style.display=`none`),c&&(c.style.display=`block`),document.getElementById(`crud-price`).removeAttribute(`required`),document.getElementById(`crud-stock`).removeAttribute(`required`),g=a.colors?a.colors.map(e=>({value:e.nameEn||e.nameAr,code:e.code})):[],_=a.sizes||[],v=a.variations.map(e=>({colorEn:e.colorEn,colorAr:e.colorAr||e.colorEn,colorCode:e.colorCode,size:e.size,price:e.originalPrice||e.price,salePrice:e.salePrice||``,stock:e.stock,image:e.image||``,sku:e.sku||``}));let e=document.getElementById(`enable-color-cb`),t=document.getElementById(`enable-size-cb`);e&&(e.checked=g.length>0),t&&(t.checked=_.length>0),D(),k(),A(),I(),L()}else s&&(s.style.display=`block`),c&&(c.style.display=`none`),document.getElementById(`crud-price`).setAttribute(`required`,`required`),document.getElementById(`crud-stock`).setAttribute(`required`,`required`),g=[],_=[],v=[],D(),k(),A(),I(),a.originalPrice>a.price?(document.getElementById(`crud-price`).value=a.originalPrice,document.getElementById(`crud-old-price`).value=a.price):(document.getElementById(`crud-price`).value=a.price,document.getElementById(`crud-old-price`).value=``);i.querySelectorAll(`input[name="categories_select"]`).forEach(e=>{e.checked=e.value===a.category}),m=a.featuresAr?a.featuresAr.filter(e=>e!==`تصميم فاخر وعصري`):[],h();let l=document.getElementById(`crud-status-select`);l&&(l.value=a.stock>0?`active`:`draft`),u.style.display=`block`,window.scrollTo({top:200,behavior:`smooth`})}})}),i.querySelectorAll(`.delete-prod-btn`).forEach(e=>{e.addEventListener(`click`,()=>{let t=parseInt(e.dataset.id);confirm(n?`هل أنت متأكد من رغبتك في حذف هذا المنتج من الكتالوج بالكامل؟`:`Are you sure you want to delete this product?`)&&(r.deleteProduct(t),r.notify(`state_changed`))})}),i.querySelectorAll(`.admin-status-select`).forEach(e=>{e.addEventListener(`change`,t=>{let n=e.dataset.id,i=t.target.value;r.updateOrderStatus(n,i)})});let W=document.getElementById(`create-coupon-form`);W&&W.addEventListener(`submit`,e=>{e.preventDefault();let t=document.getElementById(`new-coup-code`).value.toUpperCase().trim(),i=parseFloat(document.getElementById(`new-coup-val`).value),a=document.getElementById(`new-coup-type`).value;if(r.state.coupons.find(e=>e.code===t)){r.showToast(n?`عذراً، هذا الكوبون موجود مسبقاً!`:`Coupon code already exists!`,`error`);return}r.state.coupons.push({code:t,discount:i,type:a}),localStorage.setItem(`sana_coupons`,JSON.stringify(r.state.coupons)),r.showToast(n?`تم توليد الكوبون (${t}) بنجاح!`:`Coupon (${t}) generated!`,`success`),W.reset(),r.notify(`state_changed`)}),i.querySelectorAll(`.remove-coupon-btn`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.code;r.state.coupons=r.state.coupons.filter(e=>e.code!==t),localStorage.setItem(`sana_coupons`,JSON.stringify(r.state.coupons)),r.showToast(n?`تم إزالة الكوبون.`:`Coupon code deleted.`,`info`),r.notify(`state_changed`)})});let G=document.getElementById(`update-banners-form`);G&&G.addEventListener(`submit`,e=>{e.preventDefault();let t=r.state.bannerPairs.map((e,t)=>[{id:G.querySelector(`[name="banner-${t}-0-id"]`).value.trim(),nameAr:G.querySelector(`[name="banner-${t}-0-titleAr"]`).value.trim(),nameEn:G.querySelector(`[name="banner-${t}-0-titleEn"]`).value.trim(),image:G.querySelector(`[name="banner-${t}-0-image"]`).value.trim()},{id:G.querySelector(`[name="banner-${t}-1-id"]`).value.trim(),nameAr:G.querySelector(`[name="banner-${t}-1-titleAr"]`).value.trim(),nameEn:G.querySelector(`[name="banner-${t}-1-titleEn"]`).value.trim(),image:G.querySelector(`[name="banner-${t}-1-image"]`).value.trim()}]);r.editBanners(t)});let K=document.getElementById(`update-slides-form`);K&&K.addEventListener(`submit`,e=>{e.preventDefault();let t=r.state.homeSlides.map((e,t)=>({subtitleAr:K.querySelector(`[name="slide-${t}-subtitleAr"]`).value.trim(),subtitleEn:K.querySelector(`[name="slide-${t}-subtitleEn"]`).value.trim(),titleAr:K.querySelector(`[name="slide-${t}-titleAr"]`).value.trim(),titleEn:K.querySelector(`[name="slide-${t}-titleEn"]`).value.trim(),descAr:K.querySelector(`[name="slide-${t}-descAr"]`).value.trim(),descEn:K.querySelector(`[name="slide-${t}-descEn"]`).value.trim(),btnTextAr:K.querySelector(`[name="slide-${t}-btnTextAr"]`).value.trim(),btnTextEn:K.querySelector(`[name="slide-${t}-btnTextEn"]`).value.trim(),link:K.querySelector(`[name="slide-${t}-link"]`).value.trim(),image:K.querySelector(`[name="slide-${t}-image"]`).value.trim()}));r.editHomeSlides(t)});let q=document.getElementById(`add-new-slide-btn`);q&&q.addEventListener(`click`,()=>{let e={subtitleAr:`مجموعة جديدة للراحة`,subtitleEn:`New Comfort Collection`,titleAr:`عناوين شريحة جديدة مخصصة`,titleEn:`New Custom Slide Title`,descAr:`اكتب وصف الشريحة هنا ليعبر عن المجموعة الترويجية بالتفصيل`,descEn:`Write slide description here explaining the newly added promo details.`,btnTextAr:`تسوق الآن`,btnTextEn:`Shop Now`,link:`#/category`,image:`https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1920&q=80`},t=[...r.state.homeSlides,e];r.state.homeSlides=t,localStorage.setItem(`sana_home_slides`,JSON.stringify(t)),r.showToast(n?`تم إضافة شريحة فارغة جديدة!`:`Added a new empty slide template!`,`success`),r.notify(`state_changed`)}),i.querySelectorAll(`.remove-slide-btn`).forEach(e=>{e.addEventListener(`click`,()=>{let t=parseInt(e.dataset.index);if(r.state.homeSlides.length<=1){r.showToast(n?`لا يمكن إزالة الشريحة الأخيرة!`:`Cannot remove the last remaining slide!`,`error`);return}let i=[...r.state.homeSlides];i.splice(t,1),r.state.homeSlides=i,localStorage.setItem(`sana_home_slides`,JSON.stringify(i)),r.showToast(n?`تمت إزالة الشريحة بنجاح`:`Slide removed successfully!`,`info`),r.notify(`state_changed`)})});let J=(e,t)=>{i.querySelectorAll(e).forEach(e=>{e.addEventListener(`click`,()=>{let i=e.dataset.target,a=document.getElementById(`status-${i}`),s=document.getElementById(i),c=t===`slide`,l=c?2560:1200,u=c?1440:800,d=document.createElement(`input`);d.type=`file`,d.accept=`image/*`,d.addEventListener(`change`,e=>{let t=e.target.files[0];t&&(a&&(a.innerText=n?`جاري الرفع والضغط...`:`Uploading...`),o(t,e=>{s&&(s.value=e),a&&(a.innerText=t.name),r.showToast(n?`تم تحميل وضغط الصورة بنجاح!`:`Image uploaded & compressed!`,`success`)},l,u))}),d.click()})})};J(`.browse-banner-img-btn`,`banner`),J(`.browse-slide-img-btn`,`slide`)};function S(n){let r=t(e,n);return r?r.titleAr:`مستلزمات الحمام`}function C(e){let t=e.toLowerCase();return t.includes(`ديباج`)||t.includes(`لحاف`)?`Luxury Dibaj Comforter Set`:t.includes(`لباد`)?`Premium Mattress Topper`:t.includes(`مخد`)||t.includes(`وساد`)?`Hotel Sleeping Pillow`:t.includes(`شرشف`)||t.includes(`شراشف`)?`Cotton Fitted Bedsheet`:t.includes(`بطانية`)||t.includes(`بطانيات`)?`Ultra-Soft Warm Blanket`:t.includes(`روب`)||t.includes(`أرواب`)?`Turkish Cotton Bathrobe`:t.includes(`منشفة`)||t.includes(`فوط`)?`Luxury Bath Towel`:e+` Bedding Set`}function w(e){return e?`Experience ultimate comfort with our premium quality bedding products. Crafted from high-grade natural fibers to ensure a peaceful night sleep.`:`Experience ultimate comfort with our premium quality bedding products.`}function T(e,t){let n=r.state.lang===`ar`;return e===`about`?E(n):e===`contact`?D(n):e===`faq`?O(n):e===`shipping`?k(`shipping`,n):e===`return`?k(`return`,n):e===`privacy`?k(`privacy`,n):e===`terms`?k(`terms`,n):e===`offers`?A(n):e===`blog`?j(n,t):`<div class="container" style="padding:6rem 0;"><h2>404</h2></div>`}function E(e){return`
    <div class="static-page container animate-fade-in">
      <div class="about-hero" style="background-image: linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&q=80');">
        <h1>${e?`قصتنا وهويتنا`:`Our Story & Identity`}</h1>
      </div>
      <div class="about-content">
        <div class="column">
          <h3>${e?`التميز والراحة منذ عام 2018`:`Excellence & Comfort Since 2018`}</h3>
          <p>${e?`تأسست نيو لاين بريميوم في قلب الكويت لتكون الوجهة الأولى للفخامة والراحة في عالم المنسوجات المنزلية ومستلزمات النوم. نؤمن بأن كل ليلة نوم يجب أن تكون تجربة فندقية فاخرة تمنحك النشاط والحيوية.`:`New Line Premium was founded in the heart of Kuwait to represent the peak of comfort in home textiles and sleep systems. We believe every night should feel like a five-star hotel escape.`}</p>
          <p>${e?`نعمل جنباً إلى جنب مع أرقى مصانع النسيج العالمية لنقدم لكم أطقم ديباج قطنية 100%، ولباد غيمة طبيعي بسماكات مختلفة، ومخدات ريش أوز طبيعي معالجة ضد الحساسية لتلبية أعلى معايير الجودة.`:`We work closely with global textile leaders to offer 100% long-staple cotton comforter sets, cooling mattress toppers, and hypoallergenic goose down pillows meeting international standards.`}</p>
        </div>
        <div class="column">
          <h3>${e?`رسالتنا وقيمنا`:`Our Mission & Values`}</h3>
          <p>🌟 <strong>${e?`راحة تدوم:`:`Enduring Comfort:`}</strong> ${e?`نصمم منتجاتنا لتوفر الدعم المثالي للظهر والرقبة والنعومة الفائقة.`:`We design bedding that supports spinal alignment and wraps you in softness.`}</p>
          <p>🤝 <strong>${e?`التفوق في الخدمة:`:`Premium Service:`}</strong> ${e?`التوصيل السريع داخل الكويت، وتوفير خيارات دفع مرنة وتسهيل الاستبدال.`:`Enjoy super-fast delivery in Kuwait, flexible payments, and easy returns.`}</p>
          <p>🌿 <strong>${e?`الأمان والصحة:`:`Certified Health Standards:`}</strong> ${e?`جميع منسوجاتنا معتمدة بشهادة OEKO-TEX العالمية وخالية من المواد الكيميائية الضارة.`:`All our textiles are OEKO-TEX certified and free from harsh chemicals.`}</p>
        </div>
      </div>
    </div>

    <style>
      .about-hero { height: 320px; background-size:cover; background-position:center; border-radius:8px; display:flex; align-items:center; justify-content:center; color:white; margin-bottom: 3rem; }
      .about-hero h1 { font-family: 'Playfair Display', serif; font-size: 2.5rem; text-shadow: 0 2px 10px rgba(0,0,0,0.4); }
      .about-content { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; line-height: 1.7; color: var(--text-secondary); }
      .about-content h3 { font-family: 'Playfair Display', serif; color: var(--text-primary); margin-bottom: 1.2rem; font-size: 1.6rem; }
      .about-content p { margin-bottom: 1.2rem; }
      @media (max-width: 768px) { .about-content { grid-template-columns: 1fr; gap: 2rem; } }
    </style>
  `}function D(e){return`
    <div class="static-page container animate-fade-in">
      <h1 class="page-title">${e?`اتصل بنا`:`Contact Us`}</h1>
      
      <div class="contact-grid">
        <!-- Contact Form -->
        <div class="contact-form-box">
          <h5>${e?`أرسل لنا رسالة مباشرة`:`Send Us a Message`}</h5>
          <form id="contact-us-form" style="margin-top:1.5rem;">
            <div class="form-group">
              <label>${e?`الاسم بالكامل *`:`Full Name *`}</label>
              <input type="text" class="form-control" required>
            </div>
            <div class="form-group">
              <label>${e?`البريد الإلكتروني *`:`Email Address *`}</label>
              <input type="email" class="form-control" required>
            </div>
            <div class="form-group">
              <label>${e?`الموضوع *`:`Subject *`}</label>
              <input type="text" class="form-control" required>
            </div>
            <div class="form-group">
              <label>${e?`الرسالة *`:`Message *`}</label>
              <textarea class="form-control" rows="5" required></textarea>
            </div>
            <button type="submit" class="btn btn-primary" style="margin-top:1rem;">${e?`إرسال الرسالة`:`Send Message`}</button>
          </form>
        </div>

        <!-- Details & Mock Map -->
        <div class="contact-details-box">
          <div class="details-text" style="margin-bottom: 2rem;">
            <h5>${e?`معلومات الاتصال`:`Contact Details`}</h5>
            <p>📞 +965 99887766</p>
            <p>✉️ service@newlinekuwait.com</p>
            <p>📍 ${e?`الكويت، الفروانية، الضجيج (مقابل سلطان سنتر)`:`Kuwait, Farwaniya, Al-Dajeej (Opposite Sultan Center)`}</p>
          </div>
          
          <!-- Mock Interactive Map -->
          <div class="mock-map-wrapper">
            <div class="map-overlay">
              <span>📍 New Line Showroom (Al-Dajeej)</span>
              <small>${e?`انقر لتكبير تفاصيل الخريطة`:`Click to view full map details`}</small>
            </div>
            <div class="map-background"></div>
          </div>
        </div>
      </div>
    </div>

    <style>
      .contact-grid { display: grid; grid-template-columns: 1.2fr 1fr; gap: 4rem; }
      @media (max-width: 992px) { .contact-grid { grid-template-columns: 1fr; gap: 2.5rem; } }
      
      .mock-map-wrapper { height: 280px; border-radius: 6px; overflow:hidden; border: 1px solid var(--border-color); position:relative; }
      .map-overlay { position:absolute; bottom:15px; left:15px; background:rgba(0,0,0,0.85); color:white; padding:0.8rem 1.2rem; border-radius:4px; font-size:0.8rem; display:flex; flex-direction:column; z-index:2; }
      [dir="rtl"] .map-overlay { left:auto; right:15px; }
      .map-background { width:100%; height:100%; background: radial-gradient(circle, #eee 40%, #ccc 80%); background-size: 20px 20px; background-image: radial-gradient(#d4af37 2px, transparent 0); background-size: 24px 24px; opacity:0.85; }
    </style>
  `}function O(e){return`
    <div class="static-page container animate-fade-in" style="max-width:800px;">
      <h1 class="page-title" style="text-align:center;">${e?`الأسئلة الشائعة`:`Frequently Asked Questions`}</h1>
      
      <div class="faq-accordion-group" style="margin-top:3rem; display:flex; flex-direction:column; gap:1.2rem;">
        ${[{qEn:`How long does shipping inside Kuwait take?`,qAr:`كم يستغرق شحن وتوصيل الطلبات داخل الكويت؟`,aEn:`Orders placed before 2 PM are delivered the same day! Otherwise, standard delivery takes 24 hours.`,aAr:`الطلبات المقدمة قبل الساعة 2 ظهراً يتم توصيلها في نفس اليوم! خلاف ذلك، يستغرق التوصيل العادي 24 ساعة فقط لجميع مناطق الكويت.`},{qEn:`Do you offer international shipping?`,qAr:`هل توفرون الشحن لدول الخليج؟`,aEn:`Yes, we ship to all GCC countries (Saudi Arabia, UAE, Qatar, Bahrain, Oman) via DHL Express within 2-4 days.`,aAr:`نعم، نشحن لجميع دول الخليج العربي (المملكة العربية السعودية، الإمارات، قطر، البحرين، عمان) عبر دي إتش إل خلال 2-4 أيام عمل.`},{qEn:`How do I care for my natural down pillows and comforters?`,qAr:`كيف يمكنني العناية بمخاد الريش الطبيعي والديباج؟`,aEn:`We recommend professional dry clean for down items. For cotton covers and bedsheets, they are safe to machine wash at 40°C on a gentle cycle.`,aAr:`نوصي بالتنظيف الجاف الاحترافي لمخاد ولحاف الريش الطبيعي. أما أغطية القطن والشراشف، فيمكن غسلها بالغسالة المنزلية عند 40 درجة مئوية بدورة غسيل لطيفة.`},{qEn:`What is the warranty policy on Mattress Toppers?`,qAr:`ما هي سياسة الضمان على لباد السرير؟`,aEn:`All our luxury mattress toppers come with a 1-Year Guarantee against filling lumpiness or collapse under normal domestic use.`,aAr:`تأتي جميع أنواع اللباد الفاخرة لدينا بضمان لمدة سنة كاملة ضد هبوط الحشوة أو تكتلها في ظل الاستخدام المنزلي العادي.`}].map((t,n)=>`
          <div class="faq-item-card">
            <div class="faq-question-trigger">
              <span>❓ ${e?t.qAr:t.qEn}</span>
              <span class="chevron">▼</span>
            </div>
            <div class="faq-answer-panel">
              <p>${e?t.aAr:t.aEn}</p>
            </div>
          </div>
        `).join(``)}
      </div>
    </div>

    <style>
      .faq-item-card { background-color: var(--bg-secondary); border: 1px solid var(--border-light); border-radius: 6px; overflow:hidden; }
      .faq-question-trigger { display:flex; justify-content:space-between; align-items:center; padding:1.2rem; cursor:pointer; font-weight:600; font-size:0.95rem; user-select:none; }
      .faq-question-trigger:hover { background-color: var(--bg-tertiary); }
      .faq-question-trigger .chevron { font-size: 0.75rem; color: var(--text-muted); transition: transform 0.3s; }
      .faq-item-card.expanded .chevron { transform: rotate(180deg); }
      
      .faq-answer-panel { display:none; padding:1.2rem; border-top: 1px solid var(--border-color); background-color: var(--bg-primary); line-height: 1.6; font-size: 0.9rem; color: var(--text-secondary); }
      .faq-item-card.expanded .faq-answer-panel { display:block; }
    </style>
  `}function k(e,t){return`
    <div class="static-page container animate-fade-in" style="max-width:800px; line-height:1.8;">
      <h1 class="page-title">${{shipping:t?`سياسة الشحن والتوصيل`:`Shipping & Delivery Policy`,return:t?`سياسة الإرجاع والاستبدال`:`Return & Refund Policy`,privacy:t?`سياسة الخصوصية`:`Privacy Policy`,terms:t?`الشروط والأحكام`:`Terms & Conditions`}[e]}</h1>
      <div style="margin-top:2rem; color:var(--text-secondary); font-size:0.95rem;">
        <p><strong>1. ${t?`نظرة عامة والتمهيد`:`Overview & Acceptance`}</strong></p>
        <p>${t?`تنطبق هذه السياسة على جميع المشتريات والزيارات التي تتم عبر متجر نيو لاين بريميوم الإلكتروني. يرجى قراءة الشروط بعناية قبل إتمام الطلب.`:`This policy applies to all checkouts and interactions on New Line Premium store. Please read carefully before ordering.`}</p>
        
        <p style="margin-top:1.5rem;"><strong>2. ${t?`البنود والتفاصيل والضوابط`:`Clauses & Scope`}</strong></p>
        <p>${t?`نحتفظ بالحق في تعديل هذه الشروط في أي وقت لتلائم مقتضيات السوق والقوانين المعمول بها بدولة الكويت.`:`We reserve the right to modify these terms at any time to adhere to retail regulations of Kuwait.`}</p>
        
        <p style="margin-top:1.5rem;"><strong>3. ${t?`التزامات العميل ومسؤوليته`:`Client Obligations`}</strong></p>
        <p>${t?`العميل مسؤول عن تقديم تفاصيل عنوان شحن صحيحة ودقيقة (المنطقة، القطعة، الشارع، رقم المنزل) لتفادي أي تأخير أو رسوم إضافية قد تفرضها شركات التوصيل.`:`Clients must provide correct shipping details (Area, Block, Street, House number) to avoid delivery delays.`}</p>
      </div>
    </div>
  `}function A(e){let t=r.state.products.filter(e=>e.originalPrice>e.price);return`
    <div class="static-page container animate-fade-in">
      <h1 class="page-title">${e?`العروض الحالية والتخفيضات`:`Special Offers`}</h1>
      <p style="color:var(--text-muted); margin-bottom:3rem;">
        ${e?`اكتشف أفضل صفقاتنا وكوبونات الخصم المتاحة لتوفير المزيد عند تسوقك.`:`Browse our active bargains, sale items, and coupon codes for your shopping cart.`}
      </p>

      <!-- Coupon list grid -->
      <div style="background:var(--bg-secondary); padding:2rem; border-radius:6px; border:1px solid var(--border-light); margin-bottom:3rem;">
        <h5 style="margin-bottom:1.5rem; font-weight:600;">🏷️ ${e?`كوبونات الخصم النشطة`:`Active Coupon Codes`}</h5>
        <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap:1.5rem;">
          ${r.state.coupons.map(t=>`
            <div class="coupon-box-card" style="background:var(--bg-primary); border:1px dashed var(--accent-gold); padding:1rem; border-radius:4px; text-align:center; position:relative;">
              <span style="font-weight:700; font-size:1.1rem; color:var(--text-primary); display:block;">${t.code}</span>
              <span style="font-size:0.8rem; color:var(--accent-gold); font-weight:600; margin-top:0.25rem; display:block;">
                ${t.type===`percent`?`خصم ${t.discount}%`:`خصم ${t.discount.toFixed(3)} KWD`}
              </span>
              <button class="btn btn-secondary btn-sm copy-coupon-offer-btn" data-code="${t.code}" style="width:100%; margin-top:0.8rem; padding:0.25rem;">
                ${e?`نسخ الكود`:`Copy Code`}
              </button>
            </div>
          `).join(``)}
        </div>
      </div>

      <!-- Sale Products -->
      <div>
        <h4 style="font-family:\'Playfair Display\', serif; margin-bottom:1.5rem;">🔥 ${e?`منتجات مخفضة`:`Bargain Items On Sale`}</h4>
        <div class="products-grid">
          ${t.map(t=>`
            <div class="product-card">
              <div class="img-wrapper">
                <img src="${t.image}" alt="${t.titleEn}">
                <span class="badge badge-sale">${e?`تخفيض`:`Sale`}</span>
              </div>
              <div class="content">
                <span class="category">${e?t.categoryAr:t.categoryEn}</span>
                <a href="#/product/${t.id}" class="title">${e?t.titleAr:t.titleEn}</a>
                <div class="price-wrapper">
                  <span class="price">${t.price.toFixed(3)} KWD</span>
                  <span class="old-price">${t.originalPrice.toFixed(3)} KWD</span>
                </div>
              </div>
            </div>
          `).join(``)}
        </div>
      </div>
    </div>
  `}function j(e,t){return`
    <div class="static-page container animate-fade-in" style="max-width:900px;">
      <h1 class="page-title">${e?`مدونة الأناقة والجمال`:`Style Blog`}</h1>
      <p style="color:var(--text-muted); margin-bottom:3rem;">${e?`مقالات ونصائح تهمك للحفاظ على منسوجاتك المنزلية وجودة نومك الفاخرة.`:`Articles and style guidelines to maintain your high-end bedding and textiles.`}</p>
      
      <div style="display:grid; grid-template-columns:1fr; gap:3rem;">
        ${[{id:1,titleEn:`How to choose the perfect mattress topper height (8cm vs 14cm)`,titleAr:`كيفية اختيار سمك اللباد المناسب لسريرك (8 سم ضد 14 سم)`,image:`https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=800&q=80`,date:`2026-06-15`,bodyEn:`Selecting the right topper thickness transforms your sleep. An 8cm memory foam topper offers balanced lumbar support, ideal for contouring and correcting firm beds. A 14cm micro-feather topper gives you the ultimate sinking fluffy hotel feel.`,bodyAr:`اختيار سمك اللباد المثالي يغير جودة نومك بالكامل. لباد الميموري فوم بسمك 8 سم يوفر دعماً متوازناً للعمود الفقري ومثالي للمراتب الصلبة. أما لباد الغيمة السميك 14 سم المصنوع من المايكروفايبر، فيمنحك شعوراً غائراً ومنفوشاً يشابه أسرة الفنادق الفاخرة.`},{id:2,titleEn:`Tips to clean and maintain your cotton comforters`,titleAr:`نصائح لغسيل وحماية أطقم اللحاف والديباج القطني`,image:`https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&q=80`,date:`2026-06-20`,bodyEn:`Premium cotton bedding deserves gentle care. Wash fitted sheets and pillowcases weekly at 40 degrees. For bulky comforters, wash on a delicate cycle using mild detergent, and dry thoroughly on low heat to keep the microfiber filling fluffy.`,bodyAr:`تستحق أغطية السرير القطنية عناية لطيفة لتدوم طويلاً. اغسل الشراشف وأغطية الوسائد أسبوعياً عند 40 درجة مئوية. أما الديباج واللحاف الضخم، فاغسله بدورة الغسيل اللطيفة بالصابون السائل، وجففه تماماً بالهواء الساخن الخفيف لمنع تكتل الحشوة.`}].map(t=>`
          <div class="blog-card" style="display:grid; grid-template-columns: 260px 1fr; gap:2rem; background:var(--bg-secondary); border-radius:6px; overflow:hidden; border:1px solid var(--border-light);">
            <img src="${t.image}" alt="${t.titleEn}" style="width:100%; height:200px; object-fit:cover;">
            <div style="padding:1.5rem; display:flex; flex-direction:column; justify-content:center;">
              <span style="font-size:0.75rem; color:var(--text-muted); margin-bottom:0.5rem;">📅 ${t.date}</span>
              <h4 style="font-family:'Playfair Display', serif; font-size:1.3rem; margin-bottom:0.8rem;">${e?t.titleAr:t.titleEn}</h4>
              <p style="font-size:0.85rem; color:var(--text-secondary); line-height:1.5; margin-bottom:1.2rem;">${e?t.bodyAr:t.bodyEn}</p>
            </div>
          </div>
        `).join(``)}
      </div>
    </div>
  `}T.onMount=e=>{let t=r.state.lang===`ar`;if(e===`faq`){let e=document.querySelectorAll(`.faq-item-card`);e.forEach(t=>{t.querySelector(`.faq-question-trigger`).addEventListener(`click`,()=>{let n=t.classList.contains(`expanded`);e.forEach(e=>e.classList.remove(`expanded`)),n||t.classList.add(`expanded`)})})}if(e===`contact`){let e=document.getElementById(`contact-us-form`);e&&e.addEventListener(`submit`,n=>{n.preventDefault(),r.showToast(t?`شكراً لتواصلك معنا! سنرد عليك خلال 24 ساعة.`:`Message received! We will contact you under 24 hours.`,`success`),e.reset()})}e===`offers`&&document.querySelectorAll(`.copy-coupon-offer-btn`).forEach(e=>{e.addEventListener(`click`,()=>{let n=e.dataset.code;navigator.clipboard.writeText(n).then(()=>{r.showToast(t?`تم نسخ الكوبون (${n}) للحافظة!`:`Coupon (${n}) copied to clipboard!`,`success`)})})})},new class{constructor(){this.routes={"/":c,"/category":u,"/product/:id":p,"/cart":m,"/checkout":h,"/dashboard":g,"/admin":y,"/about":e=>T(`about`,e),"/contact":e=>T(`contact`,e),"/faq":e=>T(`faq`,e),"/shipping-policy":e=>T(`shipping`,e),"/return-policy":e=>T(`return`,e),"/privacy-policy":e=>T(`privacy`,e),"/terms":e=>T(`terms`,e),"/offers":e=>T(`offers`,e),"/blog":e=>T(`blog`,e)},window.addEventListener(`hashchange`,()=>this.handleRoute()),window.addEventListener(`load`,()=>this.handleRoute()),r.subscribe(`state_changed`,()=>this.handleRoute(!0)),r.subscribe(`lang_changed`,()=>this.handleRoute())}getRouteInfo(){let[e,t]=(window.location.hash.slice(1)||`/`).split(`?`),n={};t&&t.split(`&`).forEach(e=>{let[t,r]=e.split(`=`);n[decodeURIComponent(t)]=decodeURIComponent(r||``)});for(let t in this.routes){let r=t.split(`/`),i=e.split(`/`);if(r.length===i.length){let e={},a=!0;for(let t=0;t<r.length;t++)if(r[t].startsWith(`:`)){let n=r[t].slice(1);e[n]=i[t]}else if(r[t]!==i[t]){a=!1;break}if(a)return{handler:this.routes[t],params:e,query:n}}}return{handler:c,params:{},query:{}}}handleRoute(e=!1){let t=0;e?t=window.scrollY:window.scrollTo({top:0,behavior:`smooth`});let{handler:n,params:r,query:i}=this.getRouteInfo();this.renderShell();let a=document.querySelector(`main`);if(a){a.innerHTML=``;let o=n(r,i);o instanceof HTMLElement?a.appendChild(o):typeof o==`string`&&(a.innerHTML=o),n.onMount&&n.onMount(r,i),e&&window.scrollTo(0,t)}}renderShell(){let e=document.getElementById(`app`);if(!e)return;let t=document.querySelector(`header`),n=document.querySelector(`main`),r=document.querySelector(`footer`),c=document.querySelector(`.cart-drawer-container`),l=document.querySelector(`.whatsapp-container`);t||(t=document.createElement(`header`),e.appendChild(t)),t.innerHTML=i(),i.onMount&&i.onMount(),n||(n=document.createElement(`main`),e.appendChild(n)),r||(r=document.createElement(`footer`),e.appendChild(r)),r.innerHTML=a(),a.onMount&&a.onMount(),c||(c=document.createElement(`div`),c.className=`cart-drawer-container`,e.appendChild(c));let u=document.getElementById(`cart-drawer-backdrop`),d=u&&u.classList.contains(`active`);if(c.innerHTML=o(),o.onMount&&o.onMount(),d){let e=document.getElementById(`cart-drawer-backdrop`);if(e){e.classList.add(`active`);let t=e.querySelector(`.drawer-panel`);t&&(t.style.transform=`translateX(0)`)}}l||(l=document.createElement(`div`),l.className=`whatsapp-container`,e.appendChild(l)),l.innerHTML=s(),s.onMount&&s.onMount()}navigateTo(e,t={}){let n=e,r=Object.keys(t);if(r.length>0){let e=r.map(e=>`${encodeURIComponent(e)}=${encodeURIComponent(t[e])}`).join(`&`);n+=`?${e}`}window.location.hash=n}},console.log(`Sana Boutique application loaded successfully.`);