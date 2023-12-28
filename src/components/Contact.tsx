import { motion } from "framer-motion";
import SectionHeading from "./ui/SectionHeading";
import ContactForm from "./ContactForm";
import { useSectionInView } from "@/hooks/use-section-in-view";

const email: string = import.meta.env.VITE_EMAIL;

const Contact = () => {
	const { ref } = useSectionInView("Contact");

	return (
		<motion.section
			ref={ref}
			id="contact"
			className="mb-20 w-[min(100%,38rem)] text-center sm:mb-28"
			initial={{
				opacity: 0,
			}}
			whileInView={{
				opacity: 1,
			}}
			transition={{
				duration: 1,
			}}
			viewport={{
				once: true,
			}}
		>
			<SectionHeading>Contact me</SectionHeading>
			<p className="text-gray-700 -mt-6 dark:text-white/80">
				Feel free to reach out at{" "}
				<a
					href={`mailto:${email}`}
					target="_blank"
					className="underline"
				>
					{email}
				</a>
			</p>

			<ContactForm />
		</motion.section>
	);
};
export default Contact;
