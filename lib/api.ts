const BASE_URL = "http://localhost:3001/api";

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