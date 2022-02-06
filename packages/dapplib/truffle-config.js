require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea glimpse flame traffic black deliver remain hole idea enroll fortune season'; 
let testAccounts = [
"0xcaf7205c98c3f7e121e6b789c7d6df877f5d29aac6929cc67c4afa48f561c113",
"0xec9108aa2133ab857872f6b9a2bdf22e41efa925358f65a27e8e1bae251edcb4",
"0x3dd693b3cf2c1f404d7e6c2bb47dd14daf8fd0455133ec7d352443deeb17490b",
"0xf1ccfe818af093b5fc9e26fc4f88ab418fba2e80103b42c5d3f88e426ea395bb",
"0x0d4d4360905ed3f71bb863233e4e87ac2cd8d769799e158ad7f26afc5c6ccfb7",
"0x6dc4bc23711d8af9b710cb98f8b5796761d73f4d0ff8f5a48018e27506a12af9",
"0x043618685c3c9969d83b116ce2d86eec6e635f98d105c427cb7eedb5cc72350e",
"0x54e3fcb0a5a518a47b9490b56e5f2509950a6d1a913f0e1ad911d4f6f4172a1a",
"0x3e24aa1481e2875572056b7c3260fc96ece3d5d4b166db75b1437e8ec8ae397e",
"0xaee8168d898be08020584541129eeae091c19c1e6d4d7c1e3d4c8176586eb49d"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

