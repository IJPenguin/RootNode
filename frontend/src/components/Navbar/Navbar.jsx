import logo from "../../assets/logo.svg";
import Hamburger from "hamburger-react";
import { useState } from "react";
import Logo from "../../Logo/Logo";
import Button from "../Button/Button";
import Navlink from "./Navlink";

const Navbar = () => {
	const [isOpen, setOpen] = useState(false);
	const handleLogin = () => {
		// Login code
	};
	return (
		<nav className="flex items-center justify-between bg-background px-4 py-3">
			<Logo
				logo={logo}
				logoOnly={false}
				x="w-14"
				y="h-14"
				fontSize="text-xl"
				fontWeight="font-bold"
			/>
			<div className="hidden md:block">
				<ul className="items-center justify-between gap-5 md:flex">
					<Navlink text="Streams" route="/streams" />
					<Navlink text="Archives" route="/archives" />
					<Navlink text="Sandbox" route="/sandbox" />
					<Navlink text="Learn" route="/learn" />
					<Navlink text="Devs" route="/devs" />
					<Button text="Login" onClick={handleLogin} />
				</ul>
			</div>
			<div className="md:hidden">
				<Hamburger
					color="#EBEBEB"
					easing="ease-in-out"
					distance="sm"
					size={32}
					toggled={isOpen}
					toggle={setOpen}
					onToggle={(toggled) => {
						if (toggled) {
						} else {
						}
					}}
				/>
			</div>
		</nav>
	);
};

export default Navbar;
