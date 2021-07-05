import { SITE_PROTOCOL } from 'core/constants';
import sitemapGenerator from 'nextjs-sitemap-generator';
import path from 'path';

export async function generateSitemap(srcPath: string) {
	await sitemapGenerator({
		baseUrl: SITE_PROTOCOL,
		pagesDirectory: path.join(srcPath, 'pages'),
		targetDirectory: path.join(srcPath, 'public'),
		nextConfigPath: path.join(srcPath, 'next.config.js')
	});
}
