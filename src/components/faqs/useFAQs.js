import { useQuery } from '@tanstack/react-query';
import { getFAQs } from '../../services/apiFAQs';
import { usePath } from '../../hooks/usePath';
import { PATHS } from '../../utils/constants/routes';

export function useFAQs() {
    const { pathMatches } = usePath();

    const enabled = pathMatches(PATHS.FAQ);

    const {
        isLoading: isLoadingFaqs,
        data: { data: faqs, count } = {},
        error,
    } = useQuery({
        queryKey: ['faqs'],
        queryFn: getFAQs,
        enabled: enabled,
    });

    return {
        isLoadingFaqs,
        error,
        faqs,
        count,
    };
}
