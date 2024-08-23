import { useState } from 'react';

export function useOpenState(initialState = false) {
    const [isOpen, setIsOpen] = useState(initialState);

    function toggleOpen() {
        setIsOpen((isOpen) => !isOpen);
    }

    return [isOpen, toggleOpen];
}
