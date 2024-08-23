import Button from '../../ui/Button';
import Link from '../../ui/Link';
import List from '../../ui/List';
import ListItem from '../../ui/ListItem';
import { usePath } from '../../hooks/usePath';
import { useSettings } from '../settings/useSettings';
import {
    generateCollectionLinks as generateLinks,
    getCollectionPathList as getPathList,
} from '../../utils/helpers/location';
import { toKebabCase } from '../../utils/helpers/helpers';
import { PATHS } from '../../utils/constants/routes';

const buttonStyles =
    'z-30 cursor-pointer px-2.5 py-1 text-center font-nunito text-base font-light uppercase tracking-wider transition-all ease-linear focus:outline-none focus:ring-1 focus:ring-studio-200 focus:ring-offset-2 focus:transition focus:ease-linear disabled:cursor-default disabled:text-studio-300 2xl:px-3 2xl:py-1.5 2xl:text-lg';

function DesktopViewMenu() {
    const { collections } = useSettings();
    const { somePathMatches } = usePath();

    const menu = [
        { label: 'about', path: PATHS.HOME },
        { label: 'collections', links: generateLinks(collections) },
        { label: 'shop', path: PATHS.SHOP },
        { label: 'contact', path: PATHS.CONTACT },
    ];

    const isActivePath = somePathMatches(getPathList(collections));
    const disabled = !collections?.length;

    return (
        <List
            styles="order-2 mx-auto flex space-x-1.5 md:space-x-3 2xl:space-x-4"
            list={menu}
            render={(link) =>
                link?.links ? (
                    <ListItem
                        styles="group/collections relative flex"
                        key={`desktop-menu-li-${toKebabCase(link.button)}`}
                    >
                        <Button
                            styles={
                                isActivePath
                                    ? `${buttonStyles} text-studio-600`
                                    : `${buttonStyles} text-studio-300`
                            }
                            disabled={disabled}
                        >
                            {link.label}
                        </Button>

                        <List
                            styles="invisible absolute left-1/2 top-full z-20 flex w-[175%] -translate-x-1/2 flex-col space-y-2 bg-studio-100 px-3 pb-4 pt-6 opacity-0 transition-all duration-300 ease-linear group-focus-within/collections:visible group-focus-within/collections:opacity-100 group-hover/collections:visible group-hover/collections:opacity-100"
                            list={link.links}
                            render={(link) => (
                                <ListItem
                                    styles="flex"
                                    key={`desktop-submenu-li-${toKebabCase(
                                        link.label,
                                    )}`}
                                >
                                    <Link
                                        link={link.path}
                                        styles="w-full cursor-pointer p-0.5 text-center font-nunito text-base font-light capitalize tracking-wider text-studio-300 transition-all ease-linear hover:text-studio-600 focus:outline-none focus:ring-1 focus:ring-studio-200 focus:ring-offset-2 focus:transition focus:ease-linear active:text-studio-300 2xl:py-1 2xl:text-lg"
                                        activeStyles="text-studio-600"
                                    >
                                        {link.label}
                                    </Link>
                                </ListItem>
                            )}
                        />
                    </ListItem>
                ) : (
                    <ListItem
                        styles="flex"
                        key={`desktop-menu-li-${toKebabCase(link.label)}`}
                    >
                        <Link
                            link={link.path}
                            styles="z-30 cursor-pointer px-2.5 py-1 text-center font-nunito text-base font-light uppercase tracking-wider text-studio-300 transition-all ease-linear hover:text-studio-600 focus:outline-none focus:ring-1 focus:ring-studio-200 focus:ring-offset-2 focus:transition focus:ease-linear active:text-studio-300 2xl:px-3 2xl:py-1.5 2xl:text-lg"
                            activeStyles="text-studio-600"
                            end={true}
                        >
                            {link.label}
                        </Link>
                    </ListItem>
                )
            }
        />
    );
}

export default DesktopViewMenu;
