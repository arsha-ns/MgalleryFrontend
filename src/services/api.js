import axios from "axios"



const BASE_URL="http://127.0.0.1:8000/api/movies/"

export async function movieListApi(){

    return await axios.get(BASE_URL)

}

export async function movieDetailApi(id){

    return await axios.get(BASE_URL+`${id}/`)

}

export async function movieCreateApi(data){

    let headers={
        "Content-Type":"multipart/form-data"
    }

    return await axios.post(BASE_URL,data,{headers:headers})

}

export async function movieUpdateApi(id,data){

    let headers={
        "Content-Type":"multipart/form-data"
    }

    return await axios.put(BASE_URL+`${id}/`,data,{headers:headers})

}

export async function movieDeleteApi(id){

    return await axios.delete(BASE_URL+`${id}/`)

}