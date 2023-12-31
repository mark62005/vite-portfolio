import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { navLinks } from "@/lib/data";
import type { SectionName } from "@/lib/types";
import MobileNavbar from "./MobileNavbar";
import Logo from "./Logo";

type NavbarProps = {
	activeSection: SectionName;
	handleOnClicked: (sectionName: SectionName) => void;
};

const Navbar = ({ activeSection, handleOnClicked }: NavbarProps) => {
	return (
		<motion.div className="relative">
			<div className="w-full max-w-screen-xl mx-auto px-4 border-b md:px-8 lg:px-20">
				<div className="flex justify-between items-center h-16">
					{/* LOGO */}
					<Logo />

					{/* NAV MENU */}
					<nav>
						<ul
							className="
                hidden items-center justify-center text-gray-500
                md:flex md:gap-5
              "
						>
							{navLinks.map((navLink, index) => (
								<motion.li
									key={index}
									className="relative"
									initial={{ y: -100 }}
									animate={{ y: 0 }}
								>
									<a
										href={navLink.href}
										className={cn(
											`
                        flex items-center justify-center w-full p-3 rounded-xl transition
                      hover:text-gray-950 hover:bg-gray-200
                      `,
											{
												"text-gray-950": activeSection === navLink.label,
											}
										)}
										onClick={() => handleOnClicked(navLink.label)}
									>
										{navLink.label}

										{navLink.label === activeSection ? (
											<motion.span
												className="absolute inset-0 -z-10 bg-gray-200 rounded-xl dark:bg-gray-800"
												layoutId="activeSection"
												transition={{
													type: "spring",
													stiffness: 380,
													damping: 30,
												}}
												aria-hidden="true"
											/>
										) : null}
									</a>
								</motion.li>
							))}
						</ul>
					</nav>

					{/* TODO: Mobile Navbar */}
					<MobileNavbar />
				</div>
			</div>
		</motion.div>
	);
};
export default Navbar;
