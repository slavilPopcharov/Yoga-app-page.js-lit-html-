import { page, render} from "./libs.js";
import { createView } from "./views/create.js";
import { homeView } from "./views/home.js";
import { loginView } from "./views/login.js";
import { registerView } from "./views/register.js"; // ADD GENDER CHOICE
import { profileView } from "./views/userProfile.js";

const main = document.getElementById('site-content');

page(decorateContext)
page('/', homeView);
page('/login', loginView);
page('/register', registerView);
page('/create', createView);
page('/myPoses', profileView)

page.start();

function decorateContext(ctx, next) {

  ctx.render = renderMain;
  next();
}

function renderMain(templateResult) {
  render(templateResult, main)
}