import { useEffect, useState } from "react";
import { ModalContainer } from "./styled";

type ModalProp = {
  res: { updated: boolean };
};

export function Modal({ res }: ModalProp) {
  let [message, setMessage] = useState("");

  useEffect(() => {
    if (res.updated) {
      setMessage("Actualizado correactamente");
    }
    if (res.updated == false) {
      setMessage("Ocurrió un error, intente de nuevo");
    }
  }, [res]);

  return <ModalContainer status={res.updated}>{message}</ModalContainer>
}
