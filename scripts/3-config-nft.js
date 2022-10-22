import sdk from './1-initialize-sdk.js';
import { readFileSync } from 'fs';

const editionDrop = await sdk.getEditionDrop(
    '0x86eA2df70a44bBb485A576e0B7794320687E82A9'
);

(async () => {
    try {
        await editionDrop.createBatch([
            {
                name: 'The infinity stones',
                description: 'This NFT will give you access to MarvelDAO!',
                image: readFileSync('scripts/assets/gemas.jpg'),
            },
        ]);
        console.log('✅ Successfully created a new NFT in the drop!');
    } catch (error) {
        console.error('failed to create the new NFT', error);
    }
})();
