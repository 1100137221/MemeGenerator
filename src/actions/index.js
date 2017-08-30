
import { username,password } from './secrets';

export const REVICE_MEMES = "REVICE_MEMES";
export const NEW_NAME = "NEW_NAME";

function reciveMemes(json) {
    const { memes } = json.data ;
    return {
        type: REVICE_MEMES,
        memes
    }
}


function fetchMemesJson() {
    return fetch("https://api.imgflip.com/get_memes")
        .then(res=>res.json());
}

export function fetchMemes() {
    return function(dispatch) {
        return fetchMemesJson()
            .then(json=> dispatch(reciveMemes(json)));
    }
}

export function newName(name) {
    return {
        type: NEW_NAME,
        name
    }
}

function postNameJson(params) {
    params["username"] = username;
    params["password"] = password;

    const bodyParams = Object.keys(params).map(key=>{
        return encodeURIComponent(key) + "=" + encodeURIComponent(params[key])
    }).join("&");

    console.log("bodyParams",bodyParams);

    return fetch("https://api.imgflip.com/caption_image",{
        method:"POST",
        headers:{
            'Content-Type':'application/x-www-form-urlencoded'
        },
        body:bodyParams
    }).then(res=> res.json());

}

export function createMeme(new_name_object) {
    return function(dispatch) {
        return postNameJson(new_name_object)
            .then(new_name=>{   console.log(new_name),dispatch(newName(new_name))   })
    }
}