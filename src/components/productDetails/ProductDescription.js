import List from '../../ui/List';
import ListItem from '../../ui/ListItem';
import { transformString } from '../../utils/helpers/helpers';

function ProductDescription({ list }) {
    return (
        <List
            styles="space-y-2 ps-4 3xs:space-y-2.5 2xs:space-y-3 2xs:ps-5 xs:space-y-4 sm:space-y-3 sm:ps-4 sm:self-start md:space-y-4"
            list={list}
            render={(line) => (
                <ListItem
                    styles="list-disc ps-0.5 font-nunito text-sm font-extralight tracking-wider text-studio-200 3xs:ps-1 3xs:text-base 2xs:ps-1.5 xs:ps-2 xs:font-light sm:ps-1 md:ps-1.5 xl:ps-2 2xl:text-lg"
                    key={`description-li-${transformString(line)}`}
                >
                    {line}
                </ListItem>
            )}
        />
    );
}

export default ProductDescription;
