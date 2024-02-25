// import DropDown from './DropDown'
import useScroll from '../../HelperFunctions/useScroll';
import Tldr from '../Tldr';
export const Skills = () => {
	const opacity = useScroll(250);
	return (
		<>
			<div className={opacity ? 'newSection' : ' newSection opacity-100'} id="skills">
				<h1> Skills :</h1>
			</div>

			<Tldr opacity={opacity} />
		</>
	);
};
