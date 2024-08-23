import { cloneElement, useContext } from 'react';
import { ModalContext } from '../../contexts/ModalContext';

function Open({ window, children }) {
    const { openWindow } = useContext(ModalContext);

    return cloneElement(children, {
        onOpenWindow: () => openWindow(window),
    });
}
export default Open;
