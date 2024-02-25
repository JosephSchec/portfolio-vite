import img from '../Images/cardphoto.png';
import styles from '../Styles/Card.module.css';
export const Card = () => {
	return (
		<div className={styles.card}>
			{
				<figure>
					<img src={img} className="m-auto" alt="Joseph-Schechter by a computer" />
					<figcaption className={styles.about}>
						<p>
							<span>(Function about(){'\t{'}</span>
							<span>
								{' '}
								{`return 'Hello , I'm Joseph, I am 
                       Currently schooling for my bachelors in computer science and technology.`}
							</span>
							<span>
								I enjoy solving complex problems as well as learning about new and up and coming
								technologies.'
							</span>
							<span>
								{' '}
								<span></span> )();
							</span>
						</p>
					</figcaption>
				</figure>
			}
		</div>
	);
};
