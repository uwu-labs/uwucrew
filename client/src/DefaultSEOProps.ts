import { DESCRIPTION, SITE_PROTOCOL } from 'core/constants';
import type { DefaultSeoProps as DefaultSeoPropsType } from 'next-seo';

export const DefaultSEOProps: DefaultSeoPropsType = {
	titleTemplate: 'uwucrew NFT Collection | %s',
	title: 'uwucrew',
	description: DESCRIPTION,
	canonical: SITE_PROTOCOL,
	additionalMetaTags: [
		{ httpEquiv: 'content-type', content: 'text/html; charset=UTF-8' },
		{ httpEquiv: 'x-ua-compatible', content: 'ie=edge' },

		{ name: 'url', content: SITE_PROTOCOL },
		{ name: 'identifier-URL', content: SITE_PROTOCOL },
		{ name: 'shortlink', content: SITE_PROTOCOL },
		{ name: 'summary', content: DESCRIPTION },
		{ name: 'robots', content: 'archive,follow,imageindex,index,odp,snippet,translate' },
		{ name: 'googlebot', content: 'index,follow' },
		{ name: 'reply-to', content: 'waifusiongovernance@gmail.com' },
		{ property: 'og:email', content: 'waifusiongovernance@gmail.com' }
	],
	openGraph: {
		title: 'uwucrew NFT Collection',
		url: SITE_PROTOCOL,
		type: 'website',
		locale: 'en_US',
		site_name: 'uwucrew'
	},
	twitter: {
		handle: '@waifusion',
		site: '@waifusion',
		cardType: 'summary'
	}
};
