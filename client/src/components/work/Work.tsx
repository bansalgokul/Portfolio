import blogem from "../../assets/blogem.png";
import WorkItem from "./WorkItem";

const works = [
	{
		title: "Blogem",
		description:
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo minima asperiores fugit illo pariatur doloremque sequi temporibus placeat eveniet cumque officia excepturi consequuntur voluptas modi, similique id qui ducimus accusamus!",
		image: blogem,
		technologies: [
			"React",
			"Node.js",
			"Express",
			"MongoDB",
			"Express.js",
			"Tailwindcss",
		],
	},
];

const Work = () => {
	return (
		<div id="work" className="bg-white dark:bg-gray-950 px-4 py-16">
			<div className="flex flex-col gap-12 max-w-[1280px] mx-auto md:px-8">
				<div className="flex justify-center flex-col items-center gap-4 ">
					<span className="bg-gray-200 dark:bg-gray-800  text-xl font-medium rounded-xl px-5 py-1">
						Work
					</span>
					<span>Some of the projects I have built:</span>
				</div>

				{works.map((workItem, index) => (
					<WorkItem key={index} workItem={workItem} />
				))}
			</div>
		</div>
	);
};

export default Work;
