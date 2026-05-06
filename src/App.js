import React from 'react';

function App() {
  return (
    <div style={{ 
      backgroundColor: '#0b0b0b', 
      color: '#00ff00', 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center',
      fontFamily: 'monospace'
    }}>
      <div style={{ 
        border: '2px solid #00ff00', 
        padding: '40px', 
        borderRadius: '15px',
        boxShadow: '0 0 20px #00ff00',
        textAlign: 'center',
        backgroundColor: '#1a1a1a'
      }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>ALIEN SAFESWAP</h1>
        <p style={{ color: '#888', marginBottom: '30px' }}>Secure Blockchain Terminal Active</p>
        
        <div style={{ marginBottom: '20px' }}>
          <input 
            type="number" 
            placeholder="0.00 SOL" 
            style={{ 
              padding: '12px', 
              borderRadius: '5px', 
              border: '1px solid #00ff00', 
              backgroundColor: '#000', 
              color: '#0f0',
              width: '200px'
            }} 
          />
        </div>
        
        <button style={{ 
          backgroundColor: '#00ff00', 
          color: '#000', 
          padding: '12px 30px', 
          border: 'none', 
          borderRadius: '5px', 
          fontWeight: 'bold',
          cursor: 'pointer',
          fontSize: '1rem'
        }}>
          INITIATE SWAP
        </button>
      </div>
      <p style={{ marginTop: '20px', fontSize: '0.8rem', color: '#444' }}>
        App Address: PENDING_REGISTRATION
      </p>
    </div>
  );
}

export default App;