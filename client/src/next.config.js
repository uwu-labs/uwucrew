const nextTranslate = require('next-translate');
const { withPlausibleProxy } = require('next-plausible');

// @ts-ignore
module.exports = withPlausibleProxy()(nextTranslate({
    webpack5: true
}));
