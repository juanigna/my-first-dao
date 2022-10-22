import { useAddress, useMetamask, useContract } from '@thirdweb-dev/react';

const GrabAdressess = () => {
    const { contract: editionDrop, isLoading } = useContract(
        '0x86eA2df70a44bBb485A576e0B7794320687E82A9',
        'edition-drop'
    );

    return !isLoading ?? editionDrop;
};

export default GrabAdressess;
