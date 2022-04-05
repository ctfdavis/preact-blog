import {Fragment, FunctionalComponent, h} from 'preact';
import {Link} from 'preact-router';
import style from './header.scss';
import HomeIcon from './icons/home-icon';
import BlogIcon from './icons/blog-icon';
import LightIcon from './icons/light-icon';
import {useContext} from 'preact/compat';
import {ThemeContext} from '../layout';

interface NavItem {
	Icon: FunctionalComponent;
	label: string;
	link?: string;
	key: string;
}

const Header: FunctionalComponent = () => {

	const {theme, setTheme} = useContext(ThemeContext);

	const switchTheme = () => {
		theme === 'light' ? setTheme('dark') : setTheme('light');
		setTimeout(() => {
			if (window.getSelection) {
				if (window.getSelection()?.empty) {  // Chrome
					window.getSelection()?.empty();
				} else if (window.getSelection()?.removeAllRanges) {  // Firefox
					window.getSelection()?.removeAllRanges();
				}
			}
			(document.activeElement as HTMLElement)?.blur()
		}, 0)
	}

	const navItems: NavItem[] = [
		{
			Icon: HomeIcon,
			label: 'home',
			key: 'home',
			link: '/'
		},
		{
			Icon: BlogIcon,
			label: 'blog',
			key: 'blog',
			link: '/blog'
		},
		{
			Icon: LightIcon,
			label: theme === 'light' ? 'light on' : 'light off',
			key: 'light'
		},
	];
	const renderNavItems = () => (navItems.map(({
		                                            Icon,
		                                            label,
		                                            key,
		                                            link
	                                            }) => {
		const innerContent = () => (
			<Fragment>
				<div className={style.imgWrapper}>
					<Icon />
				</div>
				<span>{label}</span>
			</Fragment>
		)
		return (
			link ?
				<Link key={key} href={link}>
					{innerContent()}
				</Link>
				:
				<div key={key} onClick={() => key === 'light' && switchTheme()}>
					{innerContent()}
				</div>
		)
	}));


	return (
		<header className={style.header}>
			<h1>davischan.dev</h1>
			<nav>
				{renderNavItems()}
			</nav>
		</header>
	);
};

export default Header;
