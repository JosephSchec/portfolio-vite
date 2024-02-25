import Slider from 'react-slick';
import { Project } from './Project';
import styles from '../../Styles/Projects/Projects.module.css';
//@ts-ignore
import zmanim from '../../assets/zmanim.apk';

import useScroll from '../../HelperFunctions/useScroll';
const settings = {
	infinite: true,
	dots: true,
	speed: 500,
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 3000,
};

export const Projects = () => {
	const opacity = useScroll(400);
	return (
		<>
			<div className={opacity ? 'newSection' : ' newSection @apply opacity-100'}>
				<h1 id="projects">Projects:</h1>
			</div>
			<div className={opacity ? '@apply opacity-0' : styles.center}>
				<div className={styles.carousel}>
					<Slider {...settings}>
						<Project
							projectTitle="Snobz Original-Version"
							qrCodeTo="https://snobz.vercel.app/"
							github="https://github.com/JosephSchec/Snobz"
							repository="Snobz"
						/>
						<Project
							projectTitle="Java Notepad Editor"
							github="https://github.com/JosephSchec/java-notepad-editor"
							repository="java-notepad-editor"
						/>
						<Project
							projectTitle="Snobz2 Webpack-Version"
							qrCodeTo="https://snobz2.vercel.app/"
							github="https://github.com/JosephSchec/Snobz2"
							repository="Snobz2"
						/>
						<Project
							projectTitle="Snobz React-Version"
							qrCodeTo="https://snobzz.vercel.app/"
							github="https://github.com/JosephSchec/snobz-react"
							repository="snobz-react"
						/>
						<Project
							projectTitle="Zmanim"
							github="https://github.com/JosephSchec/zmanim"
							repository="zmanim"
							downloadApk={zmanim}
							downloadLinkName="zmanim.apk"
						/>
						<Project
							projectTitle="Portfolio"
							github="https://github.com/JosephSchec/josephschec.github.io"
							repository="josephschec.github.io"
						/>
						<Project
							projectTitle="davenfor"
							qrCodeTo="https://www.davenfor.us"
							repository="private"
						/>
					</Slider>
				</div>
			</div>
		</>
	);
};
