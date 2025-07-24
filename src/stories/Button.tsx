export interface ButtonProps {
	label: string;
	className?: string;
	onClick?: () => void;
}

export const Button = ({ label, onClick, className }: ButtonProps) => {
	return (
		<button
			onClick={onClick}
			type='button'
			className={`${className} min-w-[230px] w-min h-[50px] cursor-pointer font-[Jost,sans-serif] text-lg lg:text-[20px]leading-[100%] tracking-[0%] rounded-[5px] border border-white text-white p-2 hover:opacity-70`}
			style={{ fontWeight: 400 }}
		>
			{label}
		</button>
	);
};
