import styled from "styled-components";
import { Body } from "ui/typography";

export function ModalContainer({ children, status,}: {children: string; status: boolean;}) {
  const SuccessContainer = styled.div`
    border-radius: 8px;
    background-color: var(--success);
    padding: 5px 0;
    text-align: center;
    color: white;
  `;

  const ErrorContainer = styled.div`
    border-radius: 8px;
    background-color: var(--red);
    padding: 5px 0;
    text-align: center;
    color: white;
  `;

  return status ? (
    <SuccessContainer>
      <Body>{children}</Body>
    </SuccessContainer>
  ) : (
    <ErrorContainer>
      <Body>{children}</Body>
    </ErrorContainer>
  );
}
