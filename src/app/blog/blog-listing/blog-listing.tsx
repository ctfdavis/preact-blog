/* eslint-disable react/jsx-key */
import {Fragment, FunctionalComponent, h} from 'preact';
import {Link} from 'preact-router';
import style from './blog-listing.scss';
import SearchSvg from './svgs/search-svg';
import {useEffect, useState} from 'preact/compat';
import {
	metaHelper,
	titleHelper
} from '../../../utils/seo-helper';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const {usePrerenderData} = require('@preact/prerender-data-provider');

const Paginator: FunctionalComponent<any> = (props: any) => {
	const {page, setPage, totalPosts} = props;
	const [totalPages, setTotalPages] = useState(0);
	const goToPage = (i: number) => {
		setPage(i);
	}
	useEffect(() => {
		if (totalPages - 1 < page) {
			setPage(0);
		}
	}, [totalPages])

	useEffect(() => {
		if (totalPosts > 0) {
			setTotalPages(Math.ceil(totalPosts / 3));
		} else {
			setTotalPages(0);
		}
	}, [totalPosts])

	if (!totalPages) return null;

	if (totalPages == 1) {
		return (
			<div className={style.paginator}>
				<div className={`${style.pageBox} ${style.pageBox__active}`}>1</div>
			</div>
		)
	}

	return (
		<div className={style.paginator}>
			{/* eslint-disable-next-line prefer-spread */}
			{Array.apply(null, Array(totalPages)).map((_, i) => (
				<div
					className={`${style.pageBox} ${page === i && style.pageBox__active}`}
					onClick={() => goToPage(i)}
				>{i + 1}</div>
			))}
		</div>
	);
}

const getBlogListing = (blogs: any, isLoading?: boolean) => {
	if (isLoading) {
		return <div>Loading...</div>
	}
	if (blogs && blogs.length > 0) {
		return (
			<Fragment>
				{blogs.map((blog: any) => (
					<article className={style.article}>
						<h2>{blog.details.title}</h2>
						<p class={style.preview}>
							{blog.preview}
						</p>
						<Link href={`/blog/${blog.id}`}>
							Read more
						</Link>
						<div className={style.metadata}>
							<div className={style.tags}>
								{
									(
										blog.details.tags.substr(1, blog.details.tags.length - 2).split(',') || []).map((tag: string) =>
										<span className={style.tag}>
											{tag}
										</span>
									)
								}
							</div>
							<div>
								Last
								Updated: {blog.details.update}
							</div>
						</div>
					</article>
				))}
			</Fragment>
		);
	}

	if (!blogs || blogs.length === 0) {
		return <div>No blog found</div>
	}
}

const BlogListing: FunctionalComponent = (props: any) => {
	const [data, isLoading] = usePrerenderData(props);
	const [blogs, setBlogs] = useState(data?.data?.edges || []);
	const [totalBlogs, setTotalBlogs] = useState(data?.data?.edges?.length || 0);
	const [inputQuery, setInputQuery] = useState('');
	const [searchQuery, setSearchQuery] = useState('');
	const [page, setPage] = useState(0);

	const handleSearch = () => {
		setSearchQuery(inputQuery);
	}

	const handleChangeQuery = (e: any) => {
		setInputQuery(e.target.value);
	}

	const handleEnter = (e: any) => {
		if(e.key === 'Enter') {
			handleSearch();
		}
	}

	useEffect(() => {
		titleHelper('Blog - davischan.dev');
		metaHelper('description', 'A blog on software engineering by Davis Chan');
	}, [])

	useEffect(() => {
		let blogData = data?.data?.edges || [];
		if (searchQuery) {
			const query = searchQuery.toLowerCase();
			blogData = blogData.filter((blog: any) => {
				return (
					blog.details.title.toLowerCase().includes(query) ||
					blog.preview.toLowerCase().includes(query) ||
					[...blog.details.tags.split(',')].some((tag: string) => (
						tag.toLowerCase().includes(query)
					))
				)
			})
		}
		setTotalBlogs(blogData.length);
		if (blogData.length > page * 3) {
			blogData = blogData.slice(page * 3, page * 3 + 3);
		}
		setBlogs(blogData);
	}, [page, searchQuery, data])

	return (
		<div className={style.blogListing}>
			<div className={style.searchBar}>
				<input value={inputQuery} onChange={handleChangeQuery} onKeyPress={handleEnter} required />
				<label>Search</label>
				<div onClick={handleSearch}>
					<SearchSvg />
				</div>
			</div>
			{getBlogListing(blogs, isLoading)}
			<Paginator page={page} setPage={setPage} totalPosts={totalBlogs} />
		</div>
	)
}

export default BlogListing
