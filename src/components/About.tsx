import { motion } from "framer-motion";
import SectionHeading from "./ui/SectionHeading";
import BoldText from "./ui/BoldText";

const About = () => {
	return (
		<motion.section
			id="about"
			className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.175 }}
		>
			<SectionHeading>About me</SectionHeading>
			<p className="mb-3">
				After graduating with a diploma in{" "}
				<BoldText>Digital Marketing</BoldText>, I decided to pursue my passion
				for programming. I enrolled in a coding bootcamp and learned{" "}
				<BoldText>full-stack web development</BoldText>.{" "}
				<span className="italic">My favorite part of programming</span> is the
				problem-solving aspect. I <span className="underline">love</span> the
				feeling of finally figuring out a solution to a problem. My core stack
				is <BoldText>React, Next.js, Node.js, and MongoDB</BoldText>. I am also
				familiar with TypeScript and Prisma. I am always looking to learn new
				technologies. I am currently looking for a{" "}
				<BoldText>full-time position</BoldText> as a software developer.
			</p>

			<p>
				<span className="italic">When I'm not coding</span>, I enjoy playing
				video games, watching movies, and playing with my dog. I also enjoy{" "}
				<BoldText>learning new things</BoldText>. I am currently learning about{" "}
				<BoldText>history and philosophy</BoldText>. I'm also learning how to
				play the guitar.
			</p>
		</motion.section>
	);
};
export default About;
