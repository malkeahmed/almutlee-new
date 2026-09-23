import React from 'react';
import { Users } from 'lucide-react';
import { translations } from '../data/translations';
import { teamMembers } from '../data/newsData';

export default function TeamSection({ lang }) {
  const t = translations[lang];

  return (
    <section id="section-team" style={{ padding: '3rem 0', background: '#ffffff', borderBottom: '1px solid #e2e8f0' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.75rem', borderBottom: '2px solid var(--color-primary)', paddingBottom: '0.75rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{ background: 'var(--color-primary)', color: 'var(--color-secondary)', padding: '0.45rem', borderRadius: '4px', display: 'flex' }}>
              <Users size={22} />
            </div>
            <div>
              <h2 style={{ fontSize: '1.6rem', fontWeight: 900, color: 'var(--color-primary)' }}>
                {t.team.title}
              </h2>
              <p style={{ fontSize: '0.8rem', color: '#64748b' }}>
                {t.team.subtitle}
              </p>
            </div>
          </div>
          <span className="badge-navy" style={{ fontSize: '0.8rem', padding: '0.4rem 0.8rem' }}>
            فريق العمل
          </span>
        </div>

        {/* Team Members Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }} className="grid-4">
          {teamMembers.map((member, i) => (
            <div 
              key={i} 
              className="news-card"
              style={{
                borderRadius: '4px',
                border: '1px solid #e2e8f0',
                padding: '1.5rem',
                textAlign: 'center',
                background: '#f8fafc'
              }}
            >
              <img 
                src={member.image} 
                alt={member.name} 
                style={{ 
                  width: '90px', 
                  height: '90px', 
                  borderRadius: '50%', 
                  border: '3px solid var(--color-secondary)', 
                  objectFit: 'cover',
                  margin: '0 auto 1rem auto',
                  boxShadow: 'var(--shadow-md)'
                }} 
              />
              <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--color-primary)', marginBottom: '0.35rem' }}>
                {member.name}
              </h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-secondary-hover)', fontWeight: 700, marginBottom: '0.5rem' }}>
                {member.role}
              </p>
              <span style={{ fontSize: '0.75rem', color: '#94a3b8', background: '#ffffff', padding: '0.2rem 0.6rem', borderRadius: '4px', border: '1px solid #e2e8f0' }}>
                وكالة أنباء المطلع
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
