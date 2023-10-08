type Props = {
	linkAddress: string;
	linkName: string;
};

const NavListItem = ({ linkAddress, linkName }: Props) => {
	const scrollToSection = () => {
		const sectionElement = document.getElementById(linkAddress);
		if (sectionElement) {
			sectionElement.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<li
			onClick={scrollToSection}
			className="hover:bg-gray-100 dark:hover:bg-gray-900 active:bg-gray-100 dark:active:bg-gray-900 w-full py-2 px-4 rounded-lg"
		>
			<span>{linkName}</span>
		</li>
	);
};

export default NavListItem;
