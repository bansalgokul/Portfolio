type Props = {
	icon: string;
	name: string;
	invert?: boolean;
};

const SkillItem = ({ icon, name, invert }: Props) => {
	return (
		<div className="flex flex-col gap-2 w-fit h-fit mx-auto items-center">
			<img
				src={icon}
				alt=""
				className={`w-16 h-16 ${invert ? "dark:invert" : ""}`}
			/>
			<span>{name}</span>
		</div>
	);
};

export default SkillItem;
