import { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, Github, ExternalLink } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';
import { useTranslation } from 'react-i18next';

const TRUNCATE_LENGTH = 120;

function ProjectCard({ project }) {
    const [expanded, setExpanded] = useState(false);
    const { t } = useTranslation();
    const isLong = project.description.length > TRUNCATE_LENGTH;
    const displayText = !expanded && isLong ? project.description.slice(0, TRUNCATE_LENGTH) + '…' : project.description;

    return (
        <div className='flex-shrink-0 w-full sm:w-[380px] lg:w-[420px] card p-6 flex flex-col gap-4 select-none' style={{ scrollSnapAlign: 'start' }}>
            {/* Header */}
            <div
                className='w-full h-48 rounded-xl flex items-center justify-center relative overflow-hidden'
                style={{ background: `linear-gradient(135deg, ${project.color}10, ${project.color}20)`, border: `1px solid ${project.color}25` }}
                aria-label={project.title}
            >
                <div className='w-50 h-50 flex items-center justify-center'>
                    <img src={project.emoji} alt={project.title} className='max-w-full max-h-full object-contain' />
                </div>

                <div
                    className='absolute bottom-0 left-0 right-0 h-1'
                    style={{ background: `linear-gradient(90deg, ${project.color}80, transparent)` }}
                />
            </div>

            {/* Body */}
            <div className='flex-1 flex flex-col'>
                <h3 className='font-display text-white text-xl font-bold mb-2'>{project.title}</h3>
                <p className='text-gray-400 text-sm leading-relaxed flex-1'>
                    {displayText}
                    {isLong && (
                        <button
                            onClick={() => setExpanded(!expanded)}
                            className='ml-1 text-accent hover:text-accent-dim font-medium text-sm transition-colors'
                        >
                            {expanded ? t('projects.showLess') : t('projects.readMore')}
                        </button>
                    )}
                </p>

                {/* Tech tags */}
                <div className='flex flex-wrap gap-2 mt-4'>
                    {project.tech.map((t) => (
                        <span key={t} className='font-mono text-xs px-2.5 py-1 rounded-lg bg-surface-3 border border-border text-gray-400'>
                            {t}
                        </span>
                    ))}
                </div>
            </div>

            {/* Footer */}
            <div className='flex gap-2 pt-2 border-t border-border'>
                <a
                    href={project.github}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center gap-1.5 btn-ghost text-sm flex-1 justify-center'
                    aria-label={`View ${project.title} on GitHub`}
                >
                    <Github size={15} />
                    GitHub
                </a>
                {/* <a
                    href={project.github}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center gap-1.5 px-4 py-2.5 rounded-xl transition-all duration-200 text-sm font-display font-medium border hover:scale-105 active:scale-95 justify-center'
                    style={{ borderColor: `${project.color}40`, color: project.color, background: `${project.color}08` }}
                    aria-label={`Open ${project.title}`}
                >
                    <ExternalLink size={15} />
                    Live
                </a> */}
            </div>
        </div>
    );
}

export default function Projects() {
    const headRef = useReveal();
    const trackRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const { t } = useTranslation();

    const projects = [
        {
            title: 'FinManager',
            description: t('projects.items.finmanager'),
            tech: ['Python', 'JavaScript', 'Django', 'React', 'SQLite', 'Chart.js', 'WeasyPrint', 'Pandas', 'HTML', 'CSS', 'TailwindCSS'],
            github: 'https://github.com/Rafael-Domiciano-Maia-Mateus/FinManager',
            color: '#00ff87',
            emoji: '/FinManager.png',
        },
        {
            title: 'Sistema Web Advocacia',
            description: t('projects.items.advocacia'),
            tech: ['HTML', 'CSS', 'JavaScript', 'React', 'TailwindCSS'],
            github: 'https://github.com/Rafael-Domiciano-Maia-Mateus/advocacia-web',
            color: '#a78bfa',
            emoji: '/advocacia.png',
        },
        {
            title: 'Flappy Bird',
            description: t('projects.items.flappybird'),
            tech: ['Python', 'Pygame'],
            github: 'https://github.com/Rafael-Domiciano-Maia-Mateus/Flappy-Bird',
            color: '#60a5fa',
            emoji: '/FlappyBird.png',
        },
        {
            title: 'Chalés São Mateus',
            description: t('projects.items.chales'),
            tech: ['HTML', 'CSS', 'JavaScript'],
            github: 'https://github.com/Rafael-Domiciano-Maia-Mateus/Chales-Sao-Mateus-Web',
            color: '#a78bfa',
            emoji: '/ChalesSaoMateus.png',
        },
    ];

    const cardWidth = typeof window !== 'undefined' && window.innerWidth < 640 ? window.innerWidth - 48 : 436;

    const slideTo = (index) => {
        const clamped = Math.max(0, Math.min(index, projects.length - 1));
        setCurrentIndex(clamped);
        if (trackRef.current) {
            trackRef.current.scrollTo({ left: clamped * cardWidth, behavior: 'smooth' });
        }
    };

    const handleScroll = () => {
        if (trackRef.current) {
            const idx = Math.round(trackRef.current.scrollLeft / cardWidth);
            setCurrentIndex(idx);
        }
    };

    return (
        <section id='projects' className='py-28 relative overflow-hidden'>
            <div className='blob w-72 h-72 bg-blue-500/3 bottom-10 left-0' />

            <div className='max-w-6xl mx-auto px-6'>
                {/* Heading */}
                <div ref={headRef} className='reveal flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12'>
                    <div>
                        <p className='section-label'>{t('projects.label')}</p>
                        <h2 className='section-heading'>
                            {t('projects.heading1')}
                            <br />
                            <span className='text-accent'>{t('projects.heading2')}</span>
                        </h2>
                    </div>

                    {/* Arrow controls */}
                    <div className='flex items-center gap-3'>
                        <button
                            onClick={() => slideTo(currentIndex - 1)}
                            disabled={currentIndex === 0}
                            className='w-11 h-11 rounded-xl border border-border flex items-center justify-center text-gray-400
                         hover:border-accent/40 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed
                         transition-all duration-200'
                            aria-label='Previous project'
                        >
                            <ChevronLeft size={18} />
                        </button>

                        <div className='flex gap-1.5'>
                            {projects.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => slideTo(i)}
                                    className={`h-1.5 rounded-full transition-all duration-300 ${
                                        i === currentIndex ? 'w-6 bg-accent' : 'w-1.5 bg-border hover:bg-gray-600'
                                    }`}
                                    aria-label={`Go to project ${i + 1}`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={() => slideTo(currentIndex + 1)}
                            disabled={currentIndex === projects.length - 1}
                            className='w-11 h-11 rounded-xl border border-border flex items-center justify-center text-gray-400
                         hover:border-accent/40 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed
                         transition-all duration-200'
                            aria-label='Next project'
                        >
                            <ChevronRight size={18} />
                        </button>
                    </div>
                </div>

                {/* Carousel */}
                <div
                    ref={trackRef}
                    onScroll={handleScroll}
                    className='flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth'
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {projects.map((project) => (
                        <ProjectCard key={project.title} project={project} />
                    ))}
                </div>

                <p className='text-gray-600 text-xs font-mono mt-4 text-center sm:text-left'>
                    {currentIndex + 1} / {projects.length} — {t('projects.swipe')}
                </p>
            </div>
        </section>
    );
}
