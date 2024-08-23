function List({ list, render, styles }) {
    if (!list) return;

    return <ul className={styles}>{list.map(render)}</ul>;
}

export default List;
