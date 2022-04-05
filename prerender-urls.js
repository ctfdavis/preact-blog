/* eslint-disable @typescript-eslint/no-var-requires */
const { generateFileList } = require('./crawler');
const { join } = require('path');
const fs = require('fs');

const [blogs] = generateFileList(join(__dirname, 'content')).nodes;
module.exports = () => {
	const pages = [
		{ url: '/' },
	];

	// adding blog listing page
	pages.push({
		url: '/blog/',
		data: blogs
	});

	// adding all blog pages
	pages.push(...blogs.edges.map(blog => {
		const data = fs.readFileSync(join('content', 'blog', blog.id), 'utf-8').replace(/---(.*\n)*---/, '');
		return {
			url: `/blog/${blog.id}`,
			seo: blog.details,
			data: {
				details: blog.details,
				content: data
			}
		};
	}));

	return pages;
};
