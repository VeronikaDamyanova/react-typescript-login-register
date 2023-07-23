import "./select.scss";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    label: string,
    options: {
        value: string;
        title: string;
    }[]
}

const Select = ({label, options, ...otherProps}:SelectProps) => {
    return (
        <div className="dropdown-container">
            <p>{label}</p>
            <select {...otherProps}>
                {options.map((item, i) => {
                    return (
                        <option key={i} value={item.value}>{item.title}</option>
                    );
                })}
            </select>
        </div>
    );
};

export default Select;