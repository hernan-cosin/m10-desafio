import styled from "styled-components"
import MenuSvg from "./menu/menu.svg"
import MenuCloseSvg from "./menu-close/x.svg"
import instagramSvg from "./instagram/instagram.svg"

export const MenuOpenIcon = styled(MenuSvg)`
    width: 38px;
    height: 38px;
    color: var(--yellow);
    cursor: pointer;

    @media (min-width: 600px) {
        display: none;
    }
    `

export const MenuCloseIcon = styled(MenuCloseSvg)`
    width: 38px;
    height: 38px;
    color: var(--yellow);
    cursor: pointer;

    &.mobile {
        align-self: flex-end;
        margin: 0 10px 0 0;
        position: absolute;
        top: 22.5px;
    }
`

// const MenuCloseContainer = styled.div`
//     @media (max-width: 599px) {
//         background-color: var(--dark-blue);
//         position: absolute;
//         top: 0;
//         left: 0;
//         right: 0;
//         bottom: 0;
//         z-index: 30;
//         width: 100%;
//         display: flex;
//         flex-direction: column;
//         justify-content: space-around;
//         align-items: center;    
//     }

//     @media (min-width: 600px) {
//     }

// `

// const MenuClose = ({onClick}:any)=>{

//     return <MenuCloseContainer>
//         <MenuCloseIcon onClick={onClick} className="mobile"></MenuCloseIcon>
//         <Button backgroundColor="yellow" className={"header-menu"}>Ingresar</Button>
//         <Link href={"/signin"}>
//             <Subtitle color="white" link>Ingresar</Subtitle>
//         </Link>
//         <Link href={"/profile"}>
//             <Subtitle color="white" link>Mi Perfil</Subtitle>
//         </Link>
//         <Link href={"/search"}>
//             <Subtitle color="white" link>Buscar</Subtitle>
//         </Link>
//     </MenuCloseContainer>
// }

// export function Menu() {
//     const [toggle, setToggle] = useState(true)

//     function handleToggle(){
//         setToggle(!toggle)
//     }

//     return toggle? <MenuOpen onClick={handleToggle}/> : <MenuClose onClick={handleToggle}/>
// }

export const Instagram = styled(instagramSvg)`
    width: 18px;
    height: 18px;
`