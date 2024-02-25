import useGitHub from '../../HelperFunctions/useGitHub';
import styles from '../../Styles/Projects/Project.module.css';
import { FiExternalLink } from 'react-icons/fi';
import { AiFillGithub } from 'react-icons/ai';
import { saveAs } from 'file-saver';
import { BsDownload } from 'react-icons/bs';
import { QRCodeSVG } from 'qrcode.react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
interface Props {
	projectTitle: string;
	qrCodeTo?: string;
	github?: string;
	repository: string;
	downloadApk?: string | Blob;
	downloadLinkName?: string;
}
export const Project = (props: Props) => {
	const { projectTitle, qrCodeTo, github, repository, downloadApk, downloadLinkName } = props;
	const download = () => (downloadApk ? saveAs(downloadApk, downloadLinkName) : null);
	const readMe = useGitHub(repository);

	return (
		<div>
			<h3 className="underline">{projectTitle}:</h3>

			<div className={styles.project}>
				{qrCodeTo && <QRCodeSVG value={qrCodeTo} className="rounded-xl" />}
				<div className={styles.links}>
					{qrCodeTo && (
						<a
							href={qrCodeTo}
							target={'_blank'}
							rel="noreferrer"
							className={styles.siteButton}
							title={`view ${projectTitle}`}
						>
							<FiExternalLink size={40} />
						</a>
					)}
					{github && (
						<a href={github} target={'_blank'} rel="noreferrer" className={styles.github}>
							<AiFillGithub size={40} title="github" />
						</a>
					)}

					{downloadApk && downloadLinkName && (
						<button
							className={`animate-bounce clickable ${styles.siteButton}`}
							onClick={download}
							title="download apk"
						>
							{' '}
							<BsDownload size={40} />
						</button>
					)}
				</div>

				<article className={styles.readMe}>{readMe}</article>
			</div>
		</div>
	);
};
