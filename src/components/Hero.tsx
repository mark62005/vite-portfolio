import { motion } from "framer-motion";
import { ArrowDownToLine, Github, Linkedin, MoveRight } from "lucide-react";
import BoldText from "./ui/BoldText";
import { useSectionInView } from "@/hooks/use-section-in-view";

const Hero = () => {
	const { ref } = useSectionInView("Home", 0.5);
	const profileImgSrc = new URL("../../public/mark-wong.png", import.meta.url)
		.href;

	return (
		<section
			ref={ref}
			id="home"
			className="mb-28 max-w-[50rem] text-center scroll-mt-[100rem] sm:mb-0"
		>
			{/* IMAGE */}
			<div className="flex items-center justify-center">
				<div className="relative">
					<motion.div
						className=""
						initial={{ opacity: 0, scale: 0 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{
							type: "tween",
							duration: 0.2,
						}}
					>
						<img
							src={profileImgSrc}
							alt="Portrait of Mark Wong"
							className="h-36 w-36 object-fill rounded-full border-[0.35rem] border-white shadow-xl"
						/>
					</motion.div>

					<motion.span
						className="absolute bottom-0 right-0 text-4xl"
						initial={{ opacity: 0, scale: 0 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{
							type: "spring",
							stiffness: 125,
							delay: 0.1,
							duration: 0.7,
						}}
					>
						👋
					</motion.span>
				</div>
			</div>

			{/* SUMMARY */}
			<motion.h1
				className="mb-10 mt-4 px-4 text-2xl !leading-[1.5] sm:text-4xl"
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0 }}
			>
				<BoldText>Hello, I&apos;m Mark.</BoldText> I&apos;m a{" "}
				<BoldText>self-taught full-stack developer</BoldText> who currently
				studying <BoldText>Network & Systems Solutions</BoldText> in Vancouver.
				I enjoy building <span className="italic">sites & apps</span>. My focus
				is <span className="underline">React (Next.js)</span>.
			</motion.h1>

			{/* BUTTONS */}
			<motion.div
				className="flex flex-col items-center justify-center gap-2 px-4 text-lg sm:flex-row "
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{
					delay: 0.1,
				}}
			>
				<a
					href="#contact"
					className="
              group bg-gray-900 text-white px-7 py-3 
              flex items-center gap-2 rounded-full outline-none transition
              focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105
          "
				>
					Contact me{" "}
					<MoveRight className="w-4 h-4 opacity-70 transition group-hover:translate-x-1" />
				</a>

				<a
					className="
            group bg-white px-7 py-3 flex items-center gap-2 
            rounded-full outline-none border border-black/10 transition cursor-pointer
            focus:scale-110 hover:scale-110 active:scale-105 dark:bg-white/10
          "
					// TODO: Add resume file
					href="#resume"
					download
				>
					Download resume{" "}
					<ArrowDownToLine className="opacity-6 transition group-hover:translate-y-1" />
				</a>

				<a
					className="
            bg-white p-4 text-gray-700 rounded-full border border-black/10 
            flex items-center gap-2 transition cursor-pointer 
            hover:text-gray-950 hover:scale-[1.15]
            focus:scale-[1.15] active:scale-105 dark:bg-white/10 dark:text-white/60
          "
					href="https://www.linkedin.com/in/mark-wong-se/"
					target="_blank"
				>
					<Linkedin className="h-6 w-6" />
				</a>

				<a
					className="
          bg-white p-4 text-gray-700 rounded-full border border-black/10 
            flex items-center gap-2 transition cursor-pointer 
            hover:text-gray-950 hover:scale-[1.15]
            focus:scale-[1.15] active:scale-105 dark:bg-white/10 dark:text-white/60
          "
					href="https://github.com/mark62005"
					target="_blank"
				>
					<Github className="h-6 w-6" />
				</a>
			</motion.div>
		</section>
	);
};
export default Hero;
