# HEAT

# Overview

Inspired by GOAT, HEAT is a global e-commerce service that allows sneaker enthusiasts to browse through the latest trends, create their own account, as well as make any desired transactions. With the user experience in mind, the front-end structure was designed to provide a simple, yet elegant user-friendly environment.

[Link to HEAT](https://heat-check.herokuapp.com/#/)

# Technologies
* React/Redux
* HTML
* CSS
* Ruby on Rails 
* Javascript


# Front-End

## User Log-in
Users are presented with a clean and simple session form, which will allow them to either log in, create an account, or view the application through a Demo User.
![alt text](https://sneaker-photos.s3-us-west-1.amazonaws.com/Screen+Shot+2020-05-08+at+8.32.00+AM.png)

---

## Splash Page
Once logged in, the user is redirected to the Splash Page, where they can view a collection of sneakers.
![alt text](https://sneaker-photos.s3-us-west-1.amazonaws.com/Screen+Shot+2020-05-08+at+8.36.19+AM.png)

---

## Sneaker Show Page
When the user selects a sneaker, they are redirected to the Sneaker Show Page. This entails information about the sneaker, as well as the available sizes when clicking 'Buy New'.
![alt text](https://sneaker-photos.s3-us-west-1.amazonaws.com/Screen+Shot+2020-05-08+at+8.40.03+AM.png)

---

## Styles
The Styles Page is an overview collection of how the products are being worn on feet. For users who want to get a better feel for the sneaker, or is interested in trending styles, this page will showcase how the sneaker community is wearing their latest HEAT purchase.
![alt text](https://sneaker-photos.s3-us-west-1.amazonaws.com/Screen+Shot+2020-05-08+at+8.37.16+AM.png)

---

# Features 

## Sneakers 
The beauty of HEAT lies within its simplicity and appealing gallery of products. With the vast amount of images to be rendered, that is where the challenge of attaching a photo to its respective sneaker arose. In order to succesfully attach an image to the correct sneaker, I needed to seed the database in an oraganized manner. Through the uniqueness of each sneaker's SKU number, I was able to interpolate each image URL (hosted by AWS/S3) and attach it to its respective sneaker object. Once images were properly attached and rendered onto the desired page, I styled them accordingly with the use of CSS.

```
Sneaker.all.each do |sneaker|
  sku = sneaker[:sku].split(" ").join("")
  photo = open("https://sneaker-photos.s3-us-west-1.amazonaws.com/#{sku}.jpg")
  sneaker.photo.attach(
    io: photo, 
    filename: "#{sku}.jpg"
  )
end
```

## Listings 
One of the main features of HEAT is to allow the user to view available sizes for a particular sneaker. Each listing would simply encompass and present their size and price, once the user clicks on the 'Buy Now' button. In order to achieve this, I needed to keep track of the local state of the Sneaker Show Component. 
By creating a showListings function, which changed the local boolean state, I was able to provide the 'Buy Now' functionality to trigger and render the Listings Index Component. The main goal was to render the Listings Index Component within the same div element containing the SneakerShowComponent. This was accomplished by implementing the CSS overflow property to adequately format the index, allowing the user to scroll through listings.

```
constructor(props) {
        super(props);
        this.state = {
            showListings: false
        }

        this.handleClick = this.handleClick.bind(this);
    };

handleClick() {
        this.setState({ showListings: true })
    }

<div className='rightShoe-pane'>
        {
            this.state.showListings ? <ListingIndexContainer listings={listings}/> : 
                (
                    <div>
                        <h1>{sneaker.name}</h1>
                        <br/>
                        <p>SKU: {sneaker.sku}</p>
                    </div>
                )
        }
        <button onClick={() => this.handleClick()} className='buy-new-btn'>Buy New</button>
</div>
```

---

# Future Directions
* Shopping Cart - allow the current user to add/remove items to their shopping cart
* Search - allow the user to search for a particular product