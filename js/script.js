document.addEventListener("DOMContentLoaded", () => {
  const rickModal = new bootstrap.Modal(
    document.querySelector("#rickAstleyModal"),
    {}
  );
  rickModal.toggle();

  // Vars
  const colors = [
    "#0d6efd",
    "#6610f2",
    "#6f42c1",
    "#d63384",
    "#dc3545",
    "#fd7e14",
    "#ffc107",
    "#198754",
    "#20c997",
    "#0dcaf0",
    "#adb5bd",
    "#000000",
    "#FFFFFF"
  ];
  const educationClass = document.querySelector(".education");
  const aboutClass = document.querySelector(".about");
  const skillsClass = document.querySelector(".skills");
  const languagesClass = document.querySelector(".languages");
  const contactClass = document.querySelector(".contact");
  const experienceClass = document.querySelector(".experience");
  
  const headerString = document.querySelector(".hello");
  const helloString = "Hi my name is Maxim and i`m web developer";
  
  const closeModal = document.querySelector("#closeModal");
  closeModal.addEventListener("click", () => {
    rickModal.toggle();
  });
  const blockBgClassNames = ["shadow", "flat"]
  const shadowClassName = blockBgClassNames[0];
  const flatClassName = blockBgClassNames[1];
  
  // Event Listeners
  educationClass.addEventListener("mouseenter", checkEducationShadowClass);
  educationClass.addEventListener("mouseleave", checkEducationShadowClass);
  aboutClass.addEventListener("mouseenter", checkAboutShadowClass);
  aboutClass.addEventListener("mouseleave", checkAboutShadowClass);
  skillsClass.addEventListener("mouseenter", checkSkillsShadowClass);
  skillsClass.addEventListener("mouseleave", checkSkillsShadowClass);
  languagesClass.addEventListener("mouseenter", checkLanguagesShadowClass);
  languagesClass.addEventListener("mouseleave", checkLanguagesShadowClass);
  contactClass.addEventListener("mouseenter", checkContactsShadowClass);
  contactClass.addEventListener("mouseleave", checkContactsShadowClass);
  experienceClass.addEventListener("mouseenter", checkExperienceShadowClass);
  experienceClass.addEventListener("mouseleave", checkExperienceShadowClass);

  // Runners
  function checkEducationShadowClass() {
    if (educationClass.classList.contains(shadowClassName)) {
      educationClass.classList.remove(shadowClassName + "&nbsp;" + flatClassName);
    } else {
      educationClass.classList.add(shadowClassName + "&nbsp;" + flatClassName);
    }
  }

  function checkAboutShadowClass() {
    if (aboutClass.classList.contains(shadowClassName)) {
      aboutClass.classList.remove(shadowClassName + "&nbsp;" + flatClassName);
    } else {
      aboutClass.classList.add(shadowClassName + "&nbsp;" + flatClassName);
    }
  }

  function checkSkillsShadowClass() {
    if (skillsClass.classList.contains(shadowClassName)) {
      skillsClass.classList.remove(shadowClassName + "&nbsp;" + flatClassName);
    } else {
      skillsClass.classList.add(shadowClassName + "&nbsp;" + flatClassName);
    }
  }
  function checkLanguagesShadowClass() {
    if (languagesClass.classList.contains(shadowClassName)) {
      languagesClass.classList.remove(shadowClassName + "&nbsp;" + flatClassName);
    } else {
      languagesClass.classList.add(shadowClassName + "&nbsp;" + flatClassName);
    }
  }
  function checkContactsShadowClass() {
    if (contactClass.classList.contains(shadowClassName)) {
      contactClass.classList.remove(shadowClassName + "&nbsp;" + flatClassName);
    } else {
      contactClass.classList.add(shadowClassName + "&nbsp;" + flatClassName);
    }
  }
  function checkExperienceShadowClass() {
    if (experienceClass.classList.contains(shadowClassName)) {
      experienceClass.classList.remove(shadowClassName + "&nbsp;" + flatClassName);
    } else {
      experienceClass.classList.add(shadowClassName + "&nbsp;" + flatClassName);
    }
  }

  // Colorize the main header string
  function changeHelloString() {
    let helloStringArray = [];

    let randColor = color => {
      return colors[Math.floor(Math.random() * colors.length)];
    };

    const newString = helloString.split(" ").map((item, key) => {
      return `<span style="color: ${randColor()}">${item}</span>`;
    });
    helloStringArray.push(newString);

    for (let i = 0; i < helloStringArray.length; i++) {
      const element = helloStringArray[i];
      headerString.innerHTML = element.join(" ");
    }

    // headerString.innerHTML = helloStringArray.slice(0);
  }
  const colorizeHeader = setInterval(() => {
    changeHelloString();
  }, 2000);
});
