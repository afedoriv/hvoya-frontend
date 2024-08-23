import { createContext, useRef, useState } from 'react';

const ScrollControlContext = createContext();

function ScrollControlProvider({ children }) {
    const [shouldScroll, setShouldScroll] = useState(false);

    const contactRef = useRef(null);
    const shopRef = useRef(null);
    const studioRef = useRef(null);
    const unsubscribeRef = useRef(null);

    const scrollToTop = () => {
        if (!shouldScroll) setShouldScroll(true);
    };
    const resetScroll = () => setShouldScroll(false);

    return (
        <ScrollControlContext.Provider
            value={{
                contactRef,
                shopRef,
                studioRef,
                unsubscribeRef,
                shouldScroll,
                resetScroll,
                scrollToTop,
            }}
        >
            {children}
        </ScrollControlContext.Provider>
    );
}

export { ScrollControlContext, ScrollControlProvider };
