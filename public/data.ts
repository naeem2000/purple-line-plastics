type NavItems = {
	text: string;
	link: string;
}[];

type BestSellers = {
	image: string;
	product: string;
	description: string;
	viewProduct: string;
	enquire: string;
}[];

export const navItems: NavItems = [
	{
		text: 'Bottles',
		link: '#',
	},
	{
		text: 'Closure',
		link: '#',
	},
	{
		text: 'Jars',
		link: '#',
	},
	{
		text: 'Tablet Containers',
		link: '#',
	},
	{
		text: 'Buoyancy',
		link: '#',
	},
	{
		text: 'Custom',
		link: '#',
	},
	{
		text: 'Social',
		link: '#',
	},
	{
		text: 'Contact us',
		link: '#',
	},
];

export const bestSellers: BestSellers = [
	{
		image: '/products/tall-250ml.png',
		product: 'Tall 250ml',
		description:
			'24/410 closure<br />PET<br />Clear<br />175 x Ø 48<br />435 minimum',
		viewProduct: '#',
		enquire: '#',
	},
	{
		image: '/products/square-500ml.png',
		product: 'Square 500m',
		description:
			'24/410 closure<br />PET<br />Clear<br />177 x Ø60 x Ø60<br />490 minimum',
		viewProduct: '#',
		enquire: '#',
	},
	{
		image: '/products/square-200ml.png',
		product: 'Square 200ml',
		description:
			'24/410 closure<br />PET<br />Clear<br />128 x Ø46 x Ø46<br />540 minimum',
		viewProduct: '#',
		enquire: '#',
	},
];
