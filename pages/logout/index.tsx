import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const Logout: NextPage = () => {
    const router = useRouter()

    function logout() {       
        localStorage.removeItem("auth_token")
    }

    useEffect(()=>{
        logout()
        router.push("/")
    })

    return <div></div>
}

export default Logout