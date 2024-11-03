gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", function () {
  let mm = gsap.matchMedia();
  const header = document.querySelector("header");
  const project = document.getElementById("project-1");
  // const headerHeight = header.offsetHeight;
  // const projectHeight = project.offsetHeight;
  // const viewportHeight = window.innerHeight;

  // taking into account STICKY HEADER
  // const minusHeader =
  //   (viewportHeight - headerHeight - projectHeight) / 2 + headerHeight / 2;

  mm.add("(min-width: 1024px)", () => {
    const sections = document.querySelectorAll(".container-project");
    sections.forEach((section) => {
      ScrollTrigger.create({
        trigger: section,
        start: `top 80px`,
        end: "+=100%",
        pin: section,
        pinSpacing: "margin",
        snap: {
          snapTo: 1,
          duration: 0.5,
          delay: 0.1,
        },
      });
    });
    // PIN ABOUT SECTION
    const aboutDesc = document.getElementById("about-desc");
    const aboutSectionHeight =
      aboutDesc.offsetHeight -
      document.getElementById("about-img").offsetHeight;

    ScrollTrigger.create({
      trigger: "#about-img",
      pin: "#about-img",
      start: "top 80px",
      end: `+=${aboutSectionHeight}`,
      toggleClass: "show",
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const splitQuote = document.querySelectorAll(".text-scroll");
  splitQuote.forEach((item) => {
    // const darkGrey = "#333333";
    const lightGrey = "#d9d9d9";
    const splittedText = new SplitType(item);
    const quoteHeight = document.getElementById("quote-reveal").offsetHeight;

    const quoteSection = document.querySelector(".section-quote");
    const speedScrollFactor = 5;
    quoteSection.style.paddingBottom =
      quoteHeight * speedScrollFactor - 100 + "px"; // add bottom padding instead of using pinSpacing
    console.log(quoteHeight);
    gsap.to(splittedText.chars, {
      color: lightGrey,
      duration: 0.5,
      stagger: 1,
      scrollTrigger: {
        trigger: splittedText.chars,
        start: "top 50%",
        end: `+=${quoteHeight * speedScrollFactor}`,
        scrub: true,
        toggleActions: "play play reverse reverse",
      },
    });
  });
  ScrollTrigger.create({
    trigger: splitQuote,
    start: "top 100px",
    end: "bottom -265%",
    end: "500% 50%",
    pin: splitQuote,
  });
});
