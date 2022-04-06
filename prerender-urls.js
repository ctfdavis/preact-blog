/* eslint-disable @typescript-eslint/no-var-requires */
const { generateFileList } = require('./crawler');
const { join } = require('path');
const fs = require('fs');

const [blogs] = generateFileList(join(__dirname, 'content')).nodes;
module.exports = () => {
	const pages = [
		{ url: '/', title: 'Home - davischan.dev'},
	];

	// adding blog listing page
	pages.push({
		url: '/blog/',
		title: 'Blog - davischan.dev',
		data: blogs
	});

	// adding all blog pages
	pages.push(...blogs.edges.map(blog => {
		const data = fs.readFileSync(join('content', 'blog', blog.id), 'utf-8').replace(/---(.*\n)*---/, '');
		return {
			url: `/blog/${blog.id}`,
			title: `${blog.details.title} - davischan.dev`,
			seo: blog.details,
			data: {
				details: blog.details,
				content: data
			}
		};
	}));

	return pages;
};
