import { motion } from 'framer-motion';
import styles from '../Styles/Tldr.module.css';
import { IconContext } from 'react-icons';
import {
	SiTailwindcss,
	SiFramer,
	SiBootstrap,
	SiCss3,
	SiHtml5,
	SiJavascript,
	SiNodedotjs,
	SiPython,
	SiAngularjs,
	SiMongodb,
	SiMysql,
	SiReact,
	SiPostgresql,
	SiGraphql,
	SiNextdotjs,
	SiTypescript,
} from 'react-icons/si';

export default function Tldr({ opacity }: { opacity: boolean }) {
	const icons = {
		size: '60px',
		className: ' bg-violet-500 text-slate-200 p-2 m-2 rounded-lg',
	};

	const front = {
		animate: {
			x: [100, window.innerWidth - 500],
			transition: {
				x: {
					repeat: Infinity,
					repeatType: 'loop',
					duration: 15,
					ease: 'circInOut',
				},
			},
		},
	};
	const back = {
		animate: {
			x: [window.innerWidth - 500, -500],
			transition: {
				x: {
					repeat: Infinity,
					repeatType: 'loop',
					duration: 15,
					ease: 'circInOut',
				},
			},
		},
	};

	return (
		<>
			<div className={opacity ? 'newSection' : ' newSection opacity-100 hidden md:block m-auto'}>
				<div className={styles.marquee}>
					<motion.div className={styles.track} variants={front} animate="animate">
						<h1 className={icons.className}> FrontEnd:</h1>
						<IconContext.Provider value={icons}>
							<SiFramer title="framer" />
							<SiTailwindcss title="tailwind" />
							<SiBootstrap title="bootstrap" />
							<SiCss3 title="css" />
							<SiHtml5 title="html" />
							<SiJavascript title="js" />
							<SiAngularjs title="angular" />
							<SiReact title="react" />
						</IconContext.Provider>
					</motion.div>
				</div>

				<div className={styles.marquee}>
					<motion.div className={styles.track} variants={back} animate="animate">
						<h1 className={icons.className}>Backend:</h1>
						<IconContext.Provider value={icons}>
							{/* <SiJava title="java" /> */}
							<SiPython title="python" />
							<SiTypescript title="TypeScript" />
							<SiNodedotjs title="node.js" />
							<SiMysql title="mysql" />
							<SiMongodb title="mongodb" />
							<SiPostgresql title="postgres" />
							<SiNextdotjs title="Next.Js" />
							<SiGraphql title="graphQL" />
						</IconContext.Provider>
					</motion.div>
				</div>
			</div>
		</>
	);
}
