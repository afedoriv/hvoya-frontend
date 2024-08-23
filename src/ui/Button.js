function Button({
    type = 'button',
    ariaLabel,
    styles,
    onClick,
    onOpenWindow,
    disabled = false,
    children,
}) {
    function handleOnClick() {
        onClick?.();
        onOpenWindow?.();
    }

    return (
        <button
            type={type}
            className={styles}
            onClick={handleOnClick}
            disabled={disabled}
            aria-label={ariaLabel}
        >
            {children}
        </button>
    );
}

export default Button;
