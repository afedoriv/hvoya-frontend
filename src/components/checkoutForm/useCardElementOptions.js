import { useMemo } from 'react';
import { useScreenWidth } from '../../hooks/useScreenWidth';
import { getStyleVariable } from '../../utils/helpers/helpers';
import { BREAKPOINTS } from '../../utils/constants/ui';

const colorBlack = getStyleVariable('color', 'studio-950');
const colorGreen = getStyleVariable('color', 'studio-200');
const colorRed = getStyleVariable('color', 'studio-300');
const fontPrimary = getStyleVariable('font', 'nunito');

const breakPoints = [BREAKPOINTS.XS, BREAKPOINTS.LG];

export function useCardElementOptions() {
    const { screenStatus } = useScreenWidth(breakPoints);

    const mobileScreenWidth = screenStatus[breakPoints[0]];
    const mediumScreenWidth = screenStatus[breakPoints[1]];

    const cardElementOptions = useMemo(
        () => ({
            style: {
                base: {
                    color: colorBlack,
                    fontFamily: fontPrimary,
                    fontSize: mobileScreenWidth ? '12px' : '13.9px',
                    fontWeight: '300',
                    letterSpacing: '1.5px',
                    iconColor: colorGreen,

                    '::placeholder': {
                        color: colorBlack,
                        fontFamily: fontPrimary,
                        fontSize: mediumScreenWidth ? '13px' : '15.2px',
                        fontWeight: '300',
                        letterSpacing: '1px',
                    },
                },
                invalid: {
                    iconColor: colorRed,
                    color: colorBlack,
                },
            },
        }),
        [mobileScreenWidth, mediumScreenWidth],
    );

    return cardElementOptions;
}
