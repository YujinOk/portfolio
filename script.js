"strict";

const home = document.querySelector(".navbar-brand");
const lang = document.querySelector("#lang");
const about = document.querySelector("#abt");
const project = document.querySelector("#project");
const contact = document.querySelector("#navContact");
let language = "en";

function koreanTranslator() {
    if (language === "en") {
        home.innerText = "홈";
        about.innerText = "소개";
        project.innerText = "프로젝트";
        contact.innerText = "고객센터";
        language = "ko";
    } else {
        home.innerText = "Home";
        about.innerText = "About";
        project.innerText = "Projects";
        contact.innerText = "Contact";
        language = "en";
    }
}

lang.addEventListener("click", koreanTranslator);
