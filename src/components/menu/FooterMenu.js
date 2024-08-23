import Heading from '../../ui/Heading';
import Link from '../../ui/Link';
import List from '../../ui/List';
import ListItem from '../../ui/ListItem';
import { PATHS } from '../../utils/constants/routes';
import { SECTIONS } from '../../utils/constants/ui';

const columns = [
    [
        { label: 'about', path: PATHS.HOME },
        { label: 'shop', path: PATHS.SHOP },
        { label: 'contact', path: PATHS.CONTACT, section: SECTIONS.CONTACT },
        { label: 'faq', path: PATHS.FAQ },
    ],
    [
        { label: 'location', path: PATHS.CONTACT, section: SECTIONS.STUDIO },
        { label: 'hours', path: PATHS.CONTACT, section: SECTIONS.STUDIO },
        { label: 'unsubscribe', path: PATHS.CONTACT, section: SECTIONS.UNJOIN },
    ],
];

const getState = (link) => (link?.section ? { section: link.section } : null);

function FooterMenu() {
    return (
        <nav className="row-span-1 row-start-1 mx-auto mb-6 2xs:mb-8 md:col-span-1 md:col-start-1 md:m-0 md:grid md:grid-cols-[1fr_1fr] md:gap-x-0 md:self-start">
            <Heading title="Footer Navigation" styles="sr-only" />

            {columns.map((column, index) => (
                <List
                    styles={
                        index === 0
                            ? 'mb-1 space-y-1 md:col-span-1 md:col-start-1 md:mb-0'
                            : 'space-y-1 md:col-span-1 md:col-start-2'
                    }
                    list={column}
                    render={(link) => (
                        <ListItem
                            styles="flex"
                            key={`footer-menu-li-${link.label}`}
                        >
                            <Link
                                link={link.path}
                                state={getState(link)}
                                styles="w-36 cursor-pointer whitespace-nowrap py-1 text-center font-nunito text-sm font-extralight uppercase tracking-wider text-studio-200 transition-all ease-linear hover:text-studio-700 focus:outline-none focus:ring-1 focus:ring-studio-300 focus:ring-offset-0 focus:transition focus:ease-linear active:text-studio-200 2xs:py-1.5 xs:w-40 xs:text-base xs:font-light md:w-min md:px-3.5 md:text-left 2xl:py-2"
                            >
                                {link.label}
                            </Link>
                        </ListItem>
                    )}
                    key={`footer-menu-${index}`}
                />
            ))}
        </nav>
    );
}

export default FooterMenu;
