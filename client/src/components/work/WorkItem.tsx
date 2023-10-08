import { BiLinkExternal } from "react-icons/bi";

type workItem = {
	title: string;
	description: string;
	image: string;
	technologies: string[];
};

type Props = {
	workItem: workItem;
};

const WorkItem = ({ workItem }: Props) => {
	return (
		<div className="flex flex-col md:flex-row bg-white dark:bg-gray-950 w-full max-w-[1152px] mx-auto rounded-xl overflow-clip drop-shadow-lg shadow-gray-900 dark:shadow-gray-50">
			<div className="grid place-content-center md:w-1/2 md:min-h-[480px] md:h-full p-6 md:p-12   bg-gray-50 dark:bg-gray-900">
				<img
					src={workItem.image}
					alt=""
					className="rounded-xl drop-shadow-md shadow-black aspect-auto w-full "
				/>
			</div>
			<div className=" md:w-1/2 md:min-h-[480px] p-6 md:p-12 flex flex-col gap-6">
				<h3 className="text-2xl text-gray-900 dark:text-gray-100 font-semibold">
					{workItem.title}
				</h3>
				<p>{workItem.description}</p>
				<div className="flex flex-wrap gap-2">
					{workItem.technologies.map((tech) => (
						<div
							key={tech}
							className="px-5 py-1 bg-gray-200 dark:bg-gray-800  rounded-xl font-medium"
						>
							{tech}
						</div>
					))}
				</div>
				<button className="text-2xl">
					<BiLinkExternal />
				</button>
			</div>
		</div>
	);
};

export default WorkItem;
