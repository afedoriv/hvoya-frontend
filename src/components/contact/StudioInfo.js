import { useContext } from 'react';
import Heading from '../../ui/Heading';
import Text from '../../ui/Text';
import { ScrollControlContext } from '../../contexts/ScrollControlContext';

const styles = {
    heading:
        'text-center font-nunito text-2xl font-light uppercase tracking-wide text-studio-300 xs:text-3xl xs:tracking-wider sm:font-normal md:text-4xl',
    text: 'text-center font-nunito text-[12.5px] font-extralight tracking-wider text-studio-200 not-italic 4xs:text-sm 2xs:text-base xs:font-light 2xl:text-lg',
};

function StudioInfo() {
    const { studioRef } = useContext(ScrollControlContext);

    return (
        <section
            ref={studioRef}
            className="my-10 flex w-full flex-col items-center 4xs:my-12 3xs:pt-1 2xs:my-16 sm:py-3 md:my-20 md:py-0 lg:py-2 2xl:my-24 2xl:py-0"
        >
            <Heading title="Studio Location" styles={styles.heading} />

            <address className="mb-8 mt-6 space-y-0.5 2xs:mb-9 xs:mb-10 xs:mt-8 sm:mb-12 lg:space-y-1 xl:mb-14">
                <Text
                    text="1200 Morris Turnpike, Ground Floor"
                    styles={styles.text}
                />
                <Text text="Short Hills, NJ 07078" styles={styles.text} />
            </address>

            <Heading title="Hours" styles={styles.heading} />

            <Text
                text="Tuesday-Saturday: 11pm-5pm"
                styles={`${styles.text} mt-6 xs:mt-8`}
            />
        </section>
    );
}

export default StudioInfo;
