const nextTranslate = require('next-translate');
const { withPlausibleProxy } = require('next-plausible');

// @ts-ignore
module.exports = withPlausibleProxy()(nextTranslate({
    async rewrites() {
        return [
            {
                source: '/index',
                destination: '/'
            }
        ];
    },
    webpack5: true
}));
