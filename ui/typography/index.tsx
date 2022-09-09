import styled from "styled-components"

export const Title = styled.h1.attrs(props=>({
    className: props.className
}))`
    font-family: 'Poppins', sans-serif;
    font-size: 48px;
    margin: 0;
    padding: 0;
    overflow-wrap: break-word;

    &.homepage-title {
        text-align: center;
    }

    &.homepage-featured-title {
        text-align: center;
        margin: 0px 0 35px 0;
    }

    &.card-item-price {
        align-self: flex-end;
    }
    `

interface SubtitleTextProp {
    color?: "white" | "black"
    link?: boolean
}

export const Subtitle = styled(Title).attrs({as: "h2"})<SubtitleTextProp>`
    font-size: 32px;
    margin: 0;
    padding: 0;
    overflow-wrap: break-word;
    color: ${props => props.color};
    cursor: ${props => props.link? "pointer" : "default"};
    width: ${props => props.link? "fit-content" : "initial"};

    &.profile-title {
        text-align: center;
    }
    `

interface LargeTextProp {
    readonly bold?: boolean;
    color?: string;
    link?: boolean;
    pending?: string;
}

export const LargeText = styled.p<LargeTextProp>`
        font-family: 'Poppins', sans-serif;
        font-size: 24px;
        font-weight: ${props => props.bold ? "600" : "400"};
        margin: 0;
        padding: 0;
        color: ${props => props.color};
        cursor: ${props => props.link? "pointer" : "default"};
        width: ${props => props.link? "fit-content" : "initial"};
        text-decoration: ${props => "none"};
        overflow-wrap: break-word;
        
        &.social-footer {
            display: block;
        }

        &.search-page-message {
            text-align: center;
        }

        &.search-subtitle {
            text-align: center;
            margin: 0 0 25px 0;
            
            @media (min-width: 600px) {
                text-align: left;
            }
        }
        `

export const Body = styled(LargeText)`
        font-size: 16px;
        color: ${props => props.color};
        cursor: ${props => props.link? "pointer" : "default"};
        width: ${props => props.link? "fit-content" : "initial"};
        text-decoration: ${props => "none"};
        overflow-wrap: break-word;
        
        &.footer-copyright {
            @media (min-width: 600px) {
                align-self: flex-end;
            }
        }
        `

export const Tiny = styled(LargeText)`
        font-size: 12px;
        font-weight: 300;
        color: ${props => props.color};
        cursor: ${props => props.link? "pointer" : "default"};
        width: ${props => props.link? "fit-content" : "initial"};
        text-decoration: ${props => "none"};
        overflow-wrap: break-word;
`
export function BodyButton({children, color, onClick}: any){
    return <Body color={color} onClick={onClick} link>{children}</Body>
}

export function PageNumber({children, color, onClick}: any) {
    return <LargeText color={color} onClick={onClick} link>{children}</LargeText>
}