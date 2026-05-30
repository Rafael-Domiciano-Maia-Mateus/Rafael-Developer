import { useState, useEffect } from 'react';
import { Menu, X, Code2, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState('home');
    const { t, i18n } = useTranslation();

    const links = [
        { label: t('nav.home'), href: '#home' },
        { label: t('nav.about'), href: '#about' },
        { label: t('nav.stacks'), href: '#stacks' },
        { label: t('nav.projects'), href: '#projects' },
        { label: t('nav.contact'), href: '#contact' },
    ];

    const toggleLang = () => {
        i18n.changeLanguage(i18n.language === 'en' ? 'pt' : 'en');
    };

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);

            const sections = ['home', 'about', 'stacks', 'projects', 'contact'];
            for (const id of sections.reverse()) {
                const el = document.getElementById(id);
                if (el && window.scrollY >= el.offsetTop - 120) {
                    setActive(id);
                    break;
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNav = (href) => {
        setOpen(false);
        const target = document.querySelector(href);
        if (target) target.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled ? 'bg-surface/90 backdrop-blur-md border-b border-border shadow-lg shadow-black/20' : 'bg-transparent'
            }`}
        >
            <nav className='max-w-6xl mx-auto px-6 h-16 flex items-center justify-between'>
                {/* Logo */}
                <a
                    href='#home'
                    onClick={(e) => {
                        e.preventDefault();
                        handleNav('#home');
                    }}
                    className='flex items-center gap-2 group'
                >
                    <div className='w-8 h-8 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center group-hover:bg-accent/20 transition-colors'>
                        <Code2 size={16} className='text-accent' />
                    </div>
                    <span className='font-display font-bold text-white text-lg'>
                        rm<span className='text-accent'>.</span>dev
                    </span>
                </a>

                {/* Desktop links */}
                <ul className='hidden md:flex items-center gap-1'>
                    {links.map((link) => {
                        const id = link.href.replace('#', '');
                        const isActive = active === id;
                        return (
                            <li key={link.label}>
                                <a
                                    href={link.href}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleNav(link.href);
                                    }}
                                    className={`relative px-4 py-2 rounded-lg font-body text-sm font-medium transition-all duration-200
                    ${isActive ? 'text-accent' : 'text-gray-400 hover:text-white'}`}
                                >
                                    {isActive && <span className='absolute inset-0 rounded-lg bg-accent/5 border border-accent/20' />}
                                    {link.label}
                                </a>
                            </li>
                        );
                    })}
                </ul>

                <div className='hidden md:flex items-center gap-3'>
                    <button
                        onClick={toggleLang}
                        className='flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border text-gray-400 hover:text-white hover:border-accent/40 transition-all text-sm font-mono'
                    >
                        <Globe size={14} />
                        {i18n.language === 'en' ? 'EN' : 'PT'}
                    </button>

                    {/* <a
                        href='#contact'
                        onClick={(e) => {
                            e.preventDefault();
                            handleNav('#contact');
                        }}
                        className='btn-primary text-sm'
                    >
                        {t('nav.hireMe')}
                    </a> */}
                </div>

                {/* Mobile toggle */}
                <button
                    className='md:hidden p-2 rounded-lg border border-border text-gray-400 hover:text-white transition-colors'
                    onClick={() => setOpen(!open)}
                    aria-label='Toggle menu'
                >
                    {open ? <X size={20} /> : <Menu size={20} />}
                </button>
            </nav>

            {/* Mobile menu */}
            <div
                className={`md:hidden border-t border-border bg-surface/95 backdrop-blur-md transition-all duration-300 overflow-hidden ${
                    open ? 'max-h-90 opacity-100' : 'max-h-0 opacity-0'
                }`}
            >
                <ul className='px-6 py-4 flex flex-col gap-1'>
                    {links.map((link) => (
                        <li key={link.label}>
                            <a
                                href={link.href}
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleNav(link.href);
                                }}
                                className='block px-4 py-3 rounded-xl text-gray-300 hover:text-white hover:bg-surface-3 font-body font-medium transition-all'
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                    <li className='pt-2'>
                        <button
                            onClick={toggleLang}
                            className='flex w-full items-center justify-center gap-1.5 px-5 py-3 rounded-xl border border-border text-gray-400 hover:text-white hover:border-accent/40 transition-all text-sm font-mono'
                        >
                            <Globe size={15} />
                            {i18n.language === 'en' ? 'EN' : 'PT'}
                        </button>
                    </li>
                </ul>
            </div>
        </header>
    );
}
