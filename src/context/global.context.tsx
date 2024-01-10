import { Fragment, createContext, useContext, useState } from "react";


interface IGlobalContextProps {
    isActiveModalProducer: Boolean
    setIsActiveModalProducer: (isActiveModalProducer: boolean) => void
    isActiveModalFarm: Boolean
    setIsActiveModalFarm: (isActiveModalFarm: boolean) => void
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

    const [isActiveModalProducer, setIsActiveProducer] = useState<Boolean>(false)
    const [isActiveModalFarm, setIsActiveFarm] = useState<Boolean>(false)

    const handleOpenModalProducer = () => {
        setIsActiveProducer(!isActiveModalProducer)
    }
    const handleOpenModalFarm = () => {
        setIsActiveFarm(!isActiveModalFarm)
    }
    return (
        <Fragment>
            <GlobalContext.Provider
                value={{
                    isActiveModalProducer: isActiveModalProducer,
                    setIsActiveModalProducer: handleOpenModalProducer,
                    isActiveModalFarm: isActiveModalFarm,
                    setIsActiveModalFarm: handleOpenModalFarm,
                }}
            >
                {children}
            </GlobalContext.Provider>
        </Fragment >)
}
