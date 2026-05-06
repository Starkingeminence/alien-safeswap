import React, { useState } from 'react';
import { MiniAppProvider, useMiniApp } from '@alien-id/miniapps-react';
import { Shield, ArrowRightLeft, User, Wallet } from 'lucide-react';

// --- COMPONENTS ---

const EscrowUI = () => {
  const { user, wallet } = useMiniApp();
  const [amount, setAmount] = useState('');
  const [price, setPrice] = useState('');

  const handleCreateTrade = () => {
    alert(`Creating trade: ${amount} Alien for ${price} SOL`);
    // This is where we will call your backend later!
  };

  return (
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <Shield color="#00FFCC" size={32} />
        <h1 style={styles.title}>Alien SafeSwap</h1>
      </header>

      {/* User Info Card */}
      <div style={styles.card}>
        <div style={styles.row}>
          <User size={20} color="#888" />
          <span style={styles.label}>ID: {user?.username || 'Guest'}</span>
        </div>
        <div style={styles.row}>
          <Wallet size={20} color="#888" />
          <span style={styles.label}>Wallet: {wallet?.address?.slice(0, 6)}...{wallet?.address?.slice(-4)}</span>
        </div>
      </div>

      {/* Trade Form */}
      <div style={styles.formCard}>
        <h2 style={styles.subtitle}>Create P2P Escrow</h2>
        
        <label style={styles.inputLabel}>You Sell (Alien Tokens)</label>
        <input 
          style={styles.input} 
          type="number" 
          placeholder="0.00" 
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <div style={{ textAlign: 'center', margin: '10px 0' }}>
          <ArrowRightLeft size={24} color="#00FFCC" />
        </div>

        <label style={styles.inputLabel}>You Receive (SOL)</label>
        <input 
          style={styles.input} 
          type="number" 
          placeholder="0.00" 
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <button style={styles.button} onClick={handleCreateTrade}>
          Generate Secure Link
        </button>
      </div>

      <p style={styles.footer}>Powered by Alien ID Trust Infrastructure</p>
    </div>
  );
};

// --- MAIN APP WRAPPER ---

function App() {
  const miniAppConfig = {
    // You will replace this with the ID from your dashboard in the next step
    appAddress: 'PENDING_REGISTRATION', 
  };

  return (
    <MiniAppProvider config={miniAppConfig}>
      <EscrowUI />
    </MiniAppProvider>
  );
}

// --- STYLES (Alien Dark Theme) ---

const styles = {
  container: {
    backgroundColor: '#0a0a0a',
    color: '#ffffff',
    minHeight: '100vh',
    padding: '20px',
    fontFamily: 'sans-serif',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '30px',
  },
  title: { fontSize: '24px', fontWeight: 'bold', color: '#00FFCC' },
  card: {
    backgroundColor: '#1a1a1a',
    padding: '15px',
    borderRadius: '12px',
    marginBottom: '20px',
    border: '1px solid #333',
  },
  formCard: {
    backgroundColor: '#1a1a1a',
    padding: '20px',
    borderRadius: '16px',
    border: '1px solid #00FFCC33',
  },
  row: { display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' },
  label: { color: '#ccc', fontSize: '14px' },
  subtitle: { fontSize: '18px', marginBottom: '20px' },
  inputLabel: { display: 'block', color: '#888', fontSize: '12px', marginBottom: '5px' },
  input: {
    width: '100%',
    backgroundColor: '#2a2a2a',
    border: '1px solid #444',
    borderRadius: '8px',
    padding: '12px',
    color: '#fff',
    fontSize: '16px',
    marginBottom: '15px',
    boxSizing: 'border-box',
  },
  button: {
    width: '100%',
    backgroundColor: '#00FFCC',
    color: '#000',
    border: 'none',
    borderRadius: '8px',
    padding: '14px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    marginTop: '10px',
  },
  footer: { textAlign: 'center', color: '#444', fontSize: '12px', marginTop: '40px' }
};

export default App;