import NavigationBar from './NavigationBar';
import Promo from './Promo';

function Header() {
    return (
        <header className="z-30 row-span-1 row-start-1">
            <Promo />

            <NavigationBar />
        </header>
    );
}

export default Header;
