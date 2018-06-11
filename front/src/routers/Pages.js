/**
 * This page references all the top pages of
 * the website, and decides their url
 * and their title.
 *
 * The first page of the array will be considered
 * the home page.
 */

import Home from "../Components/Home";
import HowToPlay from "../Components/HowToPlay";
import Leagues from "../Components/Leagues";
import News from "../Components/News";
import Contact from "../Components/Contact";
import FullNews from "../Components/FullNews";

export default [
  {
    to: "/home",
    title: "Home",
    component: Home
  },
  {
    to: "/how-to-play",
    title: "How To Play",  
    component: HowToPlay
    
  },
  {
    to: "/leagues",
    title: "Leagues",
    component: Leagues
    
  },
  {
    to: "/news",
    title: "News",
    component: News
  },

  {
    to: "/contact",
    title: "Contact Us",
    component: Contact
  }
  
];
