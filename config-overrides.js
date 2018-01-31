const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess            = require('react-app-rewire-less');
const theme                 = require('./theme.json');

module.exports = function override(config, env) {
    config = injectBabelPlugin(['import', { libraryName: 'antd', style: true }], config);  // change importing css to less
    config = rewireLess.withLoaderOptions({
        modifyVars: theme,
    })(config, env);

    return config;
};
