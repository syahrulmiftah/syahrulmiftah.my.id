gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", function () {
  let mm = gsap.matchMedia();
  const header = document.querySelector("header");
  const project = document.getElementById("project-1");
  const headerHeight = header.offsetHeight;
  const projectHeight = project.offsetHeight;
  const viewportHeight = window.innerHeight;

  // taking into account STICKY HEADER
  const minusHeader =
    (viewportHeight - headerHeight - projectHeight) / 2 + headerHeight / 2;

  mm.add("(min-width: 1024px)", () => {
    const sections = document.querySelectorAll(".container-project");
    sections.forEach((section) => {
      ScrollTrigger.create({
        trigger: section,
        start: `-${minusHeader}px top`,
        end: "+=100%",
        pin: true,
        pinSpacing: "margin",
        snap: {
          snapTo: 1,
          duration: 0.5,
          delay: 0.1,
        },
      });
    });

    const height =
      document.getElementById("about-desc").offsetHeight -
      document.getElementById("about-img").offsetHeight;
    ScrollTrigger.create({
      trigger: "#about-img",
      pin: "#about-img",
      start: "top 80px",
      end: `+=${height}`,
      toggleClass: "show",
    });
  });
});

// import { gsap } from "/node_modules/gsap/dist/gsap.min.js";

document.addEventListener("DOMContentLoaded", function () {
  const splitQuote = document.querySelectorAll(".text-scroll");
  splitQuote.forEach((item) => {
    const darkGrey = "#333333";
    const white = "#f5f5f5";
    const splittedText = new SplitType(item);
    gsap.to(splittedText.chars, {
      color: white,
      duration: 0.3,
      stagger: 1,
      scrollTrigger: {
        trigger: splittedText.chars,
        start: "top 80%",
        end: "top 20%",
        scrub: true,
        // markers: false,
        toggleActions: "play play reverse reverse",
      },
    });
  });
});
