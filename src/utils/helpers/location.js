import { PATHS } from '../constants/routes';

export function generateCollectionLinks(list) {
    if (!list) return [];

    const linkList = list.map((collectionName) => ({
        label: collectionName,
        path: getCollectionPath(collectionName),
    }));
    return linkList;
}

export function getCollectionPath(name) {
    const pathname = PATHS.COLLECTION.replace(':collection', name);
    return pathname;
}

export function getCollectionPathList(list) {
    if (!list) return [];

    const pathList = list?.map((collectionName) =>
        getCollectionPath(collectionName),
    );
    return pathList;
}

export function getPathSegment(path) {
    const pathSegment = path.split('/').pop();
    return pathSegment;
}

export function getProductPath(id) {
    const pathname = PATHS.PRODUCT.replace(':id', id);
    return pathname;
}
