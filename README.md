# Outfit Generator
Fullstack web application that allows users to log on to their own account, create business professional/casual outfits and save them for future reference. 

**Link to project:** https://stylo.cyclic.app

![alt tag](https://res.cloudinary.com/duf8g2rbv/image/upload/v1662400451/Screen_Shot_2022-09-05_at_1.53.24_PM_f3jsze.png)

<a target="_blank" href="https://stylo.cyclic.app">
  <img src="https://user-images.githubusercontent.com/87950479/189926005-66e49d4c-e293-4e5c-8a0b-57c1ee1adaa3.gif" width="100%" alt="Outfit  App"/>
</a>

## How It's Made:

**Tech used:** EJS, CSS, JavaScript, jQuery, Node, MongoDB and Passport.js

I created the article pairing logic through a dictionary that is stored on MongoDB. It contains each article of clothing and specifies what color of every different type of clothing will match with it. When the user selects pieces of clothing, the app will refer to the dictionary to show the user which articles will match with what they have selected. 

I used Passport.js to handle user authentication and jQuery to handle the mobile navbar and front page animation.

## Lessons Learned:

Being my biggest project to date, I learned that you shouldn't be afraid to experiment and try creative approaches. One of my challenges was figuring out how to create the logic for how to pair different articles of clothing. I ended up creating a dictionary that stored ot the logic without ven really knowing what a dictionary was! I had a lot of doubt that the direction I was going was inefficient and that there must have been a better way. Later on I realized I had made an actual data structure that works and I should never have doubted myself. It was incredibly encouraging and made me realize that my only limits are my self doubts. 

# Packages/Dependencies used 

bcrypt, connect-mongo, dotenv, ejs, express, express-flash, express-session, mongodb, mongoose, morgan, nodemon, passport, passport-local, validator

# How to Install

`npm install` 

# Things to add

- Create a `.env` file and add the following as `key: value` 
  - PORT: 2121 (can be any port example: 3000) 
  - DB_STRING: `your database URI` 

 


