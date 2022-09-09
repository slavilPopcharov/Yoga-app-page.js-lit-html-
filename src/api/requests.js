import { clearUserData, getUserData } from "../util.js";

const host =  `https://parseapi.back4app.com`
const usersURL = `/classes/_User`
const login = `/login`  //email/username + password?
const catalogURL =  `/classes/catalog` 


// Required Tokens:
const authHeaders = {
  "X-Parse-Application-Id": "8J5b8Kw7u1lo50HpwzaFz2o7C2wjSakynw9CAyiG",
  "X-Parse-REST-API-Key": "uIT7J2zVNqn299XXz7S2tTaeWzPHokCYbw1SuunK",
  'Content-Type' : 'application/json',
    }


async function request(url, method, data) {
  const options = {
    method,
    authHeaders
  };

  if (data !== undefined){
    options.authHeaders
    options.body = JSON.stringify(data)
  }

  const userData = getUserData()
  if(userData){
    //options.authHeaders['X-Authorization'] = userData.accessToken;
  }

  try {
    const res = await fetch(host + url, options);

    if (res.ok == false){
      if (res.status == 403){
        clearUserData()
      }
      const error = await res.json()
      throw new Error (error.message)
    }

    if (res.status == 204){
      return res
    }else{
      return res.json()
    }
  } catch (err) {
    alert(err.message);
    throw err;
  }
}

export function get (url){
  return request(url, 'get');
}

export function post(url, data) {
  return request(url, 'post', data)
}

export function put(url,data) {
  return request(url,'put',data)
}

export function del(url) {
  return request(url,'delete')
}