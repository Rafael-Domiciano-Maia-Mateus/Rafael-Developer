import { useEffect, useRef } from 'react';
import { ArrowDown, Github, Linkedin } from 'lucide-react';

export default function Hero() {
    const ref = useRef(null);

    useEffect(() => {
        const el = ref.current;
        if (el) {
            setTimeout(() => el.classList.add('visible'), 100);
        }
    }, []);

    const scrollToProjects = () => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id='home' className='relative min-h-screen flex items-center overflow-hidden'>
            {/* Background blobs */}
            <div className='blob w-96 h-96 bg-accent/5 top-20 -left-32' />
            <div className='blob w-80 h-80 bg-accent/3 bottom-20 right-0' />

            {/* Grid pattern */}
            <div
                className='absolute inset-0 opacity-[0.03]'
                style={{
                    backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
                    backgroundSize: '60px 60px',
                }}
            />

            <div className='relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16 w-full'>
                <div ref={ref} className='reveal grid lg:grid-cols-2 gap-12 lg:gap-16 items-center'>
                    {/* Left: Text */}
                    <div>
                        {/* Badge */}
                        {/* <div className='inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-6'>
                            <span className='w-2 h-2 rounded-full bg-accent animate-pulse' />
                            <span className='font-mono text-accent text-xs tracking-wide'>Available for work</span>
                        </div> */}

                        <h1 className='font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-6'>
                            Rafael
                            <br />
                            <span className='text-accent'>Maia</span>
                            <span className='text-gray-600'>.</span>
                        </h1>

                        <p className='text-gray-400 text-lg leading-relaxed mb-4 max-w-md'>
                            Software Developer focused on <span className='text-white font-medium'>automation</span> and{' '}
                            <span className='text-white font-medium'>web development</span>. I create websites, APIs, and process automations.
                            Additionally, I do data analysis with pandas, making life easier for my clients.
                        </p>

                        <p className='text-gray-600 text-sm font-mono mb-10'>Python · JavaScript</p>

                        <div className='flex flex-wrap gap-3'>
                            <button onClick={scrollToProjects} className='btn-primary'>
                                View Projects
                            </button>
                            <a
                                href='#contact'
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className='btn-ghost'
                            >
                                Get in Touch
                            </a>
                        </div>

                        {/* Social row */}
                        <div className='flex items-center gap-4 mt-10'>
                            <span className='text-gray-600 text-xs font-mono'>Find me on</span>
                            <div className='h-px w-8 bg-border' />
                            <a
                                href='https://github.com/Rafael-Domiciano-Maia-Mateus'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='text-gray-500 hover:text-accent transition-colors'
                                aria-label='GitHub'
                            >
                                <Github size={18} />
                            </a>
                            <a
                                href='https://www.linkedin.com/in/rafael-maia-26b41a308/'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='text-gray-500 hover:text-accent transition-colors'
                                aria-label='LinkedIn'
                            >
                                <Linkedin size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Right: Profile image placeholder */}
                    <div className='flex justify-center lg:justify-end'>
                        <div className='relative'>
                            {/* Decorative ring */}
                            <div className='absolute -inset-4 rounded-3xl border border-accent/10 animate-glow-pulse' />
                            <div className='absolute -inset-8 rounded-3xl border border-accent/5' />

                            {/* Image container */}
                            <div className='relative w-72 h-80 sm:w-80 sm:h-96 rounded-3xl overflow-hidden border border-border bg-surface-3'>
                                <img src='/profile_image.png' alt='Minha foto' className='absolute inset-0 w-full h-full object-cover' />

                                <div className='absolute top-0 right-0 w-20 h-20 bg-accent/5 rounded-bl-3xl' />
                                <div className='absolute bottom-0 left-0 w-16 h-16 bg-accent/3 rounded-tr-2xl' />
                            </div>

                            {/* Floating badge */}
                            <div className='absolute -bottom-4 -left-4 bg-surface-2 border border-border rounded-2xl px-4 py-3 shadow-xl'>
                                <p className='font-mono text-accent text-xs'>2+ yrs</p>
                                <p className='font-display text-white text-sm font-semibold'>Practical Experience</p>
                            </div>

                            <div className='absolute -top-4 -right-4 bg-surface-2 border border-border rounded-2xl px-4 py-3 shadow-xl'>
                                <p className='font-mono text-accent text-xs'>5+</p>
                                <p className='font-display text-white text-sm font-semibold'>Projects</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroll indicator */}
                {/* <div className='absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600'>
                    <span className='font-mono text-xs'>scroll</span>
                    <ArrowDown size={14} className='animate-bounce' />
                </div> */}
            </div>
        </section>
    );
}
