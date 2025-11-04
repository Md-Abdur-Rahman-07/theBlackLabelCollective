const data = [
  // winary
  {
    id: 1,
    name: "Augusta Vin Winery",
    description:
      "Nestled in the rolling hills of Fredericksburg, Augusta Vin Winery is a must-visit for wine enthusiasts. With a stunning 60-acre estate, Augusta Vin offers an exceptional tasting experience. Sip on their exquisite wines while enjoying panoramic views of the vineyards from their luxurious tasting room. Whether you're a seasoned wine connoisseur or just starting your wine journey, Augusta Vin promises an unforgettable experience.",
    address: "140 Augusta Vin Ln, Fredericksburg, TX 78624",
    phone: "(830) 307-1007",
    website: "https://www.augustavin.com",
    email: "info@augustavin.com",
    image: "images/l1.jpg",
  },
  {
    id: 2,
    name: "Barons Creek Vineyard",
    description:
      "Barons Creek Vineyard combines elegant Tuscan architecture with a welcoming atmosphere. Their beautiful courtyard and serene tasting rooms provide the perfect setting to savor their award-winning wines. Take a leisurely stroll through the vineyards, and don't miss the chance to relax on their patio with a glass of your favorite vintage. Barons Creek Vineyard is the ideal spot for a relaxing and refined wine tasting experience.",
    address: "5865 E, US-290, Fredericksburg, TX 78624",
    phone: "(830) 304-3000",
    website: "https://www.baronscreekvineyards.com/",
    email: "info@baronscreekvineyards.com",
    image: "images/l2.jpg",
  },
  {
    id: 3,
    name: "Barrelle Vineyards",
    description:
      "Barrelle Vineyards is a hidden gem in the heart of Fredericksburg. This family-owned winery is known for its intimate and personalized wine tasting experiences. The warm and inviting atmosphere makes you feel like part of the family. Sample their handcrafted wines, which reflect the passion and dedication of the winemakers. Barrelle Vineyards is perfect for those seeking a more personal and authentic winery visit.",
    address: "6258 E. U.S. Highway 290, Fredericksburg, TX 78624",
    phone: "(830) 992-8547",
    website: "https://barellefbg.com/",
    email: "iinfo@barellefbg.com",
    image: "images/l3.jpg",
  },
  {
    id: 4,
    name: "Becker Vineyards",
    description:
      "Step into the world of Becker Vineyards, where history and tradition blend seamlessly with modern winemaking. Set in a 19th-century German stone barn, the winery offers a unique and charming ambiance. Enjoy their diverse selection of wines, from rich reds to crisp whites, all crafted with care. The lavender fields surrounding the estate add an extra touch of beauty to your visit. Becker Vineyards is a true testament to the art of winemaking.",
    address: "464 Becker Farms Rd, Fredericksburg, TX 78624",
    phone: "(830) 644-2681",
    website: "https://www.beckervineyards.com/",
    email: "info@beckerwines.com",
    image: "images/l4.jpg",
  },
  {
    id: 5,
    name: "English Newsom Cellars",
    description:
      "Originally based in Lubbock, Texas, English Newsom Cellars winery now features a spacious tasting room at The Resort at Fredericksburg. It has become a destination for wine enthusiasts seeking to explore high-quality estate-grown varietals and award-winning wines. All their grapes are exclusively estate-grown in the heart of the Texas High Plains. English Newsom Cellars is a winery that prides itself on innovation and quality. Their modern tasting room and beautiful outdoor patio provide a perfect backdrop for exploring their diverse range of wines. From bold reds to refreshing whites, there's something for every palate. The knowledgeable staff are passionate about sharing their wine expertise, ensuring a memorable and educational experience at English Newsom Cellars.",
    address: "3567 E. U.S. Highway 290, Fredericksburg, TX 78624",
    phone: "(830) 308-7118",
    website: "https://www.theresortatfredericksburg.com/drink-the-edge",
    email: "hello@theresortatfredericksburg.com",
    image: "images/l5.jpg",
  },
  {
    id: 6,
    name: "Carter Creek Winery Resort & Spa",
    description:
      "Carter Creek Winery Resort & Spa offers a luxurious escape for wine lovers. This expansive resort features a state-of-the-art winery, elegant accommodations, and a relaxing spa. Indulge in a wine tasting session, followed by a gourmet meal at their on-site restaurant. Unwind with a spa treatment or take a dip in the pool. Carter Creek Winery Resort & Spa combines the best of relaxation and wine tasting for an all-encompassing experience.",
    address: "4064 W US Hwy 290, Johnson City, TX 78636",
    phone: "(877) 232-0138",
    website: "https://www.cartercreek.com/",
    email: "marketing@wineresort.com",
    image: "images/l6.jpg",
  },
  {
    id: 7,
    name: "Grape Creek Vineyards",
    description:
      "Grape Creek Vineyards is a Tuscan-inspired winery that transports you to the Italian countryside. Their picturesque estate features beautiful courtyards, fountains, and lush vineyards. Sample their exquisite wines in the charming tasting room or on the scenic patio. Grape Creek Vineyards is known for its exceptional hospitality and award-winning wines, making it a top choice for a delightful winery visit.",
    address: "10587 E US Hwy 290, Fredericksburg, TX 78624",
    phone: "(830) 644-2710",
    website: "https://www.grapecreek.com/",
    email: " info@grapecreek.com",
    image: "images/l7.jpg",
  },
  {
    id: 8,
    name: "Heath Sparkling Wines",
    description:
      "For lovers of sparkling wines, Heath Sparkling Wines is a must-visit. This winery specializes in producing top-quality sparkling wines that delight the senses. Their chic and contemporary tasting room offers a sophisticated setting to enjoy their bubbly creations. The guided tastings provide insight into the art of sparkling wine production. Heath Sparkling Wines promises a sparkling experience that is both elegant and enjoyable.",
    address: "10591 E US Hwy 290, Fredericksburg, TX 78624",
    phone: "(830) 304-1011",
    website: "https://www.heathsparkling.com/",
    email: "info@heathsparkling.com",
    image: "images/l8.jpg",
  },
  {
    id: 9,
    name: "Texas Wine Collective",
    description:
      "Texas Wine Collective is a unique winery that brings together the best of Texas wines under one roof. This collaborative tasting room features wines from three award-winning wineries: Brennan Vineyards, Lost Oak Winery, and McPherson Cellars. The diverse selection ensures there's something for everyone. The relaxed and friendly atmosphere makes it a great place to explore and discover new favorites. Texas Wine Collective celebrates the rich diversity of Texas winemaking.",
    address: "10354 E US Hwy 290, Fredericksburg, TX 78624",
    phone: "(830) 997-7470",
    website: "https://www.texaswinecollective.com/",
    email: "info@texaswinecollective.com",
    image: "images/l9.jpg",
  },
  {
    id: 10,
    name: "Halter Ranch",
    description:
      "Halter Ranch offers a picturesque setting with its historic farmhouse and expansive vineyards. This winery focuses on sustainable practices and producing high-quality wines. Enjoy a guided tour of the vineyards and production facilities, followed by a tasting of their exceptional wines. The scenic beauty and dedication to sustainability make Halter Ranch a standout destination for wine lovers.",
    address: "8651 E U.S. Highway 290, Fredericksburg, TX 78624",
    phone: "(805) 226-9455",
    website: "https://www.halterranch.com/texas",
    image: "images/l10.jpg",
  },
  // Best Eats Places
  {
    id: 11,
    name: "Daygos - San Diego Taco Shop",
    description:
      "Welcome to Daygos, Austin's slice of San Diego taco heaven! Nestled in the heart of Texas, this vibrant taco shop brings the laid-back coastal vibes of Southern California right to your plate. Picture this: palm tree murals, surfboards on the walls, and a soundtrack of beachside tunes setting the scene as you step inside. The menu? A tantalizing fusion of Baja-inspired flavors meets Tex-Mex flair. Crispy fish tacos bursting with freshness, carne asada fries piled high with savory toppings, and California-style burritos stuffed to perfection. Whether you're a local longing for a taste of San Diego or a taco enthusiast exploring Austin's diverse culinary scene, Daygos promises a fiesta of flavors that will transport your taste buds straight to sunny California shores. Ole! ",
    address: "1209 East Cesar Chavez Street Austin, TX 78702",
    phone: "(619) 431 0337",
    website: "https://www.daygossandiegotacoshop.com",
    image: "images/l34.jpg",
  },
  {
    id: 12,
    name: "Bird Bird Biscuit",
    description:
      "Bird Bird Biscuit takes the humble biscuit to new heights. This popular eatery specializes in biscuit sandwiches that are both creative and comforting. From savory to sweet, their menu offers a variety of delicious options that are perfect for breakfast or lunch. Bird Bird Biscuit is a must-visit for biscuit lovers and foodies alike.",
    address: "2701 Manor Rd, Austin, TX 78722",
    phone: "(512) 761-4922",
    website: "https://www.birdbirdbiscuit.com",
    image: "images/l18.jpg",
  },
  {
    id: 13,
    name: "Cuantos Tacos 🌮",
    description:
      "Cuantos Tacos offers a taste of authentic Mexican street food right in Austin. Known for their delicious and innovative tacos, this food truck serves up a variety of mouthwatering options that are sure to satisfy your taco cravings. Whether you’re in the mood for traditional or creative flavors, Quantos Tacos delivers an unforgettable culinary experience.",
    address: "1108 E 12th St, Austin, TX 78702",
    phone: "(512) 669-5352",
    website: "https://www.cuantostacosaustin.com",
    image: "images/l11.webp",
  },
  {
    id: 14,
    name: "Rolling Smoke",
    description:
      "Rolling Smoke is a barbecue lover's paradise. This food truck is famous for its smoked meats and Southern-style sides, all cooked to perfection. Whether you’re a fan of brisket, ribs, or pulled pork, Rolling Smoke has something to satisfy every barbecue craving. Don’t forget to try their homemade sauces for an extra kick of flavor.",
    address: "1108 E 12th St, Austin, TX 78702",
    phone: "(512) 705-5499",
    website: "https://rollinsmokeatxbbq.com/",
    image: "images/l12.jpg",
  },
  {
    id: 15,
    name: "Josephine House",
    description:
      "Josephine House offers a charming and elegant dining experience. Nestled in a quaint cottage, this restaurant serves up a seasonal menu with locally sourced ingredients. Whether you’re there for brunch, lunch, or dinner, you’ll enjoy delicious dishes in a cozy and inviting atmosphere. Josephine House is perfect for a special occasion or a relaxing meal with friends.",
    address: "1601 Waterston Ave, Austin, TX 78703",
    phone: "(512) 503-8033",
    website: "https://josephineofaustin.com",
    image: "images/l13.jpg",
  },
  {
    id: 16,
    name: "Discada",
    description:
      "Discada is a unique food truck specializing in Northern Mexican-style discada, a flavorful mixed meat dish cooked on a large disc grill. Known for its rich and savory flavors, Discada offers a delicious and authentic taste of Mexican street food. If you’re looking for something different and delectable, Discada is the place to be.",
    address: "1319 Rosewood Ave, Austin, TX 78702",
    phone: "(512) 920-5473",
    website: "http://www.discadatx.com",
    image: "images/l14.jpg",
  },
  {
    id: 17,
    name: "Grizzelda’s",
    description:
      "Grizzelda’s brings a touch of modern elegance to traditional Mexican cuisine. With its vibrant and stylish decor, this restaurant offers a delightful dining experience. Enjoy their flavorful dishes and creative cocktails in a lively atmosphere. Grizzelda’s is perfect for a fun night out or a special celebration with friends and family.",
    address: "105 Tillery St, Austin, TX 78702",
    phone: "(512) 366-5908",
    website: "https://grizzeldas.com/",
    image: "images/l15.jpg",
  },
  {
    id: 18,
    name: "Juan In A Million",
    description:
      "Juan In A Million is an Austin institution, famous for its hearty breakfast tacos and friendly atmosphere. This family-owned restaurant has been serving delicious Mexican food for decades, earning a loyal following of locals and visitors alike. The Don Juan taco is a must-try, packed with eggs, potatoes, bacon, and cheese.",
    address: "2300 E Cesar Chavez St, Austin, TX 78702",
    phone: "(512) 472-3872",
    website: "https://www.juaninamillion.com/",
    image: "images/l16.jpg",
  },
  {
    id: 19,
    name: "Flat Track Coffee",
    description:
      "Flat Track Coffee is a haven for coffee enthusiasts. This trendy coffee shop roasts its own beans, ensuring a fresh and flavorful cup every time. Whether you’re in the mood for a classic espresso or a creative coffee concoction, Flat Track Coffee delivers quality and taste in every sip. It’s the perfect spot to relax and enjoy a great cup of coffee.",
    address: "1619 E Cesar Chavez St, Austin, TX 78702",
    phone: "(512) 540-6040",
    website: "https://flattrackcoffee.com/",
    image: "images/l17.jpg",
  },
  {
    id: 20,
    name: "Hillside Farmacy",
    description:
      "Hillside Farmacy offers a delightful blend of historic charm and modern cuisine. Housed in a beautifully restored 1920s building, this restaurant serves up fresh and flavorful dishes made with locally sourced ingredients. Whether you’re there for brunch, lunch, or dinner, Hillside Farmacy provides a unique and memorable dining experience.",
    address: "1209 E 11th St, Austin, TX 78702",
    phone: "(512) 628-0168",
    website: "https://www.hillsidefarmacy.com/",
    image: "images/l19.jpg",
  },
  {
    id: 21,
    name: "Ramen Tatsu-Ya",
    description:
      "Ramen Tatsu-Ya is a ramen lover’s dream come true. This popular restaurant is known for its rich and flavorful ramen bowls, made with high-quality ingredients and meticulous attention to detail. Whether you prefer classic tonkotsu or a spicy miso variation, Ramen Tatsu-Ya delivers a satisfying and delicious meal every time.",
    address: "8557 Research Blvd Ste 126, Austin, TX 78758",
    phone: "(512) 893-5561",
    website: "https://www.ramen-tatsuya.com/",
    image: "images/l20.jpg",
  },

  // brewry
  {
    id: 22,
    name: "Hopsquad Brewing Co",
    description:
      "Major League Soccer fans flock to this North Burnet for the rowdy pregame atmosphere, which sits conveniently down the road from Q2 Stadium. (With nearby breweries 4th Tap and Circle shuttering, this is now the closest pregame option.) The core beer lineup is available to-go in cans, and among the favorites are the Zapatista Mexican lager and (especially) the Architetto Ruffini Italian pils. Pizza is available from the adjacent Dough Squad trailer. And this is worth mentioning: the brewery often opens early on Sundays for Formula 1 fans, and it’s the Austin viewing headquarters for fans of the Premier League team Newcastle FC. Non-beer options like margaritas and mules are also available, and a 3 to 6 p.m. weekday happy hour offers select pints for $5 and 25 percent off to-go six-packs. Takeout orders can be placed online; there are indoor and outdoor dine-in areas.",
    address: "2307 Kramer Lane, Austin, Texas 78758",
    phone: "(512) 351-9654",
    website: "https://www.hopsquad.com/",
    image: "images/l22.jpg",
    email: "info@blueowlbrewing.com",
  },
  {
    id: 23,
    name: "Live Oak Brewing Company",
    description:
      "What can you say about Austin’s oldest brewery except that it’s a classic and the city is lucky to have it? Now a whopping 25 years old, the Del Valle brewery’s old-guard approach has always been to make German beer styles. As such, both the pilz and hefeweizen are among the best in the country. Live Oak’s main innovation in the past decade was actually opening a nice taproom on some acreage near the airport and starting to can its beers, but outside of that, it’s business as usual. German beer done properly, priced reasonably, and made with care and craft. There’s also a small food truck and a disc golf course should you be interested, and UT Longhorn football games are shown in the taproom. Takeout orders can be placed online; there are indoor and outdoor dine-in areas .",
    address: "1615 Crozier Ln, Del Valle, TX 78617",
    phone: "(512) 385-2299",
    website: "https://liveoakbrewing.com",
    image: "images/l23.jpg",
    email: "info@liveoakbrewing.com",
  },
  {
    id: 24,
    name: "Meanwhile Brewing",
    description:
      "The brewery’s McKinney neighborhood aesthetic — industrial, lots of warehouses — gives drinkers no idea of what’s around the corner with its massive space. Upon arrival, there’s a fancy taproom, a large stage, a soccer field, and perhaps the largest brewery patio area in the Austin city limits. The food trucks are outstanding, with tacos from Pueblo Viejo, barbecue from the award-winning Distant Relatives, pizza from Side Eyed Pie, and ice cream from Besame. As for the beer, the two signature offerings are the German Style pilsner and the Secret Beach San Diego IPA, but 15+ tap list offer an array of choices. This is a great place for group outings or a brewery visit with kids, although finding a table on weekends can be challenging. A variety of non-beer options are also available at the bar. Takeout orders can be placed in person; there are indoor and outdoor dine-in areas.",
    address: "3901 Promontory Point Dr, Austin, TX 78744",
    phone: "(512) 308-3650",
    website: "https://meanwhilebeer.com",
    image: "images/l24.jpg",
    email: "info@meanwhilebeer.com",
  },
  {
    id: 25,
    name: "Oddwood Brewing",
    description:
      "While the VHS tapes and indie rock soundtrack lend the MLK brewery a laid-back, retro vibe, Oddwood’s beers are smart and serious. The brewers clearly enjoy offering some sours, but most weeks, the tap list is heavy on IPAs and hoppier lagers. An extensive range of pizzas, salads, and stromboli help patrons soak in all of those beers, as does the stellar Egyptian barbecue food truck KG BBQ. For non-beer-drinkers, there’s a reasonable wine list here, too. For the kids (or for you) there’s a free-play arcade room here with NBA Jam, Ms. Pac Man, and more. Check the website for events like live comedy and even a horror movie night. Takeout orders can be placed online; there are indoor and outdoor dine-in areas.",
    address: "3108 Manor Rd, Austin, TX 78723",
    phone: "(512) 551-7860",
    website: "https://oddwoodales.com",
    image: "images/l25.jpg",
    email: "info@oddwoodales.com",
  },
  {
    id: 26,
    name: "Pinthouse Pizza",
    description:
      "The brewery-pizzeria mini-chain has become a mainstay of both family dinners and beer nerds by offering a convivial, communal atmosphere paired with a comfort food menu of pizza, nachos, soft pretzels, and (critically) award-winning beers. The multi-location brewery is best known for the ubiquitous Electric Jellyfish IPA, a hazy New England-style beer that’s served everywhere in Austin. A wide assortment of other stellar IPAs come and go seasonally from the tap wall, and the Magical pils  and Bearded Seal stout are similarly best in class. Also worth noting: bar service here is consistently efficient and polite, which is no easy feat given the crowds. To-go orders can be placed online; there are indoor and outdoor dine-in services.",
    address: "4729 Burnet Rd, Austin, TX 78756",
    phone: "(512) 436-9605",
    website: "https://pinthousepizza.com",
    image: "images/l26.jpg",
    email: "info@pinthousepizza.com",
  },
  {
    id: 27,
    name: "Family Business Beer Company",
    description:
      "Let’s get it out of the way: yes, it’s a drive to get to the Dripping Springs brewery from Austin proper. But once there, you’ll find a jovial taproom with indoor and outdoor seating, a large lawn for kids to roam on, and occasional live music. The core lineup of tap and canned beers are attuned to Hill Country porch drinking: there’s a Great American Beer Festival-approved German pils (Golden Age), and a very nice American pale ale (Hamilton pale.) And yes, there’s a tasty, citrus-forward IPA. This brewery is also pet-friendly and has a playground. Fun fact: Family Business is co-founded by veteran television actor Jensen Ackles (Supernatural, Days of Our Lives, The Boys). There are indoor and outdoor dine-in areas.",
    address: "19510 Hamilton Pool Rd, Dripping Springs, TX 78620",
    phone: "(512) 829-4202",
    website: "https://familybusinessbeerco.com",
    image: "images/l27.jpg",
    email: "info@lazarusbrewing.com",
  },
  {
    id: 28,
    name: "Austin Beerworks",
    description:
      "Perhaps the most successful manifestation of craft brewing in Austin, this North Burnet brewery has moved from strength to strength mostly by doing one big thing right: understanding what Central Texas beer drinkers want. While Austin Beerworks makes all sorts of styles, the core focus on flavorful warm weather beers is best manifested in the classic Pearl Snap German pils and the Peacemaker ale, which is so crushable that it is humorously available in 99-can packs. At the taproom, there’s a workhorse food truck (Can-Tina) serving burgers, nachos, salads, and tacos, a number of experimental small batch taps, and a large seating area that remains packed most weekends. The brewery also expanded recently with a second location in northwest Austin, which has a kid’s playground, wine and cider options, and even a small dog park, A true Austin classic. Takeout orders can be placed online; there are indoor and outdoor dine-in areas.",
    address: "3009 Industrial Ter, Austin, TX 78758",
    phone: "(512) 821-2494",
    website: "https://austinbeerworks.com",
    image: "images/l28.jpg",
    email: "info@austinbeerworks.com",
  },
  {
    id: 29,
    name: "Frontyard Brewing",
    description:
      "The Austin beer scene circa the early 2000s involved sitting at a rickety picnic table in an industrial building; the ex-burb brewery experience in 2023 has welcoming open architecture, live music, trivia nights, pickleball courts, Astroturfed picnic areas, mocktails, and multiple food trucks. As befits its upscale Spicewood location, there’s a moneyed vibe to the setup here. The beer, however, is rock solid, especially the lighter styles like the Honey Blonde, kolsch, and Fest Bier. These can be paired with an array of pizzas, burgers, pretzels, and salads; kids (and adults) can also partake in popsicles, ice cream, and Shirley Temples. There’s a decidedly fashionable crowd here, but the staff are welcoming and the views and brews are well worth the drive. There are indoor an d outdoor dine-in areas.",
    address: "4514 Bob Wire Rd, Spicewood, TX 78669",
    phone: "(512) 614-4380",
    website: "https://frontyardbrewing.com",
    image: "images/l29.jpg",
    email: "info@theabgb.com",
  },
  {
    id: 30,
    name: "St. Elmo Brewing Company",
    description:
      "While best known for its crisp and sessionable Carl Kolsch, the East Congress brewery brews a wide array of styles with range: there’s solid Fresh Hop IPAs, marzen-style Oktoberfest, English pub ales, and even a pink guava sour. There’s an expansive outdoor patio here that’s always fairly full. Food from Spicy Boys is available, and there are coolers of tallboy cans to go. To-go orders can be placed online; there are indoor and outdoor dine-in areas.",
    address: "440 E Saint Elmo Rd, Austin, TX 78745",
    phone: "(737) 300-1965",
    website: "https://www.stelmobrewing.com",
    image: "images/l30.jpg",
  },
  {
    id: 31,
    name: "Fast Friends Beer Company",
    description:
      "With the recent shutter of Thirsty Planet, convenient brewery options for Southeast Austin residents were quite limited (though Last Stand is a good option.) The still-new Fast Friends aims to expand those options via an enormous taproom. There’s a wide array of beer styles: in recent months, highlights have included the Big Citra West Coast pils and the Fritz German pilsner. Wine, cider, and nonalcoholic beverage options are also available here. The high-ceiling space has a large patio and an open kitchen focused on pizzas, salads, and roasted vegetables. The customer service is also a highlight. There are indoor and outdoor dine-in areas.",
    address: "7313 North Interstate 35 Frontage Road, TX 78744",
    website: "https://fastfriendsbeer.com",
    image: "images/l31.jpg",
  },
  {
    id: 32,
    name: "Vista Brewing",
    description:
      "Much like Jester King, Vista Brewing is best viewed as a destination brewery: the drive out to the 20 acre property in Driftwood is part of the fun. Don’t skip the food, which consists of upscale takes on comfort food classics like hot dogs and carne asada, along with a kid’s menu and baked goods. The taproom keeps a rotating selection of around 15 taps flowing, with standouts like the Adair kolsch and Driftwood pale leading the way. There are barrel-aged beers to sample, too, and several seasonal beer selections. Live music is also featured most Fridays and Sundays, and there’s a Thursday night burger and pint special for $15. There are indoor and outdoor dine-in areas.",
    address: "13551 FM 150 W, Driftwood, TX 78619",
    phone: "(512) 766-1842",
    website: "https://www.vistabrewingtx.com",
    image: "images/l32.jpg",
  },
  {
    id: 33,
    name: "Jester King Brewery",
    description:
      "The Hill Country brewery’s evolution from cult status to an all-around gathering spot appears to be complete. Once solely focused on farmhouse and wild beers, the brewery now offers several “clean” beer selections in the lager and pilsner categories, alongside curated picks of wines and ciders. The kitchen side still has the usual selection of pizzas and baked goods, and the new JK Quik Kitchen food truck offers bar fare like burgers and fries. There are also walking trails and quite a few goats, a rabbit, and two roaming cats on the property. Takeout orders can be placed online; there are indoor and outdoor dine-in areas. [Disclosure: Tom Thornton is an investor in Jester King.]",
    address: "13005 Fitzhugh Rd, Austin, TX 78736",
    phone: "(512) 900-1820",
    website: "https://jesterkingbrewery.com",
    image: "images/l33.jpg",
  },

  // Home page
  {
    id: 34,
    name: "Celebrations",
    description:
      "Single stop or bar-hopping, our elegant service keeps the fun rolling while you focus on making memories (and maybe embarrassing toasts).",
    image: "images/1.png",
    btn: "Request Quote",
    i1: "Birthday",
    i2: "Bachelorette party",
    i3: "Family reunion",
    i4: "Anniversary",
    i5: "Etc..",
  },
  {
    id: 35,
    name: "Airport Transfers",
    description:
      "Why start your journey with a headache? Our airport transfer services are so smooth, you'll think you're already in first class. Whether you're traveling solo or with a group, we ensure a punctual and comfortable ride. Let us make your airport dash as relaxing as the in-flight snacks.",
    image: "images/3.png",
    btn: "Request Quote",
  },
  {
    id: 36,
    name: "Water Sports And Outdoor Adventures",
    description:
      "Make a splash with our transport services for water sports and outdoor adventures. Whether you’re kayaking, paddle boarding, or just seeking thrills in nature, we cater to groups of all sizes. Enjoy the ride and the adventure—because getting there should be just as fun as the activity itself.",
    image: "images/4.png",
    btn: "Request Quote",
  },
  {
    id: 37,
    name: "Corporate Events",
    description:
      "Boost your corporate events with our seamless and sophisticated transportation services. From executive meetings to company outings, we ensure your team arrives in style and on time. Leave the logistics to us, and focus on impressing your boss and sealing those deals. We’ll handle the traffic jams—you handle the PowerPoint jams.",
    image: "images/5.png",
    btn: "Request Quote",
  },
  {
    id: 38,
    name: "Sporting Events",
    description:
      "Game on! Get to the big match without the hassle of traffic and parking. Our top-notch transportation ensures you arrive ready to cheer, jeer, and high-five strangers. From local games to championship showdowns, let us drive while you get your game face on.",
    image: "images/6.png",
    btn: "Request Quote",
  },
  // night life
  {
    id: 39,
    name: "Nickel City",
    description:
      "Nickel City wants to believe it’s a dive bar, and at one point it almost was. But the servers at this East Side spot are too friendly, the cocktails are too developed, and the whiskey selection is too extensive. It’s one of our favorite bars in Austin, toeing the line between just about every category a bar can fall into. There’s also a great food trailer out back, Delray Cafe, serving up some of the best burgers and wings in town.",
    image: "images/l34.png",
    address: "1133 E 11th St, Austin, TX 78702, United States",
    website: "https://www.nickelcitybar.com/",
  },

  {
    id: 40,
    name: "The Roosevelt Room",
    description:
      "When you want to try classic cocktails from any era, head to The Roosevelt Room downtown. Here, the menu is broken up into time periods, spanning everything from the pre-1880s to modern times. And while the bar does have plenty of its own inventions, this is one of the best places to try classic cocktails as they were meant to be enjoyed. It’s dark inside, with an open, industrial space that feels surprisingly intimate.",
    image: "images/l35.png",
    address: "307 W 5th St, Austin, TX 78701, United States",
    phone: "(512) 494-4094",
    website: "https://fastfriendsbeer.com",
  },
  {
    id: 41,
    name: "Frazier’s Long & Low",
    description:
      "Stepping into the South Shore bar Frazier's Long & Low feels a little like stepping into a movie about a bar set in the 1970s. On one end of the small building, you’ll find an old jukebox, pool tables, and a long shuffleboard, while the other end plays host to a handful of semicircle booths. And all of it is outfitted in Coors lanterns, “Cold Beer” signs, and a retro color scheme. Frazier’s is also home to one of our favorite burgers in town—basically a McDonald’s cheeseburger that went to culinary school. Think smashed patties and steamed potato buns, plus all the usual fixings. And at just $4, it feels like Frazier’s has really committed to the retro theme.",
    image: "images/l36.png",
    address: "2538 Elmont Dr, Austin, TX 78741, United States",
    phone: "+15125273082",
    website: "http://www.fraziersbar.com/",
  },
  {
    id: 42,
    name: "Armadillo Den",
    description:
      "With three full acres, a massive bar, and more activities than you can count, Armadillo Den in South Austin isn’t just a great bar—it’s one of the best places to spend an afternoon in Austin. Around the tables, expect to find the standard suite of bar games (giant Jenga, anyone?), but the main attraction is the ax throwing lane in the back that you can rent by the half-hour in the evenings. Thankfully, Downtown drink prices haven’t quite made their way this far south, which means drinking here won’t break the bank. And as an added bonus, you can get an additional 10% off your tab if you show the bartender you arrived via rideshare (which you should probably do anyway).",
    image: "images/l37.png",
    address: "10106 Menchaca Rd, Austin, TX 78748, United States",
    phone: "+15129932998",
    website: "https://armadillodenaustin.com/",
  },
  {
    id: 43,
    name: "Here Nor There",
    description:
      "If you’ve ever wanted to feel like a secret agent, head to Here Nor There. It’s located in a basement under an alleyway in downtown Austin, right next to The Driskill. Make reservations through a dedicated app, which will reveal a secret code before your scheduled time that will let you through the gate. It sounds like a lot of effort, but it’s worth it once you walk through the front door and are greeted by a life-sized stuffed bear holding a tray of champagne and old-school hip hop on the speakers. The cocktails are pricey, but with liquid nitrogen-cooled olives, clarified punches, and hand-stamped ice at play, it all feels like part of the show.",
    image: "images/l38.png",
    address: "612 Brazos St, Austin, TX 78701, United States",
    phone: "+15129497995",
    website: "http://hntaustin.com/",
  },
  {
    id: 44,
    name: "The White Horse",
    description:
      "There aren’t a lot of bars that blend generational lines quite as well as The White Horse, one of the most popular venues on the East Side. Expect to find gray-haired couples showing off their moves next to young first-timers. There’s live music most nights, and a floor filled with people two-stepping. There are a few beer options here, though this is probably one of those places where you’re drinking Lone Stars or Shiners. It’s also one of, if not the only, place in town with a wall of whiskeys on draft. ",
    image: "images/l39.png",
    address: "500 Comal St, Austin, TX 78702, United States",
    phone: "+15125536756",
    website: "http://thewhitehorseaustin.com/",
  },
  {
    id: 45,
    name: "Small Victory",
    description:
      "At the top of a short flight of stairs in a parking garage downtown, Small Victory is a fairly small cocktail bar with a large selection of spirits, an extensive cocktail menu, and a great list of wines and sherries available by the glass. You can definitely pop in here with a small group, but the majority of the tables are two-seaters, both on the same side, so it’s definitely more of a date night destination. You can make reservations ahead of time, or just walk up to the little red gate on East 7th and give the bar a buzz—we’ve had pretty good luck walking in relatively early in the night.",
    image: "images/l40.png",
    address: "108 E 7th St, Austin, TX 78701, United States",
    phone: "+15129039450",
    website: "http://smallvictory.bar/",
  },
  {
    id: 46,
    name: "Whisler's",
    description:
      "It’s no secret that the East Side gets busy on Friday and Saturday nights, but even the busiest bars in the area barely hold a candle to the crowds at Whisler’s, home to some of the best cocktails east of I-35. Fortunately, with two full bars—plus a rooftop mezcaleria—Whisler’s is equipped to handle whatever the city throws at it. It’s built into an old warehouse that feels more like it belongs in Brooklyn than across from a hotel in East Austin. Grab an Old Fashioned, then make your way out to the massive patio where you can also grab an excellent smashburger from Golden Tiger.",
    image: "images/l41.png",
    address: "1816 E 6th St, Austin, TX 78702, United States",
    phone: "+15124800781",
    website: "http://whislersatx.com/",
  },
  {
    id: 47,
    name: "Crown & Anchor Pub",
    description:
      "Every day the North Campus bar Crown & Anchor puts a different brewery (or region) from their tap list on sale, and knocks the price down to less than $5 a pint. It’s one of the cheapest places in town to sample some great craft beers in a fun, laid-back environment. The bartenders will probably make some sarcastic remark about your order, before opening up with a joke that’ll make you feel like a regular, whether it’s your first or 40th visit. Grab a pint—or make it a pitcher—and play a few rounds of billiards or darts while you figure out which burger you’re going to order.",
    image: "images/l42.png",
    address: "500 Comal St, Austin, TX 78702, United States",
    phone: "+15123229168",
    website: "http://www.crownandanchorpub.com/",
  },
  {
    id: 48,
    name: "Cheer Up Charlies",
    description:
      "There’s usually live music playing on most nights at Cheer Up Charlies, one of the most popular bars in the Red River District downtown (there are two stages, inside and out). Here you’ll find kombucha on tap and juice-based cocktails, right alongside a full bar and standard beer and wine offerings. There’s also an Arlo’s parked out front—a vegan food trailer where you’ll find some excellent plant-based burgers (we like the one grilled in barbecue sauce).",
    image: "images/l43.png",
    address: "900 Red River St, Austin, TX 78701, United States",
    phone: "+15124312133",
    website: "http://www.cheerupcharlies.com/",
  },
];

