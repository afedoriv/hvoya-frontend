import { Link as RouterLink, NavLink } from 'react-router-dom';

function Link({
    activeStyles,
    end = false,
    link = '',
    state = null,
    ariaLabel,
    styles,
    children,
}) {
    if (activeStyles)
        return (
            <NavLink
                to={link}
                state={state}
                end={end}
                className={({ isActive }) =>
                    isActive
                        ? `${styles} ${activeStyles} pointer-events-none`
                        : styles
                }
                aria-label={ariaLabel}
            >
                {children}
            </NavLink>
        );

    return (
        <RouterLink to={link} state={state} className={styles}>
            {children}
        </RouterLink>
    );
}

export default Link;
