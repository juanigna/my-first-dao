import { useContract } from '@thirdweb-dev/react';

const GetToken = () => {
    const { contract: token, isLoading } = useContract(
        '0x85A04b87Aad41f82be55378C7677EcC2Efc4155b',
        'token'
    );

    return !isLoading ?? token;
};

export default GetToken;
