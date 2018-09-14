export const TOKEN_KOVAN_ABI = [{
  'constant': true,
  'inputs': [],
  'name': 'name',
  'outputs': [{'name': '', 'type': 'string'}],
  'payable': false,
  'stateMutability': 'view',
  'type': 'function',
  'signature': '0x06fdde03'
}, {
  'constant': false,
  'inputs': [{'name': '_spender', 'type': 'address'}, {'name': '_value', 'type': 'uint256'}],
  'name': 'approve',
  'outputs': [{'name': '', 'type': 'bool'}],
  'payable': false,
  'stateMutability': 'nonpayable',
  'type': 'function',
  'signature': '0x095ea7b3'
}, {
  'constant': false,
  'inputs': [{'name': '_signature', 'type': 'bytes'}, {'name': '_to', 'type': 'address'}, {
    'name': '_value',
    'type': 'uint256'
  }, {'name': '_fee', 'type': 'uint256'}, {'name': '_nonce', 'type': 'uint256'}],
  'name': 'transferPreSigned',
  'outputs': [{'name': '', 'type': 'bool'}],
  'payable': false,
  'stateMutability': 'nonpayable',
  'type': 'function',
  'signature': '0x1296830d'
}, {
  'constant': true,
  'inputs': [],
  'name': 'totalSupply',
  'outputs': [{'name': '', 'type': 'uint256'}],
  'payable': false,
  'stateMutability': 'view',
  'type': 'function',
  'signature': '0x18160ddd'
}, {
  'constant': false,
  'inputs': [{'name': '_signature', 'type': 'bytes'}, {'name': '_to', 'type': 'address'}, {
    'name': '_value',
    'type': 'uint256'
  }, {'name': '_fee', 'type': 'uint256'}, {'name': '_nonce', 'type': 'uint256'}, {
    'name': '_methodName',
    'type': 'bytes4'
  }, {'name': '_args', 'type': 'bytes'}],
  'name': 'transferAndCallPreSigned',
  'outputs': [{'name': '', 'type': 'bool'}],
  'payable': false,
  'stateMutability': 'nonpayable',
  'type': 'function',
  'signature': '0x2345d956'
}, {
  'constant': false,
  'inputs': [{'name': '_from', 'type': 'address'}, {'name': '_to', 'type': 'address'}, {
    'name': '_value',
    'type': 'uint256'
  }],
  'name': 'transferFrom',
  'outputs': [{'name': '', 'type': 'bool'}],
  'payable': false,
  'stateMutability': 'nonpayable',
  'type': 'function',
  'signature': '0x23b872dd'
}, {
  'constant': true,
  'inputs': [{'name': '_addr', 'type': 'address'}],
  'name': 'balanceWithLoyaltyClaimOf',
  'outputs': [{'name': '', 'type': 'uint256'}, {'name': '', 'type': 'uint256'}],
  'payable': false,
  'stateMutability': 'view',
  'type': 'function',
  'signature': '0x2ff73fdc'
}, {
  'constant': true,
  'inputs': [],
  'name': 'decimals',
  'outputs': [{'name': '', 'type': 'uint8'}],
  'payable': false,
  'stateMutability': 'view',
  'type': 'function',
  'signature': '0x313ce567'
}, {
  'constant': true,
  'inputs': [],
  'name': 'totalSupply_',
  'outputs': [{'name': '', 'type': 'uint256'}],
  'payable': false,
  'stateMutability': 'view',
  'type': 'function',
  'signature': '0x324536eb'
}, {
  'constant': false,
  'inputs': [{'name': '_holders', 'type': 'address[]'}, {'name': '_timeouts', 'type': 'uint256[]'}],
  'name': 'lockTokens',
  'outputs': [],
  'payable': false,
  'stateMutability': 'nonpayable',
  'type': 'function',
  'signature': '0x3547800a'
}, {
  'constant': false,
  'inputs': [{'name': '_to', 'type': 'address'}, {'name': '_value', 'type': 'uint256'}, {
    'name': '_methodName',
    'type': 'bytes4'
  }, {'name': '_args', 'type': 'bytes'}],
  'name': 'transferAndCall',
  'outputs': [{'name': '', 'type': 'bool'}],
  'payable': false,
  'stateMutability': 'nonpayable',
  'type': 'function',
  'signature': '0x3c4461be'
}, {
  'constant': true,
  'inputs': [],
  'name': 'oneYearsInBlocks',
  'outputs': [{'name': '', 'type': 'uint256'}],
  'payable': false,
  'stateMutability': 'view',
  'type': 'function',
  'signature': '0x3d93cb1c'
}, {
  'constant': true,
  'inputs': [{'name': '_owner', 'type': 'address'}, {'name': '_from', 'type': 'address'}],
  'name': 'rewardOf',
  'outputs': [{'name': '', 'type': 'uint256'}, {'name': '', 'type': 'uint256'}, {'name': '', 'type': 'uint256'}],
  'payable': false,
  'stateMutability': 'view',
  'type': 'function',
  'signature': '0x4732aa1d'
}, {
  'constant': false,
  'inputs': [{'name': '_amount', 'type': 'uint256'}],
  'name': 'loyalty',
  'outputs': [],
  'payable': false,
  'stateMutability': 'nonpayable',
  'type': 'function',
  'signature': '0x49545348'
}, {
  'constant': false,
  'inputs': [{'name': '_from', 'type': 'address'}, {'name': '_to', 'type': 'address'}, {
    'name': '_value',
    'type': 'uint256'
  }, {'name': '_rewardType', 'type': 'uint8'}],
  'name': 'transferFrom',
  'outputs': [{'name': '', 'type': 'bool'}],
  'payable': false,
  'stateMutability': 'nonpayable',
  'type': 'function',
  'signature': '0x4cb820eb'
}, {
  'constant': false,
  'inputs': [{'name': '_to', 'type': 'address'}, {'name': '_value', 'type': 'uint256'}, {
    'name': '_rewardType',
    'type': 'uint8'
  }, {'name': '_methodName', 'type': 'bytes4'}, {'name': '_args', 'type': 'bytes'}],
  'name': 'transferAndCall',
  'outputs': [{'name': '', 'type': 'bool'}],
  'payable': false,
  'stateMutability': 'nonpayable',
  'type': 'function',
  'signature': '0x595506e0'
}, {
  'constant': false,
  'inputs': [{'name': '_spender', 'type': 'address'}, {'name': '_subtractedValue', 'type': 'uint256'}],
  'name': 'decreaseApproval',
  'outputs': [{'name': '', 'type': 'bool'}],
  'payable': false,
  'stateMutability': 'nonpayable',
  'type': 'function',
  'signature': '0x66188463'
}, {
  'constant': true,
  'inputs': [{'name': '_owner', 'type': 'address'}],
  'name': 'balanceOf',
  'outputs': [{'name': '', 'type': 'uint256'}],
  'payable': false,
  'stateMutability': 'view',
  'type': 'function',
  'signature': '0x70a08231'
}, {
  'constant': false,
  'inputs': [{'name': '_signature', 'type': 'bytes'}, {'name': '_to', 'type': 'address'}, {
    'name': '_value',
    'type': 'uint256'
  }, {'name': '_fee', 'type': 'uint256'}, {'name': '_nonce', 'type': 'uint256'}, {
    'name': '_rewardType',
    'type': 'uint8'
  }, {'name': '_methodName', 'type': 'bytes4'}, {'name': '_args', 'type': 'bytes'}],
  'name': 'transferAndCallPreSigned',
  'outputs': [{'name': '', 'type': 'bool'}],
  'payable': false,
  'stateMutability': 'nonpayable',
  'type': 'function',
  'signature': '0x71481d0d'
}, {
  'constant': true,
  'inputs': [{'name': '_owner', 'type': 'address'}, {'name': '_amountType', 'type': 'bool'}],
  'name': 'balanceOf',
  'outputs': [{'name': '', 'type': 'uint256'}],
  'payable': false,
  'stateMutability': 'view',
  'type': 'function',
  'signature': '0x772865e2'
}, {
  'constant': false,
  'inputs': [],
  'name': 'finishMinting',
  'outputs': [],
  'payable': false,
  'stateMutability': 'nonpayable',
  'type': 'function',
  'signature': '0x7d64bcb4'
}, {
  'constant': true,
  'inputs': [],
  'name': 'loyalty',
  'outputs': [{'name': '', 'type': 'uint256'}],
  'payable': false,
  'stateMutability': 'view',
  'type': 'function',
  'signature': '0x8d16a694'
}, {
  'constant': true,
  'inputs': [],
  'name': 'owner',
  'outputs': [{'name': '', 'type': 'address'}],
  'payable': false,
  'stateMutability': 'view',
  'type': 'function',
  'signature': '0x8da5cb5b'
}, {
  'constant': true,
  'inputs': [],
  'name': 'mintingDone',
  'outputs': [{'name': '', 'type': 'bool'}],
  'payable': false,
  'stateMutability': 'view',
  'type': 'function',
  'signature': '0x8e2ae564'
}, {
  'constant': false,
  'inputs': [{'name': 'loyaltyOwners', 'type': 'address[]'}],
  'name': 'reclaim',
  'outputs': [],
  'payable': false,
  'stateMutability': 'nonpayable',
  'type': 'function',
  'signature': '0x914118ec'
}, {
  'constant': true,
  'inputs': [],
  'name': 'symbol',
  'outputs': [{'name': '', 'type': 'string'}],
  'payable': false,
  'stateMutability': 'view',
  'type': 'function',
  'signature': '0x95d89b41'
}, {
  'constant': true,
  'inputs': [{'name': '_owner', 'type': 'address'}, {'name': '_amountType', 'type': 'bool'}, {
    'name': '_fromBlock',
    'type': 'uint64'
  }],
  'name': 'balanceOf',
  'outputs': [{'name': '', 'type': 'uint256'}],
  'payable': false,
  'stateMutability': 'view',
  'type': 'function',
  'signature': '0x9603c874'
}, {
  'constant': false,
  'inputs': [{'name': '_to', 'type': 'address'}, {'name': '_value', 'type': 'uint256'}],
  'name': 'transfer',
  'outputs': [{'name': '', 'type': 'bool'}],
  'payable': false,
  'stateMutability': 'nonpayable',
  'type': 'function',
  'signature': '0xa9059cbb'
}, {
  'constant': false,
  'inputs': [{'name': '_signature', 'type': 'bytes'}, {'name': '_to', 'type': 'address'}, {
    'name': '_value',
    'type': 'uint256'
  }, {'name': '_fee', 'type': 'uint256'}, {'name': '_nonce', 'type': 'uint256'}, {
    'name': '_fromType',
    'type': 'uint8'
  }],
  'name': 'transferPreSigned',
  'outputs': [{'name': '', 'type': 'bool'}],
  'payable': false,
  'stateMutability': 'nonpayable',
  'type': 'function',
  'signature': '0xb297788f'
}, {
  'constant': true,
  'inputs': [{'name': '', 'type': 'address'}],
  'name': 'lockups',
  'outputs': [{'name': '', 'type': 'uint256'}],
  'payable': false,
  'stateMutability': 'view',
  'type': 'function',
  'signature': '0xc7b6d432'
}, {
  'constant': true,
  'inputs': [],
  'name': 'maxSupply',
  'outputs': [{'name': '', 'type': 'uint256'}],
  'payable': false,
  'stateMutability': 'view',
  'type': 'function',
  'signature': '0xd5abeb01'
}, {
  'constant': false,
  'inputs': [{'name': '_spender', 'type': 'address'}, {'name': '_addedValue', 'type': 'uint256'}],
  'name': 'increaseApproval',
  'outputs': [{'name': '', 'type': 'bool'}],
  'payable': false,
  'stateMutability': 'nonpayable',
  'type': 'function',
  'signature': '0xd73dd623'
}, {
  'constant': true,
  'inputs': [],
  'name': 'max88',
  'outputs': [{'name': '', 'type': 'uint256'}],
  'payable': false,
  'stateMutability': 'view',
  'type': 'function',
  'signature': '0xd93a7ce8'
}, {
  'constant': false,
  'inputs': [{'name': '_to', 'type': 'address'}, {'name': '_value', 'type': 'uint256'}, {
    'name': '_rewardType',
    'type': 'uint8'
  }],
  'name': 'transfer',
  'outputs': [{'name': '', 'type': 'bool'}],
  'payable': false,
  'stateMutability': 'nonpayable',
  'type': 'function',
  'signature': '0xdbe58c1f'
}, {
  'constant': true,
  'inputs': [{'name': '_owner', 'type': 'address'}, {'name': '_spender', 'type': 'address'}],
  'name': 'allowance',
  'outputs': [{'name': '', 'type': 'uint256'}],
  'payable': false,
  'stateMutability': 'view',
  'type': 'function',
  'signature': '0xdd62ed3e'
}, {
  'constant': false,
  'inputs': [{'name': '_recipients', 'type': 'address[]'}, {'name': '_amounts', 'type': 'uint256[]'}],
  'name': 'mint',
  'outputs': [],
  'payable': false,
  'stateMutability': 'nonpayable',
  'type': 'function',
  'signature': '0xe467f7e0'
}, {
  'constant': true,
  'inputs': [{'name': '_owner', 'type': 'address'}, {'name': '_from', 'type': 'address'}, {
    'name': '_fromBlock',
    'type': 'uint48'
  }],
  'name': 'rewardOf',
  'outputs': [{'name': '', 'type': 'uint256'}, {'name': '', 'type': 'uint256'}, {'name': '', 'type': 'uint256'}],
  'payable': false,
  'stateMutability': 'view',
  'type': 'function',
  'signature': '0xe796b070'
}, {
  'constant': false,
  'inputs': [{'name': '_newOwner', 'type': 'address'}],
  'name': 'transferOwnership',
  'outputs': [],
  'payable': false,
  'stateMutability': 'nonpayable',
  'type': 'function',
  'signature': '0xf2fde38b'
}, {
  'inputs': [],
  'payable': false,
  'stateMutability': 'nonpayable',
  'type': 'constructor',
  'signature': 'constructor'
}, {
  'anonymous': false,
  'inputs': [{'indexed': true, 'name': '_holder', 'type': 'address'}, {
    'indexed': false,
    'name': '_timeout',
    'type': 'uint256'
  }],
  'name': 'TokensLocked',
  'type': 'event',
  'signature': '0xac87f20a77d28ee8bbb58ec87ea8fa968b3393efae1a368fd50b767c2847391c'
}, {
  'anonymous': false,
  'inputs': [{'indexed': false, 'name': '_amount', 'type': 'uint256'}],
  'name': 'TokensLoyalty',
  'type': 'event',
  'signature': '0x4dfdfcbf0b18f1ac221c9b4f64cfb89b38cf310144836d6cf001d602e67862dc'
}, {
  'anonymous': false,
  'inputs': [{'indexed': true, 'name': '_from', 'type': 'address'}, {
    'indexed': true,
    'name': '_to',
    'type': 'address'
  }, {'indexed': false, 'name': '_value', 'type': 'uint256'}, {
    'indexed': false,
    'name': '_methodName',
    'type': 'bytes4'
  }, {'indexed': false, 'name': '_args', 'type': 'bytes'}],
  'name': 'Transfer',
  'type': 'event',
  'signature': '0x6413dd5880c07d0e14b30b71e9568b1717bc7d830dbfe692d789d035b78b4548'
}, {
  'anonymous': false,
  'inputs': [{'indexed': true, 'name': '_from', 'type': 'address'}, {
    'indexed': true,
    'name': '_to',
    'type': 'address'
  }, {'indexed': true, 'name': '_delegate', 'type': 'address'}, {
    'indexed': false,
    'name': '_amount',
    'type': 'uint256'
  }, {'indexed': false, 'name': '_fee', 'type': 'uint256'}],
  'name': 'TransferPreSigned',
  'type': 'event',
  'signature': '0xec5a73fd1f178be20c1bca1b406cbf4b5c20d833b66e582fc122fb4baa0fc2a4'
}, {
  'anonymous': false,
  'inputs': [{'indexed': true, 'name': '_from', 'type': 'address'}, {
    'indexed': true,
    'name': '_to',
    'type': 'address'
  }, {'indexed': true, 'name': '_delegate', 'type': 'address'}, {
    'indexed': false,
    'name': '_amount',
    'type': 'uint256'
  }, {'indexed': false, 'name': '_fee', 'type': 'uint256'}, {
    'indexed': false,
    'name': '_methodName',
    'type': 'bytes4'
  }, {'indexed': false, 'name': '_args', 'type': 'bytes'}],
  'name': 'TransferPreSigned',
  'type': 'event',
  'signature': '0xe41fb711ca67767004e5a60680b8398a0f8723e1a8540829e183fe709589574a'
}, {
  'anonymous': false,
  'inputs': [{'indexed': true, 'name': 'owner', 'type': 'address'}, {
    'indexed': true,
    'name': 'spender',
    'type': 'address'
  }, {'indexed': false, 'name': 'value', 'type': 'uint256'}],
  'name': 'Approval',
  'type': 'event',
  'signature': '0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925'
}, {
  'anonymous': false,
  'inputs': [{'indexed': true, 'name': 'from', 'type': 'address'}, {
    'indexed': true,
    'name': 'to',
    'type': 'address'
  }, {'indexed': false, 'name': 'value', 'type': 'uint256'}],
  'name': 'Transfer',
  'type': 'event',
  'signature': '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef'
}];
