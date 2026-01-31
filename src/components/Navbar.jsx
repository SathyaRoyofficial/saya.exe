import React from 'react';
import { Search, User } from 'lucide-react';

const Navbar = ({ searchQuery, setSearchQuery, onProfileClick }) => {
    return (
        <nav className="glass" style={{
            position: 'sticky',
            top: 0,
            zIndex: 100,
            height: 'var(--nav-height)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 24px',
            borderBottom: '1px solid var(--glass-border)',
            transition: 'all 0.3s var(--ease-smooth)'
        }}>
            {/* Logo */}
            <div className="logo" style={{
                fontWeight: 700,
                fontSize: '1.2rem',
                letterSpacing: '-0.5px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                fontFamily: '"Press Start 2P", system-ui'
            }}>
                <img src="/assets/saya (1).png" alt="Saya Logo" style={{ height: '32px', width: 'auto' }} />
                <span style={{ paddingTop: '4px' }}>Saya.exe</span>
            </div>

            {/* Search Bar */}
            <div className="search-container" style={{
                position: 'absolute',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '100%',
                maxWidth: '400px'
            }}>
                <div style={{
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center'
                }}>
                    <Search size={18} style={{
                        position: 'absolute',
                        left: '16px',
                        color: 'var(--text-secondary)'
                    }} />
                    <input
                        type="text"
                        placeholder="Search your projects..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        style={{
                            width: '100%',
                            padding: '12px 16px 12px 48px',
                            borderRadius: '99px',
                            backgroundColor: 'var(--bg-secondary)',
                            color: 'var(--text-primary)',
                            border: '1px solid transparent',
                            transition: 'all 0.3s ease'
                        }}
                        onFocus={(e) => {
                            e.target.style.borderColor = 'var(--accent)';
                            e.target.style.boxShadow = '0 0 0 4px var(--accent-glow)';
                        }}
                        onBlur={(e) => {
                            e.target.style.borderColor = 'transparent';
                            e.target.style.boxShadow = 'none';
                        }}
                        className="search-input"
                    />
                </div>
            </div>

            {/* Profile Icon */}
            <button
                onClick={onProfileClick}
                style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--bg-secondary)',
                    border: '1px solid var(--glass-border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--text-primary)',
                    transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
                <User size={20} />
            </button>
        </nav>
    );
};

export default Navbar;
