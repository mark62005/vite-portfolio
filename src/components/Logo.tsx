const logoSrc = new URL("../../public/logo.png", import.meta.url).href;

type LogoProps = { toggleMenu?: () => void };

const Logo = ({ toggleMenu }: LogoProps) => {
	return (
		<a
			href="#home"
			onClick={toggleMenu}
		>
			<img
				src={logoSrc}
				alt="Logo of Mark Wong's Portfolio Website"
				className="h-10 w-auto object-cover"
			/>
			<h1 className="hidden">Mark Wong's Portfolio Website</h1>
		</a>
	);
};
export default Logo;
