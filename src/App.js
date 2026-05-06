import React, { useState } from 'react';
import { MiniAppProvider, useMiniApp } from '@alien-id/miniapps-react';

function SafeSwapTerminal() {
  const { user, wallet } = useMiniApp();
  const [alienAmount, setAlienAmount] = useState('');
  const [solPrice, setSolPrice] = useState('');

  // YOUR PERSONAL WALLET (Where you receive fees)
  const SYSTEM_VAULT = "5jHUYhkfqsd1egCSiEsVDYVX8YRW7UYst4HCqJZCtzyj";

  const handleInitiate = () => {
    if (!alienAmount || !solPrice) {
      alert("ERROR: INPUT REQUIRED.");
      return;
    }
    // This will eventually trigger the Supabase function
    alert(INITIATING SWAP...);
  };

  return (
    <div style={styles.container}>
      <div style={styles.terminal}>
        <h1 style={styles.title}>ALIEN SAFESWAP</h1>
        <p style={styles.status}>[ STATUS: ENCRYPTED ]</p>

        <div style={styles.infoBox}>
          <div>USER: {user?.username || 'CONNECTING...'}</div>
          <div style={styles.addressText}>WALLET: {wallet?.address || '0x...'}</div>
        </div>
        
        <div style={styles.inputGroup}>
          <label style={styles.label}>SELL AMOUNT (ALIEN)</label>
          <input 
            type="number" 
            placeholder="0.00" 
            value={alienAmount}
            onChange={(e) => setAlienAmount(e.target.value)}
            style={styles.input} 
          />
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>BUY PRICE (SOL)</label>
          <input 
            type="number" 
            placeholder="0.00" 
            value={solPrice}
            onChange={(e) => setSolPrice(e.target.value)}
            style={styles.input} 
          />
        </div>
        
        <button onClick={handleInitiate} style={styles.button}>
          EXECUTE SWAP
        </button>
      </div>

      {/* Footer showing the two different addresses */}
      <div style={styles.footer}>
        <div>APP_ID: PASTE_YOUR_DASHBOARD_ADDRESS_HERE</div>
        <div>SYSTEM_VAULT: {SYSTEM_VAULT.slice(0,4)}...{SYSTEM_VAULT.slice(-4)}</div>
      </div>
    </div>
  );
}

function App() {
  return (
    <MiniAppProvider config={{ 
      // THIS IS THE ADDRESS FROM THE DASHBOARD
      appAddress: "0000000b0400000000003fde953b4599"
    }}>
      <SafeSwapTerminal />
    </MiniAppProvider>
  );
}

// Styles kept in a separate object to keep the code clean
const styles = {
  container: { backgroundColor: '#000', color: '#0f0', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontFamily: 'monospace', padding: '20px' },
  terminal: { border: '1px solid #0f0', padding: '30px', borderRadius: '10px', backgroundColor: '#050505', width: '100%', maxWidth: '350px', boxShadow: '0 0 15px rgba(0,255,0,0.2)' },
  title: { margin: '0 0 5px 0', fontSize: '1.5rem', textAlign: 'center' },
  status: { color: '#0f0', opacity: 0.5, fontSize: '0.7rem', textAlign: 'center', marginBottom: '20px' },
  infoBox: { fontSize: '0.7rem', marginBottom: '20px', borderBottom: '1px solid #111', paddingBottom: '10px' },
  addressText: { wordBreak: 'break-all', marginTop: '5px', color: '#888' },
  inputGroup: { marginBottom: '15px' },
  label: { fontSize: '0.6rem', display: 'block', marginBottom: '5px', color: '#0f0' },
  input: { width: '100%', padding: '10px', backgroundColor: '#000', border: '1px solid #0f0', color: '#0f0', outline: 'none', boxSizing: 'border-box' },
  button: { width: '100%', padding: '12px', backgroundColor: '#0f0', color: '#000', border: 'none', fontWeight: 'bold', cursor: 'pointer', marginTop: '10px' },
  footer: { marginTop: '20px', fontSize: '0.6rem', color: '#333', textAlign: 'center', lineHeight: '1.5' }
};

export default App;