import { BsCardChecklist, BsLaptop, BsChat, BsDownload } from 'react-icons/bs';
import styles from '../Styles/Navbar.module.css';
import monogram from '../Images/Monogram.svg';
import resume from '../assets/Resume.pdf';
import { saveAs } from 'file-saver';

const download = () => saveAs(resume, 'JosephSchechterResume.pdf');

export const Navbar = () => {
	return (
		<div className={styles.topCenter} id="top">
			<div className={styles.details}>
				<a
					href="#top"
					className={styles.initials}
					onClick={() => (document.documentElement.scrollTop = 0)}
				>
					<img src={monogram} alt="JS-monogram"></img>
				</a>

				<ul className={styles.list}>
					<li className={styles.link}>
						<BsCardChecklist />
						<a href="#skills">
							<p> Skills</p>
						</a>
					</li>
					<li className={styles.link}>
						<BsLaptop />
						<a href="#projects">
							{' '}
							<p> Projects</p>
						</a>
					</li>

					<li className={styles.link}>
						<BsChat />
						<a href="#connect">
							{' '}
							<p> Connect</p>
						</a>
					</li>
					<li className={styles.link}>
						<BsDownload className="animate-bounce clickable" onClick={download} />
						<button onClick={download}>
							<p>Resume</p>
						</button>
					</li>
				</ul>
			</div>
		</div>
	);
};
