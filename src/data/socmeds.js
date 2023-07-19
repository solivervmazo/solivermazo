export const socmeds = [
	{
		id: 1,
		name: 'LinkedIn',
		icon: 'linkedin',
		set: 'fab',
		url: 'https://linkedin.com/in/solivervmazo',
	},
	{
		id: 2,
		name: 'GitHub',
		icon: 'github',
		set: 'fab',
		url: 'https://github.com/solivervmazo',
	},
	{
		id: 3,
		name: 'Kaggle',
		icon: 'kaggle',
		set: 'fab',
		url: 'https://www.kaggle.com/solivermazo',
	},
];

export const socshares = [
	{
		id: 1,
		name: 'LinkedIn',
		icon: 'linkedin',
		set: 'fab',
		network: 'linkedin',
	},
	{
		id: 2,
		name: 'Facebook',
		icon: 'square-facebook',
		set: 'fab',
		network: 'facebook',
	},
	{
		id: 3,
		name: 'Twitter',
		icon: 'twitter',
		set: 'fab',
		network: 'twitter',
	},
];


export function getShareLink(platform, url, title){
	switch (platform) {
		case 'facebook':
			return 	`https://www.facebook.com/sharer.php?u=${url}`
		case 'linkedin':
			return `http://www.linkedin.com/shareArticle?mini=true&url=${url}&source=${encodeURIComponent('solivervmazo.github.io/solivermazo')}`
		case 'twitter':
			return 	`https://twitter.com/intent/tweet?url=${url}&text=${title}`
		default:
			return url
	}
}