import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ButtonIcon from "../../UI/Button/ButtonIcon/ButtonIcon";
import ButtonText from "../../UI/Button/ButtonText/ButtonText";
import Checkbox from "../Checkbox/Checkbox";
import Input from "../Input/Input";
import "./register.scss";
import { EMAIL_VALIDATION_REGEX, PASS_VALIDATION_REGEX } from "../../../utils/regex";

const Register = () => {
    const [inputState, setInputState] = useState({
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        phone: '',
        checkbox: '',
    })

    const [errors, setErrors] = useState({
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        phone: '',
        checkbox: '',
    })

    const handleInputChange = (event: React.FocusEvent<HTMLInputElement, Element>) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        setInputState(prevState => ({ ...prevState, [name]: value }));
    }

    const validationChecks = (event: any, validateAll: boolean = false) => {
        if (validateAll || event.target.name === 'email') {
            const isEmailValid = RegExp(EMAIL_VALIDATION_REGEX).test(inputState.email)

            setErrors(prevState => ({
                ...prevState,
                email: isEmailValid ? '' : 'Invalid email address'
            }))
        }

        if (validateAll || event.target.name === 'password') {
            const isPassValid = RegExp(PASS_VALIDATION_REGEX).test(inputState.password)

            setErrors(prevState => ({
                ...prevState,
                password: isPassValid ? '' : 'Invalid password'
            }))

            if (inputState.password.length < 6 && inputState.password.length >= 1) {
                setErrors(prevState => ({ ...prevState, password: 'Need to be at least 6 characters' }))
            }
        }


        if (validateAll || event.target.name === 'firstName') {
            setErrors(prevState => ({
                ...prevState,
                firstName: inputState.firstName.length < 1 ? 'Please enter your first name' : ''
            }))

            if (inputState.firstName.length < 3 && inputState.firstName.length >= 1) {
                setErrors(prevState => ({ ...prevState, firstName: 'Need to be at least 3 characters' }))
            }
        }

        if (validateAll || event.target.name === 'lastName') {
            setErrors(prevState => ({
                ...prevState,
                lastName: inputState.lastName.length < 1 ? 'Please enter your last name' : ''
            }))

            if (inputState.lastName.length < 3 && inputState.lastName.length >= 1) {
                setErrors(prevState => ({ ...prevState, lastName: 'Need to be at least 3 characters' }))
            }
        }

        if (validateAll || event.target.name === 'phone') {
            setErrors(prevState => ({
                ...prevState,
                phone: inputState.phone.length < 1 ? 'Please enter your phone number' : ''
            }))

            if (inputState.phone.length < 11 || inputState.phone.length > 11) {
                setErrors(prevState => ({ ...prevState, phone: 'Need to be 11 symbols' }))
            }
        }

        if (validateAll || event.target.name === 'checkbox') {
            setErrors(prevState => ({
                ...prevState,
                checkbox: !inputState.checkbox ? 'Please select' : ''
            }))
        }
    }

    const navigate = useNavigate();

    const handleBlur = (event: React.FocusEvent<HTMLInputElement, Element>) => {

        validationChecks(event)

    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        validationChecks(null, true)
        let hasErrorMsgs = false;
        let isEmpty = false;
        for (const str in inputState) {
            isEmpty = str.length >= 1;
            if(isEmpty) {
                break;
            }
        }
        for (const err in errors) {

            hasErrorMsgs = err.length > 0;
            if(hasErrorMsgs) {
                break;
            }
        }
        if (
            !hasErrorMsgs &&
            !isEmpty &&
            inputState.checkbox.length !== 0
        ) {
            alert('submitted')
            navigate('/');
        }
    }
    return (

        <form onSubmit={handleSubmit} className="register-form">
            <div className="heading-container">
                <Link to="/">
                    <ButtonIcon type="button" icon="fa-solid fa-arrow-left" />
                </Link>

                <h1>Sign Up</h1>
            </div>

            <Input onChange={handleInputChange} hasErrors={!!errors.email} onBlur={handleBlur}
                name="email"
                type="email"
                title="Email"
                errorMessage={errors.email}
            />

            <Input onChange={handleInputChange} hasErrors={!!errors.password} onBlur={handleBlur}
                name="password"
                title="Password"
                errorMessage={errors.password}
                isPassword
            />

            <Input onChange={handleInputChange} hasErrors={!!errors.firstName} onBlur={handleBlur}
                name="firstName"
                title="First Name"
                type="text"
                errorMessage={errors.firstName}
            />

            <Input onChange={handleInputChange} hasErrors={!!errors.lastName} onBlur={handleBlur}
                name="lastName"
                title="Last Name"
                type="text"
                errorMessage={errors.lastName}
            />

            <Input onChange={handleInputChange} hasErrors={!!errors.phone} onBlur={handleBlur}
                name="phone"
                title="Phone"
                type="number"
                errorMessage={errors.phone}
            />

            <Checkbox onChange={handleInputChange} hasErrors={!!errors.checkbox} onBlur={handleBlur}
                name="checkbox"
                id="checkbox"
                title="I have read and i agree to the Terms of Service and the Privacy Policy"
                errorMessage={errors.checkbox}
            />
            
            <Link to="/termsOfService" className="termsOfService">Terms of Service and the Privacy Policy</Link>

            <ButtonText type="submit" className="primary">Complete</ButtonText>
            <ButtonText type="button" className="secondary">Skip</ButtonText>

        </form>
    );
};

export default Register;