document.addEventListener("DOMContentLoaded", function () {
  const hiddenClasses = [
    ".hidden",
    ".hidden-down",
    ".hidden-up",
    ".hidden-left",
  ];

  const sections = [
    ".section-header",
    ".section-hero",
    ".section-quote",
    ".section-projects-title",
    "#project-1",
    "#project-2",
    "#project-3",
    "#project-4",
    "#project-5",
    ".section-about",
    ".section-email",
    ".section-faq",
    ".section-footer",
  ];

  gsap.registerPlugin(ScrollTrigger);

  sections.forEach((sectionSelector) => {
    const section = document.querySelector(sectionSelector);

    if (section) {
      hiddenClasses.forEach((hiddenClass) => {
        const hiddenElements = section.querySelectorAll(hiddenClass);

        hiddenElements.forEach((element, index) => {
          // Use ScrollTrigger to toggle "show" class when element enters viewport
          ScrollTrigger.create({
            trigger: element,
            toggleClass: { targets: element, className: "show" },
            once: true, // Trigger only once
          });

          hiddenElements.forEach((element, index) => {
            const delay = index * 0.1;
            element.style.transitionDelay = `${delay}s`;
          });
        });
      });
    }
  });
});
