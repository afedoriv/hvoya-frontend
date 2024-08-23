import { useEffect, useMemo, useState } from 'react';
import { getWindowWidth } from '../utils/helpers/helpers';
import { BREAKPOINTS } from '../utils/constants/ui';

export function useScreenWidth(breakPointList = [BREAKPOINTS.SM]) {
    const [screenWidth, setScreenWidth] = useState(getWindowWidth());

    const screenStatus = useMemo(() => {
        const status = {};

        breakPointList.forEach((point) => {
            status[point] = screenWidth < point;
        });

        return status;
    }, [screenWidth, breakPointList]);

    useEffect(() => {
        function handleWindowResize() {
            setScreenWidth(getWindowWidth());
        }

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    const mobileScreenWidth = screenStatus[breakPointList[0]];

    return { mobileScreenWidth, screenStatus };
}
