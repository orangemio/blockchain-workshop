module.exports = {
    networks: {
        development: {
            host: 'localhost',
            port: 8545,
            // eslint-disable-next-line @typescript-eslint/camelcase
            network_id: '*',
            gas: 8000000,
            gasPrice: 0
        }
    },
    compilers: {
        solc: {
            version: 'node_modules/solc',
            settings: {
                optimizer: {
                    enabled: true,
                    runs: 200
                }
            }
        }
    }
};
