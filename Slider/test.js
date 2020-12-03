// let adder = (...args) => args.reduce((acc, el) => acc + el, 0);
// let factorial = (n) => n === 1 ? n *= 1 : n *= factorial(n - 1);


let users = [
	{	name: 'Nazar',
		age: 23,
		id: 1
	},
	{	name: 'Misha',
		age: 31,
		id: 2
	},
	{	name: 'Ivan',
		age: 17,
		id: 3
	},
	{	name: 'Alex',
		age: 25,
		id: 4
	}		
];

let projects = [
	{	name: 'Animals',
		id: 1,
		userId: 1 
	},
	{	name: 'Books',
		id: 2,
		userId: 1 
	},
	{	name: 'Trees',
		id: 3,
		userId: 3 
	},
	{	name: 'Cars',
		id: 4,
		userId: 1 
	},
	{	name: 'Trains',
		id: 5,
		userId: 4 
	},
	{	name: 'Space',
		id: 6,
		userId: 2 
	},
	{	name: 'Planets',
		id: 7,
		userId: 4 
	},
	{	name: 'Stars',
		id: 8,
		userId: 3 
	}				
];

let userInfo = (u, p) => {
	u.forEach((el) => el.id)
	console.log(users.forEach((el) => el.id))
}

userInfo(users,projects);