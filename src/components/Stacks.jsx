import { useReveal } from '../hooks/useReveal';
import { useTranslation } from 'react-i18next';

function StackCard({ stack, delay }) {
    const ref = useReveal();

    return (
        <div ref={ref} className={`reveal reveal-delay-${delay} stack-card card p-5 cursor-default transition-all duration-300`}>
            <div className='flex items-start justify-between mb-3'>
                <img src={stack.icon} alt={stack.name} className='w-8 h-8 object-contain' />
            </div>

            <h3 className='font-display text-white font-semibold text-lg mb-1'>{stack.name}</h3>
            <p className='text-gray-500 text-sm leading-relaxed'>{stack.desc}</p>
        </div>
    );
}

export default function Stacks() {
    const headRef = useReveal();
    const { t } = useTranslation();

    const stacks = [
        { name: 'Python', icon: '/python.png', color: '#3776AB', desc: t('stacks.items.python') },
        { name: 'JavaScript', icon: '/javascript.png', color: '#F7DF1E', desc: t('stacks.items.javascript') },
        { name: 'Django', icon: '/django.png', color: '#092E20', desc: t('stacks.items.django') },
        { name: 'Django REST', icon: '/django.png', color: '#A30000', desc: t('stacks.items.djangoRest') },
        { name: 'Flask', icon: '/flask.png', color: '#000000', desc: t('stacks.items.flask') },
        { name: 'Pandas', icon: '/pandas.png', color: '#150458', desc: t('stacks.items.pandas') },
        { name: 'Selenium', icon: '/selenium.png', color: '#43B02A', desc: t('stacks.items.selenium') },
        { name: 'ExpressJS', icon: '/expressjs.png', color: '#404040', desc: t('stacks.items.express') },
        { name: 'React', icon: '/react.png', color: '#61DAFB', desc: t('stacks.items.react') },
    ];

    return (
        <section id='stacks' className='py-28 relative overflow-hidden'>
            <div className='blob w-64 h-64 bg-accent/4 top-10 right-0' />

            <div className='max-w-6xl mx-auto px-6'>
                {/* Heading */}
                <div ref={headRef} className='reveal mb-16'>
                    <p className='section-label'>{t('stacks.label')}</p>
                    <h2 className='section-heading'>
                        {t('stacks.heading1')}
                        <br />
                        <span className='text-accent'>{t('stacks.heading2')}</span>
                    </h2>
                    <p className='text-gray-500 mt-4 max-w-md'>{t('stacks.subtitle')}</p>
                </div>

                {/* Grid */}
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {stacks.map((stack, i) => (
                        <StackCard key={stack.name} stack={stack} delay={Math.min((i % 3) + 1, 5)} />
                    ))}
                </div>
            </div>
        </section>
    );
}
