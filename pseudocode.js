//! Psuedo Code

//! Components
//? NavBar Component
// Logo
// Name of app
// Button (Home or favourites)

//? Footer
// <p> powered by ticketmaster
// Curated by Cecilia and Arjun 

//? Home Component
// Search input
// Show card comp on search (onChange)
// Method for the search input, check for user value.
// try {
// The user value will then be added to the api request
// }catch (err) {
// Show error messsage where cards would be. Show <p> tag.
// }
// Bring back data from api, and populate cards comp.
//import React, { useState, useEffect } from 'react'
//import axios from 'axios'
//import GenreCard from './CheeseCard'
//! Have a carousel effect. Read materialize docs.
//? https://materializecss.com/carousel.html will be in the card comp.

//? Card Componenet
//import React from 'react'
// onclik on picture(e.target.value) to modal - search for id of api.
// After onClick we will make another api request and populate the data on the modal componenet.
// Show modal component
//const GenreCard = ({ _id, name, image, date}) => {
// Star or heart icon, which can be selected by the use. Via onClick, this will trigger an event which saves the id of the api obj in localStorage.
// Footer to add social and ticketmaster links - this will open on new tab.
//! Maybe add YouTube vid...

//? Modal Component
// Just frame
// No functions
// It will just be markup with aceess points to api obj, which is setup in the card component.

//? Favourites Componenet
// New page
// This make another api request.
// The request will retrieve data from api, filtered via the id's saved in localstorage. 
// Function to getItem() from local storage. window.localStorage.getItem('id')
// Once data is retrived render card component with api obj.
// Card will also be able to display modal
// Import modal compnent and card component.

//! App Js

//* Browser Route layout
// Navbar component
//? Switch
// Favourites Component
// Home Component

