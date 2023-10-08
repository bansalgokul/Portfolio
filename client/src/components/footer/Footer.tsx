import { AiOutlineCopyrightCircle } from "react-icons/ai";

const Footer = () => {
	return (
		<div id="footer" className="bg-white dark:bg-gray-950 px-2 py-4">
			<div className="flex flex-col gap-2 max-w-[1280px] mx-auto text-gray-900 dark:text-gray-100 items-center font-semibold">
				<span className="flex gap-1 items-center">
					<AiOutlineCopyrightCircle /> 2023 | Coded by Gokul Bansal
				</span>
				<span className="">
					Thank you{" "}
					<a
						href="https://www.figma.com/@shahsagarm"
						className="underline"
					>
						Sagar Shah
					</a>{" "}
					for desgin
				</span>
			</div>
		</div>
	);
};

export default Footer;
