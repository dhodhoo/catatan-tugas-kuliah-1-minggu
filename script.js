// Deklarasi Variabel
const profileSection = document.getElementById("profile");
const scheduleSection = document.getElementById("schedule");
const tasksSection = document.getElementById("tasks");
const navbar = document.getElementById("navbar");
const welcomePage = document.getElementById("welcome-page");
const profileMenu = document.getElementById("profile-menu");
const scheduleMenu = document.getElementById("schedule-menu");
const tasksMenu = document.getElementById("tasks-menu");
const buttonProfile = document.getElementsByClassName("button-profile");
const buttonSchedule = document.getElementsByClassName("button-schedule");
const buttonTasks = document.getElementsByClassName("button-tasks");
const buttonMenu = document.getElementsByClassName("button-menu");
const buttonGreet = document.getElementsByClassName("button-greet");
const buttonSubmitName = document.getElementsByClassName("button-submit-name");
const buttonCancel = document.getElementsByClassName("button-cancel");
const inputSection = document.getElementById("input-section");
let navbarWelcomePage = document.querySelector(
  "#navbar > nav > ul > li:nth-child(1) > a"
);
let navbarProfile = document.querySelector(
  "#navbar > nav > ul > li:nth-child(2) > a"
);
let navbarSchedule = document.querySelector(
  "#navbar > nav > ul > li:nth-child(3) > a"
);
let navbarTasks = document.querySelector(
  "#navbar > nav > ul > li:nth-child(4) > a"
);
const taskCard = document.getElementsByClassName("article-card");
const fullscreenButton = Array.from(
  document.getElementsByClassName("fullscreen-button")
);
const fullscreenA = Array.from(document.getElementsByClassName("fullscreen-a"));
const fullscreenRequest = document.getElementById("fullscreen-request");

fullscreenButton.forEach((element) => {
  element.addEventListener("click", toggleFullscreen);
});
fullscreenA.forEach((element) => {
  element.addEventListener("click", toggleFullscreen);
});

document.addEventListener("fullscreenchange", () => {
  if (!document.fullscreenElement) {
    fullscreenRequest.style.display = "flex";
    document.body.classList.toggle("overflow-toggle");
  }
});

// Navbar
navbarWelcomePage.addEventListener("click", function () {
  hideTasksView();
  setTimeout(() => {
    showWelcomePage();
  }, 600);
  hideProfileSection();
  hideScheduleSection();
  hideTasksSection();
});

navbarProfile.addEventListener("click", function () {
  hideTasksView();
  setTimeout(() => {
    showProfileSection();
  }, 600);
  hideScheduleSection();
  hideTasksSection();
});

navbarSchedule.addEventListener("click", function () {
  hideTasksView();
  setTimeout(() => {
    showScheduleSection();
  }, 600);
  hideProfileSection();
  hideTasksSection();
});

navbarTasks.addEventListener("click", function () {
  hideTasksView();
  setTimeout(() => {
    showTasksSection();
  }, 600);
  hideProfileSection();
  hideScheduleSection();
});

// Home Menu
profileMenu.addEventListener("click", function () {
  setTimeout(() => {
    showProfileSection();
  }, 600);
  hideWelcomePage();
});

scheduleMenu.addEventListener("click", function () {
  setTimeout(() => {
    showScheduleSection();
  }, 600);
  hideWelcomePage();
});

tasksMenu.addEventListener("click", function () {
  setTimeout(() => {
    showTasksSection();
  }, 600);
  hideWelcomePage();
});

// Button
Array.from(buttonProfile).forEach((element) => {
  element.addEventListener("click", function () {
    setTimeout(() => {
      showProfileSection();
    }, 600);
    hideScheduleSection();
    hideTasksSection();
    hideWelcomePage();
  });
});
Array.from(buttonSchedule).forEach((element) => {
  element.addEventListener("click", function () {
    setTimeout(() => {
      showScheduleSection();
    }, 600);
    hideProfileSection();
    hideTasksSection();
    hideWelcomePage();
  });
});
Array.from(buttonTasks).forEach((element) => {
  element.addEventListener("click", function () {
    setTimeout(() => {
      showTasksSection();
    }, 600);
    hideProfileSection();
    hideScheduleSection();
    hideWelcomePage();
  });
});
Array.from(buttonMenu).forEach((element) => {
  element.addEventListener("click", function () {
    setTimeout(() => {
      showWelcomePage();
    }, 600);
    hideProfileSection();
    hideScheduleSection();
    hideTasksSection();
  });
});

