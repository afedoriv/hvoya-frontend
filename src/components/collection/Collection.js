import CollectionDetails from './CollectionDetails';
import Loader from '../../ui/Loader';
import { useCollection } from './useCollection';

function Collection() {
    const { isLoadingCollection } = useCollection();

    return (
        <main className="main-section padding-inline h-fit min-h-[456px] 4xs:min-h-[480px] 3xs:min-h-[392px] 2xs:min-h-[435px] xs:min-h-[519px] sm:min-h-[631px] md:min-h-[596px] lg:min-h-[616px] xl:min-h-[660px] 2xl:min-h-[840px]">
            {isLoadingCollection ? <Loader /> : <CollectionDetails />}
        </main>
    );
}

export default Collection;
