import styled from "styled-components";

interface ButtonProps {
  backgroundColor: string;
  color?: string;
  className?: string;
  disabled?: boolean;
}

export const Button = styled("button")<ButtonProps>`
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  max-width: 230px;
  width: 100%;
  height: 40px;
  border-radius: 4px;
  border: none;
  background-color: ${(props) => "var(--button-" + props.backgroundColor + ")"};
  color: ${(props) =>
    props.backgroundColor == "blue" ? "var(--white)" : "black"};
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};
  pointer-events: ${(props) => (props.disabled ? "none" : "all")};
  opacity: ${(props) => (props.disabled ? ".35" : "1")};

  &.search-button {
    display: block;
    margin: 15px auto 0 auto;
  }

  @media (max-width: 599px) {
    &.header-menu {
      display: none;
    }
  }

  @media (min-width: 600px) {
    &.header-menu {
      display: block;
    }
  }

  &.signin-email-form {
    margin: 20px 0 0 0;
  }

  &.card-item-price {
    align-self: center;
  }

  &.search-see-more {
    margin: 0 auto;
    display: block;
  }

  &.thanks-page {
    margin: 25px auto 0 auto;
    display: block;
  }

  &.profile-orders-button {
    @media (min-width: 600px) {
      align-self: flex-end;
    }
  }
`;
