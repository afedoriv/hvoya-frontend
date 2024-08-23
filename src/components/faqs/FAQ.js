import { TfiMinus, TfiPlus } from 'react-icons/tfi';
import Box from '../../ui/Box';
import Description from '../../ui/Description';
import ListItem from '../../ui/ListItem';
import Text from '../../ui/Text';
import { useOpenState } from '../../hooks/useOpenState';
import { formatNumber } from '../../utils/helpers/helpers';

const commonStyles = {
    listItem:
        'mb-4 cursor-pointer border-t-2 shadow-lg shadow-studio-400 transition-colors duration-100 ease-linear last:mb-0 2xs:mb-6',
    number: 'font-sans text-base font-light tracking-wider 2xs:text-lg xs:text-[18.5px] xs:font-normal md:text-[19px] xl:text-[19.5px] 2xl:text-xl',
    text: 'mx-3 font-nunito text-sm font-normal tracking-wide 2xs:mx-4 2xs:text-base xs:text-[16.5px] md:text-[17px] md:tracking-wider lg:mx-6 xl:text-[17.5px] 2xl:text-lg',
};
const styles = {
    container: 'px-4 pb-4 2xs:px-6 2xs:pb-6 2xl:px-8 2xl:pb-8',
    text: 'font-nunito text-[12.5px] font-extralight tracking-wider text-stone-900 4xs:text-[13px] 2xs:text-sm 2xs:font-light xs:text-[14.5px] xs:leading-[22px] md:text-[15px] md:leading-[23px] xl:text-[15.5px] xl:leading-[24px] 2xl:text-base 2xl:leading-[25px]',
};

function FAQ({ faq: { number, question, answer } }) {
    const [isOpen, toggleOpen] = useOpenState();

    return (
        <ListItem
            onClick={toggleOpen}
            styles={`${commonStyles.listItem} ${
                isOpen ? 'border-studio-400' : 'border-studio-900'
            }`}
        >
            <Box styles="flex items-center p-4 2xs:p-6 2xl:px-8 2xl:py-6">
                <span
                    className={`${commonStyles.number} ${
                        isOpen ? 'text-studio-300' : 'text-stone-500'
                    }`}
                >
                    {formatNumber(number)}
                </span>

                <Text
                    styles={`${commonStyles.text} ${
                        isOpen ? 'text-stone-500' : 'text-stone-700'
                    }`}
                    text={question}
                />

                <span
                    className="ms-auto font-sans text-base font-extrabold xl:text-lg"
                    aria-label={isOpen ? 'Close' : 'Open'}
                >
                    {isOpen ? (
                        <TfiMinus className="text-studio-600" />
                    ) : (
                        <TfiPlus className="text-stone-500" />
                    )}
                </span>
            </Box>

            {isOpen && <Description description={answer} styles={styles} />}
        </ListItem>
    );
}

export default FAQ;
