import { Fragment } from "react"
import { Button } from "../atoms/Button"
import { useProviderGlobal } from "../../context/global.context"
import {Modal} from '../organisms/Modal'

export const Home = () => {
 
    const { isActiveModal, setIsActiveModal } = useProviderGlobal()
    
    return (
        <Fragment>
            <Modal name="Agro"/>
            <Button onClick={() => setIsActiveModal(!isActiveModal)}>Gerar</Button>
        </Fragment>
    )
}