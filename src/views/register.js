
import { html } from "../libs.js";

const regURL = "https://parseapi.back4app.com/users"
const host =  `https://parseapi.back4app.com`;
const reg = `/classes/_User`;
const regHeaders = {
    "X-Parse-Application-Id": "8J5b8Kw7u1lo50HpwzaFz2o7C2wjSakynw9CAyiG",
    "X-Parse-REST-API-Key": "uIT7J2zVNqn299XXz7S2tTaeWzPHokCYbw1SuunK",
    "X-Parse-Revocable-Session": "1",
    "Content-Type": "application/json",
};


const registerTemplate = (onRegister) => html `  <section id="register-page" class="register">
<form id="register-form" @submit = ${onRegister}>
    <fieldset>
        <legend>Register Form</legend>
        <p class="field">
            <label for="email">Email</label>
            <span class="input">
                <input type="text" name="email" id="email" placeholder="Email">
            </span>
        </p>
        <p class="field">
            <label for="username">Username</label>
            <span class="input">
                <input type="text" name="username" id="username" placeholder="username">
            </span>
        </p>
        <p class="field">
            <label for="password">Password</label>
            <span class="input">
                <input type="password" name="password" id="password" placeholder="Password">
            </span>
        </p>
        <p class="field">
            <label for="repeat-pass">Repeat Password</label>
            <span class="input">
                <input type="password" name="confirm-pass" id="repeat-pass" placeholder="Repeat Password">
            </span>
        </p>
        <input class="button submit" type="submit" value="Register">
    </fieldset>    
</form>
</section>`;

export function registerView (ctx){
  ctx.render(registerTemplate(onRegister));

async  function onRegister (ev){
    ev.preventDefault();

    const formData = new FormData (ev.target);
    const username = formData.get('username').trim()
    
    const password = formData.get('password').trim()
    const email = formData.get('email').trim()
    const repass = formData.get('confirm-pass').trim()
    //const gender = formData.get('gender') 
    const newUser = {username, email, password}
    console.log(newUser);

    if(username == ''|| email =='' || password ==''|| repass == ''){
        return alert('All fields are required!');
    }
    if (password !== repass) return alert("Passwords don't match!");

    const request = await fetch(regURL, {
        method: "POST",
        headers: regHeaders,
        body: JSON.stringify(newUser) ,
    })
    console.log(request);

  //   await register(username, email, password, gender)
//      //ctx.uppdateNav()
      ctx.page.redirect('/')
  }
  
      
  
}