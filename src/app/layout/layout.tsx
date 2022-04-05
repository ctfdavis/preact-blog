import {
	createContext,
	FunctionalComponent,
	h
} from 'preact';
import Header from './header/header';
import Footer from './footer/footer';
import style from './layout.scss';
import {useEffect, useMemo, useState} from 'preact/compat';

export const ThemeContext = createContext<any>(null);

const Layout: FunctionalComponent = (props) => {
	const [theme, setTheme] = useState('light');

	useEffect(() => {
		if (localStorage.getItem('darkTheme') === 'true') {
			setTheme('dark');
			document.body.setAttribute('theme', 'dark');
		}
	}, [])

	const themeMemo = useMemo(() => {
		const _setTheme = (theme: 'light' | 'dark') => {
			document.body.setAttribute('theme', theme);
			localStorage.setItem('darkTheme', theme === 'dark' ? 'true' : 'false');
			setTheme(theme);
		}
		return {theme, setTheme: _setTheme}
	}, [theme])

	return (
		<ThemeContext.Provider value={themeMemo}>
			<div className={style.layout}>
				<Header />
				<main>
					{props.children}
				</main>
				<Footer />
			</div>
		</ThemeContext.Provider>
	)
}

export default Layout
