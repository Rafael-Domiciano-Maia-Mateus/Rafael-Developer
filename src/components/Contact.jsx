import { Github, Linkedin, Youtube, Instagram, Mail, MessageCircle } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';
import { useTranslation } from 'react-i18next';

const socials = [
    {
        name: 'LinkedIn',
        handle: '/rafael-maia',
        href: 'https://www.linkedin.com/in/rafael-maia-26b41a308/',
        icon: Linkedin,
        color: '#0077B5',
        bg: '#0077B510',
        border: '#0077B530',
    },
    {
        name: 'YouTube',
        handle: '@dev_rafael_maia',
        href: 'https://www.youtube.com/@dev_rafael_maia',
        icon: Youtube,
        color: '#FF0000',
        bg: '#FF000010',
        border: '#FF000030',
    },
    {
        name: 'WhatsApp',
        handle: '+55 12 99618-6502',
        href: 'https://wa.me/5512996186502',
        icon: MessageCircle,
        color: '#25D366',
        bg: '#25D36610',
        border: '#25D36630',
    },
    {
        name: 'Instagram',
        handle: '@dev_rafael_maia',
        href: 'https://www.instagram.com/dev_rafael_maia/',
        icon: Instagram,
        color: '#E4405F',
        bg: '#E4405F10',
        border: '#E4405F30',
    },
    {
        name: 'GitHub',
        handle: '@Rafael-Domiciano-Maia-Mateus',
        href: 'https://github.com/Rafael-Domiciano-Maia-Mateus',
        icon: Github,
        color: '#e8e8e8',
        bg: '#ffffff08',
        border: '#ffffff15',
    },
    {
        name: 'Email',
        handle: 'rafelmaia.devbr@gmail.com',
        href: 'mailto:rafelmaia.devbr@gmail.com',
        icon: Mail,
        color: '#00ff87',
        bg: '#00ff8710',
        border: '#00ff8730',
    },
];

function SocialCard({ social, delay }) {
    const { t } = useTranslation();
    const ref = useReveal();
    const Icon = social.icon;

    return (
        <a
            ref={ref}
            href={social.href}
            target={social.href.startsWith('mailto') ? '_self' : '_blank'}
            rel='noopener noreferrer'
            className={`reveal reveal-delay-${delay} card p-5 flex items-center gap-4 group no-underline`}
            style={{ '--hover-color': social.color }}
            aria-label={`${social.name}: ${social.handle}`}
        >
            <div
                className='w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110'
                style={{ background: social.bg, border: `1px solid ${social.border}` }}
            >
                <Icon size={22} style={{ color: social.color }} />
            </div>
            <div>
                <p className='font-display text-white font-semibold text-sm group-hover:text-white transition-colors'>{social.name}</p>
                <p className='font-mono text-gray-500 text-xs mt-0.5 group-hover:text-gray-400 transition-colors'>{social.handle}</p>
            </div>
            <div
                className='ml-auto opacity-0 group-hover:opacity-100 transition-all duration-200 text-xs font-mono translate-x-2 group-hover:translate-x-0'
                style={{ color: social.color }}
            >
                →
            </div>
        </a>
    );
}

export default function Contact() {
    const headRef = useReveal();
    const { t } = useTranslation();

    return (
        <section id='contact' className='py-28 relative overflow-hidden'>
            <div className='blob w-80 h-80 bg-accent/5 top-0 right-10' />

            <div className='max-w-6xl mx-auto px-6'>
                {/* Heading */}
                <div ref={headRef} className='reveal text-center mb-16'>
                    <p className='section-label' dangerouslySetInnerHTML={{ __html: t('contact.connect') }} />
                    <h2 className='section-heading' dangerouslySetInnerHTML={{ __html: t('contact.label') }} />
                    <p className='text-gray-500 mt-4 max-w-md mx-auto'>{t('contact.heading')}</p>
                </div>

                {/* Social grid */}
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto'>
                    {socials.map((social, i) => (
                        <SocialCard key={social.name} social={social} delay={Math.min((i % 3) + 1, 5)} />
                    ))}
                </div>

                {/* CTA banner */}
                <div className='mt-16 card p-8 flex flex-col sm:flex-row items-center justify-between gap-6 max-w-4xl mx-auto bg-gradient-to-br from-surface-2 to-surface-3'>
                    <div>
                        <h3 className='font-display text-white text-2xl font-bold mb-1'>{t('contact.opportunities')}</h3>
                        <p className='text-gray-500 text-sm'>{t('contact.descriptionEmail')}</p>
                    </div>
                    <a href='mailto:rafelmaia.devbr@gmail.com' className='btn-primary whitespace-nowrap'>
                        {t('contact.email')}
                    </a>
                </div>
            </div>
        </section>
    );
}
