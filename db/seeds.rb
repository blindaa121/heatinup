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
        sku: "580775 160",
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
    },
    {
        name: "Air Jordan 3 Retro OG 'Black Cement' 2018",
        description: "The Air Jordan 3 was the first of many for Michael Jordan and Tinker Hatfield. It was the first time they would work together on the signature shoe, it was the first time the elephant print made an appearance on a shoe, and it was the first time the “Jumpman” logo adorned the tongue with the classic “NIKE AIR” stamped on the heel. The Black/Cement Air Jordan 3 Retro OG comes back in its original form. Featuring black tumbled and smooth leather uppers and all the distinct details we remember thirty years later.",
        release_date: "2018-02-17",
        sku: "854262 001",
        brand: "Air Jordan",
        upper_material: "Leather",
        main_color: "Black",
        colorway: "Black/Cement Grey-White-Fire Red",
        designer: "Tinker Hatfield",
        silhouette: "Air Jordan 3",
        technology: "Air",
        category: "Lifestyle"
    },
    {
        name: "Air Jordan 3 Retro OG 'True Blue' 2016",
        description: "The Air Jordan 3 Retro OG ‘True Blue’ was released as one of the four OG colorways in 1988. It saw several non-OG retro releases, starting in 2001, in 2009 (Europe only), and again in 2011 as part of a wide Air Jordan 3 retro release that commemorated the 23rd anniversary of the shoe. The 2016 retro saw the ‘True Blue’ return again, but this time with the original branding and logo details that mimic the 1988 release.",
        release_date: "2016-11-25",
        sku: "854262 106",
        brand: "Air Jordan",
        upper_material: "Leather",
        main_color: "White",
        colorway: "White/True Blue",
        designer: "Tinker Hatfield",
        silhouette: "Air Jordan 3",
        technology: "Air",
        category: "Lifetyle"
    },
    {
        name: "Air Jordan 4 Retro 'Cement' 2012",
        description: "The Air Jordan 4 Retro 'Cement’ 2012 combines a white leather upper with Fire Red, Black, and speckled Cement Grey accents. Released in 1989 as one of the four original colorways, the sneaker was retro’d in 1999 and 2016, but this 2012 Air Jordan 4 Retro 'Cement’ is the only version that swaps the OG Nike Air branding for a Jumpman logo on the heel.",
        release_date: "2012-02-18",
        sku: "308497 103",
        brand: "Air Jordan",
        upper_material: "Leather",
        main_color: "White",
        colorway: "White/Black-Cement Grey",
        designer: "Tinker Hatfield",
        silhouette: "Air Jordan 4",
        technology: "Air",
        category: "Lifestyle"
    },
    {
        name: "Air Jordan 10 Retro 'Shadow' 2018",
        description: "The Air Jordan 10 ’Shadow’ gets a true retro that resembles the 1994 original. Featuring a Dark Shadow nubuck and black tumbled leather upper with a black midsole, True Red accents appear on the Jumpman logo on the heel and outsole. The only other time this colorway came back was during the 2008 Countdown Pack with the Air Jordan 13. That version featured a ‘23’ embroidered on the side profile and a distinctly different shade of grey.",
        release_date: "2018-04-21",
        sku: "310805 002",
        brand: "Air Jordan",
        upper_material: "Leather",
        main_color: "Black",
        colorway: "Dark Shadow/Black-True Red",
        designer: "Tinker Hatfield",
        silhouette: "Air Jordan 10",
        technology: "Air",
        category: "Lifestyle"
    },
    {
        name: "Air Jordan 10 'Double Nickel'",
        description: "Released in March of 2015, the Air Jordan 10 ‘Double Nickel’ celebrates the player exclusive Air Jordan 10 ‘Chicago’ worn by Jordan on his return to the NBA in 1995. ‘Double Nickel’ references the 55 points he scored against the New York Knicks at Madison Square Garden after a stint in Minor League baseball. This 2015 version delivers a more faithful reproduction of the original 1995 Air Jordan 10 ‘Chicago’ colorway than the 2012 ‘Chicago’ in its shape, materials, and detailing.",
        release_date: "2015-03-28",
        sku: "310805 102",
        brand: "Air Jordan",
        upper_material: "Leather",
        main_color: "White",
        colorway: "White/Varsity Red-Black",
        designer: "Tinker Hatfield",
        silhouette: "Air Jordan 10",
        technology: "Air",
        category: "Lifestyle"
    }
]

