import { html } from "../libs.js";

const homeTemplate = () => html ` <section id="dashboard-page" class="dashboard">
<h1>All poses</h1>
<!-- Display ul: with list-items for All books (If any) -->
<ul class="other-books-list">
    <li class="otherBooks">
        <h3>Adhomukha Svanasana</h3>
       <!-- <p>Type: Fiction</p> -->
        <p class="img"><img src="./images/poses/adhomukha_svanasana.png"></p>
        <a class="button" href="#">Details</a>
    </li>

    <li class="otherBooks">
        <h3>Vira Bhadrasana</h3>
        <!-- <p>Type: Fiction</p> -->
        <p class="img"><img src="/images/poses/virabhadrasana_i.png"></p>
        <a class="button" href="#">Details</a>
    </li>

    <li class="otherBooks">
        <h3>Dandayamna Bharmanasana</h3>
        <!-- <p>Type: Fiction</p> -->
        <p class="img"><img src="/images/poses/dandayamna_bharmanasana.png"></p>
        <a class="button" href="#">Details</a>
    </li>
</ul>
<!-- Display paragraph: If there are no books in the database -->
<p class="no-books">No poses in database!</p>
</section>`;

export function homeView(ctx) {
  ctx.render(homeTemplate())
}