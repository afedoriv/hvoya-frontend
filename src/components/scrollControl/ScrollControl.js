import { useContext, useEffect, useMemo } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { useScreenWidth } from '../../hooks/useScreenWidth';
import { ScrollControlContext } from '../../contexts/ScrollControlContext';
import { scrollToTop } from '../../utils/helpers/helpers';
import { PATHS } from '../../utils/constants/routes';
import { BREAKPOINTS, SECTIONS } from '../../utils/constants/ui';

const breakPoints = [BREAKPOINTS.SM, BREAKPOINTS.MD];

function ScrollControl() {
    const [searchParams] = useSearchParams();
    const { pathname, state, search } = useLocation();
    const { contactRef, shopRef, studioRef, unsubscribeRef, shouldScroll } =
        useContext(ScrollControlContext);
    const { screenStatus } = useScreenWidth(breakPoints);

    const offsetAdjustment = useMemo(() => {
        if (screenStatus[breakPoints[0]]) return 55;
        if (screenStatus[breakPoints[1]]) return 80;
        return 96;
    }, [screenStatus]);

    useEffect(() => {
        const scrollToSection = () => {
            const sections = {
                [SECTIONS.CONTACT]: contactRef,
                [SECTIONS.STUDIO]: studioRef,
                [SECTIONS.UNJOIN]: unsubscribeRef,
            };
            const sectionRef = sections[state.section];

            if (sectionRef?.current) {
                scrollToTop();
                sectionRef.current.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center',
                    inline: 'center',
                });
            }
        };
        const scrollToShop = () => {
            if (shopRef?.current) {
                const distance =
                    searchParams.get('page') > 1
                        ? shopRef.current.offsetTop - offsetAdjustment
                        : 0;

                window.scrollTo({
                    behavior: 'smooth',
                    top: distance,
                });
            }
        };

        const isFaqPage = pathname === PATHS.FAQ && search;
        const isContactPage = pathname === PATHS.CONTACT && state?.section;
        const isShopPage = pathname === PATHS.SHOP && shouldScroll;

        if (isFaqPage) return;
        else if (isContactPage) scrollToSection();
        else if (isShopPage) scrollToShop();
        else scrollToTop();
    }, [pathname, search, state, shouldScroll]);

    return null;
}

export default ScrollControl;
