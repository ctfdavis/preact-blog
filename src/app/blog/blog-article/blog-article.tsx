import {FunctionalComponent, h} from 'preact';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const {usePrerenderData} = require('@preact/prerender-data-provider');
import Markdown from 'markdown-to-jsx';
import style from './blog-article.scss';

const getBlogBody = (data: any, isLoading: boolean) => {
	if (isLoading) {
		return (
			<div className={style.loadingPlaceholder}>
				<h1 className={`${style.blogtitle} loading`} >&nbsp;</h1>
				<caption className={`${style.blogsubtitle} loading`}>&nbsp;</caption>
				<div className={style.blogbody}>
					<div className={`${style.loadingBody} loading`} />
					<div className={`${style.loadingBody} loading`} />
					<div className={`${style.loadingBody} loading`} />
				</div>
			</div>
		);
	}

	if (data && data.data) {
		const { details, content } = data.data;
		return (
			<div>
				<h1 className={style.blogTitle}>{details.title}</h1>
				{ details.subtitle && <caption className={style.blogSubtitle}>{details.subtitle}</caption> }
				{ details.cover && <div className={style.blogCover} style={`background-image:url(${details.cover})`} /> }
				<div className={style.blogBody}>
					<Markdown>{ content }</Markdown>
				</div>
			</div>
		);
	}

	if (!data) {
		return <div>Content Not Found</div>
	}
}

const BlogArticle: FunctionalComponent = (props: any) => {
	const [data, isLoading] = usePrerenderData(props);
	return (
		<article className={style.blogContainer}>
			{getBlogBody(data, isLoading)}
		</article>
	);
};


export default BlogArticle;
