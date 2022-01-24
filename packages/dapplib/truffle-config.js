require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom drive flock slush strong random noise evidence hunt nation flip giant'; 
let testAccounts = [
"0x75e49a8b506835ff54e5996da06e4006357778600239e3e0925ebeb44eedfcc4",
"0xb0b345d80c1f1dfdae1205fbb086f5ff4b6be8ece7a61fb07da4f507172a788b",
"0x0bdcf3354daca767230a76d8ab87b12dae07080b25930b4d093fe127c0c79c46",
"0x1766ec0d6dd4449414ba6f80c896096e422514709bf757dcf3290f67f9b22abc",
"0x30b883ffec89343c6e912823c9f8636c065fd53b9cfa595fb3ccf58d21cd57de",
"0xdca6d74d84fd6bd1c9a88909fe7cf6e6944b5d185e21a6ccf96dfd718d289436",
"0x94a8ce0a8b030c3edfc9262997fa980c93f2da4e0a593d073bf316faa50e78b1",
"0x92911d84cc91e3b20b9f18e7c2774aa6d007015d553f454e0edfb3ade35f064a",
"0x1293ec1e8926efb62ecca89262fd9ae0f4a1b45367743df6bbd3fc509d6502ae",
"0x01cb02715d29ac47a47f87a47694a75c9cd2a8bc4db8a236e5ef9be619c080dc"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


