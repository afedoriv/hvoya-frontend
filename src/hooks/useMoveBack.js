import { useLocation, useNavigate } from 'react-router-dom';
import { PATHS } from '../utils/constants/routes';

export function useMoveBack(defaultPath = PATHS.HOME) {
    const navigate = useNavigate();
    const location = useLocation();

    const previousPage = location?.state?.previousPath || defaultPath;

    return () => navigate(previousPage);
}
