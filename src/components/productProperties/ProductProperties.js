import List from '../../ui/List';
import ProductProperty from './ProductProperty';

const primaryStyles = {
    list: 'col-span-1 flex flex-col space-y-1 md:col-start-2 md:row-span-1 md:row-start-4 lg:space-y-1.5',
    item: 'flex space-x-1.5 font-sans text-sm font-thin capitalize tracking-wider text-stone-800 3xs:text-base 2xl:text-lg',
};
const secondaryStyles = {
    list: 'col-span-2 col-start-1 row-span-1 row-start-3 flex flex-col space-y-0.5 self-start justify-self-start 2xs:col-start-2 2xs:row-start-2 sm:col-span-1 xl:col-span-2 2xl:col-span-1',
    item: 'flex space-x-1 font-nunito text-sm font-light capitalize tracking-wide text-stone-900',
};

function ProductProperties({ properties, type = 'product' }) {
    const primaryLayout = type === 'product';
    const styles = primaryLayout ? primaryStyles : secondaryStyles;

    return (
        <List
            styles={styles.list}
            list={properties}
            render={(property) => (
                <ProductProperty
                    styles={styles.item}
                    property={property}
                    key={`product-property-${property.label}-${property.value}`}
                />
            )}
        />
    );
}

export default ProductProperties;
