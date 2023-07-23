import React, { useState } from "react";
import "./input.scss"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    isPassword?: boolean,
    hasErrors?: boolean,
    errorMessage?: string,
}

const Input = ({
title, name, isPassword,hasErrors,errorMessage,onBlur, ...otherProps
}: InputProps) => {
    const [passRevealed, setPassRevealed] = useState(false);
    const [touched, setTouched] = useState(false);

    const handleBlur = (event: React.FocusEvent<HTMLInputElement, Element>) => {
        setTouched(true);

        if(onBlur) {
            onBlur(event);
        }
    }
    return (
        <div className="input-container">

            <label htmlFor={name}>{title}</label>

            <div className="input-wrapper">
                <input onBlur={handleBlur} type={passRevealed ? "text" : "password"}
                    name={name} className={hasErrors ? 'invalid' : ''} {...otherProps} />

                <div className="icon-wrapper">
                    {isPassword &&
                        <i
                            className={`passIcon ${passRevealed ? "fa-regular fa-eye" : "fa-regular fa-eye-slash"}`}
                            onClick={() => setPassRevealed(!passRevealed)}
                            
                        />
                    }

                    {touched && !hasErrors && <i className="fa-solid fa-check" />}
                </div>

            </div>
             
            {hasErrors && <p className="error">{errorMessage}</p>}
        </div>
    );
};

export default Input;