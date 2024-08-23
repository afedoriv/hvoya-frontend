import { cloneElement, useContext, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { TfiClose } from 'react-icons/tfi';
import Box from '../../ui/Box';
import Button from '../../ui/Button';
import { useOutsideClick } from '../../hooks/useOutsideClick';
import { ModalContext } from '../../contexts/ModalContext';

function Window({ windowName, styles, children }) {
    const { elementName, closeWindow } = useContext(ModalContext);
    const { ref: windowRef } = useOutsideClick(closeWindow);

    const displayLoader = windowName === 'loader';
    const displayElement = displayLoader || windowName === elementName;

    useEffect(() => {
        if (displayElement) document.body.style.overflow = 'hidden';

        return () => (document.body.style.overflow = 'scroll');
    }, [displayElement]);

    if (!displayElement) return null;

    return createPortal(
        <Box styles="fixed inset-0 z-40 h-screen w-screen bg-studio-100/10 backdrop-blur-sm transition-all duration-200 ease-linear">
            {displayLoader ? (
                <Box styles="fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-full transition-all duration-200 ease-linear">
                    {children}
                </Box>
            ) : (
                <div ref={windowRef} className={styles.container}>
                    <Button
                        ariaLabel="Close"
                        styles={styles.button}
                        onClick={closeWindow}
                    >
                        <TfiClose />
                    </Button>

                    {cloneElement(children, { onCloseWindow: closeWindow })}
                </div>
            )}
        </Box>,
        document.body,
    );
}

export default Window;
