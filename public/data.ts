type NavItems = {
	text: string;
	link: string;
}[];

type PageProperties = {
	type: string;
	productCode: string;
	colour: string;
}[];

type Description = {
	closure: string;
	pet: string;
	clear: string;
	dimensions: string;
	mixture: string;
}[];

export type BestSellers = {
	image: string;
	product: string;
	description: Description;
	productType: string;
	viewProduct: string;
	enquire: string;
	pageProperties: PageProperties;
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
		text: 'Top Sellers',
		link: '#',
	},
	{
		text: 'Social',
		link: '#',
	},
	{
		text: 'Contact us',
		link: '/contact-us',
	},
];

export const footerNavItems: NavItems = [
	{
		text: 'Bottles',
		link: '#',
	},
	{
		text: 'Closures',
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
];

export const bestSellers: BestSellers = [
	{
		image: '/products/tall-250ml.png',
		product: 'Tall 250ml',
		description: [
			{
				closure: '24/410 closure',
				pet: 'PET',
				clear: 'Clear',
				dimensions: '175 x Ø 48',
				mixture: '435 minimum',
			},
		],
		productType: 'tall',
		viewProduct: '#',
		enquire: '#',
		pageProperties: [
			{
				type: 'round',
				productCode: '',
				colour: 'clear',
			},
		],
	},
	{
		image: '/products/bullet-500ml.png',
		product: 'Bullet 500ml',
		description: [
			{
				closure: '24/410 closure',
				pet: 'PET',
				clear: 'Clear',
				dimensions: '177 x Ø60 x Ø60',
				mixture: '490 minimum',
			},
		],
		productType: 'bullet',
		viewProduct: '#',
		enquire: '#',
		pageProperties: [
			{
				type: 'round',
				productCode: '',
				colour: 'clear',
			},
		],
	},
	{
		image: '/products/boston-50ml.png',
		product: 'Boston 50ml',
		description: [
			{
				closure: '24/410 closure',
				pet: 'PET',
				clear: 'Clear',
				dimensions: '128 x Ø46 x Ø46',
				mixture: '540 minimum',
			},
		],
		productType: 'boston',
		viewProduct: '#',
		enquire: '#',
		pageProperties: [
			{
				type: 'round',
				productCode: '',
				colour: 'clear',
			},
		],
	},
];

export const products = [
	{
		id: 0,
	},
];

export const mightLike: string[] = [
	'/products/tall-250ml.png',
	'/products/square-500ml.png',
	'/products/square-200ml.png',
	'/products/tall-250ml.png',
];
