import FooterMenu from '../menu/FooterMenu';
import IconList from './IconList';
import StudioLink from './StudioLink';
import SubscribeForm from '../subscribeForm/SubscribeForm';

function Footer() {
    return (
        <footer className="padding-inline row-span-1 row-start-3 grid grid-rows-[auto_auto_auto_auto] bg-studio-400 py-8 2xs:py-10 sm:py-12 md:grid-cols-[1fr_1fr] md:grid-rows-[auto_auto_auto] md:gap-x-24 md:pb-10 md:pt-14 xl:gap-x-20">
            <FooterMenu />
            <SubscribeForm />
            <IconList />
            <StudioLink />
        </footer>
    );
}

export default Footer;
