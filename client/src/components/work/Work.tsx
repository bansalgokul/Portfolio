import blogem from "../../assets/blogem.png"
import logShikayat from "../../assets/logShikayat.jpg"
import WorkItem from "./WorkItem"

const works = [
	{
		title: "Blogem",
		description:
			"A blog website developed for solidifying my fundamentals in full stack web development. Anybody can signup and login and read or write blogs. Ensured Responsiveness and secure authentication and authorization.",
		image: blogem,
		technologies: [
			"React",
			"Node.js",
			"MongoDB",
			"Express.js",
			"Tailwindcss",
		],
		link: "https://blog-em.vercel.app/",
	},
	{
		title: "LokShikayat",
		description:
			"Developed as a prototype for project participating in SIH23. Portal for users to easily register their complaints using a AI powered chatbot. Impressive design but currently chatbot is not working due to Google changing policies.",
		image: logShikayat,
		technologies: ["React", "Tailwindcss"],
		link: "",
	},
]

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
	)
}

export default Work
