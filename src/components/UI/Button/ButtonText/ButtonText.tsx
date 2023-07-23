import React from "react";
import Button from "../Button";
// TODO: extends native button type, scope css by class
interface ButtonTextProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
}
const ButtonText = ({ ...otherProps }: ButtonTextProps) => {
    return (
        <Button className={otherProps.className}>{otherProps.children}</Button>
    )
}

export default ButtonText;