function ListItem({ styles, onClick, children }) {
    function handleClick() {
        onClick?.();
    }

    return (
        <li className={styles} onClick={handleClick}>
            {children}
        </li>
    );
}

export default ListItem;
