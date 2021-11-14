document.addEventListener("DOMContentLoaded", () => {
  const rickModal = new bootstrap.Modal(
    document.querySelector("#rickAstleyModal"),
    {}
  );
  // rickModal.toggle();

  // Selecting DOM Objects by Class name
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
    if (educationClass.classList.contains("shadow")) {
      educationClass.classList.remove("shadow");
    } else {
      educationClass.classList.add("shadow");
    }
  }

  function checkAboutShadowClass() {
    if (aboutClass.classList.contains("shadow")) {
      aboutClass.classList.remove("shadow");
    } else {
      aboutClass.classList.add("shadow");
    }
  }

  function checkSkillsShadowClass() {
    if (skillsClass.classList.contains("shadow")) {
      skillsClass.classList.remove("shadow");
    } else {
      skillsClass.classList.add("shadow");
    }
  }
  function checkLanguagesShadowClass() {
    if (languagesClass.classList.contains("shadow")) {
      languagesClass.classList.remove("shadow");
    } else {
      languagesClass.classList.add("shadow");
    }
  }
  function checkContactsShadowClass() {
    if (contactClass.classList.contains("shadow")) {
      contactClass.classList.remove("shadow");
    } else {
      contactClass.classList.add("shadow");
    }
  }
  function checkExperienceShadowClass() {
    if (experienceClass.classList.contains("shadow")) {
      experienceClass.classList.remove("shadow");
    } else {
      experienceClass.classList.add("shadow");
    }
  }

  // Colorize the main header string
  function changeHelloString() {
    let helloStringArray = [];
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
