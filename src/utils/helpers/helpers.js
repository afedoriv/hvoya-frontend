export function filterList(list, filterValue) {
    let filteredList;

    if (filterValue === 'all') filteredList = list;
    else filteredList = list.filter((item) => item.subject === filterValue);

    return filteredList;
}

export function formatCurrency(value) {
    const currency = new Intl.NumberFormat('en', {
        style: 'currency',
        currency: 'USD',
    }).format(value);

    return currency;
}

export function formatDate(string) {
    const date = new Date(string);

    const formattedDate = date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
    return formattedDate;
}

export function formatNumber(number) {
    const twoDigits = number.toString().padStart(2, '0');
    return twoDigits;
}

export function formatSize(value) {
    const size = new Intl.NumberFormat('en', {
        style: 'unit',
        unit: 'inch',
        unitDisplay: 'narrow',
    }).format(value);

    return size;
}

export function formatString(string) {
    const formattedString = string.split('-').join(' ');
    return formattedString;
}

export function formatValue(string) {
    const formattedValue = string.trim().toLowerCase();
    return formattedValue;
}

export function generateList(list, length = 4) {
    const newList = list ? Object.values(list) : [...Array(length).keys()];
    return newList;
}

export function getIconName(icon) {
    const iconName = icon.type.name.replace('Tfi', '');
    return iconName;
}

export function getOptions(list, firstOption) {
    let newList = list || [];

    if (firstOption) {
        newList = [firstOption, ...newList];
    }

    const options = newList.map((filterValue) => ({
        label: filterValue,
        value: toKebabCase(filterValue),
    }));

    return options;
}

export function getStyleVariable(property, value) {
    const variable = getComputedStyle(
        document.documentElement,
    ).getPropertyValue(`--${property}-${value}`);

    return variable;
}

export function getTimeId() {
    return new Date().getTime();
}

export function getUniqueValues(list, key = 'subject') {
    const uniqueValues = new Set(list.map((item) => item[key]));
    const uniqueList = [...uniqueValues].sort();

    return uniqueList;
}

export function getValuesByKey(list, key) {
    const valueList = list?.length ? list.map((obj) => obj[key]) : null;
    return valueList;
}

export function getWindowWidth() {
    const { innerWidth } = window;
    return innerWidth;
}

export function getYear() {
    return new Date().getFullYear();
}

export function isEqual(a, b) {
    return a === b;
}

export function sortList(list, sortingValue) {
    const [key, direction] = sortingValue.split('-');

    const directionModifier = direction === 'ascending' ? 1 : -1;
    const sortedList = list.sort(
        (a, b) => (a[key] < b[key] ? -1 : 1) * directionModifier,
    );

    return sortedList;
}

export function scrollToTop() {
    window.scrollTo({ top: 0 });
}

export function toKebabCase(string) {
    const dashedString = string?.split(' ').join('-');
    return dashedString;
}

export function transformString(string) {
    const shortenedString = string
        .split(' ')
        .slice(0, 3)
        .join('-')
        .toLowerCase();
    return shortenedString;
}
