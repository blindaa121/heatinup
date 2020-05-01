# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



#demo_user 
demo_user = User.create(username: 'demo_user', password: 'password')

# The Last Dance (Array of Air Jordan sneaker objects)
Sneaker.destroy_all

the_last_dance = [
    {
        name: "Air Jordan 12 Retro 'Flu Game' 2016",
        description: "The Air Jordan 12 Retro ‘Flu Game’ 2016 celebrates Michael Jordan’s legendary performance in Game 5 of the 1997 NBA Finals. Battling flu-like symptoms, Jordan lead the Bulls to a 3-2 series lead over the Utah Jazz with 38 points, 7 rebounds, 5 assists, 3 steals, and 1 block. Previously retroed in 2003 and 2009, this 2016 version stays faithful to the OG design with its black tumbled leather upper and varsity red on the mudguard and outsole.",
        release_date: "2016-05-28",
        sku: "130690 002",
        brand: "Air Jordan",
        upper_material: "Leather",
        main_color: "Black",
        colorway: "Black/Varsity Red",
        designer: "Tinker Hatfield",
        silhouette: "Air Jordan 12",
        technology: "Air",
        category: "Lifestyle"
    },
    {
        name: "Air Jordan 4 Retro OG 'Bred' 2019",
        description: "The 2019 edition of the Air Jordan 4 ‘Bred’ celebrates the 30th anniversary of the classic silhouette, appearing in the same colorway that Michael Jordan wore when he sank ‘The Shot’ during the first round of the 1989 NBA playoffs. It’s rendered in a build that’s faithful to the original, complete with a black nubuck upper, visible Air Sole cushioning underfoot and Nike Air branding on the heel.",
        release_date: "2019-05-04",
        sku: "308497 060",
        brand: "Air Jordan",
        upper_material: "Nubuck",
        main_color: "Black",
        colorway: "Black/Cement Grey-Summit White-Fire Red",
        designer: "Tinker Hatfield",
        silhouette: "Air Jordan 4",
        technology: "Air",
        category: "Lifestyle"
    },
    {
        name: "Air Jordan 14 Retro 'Last Shot' 2018",
        description: "Michael Jordan fans will always remember the Air Jordan 14 as the shoe Jordan was wearing when he hit the winning jumper in Game 6 of the 1998 NBA Finals. The legendary sneaker was reissued again in June 2018. All of the model’s original elements remain for this updated ‘Last Shot’ iteration, including black leather uppers and red Jumpman detailing on the heel and tongue. Its distinct, Ferrari-style medallion on the midfoot continues to serve as the standout feature of the iconic silhouette.",
        release_date: "2018-06-13",
        sku: "487471 003",
        brand: "Air Jordan",
        upper_material: "Leather",
        main_color: "Black",
        colorway: "Black/Varsity Red",
        designer: "Tinker Hatfield",
        silhouette: "Air Jordan 14",
        technology: "Zoom Air",
        category: "Lifestyle"
    },
    {
        name: "Air Jordan 6 Retro 'Infrared' 2019",
        description: "The 2019 edition of the Air Jordan 6 Retro ‘Infrared’ is true to the original colorway, which Michael Jordan wore when he captured his first NBA title. Dressed primarily in black nubuck with a reflective 3M layer underneath, the mid-top features Infrared accents on the midsole, heel tab and lace lock. Nike Air branding adorns the heel and sockliner, an OG detail last seen on the 2000 retro.",
        release_date: "2016-05-28",
        sku: "130690 001",
        brand: "Air Jordan",
        upper_material: "Leather",
        main_color: "Black",
        colorway: "Black/Varsity Red",
        designer: "Tinker Hatfield",
        silhouette: "Air Jordan 6",
        technology: "Air",
        category: "Lifestyle"
    },
    {
        name: "Air Jordan 11 Retro 'Space Jam' 2016",
        description: "The Air Jordan 11 Retro ‘Space Jam’ 2016 commemorates the 20th anniversary of the movie ‘Space Jam.’ Worn by Michael Jordan as a Player Exclusive (PE) in both the movie and the 1995 NBA Playoffs, the 2016 retro ended up being Nike’s largest and most successful shoe launch ever. This 2016 sneaker is a more faithful reproduction of the original PE than the 2000 and 2009 retros. The sneaker also swaps the traditional #23 for MJ’s comeback #45 on the heel, a first for an Air Jordan 11 retail release.",
        release_date: "2016-12-09",
        sku: "378037 003",
        brand: "Air Jordan",
        upper_material: "Leather",
        main_color: "Black",
        colorway: "Black/Concord-White",
        designer: "Tinker Hatfield",
        silhouette: "Air Jordan 11",
        technology: "Air",
        category: "Lifestyle"
    },
    {
        name: "Air Jordan 11 Retro 'Bred' 2019",
        description: "The Air Jordan 11 Retro 'Bred' 2019 brings back an original colorway initially debuted in 1995. The Tinker Hatfield-designed silhouette features Chicago Bulls colors, with black mesh on the upper sitting atop shiny black patent leather. A white midsole melds nicely with a translucent Varsity Red outsole, and is the same colorway that Michael Jordan wore during the 1996 NBA championship playoff run. This retro was distributed in December 2019 with OG detailing, including high-cut patent leather, signature Jumpman branding and MJ's number 23 stamped on the heel.",
        release_date: "2019-12-14",
        sku: "378037 061",
        brand: "Air Jordan",
        upper_material: "Patent Leather",
        main_color: "Red",
        colorway: "Black/White/Varsity Red",
        designer: "Tinker Hatfield",
        silhouette: "Air Jordan 11",
        technology: "Air",
        category: "Lifestyle"
    },
    {
        name: "Air Jordan 8 Retro 'Playoff' 2013",
        description: "The Nike Air Jordan 8 Retro 'Playoff' 2013 is a retro re-release of the sneaker worn by Michael Jordan during Game 6 of the 1993 NBA Finals against the Phoenix Suns. The win sealed Michael Jordan and the Bulls' first three-peat NBA Championship and gave Jordan his third-straight Finals MVP. Staying faithful to the original design, the 'Playoff' features a black nubuck suede upper with white, black, and True Red graphical overlays at the ankles. The most noticeable difference between the 1993 model and the 2013 retro is the True Red heel tab found on the OG '93 sneakers has been changed to black on the 2013 retro. The Air Jordan 8 Retro 'Playoff' was also retro released in 2007.",
        release_date: "2013-06-29",
        sku: "305381 061",
        brand: "Air Jordan",
        upper_material: "Durabuck",
        main_color: "Black",
        colorway: "Black/Varsity Red-White-Bright Concord",
        designer: "Tinker Hatfield",
        silhouette: "Air Jordan 8",
        technology: "Air",
        category: "Lifestyle"
    },
    {
        name: "Air Jordan 7 Retro 'Raptor' 2012",
        description: "The Nike Air Jordan 7 Retro 'Raptor' 2012 offers a version of the OG 1992 colorway that's also been retro-released in 2002 and 2009. The design combines a black nubuck upper with True Red and Club Purple accents. Released in September 2012, the colorway gets its nickname from its similarity to the Toronto Raptors team colors.",
        release_date: "2012-09-01",
        sku: "304775 018",
        brand: "Air Jordan",
        upper_material: "Nubuck",
        main_color: "Black",
        colorway: "Black/Tr Rd-Drk Chrcl-Clb Prpl",
        designer: "Tinker Hatfield",
        silhouette: "Air Jordan 7",
        technology: "Air",
        category: "Lifestyle"
    },
    {
        name: "Air Jordan 1 Retro High OG 'Chicago' 2015",
        description: "The Air Jordan 1 Retro High OG 'Chicago' 2015 colorway was designed to avoid Jordan's $5,000-per game fines from the NBA after the original black and red colorway was banned. The 'Chicago' was first retroed in 1994 and stayed true to the 1985 design. Further retros were released in 2013 with small changes to the design, and again in 2015 with the original branding details: the Nike Air logo on the tongue and the original clean heel without the Jumpman logo.",
        release_date: "2015-05-29",
        sku: "555088 101",
        brand: "Air Jordan",
        upper_material: "Leather",
        main_color: "Red",
        colorway: "White/Black-Varsity Red",
        designer: "Peter Moore",
        silhouette: "Air Jordan 1",
        technology: "Air",
        category: "Lifestyle"
    },
    {
        name: "Air Jordan 13 Retro 'Flint' 2020",
        description: "Released in the spring of 2020, the Air Jordan 13 Retro 'Flint' 2020 brings back an OG colorway in grey and 'French Blue.' Including its late-90s debut, this is the fourth time the cool colorway has been executed on the AJ13. Unlike the last iteration rolled out in 2010, this version features the reflective detailing that made the original unique. Constructed with smooth grey suede and 'cat's-paw' traction underfoot, this sneaker is a blend of streamlined style and raw power.",
        release_date: "2020-05-30",
        sku: "414571 404",
        brand: "Air Jordan",
        upper_material: "Textile",
        main_color: "Blue",
        colorway: "Navy/Carolina Blue/Flint Grey/White",
        designer: "Tinker Hatfield",
        silhouette: "Air Jordan 13",
        technology: "Zoom",
        category: "Lifestyle"
    },
    {
        name: "Air Jordan 3 Retro '88' 2013",
        description: "In 2013, the Jordan Brand released the Air Jordan 3 Retro 88 commemorating the 25th anniversary of Jordan's free-throw line dunk. The sneaker even launched at 3:51 pm, the exact time Jordan took off and sealed his victory. This was the first Jordan Retro to feature NIKE AIR branding on the heel since the first 1994 retros.",
        release_date: "2016-12-09",
        sku: "378037 005",
        brand: "Air Jordan",
        upper_material: "Leather",
        main_color: "Black",
        colorway: "Black/Concord-White",
        designer: "Tinker Hatfield",
        silhouette: "Air Jordan 11",
        technology: "Air",
        category: "Lifestyle"
    },
    {
        name: "Air Jordan 11 Retro Low 'Concord-Bred'",
        description: "The Air Jordan 11 Retro Low 'Concord-Bred' combines two iconic OG colorways of the original mid-top silhouette. The upper replicates the look of the ‘Concord’ Air Jordan 11, featuring a white leather upper with a signature patent leather overlay in contrasting black and unexpected red branding elements at the tongue and heel. A white foam midsole gives way to a semi-translucent red rubber outsole, borrowed from the ‘Bred’ Air Jordan 11.",
        release_date: "2020-06-20",
        sku: "AV2187 160",
        brand: "Air Jordan",
        upper_material: "Patent Leather",
        main_color: "White",
        colorway: "Black/Concord-White",
        designer: "Tinker Hatfield",
        silhouette: "Air Jordan 11",
        technology: "Air",
        category: "Lifestyle"
    },
    {
        name: "Air Jordan 5 Retro 'Fire Red' 2020",
        description: "The 2020 edition of the Air Jordan 5 Retro ‘Fire Red’ brings back the OG colorway of the classic silhouette on the occasion of its 30th anniversary. The build is faithful to the original, featuring a white leather upper with a silver reflective tongue and Nike Air branding on the heel. The black midsole, embellished with red shark tooth detailing inspired by a WWII P-51 Mustang fighter plane, is reinforced by an icy translucent outsole.",
        release_date: "2020-05-02",
        sku: "DA1911 102",
        brand: "Air Jordan",
        upper_material: "Leather",
        main_color: "Red",
        colorway: "True White/Fire Red/Black/Metallic Silver",
        designer: "Tinker Hatfield",
        silhouette: "Air Jordan 5",
        technology: "Air",
        category: "Lifestyle"
    },
    {
        name: "Air Jordan 5 Retro '88' 2013",
        description: "In 2013, the Jordan Brand released the Air Jordan 3 Retro 88 commemorating the 25th anniversary of Jordan's free-throw line dunk. The sneaker even launched at 3:51 pm, the exact time Jordan took off and sealed his victory. This was the first Jordan Retro to feature NIKE AIR branding on the heel since the first 1994 retros.",
        release_date: "2016-12-09",
        sku: "378037 002",
        brand: "Air Jordan",
        upper_material: "Leather",
        main_color: "Black",
        colorway: "Black/Concord-White",
        designer: "Tinker Hatfield",
        silhouette: "Air Jordan 11",
        technology: "Air",
        category: "Lifestyle"
    },
    {
        name: "Air Jordan 1 Retro High OG 'Royal Toe'",
        description: "The Air Jordan 1 Retro High OG 'Royal Toe' applies a familiar blend of colors to the iconic silhouette. The all-leather upper features a white base with contrasting black overlays and pops of Game Royal at the collar, toe box and rubber outsole. A lightly padded nylon tongue in black is topped with a Nike Air tongue tag, while the classic Jordan Wings logo appears in white on the lateral collar flap.",
        release_date: "2020-05-09",
        sku: "555088 041",
        brand: "Air Jordan",
        upper_material: "Leather",
        main_color: "Blue",
        colorway: "Black/White/Game Royal/Black",
        designer: "Peter Moore",
        silhouette: "Air Jordan 1",
        technology: "Air",
        category: "Lifestyle"
    },
    {
        name: "Air Jordan 2 Retro 'Chicago Home'",
        description: "Produced in Italy, the Air Jordan 2 comes with faux lizard skin on the upper, a full-length Nike Air midsole, and a Swoosh-less design. The sneaker was revolutionary in that it was one of the first basketball shoes to feature a soft midsole from heel to toe. After it's original release in 1987, the Air Jordan 2 saw its first retro in 1994. Rumor has it the original molds were lost or stolen and the sneaker wouldn't retro until 2004. The sneaker returned to shelves in 2008 as part of the Jordan 21/2 Collezione 'Countdown' Pack, again in 2010, and most recently in 2014.",
        release_date: "2014-06-07",
        sku: "385475 102",
        brand: "Air Jordan",
        upper_material: "Leather",
        main_color: "White",
        colorway: "White/Black-Vrsty Red-Cmnt Gry",
        designer: "Bruce Kilgore",
        silhouette: "Air Jordan 2",
        technology: "Air",
        category: "Lifestyle"
    },
    {
        name: "Air Jordan 2 Retro '2004'",
        description: "In 1986, Bruce Kilgore defied conventional footwear design with the Air Jordan 2. He stripped the shoe of intricacies and focused instead on the asymmetrical and textural aspects while still maintaining maximum performance elements. Re-released in 2004, the Air Jordan 2 Retro ‘2004’ sports the original color scheme, with a white leather upper and black detailing on the laces, lining and midsole. The colorway is highlighted by the Varsity Red accents on the heel counter, outsole, lining and tab.",
        release_date: "2004-03-27",
        sku: "308308 161",
        brand: "Air Jordan",
        upper_material: "Leather",
        main_color: "White",
        colorway: "White/Varsity Red-Black",
        designer: "Bruce Kilgore",
        silhouette: "Air Jordan 2",
        technology: "Air",
        category: "Lifestyle"
    }
]


the_last_dance.each do |sneaker|    
    Sneaker.create!(sneaker)
end