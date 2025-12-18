import React from 'react';

export default function HolaMundo() {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            background: '#2d5a27', // Dark green background
            gap: '2rem'
        }}>
            <div style={{
                fontSize: '120px',
                lineHeight: '1'
            }}>
                🐸
            </div>
            <h1 style={{
                fontSize: 'clamp(24px, 6vw, 48px)',
                color: '#ffff00', // Yellow text
                textAlign: 'center',
                padding: '0 16px',
                fontFamily: 'system-ui, -apple-system, sans-serif',
                fontWeight: '900',
                textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
            }}>
                HOLA SOY EL JHUE TONTOH
            </h1>
        </div>
    );
}
