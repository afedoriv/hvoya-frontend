import { formatCurrency, formatDate } from './helpers';

export function formatOrder(data) {
    if (!data) return null;

    const fullName = data.firstName.concat(' ', data.lastName);

    return {
        address: data.addressOptional
            ? data.address.concat(', ', data.addressOptional)
            : data.address,
        cardholderFullName: data.sameBillingInfo
            ? fullName
            : data.cardholderFirstName.concat(' ', data.cardholderLastName),
        email: data.email,
        fullName,
        giftWrap: data.giftPackaging,
        location: data.city.concat(', ', data.state.toUpperCase()),
        phone: Number(data.phone),
        zipCode: data.zipCode,
    };
}

export function formatOrderItem(order) {
    const { date, number, products, status, total } = order;

    const count = products.reduce(
        (sum, product) => sum + product.productQty,
        0,
    );

    return [
        { text: formatDate(date) },
        { text: `Order #${number}` },
        { text: count > 1 ? `${count} items` : '1 item' },
        { text: formatCurrency(total) },
        { text: status },
    ];
}
