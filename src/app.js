import { page, render } from "./libs.js";
import { getUserData, setUserData } from "./util.js";
import { createView } from "./views/create.js";
import { catalogView } from "./views/catalog.js";
import { loginView } from "./views/login.js";
import { registerView } from "./views/register.js"; // ADD GENDER CHOICE
import { profileView } from "./views/userProfile.js";
import { homeview } from "./views/home.js";

const main = document.getElementById("site-content");
const logOutBtn = document.getElementById("logoutBtn");
logOutBtn.addEventListener("click", onLogout);

page(decorateContext);
page("/", homeview);
page("/catalog", catalogView);
page("/login", loginView);
page("/register", registerView);
page("/create", createView);
page("/myPoses", profileView);

uppdateNav();
page.start();

function decorateContext(ctx, next) {
  ctx.render = renderMain;
  ctx.uppdateNav = uppdateNav;
  next();
}

function renderMain(templateResult) {
  render(templateResult, main);
}

export function uppdateNav() {
  const userData = getUserData();

  if (userData) {
    document.querySelector("#user").style.display = "block";
    document.querySelector("#guest").style.display = "none";
    document.querySelector(
      "#user span"
    ).textContent = `Welcome ${userData.email}`;
  } else {
    document.querySelector("#user").style.display = "none";
    document.querySelector("#guest").style.display = "block";
  }
}

function onLogout() {
  if (window.confirm("Are you shure you want to wog out?")) {
    sessionStorage.removeItem("userData");
    uppdateNav();
    page.redirect("/");
  }
}
