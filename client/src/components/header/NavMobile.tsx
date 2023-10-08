import { AiOutlineClose } from "react-icons/ai";
import { BiMoon } from "react-icons/bi";
import { BsSun } from "react-icons/bs";
import NavListItem from "./NavListItem";

type Props = {
	toggleMenu: () => void;
	darkMode: boolean;
	toggleDarkMode: () => void;
};

const Links = [
	{
		linkAddress: "#",
		linkName: "About",
	},
	{
		linkAddress: "#",
		linkName: "Experience",
	},
	{
		linkAddress: "#",
		linkName: "Work",
	},
	{
		linkAddress: "#",
		linkName: "Contact",
	},
];

const NavMobile = ({ toggleMenu, darkMode, toggleDarkMode }: Props) => {
	return (
		<nav
			className="fixed z-20 md:hidden w-full h-screen top-0 left-0  bg-gray-900 bg-opacity-10 flex justify-end"
			onClick={toggleMenu}
		>
			<div className="w-[320px] dark:bg-gray-900 bg-gray-50 h-full drop-shadow-2xl">
				<div
					className="text-2xl p-4 flex justify-end text-gray-900 dark:text-gray-100"
					onClick={(e) => e.stopPropagation()}
				>
					<div className="p-1 " onClick={toggleMenu}>
						<AiOutlineClose />
					</div>
				</div>
				<div className="p-2 dark:border-y-gray-800 border-y-gray-200 border-t-2">
					<ul className="flex flex-col gap-2 items-start font-semibold">
						{Links.map(({ linkAddress, linkName }) => (
							<NavListItem
								linkAddress={linkAddress}
								linkName={linkName}
							/>
						))}
					</ul>
				</div>
				<div
					className="p-2 py-3 dark:border-y-gray-800 border-y-gray-200 border-y-2"
					onClick={(e) => e.stopPropagation()}
				>
					<div className="flex flex-col gap-3 items-center w-full">
						<button
							className="font-semibold flex justify-between w-full items-center hover:bg-gray-200 dark:hover:bg-gray-800 py-2 px-4 rounded-lg"
							onClick={toggleDarkMode}
						>
							<span>Switch Theme</span>
							<span className="text-2xl">
								{darkMode ? <BiMoon /> : <BsSun />}
							</span>
						</button>

						<a
							download
							className="bg-gray-900 dark:bg-gray-100 hover:bg-gray-600 dark:hover:bg-gray-300 hover:shadow-lg shadow-black transition-all ease-in active:bg-gray-800 dark:active:bg-gray-200 text-gray-200 dark:text-gray-800 px-4 py-2 rounded-xl w-full"
						>
							Download Resume
						</a>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default NavMobile;
