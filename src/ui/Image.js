import { useImageState } from '../hooks/useImageState';

function ImageComponent({
    image: { alt = 'Placeholder', src = '', placeholder = '' },
    styles,
}) {
    const { isLoaded } = useImageState(src);

    const pointerStyle = isLoaded
        ? 'pointer-events-auto'
        : 'pointer-events-none';

    return (
        <figure
            className={`${styles.figure} ${pointerStyle} flex items-center justify-center overflow-hidden bg-zinc-50`}
        >
            <img
                alt={alt}
                src={placeholder}
                className={`${styles.text} h-full w-full`}
                style={{ display: isLoaded ? 'none' : 'block' }}
            />

            <img
                alt={alt}
                src={src}
                className={`${styles.text} ${styles.image}`}
                style={{ display: isLoaded ? 'block' : 'none' }}
            />
        </figure>
    );
}

export default ImageComponent;
