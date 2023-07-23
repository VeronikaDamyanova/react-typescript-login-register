
import { Link } from "react-router-dom";
import Checkbox from "../Forms/Checkbox/Checkbox";
import Box from "../UI/Box/Box";
import Button from "../UI/Button/Button";
import ButtonIcon from "../UI/Button/ButtonIcon/ButtonIcon";
import ButtonText from "../UI/Button/ButtonText/ButtonText";
import "./profile.scss"

const Profile = () => {

    return (
        <div className="profile-wrapper">
            <div className="heading-container">
                <Link to="/">
                    <ButtonIcon type="button" icon="fa-solid fa-arrow-left" />
                </Link>

                <h1>My Profile</h1>
            </div>

            <h2>Details</h2>

            <Button className="primary"><i className="fa-solid fa-user-pen"></i> Edit</Button>
            <Button className="secondary"><i className="fa-solid fa-lock"></i> Change Password</Button>

            <div className="connected-accounts">
                <h2>Connected Accounts</h2>
                <Box className="mr-m" textContent="Label" icon="fa-solid fa-medal">
                    <Checkbox className="blue-check" name="checkbox" id="checkbox" title="" />
                </Box>
                <Box textContent="Label" icon="fa-solid fa-medal">
                    <ButtonText type="button" className="primary">Button</ButtonText>
                </Box>
                <Box textContent="Label" icon="fa-solid fa-medal">
                    <ButtonIcon type="button" icon="fa-regular fa-trash-can" />
                </Box>
                <Box textContent="Label" icon="fa-solid fa-medal">
                    <ButtonIcon type="button" icon="fa-solid fa-chevron-right" />
                </Box>
                <Box textContent="Label" icon="fa-solid fa-medal">
                    Label
                </Box>  <Box textContent="Label" icon="fa-solid fa-medal">
                </Box>

                <Box textContent="Label">
                    <Checkbox name="checkbox" id="checkbox" title="" />
                </Box>
                <Box textContent="Label">
                    <ButtonText type="button" className="primary">Button</ButtonText>
                </Box>
                <Box textContent="Label">
                    <ButtonIcon type="button" icon="fa-regular fa-trash-can" />
                </Box>
                <Box textContent="Label">
                    <ButtonIcon type="button" icon="fa-solid fa-chevron-right" />
                </Box>
                <Box textContent="Label">
                    Label
                </Box>  <Box textContent="Label">

                </Box>
            </div>

            <div className="other">
                <h2>Other</h2>
                <Button className="primary"><i className="fa-solid fa-file-export"></i> Export All Private Data</Button>
                <Button className="secondary"><i className="fa-solid fa-user-slash"></i> Remove Account</Button>
                <Button className="secondary">Sign Out <i className="fa-solid fa-arrow-right-from-bracket"></i></Button>

            </div>
        </div>
    );
}

export default Profile;