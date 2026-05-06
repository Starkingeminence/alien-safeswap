import React from 'react';
import { AlienMiniAppProvider, useAlienMiniApp } from '@alien-id/miniapps-react';

const SafeSwapUI = () => {
  // Use the updated hook name here
  const miniApp = useAlienMiniApp(); 

  return (
    <div style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh', padding: '20px', fontFamily: 'sans-serif' }}>
      <h1 style={{ color: '#0f0' }}>Alien SafeSwap</h1>
      <p>Status: {miniApp ? 'Connected to Alien' : 'Disconnected'}</p>
      <div style={{ border: '1px solid #333', padding: '20px', borderRadius: '10px' }}>
        <h3>Swap Tokens</h3>
        <input type="number" placeholder="0.0" style={{ width: '100%', padding: '10px', marginBottom: '10px' }} />
        <button style={{ backgroundColor: '#0f0', color: '#000', width: '100%', padding: '10px', fontWeight: 'bold' }}>
          Swap Now
        </button>
      </div>
    </div>
  );
};

function App() {
  return (
    <AlienMiniAppProvider>
      <SafeSwapUI />
    </AlienMiniAppProvider>
  );
}

export default App;