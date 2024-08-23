import { useState } from 'react';

export function useInputFocusState(initialState = false) {
    const [isFocused, setIsFocused] = useState(initialState);

    function handleOnFocus() {
        setIsFocused(true);
    }
    function handleOnBlur() {
        setIsFocused(false);
    }

    return { isFocused, handleOnBlur, handleOnFocus };
}
