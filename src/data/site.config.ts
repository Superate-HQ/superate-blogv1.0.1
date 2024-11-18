interface SiteConfig {
	site: string
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	shareMessage: string
	paginationSize: number
}

export const siteConfig: SiteConfig = {
	site: 'https://blog.superate.app', // Write here your website url
	author: 'Superate', // Site author
	title: 'Superate Blog', // Site title.
	description: 'Monetize your Social Media Following through Brand Deals', // Description to display in the meta tags
	lang: 'en-GB',
	ogLocale: 'en_GB',
	shareMessage: 'Share this post', // Message to share a post on social media
	paginationSize: 20 // Number of posts per page
}
