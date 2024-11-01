const hiddenClasses = [
    "hidden",
    "hidden-down",
    "hidden-up",
    "hidden-left",
  ];
  
  // Iterate over each class and remove it from matching elements
  hiddenClasses.forEach(className => {
    // Select all elements with the current class
    const elements = document.querySelectorAll(`.${className}`);
    
    elements.forEach(element => {
      // Remove the class from the element
      element.classList.remove(className);
    });
  });

// GSAP
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

// Initialize a new Lenis instance for smooth scrolling
const lenis = new Lenis();

// Listen for the 'scroll' event and log the event data to the console
lenis.on("scroll", (e) => {
  console.log(e);
});

// Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
lenis.on("scroll", ScrollTrigger.update);

// Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
// This ensures Lenis's smooth scroll animation updates on each GSAP tick
gsap.ticker.add((time) => {
  lenis.raf(time * 1000); // Convert time from seconds to milliseconds
});

// Disable lag smoothing in GSAP to prevent any delay in scroll animations
gsap.ticker.lagSmoothing(0);
