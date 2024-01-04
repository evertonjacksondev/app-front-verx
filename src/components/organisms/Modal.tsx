import styled from "styled-components";
import { Button } from "../atoms/Button";
import { useProviderGlobal } from "../../context/global.context";



const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  box-shadow: 0 1px 10px rgb(0 0 0 / 0.2);
  display: flex;
  flex-direction: row;
  z-index:1200;
  overflow: hidden;
  justify-content: center;
  align-items: center;
`;

interface IModalProps {
  name: string
}



export const Modal = ({ name }: IModalProps) => {
  const { isActiveModal, setIsActiveModal } = useProviderGlobal()
  
  if (!isActiveModal) return
  
  return (
    <ModalContainer>
      {name}
      <Button onClick={() => setIsActiveModal(!isActiveModal)}>Fechar</Button>
    </ModalContainer>

  )

}