import React from 'react';
import { ExternalLink } from 'lucide-react';

const ProjectCard = ({ project, index }) => {
    return (
        <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="glass"
            style={{
                display: 'block',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                padding: '16px',
                position: 'relative',
                transition: 'all 0.4s var(--ease-smooth)',
                animationDelay: `${index * 100}ms`,
                cursor: 'pointer',
                height: '100%'
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 12px 30px -10px var(--accent-glow)';
                e.currentTarget.style.borderColor = 'var(--accent)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = 'var(--glass-border)';
            }}
        >
            {/* Thumbnail */}
            <div style={{
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                height: '180px',
                marginBottom: '16px',
                position: 'relative'
            }}>
                <div
                    style={{
                        position: 'absolute',
                        inset: 0,
                        background: `url(${project.image}) center/cover no-repeat`,
                        transition: 'transform 0.6s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />

                {/* Hover Overlay */}
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'rgba(0,0,0,0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    opacity: 0,
                    transition: 'opacity 0.3s ease'
                }}
                    onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
                    onMouseLeave={(e) => e.currentTarget.style.opacity = 0}
                >
                    <span style={{
                        color: '#fff',
                        fontWeight: '600',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        background: 'var(--accent)',
                        padding: '8px 16px',
                        borderRadius: '99px',
                        fontSize: '0.9rem'
                    }}>
                        View Project <ExternalLink size={14} />
                    </span>
                </div>
            </div>

            {/* Content */}
            <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '6px' }}>
                {project.name}
            </h3>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '12px', lineHeight: '1.4' }}>
                {project.caption}
            </p>

            {/* Footer / Tag */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{
                    fontSize: '0.75rem',
                    background: 'rgba(155, 92, 255, 0.1)',
                    color: 'var(--accent)',
                    padding: '4px 10px',
                    borderRadius: '6px',
                    fontWeight: '600'
                }}>
                    {project.tag}
                </span>
            </div>
        </a>
    );
};

export default ProjectCard;
