import React from 'react';

const Footer = () => {
    return (
        <footer style={{
            textAlign: 'center',
            padding: '40px 0',
            marginTop: '60px',
            color: 'var(--text-secondary)',
            fontSize: '0.9rem',
            borderTop: '1px solid rgba(255,255,255,0.05)',
            background: 'rgba(11, 15, 20, 0.5)'
        }}>
            <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
                <span>Made with</span>
                <span style={{
                    color: '#FF4F4F',
                    animation: 'pulse 1.5s infinite',
                    display: 'inline-block'
                }}>
                    ❤️
                </span>
                <span>@Roy</span>
            </div>
        </footer>
    );
};

export default Footer;
