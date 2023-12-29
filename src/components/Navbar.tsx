import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { navLinks } from "@/lib/data";
import { SectionName } from "@/lib/types";

type NavbarProps = {
	activeSection: SectionName;
	handleOnClicked: (sectionName: SectionName) => void;
};

const Navbar = ({ activeSection, handleOnClicked }: NavbarProps) => {
	return (
		<>
			<motion.div
				className="
          fixed top-0 left-1/2 h-[4.5rem] w-full
          bg-white bg-opacity-80
          rounded-none border border-white border-opacity-40
          shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem]
          sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full
        "
				initial={{
					y: -100,
					x: "-50%",
				}}
				animate={{
					y: 0,
					x: "-50%",
				}}
			/>
			<nav
				className="
					fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 flex py-2 
					sm:top-[1.7rem] sm:h-[initial] sm:py-0
				"
			>
				<ul
					className="
						flex flex-wrap items-center justify-center gap-y-1 w-[22rem] 
						text-[0.9rem] font-medium text-gray-500
						sm:w-[initial] sm:flex-nowrap sm:gap-5
					"
				>
					{navLinks.map((navLink, index) => (
						<motion.li
							key={index}
							className="relative h-3/4 flex items-center justify-center"
							initial={{ y: -100 }}
							animate={{ y: 0 }}
						>
							<a
								href={navLink.href}
								className={cn(
									`
										flex items-center justify-center w-full p-3 rounded-full transition 
									hover:text-gray-950 hover:bg-gray-200
									`,
									{
										"text-gray-950": activeSection === navLink.label,
									}
								)}
								onClick={() => handleOnClicked(navLink.label)}
							>
								{navLink.label}

								{navLink.label === activeSection && (
									<motion.span
										className="absolute inset-0 -z-10 bg-gray-200 rounded-full dark:bg-gray-800"
										layoutId="activeSection"
										transition={{
											type: "spring",
											stiffness: 380,
											damping: 30,
										}}
										aria-hidden="true"
									/>
								)}
							</a>
						</motion.li>
					))}
				</ul>
			</nav>
		</>
	);
};
export default Navbar;
