import {FunctionalComponent, h} from 'preact';
import {Router} from 'preact-router';
import Layout from './layout/layout';
import Home from './home/home';
import BlogListing from './blog/blog-listing/blog-listing';
import BlogArticle from './blog/blog-article/blog-article';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const {Provider} = require('@preact/prerender-data-provider');

const App: FunctionalComponent = (props: any) => {
	return (
		<Provider value={props}>
			<Layout>
				<Router>
					<Home path='/' />
					<BlogListing path='/blog/' />
					<BlogArticle path="/blog/:name" />
				</Router>
			</Layout>
		</Provider>
	);
};

export default App;
