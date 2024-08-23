import Option from './Option';

function Select({ options, defaultOption, onChange, styles }) {
    return (
        <select className={styles} value={defaultOption} onChange={onChange}>
            {options.map(({ label, value }) => (
                <Option
                    label={label}
                    value={value}
                    key={`select-option-${value}`}
                />
            ))}
        </select>
    );
}

export default Select;
