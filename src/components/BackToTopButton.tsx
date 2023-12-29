import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { ArrowUp } from "lucide-react";

type BackToTopButtonProps = {
	isVisible: boolean;
	backToTop: () => void;
};

const BackToTopButton = ({ isVisible, backToTop }: BackToTopButtonProps) => {
	return (
		<Button
			onClick={backToTop}
			size="icon"
			className={cn(
				`
          fixed bottom-8 right-8 z-10 
        bg-gray-500 bg-opacity-80 rounded-full transition
          2xl:right-1/4
        `,
				{
					hidden: !isVisible,
				}
			)}
			aria-hidden="true"
		>
			<ArrowUp />
		</Button>
	);
};
export default BackToTopButton;
