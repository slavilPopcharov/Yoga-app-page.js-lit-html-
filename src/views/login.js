import { uppdateNav } from "../app.js";
import { html } from "../libs.js";
import { setUserData } from "../util.js";

const liginURL = "https://parseapi.back4app.com/login";
const regHeaders = {
  "X-Parse-Application-Id": "8J5b8Kw7u1lo50HpwzaFz2o7C2wjSakynw9CAyiG",
  "X-Parse-REST-API-Key": "uIT7J2zVNqn299XXz7S2tTaeWzPHokCYbw1SuunK",
  "X-Parse-Revocable-Session": "1",
  "Content-Type": "application/json",
};

const loginTemplate = (onSubmit) => html`<section id="login-page" class="login">
  <form id="login-form" @submit=${onSubmit}>
    <fieldset>
      <legend>Login Form</legend>
      <p class="field">
        <label for="email">Email</label>
        <span class="input">
          <input type="text" name="email" id="email" placeholder="Email" />
        </span>
      </p>
      <p class="field">
        <label for="password">Password</label>
        <span class="input">
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
        </span>
      </p>
      <input class="button submit" type="submit" value="Login" />
    </fieldset>
  </form>
</section>`;

export function loginView(ctx) {
  ctx.render(loginTemplate(onSubmit));

  async function onSubmit(ev) {
    try {
      ev.preventDefault();

      const formData = new FormData(ev.target);
      const email = formData.get("email");
      const password = formData.get("password");
      
        //?username=gabby@abv.bg&password=123456

      const res = await fetch(liginURL + '?username=' + email + '&password='+ password, {
        method: "GET",
        headers: regHeaders,
      });
        if(res.ok){
        const data = {email, password}
        const info = JSON.parse(await res.text())
        //console.log(info) = Object {objectId,username:, createdAt, updatedAt, email,sessionToken"}
        setUserData(info)   
        } 
      
      ctx.uppdateNav()
      ctx.page.redirect("/myPoses");
    } catch (err) {
        alert(err.message);
        throw err;
    }
  }
}
