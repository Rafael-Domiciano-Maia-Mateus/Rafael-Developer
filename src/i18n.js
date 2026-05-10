import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
    resources: {
        en: {
            translation: {
                nav: {
                    home: 'Home',
                    stacks: 'Stacks',
                    projects: 'Projects',
                    contact: 'Contact',
                    hireMe: 'Hire me',
                },

                hero: {
                    description:
                        'Software Developer focused on <strong>automation</strong> and <strong>web development</strong>. I create websites, APIs, and process automations. Additionally, I do data analysis with pandas, making life easier for my clients.',
                    viewProjects: 'View Projects',
                    getInTouch: 'Get in Touch',
                    findMe: 'Find me on',
                    experience: 'Practical Experience',
                    experienceTime: '2+ yrs',
                    projects: 'Projects',
                    profileAlt: 'My photo',
                },

                stacks: {
                    label: 'Tech Stack',
                    heading1: 'What I work',
                    heading2: 'with',
                    subtitle: 'Tools and technologies I use to build, automate, and ship products.',
                    items: {
                        python: 'Primary language for scripting, automation, and backend development.',
                        javascript: 'Frontend interactivity, APIs, and Node.js ecosystem.',
                        django: 'Full-stack web framework for rapid, robust web applications.',
                        djangoRest: 'Building powerful RESTful APIs with authentication and serialization.',
                        flask: 'Lightweight WSGI microframework for Python web apps.',
                        pandas: 'Data manipulation, analysis, and transformation at scale.',
                        selenium: 'Browser automation and end-to-end web testing.',
                        express: 'Minimal Node.js framework for fast backend APIs.',
                        react: 'JavaScript library for building reactive user interfaces and reusable components.',
                    },
                },

                projects: {
                    label: 'Portfolio',
                    heading1: 'Selected',
                    heading2: 'Projects',
                    readMore: 'Read more',
                    showLess: 'Show less',
                    swipe: 'swipe or use arrows',
                    title: {
                        Advocacy: 'Law Practice Web System',
                    },
                    items: {
                        finmanager:
                            'FinManager is a financial management system developed with Django and React. The platform automates expense control through the import of bank CSVs, offers interactive dashboards with Chart.js, and uses AI for financial forecasts. Built on a solid Service Layer architecture and automated tests, the system organizes finances by categories and generates PDF reports in a secure and responsive manner.',
                        advocacia:
                            "This law firm website was developed using React and TailwindCSS, focusing on a modern, elegant, and highly professional design. The platform was created to strengthen the firm's digital presence, offering an intuitive and responsive experience across all devices. The website includes institutional sections, practice areas, testimonials, and integrated contact channels such as WhatsApp and email. Built with reusable components, smooth animations, and an organized architecture, the project prioritizes performance, accessibility, credibility, and user experience.",
                        flappybird:
                            'A faithful recreation of the classic game Flappy Bird built with Python and Pygame. It features perfect pixel collision detection, increasing difficulty, high score tracking with local persistence, and smooth gameplay. A fun exercise in designing game loops and 2D physics.',
                        chales: 'Project developed for Chalés São Mateus, focusing on visual presentation, information organization, and user experience. The site uses HTML, CSS, and JavaScript to create a modern, responsive, and intuitive interface, serving as a basis for promoting the enterprise and future project expansions.',
                    },
                },

                contact: {
                    connect: "Let's connect",
                    label: "Get in <span className='text-accent'>Touch</span>",
                    heading: "Whether you have a project idea, a question, or just want to say hi — I'm always open to new conversations.",
                    opportunities: 'Open to opportunities',
                    descriptionEmail: 'Freelance, contracts, and full-time roles.',
                    email: 'Send Email',
                },

                footer: {
                    text: 'Built with React & TailwindCSS',
                },
            },
        },
        pt: {
            translation: {
                nav: {
                    home: 'Início',
                    stacks: 'Tecnologias',
                    projects: 'Projetos',
                    contact: 'Contato',
                    hireMe: 'Contrate-me',
                },

                hero: {
                    description:
                        'Desenvolvedor de Software focado em <strong>automação</strong> e <strong>desenvolvimento web</strong>. Crio sites, APIs e automações de processos. Também faço análise de dados com pandas, facilitando a vida dos meus clientes.',
                    viewProjects: 'Ver Projetos',
                    getInTouch: 'Entre em Contato',
                    findMe: 'Me encontre em',
                    experience: 'Experiência Prática',
                    experienceTime: '2+ anos',
                    projects: 'Projetos',
                    profileAlt: 'Minha foto',
                },

                stacks: {
                    label: 'Tecnologias',
                    heading1: 'Com o que eu',
                    heading2: 'trabalho',
                    subtitle: 'Ferramentas e tecnologias que uso para construir, automatizar e entregar produtos.',
                    items: {
                        python: 'Linguagem principal para scripts, automação e desenvolvimento backend.',
                        javascript: 'Interatividade no frontend, APIs e ecossistema Node.js.',
                        django: 'Framework web completo para aplicações robustas e rápidas.',
                        djangoRest: 'Construção de APIs RESTful com autenticação e serialização.',
                        flask: 'Microframework WSGI leve para aplicações web em Python.',
                        pandas: 'Manipulação, análise e transformação de dados em escala.',
                        selenium: 'Automação de navegador e testes end-to-end.',
                        express: 'Framework Node.js minimalista para APIs backend rápidas.',
                        react: 'Biblioteca JavaScript para construção de interfaces de usuário reativas e componentes reutilizáveis.',
                    },
                },

                projects: {
                    label: 'Portfólio',
                    heading1: 'Projetos',
                    heading2: 'Selecionados',
                    readMore: 'Ler mais',
                    showLess: 'Mostrar menos',
                    swipe: 'deslize ou use as setas',
                    title: {
                        Advocacy: 'Sistema Web Advocacia',
                    },
                    items: {
                        finmanager:
                            'FinManager é um sistema de gestão financeira desenvolvido com Django e React. A plataforma automatiza o controle de despesas por meio da importação de CSVs bancários, oferece dashboards interativos com Chart.js e usa IA para previsões financeiras. Construído sobre uma arquitetura sólida de Service Layer e testes automatizados, o sistema organiza as finanças por categorias e gera relatórios em PDF de forma segura e responsiva.',
                        advocacia:
                            'Este site de advocacia foi desenvolvido utilizando React e TailwindCSS, com foco em um design moderno, elegante e altamente profissional. A plataforma foi criada para fortalecer a presença digital do escritório, oferecendo uma experiência intuitiva e responsiva em todos os dispositivos. O site conta com seções institucionais, áreas de atuação, depoimentos e canais de contato integrados, como WhatsApp e e-mail. Construído com componentes reutilizáveis, animações suaves e uma arquitetura organizada, o projeto prioriza desempenho, acessibilidade, credibilidade e experiência do usuário.',
                        flappybird:
                            'Uma recriação fiel do clássico Flappy Bird feita com Python e Pygame. Conta com detecção de colisão por pixel, dificuldade crescente, registro de pontuação máxima com persistência local e jogabilidade fluida. Um exercício divertido no design de game loops e física 2D.',
                        chales: 'Projeto desenvolvido para os Chalés São Mateus, com foco em apresentação visual, organização das informações e experiência do usuário. O site usa HTML, CSS e JavaScript para criar uma interface moderna, responsiva e intuitiva, servindo de base para a divulgação do empreendimento e futuras expansões.',
                    },
                },

                contact: {
                    connect: '',
                    label: "Entre em <span className='section-heading'>Contato</span>",
                    heading: 'Seja para uma ideia de projeto ou uma dúvida — estou sempre aberto a novas conversas.',
                    opportunities: 'Aberto a oportunidades',
                    descriptionEmail: 'Freelance, contratos e vagas full-time.',
                    email: 'Envie um Email',
                },

                footer: {
                    text: 'Feito com React & TailwindCSS',
                },
            },
        },
    },
    lng: 'pt',
    fallbackLng: 'pt',
});

export default i18n;
