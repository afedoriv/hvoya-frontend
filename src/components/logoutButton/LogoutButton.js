import Button from '../../ui/Button';
import { useLogout } from './useLogout';

function LogoutButton({ styles, onClick }) {
    const { isLoggingOut, logout } = useLogout();

    function handleClick() {
        logout();
        onClick?.();
    }

    return (
        <Button styles={styles} onClick={handleClick} disabled={isLoggingOut}>
            Logout
        </Button>
    );
}

export default LogoutButton;