// Input User
Array.from(buttonGreet).forEach((element) => {
  element.addEventListener("click", function () {
    inputSection.style.display = "flex";
    inputSection.style.zIndex = "1";
    setTimeout(() => {
      navbar.style.top = "-75px";
      inputSection.style.opacity = "1";
    }, 100);
  });
});
Array.from(buttonSubmitName).forEach((element) => {
  element.addEventListener("click", function () {
    let inputName = document.getElementById("name-input").value;
    if (inputName.trim() == "") {
      alert("Your Name Can't Be Blank");
    } else {
      alert(
        "Hello " +
          capitalizeEachWord(inputName) +
          "!! My Name Is Ridho\nNice To Meet You!"
      );
      navbar.style.top = "0px";
      inputSection.style.opacity = "0";
      inputSection.style.zIndex = "-1";
      setTimeout(() => {
        inputSection.style.display = "none";
      }, 400);
    }
  });
});
Array.from(buttonCancel).forEach((element) => {
  element.addEventListener("click", function () {
    navbar.style.top = "0";
    inputSection.style.opacity = "0";
    setTimeout(() => {
      inputSection.style.display = "none";
      inputSection.style.zIndex = "-1";
    }, 400);
  });
});

//Task-View
let taskCardArray = Array.from(taskCard);
for (let i = 0; i < taskCardArray.length; i++) {
  const element = taskCardArray[i];
  element.addEventListener("click", showTasksView);
}

function hideTasksView() {
  const taskView = document.getElementById("task-view");
  const sidebar = document.getElementById("sidebar");
  taskView.style.top = "-6000px";
  sidebar.style.left = "-250px";
  setTimeout(() => {
    taskView.classList.remove("display-block-toggle");
    taskView.classList.remove("opacity-toggle");
    taskView.style.zIndex = "-1";
  }, 2000);
}

function showTasksView() {
  const taskView = document.getElementById("task-view");
  const sidebar = document.getElementById("sidebar");
  taskView.classList.add("display-block-toggle");
  taskView.classList.add("opacity-toggle");
  taskView.style.zIndex = "40";
  setTimeout(() => {
    taskView.style.top = "0";
    sidebar.style.left = "0";
  }, 500);
}

