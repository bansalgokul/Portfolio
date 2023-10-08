import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BiCopy } from "react-icons/bi";
import { BsTelephone } from "react-icons/bs";
import { CiMail } from "react-icons/ci";

const Contact = () => {
	return (
		<div id="contact" className="bg-gray-50 dark:bg-gray-900 px-4 py-16">
			<div className="flex flex-col gap-4 md:gap-12 max-w-[1280px] mx-auto  ">
				<div className="flex justify-center flex-col items-center gap-4 ">
					<span className="bg-gray-200 dark:bg-gray-800  text-xl font-medium rounded-xl px-5 py-1">
						Get in touch
					</span>
					<span className="md:text-xl text-center max-w-[600px]">
						What's next? Feel free to reach out to me if you're
						looking for a developer, have a query, or simply want to
						connect.
					</span>
				</div>

				<div className="flex flex-col items-center gap-4 md:gap-12 w-full max-w-[1152px] mx-auto">
					<div className="flex flex-col gap-1 md:gap-4 text-lg md:text-3xl font-bold">
						<div className="flex gap-1 md:gap-4 justify-center items-center">
							<div>
								<CiMail />
							</div>
							<span className="text-gray-900 dark:text-gray-100">
								bansalgokul134@gmail.com
							</span>
							<button>
								<BiCopy />
							</button>
						</div>
						<div className="flex gap-1 md:gap-4 justify-center items-center">
							<div>
								<BsTelephone />
							</div>
							<span className="text-gray-900 dark:text-gray-100">
								+91-8689054520
							</span>
							<button>
								<BiCopy />
							</button>
						</div>
					</div>
					<div className="flex flex-col gap-1 ">
						<div className="text-center">
							You may also find me on these platforms
						</div>
						<div className="flex gap-2 text-3xl justify-center">
							<a href="#">
								<AiFillLinkedin />
							</a>
							<a href="#">
								<AiFillGithub />
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
