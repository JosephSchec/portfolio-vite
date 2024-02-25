import { useState, useEffect } from 'react';

export default function useScroll(height: number) {
	const [functionName, setFunctionName] = useState(false);
	const doScrollStuff = () => {
		if (window.scrollY < height) {
			setFunctionName(true);
		} else {
			setFunctionName(false);
		}
	};
	useEffect(() => {
		window.addEventListener('scroll', doScrollStuff);
	});
	return functionName;
}
