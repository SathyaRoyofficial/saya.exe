import React from 'react';
import { X, Github, Twitter, Linkedin, Globe } from 'lucide-react';

const ProfilePanel = ({ isOpen, onClose }) => {
    return (
        <>
            {/* Backdrop */}
            <div
                onClick={onClose}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    backdropFilter: 'blur(4px)',
                    zIndex: 999,
                    opacity: isOpen ? 1 : 0,
                    visibility: isOpen ? 'visible' : 'hidden',
                    transition: 'all 0.4s var(--ease-smooth)'
                }}
            />

            {/* Panel */}
            <div
                style={{
                    position: 'fixed',
                    top: 0,
                    right: 0,
                    width: '320px',
                    height: '100%',
                    background: 'rgba(11, 15, 20, 0.95)',
                    borderLeft: '1px solid var(--glass-border)',
                    zIndex: 1000,
                    transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
                    transition: 'transform 0.4s var(--ease-smooth)',
                    padding: '24px',
                    display: 'flex',
                    flexDirection: 'column'
                }}
            >
                <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '40px' }}>
                    <button
                        onClick={onClose}
                        style={{
                            padding: '8px',
                            borderRadius: '50%',
                            background: 'var(--bg-secondary)',
                            color: 'var(--text-secondary)'
                        }}
                    >
                        <X size={20} />
                    </button>
                </div>

                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                    {/* Avatar Placeholder */}
                    <div style={{
                        width: '100px',
                        height: '100px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, var(--accent) 0%, #4F8CFF 100%)',
                        marginBottom: '24px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '2rem',
                        fontWeight: 'bold',
                        color: '#fff',
                        boxShadow: '0 0 20px var(--accent-glow)'
                    }}>
                        SR
                    </div>

                    <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '8px' }}>Sathya Roy</h2>
                    <p style={{ color: 'var(--accent)', fontSize: '0.9rem', marginBottom: '16px', fontWeight: '500' }}>
                        Full Stack Developer | Vibecode Creator
                    </p>

                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '32px' }}>
                        Building digital experiences that blend aesthetics with performance.
                    </p>

                    <div style={{ display: 'flex', gap: '16px' }}>
                        {[
                            { icon: Github, label: 'GitHub' },
                            { icon: Twitter, label: 'Twitter' },
                            { icon: Linkedin, label: 'LinkedIn' },
                            { icon: Globe, label: 'Website' }
                        ].map((Item, index) => (
                            <a
                                key={index}
                                href="#"
                                style={{
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '12px',
                                    background: 'var(--bg-secondary)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'var(--text-primary)',
                                    transition: '0.2s'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = 'var(--accent)';
                                    e.currentTarget.style.transform = 'translateY(-2px)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = 'var(--bg-secondary)';
                                    e.currentTarget.style.transform = 'translateY(0)';
                                }}
                            >
                                <Item.icon size={20} />
                            </a>
                        ))}
                    </div>
                </div>

                <div style={{ textAlign: 'center', color: 'var(--text-secondary)', fontSize: '0.8rem' }}>
                    &copy; 2026 Roy Labs
                </div>
            </div>
        </>
    );
};

export default ProfilePanel;
