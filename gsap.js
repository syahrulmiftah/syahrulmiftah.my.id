gsap.registerPlugin(ScrollTrigger);

// document.addEventListener("DOMContentLoaded", function () {
//   const hiddenClasses = [
//     ".hidden",
//     ".hidden-down",
//     ".hidden-up",
//     ".hidden-left",
//   ];

//   const sections = [
//     ".section-header",
//     ".section-hero",
//     ".section-quote",
//     ".section-projects-title",
//     "#project-1",
//     "#project-2",
//     "#project-3",
//     "#project-4",
//     "#project-5",
//     ".section-about",
//     ".section-email",
//     ".section-faq",
//     ".section-footer",
//   ];

//   sections.forEach((sectionSelector) => {
//     const section = document.querySelector(sectionSelector);

//     if (section) {
//       hiddenClasses.forEach((hiddenClass) => {
//         const hiddenElements = section.querySelectorAll(hiddenClass);

//         hiddenElements.forEach((element) => {
//           // Use ScrollTrigger to toggle "show" class when element enters viewport
//           ScrollTrigger.create({
//             trigger: element,
//             start: "top bottom",
//             end: "bottom",
//             toggleClass: { targets: element, className: "show" },
//             once: true, // Trigger only once
//             markers: true,
//           });

//           hiddenElements.forEach((element, index) => {
//             const delay = index * 0.1;
//             element.style.transitionDelay = `${delay}s`;
//           });
//         });
//       });
//     }
//   });
// });

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
  console.log(minusHeader);

  mm.add("(min-width: 1024px)", () => {
    const sections = document.querySelectorAll(".container-project");
    sections.forEach((section) => {
      ScrollTrigger.create({
        trigger: section,
        start: `-${minusHeader}px top`, // Dynamic start based on header height
        end: "+=100%", // Extend the end trigger to cover the next section
        pin: true, // Pin the section during scroll
        pinSpacing: "margin",
        snap: {
          snapTo: 1, // Snap to the nearest section
          duration: 0.5, // Duration of snapping
          delay: 0.1, // Delay before snapping occurs
        },
        // markers: true, // Enable markers for debugging (remove in production)
      });
    });

    // ScrollTrigger.create({
    //   trigger: ".section-about",
    //   start: "top bottom",
    //   end: "bottom top",
    //   // toggleClass: { target: aboutSection, className: "show" },
    //   // markers: true,
    // });

    const height =
      document.getElementById("about-desc").offsetHeight -
      document.getElementById("about-img").offsetHeight;
    ScrollTrigger.create({
      trigger: "#about-img",
      pin: "#about-img",
      start: "top 80px",
      end: `+=${height}`,
      toggleClass: "show",
      markers: true,
    });
  });
});
