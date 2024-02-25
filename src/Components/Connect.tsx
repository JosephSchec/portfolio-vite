import { IconContext } from 'react-icons';
import { FaRegEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import styles from '../Styles/Connect.module.css';
export const Connect = () => {
	return (
		<div className={'newSection opacity-100 mb-4'} id="connect">
			<h1 className="@apply mt-0 mb-4 ">Connect</h1>
			<ul className={styles.list}>
				<IconContext.Provider
					value={{ size: '60px', className: 'h-full w-full text-violet-500 hover:text-gray-300 ' }}
				>
					<li>
						<a href="https://github.com/JosephSchec" target="_blank" rel="noreferrer">
							{' '}
							<FaGithub />
						</a>
					</li>
					<li>
						<a href="https://www.linkedin.com/in/jschec/" target="_blank" rel="noreferrer">
							{' '}
							<FaLinkedin />
						</a>
					</li>
					<li>
						<a href="mailto: shecky522@gmail.com" target="_blank" rel="noreferrer">
							{' '}
							<FaRegEnvelope />{' '}
						</a>
					</li>
				</IconContext.Provider>
			</ul>
		</div>
	);
};
