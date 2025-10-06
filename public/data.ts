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
	//bell
	{
		id: 0,
		title: 'Bell 500ml',
		closure: '24/410 closure',
		pet: 'PET',
		clear: 'Clear',
		dimensions: '151 x Ø76',
		mixture: '490 minimum',
		images: [
			'/products/bell/bell-500ml.png',
			'/products/bell/bell-500ml-2.png',
		],
		type: 'bell',
	},
	//Boston
	{
		id: 1,
		title: 'Boston 30ml',
		closure: '18/415 closure',
		pet: 'PET',
		clear: 'Clear / White',
		mixture: '1500 minimum',
		images: [
			'/products/boston/boston-30ml.png',
			'/products/boston/boston-30ml-2.png',
		],
		type: 'boston',
	},
	{
		id: 2,
		title: 'Boston 250ml',
		closure: '24/410 closure',
		pet: 'PET',
		clear: 'Clear / White',
		dimensions: '128 x Ø 58',
		mixture: '420 minimum',
		images: ['/products/boston/boston-250ml.png'],
		type: 'boston',
	},
	{
		id: 3,
		title: 'Boston 300ml',
		closure: '24/410 closure',
		pet: 'PET',
		clear: 'Clear / White',
		dimensions: '150 x Ø 58',
		mixture: '324 minimum',
		images: ['/products/boston/boston-300ml.png'],
		type: 'boston',
	},
	{
		id: 4,
		title: 'Boston 500ml',
		closure: '24/410 closure',
		pet: 'PET',
		clear: 'Clear / White',
		dimensions: '175 x Ø 68',
		mixture: '420 minimum',
		images: ['/products/boston/boston-500ml.png'],
		type: 'boston',
	},
	//bullet
	{
		id: 5,
		title: 'Bullet 50ml',
		closure: '24/410 closure',
		pet: 'HDPE',
		clear: 'Wht / Nat/ Blck',
		dimensions: '79 x Ø 35',
		mixture: '1680 minimum',
		images: [
			'/products/bullet/bullet-50ml.png',
			'/products/bullet/bullet-50ml-2.png',
		],
		type: 'bullet',
	},
	{
		id: 6,
		title: 'Bullet 250ml',
		closure: '24/410 closure',
		pet: 'HDPE',
		clear: 'Wht / Nat/ Blck',
		dimensions: '175 x Ø50',
		mixture: '420 minimum',
		images: [
			'/products/bullet/bullet-250ml.png',
			'/products/bullet/bullet-250ml-2.png',
			'/products/bullet/bullet-250ml-black.png',
			'/products/bullet/bullet-250ml-black-2.png',
		],
		type: 'bullet',
	},
	{
		id: 7,
		title: 'Bullet 750ml',
		closure: '28/410 closure',
		pet: 'HDPE',
		clear: 'Natural',
		dimensions: '214 x Ø70',
		mixture: '324 minimum',
		images: [
			'/products/bullet/bullet-750ml.png',
			'/products/bullet/bullet-750ml-2.png',
		],
		type: 'bullet',
	},
	{
		id: 8,
		title: 'Bullet 500ml',
		closure: '28/410 closure',
		pet: 'HDPE',
		clear: 'Wht / Nat',
		dimensions: '197 x Ø65',
		mixture: '400 minimum',
		images: [
			'/products/bullet/bullet-500ml.png',
			'/products/bullet/bullet-500ml-2.png',
			'/products/bullet/bullet-500ml-3.png',
		],
		type: 'bullet',
	},
	{
		id: 9,
		title: 'Buoyancy',
		closure: 'Sealed',
		pet: 'HDPE',
		clear: 'Black',
		dimensions: '224 height / 6 Sided',
		mixture: '1000ml volume / 162 minimum',
		images: [
			'/products/buoyancy/buoyancy.png',
			'/products/buoyancy/buoyancy-2.png',
		],
		type: 'buoyancy',
	},
	//closures-b
	{
		id: 10,
		title: 'Oval Flip',
		closure: 'Custom',
		pet: 'PP',
		clear: 'Various Colors',
		mixture: '1700 minimum	',
		images: [
			'/products/closures-b/oval-flip.png',
			'/products/closures-b/oval-flip-2.png',
			'/products/closures-b/oval-flip-pink.png',
			'/products/closures-b/oval-flip-pink-2.png',
		],
		type: 'closures-b',
	},
	{
		id: 11,
		title: 'Metal',
		closure: '20, 24 & 28',
		pet: 'Metal',
		clear: 'Silver/White/Black/Gold',
		mixture: '420 minimum	',
		images: ['/products/closures-b/metal.png'],
		type: 'closures-b',
	},
	{
		id: 12,
		title: 'Big Flip',
		closure: '24 / 410',
		pet: 'PP',
		clear: 'Natural',
		mixture: '420 minimum',
		images: [
			'/products/closures-b/big-flip.png',
			'/products/closures-b/big-flip-2.png',
		],
		type: 'closures-b',
	},
	{
		id: 13,
		title: 'Overcap',
		closure: 'Various Sizes',
		pet: 'PP',
		clear: 'Natural / Black',
		mixture: '420 / 1200 minimum',
		images: ['/products/closures-b/overcap.png'],
		type: 'closures-b',
	},
	{
		id: 14,
		title: 'Flute',
		closure: '24 / 410',
		pet: 'PP',
		clear: 'Natural / Black',
		mixture: '420 minimum',
		images: ['/products/closures-b/flute.png'],
		type: 'closures-b',
	},
	//hosp-50s
];

export const mightLike: string[] = [
	'/products/tall-250ml.png',
	'/products/square-500ml.png',
	'/products/square-200ml.png',
	'/products/tall-250ml.png',
];