#Off-White Collection
off_white = [
    {
        name: "OFF-WHITE x Air Jordan 1 Retro High OG 'UNC'",
        description: "Inspired by Michael Jordan’s alma mater, the Off-White x Air Jordan 1 Retro High OG ‘UNC’ carries a classic two-tone composition, filtered through Virgil Abloh’s unique design prism. The process involves taking a white leather base with dark powder blue overlays and adding embellishments that convey an expressive, handmade quality. They include detached Wings, a floating Swoosh, and lines of text on the medial-side quarter panel delineating the taxonomy of the shoe.",
        release_date: "2018-05-23",
        sku: "AQ0818 148",
        brand: "Air Jordan",
        upper_material: "Leather",
        main_color: "Blue",
        colorway: "White/Dark Powder Blue-Cone",
        designer: "Peter Moore",
        silhouette: "Air Jordan 1",
        technology: "Air",
        category: "Lifestyle"
    },
    {
        name: "OFF-WHITE x Air Jordan 5 Retro SP 'Muslin'",
        description: "The OFF-WHITE x Air Jordan 5 SP 'Muslin' delivers Virgil Abloh’s stylized take on the retro silhouette. The faded black textile upper blends traditional details, including a silver reflective tongue and embroidered Nike Air branding, with Virgil’s signature text on the laces and medial-side quarter panel. A pre-yellowed translucent rubber outsole adds to the sneaker’s vintage aesthetic.",
        release_date: "2020-02-15",
        sku: "CT8480 001",
        brand: "Air Jordan",
        upper_material: "Leather",
        main_color: "Black",
        colorway: "Black/Fire Red/Muslin",
        designer: "Tinker Hatfield",
        silhouette: "Air Jordan 5",
        technology: "Air",
        category: "Lifestyle"
    },
    {
        name: "OFF-WHITE x Air Max 90 'Black'",
        description: "The Off-White x Air Max 90 ‘Black’ offers a unique blend of materials on the upper, which combines a ripstop base with nubuck overlays and a suede mudguard. The all-black finish is contrasted by a white Swoosh with zigzag stitching, a small orange tab on the quarter panel and orange stitching on the exposed-foam tongue. Virgil Abloh’s signature text block makes an appearance on the shoe’s medial side.",
        release_date: "2019-02-07",
        sku: "AA7293 001",
        brand: "Nike",
        upper_material: "Nubuck",
        main_color: "Black",
        colorway: "Black/Black/Cone/White",
        designer: "Tinker Hatfield",
        silhouette: "Air Max 90",
        technology: "Air",
        category: "Lifestyle"
    },
    {
        name: "OFF-WHITE x Air Jordan 1 Retro High OG 'Chicago'",
        description: "Created by designer Virgil Abloh, the Air Jordan 1 x OFF-WHITE comes in the classic Chicago colorway. Some of the sneakers' half-finished features include a Swoosh connected to the shoe with visible blue stitching, 'Air' printed on the midsole, and an OFF-WHITE zip tie on the collar. The box comes deconstructed as it's been turned inside-out with the inside consisting of a black base and gold Jumpman logo, while the outside is plain cardboard with the words 'Jumpman' printed on it. Virgil's OFF-WHITE collection included remixed iterations of the Air VaporMax, Air Presto, Air Max 90, Blazer, Air Max 97, Hyperdunk 2017, Air Force 1, Zoom Fly, and Chuck Taylor.",
        release_date: "2017-09-06",
        sku: "AA3834 101",
        brand: "Air Jordan",
        upper_material: "Leather",
        main_color: "Red",
        colorway: "White/Black-Varsity Red-Black",
        designer: "Peter Moore",
        silhouette: "Air Jordan 1",
        technology: "Air",
        category: "Lifestyle"
    },
    {
        name: "OFF-WHITE x Air Presto 'Black'",
        description: "This monochromatic take on the Air Presto is the second time Virgil Abloh and Nike collaborated on this iconic silhouette. The July 2018 iteration came a few mere months after it’s two-tone predecessor made it’s debut as part of Abloh and Nike’s ‘The Ten’ Collection. This pair showcases an all-black finish, accented with unique touches including a plastic zip tie, white Swoosh with conspicuous zig-zag stitching, and lines of text on the medial quarter panel that allude to the shoe’s Beaverton origins.",
        release_date: "2018-07-27",
        sku: "AA3830 002",
        brand: "Nike",
        upper_material: "Leather",
        main_color: "Black",
        colorway: "Black/White/Cone",
        designer: "Tobie Hatfield",
        silhouette: "Air Presto",
        technology: "Air",
        category: "Lifestyle"
    },
    {
        name: "OFF-WHITE x Air Force 1 Low 'Black'",
        description: "Virgil Abloh presents a relatively straightforward take on Bruce Kilgore’s design with this OFF-WHITE x Air Force 1 Low. That isn’t to suggest there aren’t unique details on the reconstructed build: in addition to a mix of ripstop and suede, the upper features taped seams and a white Swoosh attached via zigzag stitching. Exposed foam and misplaced tags appear on the tongue, while ‘LOGO’ inscribed on the heel tab delivers a final meta flourish.",
        release_date: "2018-12-19",
        sku: "AO4606 001",
        brand: "Nike",
        upper_material: "Leather",
        main_color: "Black",
        colorway: "Black/White-Cone-Black",
        designer: "Bruce Kilgore",
        silhouette: "Air Force 1",
        technology: "Air",
        category: "Lifestyle"
    },
    {
        name: "OFF-WHITE x Air VaporMax 'Part 2'",
        description: "Virgil Abloh teamed up with Nike to release an all-black Air VaporMax in March 2018, a spiritual successor to Abloh's VaporMax design from ‘The Ten' collection. The OFF-WHITE x Air VaporMax ‘Part 2’ features a black Flyknit upper with matching laces and a Swoosh logo accented by a red zip tie. Abloh's signature lettering on the medial side and a translucent VaporMax unit complete the look.",
        release_date: "2018-03-30",
        sku: "AA3831 002",
        brand: "Nike",
        upper_material: "Leather",
        main_color: "Black",
        colorway: "Black/Total Orange-Clear",
        designer: "Andreas Harlow",
        silhouette: "Air Vapormax",
        technology: "Air",
        category: "Running"
    },
    {
        name: "OFF-WHITE x Air Max 90 'Desert Ore'",
        description: "The Off-White x Air Max 90 ‘Desert Ore’ represents yet another of Virgil Abloh’s fanciful takes on the retro silhouette. Unlike its stark black and white counterparts, this pair features a mixed-material upper dressed in a warm tan shade. A stitched-on in Swoosh in Bright Mango is joined by the usual Virgil flourishes, including a blue zip tie and lines of printed text on the medial side.",
        release_date: "2019-02-07",
        sku: "AA7293 200",
        brand: "Nike",
        upper_material: "Suede",
        main_color: "Tan",
        colorway: "Desert Ore/Desert Ore/Hyper Jade/Bright Mango",
        designer: "Tinker Hatfield",
        silhouette: "Air Max 90",
        technology: "Air",
        category: "Lifestyle"
    },
    {
        name: "OFF-WHITE x Wmns Waffle Racer 'Vivid Sky'",
        description: "Nike and Virgil Abloh’s OFF-WHITE extend their collaborative quest to reimagine the Wmns Waffle Racer as part of a three-sneaker pack fusing utility and retro track style. Introduced in December 2019, this women's edition carries a Vivid Sky upper shrouded in translucent textile, a trio of contrast Swooshes and neon cording traversing the laces. An updated logo is stitched to the tongue. Under a matching foam midsole, the iconic rubber Waffle outsole utilizes a racing spike motif.",
        release_date: "2019-12-12",
        sku: "CD8180 400",
        brand: "Nike",
        upper_material: "Leather",
        main_color: "Blue",
        colorway: "Vivid Sky/Black/Electric Green",
        designer: "-",
        silhouette: "Waffle Racer",
        technology: "Air",
        category: "Running"
    },
    {
        name: "OFF-WHITE x Air Presto 'White'",
        description: "The white colorway of the Off-White x Air Presto released in August 2018, a week after its all-black counterpart hit shelves. The lifestyle runner combines a deconstructed build – highlighted by rough seams and the exposed inner foam of the tongue – with the heralded T-shirt-like comfort of the original Nike Air Presto from 2000. Virgil Abloh’s signature flourishes are present and accounted for, including a plastic zip tie and printed block-letter text flanked by quotation marks.",
        release_date: "2018-08-03",
        sku: "AA3830 100",
        brand: "Nike",
        upper_material: "-",
        main_color: "White",
        colorway: "White/Black/Cone",
        designer: "Tobie Hatfield",
        silhouette: "Air Presto",
        technology: "Air",
        category: "Lifestyle"
    },
    {
        name: "OFF-WHITE x Air VaporMax 'Part 2'",
        description: "The April 2018 version of Virgil Abloh’s all-white Air VaporMax is mostly unchanged from the original pair from ‘The Ten.’ Stripped of color, the performance runner brings raw materials and unique details to the forefront, including an exposed-foam tongue, translucent Swoosh and off-white suede eyestay. Printed above the clear VaporMax unit, the quotation ‘AIR’ print on the lateral side takes on an extra meta dimension.",
        release_date: "2018-04-14",
        sku: "AA3831 100",
        brand: "Nike",
        upper_material: "Flyknit",
        main_color: "White",
        colorway: "White/Total Orange-Black",
        designer: "Andreas Harlow",
        silhouette: "Air Vapormax",
        technology: "Air",
        category: "Lifestyle"
    },
    {
        name: "OFF-WHITE x Air Jordan 1 Retro High OG 'White' 2018",
        description: "Inspired by Air Jordan 1 colorways, the OFF-WHITE x Air Jordan 1 Retro High OG 'White' 2018 is a reimagination of its 'Chicago'-themed predecessor. Designed by Virgil Abloh, the model features an all-white premium leather and mesh upper with deconstructed Swoosh branding and blue detailing, and Wings logos on the ankles. It is accented by black “AIR” lettering on the midsole, black 'Off-White™ for NIKE' text on the side panels, and orange tabs.",
        release_date: "2018-03-03",
        sku: "AQ0818 100",
        brand: "Air Jordan",
        upper_material: "Leather",
        main_color: "White",
        colorway: "White/White",
        designer: "Peter Moore",
        silhouette: "Air Jordan 1",
        technology: "Air",
        category: "Lifestyle"
    },
    {
        name: "OFF-WHITE x Zoom Fly SP 'Black'",
        description: "The OFF-WHITE x Zoom Fly SP ‘Black’ features a deconstructed take on the performance runner. Highlighted by an unlined translucent upper with Virgil Abloh’s signature text on the shoe’s medial side, the shoe also sports exposed stitch detailing, most noticeably on the white Swoosh. A black Lunarlon midsole, embedded with a carbon-infused nylon plate, features ‘FOAM’ printed on the lateral side.",
        release_date: "2018-12-14",
        sku: "AJ4588 001",
        brand: "Nike",
        upper_material: "Leather",
        main_color: "Black",
        colorway: "Black/White-Cone",
        designer: "Erick Goto",
        silhouette: "Zoom Fly",
        technology: "Lunarlon",
        category: "Running"
    },
    {
        name: "OFF-WHITE x Zoom Fly SP 'Tulip Pink'",
        description: "With the OFF-WHITE x Zoom Fly SP ‘Tulip Pink,’ Virgil Abloh’s signature touches—including printed text on the midsole, laces and medial quarter panel—are overshadowed by the shoe’s vibrant color scheme. The design makes use of clashing shades of Tulip Pink and Racer Pink on the structural elements of the translucent upper, as well as the stitched-on Swoosh and Lunarlon midsole.",
        release_date: "2018-11-28",
        sku: "AJ4588 600",
        brand: "Nike",
        upper_material: "Leather",
        main_color: "Pink",
        colorway: "Tulip Pink/Racer Pink",
        designer: "Erick Goto",
        silhouette: "Zoom Fly",
        technology: "Lunarlon",
        category: "Running"
    },
    {
        name: "OFF-WHITE x Air Presto 'The Ten'",
        description: "The Off-White x Air Presto was released as part of ‘The Ten’ — a collaborative capsule from Virgil Abloh and Nike exploring ten classic silhouettes through two distinct themes: ‘Revealing,’ featuring hand-cut and reconstructed builds, and ‘Ghosting,’ characterized by translucent uppers. Grouped in the former category, the Air Presto is updated with unique details like a tonal Swoosh on the mesh upper, plastic zip tie, and ‘AIR’ printed on the heel strap.",
        release_date: "2017-09-06",
        sku: "AA3830 001",
        brand: "Nike",
        upper_material: "Leather",
        main_color: "Black",
        colorway: "Black/Black-Muslin",
        designer: "Tobie Hatfield",
        silhouette: "Air Presto",
        technology: "Air",
        category: "Lifestyle"
    },
    {
        name: "OFF-WHITE x Air Max 97 'Menta'",
        description: "The OFF-WHITE x Air Max 97 ‘Menta’ features a translucent textile upper finished in Wolf Grey, complemented by Virgil Abloh’s signature text and tonal zigzag stitching throughout. The neutral color scheme is disrupted by a multicolored Swoosh that transitions from green to blue to red, while underfoot, a smoky grey rubber outsole maintains the shoe’s translucent theme.",
        release_date: "2018-10-18",
        sku: "AJ4585 101",
        brand: "Nike",
        upper_material: "Leather",
        main_color: "Grey",
        colorway: "Off White/Wolf Grey-White-Menta",
        designer: "Christian Treeser",
        silhouette: "Air Max 97",
        technology: "Air",
        category: "Lifestyle"
    },
    {
        name: "OFF-WHITE x Air VaporMax 'The Ten'",
        description: "Released at Nikelab stores in September of 2017, the OFF-WHITE x Air VaporMax was part of Virgil Abloh's 10-pair collaboration with Nike and quickly became one of the most coveted kicks of the year. The design features a black Flyknit upper with an oversized white stitched Swoosh, orange accents, and a full-length blacked-out Air VaporMax sole. The sneaker also includes a retro-style tongue and the collection's quotation mark motif can be found on the shoelaces and side panels.",
        release_date: "2017-09-06",
        sku: "AA3831 001",
        brand: "Nike",
        upper_material: "Flyknit",
        main_color: "Black",
        colorway: "Black/White-Clear",
        designer: "Andreas Harlow",
        silhouette: "Air VapormMax",
        technology: "Air",
        category: "Running"
    },
    {
        name: "OFF-WHITE x Air Max 97 OG 'The Ten'",
        description: "Released as part of ‘The Ten’ collection from November 2017, Virgil Abloh’s take on the Air Max 97 focuses on the shoe’s upper. The retro runner’s translucent build serves to tone down the visual impact of its signature wavy lines, so that the eye is drawn to the overall shape instead. ‘AIR’ stamped on the lateral side serves as a reminder of the technical innovation inherent in the '97 – the first Nike silhouette to feature a full-length Max Air unit.",
        release_date: "2017-11-18",
        sku: "AJ4585 100",
        brand: "Nike",
        upper_material: "Leather",
        main_color: "White",
        colorway: "White",
        designer: "Christian Tresser",
        silhouette: "Air Max 97",
        technology: "Air",
        category: "Lifestyle"
    },
    {
        name: "OFF-WHITE x Air Max 97 'Black'",
        description: "Debuting on the runway at Paris Fashion Week in June 2018, the OFF-WHITE x Air Max 97 in black sees Virgil Abloh outfit the retro runner with a translucent textile upper. A white Swoosh and ‘AIR’ lettering adorn the lateral side, while the quarter panel on the medial side is printed with more lines of Virgil’s signature text. The shoe’s reconstructed look is finished with a woven Nike tongue tag pushed to the side.",
        release_date: "2018-10-18",
        sku: "AJ4585 001",
        brand: "Nike",
        upper_material: "Leather",
        main_color: "Black",
        colorway: "Black/Cone-Black-White",
        designer: "Christian Tresser",
        silhouette: "Air Max 97",
        technology: "Air",
        category: "Lifestyle"
    },
    {
        name: "OFF-WHITE x Hyperdunk 2017 Flyknit 'The Ten'",
        description: "What sets apart the Off-White x Hyperdunk from the majority of sneakers from ‘The Ten’ – the collection of collaborative sneakers from Virgil Abloh and Nike – is that it’s a pure performance sneaker. Underneath the translucent components, including an added midfoot strap, is a breathable knit upper, mounted atop a React foam midsole. Virgil’s suite of signature design embellishments gives the shoe a cohesive design language that makes the built-in technology relatable and wearable for lifestyle.",
        release_date: "2017-11-12",
        sku: "AJ4578 100",
        brand: "Nike",
        upper_material: "Flyknit",
        main_color: "White",
        colorway: "White/White-White",
        designer: "Leo Chang",
        silhouette: "Hyperdunk 2017",
        technology: "React",
        category: "Lifestyle"
    },
    {
        name: "OFF-WHITE x Blazer Mid 'Grim Reapers'",
        description: "Releasing alongside an accompanying ‘All Hallow’s Eve’ colorway in orange, the OFF-WHITE x Blazer Mid ‘Grim Reapers’ completes Virgil Abloh’s Halloween-themed sneaker pack. The black and grey upper sports contrast orange stitching in celebration of the October holiday, along with an oversized white Swoosh, blue zip tie and OFF-WHITE lettering on the quarter panel of the shoe’s medial side.",
        release_date: "2018-10-03",
        sku: "AA3832 001",
        brand: "Nike",
        upper_material: "Leather",
        main_color: "Black",
        colorway: "Black/Cone-Black-White",
        designer: "Bill Bowerman",
        silhouette: "Blazer",
        technology: "Air",
        category: "Lifestyle"
    }
]

# {
#     name: "",
#     description: "",
#     release_date: "",
#     sku: "",
#     brand: "",
#     upper_material: "",
#     main_color: "",
#     colorway: "",
#     designer: "",
#     silhouette: "",
#     technology: "",
#     category: ""
# },


require 'open-uri'

# create a user

# create a File from the url
# file1 = open('https://sneaker-photos.s3-us-west-1.amazonaws.com/flu_game_12s.jpeg')

# attach to user

the_last_dance.each_with_index do |sneaker, idx|    
    sneaker = Sneaker.create!(sneaker)
    # sneaker.photo.attach(io: file${idx}, filename: 'file1.jpg') 
end

off_white.each { |sneaker| Sneaker.create!(sneaker) }