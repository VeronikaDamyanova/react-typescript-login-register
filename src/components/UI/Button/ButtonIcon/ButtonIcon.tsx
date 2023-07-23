import "./buttonIcon.scss"
import Button from "../Button";

interface ButtonIconProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    icon: string,
}

const ButtonIcon = ({ className, icon, ...otherProps }: ButtonIconProps) => {
    return (
        <Button className={`icon-btn ${className}`} {...otherProps}><i className={icon}/></Button>
    )
}

export default ButtonIcon;