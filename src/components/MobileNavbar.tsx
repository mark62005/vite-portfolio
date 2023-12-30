import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { navLinks } from "@/lib/data";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

const MobileNavbar = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const toggleMenu = () => setIsOpen((prev) => !prev);

	return (
		<nav className="md:hidden">
			<Button
				size="icon"
				onClick={toggleMenu}
				className={cn("rounded-full", {
					hidden: isOpen,
				})}
				aria-hidden="true"
			>
				<Menu />
			</Button>

			{isOpen ? (
				<div className="fixed inset-x-0 bottom-0 z-20 h-full bg-white">
					<motion.ul
						className="flex flex-col text-lg border-b"
						// initial={{ x: 100 }}
						// animate={{ x: 0 }}
					>
						{/* CLOSE BUTTON */}
						<li className="flex justify-between items-center h-16 mx-4">
							<a
								href="#home"
								onClick={toggleMenu}
								className="text-xl font-bold"
							>
								LOGO
							</a>

							<Button
								size="icon"
								onClick={toggleMenu}
								className="rounded-full justify-self-end"
								aria-hidden="true"
							>
								<X />
							</Button>
						</li>

						{/* NAV MENU */}
						{navLinks.map((navLink, index) => (
							<motion.li
								key={index}
								className="border-t"
								initial={{ x: 100 }}
								animate={{ x: 0 }}
							>
								<a
									href={navLink.href}
									onClick={toggleMenu}
									className={cn(
										`
										flex items-center justify-center w-full p-3 rounded-xl transition
										hover:text-gray-950 hover:bg-gray-200
										`
									)}
								>
									{navLink.label}
								</a>
							</motion.li>
						))}
					</motion.ul>
				</div>
			) : null}
		</nav>
	);
};
export default MobileNavbar;
