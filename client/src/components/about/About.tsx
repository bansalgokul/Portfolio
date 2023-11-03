const About = () => {
	return (
		<div id="about" className="bg-gray-50 dark:bg-gray-900 px-4 py-16">
			<div className="flex flex-col gap-6 max-w-[1280px] mx-auto">
				<div className="flex justify-center">
					<span className="bg-gray-200 dark:bg-gray-800 text-xl font-medium rounded-xl px-5 py-1">
						About Me
					</span>
				</div>
				<div className="flex flex-col gap-12  md:flex-row">
					<div>
						<div className="bg-gray-200 dark:bg-gray-700 w-[320px] h-[370px] md:w-[420px] md:h-[480px] grid place-content-center relative top-[20px] mx-auto">
							<img
								src="https://imgs.search.brave.com/YuURFlMn0gTr-E7cpdpEyBrycdj6Q0ZzgF2bKZoKDBY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5zcHJvdXRzb2Np/YWwuY29tL3VwbG9h/ZHMvMjAyMi8wNi9w/cm9maWxlLXBpY3R1/cmUuanBlZw"
								alt=""
								className="w-[280px] h-[360px] md:w-[400px] md:h-[480px] relative bottom-[20px] md:right-[10px] border-[10px] border-gray-50 dark:border-gray-900"
							/>
						</div>
					</div>
					<div className="flex flex-col gap-6">
						<div className="text-gray-900 dark:text-gray-100 text-4xl font-semibold">
							Curious about me? Here you have it:
						</div>
						<div className="flex flex-col gap-4">
							<p>
								I'm a passionate and driven individual currently
								in my third year of pursuing a Bachelor of
								Technology in Computer Science and Engineering.
								I have always been captivated by the
								ever-evolving world of technology and its
								limitless possibilities. With each passing day,
								I strive to expand my knowledge and skills to
								keep pace with the dynamic tech landscape.
							</p>
							<p>
								My primary focus in my academic journey has been
								on mastering the MERN (MongoDB, Express.js,
								React, Node.js) stack. I find the art of
								building robust web applications and crafting
								seamless user experiences exhilarating. The
								ability to create innovative, user-friendly
								software solutions that can make a positive
								impact on people's lives is what motivates me
								the most.
							</p>
							<p>
								In addition to my passion for web development, I
								have also dabbled in the fascinating realm of
								Web3 and Blockchain development. While my
								experience in this field is relatively limited
								compared to my web development expertise, I am
								continually expanding my knowledge in Web3,
								driven by a desire to understand how these
								technologies can shape the future.
							</p>
							<p>
								As I embark on my journey as a tech enthusiast
								and aspiring developer, I am excited about the
								endless possibilities that lie ahead. I am
								always eager to connect with fellow tech
								enthusiasts, mentors, and potential
								collaborators. If you share my passion for
								technology or are interested in exploring the
								world of web development, or Web3, please feel
								free to reach out. Let's connect and create
								something extraordinary together!
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
