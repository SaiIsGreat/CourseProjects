import web3 from './web3';

const address = '0x82783F7b1410B3b40b5C3EDbAe323763C6009FD6';

const abi = [
	{ inputs: [], stateMutability: 'nonpayable', type: 'constructor' },
	{
		inputs: [],
		name: 'enter',
		outputs: [],
		stateMutability: 'payable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'getPlayers',
		outputs: [
			{ internalType: 'address payable[]', name: '', type: 'address[]' },
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'manager',
		outputs: [{ internalType: 'address', name: '', type: 'address' }],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'pickWinner',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
		name: 'players',
		outputs: [{ internalType: 'address payable', name: '', type: 'address' }],
		stateMutability: 'view',
		type: 'function',
	},
];

const contract = new web3.eth.Contract(abi, address);

export default contract;
