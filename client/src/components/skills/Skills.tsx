import jsIcon from "../../assets/icon-javscript.svg";
import tsIcon from "../../assets/icon-typescript.svg";
import reactIcon from "../../assets/icon-react.svg";
import nodeIcon from "../../assets/icon-node.svg";
import expressIcon from "../../assets/icon-express.svg";
import mongoIcon from "../../assets/icon-mongo.svg";
import tailwindIcon from "../../assets/icon-tailwind.svg";
import gitIcon from "../../assets/icon-git.svg";
import cppIcon from "../../assets/icon-cpp.svg";
import SkillItem from "./SkillItem";

const skills = [
	{
		icon: jsIcon,
		name: "Javascript",
	},
	{
		icon: tsIcon,
		name: "Typescript",
	},
	{
		icon: reactIcon,
		name: "React",
	},
	{
		icon: nodeIcon,
		name: "Node.js",
	},
	{
		icon: expressIcon,
		name: "Express.js",
	},
	{
		icon: mongoIcon,
		name: "MongoDB",
	},
	{
		icon: cppIcon,
		name: "C++",
	},
	{
		icon: tailwindIcon,
		name: "Tailwindcss",
	},
	{
		icon: gitIcon,
		name: "Git",
	},
];

const Skills = () => {
	return (
		<div id="skills" className="bg-white dark:bg-gray-950 px-4 py-16">
			<div className="flex flex-col gap-12 max-w-[1280px] mx-auto">
				<div className="flex justify-center flex-col items-center gap-4">
					<span className="bg-gray-200 dark:bg-gray-800 font-medium rounded-xl px-5 py-1 text-xl">
						Skills
					</span>
					<span className="md:text-xl text-center">
						The skills, tools and technologies I am really good at:
					</span>
				</div>
				<div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-12 ">
					{skills.map(({ icon, name }) => (
						<SkillItem key={name} icon={icon} name={name} />
					))}
				</div>
			</div>
		</div>
	);
};

export default Skills;
