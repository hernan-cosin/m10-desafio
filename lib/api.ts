const BASE_URL = "http://localhost:3001/api";
// const BASE_URL = "https://dwf-m9-desafio-backend-ecommerce.vercel.app/api";

export async function fetchAPI(input: RequestInfo, options:any) {
    const url = BASE_URL + input;

    const token = getSavedToken()

    options = options || {}
    const newOptions: any = options || {}
    newOptions.headers = newOptions.headers || {}
    newOptions.headers["Content-Type"] = "application/json";

    if (token) {
        newOptions.headers.authorization = "Bearer " + token
    }

    if (newOptions.body) {
        newOptions.body = JSON.stringify(newOptions.body)
    }

    // console.log(newOptions);
    const res = await fetch(url, newOptions);

    if (res.status >= 200 && res.status < 300) {
        return res.json();
    } else {
        throw { 
        message: "Hay un error con el fetch", 
        status: res.status,
        res: res
        };
    }
}

export async function sendCode(email: string) {
    return fetchAPI("/auth", {
      method: "POST", 
      body: {email: email}
    })
}

export async function getToken(email: string, code: number) {
    const data = await fetchAPI("/auth/token", {
        method: "POST",
        body: {email: email, code: code}})
    saveToken(data.token)
    return true
}

export function saveToken(token: string) {
    localStorage.setItem("auth_token", token)
}

export function getSavedToken() {
    return localStorage.getItem("auth_token")
}

export async function searchProducts(query: string, page?: number, hitsPerPage?: number) {
    const pageParam = page? "&page=" + page : ""
    const hitsPerPageParam = hitsPerPage? "&hitsPerPage=" + hitsPerPage : ""

    const resProducts = await fetchAPI("/search?q=" + query + pageParam + hitsPerPageParam, {
    method: "GET",
    }) 

    return resProducts
}

interface orderInfo {
    objectID: string;
    amount: string;
    flavor: string[]
}

export async function generateOrder(info:orderInfo) {
    // console.log("API", info.objectID, info.flavor, info.amount);
    // console.log("sin json",{amount: info.amount, flavor:info.flavor})
    // console.log("con json",)

    const aditionalData = JSON.stringify({amount: info.amount, flavor: info.flavor})
    
    const resOrder = await fetchAPI("/order?productId=" + info.objectID, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: aditionalData,
    })
    
    console.log(resOrder)
    
    return resOrder
}