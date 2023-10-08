type Props = {
	icon: string;
	name: string;
};

const SkillItem = ({ icon, name }: Props) => {
	return (
		<div className="flex flex-col gap-2 w-fit h-fit mx-auto items-center">
			<img src={icon} alt="" className="w-16 h-16" />
			<span>{name}</span>
		</div>
	);
};

export default SkillItem;
