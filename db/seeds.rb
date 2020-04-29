# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# The Last Dance (Array of Air Jordan sneaker objects)
Sneaker.destroy

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
        sku: "130690 002",
        brand: "Air Jordan",
        upper_material: "Leather",
        main_color: "Black",
        colorway: "Black/Varsity Red",
        designer: "Tinker Hatfield",
        silhouette: "Air Jordan 16",
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
]


the_last_dance.each do |sneaker|    
    Sneaker.create(sneaker)
end