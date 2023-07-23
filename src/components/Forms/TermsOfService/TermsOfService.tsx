import Separator from "../../UI/Separator/Separator";
import Checkbox from "../Checkbox/Checkbox";
import ButtonText from "../../UI/Button/ButtonText/ButtonText";
import { Link, useNavigate } from "react-router-dom";
import "./termsOfService.scss"
import { useState } from "react";

const TermsOfService = () => {
    const [inputState, setInputState] = useState({
        checkbox: '',
    })

    const [errors, setErrors] = useState({
        checkbox: '',
    })

    const navigate = useNavigate();

    const handleInputChange = (event: React.FocusEvent<HTMLInputElement, Element>) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        setInputState(prevState => ({ ...prevState, [name]: value }));
    }

    const validationChecks = (event: any, validateAll: boolean = false) => {
        if (validateAll || event.target.name === 'checkbox') {
            setErrors(prevState => ({
                ...prevState,
                checkbox: !inputState.checkbox ? 'Please select' : ''
            }))
        }
    }

    const handleBlur = (event: React.FocusEvent<HTMLInputElement, Element>) => {
        validationChecks(event)
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        validationChecks(null, true)
        let hasErrorMsgs = false;
        let isEmpty = true;
        for (const str in inputState) {
            isEmpty = str.length >= 1;
        }
        for (const err in errors) {
            hasErrorMsgs = err.length > 0;
            console.log(err)
        }

        if (
            hasErrorMsgs &&
            inputState.checkbox.length !== 0
        ) {
            alert('submitted')
            navigate('/');
        }
    }
    return (
        <form onSubmit={handleSubmit} className="terms-wrapper">
            <h1>Updated Terms of Service</h1>
            <p>This is the text of the summary for the updated policy. It supports formatting.</p>
            <ul>
                <p>Summary of the changes:</p>
                <li>This is one</li>
                <li>This is two</li>
                <li>And so on</li>
            </ul>
            <Separator />
            <div className="options">
                <Link to={""}>Terms of Service & Privacy Policy<i className="fa-solid fa-chevron-right"></i></Link>
            </div>
            <Separator />

            <Checkbox onChange={handleInputChange} hasErrors={!!errors.checkbox} onBlur={handleBlur}
                name="checkbox"
                id="checkbox"
                type="checkbox"
                title="I have read and i agree to the Terms of Service and the Privacy Policy"
                errorMessage={errors.checkbox}
            />
            <ButtonText type="submit" className="primary">Complete</ButtonText>
            <ButtonText type="button" className="secondary">Cancel (Logout)</ButtonText>
        </form>
    );
}

export default TermsOfService;