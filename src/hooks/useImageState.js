import { useEffect, useState } from 'react';

export function useImageState(src) {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        if (!src) return;

        const image = new Image();
        image.onload = () => setIsLoaded(true);
        image.src = src;
    }, [src]);

    return { isLoaded };
}
