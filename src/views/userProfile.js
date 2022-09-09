import { html } from "../libs.js";

const profileTemplate = () => html ` <section id="user-profile-page" class="user-profile">
<article class="user-info">
  
    <img id="user-avatar-url" alt="user-profile" src="/images/user-icons/female-user-icon.jpg">
    <div class="user-content">
        <p>Username: Mary</p>
        <p>Email: mary@abv.bg</p>
        <p>My memes count: 2</p>
    </div>
</article>
<h1 id="user-listings-title">User Memes</h1>

<!-- Display ul: with list-items for every user's books (if any) -->
<section class="my-books-list">
<div class="stay">
  <div class="otherBooks">
      <h3>Outlander</h3>
      <p>Type: Other</p>
      <p class="img"><img src="/images/poses/adhomukha_svanasana.png"></p>
      <a class="button" href="#">Details</a>
  </div>
  <div class="otherBooks">
    <h3>A Court of Thorns and Roses</h3>
    <p>Type: Fiction</p>
    <p class="img"><img src="/images/poses/adhomukha_svanasana.png"></p>
    <a class="button" href="#">Details</a>
</div>
  <div class="otherBooks">
      <h3>A Court of Thorns and Roses</h3>
      <p>Type: Fiction</p>
      <p class="img"><img src="/images/poses/adhomukha_svanasana.png"></p>
      <a class="button" href="#">Details</a>
  </div>
</div>
</section>

<!-- Display paragraph: If the user doesn't have his own books  -->
<p class="no-books">No books in database!</p>
</section>`;

export function profileView(ctx) {
  ctx.render(profileTemplate());
}