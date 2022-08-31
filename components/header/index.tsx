import { LogoLight } from "ui/logo"
import { Content, HeaderContainer } from "./styled"
// import { LogoDark } from "ui/logo"
import { Menu } from "components/menu"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { HeaderSearcher } from "./styled"
import styled from "styled-components"

export function Header() {   
    const router = useRouter()

    function handleLogoClick() {
        router.push("/")
    }

    const [home, setHome] = useState(false)

    useEffect(()=>{
        router.pathname == "/"? setHome(true) : setHome(false);        
    }, [router.pathname])

    return <HeaderContainer>
        <Content>
            <LogoContainer>
                <LogoLight onClick={handleLogoClick} />
                {/* <LogoDark/> */}
                <Menu/>
            </LogoContainer>
            <SearcherContainer>
                {home? "" : <HeaderSearcher/> }
            </SearcherContainer>
        </Content>
    </HeaderContainer>
}


const LogoContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
`



const SearcherContainer = styled.div`
    @media (min-width: 850px) {
        position: absolute;
        top: 25px;
        left: 50%;
        transform: translate(-50%, 0);
        }
`