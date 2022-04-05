import { FunctionalComponent, h } from 'preact';
import style from './footer.scss';

const Footer: FunctionalComponent = () => {
	return (
		<footer className={style.footer}>
			<span>
			Handcrafted by <a href='https://github.com/ctfdavis' rel='noopener noreferrer' target='_blank'>Davis Chan</a> - 2022
			</span>
		</footer>
	);
};

export default Footer;
