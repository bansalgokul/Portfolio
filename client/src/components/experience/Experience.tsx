import nethues from "../../assets/nethues-logo.webp"

const Experience = () => {
	return (
		<div id="experience" className="bg-gray-50 dark:bg-gray-900 px-4 py-16">
			<div className="flex flex-col gap-6 max-w-[1280px] mx-auto ">
				<div className="flex justify-center flex-col items-center gap-4 ">
					<span className="bg-gray-200 dark:bg-gray-800  text-xl font-medium rounded-xl px-5 py-1">
						Experience
					</span>
					<span className="md:text-xl text-center">
						Here is the quick summary of my most recent experience:
					</span>
				</div>
				<div className="flex flex-col md:flex-row gap-4 md:gap-12 bg-white dark:bg-gray-950 max-w-[900px] mx-auto p-8 rounded-xl drop-shadow-md shadow-gray-900">
					{/* <div>Nethues Technologies Pvt Ltd</div> */}
					<img
						src={nethues}
						alt=""
						className="h-[30px] w-[100px] dark:invert"
					/>
					<div className="md:order-1">June 2023 - July 2023</div>
					<div className="max-w-[400px]">
						<div className="font-semibold text-gray-900 dark:text-gray-100 text-xl">
							Web Developer Intern
						</div>
						<div className="">
							<ul className="list-disc pl-4 ">
								<li>
									Developed a user-friendly interface for an
									employee management system using React.js,
									enabling seamless navigation and interaction
									for efficient task handling.
								</li>
								<li>
									Implemented robust back-end functionalities
									with Node.js, ensuring authentication, and
									authorization protocols.
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Experience
