// TYPEIT TYPING EFFECT
document.addEventListener("DOMContentLoaded", function () {
  document.documentElement.style.setProperty("--ti-cursor-color", "red");

  const typeInstance = new TypeIt("#text", {
    strings: ["INTERFACES", "WEBSITE", "LANDING PAGE", "MOBILE APP"],
    speed: 100,
    breakLines: false,
    loop: true,
    deleteSpeed: 75,
    nextStringDelay: [2000, 500],
    cursor: false, // Disable TypeIt.js's default blinking cursor
    loopDelay: 3000,
  });
  typeInstance.go();
});



// INTERSECTION OBSERVER

document.addEventListener("DOMContentLoaded", function () {
  const hiddenClasses = [
    ".hidden",
    ".hidden-down",
    ".hidden-up",
    ".hidden-left",
  ];

  // List of sections to apply the transition delay
  const sections = [
    ".section-header",
    ".section-hero",
    ".section-quote",
    ".section-projects",
    ".section-about",
    ".section-email",
    ".section-faq",
    ".section-footer",
  ]; // Add your section selectors here

  sections.forEach((sectionSelector) => {
    const section = document.querySelector(sectionSelector);

    if (section) {
      hiddenClasses.forEach((hiddenClass) => {
        // Select only the hidden elements within the specific section
        const hiddenElements = section.querySelectorAll(hiddenClass);

        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            const target = entry.target;

            if (entry.isIntersecting) {
              target.classList.add("show");
            }
          });
        });

        hiddenElements.forEach((element, index) => {
          const delay = index * 0.1; // Adjust delay increment as needed
          element.style.transitionDelay = `${delay}s`;
          observer.observe(element);
        });
      });
    }
  });
});

// FAQ SECTION DROPDOWN ACCORDION

document
  .querySelectorAll('input[type="checkbox"]')
  .forEach(function (checkbox) {
    checkbox.addEventListener("change", function () {
      // Get the checkbox id
      var checkboxId = this.id;
      console.log(checkboxId);
      // Find the associated answer div using the custom 'for' attribute
      var faqAnswer = document.querySelector(`div[for="${checkboxId}"]`);
      var parentGridItem = this.closest(".faq-grid"); // Get the closest .faq-grid ancestor
      var plusminus = parentGridItem.querySelector(".plusminus");
      var spans = plusminus.querySelectorAll("span");
      console.log(faqAnswer);

      if (this.checked) {
        parentGridItem.style.border = "1px solid var(--green)";
        faqAnswer.style.maxHeight = faqAnswer.scrollHeight + "px";
        faqAnswer.style.marginTop = ".5rem";
        spans.forEach((span) => {
          span.style.background = "var(--green)";
        });
        if (spans[1]) {
          spans[1].style.transform = "rotate(-90deg)"; // Rotate the second span
        }
      } else {
        parentGridItem.style.border = ""; // Reset border color
        faqAnswer.style.maxHeight = "0";
        faqAnswer.style.marginTop = "0";
        parentGridItem.style.backgroundColor = ""; // Reset background color
        spans.forEach((span) => {
          span.style.background = ""; // Reset background
        });
        if (spans[1]) {
          spans[1].style.transform = ""; // Reset rotation
        }
      }
    });
  });

// BACK TO TOP BUTTON
let mybutton = document.querySelector(".bt-back-to-top");

function topFunction() {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Smooth scrolling effect
  });
}

// OPEN OUTSIDE EMAIL
document.addEventListener("DOMContentLoaded", function () {
  const contactButton = document.getElementById("openEmail");
  const email = "syahrulmiftahfarid@gmail.com"; // Replace with your email address

  contactButton.addEventListener("click", function () {
    window.location.href = `mailto:${email}`;
  });
});

// SCROLL TO EMAIL SECTION

function scrollToEmail() {
  const targetSection = document.getElementById("email-section");
  targetSection.scrollIntoView({ behavior: "smooth" });
}

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

document.addEventListener("DOMContentLoaded", function () {
  const submitButton = document.getElementById("submitButton");

  if (!submitButton) {
    console.error(
      "Submit button not found. Ensure an element with id='submitButton' exists."
    );
    return;
  }

  submitButton.addEventListener("click", function () {
    try {
      // Get the input fields
      const name = document.querySelector(
        ".row-email:nth-child(2) .connect-input"
      )?.value;
      const agency = document.querySelector(
        ".row-email:nth-child(3) .connect-input"
      )?.value;
      const project = document.querySelector(
        ".row-email:nth-child(4) .connect-input"
      )?.value;
      const email = document.querySelector(
        ".row-email:nth-child(5) .connect-input"
      )?.value;

      console.log(name, agency, project, email);

      // Validate inputs
      if (!name || !agency || !project || !email) {
        alert("Please fill in all fields before submitting.");
        return;
      }

      // Create the formatted message
      const message = `
        Hello,

        My name is ${name}.
        I work for a/an ${agency} & need help with ${project}.
        You can email me at ${email}.
      `;

      // Prepare the email parameters
      const templateParams = {
        from_name: name,
        message: message,
        user_email: email,
      };

      // Send the email using EmailJS
      emailjs.send("service_h6zwpyp", "template_vbp1xo8", templateParams).then(
        function (response) {
          console.log(
            "Email sent successfully!",
            response.status,
            response.text
          );
          alert("Email sent successfully!");
        },
        function (error) {
          console.error("Failed to send email. Error:", error);
          alert("Failed to send email. Please try again later.");
        }
      );
    } catch (error) {
      console.error("An error occurred during form submission:", error);
      alert("An error occurred. Please check the console for details.");
    }
  });
});
