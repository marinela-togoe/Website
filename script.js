

// Mouse Style
const mouseCircle = document.querySelector(".mouse-circle");
const mouseDot = document.querySelector(".mouse-dot");

const mouseCircleFn = (x, y) => {
    mouseCircle.style.cssText = `top: ${y}px; left: ${x}px; opacity: 1`;
    mouseDot.style.cssText = `top: ${y}px; left: ${x}px; opacity: 1`;
}
// End of Mouse Style

// Animated Circles
const circles = document.querySelectorAll(".circle");
const mainImg = document.querySelector(".main-circle img");

let mX = 0;
let mY = 0;
let z = 100;

const animateCircles = (e, x, y) => {
  if (x < mX) {
     circles.forEach((circle) => {
         circle.style.left = `${z}px`;
     });
     mainImg.style.left = `${z}px`;
  } else if (x > mX) {
      circles.forEach((circle) => {
        circle.style.left = `-${z}px`;
      });
      mainImg.style.left = `-${z}px`;
  }
  
  if (y < mY) {
    circles.forEach((circle) => {
      circle.style.top = `${z}px`;
    });
    mainImg.style.top = `${z}px`;
  } else if (y > mY) {
    circles.forEach((circle) => {
      circle.style.top = `-${z}px`;
    });
    mainImg.style.top = `-${z}px`;
  }

 mX = e.clientX;
 mY = e.clientY;
}
// End of Animated Circles
document.body.addEventListener("mousemove",(e) => {
    let x = e.clientX;
    let y = e.clientY;

    mouseCircleFn(x, y);
    animateCircles(e, x, y);
});

document.body.addEventListener("mouseleave", () => {
 mouseCircle.style.opacity = "0";
 mouseDot.style.opacity = "0";
});

// Main Button
const mainBtns = document.querySelectorAll(".main-btn");

mainBtns.forEach((btn) => {
let ripple;

btn.addEventListener("mouseenter", (e) => {
  const left = e.clientX - e.target.getBoundingClientRect().left;
  const top = e.clientY - e.target.getBoundingClientRect().top;

  ripple = document.createElement("div");
  ripple.classList.add("ripple");
  ripple.style.left = `${left}px`;
  ripple.style.top = `${top}px`;
  btn.prepend(ripple);
});

btn.addEventListener("mouseleave", () => {
  btn.removeChild(ripple);
});
})


// End of Main Button

// About Text
const aboutText = document.querySelector(".about-text");
const aboutTextContent = "I am a web developer and I create websites with the best user experience. For more details, please contact me.";

Array.from(aboutTextContent).forEach(char => {
  const span = document.createElement("span");
  span.textContent = char;
  aboutText.appendChild(span);

  span.addEventListener("mouseenter", (e) => {
    e.target.style.animation = "aboutTextAnim 10s infinite";
  })
});
// End of About Text

// Projects
 const container = document.querySelector(".container");
 const projects = document.querySelectorAll(".project");
 const projectHideBtn = document.querySelector(".project-hide-btn")

 projects.forEach((project, i) => {
  project.addEventListener("mouseenter", () => {
    project.firstElementChild.style.top = `-${project.firstElementChild.offsetHeight - project.offsetHeight + 20}px`;
  });

  project.addEventListener("mouseleave", () => {
   project.firstElementChild.style.top = "2rem";
  });

  // Big Project's image
  project.addEventListener("click", () => {
    const bigImgWrapper = document.createElement("div");
    bigImgWrapper.className = "project-img-wrapper";
    container.appendChild(bigImgWrapper);


    const bigImg = document.createElement("img");
    bigImg.className = "project-img";
    const imgPath = project.firstElementChild.getAttribute("src").split(".")[0];
    bigImg.setAttribute("src",`${imgPath}-big.jpg`);
    bigImgWrapper.appendChild(bigImg);
    document.body.style.overflowY = "hidden";

    projectHideBtn.classList.add("change");

    projectHideBtn.onclick = () => {
      projectHideBtn.classList.remove("change");
      bigImgWrapper.remove();
      document.body.style.overflowY = "scroll";
    }
  });
  // End of Big Project's image

  i >= 6 && (project.style.cssText = "display: none; opacity: 0");
  

 });
//  Projects Button
const section3 = document.querySelector(".section-3");
const projectsBtn = document.querySelector(".projects-btn");
const projectsBtnText = document.querySelector(".projects-btn span");
let showHideBool = true;


const showProjects = (project, i) => {
 setTimeout(() => {
   project.style.display = "flex";
   section3.scrollIntoView({ block: "end" });
 }, 600);

 setTimeout(() => {
   project.style.opacity = "1";
 }, i * 200);
}

const hideProjects = (project, i) => {
  setTimeout(() => {
    project.style.display = "none";
    section3.scrollIntoView({ block: "end" });
  }, 1200);

  setTimeout(() => {
    project.style.opacity = "0";
  }, i * 100);
}

projectsBtn.addEventListener("click", (e) => {
 e.preventDefault();

 projectsBtn.firstElementChild.nextElementSibling.classList.toggle("change");

  showHideBool
    ? (projectsBtnText.textContent = "Show Less")
    : (projectsBtnText.textContent = "Show More");

 projects.forEach((project, i) => {
  i >= 6 && (showHideBool ? showProjects(project, i) : hideProjects(project, i));

  }
 );
 showHideBool = !showHideBool;
});
// End of Projects Button
// End of Projects


// Section 4
document.querySelectorAll(".service-btn").forEach((service) => {
  service.addEventListener("click", (e) => {
    e.preventDefault();

    const serviceText = service.nextElementSibling;
    serviceText.classList.toggle("change");

    const rightPosition = serviceText.classList.contains
    ("change") ? `calc(100% - ${getComputedStyle(service.firstElementChild).width})` 
    : 0;

    service.firstElementChild.style.right = 
    rightPosition;
  });
});
// End of Section 4

// Section 5
// Form
const formHeading = document.querySelector(".form-heading");
const formInputs = document.querySelectorAll(".contact-form-input");

formInputs.forEach((input) => {
 input.addEventListener("focus", () => {
   formHeading.style.opacity = "0";
   setTimeout(() => {
    formHeading.textContent = `Your ${input.placeholder}`;
    formHeading.style.opacity = "1";
   }, 300);
 });

  input.addEventListener("blur", () => {
    formHeading.style.opacity = "0";
    setTimeout(() => {
      formHeading.textContent = "Contact Me:";
      formHeading.style.opacity = "1";
    }, 300);
  });
});


 
 
// End of Form
// End of Section 5