import Description from '../../ui/Description';
import Heading from '../../ui/Heading';

const styles = {
    container:
        'ms-2 space-y-6 border-s border-stone-400 px-4 py-1 2xs:space-y-8 2xs:ps-6 md:ms-auto md:w-2/3 lg:ps-10 2xl:space-y-10',
    text: 'font-nunito text-sm font-extralight tracking-wider text-studio-200 2xs:text-base xs:font-light 2xl:text-lg',
};

function Intro({ title, content }) {
    return (
        <section className="mb-10 mt-8 flex flex-col items-start space-y-6 2xs:mb-12 2xs:mt-10 2xs:space-y-8 xs:mb-14 xs:mt-12 sm:mb-16 sm:mt-14 md:my-24 md:flex-row md:items-center md:space-y-0 lg:my-28 xl:my-32">
            <Heading
                title={title}
                styles="px-1 font-nunito text-7xl font-light lowercase tracking-wider text-stone-900 2xl:text-8xl"
            />

            <Description description={content} styles={styles} />
        </section>
    );
}

export default Intro;
