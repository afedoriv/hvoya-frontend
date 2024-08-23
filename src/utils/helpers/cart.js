export function combineData(data, storage) {
    const combinedData = data
        .filter(({ availableQty }) => availableQty >= 1)
        .map(
            ({
                availableQty,
                collection: { collection },
                discount,
                productId,
                regularPrice,
                ...product
            }) => {
                const { id, productQty: qty } = storage.find(
                    ({ productId: itemId }) => itemId === productId,
                );

                return {
                    ...product,
                    availableQty,
                    collection,
                    discount,
                    id,
                    productId,
                    productQty: availableQty < qty ? availableQty : qty,
                    regularPrice,
                    unitPrice: getUnitPrice(regularPrice, discount),
                };
            },
        )
        .sort((a, b) => a.id - b.id);

    return combinedData;
}

export function formatCartItem(product, itemQty) {
    return {
        availableQty: product?.availableQty,
        collection: product?.collection?.collection,
        color: product?.color,
        discount: product?.discount,
        image: {
            alt: product?.image?.alt,
            src: product?.image?.src,
            placeholder: product?.image?.placeholder,
        },
        regularPrice: product?.regularPrice,
        size: product?.size,
        title: product?.title,
        ...itemQty,
    };
}

export function formatData(data) {
    const formattedData = data.map(({ product, productQty }) => {
        return {
            unitPrice: getUnitPrice(product?.regularPrice, product?.discount),
            ...product,
            collection: product.collection.collection,
            productQty,
        };
    });
    return formattedData;
}

export function getUnitPrice(price, discount) {
    const unitPrice = price * (1 - discount);
    return unitPrice;
}
