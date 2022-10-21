import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';

import './styles/globals.css';

// Import thirdweb provider and Goerli ChainId
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react';

// This is the chainId your dApp will work on.
const activeChainId = ChainId.Goerli;

// Wrap your app with the thirdweb provider
ReactDOM.render(
    <React.StrictMode>
        <ThirdwebProvider desiredChainId={activeChainId}>
            <App />
        </ThirdwebProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