// Function to populate card with data
function populateCard(card, item) {
  card.innerHTML = `
        <div class="image-frame">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M13.75 0.25L19 0.25C19.1989 0.25 19.3897 0.329018 19.5303 0.46967C19.671 0.610322 19.75 0.801088 19.75 1V6.25C19.75 6.66421 19.4142 7 19 7C18.5858 7 18.25 6.66421 18.25 6.25V2.81066L6.03033 15.0303C5.73744 15.3232 5.26256 15.3232 4.96967 15.0303C4.67678 14.7374 4.67678 14.2626 4.96967 13.9697L17.1893 1.75L13.75 1.75C13.3358 1.75 13 1.41421 13 1C13 0.585787 13.3358 0.25 13.75 0.25ZM3.25 4.75C2.42157 4.75 1.75 5.42157 1.75 6.25V16.75C1.75 17.5784 2.42157 18.25 3.25 18.25H13.75C14.5784 18.25 15.25 17.5784 15.25 16.75V8.5C15.25 8.08579 15.5858 7.75 16 7.75C16.4142 7.75 16.75 8.08579 16.75 8.5V16.75C16.75 18.4069 15.4069 19.75 13.75 19.75H3.25C1.59315 19.75 0.25 18.4069 0.25 16.75V6.25C0.25 4.59315 1.59315 3.25 3.25 3.25H11.5C11.9142 3.25 12.25 3.58579 12.25 4C12.25 4.41421 11.9142 4.75 11.5 4.75H3.25Z"
                                fill="#0F172A" />
                        </svg>
          <img src="${item.image}" alt="${item.name}">
        </div>
        <div class="body">
          <h4>${item.name}</h4>
        </div>
      `;

  card.addEventListener("click", () => {
    const modal = document.querySelector(".modal");
    const modalContent = document.querySelector(".modal-content");

    let actions = "";
    let location = "";
    let list = "";
    let btns = "";
    if (item.i1) {
      list += `<p class="item"><i><svg width="16" height="18" viewBox="0 0 16 18" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M9.28033 8.46967C9.57322 8.76256 9.57322 9.23744 9.28033 9.53033L1.78033 17.0303C1.48744 17.3232 1.01256 17.3232 0.71967 17.0303C0.426777 16.7374 0.426777 16.2626 0.71967 15.9697L7.68934 9L0.719671 2.03033C0.426777 1.73744 0.426777 1.26256 0.719671 0.96967C1.01256 0.676777 1.48744 0.676777 1.78033 0.96967L9.28033 8.46967Z" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M15.2803 8.46967C15.5732 8.76256 15.5732 9.23744 15.2803 9.53033L7.78033 17.0303C7.48744 17.3232 7.01256 17.3232 6.71967 17.0303C6.42678 16.7374 6.42678 16.2626 6.71967 15.9697L13.6893 9L6.71967 2.03033C6.42678 1.73744 6.42678 1.26256 6.71967 0.96967C7.01256 0.676777 7.48744 0.676777 7.78033 0.96967L15.2803 8.46967Z" />
                                </svg>
                            </i>${item.i1}</p>`;
    }
    if (item.i2) {
      list += `<p class="item"><i><svg width="16" height="18" viewBox="0 0 16 18" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M9.28033 8.46967C9.57322 8.76256 9.57322 9.23744 9.28033 9.53033L1.78033 17.0303C1.48744 17.3232 1.01256 17.3232 0.71967 17.0303C0.426777 16.7374 0.426777 16.2626 0.71967 15.9697L7.68934 9L0.719671 2.03033C0.426777 1.73744 0.426777 1.26256 0.719671 0.96967C1.01256 0.676777 1.48744 0.676777 1.78033 0.96967L9.28033 8.46967Z" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M15.2803 8.46967C15.5732 8.76256 15.5732 9.23744 15.2803 9.53033L7.78033 17.0303C7.48744 17.3232 7.01256 17.3232 6.71967 17.0303C6.42678 16.7374 6.42678 16.2626 6.71967 15.9697L13.6893 9L6.71967 2.03033C6.42678 1.73744 6.42678 1.26256 6.71967 0.96967C7.01256 0.676777 7.48744 0.676777 7.78033 0.96967L15.2803 8.46967Z" />
                                </svg>
                            </i>${item.i2}</p>`;
    }
    if (item.i3) {
      list += `<p class="item"><i><svg width="16" height="18" viewBox="0 0 16 18" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M9.28033 8.46967C9.57322 8.76256 9.57322 9.23744 9.28033 9.53033L1.78033 17.0303C1.48744 17.3232 1.01256 17.3232 0.71967 17.0303C0.426777 16.7374 0.426777 16.2626 0.71967 15.9697L7.68934 9L0.719671 2.03033C0.426777 1.73744 0.426777 1.26256 0.719671 0.96967C1.01256 0.676777 1.48744 0.676777 1.78033 0.96967L9.28033 8.46967Z" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M15.2803 8.46967C15.5732 8.76256 15.5732 9.23744 15.2803 9.53033L7.78033 17.0303C7.48744 17.3232 7.01256 17.3232 6.71967 17.0303C6.42678 16.7374 6.42678 16.2626 6.71967 15.9697L13.6893 9L6.71967 2.03033C6.42678 1.73744 6.42678 1.26256 6.71967 0.96967C7.01256 0.676777 7.48744 0.676777 7.78033 0.96967L15.2803 8.46967Z" />
                                </svg>
                            </i>${item.i3}</p>`;
    }
    if (item.i4) {
      list += `<p class="item"><i><svg width="16" height="18" viewBox="0 0 16 18" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M9.28033 8.46967C9.57322 8.76256 9.57322 9.23744 9.28033 9.53033L1.78033 17.0303C1.48744 17.3232 1.01256 17.3232 0.71967 17.0303C0.426777 16.7374 0.426777 16.2626 0.71967 15.9697L7.68934 9L0.719671 2.03033C0.426777 1.73744 0.426777 1.26256 0.719671 0.96967C1.01256 0.676777 1.48744 0.676777 1.78033 0.96967L9.28033 8.46967Z" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M15.2803 8.46967C15.5732 8.76256 15.5732 9.23744 15.2803 9.53033L7.78033 17.0303C7.48744 17.3232 7.01256 17.3232 6.71967 17.0303C6.42678 16.7374 6.42678 16.2626 6.71967 15.9697L13.6893 9L6.71967 2.03033C6.42678 1.73744 6.42678 1.26256 6.71967 0.96967C7.01256 0.676777 7.48744 0.676777 7.78033 0.96967L15.2803 8.46967Z" />
                                </svg>
                            </i>${item.i4}</p>`;
    }
    if (item.i5) {
      list += `<p class="item"><i><svg width="16" height="18" viewBox="0 0 16 18" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M9.28033 8.46967C9.57322 8.76256 9.57322 9.23744 9.28033 9.53033L1.78033 17.0303C1.48744 17.3232 1.01256 17.3232 0.71967 17.0303C0.426777 16.7374 0.426777 16.2626 0.71967 15.9697L7.68934 9L0.719671 2.03033C0.426777 1.73744 0.426777 1.26256 0.719671 0.96967C1.01256 0.676777 1.48744 0.676777 1.78033 0.96967L9.28033 8.46967Z" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M15.2803 8.46967C15.5732 8.76256 15.5732 9.23744 15.2803 9.53033L7.78033 17.0303C7.48744 17.3232 7.01256 17.3232 6.71967 17.0303C6.42678 16.7374 6.42678 16.2626 6.71967 15.9697L13.6893 9L6.71967 2.03033C6.42678 1.73744 6.42678 1.26256 6.71967 0.96967C7.01256 0.676777 7.48744 0.676777 7.78033 0.96967L15.2803 8.46967Z" />
                                </svg>
                            </i>${item.i5}</p>`;
    }
    if (item.btn) {
      btns += `<a href="#contact" onclick="mdlcls()"><button class="empty">${item.btn} <i><svg width="14" height="14"
                                    viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.75 13.25L13.25 0.75M13.25 0.75L3.875 0.75M13.25 0.75V10.125"
                                        stroke="white" stroke-width="1.25" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </i></button></a>`;
    }
    if (item.phone) {
      actions += `<a href="tel:${item.phone}"><svg width="22" height="22" viewBox="0 0 22 22" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M0.5 3.5C0.5 1.84315 1.84315 0.5 3.5 0.5H4.87163C5.732 0.5 6.48197 1.08556 6.69064 1.92025L7.79644 6.34343C7.97941 7.0753 7.70594 7.84555 7.10242 8.29818L5.8088 9.2684C5.67447 9.36915 5.64527 9.51668 5.683 9.61969C6.81851 12.7195 9.28051 15.1815 12.3803 16.317C12.4833 16.3547 12.6309 16.3255 12.7316 16.1912L13.7018 14.8976C14.1545 14.2941 14.9247 14.0206 15.6566 14.2036L20.0798 15.3094C20.9144 15.518 21.5 16.268 21.5 17.1284V18.5C21.5 20.1569 20.1569 21.5 18.5 21.5H16.25C7.55151 21.5 0.5 14.4485 0.5 5.75V3.5Z"
                                fill="#fff" />
           </svg></a>`;
    }

    if (item.website) {
      actions += `<a href="${item.website}" target="_blank">
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M18.9016 3.09835C17.4372 1.63388 15.0628 1.63388 13.5984 3.09835L9.09835 7.59835C7.63388 9.06282 7.63388 11.4372 9.09835 12.9017C9.40922 13.2125 9.75977 13.4565 10.133 13.6348C10.5068 13.8134 10.665 14.2611 10.4865 14.6349C10.3079 15.0086 9.86021 15.1669 9.48645 14.9883C8.96169 14.7376 8.47063 14.3953 8.03769 13.9623C5.98744 11.9121 5.98744 8.58794 8.03769 6.53769L12.5377 2.03769C14.5879 -0.0125632 17.9121 -0.0125632 19.9623 2.03769C22.0126 4.08794 22.0126 7.41206 19.9623 9.46231L18.2053 11.2193C17.9124 11.5122 17.4376 11.5122 17.1447 11.2193C16.8518 10.9264 16.8518 10.4515 17.1447 10.1586L18.9016 8.40165C20.3661 6.93718 20.3661 4.56282 18.9016 3.09835ZM11.5135 7.36513C11.6921 6.99138 12.1398 6.83313 12.5135 7.01167C13.0383 7.26236 13.5294 7.60475 13.9623 8.03769C16.0126 10.0879 16.0126 13.4121 13.9623 15.4623L9.46231 19.9623C7.41206 22.0126 4.08794 22.0126 2.03769 19.9623C-0.0125632 17.9121 -0.0125632 14.5879 2.03769 12.5377L3.79466 10.7807C4.08755 10.4878 4.56243 10.4878 4.85532 10.7807C5.14821 11.0736 5.14821 11.5485 4.85532 11.8414L3.09835 13.5984C1.63388 15.0628 1.63388 17.4372 3.09835 18.9016C4.56282 20.3661 6.93718 20.3661 8.40165 18.9016L12.9017 14.4016C14.3661 12.9372 14.3661 10.5628 12.9017 9.09835C12.5908 8.78748 12.2402 8.54347 11.867 8.36517C11.4932 8.18662 11.335 7.73889 11.5135 7.36513Z"
                                fill="#fff" />
             </svg></a>`;
    }

    if (item.email) {
      actions += `<a href="mailto:${item.email}"><svg width="22" height="18" viewBox="0 0 22 18" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M0.5 5.6691V14.25C0.5 15.9069 1.84315 17.25 3.5 17.25H18.5C20.1569 17.25 21.5 15.9069 21.5 14.25V5.6691L12.5723 11.1631C11.6081 11.7564 10.3919 11.7564 9.42771 11.1631L0.5 5.6691Z"
                                fill="#fff" />
                            <path
                                d="M21.5 3.90783V3.75C21.5 2.09315 20.1569 0.75 18.5 0.75H3.5C1.84315 0.75 0.5 2.09315 0.5 3.75V3.90783L10.2139 9.88558C10.696 10.1823 11.304 10.1823 11.7861 9.88558L21.5 3.90783Z"
                                fill="#fff" />
                        </svg></a>`;
    }
    if (item.address) {
      location += `            <p class="location">
             <svg width="18" height="21" viewBox="0 0 18 21" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M8.53975 20.351C8.56995 20.3685 8.59369 20.3821 8.6105 20.3915L8.63843 20.4071C8.8613 20.5294 9.13776 20.5285 9.36084 20.4075L9.3895 20.3915C9.40631 20.3821 9.43005 20.3685 9.46025 20.351C9.52066 20.316 9.60697 20.265 9.7155 20.1982C9.93246 20.0646 10.2388 19.8676 10.6046 19.6091C11.3351 19.0931 12.3097 18.3274 13.2865 17.3273C15.2307 15.3368 17.25 12.3462 17.25 8.5C17.25 3.94365 13.5563 0.25 9 0.25C4.44365 0.25 0.75 3.94365 0.75 8.5C0.75 12.3462 2.76932 15.3368 4.71346 17.3273C5.69025 18.3274 6.66491 19.0931 7.39539 19.6091C7.76125 19.8676 8.06754 20.0646 8.2845 20.1982C8.39303 20.265 8.47934 20.316 8.53975 20.351ZM9 11.5C10.6569 11.5 12 10.1569 12 8.5C12 6.84315 10.6569 5.5 9 5.5C7.34315 5.5 6 6.84315 6 8.5C6 10.1569 7.34315 11.5 9 11.5Z"
                            fill="#fff" />
                    </svg>
                ${item.address}
              </p>`;
    }
    modalContent.innerHTML = `
            <div class="image-frame main">
              <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="body">
              <h2>${item.name}</h2>
              ${location}
              <p class="description">${item.description}</p>
              <div class="list">
              ${list}
              </div>
               <div class="actions">${actions}</div>
               ${btns}
            </div>
        `;

    modal.classList.add("active");
    const closeModal = document.querySelector(".close");
    closeModal.addEventListener("click", () => {
      modal.classList.remove("active");
    });

    window.addEventListener("click", (event) => {
      if (event.target === modal) {
        modal.classList.remove("active");
      }
    });
  });
}
function mdlcls() {
  const modal = document.querySelector(".modal");
  modal.classList.remove("active");
}
// Insert data into existing card divs
document.querySelectorAll(".card").forEach((card) => {
  const id = card.getAttribute("data-id");
  const item = data.find((d) => d.id == id);
  if (item) {
    populateCard(card, item);
  }
});
