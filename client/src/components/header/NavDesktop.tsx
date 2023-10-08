import { BiMoon } from "react-icons/bi";
import { BsSun } from "react-icons/bs";
import NavListItem from "./NavListItem";

type Props = {
	darkMode: boolean;
	toggleDarkMode: () => void;
	links: {
		linkAddress: string;
		linkName: string;
	}[];
};

const NavDesktop = ({ darkMode, toggleDarkMode, links }: Props) => {
	return (
		<nav className="hidden md:flex gap-6 items-center">
			<ul className="flex gap-6 items-center font-semibold">
				{links.map(({ linkAddress, linkName }) => (
					<NavListItem
						key={linkName}
						linkAddress={linkAddress}
						linkName={linkName}
					/>
				))}
			</ul>

			<div className="w-[1px] border h-6 border-gray-100"></div>

			<div className="flex gap-6 items-center">
				<button className="text-2xl" onClick={toggleDarkMode}>
					{darkMode ? <BiMoon /> : <BsSun />}
				</button>
				<button className="bg-gray-900 hover:bg-gray-600 hover:shadow-lg shadow-black transition-all ease-in active:bg-gray-800 text-gray-50 px-4 py-1 rounded-xl ">
					Download Resume
				</button>
			</div>
		</nav>
	);
};

export default NavDesktop;
