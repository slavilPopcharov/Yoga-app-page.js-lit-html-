import { del, get, post, put } from "./requests.js";


export async function getAllMemes() {
  return get('/data/memes?sortBy=_createdOn%20desc')
}

export async function getMemeByID(id) {
  return get('/data/memes/' + id)
}

export async function createNewMeme(meme){
  return post('/data/memes' , meme)
}

export async function deleteThisMeme(id) {
  return del('/data/memes/' + id )

  
}

export async function uppdateMeme (id, meme){
    return put('/data/memes/' + id, meme)
  }

  export async function getUserMemes(userId) {
    return get(`/data/memes?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`)
  }