import { useEffect, useState } from 'react';

const useScreenWidth = (): number => {
	const [width, setWidth] = useState(0);

	if (typeof window === 'undefined') return 0;

	const refresh = () => {
		setWidth((window as any).innerWidth);
	};

	useEffect(refresh, [refresh]);

	(window as any).addEventListener('resize', refresh);

	return width;
};

export default useScreenWidth;
