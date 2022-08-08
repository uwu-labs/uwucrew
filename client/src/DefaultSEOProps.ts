import { DESCRIPTION, SITE_PROTOCOL } from 'core/constants';
import type { DefaultSeoProps as DefaultSeoPropsType } from 'next-seo';

export const DefaultSEOProps: DefaultSeoPropsType = {
	titleTemplate: 'uwucrew NFTs by uwu Labs| %s',
	title: 'uwucrew by uwu Labs',
	description: DESCRIPTION,
	canonical: SITE_PROTOCOL,
	additionalMetaTags: [
		{ httpEquiv: 'content-type', content: 'text/html; charset=UTF-8' },
		{ httpEquiv: 'x-ua-compatible', content: 'ie=edge' },

		{ name: 'url', content: SITE_PROTOCOL },
		{ name: 'identifier-URL', content: SITE_PROTOCOL },
		{ name: 'shortlink', content: SITE_PROTOCOL },
		{ name: 'summary', content: DESCRIPTION },
		{ name: 'keywords', content: "uwu, nft, art, uwucrew, owo, uwu art, uwu nft, uwu labs, opensea, community" },
		{ name: 'robots', content: 'archive,follow,imageindex,index,odp,snippet,translate' },
		{ name: 'googlebot', content: 'index,follow' },
		{ name: 'reply-to', content: 'uwulabsteam@gmail.com' },
		{ property: 'og:email', content: 'uwulabsteam@gmail.com' }
	],
	openGraph: {
		title: 'uwucrew NFT Collection by uwu Labs',
		url: SITE_PROTOCOL,
		type: 'website',
		locale: 'en_US',
		site_name: 'uwucrew',
		images: [
			{
				url: '/og-image.png',
				width: 1200,
				height: 630,
				alt: 'uwucrew og image'
			}
		]
	},
	twitter: {
		handle: '@uwucrewnft',
		site: '@uwucrewnft',
		cardType: 'summary_large_image'
	}
};
