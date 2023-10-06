import { CiLocationOn } from "react-icons/ci";

const Hero = () => {
	return (
		<div className="py-16 px-4">
			{/* container */}
			<div className="flex flex-col gap-12">
				{/* column */}
				<div className="grid place-content-center">
					{/* pic container */}
					<div className="bg-gray-200 w-[320px] h-[300px] grid place-content-center">
						<img
							src="https://imgs.search.brave.com/YuURFlMn0gTr-E7cpdpEyBrycdj6Q0ZzgF2bKZoKDBY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5zcHJvdXRzb2Np/YWwuY29tL3VwbG9h/ZHMvMjAyMi8wNi9w/cm9maWxlLXBpY3R1/cmUuanBlZw"
							alt=""
							className="w-[280px] h-[300px] relative bottom-[20px] border-[10px] border-white"
						/>
					</div>
				</div>
				{/* column */}
				<div className="flex flex-col gap-12">
					{/* content */}
					<div className="flex flex-col gap-2">
						<h1 className="text-4xl font-bold text-gray-900 tracking-tight">
							Hi, I'm Gokul Bansal
						</h1>
						<p className="text-base  text-gray-600">
							I'm a full stack developer (React.js & Node.js) with
							a focus on creating (and occasionally designing)
							exceptional digital experiences that are fast,
							accessible, visually appealing, and responsive. Even
							though I have been creating web applications for
							only less than 1 year, I am good at it.
						</p>
					</div>
					{/* group */}
					<div className="flex flex-col gap-2">
						<div className="flex gap-2 items-center">
							<CiLocationOn />
							<span>Sonipat, Haryana</span>
						</div>
						<div className="flex gap-2 items-center">
							<CiLocationOn />
							<span>Available for new projects</span>
						</div>
					</div>
					{/* actions */}
					<div className="flex flex-col gap-2"></div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
