import Heading from './Heading';
import Text from './Text';

function Form({ title, subtitle, onSubmit, styles, children }) {
    return (
        <>
            {title && <Heading title={title} styles={styles.title} />}

            {subtitle && <Text text={subtitle} styles={styles.subtitle} />}

            <form className={styles.form} onSubmit={onSubmit}>
                {children}
            </form>
        </>
    );
}

export default Form;
