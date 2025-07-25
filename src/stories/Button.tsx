export interface ButtonProps {
	label: string;
	variant: 'dark' | 'light';
	className?: string;
	onClick?: () => void;
}

export const Button = ({ label, onClick, className, variant }: ButtonProps) => {
	return (
		<button
			onClick={onClick}
			type='button'
			className={`${className} ${
				variant === 'light'
					? 'border-white text-white'
					: variant === 'dark' && 'border-black text-black'
			} min-w-[230px] w-min h-[50px] cursor-pointer font-[Jost,sans-serif] text-lg lg:text-[20px]leading-[100%] tracking-[0%] rounded-[5px] border p-2 hover:opacity-70`}
			style={{ fontWeight: 400 }}
		>
			{label}
		</button>
	);
};
