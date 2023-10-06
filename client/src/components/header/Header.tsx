import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { BsSun } from "react-icons/bs";
import { BiMoon } from "react-icons/bi";

const Header = () => {
	const [darkMode, setDarkMode] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);

	const toggleDarkMode = () => {
		setDarkMode((prev) => !prev);
	};

	const toggleMenu = () => {
		setMenuOpen((prev) => !prev);
	};

	return (
		<div className="p-4">
			{/* container */}
			<div className="flex justify-between items-center max-w-[1280px] mx-auto">
				<h1 className="font-bold text-3xl text-gray-900">GB</h1>
				<div
					className=" md:hidden text-2xl p-1 text-gray-600"
					onClick={toggleMenu}
				>
					<AiOutlineMenu />
				</div>
				{/* mobile nav */}
				{menuOpen && (
					<nav
						className="fixed md:hidden w-full h-screen top-0 left-0 text-gray-600 bg-gray-900 bg-opacity-10 flex justify-end"
						onClick={toggleMenu}
					>
						<div className="w-[320px] bg-[#f5f5f5] h-full drop-shadow-2xl">
							<div
								className="text-2xl p-4 flex justify-end text-gray-900"
								onClick={(e) => e.stopPropagation()}
							>
								<div className="p-1 " onClick={toggleMenu}>
									<AiOutlineClose />
								</div>
							</div>
							<div className="p-4 border-y-gray-200 border-t-2">
								<ul className="flex flex-col gap-4 items-start font-semibold">
									<li>
										<a href="#">About</a>
									</li>
									<li>
										<a href="#">Experience</a>
									</li>
									<li>
										<a href="#">Work</a>
									</li>
									<li>
										<a href="#">Contact</a>
									</li>
								</ul>
							</div>
							<div
								className="p-4 border-y-gray-200 border-y-2"
								onClick={(e) => e.stopPropagation()}
							>
								<div className="flex flex-col gap-4 items-center w-full">
									<button
										className="font-semibold flex justify-between w-full items-center"
										onClick={toggleDarkMode}
									>
										<span>Switch Theme</span>
										<span className="text-2xl">
											{darkMode ? <BiMoon /> : <BsSun />}
										</span>
									</button>

									<button className="bg-gray-900 hover:bg-gray-600 hover:shadow-lg shadow-black transition-all ease-in active:bg-gray-800 text-gray-200 px-4 py-2 rounded-xl w-full">
										Download Resume
									</button>
								</div>
							</div>
						</div>
					</nav>
				)}
				{/* desktop nav */}
				<nav className="hidden md:flex text-gray-600 gap-6 items-center">
					<ul className="flex gap-6 items-center font-semibold">
						<li>
							<a href="#">About</a>
						</li>
						<li>
							<a href="#">Experience</a>
						</li>
						<li>
							<a href="#">Work</a>
						</li>
						<li>
							<a href="#">Contact</a>
						</li>
					</ul>

					<div className="w-[1px] border border-gray-100"></div>

					<div className="flex gap-6 items-center">
						<button className="text-2xl" onClick={toggleDarkMode}>
							{darkMode ? <BiMoon /> : <BsSun />}
						</button>
						<button className="bg-gray-900 hover:bg-gray-600 hover:shadow-lg shadow-black transition-all ease-in active:bg-gray-800 text-gray-50 px-4 py-1 rounded-xl ">
							Download Resume
						</button>
					</div>
				</nav>
			</div>
		</div>
	);
};

export default Header;
