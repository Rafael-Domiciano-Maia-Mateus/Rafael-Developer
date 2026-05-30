import { useEffect, useRef } from 'react';
import { GraduationCap, MapPin, Zap, Calendar } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function About() {
    const ref = useRef(null);
    const { t } = useTranslation();

    useEffect(() => {
        const el = ref.current;
        if (el) {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        el.classList.add('visible');
                    } else {
                        el.classList.remove('visible');
                    }
                },
                { threshold: 0.05 },
            );
            observer.observe(el);
            return () => observer.disconnect();
        }
    }, []);

    const timeline = [
        { year: '2026', key: 'y2026' },
        { year: '2025', key: 'y2025' },
        { year: '2024', key: 'y2024' },
        { year: '2023', key: 'y2023' },
    ];

    return (
        <section id='about' className='relative py-24 overflow-hidden'>
            <div className='blob w-[500px] h-[500px] bg-accent/5 -top-20 -right-20' />

            <div className='relative z-10 max-w-5xl mx-auto px-6 w-full'>
                <div ref={ref} className='reveal space-y-20'>
                    {/* SEÇÃO 1: Bloco de Perfil */}
                    <div className='grid grid-cols-1 lg:grid-cols-12 gap-10 items-start'>
                        {/* Lado Esquerdo: Texto Principal Internacionalizado */}
                        <div className='lg:col-span-7 space-y-5'>
                            <p className='section-label'>{t('about.label')}</p>
                            <h2 className='section-heading text-4xl md:text-5xl'>{t('about.heading')}</h2>
                            <div className='h-px w-12 bg-accent my-6' />

                            <div className='text-gray-400 text-lg leading-relaxed space-y-4 text-left md:text-justify'>
                                <p dangerouslySetInnerHTML={{ __html: t('about.bio.p1') }} />
                                <p dangerouslySetInnerHTML={{ __html: t('about.bio.p2') }} />
                                <p dangerouslySetInnerHTML={{ __html: t('about.bio.p3') }} />
                            </div>
                        </div>

                        {/* Lado Direito: Cards Rápidos */}
                        <div className='lg:col-span-5 lg:pt-16 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-3 w-full'>
                            {[
                                { icon: <GraduationCap size={16} />, label: t('about.cards.labels.education'), value: t('about.cards.education') },
                                { icon: <MapPin size={16} />, label: t('about.cards.labels.location'), value: t('about.cards.location') },
                                { icon: <Zap size={16} />, label: t('about.cards.labels.focus'), value: t('about.cards.focus') },
                            ].map((item, i) => (
                                <div key={i} className='card flex items-center gap-3 p-4 bg-surface-2/40'>
                                    <div className='w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent shrink-0'>
                                        {item.icon}
                                    </div>
                                    <div>
                                        <p className='text-gray-600 text-[10px] font-mono uppercase tracking-wider'>{item.label}</p>
                                        <p className='text-white text-xs font-medium'>{item.value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* SEÇÃO 2: Linha do Tempo Expandida */}
                    <div className='space-y-10'>
                        <div className='flex items-center gap-2 text-gray-500 font-mono text-xs uppercase tracking-widest border-b border-border/40 pb-4'>
                            <Calendar size={14} className='text-accent' />
                            <span>{t('about.journey.title')}</span>
                        </div>

                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 relative'>
                            {timeline.map((event, i) => (
                                <div
                                    key={i}
                                    className={`card p-6 bg-surface-2/20 backdrop-blur-sm relative overflow-hidden group border-l-2 ${
                                        i === 0 ? 'border-l-accent' : 'border-l-border/60 hover:border-l-accent/50'
                                    }`}
                                >
                                    <span className='absolute right-4 top-2 font-mono text-7xl font-bold text-white/[0.02] select-none pointer-events-none transition-all duration-300 group-hover:text-accent/[0.03]'>
                                        {event.year.split(' ')[0]}
                                    </span>

                                    <div className='flex items-center gap-2 mb-3'>
                                        <span
                                            className={`font-mono text-xs font-bold px-2 py-0.5 rounded bg-surface-3 border ${
                                                i === 0 ? 'text-accent border-accent/30' : 'text-gray-400 border-border'
                                            }`}
                                        >
                                            {event.year}
                                        </span>
                                        <h3 className='text-white font-display font-semibold text-sm group-hover:text-accent transition-colors'>
                                            {t(`about.journey.${event.key}.title`)}
                                        </h3>
                                    </div>

                                    <p className='text-gray-400 text-xs leading-relaxed'>{t(`about.journey.${event.key}.desc`)}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
