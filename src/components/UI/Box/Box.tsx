import React from "react";
import "./box.scss";

interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
    textContent?: string,
    icon?: string,
    children: React.ReactNode,
    className?: string,
}

const Box = ({
    icon, textContent, children, className,
}: BoxProps) => {
    return (
        <div className={`box ${className}`}>
            <div className="left-side">
                {icon ?
                    <i className={icon}></i>
                    : ''
                }

                {textContent ?
                    <p>{textContent}</p>
                    : ''
                }
            </div>

            {children ?
                <div className="right-side">
                    {children}
                </div>

                : ''
            }
        </div>
    );
};

export default Box;