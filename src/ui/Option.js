function Option({ label, value, disabled = false }) {
    return (
        <option value={value} disabled={disabled}>
            {label}
        </option>
    );
}

export default Option;
