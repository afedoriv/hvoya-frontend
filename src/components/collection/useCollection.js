import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { usePath } from '../../hooks/usePath';
import { getCollection } from '../../services/apiCollection';
import { getCollectionPath } from '../../utils/helpers/location';

export function useCollection() {
    const { collection: collectionName } = useParams();
    const { pathMatches } = usePath();

    const name = collectionName.replaceAll('-', ' ');
    const enabled = pathMatches(getCollectionPath(name));

    const {
        isLoading: isLoadingCollection,
        data,
        error,
    } = useQuery({
        queryKey: ['collection', name],
        queryFn: () => getCollection(name),
        retry: false,
        enabled: enabled,
    });

    const collection = data?.collection || undefined;
    const coverImage = data?.coverImage || null;
    const products = data?.products || null;

    return {
        isLoadingCollection,
        error,
        collection,
        coverImage,
        products,
    };
}
