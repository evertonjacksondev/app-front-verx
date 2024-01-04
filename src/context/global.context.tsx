import { Fragment, createContext, useContext, useState } from "react";


interface IGlobalContextProps {
    isActiveModal: Boolean
    setIsActiveModal: (isActiveModal: boolean) => void
}
interface IProviderGlobalProps {
    children: React.ReactNode
}

export const GlobalContext = createContext({} as IGlobalContextProps);


export function useProviderGlobal() {
    const context = useContext(GlobalContext)
    return context
}

export const ProviderGlobal = ({ children }: IProviderGlobalProps) => {

    const [isActiveModal, setIsActive] = useState<Boolean>(false)

    const handleOpenModal = () => {
        setIsActive(!isActiveModal)
    }

    return (
        <Fragment>
            <GlobalContext.Provider
                value={{
                    isActiveModal: isActiveModal,
                    setIsActiveModal: handleOpenModal
                }}
            >
                {children}
            </GlobalContext.Provider>
        </Fragment >)
}
