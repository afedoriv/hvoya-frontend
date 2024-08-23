import Text from '../../ui/Text';

function LowStock({ stock, soldOut }) {
    const text = soldOut ? 'sold out' : `only ${stock} left`;

    return (
        <Text
            text={text}
            styles={`mt-2 font-sans text-sm font-light uppercase tracking-wider 3xs:mt-2.5 xl:text-base 3xl:font-normal ${
                soldOut ? 'text-stone-500' : 'text-stone-900'
            }`}
        />
    );
}

export default LowStock;
