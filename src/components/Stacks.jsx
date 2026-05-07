import { useReveal } from '../hooks/useReveal';

const stacks = [
    {
        name: 'Python',
        icon: '/python.png',
        level: 'Advanced',
        color: '#3776AB',
        desc: 'Primary language for scripting, automation, and backend development.',
    },
    {
        name: 'JavaScript',
        icon: '/javascript.png',
        level: 'Advanced',
        color: '#F7DF1E',
        desc: 'Frontend interactivity, APIs, and Node.js ecosystem.',
    },
    {
        name: 'Django',
        icon: '/django.png',
        level: 'Advanced',
        color: '#092E20',
        desc: 'Full-stack web framework for rapid, robust web applications.',
    },
    {
        name: 'Django REST',
        icon: '/django.png',
        level: 'Advanced',
        color: '#A30000',
        desc: 'Building powerful RESTful APIs with authentication and serialization.',
    },
    {
        name: 'Flask',
        icon: '/flask.png',
        level: 'Intermediate',
        color: '#000000',
        desc: 'Lightweight WSGI microframework for Python web apps.',
    },
    {
        name: 'Pandas',
        icon: '/pandas.png',
        level: 'Advanced',
        color: '#150458',
        desc: 'Data manipulation, analysis, and transformation at scale.',
    },
    // {
    //     name: 'PyAutoGUI',
    //     icon: '🤖',
    //     level: 'Advanced',
    //     color: '#4B8BBE',
    //     desc: 'GUI automation, screen control, and RPA workflows.',
    // },
    {
        name: 'Selenium',
        icon: '/selenium.png',
        level: 'Advanced',
        color: '#43B02A',
        desc: 'Browser automation and end-to-end web testing.',
    },
    {
        name: 'ExpressJS',
        icon: '/expressjs.png',
        level: 'Intermediate',
        color: '#404040',
        desc: 'Minimal Node.js framework for fast backend APIs.',
    },
];

const levelColors = {
    Expert: 'text-accent',
    Advanced: 'text-blue-400',
    Intermediate: 'text-yellow-400',
};

function StackCard({ stack, delay }) {
    const ref = useReveal();

    return (
        <div ref={ref} className={`reveal reveal-delay-${delay} stack-card card p-5 cursor-default transition-all duration-300`}>
            <div className='flex items-start justify-between mb-3'>
                <img src={stack.icon} alt={stack.name} className='w-8 h-8 object-contain' />

                <span className={`font-mono text-xs ${levelColors[stack.level]} opacity-80`}>{stack.level}</span>
            </div>

            <h3 className='font-display text-white font-semibold text-lg mb-1'>{stack.name}</h3>
            <p className='text-gray-500 text-sm leading-relaxed'>{stack.desc}</p>
        </div>
    );
}

export default function Stacks() {
    const headRef = useReveal();

    return (
        <section id='stacks' className='py-28 relative overflow-hidden'>
            <div className='blob w-64 h-64 bg-accent/4 top-10 right-0' />

            <div className='max-w-6xl mx-auto px-6'>
                {/* Heading */}
                <div ref={headRef} className='reveal mb-16'>
                    <p className='section-label'>Tech Stack</p>
                    <h2 className='section-heading'>
                        What I work
                        <br />
                        <span className='text-accent'>with</span>
                    </h2>
                    <p className='text-gray-500 mt-4 max-w-md'>Tools and technologies I use to build, automate, and ship products.</p>
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
