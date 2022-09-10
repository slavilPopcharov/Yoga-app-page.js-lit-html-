import { html } from "../libs.js";

const homeTemplate = () => html `
<section id="dashboard-page" class="dashboard">
    <h1>WELCOME TO OUR SITE</h1>
    <p class="no-books">Find countless youga poses to learn and practice every day!</p>   
<img class="homeImg" src="./images/homePage2.JPG">
</section>
`;

export function homeview(ctx){
  ctx.render(homeTemplate())
}