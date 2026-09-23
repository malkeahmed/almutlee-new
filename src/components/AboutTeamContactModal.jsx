import React, { useState } from 'react';
import { X, Send, Mail, Phone, MapPin, CheckCircle, Users, Info } from 'lucide-react';
import { translations } from '../data/translations';
import { teamMembers } from '../data/newsData';

export default function AboutTeamContactModal({ modalType, onClose, lang }) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const t = translations[lang];

  if (!modalType) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: '750px', borderRadius: '4px', border: '2px solid var(--color-secondary)' }}
      >
        {/* Header */}
        <div style={{
          padding: '1.25rem 1.5rem',
          background: 'var(--color-primary)',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '2px solid var(--color-secondary)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <img src="/logo.png" alt="Logo" style={{ height: '36px', objectFit: 'contain' }} />
            <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--color-secondary)' }}>
              {modalType === 'about' && t.aboutUs.title}
              {modalType === 'team' && t.team.title}
              {modalType === 'contact' && t.contact.title}
            </h3>
          </div>
          <button onClick={onClose} style={{ color: 'white' }}>
            <X size={24} />
          </button>
        </div>

        {/* Modal Body */}
        <div style={{ padding: '1.75rem' }}>
          
          {/* ABOUT US VIEW */}
          {modalType === 'about' && (
            <div>
              <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                <img src="/logo.png" alt="Logo" style={{ height: '70px', margin: '0 auto 1rem auto' }} />
                <h2 style={{ fontSize: '1.5rem', fontWeight: 900, color: 'var(--color-primary)' }}>{t.siteName}</h2>
                <p style={{ color: 'var(--color-secondary)', fontWeight: 700 }}>{t.siteTagline}</p>
              </div>

              <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#334155', marginBottom: '1.5rem', textAlign: 'justify' }}>
                {t.aboutUs.description}
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }} className="grid-2">
                <div style={{ padding: '1.25rem', background: '#f8fafc', borderRadius: '4px', borderRight: '4px solid var(--color-secondary)' }}>
                  <h4 style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--color-primary)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <Info size={18} color="var(--color-secondary)" />
                    {lang === 'ar' ? 'الرسالة' : 'پەیام'}
                  </h4>
                  <p style={{ fontSize: '0.88rem', color: '#64748b', lineHeight: 1.6 }}>{t.aboutUs.mission}</p>
                </div>

                <div style={{ padding: '1.25rem', background: '#f8fafc', borderRadius: '4px', borderRight: '4px solid var(--color-primary)' }}>
                  <h4 style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--color-primary)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <Users size={18} color="var(--color-primary)" />
                    {lang === 'ar' ? 'الرؤية' : 'دیدگا'}
                  </h4>
                  <p style={{ fontSize: '0.88rem', color: '#64748b', lineHeight: 1.6 }}>{t.aboutUs.vision}</p>
                </div>
              </div>
            </div>
          )}

          {/* TEAM VIEW */}
          {modalType === 'team' && (
            <div>
              <p style={{ fontSize: '0.92rem', color: '#64748b', textAlign: 'center', marginBottom: '1.75rem' }}>
                {t.team.subtitle}
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.25rem' }} className="grid-2">
                {teamMembers.map((member, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', background: '#f8fafc', borderRadius: '4px', border: '1px solid #e2e8f0' }}>
                    <img src={member.image} alt={member.name} style={{ width: '60px', height: '60px', borderRadius: '50%', border: '2px solid var(--color-secondary)', objectFit: 'cover' }} />
                    <div>
                      <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--color-primary)' }}>{member.name}</h4>
                      <p style={{ fontSize: '0.8rem', color: 'var(--color-secondary-hover)', fontWeight: 700 }}>{member.role}</p>
                      <span style={{ fontSize: '0.72rem', color: '#94a3b8' }}>وكالة أنباء المطلع</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CONTACT US VIEW */}
          {modalType === 'contact' && (
            <div>
              {formSubmitted ? (
                <div style={{ textAlign: 'center', padding: '2.5rem 1rem' }}>
                  <CheckCircle size={54} color="#22c55e" style={{ margin: '0 auto 1rem auto' }} />
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 900, color: 'var(--color-primary)', marginBottom: '0.5rem' }}>
                    {lang === 'ar' ? 'شكراً لك!' : 'سوپاس بۆ پەیامەکەت!'}
                  </h3>
                  <p style={{ fontSize: '0.95rem', color: '#475569' }}>{t.contact.successMsg}</p>
                </div>
              ) : (
                <div>
                  <p style={{ fontSize: '0.9rem', color: '#64748b', marginBottom: '1.5rem' }}>{t.contact.subtitle}</p>

                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }} className="grid-2">
                      <div>
                        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.35rem', color: 'var(--color-primary)' }}>{t.contact.name}</label>
                        <input type="text" required style={{ width: '100%', padding: '0.65rem 0.85rem', borderRadius: '4px', border: '1px solid #cbd5e1', outline: 'none' }} />
                      </div>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.35rem', color: 'var(--color-primary)' }}>{t.contact.email}</label>
                        <input type="email" required style={{ width: '100%', padding: '0.65rem 0.85rem', borderRadius: '4px', border: '1px solid #cbd5e1', outline: 'none' }} />
                      </div>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.35rem', color: 'var(--color-primary)' }}>{t.contact.subject}</label>
                      <input type="text" required style={{ width: '100%', padding: '0.65rem 0.85rem', borderRadius: '4px', border: '1px solid #cbd5e1', outline: 'none' }} />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.35rem', color: 'var(--color-primary)' }}>{t.contact.message}</label>
                      <textarea rows={4} required style={{ width: '100%', padding: '0.65rem 0.85rem', borderRadius: '4px', border: '1px solid #cbd5e1', outline: 'none', resize: 'vertical' }}></textarea>
                    </div>

                    <button 
                      type="submit"
                      style={{
                        background: 'var(--color-primary)',
                        color: 'var(--color-secondary)',
                        padding: '0.85rem',
                        borderRadius: '4px',
                        fontWeight: 900,
                        fontSize: '0.95rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.5rem',
                        marginTop: '0.5rem'
                      }}
                    >
                      <Send size={18} />
                      <span>{t.contact.send}</span>
                    </button>
                  </form>

                  {/* Contact Info Footer Bar */}
                  <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '1.75rem', paddingTop: '1.25rem', borderTop: '1px solid #e2e8f0', fontSize: '0.82rem', color: '#64748b' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}><Mail size={14} color="var(--color-primary)" /> info@almutlee.com</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}><Phone size={14} color="var(--color-primary)" /> +964 770 000 0000</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}><MapPin size={14} color="var(--color-primary)" /> Baghdad, Iraq</span>
                  </div>
                </div>
              )}
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