//Responsive
//Mobile
const phoneMediaQuery = window.matchMedia("(max-width: 480px)");
if (phoneMediaQuery.matches) {
  const barrier = document.getElementsByClassName("barrier");
  const hamburgerMenu = document.getElementById("hamburger-menu");
  const responsiveNav = document.getElementById("responsive-nav");
  let navbarWelcomePage = document.querySelector(
    "#responsive-nav > ul > li:nth-child(1) > a"
  );
  let navbarProfile = document.querySelector(
    "#responsive-nav > ul > li:nth-child(2) > a"
  );
  let navbarSchedule = document.querySelector(
    "#responsive-nav > ul > li:nth-child(3) > a"
  );
  let navbarTasks = document.querySelector(
    "#responsive-nav > ul > li:nth-child(4) > a"
  );

  hamburgerMenu.addEventListener("click", function (e) {
    if (e.target.classList.contains("fa-bars")) {
      e.target.classList.remove("fa-bars");
      e.target.classList.add("fa-x");
    } else {
      e.target.classList.remove("fa-x");
      e.target.classList.add("fa-bars");
    }
    toggleResponsiveNav();
    Array.from(barrier).forEach((element) => {
      element.classList.toggle("zIndex-toggle");
      setTimeout(() => {
        element.classList.toggle("opacity-toggle");
      }, 50);
    });
  });

  // Navbar
  navbarWelcomePage.addEventListener("click", function () {
    hideTasksView2();
    setTimeout(() => {
      showWelcomePage();
    }, 900);
    toggleResponsiveNav();
    hideProfileSection();
    hideScheduleSection();
    hideTasksSection();
    Array.from(barrier).forEach((element) => {
      element.classList.toggle("zIndex-toggle");
      setTimeout(() => {
        element.classList.toggle("opacity-toggle");
      }, 50);
    });
    if (hamburgerMenu.classList.contains("fa-bars")) {
      hamburgerMenu.classList.remove("fa-bars");
      hamburgerMenu.classList.add("fa-x");
    } else {
      hamburgerMenu.classList.remove("fa-x");
      hamburgerMenu.classList.add("fa-bars");
    }
  });

  navbarProfile.addEventListener("click", function () {
    hideTasksView2();
    setTimeout(() => {
      showProfileSection();
    }, 900);
    toggleResponsiveNav();
    hideScheduleSection();
    hideTasksSection();
    Array.from(barrier).forEach((element) => {
      element.classList.toggle("zIndex-toggle");
      setTimeout(() => {
        element.classList.toggle("opacity-toggle");
      }, 50);
    });
    if (hamburgerMenu.classList.contains("fa-bars")) {
      hamburgerMenu.classList.remove("fa-bars");
      hamburgerMenu.classList.add("fa-x");
    } else {
      hamburgerMenu.classList.remove("fa-x");
      hamburgerMenu.classList.add("fa-bars");
    }
  });

  navbarSchedule.addEventListener("click", function () {
    hideTasksView2();
    setTimeout(() => {
      showScheduleSection();
    }, 900);
    toggleResponsiveNav();
    hideProfileSection();
    hideTasksSection();
    Array.from(barrier).forEach((element) => {
      element.classList.toggle("zIndex-toggle");
      setTimeout(() => {
        element.classList.toggle("opacity-toggle");
      }, 50);
    });
    if (hamburgerMenu.classList.contains("fa-bars")) {
      hamburgerMenu.classList.remove("fa-bars");
      hamburgerMenu.classList.add("fa-x");
    } else {
      hamburgerMenu.classList.remove("fa-x");
      hamburgerMenu.classList.add("fa-bars");
    }
  });

  navbarTasks.addEventListener("click", function () {
    hideTasksView2();
    setTimeout(() => {
      showTasksSection();
    }, 900);
    toggleResponsiveNav();
    hideProfileSection();
    hideScheduleSection();
    Array.from(barrier).forEach((element) => {
      element.classList.toggle("zIndex-toggle");
      setTimeout(() => {
        element.classList.toggle("opacity-toggle");
      }, 50);
    });
    if (hamburgerMenu.classList.contains("fa-bars")) {
      hamburgerMenu.classList.remove("fa-bars");
      hamburgerMenu.classList.add("fa-x");
    } else {
      hamburgerMenu.classList.remove("fa-x");
      hamburgerMenu.classList.add("fa-bars");
    }
  });

  // Task Card
  let taskCardArray = Array.from(taskCard);
  for (let i = 0; i < taskCardArray.length; i++) {
    const element = taskCardArray[i];
    element.addEventListener("click", showTasksView2);
  }

  sidebar.style.display = "none";

  //Mobile Function
  function toggleResponsiveNav() {
    responsiveNav.classList.toggle("nav-down");
  }

  function hideTasksView2() {
    const taskView = document.getElementById("task-view");
    taskView.style.top = "-11000px";
    setTimeout(() => {
      taskView.classList.remove("display-block-toggle");
      taskView.classList.remove("opacity-toggle");
      taskView.style.zIndex = "-1";
    }, 2000);
  }

  function showTasksView2() {
    const taskView = document.getElementById("task-view");
    taskView.classList.add("display-block-toggle");
    taskView.classList.add("opacity-toggle");
    taskView.style.zIndex = "40";
    setTimeout(() => {
      taskView.style.top = "0";
    }, 500);
  }
} else {
  console.log("you are not on a mobile phone");
}

// Function
function hideProfileSection() {
  for (let i = 0; i < profileSection.childElementCount; i++) {
    setTimeout(() => {
      profileSection.children[i].style.opacity = "0";
    }, i * 100);
  }
  setTimeout(() => {
    profileSection.style.zIndex = "-1";
    profileSection.style.opacity = "0";
    profileSection.style.display = "none";
  }, 200 * profileSection.childElementCount);
}

