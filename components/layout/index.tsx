import { Header } from "components/header"
import { Footer } from "components/footer"
import { Root } from "./styled"

export function Layout({children}: any) {
    return <Root>
        <Header/>
            {children}
        <Footer/>
    </Root>
}