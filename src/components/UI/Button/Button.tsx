// import "./button.scss"

// import React from "react";

// interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
//     icon?: string,
// }

// const Button = ({ className, children, icon, ...otherProps }: ButtonProps) => {
//     return (
//         <button className={`button ${className}`} {...otherProps}>
//             {children}
//             {icon ? <i className={icon}></i> : ''}
//         </button>
//     )
// }

// export default Button;

import "./button.scss"

import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    btnType?: string,
    icon?: string,
}

const Button = ({ className, children, icon, ...otherProps }: ButtonProps) => {
    return (
        <button className={`button ${className}`} {...otherProps}>
            {children}
            {icon ? <i className={icon}></i> : ''}
        </button>
    )
}

export default Button;