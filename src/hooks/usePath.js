import { useLocation } from 'react-router-dom';
import { isEqual } from '../utils/helpers/helpers';

export function usePath() {
    const { hash, pathname, search, state: pathState } = useLocation();

    const previousPath = pathState?.previousPath || null;
    const state = {
        previousPath: `${pathname}${search}${hash}`,
    };

    function somePathMatches(list) {
        const anyMatches = list.some((path) => pathMatches(path));
        return anyMatches;
    }
    function pathIncludes(path) {
        const includes = pathname.includes(path);
        return includes;
    }
    function pathMatches(path) {
        return isEqual(path, pathname);
    }

    function prevPathIncludes(path) {
        if (!previousPath) return false;

        const includes = previousPath.includes(path);
        return includes;
    }
    function prevPathMatches(path) {
        return isEqual(path, previousPath);
    }

    return {
        pathname,
        previousPath,
        state,
        somePathMatches,
        pathIncludes,
        pathMatches,
        prevPathIncludes,
        prevPathMatches,
    };
}
