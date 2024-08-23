import { Link } from 'react-router-dom';
import { TfiEmail, TfiFacebook, TfiInstagram } from 'react-icons/tfi';
import Heading from '../../ui/Heading';
import List from '../../ui/List';
import ListItem from '../../ui/ListItem';
import { getIconName } from '../../utils/helpers/helpers';
import {
    STUDIO_EMAIL,
    STUDIO_FACEBOOK,
    STUDIO_INSTAGRAM,
} from '../../utils/constants/ui';

const iconList = [
    { label: <TfiEmail />, path: STUDIO_EMAIL },
    { label: <TfiFacebook />, path: STUDIO_FACEBOOK },
    { label: <TfiInstagram />, path: STUDIO_INSTAGRAM },
];

function IconList() {
    return (
        <>
            <Heading title="Follow us on social media" styles="sr-only" />

            <List
                styles="mx-auto mb-6 md:mb-4 flex space-x-1 row-span-1 row-start-3 md:col-span-full md:row-start-2"
                list={iconList}
                render={(link, index) => (
                    <ListItem styles="flex" key={`icon-list-li-${index}`}>
                        <Link
                            to={link.path}
                            target="_blank"
                            aria-label={getIconName(link.label)}
                            className="cursor-pointer p-1 text-lg text-stone-500 transition-all ease-linear hover:text-studio-200 focus:outline-none focus:ring-1 focus:ring-studio-200 focus:ring-offset-0 focus:transition focus:ease-linear active:text-stone-500 disabled:cursor-default disabled:text-stone-400 disabled:hover:text-stone-300 2xs:p-2 lg:text-xl 2xl:p-3"
                        >
                            {link.label}
                        </Link>
                    </ListItem>
                )}
            />
        </>
    );
}

export default IconList;
