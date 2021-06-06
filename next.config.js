module.exports = {
    webpack: config => {
        console.log((config.module.rules[1]));
        config.module.rules.push({

        });

        return config;
    },
};
