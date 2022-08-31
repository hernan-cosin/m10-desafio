import styled from "styled-components";
import LogoBlack from "assets/logo-dark.svg";
import LogoWhite from "assets/logo-light.svg";

// export function LogoBlack({className}:any) {
//   const Logo = styled(LogoDark)`

//     @media (min-width: 600px) {
//       width: 250px;
//     }
//   `
//   return <Logo className={className}/>
// }

export const LogoDark = styled(LogoBlack)`
  max-width: 150px;
  @media (min-width: 600px) {
    width: 250px;
    max-width: unset;
  }
`;

export const LogoLight = styled(LogoWhite)`
  max-width: 150px;
  cursor: pointer;
  @media (min-width: 600px) {
    max-width: unset;
    width: 250px;
  }
`;
