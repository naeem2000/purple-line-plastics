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
		mixture: '420 minimum',
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
	//hosp-30s
	{
		id: 15,
		title: '30 Tottle',
		closure: 'Clip-on',
		pet: 'PP',
		clear: 'Natural',
		dimensions: '73 x Ø36 x Ø24',
		mixture: '2600 minimum',
		images: [
			'/products/hosp-30s/30-tottle.png',
			'/products/hosp-30s/30-tottle-2.png',
		],
		type: 'hosp-30s',
	},
	{
		id: 16,
		title: '30 Boston',
		closure: '18/415',
		pet: 'PET',
		clear: 'Clear / White',
		mixture: '1500 minimum',
		images: [
			'/products/hosp-30s/30-boston.png',
			'/products/hosp-30s/30-boston-2.png',
		],
		type: 'hosp-30s',
	},
	{
		id: 17,
		title: 'Straight 30ml',
		closure: '18/415',
		pet: 'HDPE',
		clear: 'Natural',
		dimensions: '98 x Ø24',
		mixture: '2000 minimum',
		images: ['/products/hosp-30s/straight-30ml.png'],
		type: 'hosp-30s',
	},
	//hosp-50s
	{
		id: 18,
		title: '50 Tall',
		closure: '18/415',
		pet: 'PET',
		clear: 'Clear',
		dimensions: '108 x Ø30',
		mixture: '1140 minimum',
		images: [
			'/products/hosp-50s/50-tall.png',
			'/products/hosp-50s/50-tall-2.png',
		],
		type: 'hosp-50s',
	},
	{
		id: 19,
		title: '50 Bullet',
		closure: '24/410',
		pet: 'HDPE',
		clear: 'Wht / Nat / Blck',
		dimensions: '79 x Ø35',
		mixture: '1680 minimum',
		images: [
			'/products/hosp-50s/50-bullet.png',
			'/products/hosp-50s/50-bullet-2.png',
			'/products/hosp-50s/50-bullet-3.png',
		],
		type: 'hosp-50s',
	},
	{
		id: 19,
		title: 'Rectangular 50ml',
		closure: '18 / 415 closure',
		pet: 'PVC',
		clear: 'Clear',
		dimensions: '80 x Ø41 x Ø22',
		mixture: '2022 minimum',
		images: [
			'/products/hosp-50s/rectangular-50ml.png',
			'/products/hosp-50s/rectangular-50ml-2.png',
		],
		type: 'hosp-50s',
	},
	{
		id: 20,
		title: 'Tottle 50ml',
		closure: 'Oval Flip-Cap',
		pet: 'PP',
		clear: 'Natural',
		dimensions: '81 x Ø50 x Ø30',
		mixture: '1700 minimum',
		images: [
			'/products/hosp-50s/tottle-50ml.png',
			'/products/hosp-50s/tottle-50ml-2.png',
			'/products/hosp-50s/tottle-50ml-pink.png',
			'/products/hosp-50s/tottle-50ml-pink-2.png',
		],
		type: 'hosp-50s',
	},
	//jars-large
	{
		id: 21,
		title: 'Jar 125g',
		closure: '61mm closure',
		pet: 'PP',
		clear: 'White',
		dimensions: '53 x Ø70',
		mixture: '603 minimum',
		images: ['/products/jars-large/jar-125g.png'],
		type: 'jars-large',
	},
	{
		id: 22,
		title: 'Jar 500g',
		closure: '83mm closure',
		pet: 'PP',
		clear: 'White / Natural',
		dimensions: '102 x Ø95',
		mixture: '420 minimum',
		images: [
			'/products/jars-large/jar-500g.png',
			'/products/jars-large/jar-500g-2.png',
		],
		type: 'jars-large',
	},
	{
		id: 23,
		title: 'Jar 1kg',
		closure: '83mm closure',
		pet: 'HDPE',
		clear: 'White',
		dimensions: '183 x Ø92',
		mixture: '224 minimum',
		images: ['/products/jars-large/jar-1kg.png'],
		type: 'jars-large',
	},
	//jars pet
	{
		id: 24,
		title: '175ml Jars',
		closure: '38mm closure - PS seal',
		pet: 'PET',
		clear: 'Clear / Amber / Custom',
		dimensions: '106 x Ø53',
		mixture: '585 minimum',
		images: ['/products/jars-pet/jars-175ml.png'],
		type: 'jars-pet',
	},
	{
		id: 25,
		title: '175ml Jars',
		closure: '38mm closure - PS seal',
		pet: 'PET',
		clear: 'Clear / Amber / Custom',
		dimensions: '106 x Ø53',
		mixture: '585 minimum',
		images: ['/products/jars-pet/jars-175ml-blue.png'],
		type: 'jars-pet',
	},
	// jars small
	{
		id: 26,
		title: 'Jar 10g',
		closure: '-',
		pet: 'Polystyrene (PS)',
		clear: 'Clear',
		dimensions: '19 x Ø35',
		mixture: '1000 minimum',
		images: ['/products/jars-small/jar-10g.png'],
		type: 'jars-small',
	},
	{
		id: 27,
		title: '10ml Cream Jar',
		closure: 'Screw-on lid',
		pet: 'Polystyrene (PS)',
		clear: 'Clear',
		dimensions: '19 x Ø38',
		mixture: '2000 minimum',
		images: ['/products/jars-small/cream-jar-10ml.png'],
		type: 'jars-small',
	},
	{
		id: 28,
		title: '25ml Cream Jar',
		closure: 'Screw-on lid',
		pet: 'Polystyrene (PS)',
		clear: 'Clear',
		dimensions: '33 x Ø38',
		mixture: '1200 minimum',
		images: ['/products/jars-small/cream-jar-25ml.png'],
		type: 'jars-small',
	},
	{
		id: 29,
		title: 'jar 50g',
		pet: 'PP Inner',
		clear: 'White / Natural',
		dimensions: '51 x Ø59',
		mixture: '621 minimum',
		images: [
			'/products/jars-small/jar-50g.png',
			'/products/jars-small/jar-50g-2.png',
		],
		type: 'jars-small',
	},
	{
		id: 30,
		title: 'jar 100g',
		closure: '65mm closure',
		pet: 'PP',
		clear: 'Natural',
		dimensions: '36 x Ø71',
		mixture: '528 minimum',
		images: ['/products/jars-small/jar-100g.png'],
		type: 'jars-small',
	},
	//oval
];

export const mightLike: string[] = [
	'/products/tall-250ml.png',
	'/products/square-500ml.png',
	'/products/square-200ml.png',
	'/products/tall-250ml.png',
];
