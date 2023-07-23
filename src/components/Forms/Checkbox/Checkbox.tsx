import React from "react";
import "./checkbox.scss";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
    hasErrors?: boolean,
    errorMessage?: string,
    title: string,
}

const Checkbox = (({ hasErrors, title, errorMessage, ...otherProps }: CheckboxProps) => {
    return (
        <div className="input-container">
            <div className="input-wrapper">
                <input type="checkbox" className={hasErrors ? 'invalid' : ''} {...otherProps} />
                {title ?
                    <label htmlFor="checkbox">{title}</label>
                    : ''
                }

                {hasErrors && <p className="error">{errorMessage}</p>}
            </div>
        </div>
    );
});

export default Checkbox;