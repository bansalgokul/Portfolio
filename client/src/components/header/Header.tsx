import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import NavMobile from "./NavMobile";
import NavDesktop from "./NavDesktop";

const links = [
	{
		linkAddress: "about",
		linkName: "About",
	},
	{
		linkAddress: "experience",
		linkName: "Experience",
	},
	{
		linkAddress: "work",
		linkName: "Work",
	},
	{
		linkAddress: "contact",
		linkName: "Contact",
	},
];

type Props = {
	darkMode: boolean;
	setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
	toggleDarkMode: () => void;
};

const Header = ({ darkMode, toggleDarkMode }: Props) => {
	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		setMenuOpen((prev) => !prev);
	};

	return (
		<div className=" p-4" id="header">
			{/* container */}
			<div className="flex justify-between items-center max-w-[1280px] mx-auto">
				<h1 className="font-bold text-3xl text-gray-900 dark:text-gray-100">
					GB
				</h1>
				<div className=" md:hidden text-2xl p-1 " onClick={toggleMenu}>
					<AiOutlineMenu />
				</div>
				{/* mobile nav */}
				{menuOpen && (
					<NavMobile
						toggleMenu={toggleMenu}
						toggleDarkMode={toggleDarkMode}
						darkMode={darkMode}
					/>
				)}
				{/* desktop nav */}
				<NavDesktop
					darkMode={darkMode}
					toggleDarkMode={toggleDarkMode}
					links={links}
				/>
			</div>
		</div>
	);
};

export default Header;
