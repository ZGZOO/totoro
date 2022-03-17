import React from "react";
import { Link } from "react-router-dom";
import loginImg from "./asset/login.svg";

const AccountMenu = () => {
	return (
		<div className="AccountMenu">
			<div className="account-menu-item">
				<div className="account-dropdown-button">
					<Link to="" title="Click to log in">
						<img src={loginImg} alt="log in icon" width="25" height="auto" />
					</Link>
				</div>
			</div>
		</div>
	);
};

export default AccountMenu;
