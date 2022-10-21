import sdk from './1-initialize-sdk.js';
import { readFileSync } from 'fs';

const editionDrop = await sdk.getEditionDrop(
    '0x57af5B1598B6fF16215E0fb3Becd9eC59D8f1179'
);

(async () => {
    try {
        await editionDrop.createBatch([
            {
                name: 'Leaf Village Headband',
                description: 'This NFT will give you access to NarutoDAO!',
                image: readFileSync('scripts/assets/naruto-access.png'),
            },
        ]);
        console.log('✅ Successfully created a new NFT in the drop!');
    } catch (error) {
        console.error('failed to create the new NFT', error);
    }
})();