function hideScheduleSection() {
  for (let i = 0; i < scheduleSection.childElementCount; i++) {
    setTimeout(() => {
      scheduleSection.children[i].style.opacity = "0";
    }, i * 100);
  }
  setTimeout(() => {
    scheduleSection.style.zIndex = "-1";
    scheduleSection.style.opacity = "0";
    scheduleSection.style.display = "none";
  }, 200 * scheduleSection.childElementCount);
}

function hideTasksSection() {
  for (let i = 0; i < tasksSection.childElementCount; i++) {
    setTimeout(() => {
      tasksSection.children[i].style.opacity = "0";
    }, i * 100);
  }
  setTimeout(() => {
    tasksSection.style.zIndex = "-1";
    tasksSection.style.opacity = "0";
    tasksSection.style.display = "none";
  }, 200 * tasksSection.childElementCount);
}

function hideWelcomePage() {
  for (let i = 0; i < welcomePage.childElementCount; i++) {
    setTimeout(() => {
      welcomePage.children[i].style.opacity = "0";
      navbar.style.top = "0";
    }, i * 100);
  }
  setTimeout(() => {
    welcomePage.style.zIndex = "-1";
    welcomePage.style.opacity = "0";
    welcomePage.style.display = "none";
  }, 200 * welcomePage.childElementCount);
}

function showProfileSection() {
  setTimeout(() => {
    profileSection.style.display = "flex";
    profileSection.style.zIndex = "1";
    profileSection.style.opacity = "1";
  }, 100);
  if ((profileSection.style.display = "flex")) {
    for (let i = 0; i < profileSection.childElementCount; i++) {
      setTimeout(() => {
        profileSection.children[i].style.opacity = "1";
      }, i * 100);
    }
  }
}

function showScheduleSection() {
  setTimeout(() => {
    scheduleSection.style.display = "flex";
    scheduleSection.style.zIndex = "1";
    scheduleSection.style.opacity = "1";
  }, 100);
  if ((scheduleSection.style.display = "flex")) {
    for (let i = 0; i < scheduleSection.childElementCount; i++) {
      setTimeout(() => {
        scheduleSection.children[i].style.opacity = "1";
      }, i * 100);
    }
  }
}

function showTasksSection() {
  setTimeout(() => {
    tasksSection.style.display = "flex";
    tasksSection.style.zIndex = "1";
    tasksSection.style.opacity = "1";
  }, 100);
  if ((tasksSection.style.display = "flex")) {
    for (let i = 0; i < tasksSection.childElementCount; i++) {
      setTimeout(() => {
        tasksSection.children[i].style.opacity = "1";
      }, i * 100);
    }
  }
}

function showWelcomePage() {
  setTimeout(() => {
    welcomePage.style.display = "flex";
    welcomePage.style.zIndex = "1";
    welcomePage.style.opacity = "1";
  }, 100);
  if ((welcomePage.style.display = "flex")) {
    for (let i = 0; i < welcomePage.childElementCount; i++) {
      setTimeout(() => {
        welcomePage.children[i].style.opacity = "1";
        navbar.style.top = "-75px";
      }, i * 100);
    }
  }
}

function capitalizeEachWord(str) {
  const words = str.split(" ");
  const capitalizedWords = words.map((word) => {
    if (word.length === 0) {
      return "";
    }
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  return capitalizedWords.join(" ");
}

function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.body.classList.remove("overflow-toggle");
    document.documentElement.requestFullscreen();
    fullscreenRequest.style.display = "none";
  } else {
    document.exitFullscreen();
  }
}

//Dark Mode
const themeToggle = document.querySelector(".theme-toggle");
const themeToggle2 = document.querySelector(".theme-toggle2");
const body = document.body;

const currentTheme = localStorage.getItem("theme");
if (currentTheme === "dark") {
  body.classList.add("dark-mode");
  themeToggle.innerHTML = "&#127769;";
}

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    themeToggle.innerHTML = "&#127769;";
    localStorage.setItem("theme", "dark");
  } else {
    themeToggle.innerHTML = "&#127774;";
    localStorage.setItem("theme", "light");
  }
});
themeToggle2.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    themeToggle.innerHTML = "&#127769;";
    localStorage.setItem("theme", "dark");
  } else {
    themeToggle.innerHTML = "&#127774;";
    localStorage.setItem("theme", "light");
  }
});
