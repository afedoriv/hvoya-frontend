import { TfiAlignJustify } from 'react-icons/tfi';
import Bag from './Bag';
import Button from '../../ui/Button';
import DesktopViewMenu from '../menu/DesktopViewMenu';
import MobileViewMenu from '../menu/MobileViewMenu';
import StudioLogo from './StudioLogo';
import UserMenu from '../menu/UserMenu';
import { useScreenWidth } from '../../hooks/useScreenWidth';
import { ModalProvider } from '../../contexts/ModalContext';

const modalWindowStyles = {
    container:
        'relative z-50 h-full w-full bg-studio-100 3xs:w-[85%] 2xs:w-[80%]',
    button: 'absolute right-2 top-2 cursor-pointer p-4 text-lg text-studio-300 transition-all ease-linear hover:text-studio-600 focus:outline-none focus:ring-1 focus:ring-studio-200 focus:ring-offset-2 focus:transition focus:ease-linear active:text-studio-300 disabled:cursor-default disabled:text-stone-500 disabled:hover:text-stone-400 4xs:right-4 4xs:top-4 3xs:right-6 3xs:top-6 2xs:right-7 2xs:top-7 xs:right-8 xs:top-8',
};

function NavigationBar() {
    const { mobileScreenWidth } = useScreenWidth();

    return (
        <nav className="padding-inline flex items-center justify-between bg-studio-100 py-4">
            <StudioLogo />

            {mobileScreenWidth ? (
                <>
                    <ModalProvider.Open window="menu">
                        <Button
                            ariaLabel="Menu"
                            styles="order-3 ms-0.5 cursor-pointer p-4 text-lg text-studio-300 transition-all ease-linear hover:text-studio-600 focus:outline-none focus:ring-1 focus:ring-studio-200 focus:ring-offset-2 focus:transition focus:ease-linear active:text-studio-300 disabled:cursor-default disabled:text-stone-500 disabled:hover:text-stone-400"
                        >
                            <TfiAlignJustify />
                        </Button>
                    </ModalProvider.Open>

                    <ModalProvider.Window
                        windowName="menu"
                        styles={modalWindowStyles}
                    >
                        <MobileViewMenu />
                    </ModalProvider.Window>
                </>
            ) : (
                <>
                    <DesktopViewMenu />

                    <UserMenu />
                </>
            )}

            <Bag />
        </nav>
    );
}

export default NavigationBar;
