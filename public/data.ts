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

type BestSellers = {
	image: string;
	product: string;
	description: Description;
	viewProduct: string;
	enquire: string;
	pageProperties: PageProperties;
	imagePreviews: string[];
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
		description: [
			{
				closure: '24/410 closure',
				pet: 'PET',
				clear: 'Clear',
				dimensions: '175 x Ø 48',
				mixture: '435 minimum',
			},
		],
		imagePreviews: [
			'/products/previews/preview-1.png',
			'/products/previews/preview-2.png',
			'/products/previews/preview-3.png',
		],
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
		image: '/products/square-500ml.png',
		product: 'Square 500m',
		description: [
			{
				closure: '24/410 closure',
				pet: 'PET',
				clear: 'Clear',
				dimensions: '177 x Ø60 x Ø60',
				mixture: '490 minimum',
			},
		],
		imagePreviews: [
			'/products/previews/preview-1.png',
			'/products/previews/preview-2.png',
			'/products/previews/preview-3.png',
		],
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
		image: '/products/square-200ml.png',
		product: 'Square 200ml',
		description: [
			{
				closure: '24/410 closure',
				pet: 'PET',
				clear: 'Clear',
				dimensions: '128 x Ø46 x Ø46',
				mixture: '540 minimum',
			},
		],
		imagePreviews: [
			'/products/previews/preview-1.png',
			'/products/previews/preview-2.png',
			'/products/previews/preview-3.png',
		],
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

export const mightLike: string[] = [
	'/products/tall-250ml.png',
	'/products/square-500ml.png',
	'/products/square-200ml.png',
	'/products/tall-250ml.png',
];
