import {FunctionalComponent, h} from 'preact';
import style from './home.scss';
import SpeechBubble from './svgs/speech-bubble';
import Person from './svgs/person';
import Island from './svgs/island';
import {useEffect, useState} from 'preact/compat';

const Home: FunctionalComponent = () => {
	const fullMonologMsg = 'I\'m Davis. Welcome to my site.';
	const [msgIdx, setMsgIdx] = useState(0);
	const [monologMsg, setMonologMsg] = useState('');

	const scrollDown = () => {
		window.scrollTo({top: 800, behavior: 'smooth'});
	}

	useEffect(() => {
		const typingAnimation = setInterval(() => {
			setMsgIdx((msgIdx) => {
				if (msgIdx >= fullMonologMsg.length - 1) {
					clearInterval(typingAnimation);
					return msgIdx;
				}
				return msgIdx + 1;
			})
		}, 70);
		return (() => clearInterval(typingAnimation));
	}, []);

	useEffect(() => {
		setMonologMsg((monologMsg) => monologMsg + fullMonologMsg[msgIdx]);
	}, [msgIdx])
	return (
		<div>
			<section className={style.intro}>
				<div className={style.monolog}>
					<SpeechBubble />
					<div>
						<p>Hello!</p>
						<p className={style.blinking}>{monologMsg}</p>
					</div>
				</div>
				<div className={style.area}>
					<div className={style.person}>
						<Person />
					</div>
					<div className={style.island}>
						<Island />
					</div>
					<div className={style.scrollDown}
					     onClick={scrollDown}
					>
						<div>
							<img width='12' height='24' src='/assets/images/scroll-down.svg' alt='' />
						</div>
						<span>scroll down</span>
					</div>
				</div>
				<div className={style.motto}>
					<p>Less is more</p>
					<p>Keep it simple</p>
				</div>
			</section>
			<section className={style.section}>
				<h1>About</h1>
				<p>
					I am a software engineer<br />
					I do mostly front-end development<br />
					And I devour good UX design<br />
				</p>
			</section>
			<section className={style.section}>
				<h1>Works</h1>
				<ul>
					<li>
						<a href="https://www.ng4eb.com" target="_blank" rel="noreferrer nofollow">
							ng4eb - a free, online ebook on Angular for everybody
						</a>
					</li>
				</ul>
			</section>
		</div>
	)
}

export default Home
