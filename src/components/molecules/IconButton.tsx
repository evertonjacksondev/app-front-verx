import { Button } from "../atoms/Button"
import { FaRegMoon } from "react-icons/fa";

interface IIconButtonProps {
    name?: string
}


export const IconButton = ({ name }: IIconButtonProps) => {

    return (
        <Button>
            <FaRegMoon />
            {name}
        </Button>
    )
}