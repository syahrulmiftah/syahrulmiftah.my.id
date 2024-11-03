// EMAIL JS

// SUBMIT EMAIL TO ME

// document.addEventListener("DOMContentLoaded", function () {
//   const submitButton = document.getElementById("submitButton");

//   submitButton.addEventListener("click", function () {
//     // Get the input fields
//     const name = document.querySelector(
//       ".row-email:nth-child(1) .connect-input"
//     ).value;
//     const agency = document.querySelector(
//       ".row-email:nth-child(2) .connect-input"
//     ).value;
//     const project = document.querySelector(
//       ".row-email:nth-child(3) .connect-input"
//     ).value;
//     const email = document.querySelector(
//       ".row-email:nth-child(4) .connect-input"
//     ).value;

//     // Create the formatted message
//     const message = `
//       Hello,

//       My name is ${name}.
//       I work for a/an ${agency} & need help with ${project}.
//       You can email me at ${email}.
//     `;

//     // Prepare the email parameters
//     const templateParams = {
//       from_name: name,
//       message: message,
//       //user_email: email, // This can be useful if you want to send a copy to the user as well
//     };

//     // Send the email using EmailJS
//     emailjs.send("service_h6zwpyp", "template_vbp1xo8", templateParams).then(
//       function (response) {
//         console.log("Email sent successfully!", response.status, response.text);
//         alert("Email sent successfully!");
//       },
//       function (error) {
//         console.error("Failed to send email. Error:", error);
//         alert("Failed to send email. Please try again later.");
//       }
//     );
//   });
// });


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