import { FunctionalComponent, h } from 'preact';
import style from './_svg.scss';

const Island: FunctionalComponent = () => {
	return (
		<svg className={style.island} fill="none" viewBox="0 0 446 291" xmlns="http://www.w3.org/2000/svg">
			<g filter="url(#a)">
				<path d="m160.63 15.553c-55.524-21.062-117.79 53.165-141.98 92.911-3.8938 3.504-9.8009 18.382-2.2794 49.862 9.402 39.351 111.65 68.566 174.43 108.58 62.783 40.013 214.42-47.582 233.48-89.765 19.059-42.182 7.597-79.357-40.594-114.55-48.192-35.194-96.128 26.534-136.36 4.3851-40.237-22.149-17.286-25.093-86.691-51.42z" fill="#fff" />
			</g>
			<defs>
				<filter id="a" x=".73807" y=".86319" width="444.28" height="289.25" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
					<feFlood flood-opacity="0" result="BackgroundImageFix" />
					<feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
					<feOffset dy="1" />
					<feGaussianBlur stdDeviation="6" />
					<feComposite in2="hardAlpha" operator="out" />
					<feColorMatrix values="0 0 0 0 0.725 0 0 0 0 0.663545 0 0 0 0 0.631354 0 0 0 0.5 0" />
					<feBlend in2="BackgroundImageFix" result="effect1_dropShadow_112_200" />
					<feBlend in="SourceGraphic" in2="effect1_dropShadow_112_200" result="shape" />
				</filter>
			</defs>
		</svg>
	)
}

export default Island
