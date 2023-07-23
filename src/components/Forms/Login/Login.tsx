import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ButtonIcon from "../../UI/Button/ButtonIcon/ButtonIcon";
import ButtonText from "../../UI/Button/ButtonText/ButtonText";
import Select from "../../UI/Select/Select";
import Separator from "../../UI/Separator/Separator";
import Input from "../Input/Input";
import "./login.scss";
import { EMAIL_VALIDATION_REGEX, PASS_VALIDATION_REGEX } from "../../../utils/regex";
interface Errors {
    email: string;
    password: string;
}
const Login = () => {
    const navigate = useNavigate();

    const [inputState, setInputState] = useState({
        email: '',
        password: '',
    })

    const [errors, setErrors] = useState<Errors>({
        email: '',
        password: '',
    });

    const handleInputChange = (event: React.FocusEvent<HTMLInputElement, Element>) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        setInputState(prevState => ({ ...prevState, [name]: value }));
    }

    const validationChecks = (event:any, validateAll:boolean=false) =>{
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
    }
    const handleBlur = (event: React.FocusEvent<HTMLInputElement, Element>) => {
       validationChecks(event)
    }

    useEffect(() => {
        validationChecks(null, true);
    }, [inputState]);


    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const hasErrorMsgs = Object.values(errors).some((errMsg) => errMsg.length > 0);

                if (
            !hasErrorMsgs        ) {
            navigate('/profile');
        }
    }
    return (
        <form onSubmit={handleSubmit} className="login-form">
            <Select
                label="Languages"
                options={[{ value: "English", title: 'English' },
                { value: "Bulgarian", title: 'Bulgarian' },
                { value: "German", title: "German" }]}
            />

            <h1>Log In</h1>
            <Input onChange={handleInputChange} hasErrors={!!errors.email} onBlur={handleBlur}
                type="email"
                title="Email"
                name="email"
                errorMessage={errors.email}
            />

            <Input onChange={handleInputChange} hasErrors={!!errors.password} onBlur={handleBlur}
                name="password"
                title="Password"
                errorMessage={errors.password}
                isPassword
            />

            <ButtonText type="submit" className="primary">Login</ButtonText>

            <div className="options">
                <Link to={''}>Forgot password?</Link>
                <Link to="/signUp">Sign Up</Link>
            </div>

            <div className="socials-container">
                <Separator />
                Or continue with:

                <div className="socials">
                    <ButtonIcon type="button" className="primary" icon="fa-brands fa-facebook" />
                    <ButtonIcon type="button" className="primary" icon="fa-brands fa-google" />

                </div>
                <Separator />

            </div>

            <ButtonText type="button" className="secondary">Skip for now</ButtonText>

        </form>
    );
};

export default Login;