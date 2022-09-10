import { html } from "../libs.js";

const profileTemplate = () => html ` <section id="user-profile-page" class="user-profile">
<article class="user-info">
  
    <img id="user-avatar-url" alt="user-profile" src="/images/user-icons/female-user-icon.jpg">
    <div class="user-content">
        <p>Username: Mary</p>
        <p>Email: mary@abv.bg</p>
        <p>My poses count: 2</p>
    </div>
</article>
<h1 id="user-listings-title">User Poses</h1>

<!-- Display ul: with list-items for every user's books (if any) -->
<section class="my-books-list">
<div class="stay">
  <div class="otherBooks">
      <h3>Pose:</h3>
      <!-- <p>Type: Fiction</p> -->
      <p class="img"><img src="/images/poses/adhomukha_svanasana.png"></p>
      <a class="button" href="#">Details</a>
  </div>
  <div class="otherBooks">
    <h3>Pose:</h3>
    <!-- <p>Type: Fiction</p> -->
    <p class="img"><img src="/images/poses/adhomukha_svanasana.png"></p>
    <a class="button" href="#">Details</a>
</div>
  <div class="otherBooks">
      <h3>Pose</h3>
      <!-- <p>Type: Fiction</p> -->
      <p class="img"><img src="/images/poses/adhomukha_svanasana.png"></p>
      <a class="button" href="#">Details</a>
  </div>
</div>
</section>

<!-- Display paragraph: If the user doesn't have his own books  -->
<p class="no-books">No poses in database!</p>
</section>`;

export function profileView(ctx) {
  ctx.render(profileTemplate());
}