import React, { ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	label: string;
	variant: 'dark' | 'light' | 'purple' | 'white';
	className?: string;
	onClick?: () => void;
}

export const Button = ({
	label,
	onClick,
	className,
	variant,
	...props
}: ButtonProps) => {
	return (
		<button
			onClick={onClick}
			type='button'
			className={`${className ?? ''} ${
				variant === 'light'
					? 'border-white text-white'
					: variant === 'dark'
					? 'border-black text-black'
					: variant === 'white'
					? 'bg-[var(--white)]'
					: 'bg-[var(--purple)] text-white'
			} min-w-[230px] w-min h-[50px] cursor-pointer font-[Jost,sans-serif] text-lg lg:text-[20px] leading-[100%] tracking-[0%] rounded-[5px] border p-2 transition-opacity duration-150 hover:opacity-70`}
			style={{ fontWeight: 400 }}
			{...props}
		>
			{label}
		</button>
	);
};
