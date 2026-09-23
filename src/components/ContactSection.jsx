import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { translations } from '../data/translations';

export default function ContactSection({ lang }) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const t = translations[lang];

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
    }, 4000);
  };

  return (
    <section id="section-contact" style={{ padding: '3rem 0', background: '#f4f6fb', borderBottom: '1px solid #e2e8f0' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.75rem', borderBottom: '2px solid var(--color-primary)', paddingBottom: '0.75rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{ background: 'var(--color-primary)', color: 'var(--color-secondary)', padding: '0.45rem', borderRadius: '4px', display: 'flex' }}>
              <Mail size={22} />
            </div>
            <div>
              <h2 style={{ fontSize: '1.6rem', fontWeight: 900, color: 'var(--color-primary)' }}>
                {t.contact.title}
              </h2>
              <p style={{ fontSize: '0.8rem', color: '#64748b' }}>
                {t.contact.subtitle}
              </p>
            </div>
          </div>
          <span className="badge-gold" style={{ fontSize: '0.8rem', padding: '0.4rem 0.8rem' }}>
            اتصل بنا
          </span>
        </div>

        {/* Contact Container */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '2rem' }}>
          
          {/* Info Side (4 Cols) */}
          <div style={{ gridColumn: 'span 4' }} className="grid-col-mobile">
            <div style={{ background: '#102042', color: 'white', padding: '1.75rem', borderRadius: '4px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <img src="/logo.png" alt="Logo" style={{ height: '50px', marginBottom: '1rem' }} />
                <h3 style={{ fontSize: '1.4rem', fontWeight: 900, color: 'var(--color-secondary)', marginBottom: '0.5rem' }}>المطلع</h3>
                <p style={{ fontSize: '0.85rem', color: '#cbd5e1', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  {t.siteTagline}
                </p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.9rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{ background: 'rgba(255,190,0,0.15)', color: 'var(--color-secondary)', padding: '0.5rem', borderRadius: '4px' }}>
                    <Mail size={18} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.75rem', color: '#94a3b8', display: 'block' }}>البريد الإلكتروني</span>
                    <span style={{ fontWeight: 700 }}>info@almutlee.com</span>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{ background: 'rgba(255,190,0,0.15)', color: 'var(--color-secondary)', padding: '0.5rem', borderRadius: '4px' }}>
                    <Phone size={18} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.75rem', color: '#94a3b8', display: 'block' }}>الهاتف والإدارة</span>
                    <span style={{ fontWeight: 700 }}>+964 770 000 0000</span>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{ background: 'rgba(255,190,0,0.15)', color: 'var(--color-secondary)', padding: '0.5rem', borderRadius: '4px' }}>
                    <MapPin size={18} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.75rem', color: '#94a3b8', display: 'block' }}>المقر الرئيسي</span>
                    <span style={{ fontWeight: 700 }}>بغداد - العراق</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side (8 Cols) */}
          <div style={{ gridColumn: 'span 8' }} className="grid-col-mobile">
            <div style={{ background: '#ffffff', padding: '1.75rem', borderRadius: '4px', border: '1px solid #e2e8f0', boxShadow: 'var(--shadow-sm)' }}>
              {formSubmitted ? (
                <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                  <CheckCircle size={54} color="#22c55e" style={{ margin: '0 auto 1rem auto' }} />
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 900, color: 'var(--color-primary)', marginBottom: '0.5rem' }}>
                    {lang === 'ar' ? 'تم استلام رسالتك بنجاح!' : 'پەیامەکەت گەیشت!'}
                  </h3>
                  <p style={{ color: '#64748b' }}>{t.contact.successMsg}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }} className="grid-2">
                    <div>
                      <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 700, marginBottom: '0.35rem', color: 'var(--color-primary)' }}>{t.contact.name}</label>
                      <input type="text" required style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid #cbd5e1', outline: 'none' }} />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 700, marginBottom: '0.35rem', color: 'var(--color-primary)' }}>{t.contact.email}</label>
                      <input type="email" required style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid #cbd5e1', outline: 'none' }} />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 700, marginBottom: '0.35rem', color: 'var(--color-primary)' }}>{t.contact.subject}</label>
                    <input type="text" required style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid #cbd5e1', outline: 'none' }} />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 700, marginBottom: '0.35rem', color: 'var(--color-primary)' }}>{t.contact.message}</label>
                    <textarea rows={4} required style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid #cbd5e1', outline: 'none', resize: 'vertical' }}></textarea>
                  </div>

                  <button 
                    type="submit"
                    style={{
                      background: 'var(--color-primary)',
                      color: 'var(--color-secondary)',
                      padding: '0.85rem 1.5rem',
                      borderRadius: '4px',
                      fontWeight: 900,
                      fontSize: '0.95rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem',
                      alignSelf: 'flex-start',
                      boxShadow: 'var(--shadow-gold)'
                    }}
                  >
                    <Send size={18} />
                    <span>{t.contact.send}</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
