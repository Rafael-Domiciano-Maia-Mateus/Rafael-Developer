import i18n from 'i18next';
import { TableRowsSplit } from 'lucide-react';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
    resources: {
        en: {
            translation: {
                nav: {
                    home: 'Home',
                    about: 'About',
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

                about: {
                    label: 'About me',
                    heading: 'Who I am',
                    subheading: 'A bit about my journey and what drives me.',
                    bio: {
                        p1: "<strong class='text-white font-semibold'>Hello!</strong> I'm Rafael, a software developer focused on <span class='text-white border-b border-accent/20 pb-0.5'>backend</span>, working on APIs, system architecture, and scalable web applications. I am currently studying <span class='text-white font-medium'>Software Engineering</span>, constantly seeking to combine academic knowledge with professional practice, with special attention to <span class='text-white border-b border-accent/20 pb-0.5'>performance</span>, organization, and code quality.",
                        p2: "My main experience is within the <span class='text-white border-b border-accent/20 pb-0.5'>Python</span> ecosystem, using <span class='text-white font-medium'>Django</span> and <span class='text-white font-medium'>Django REST Framework</span> to develop robust and well-structured solutions. I also have experience with <span class='text-white border-b border-accent/20 pb-0.5'>JavaScript</span> and <span class='text-white border-b border-accent/20 pb-0.5'>C#</span>, allowing me to contribute across different stages of development and build complete, efficient applications.",
                        p3: "In addition to backend development, I also work as a <span class='text-white font-medium'>freelancer</span> creating <span class='text-white border-b border-accent/20 pb-0.5'>static websites</span> and <span class='text-white border-b border-accent/20 pb-0.5'>landing pages</span>, developing modern, responsive interfaces focused on digital presence and professional business presentation.",
                    },
                    cards: {
                        education: 'B.S. in Software Eng.',
                        location: 'Brazil',
                        focus: 'Backend & APIs',
                        labels: {
                            education: 'Education',
                            location: 'Location',
                            focus: 'Focus',
                        },
                    },
                    journey: {
                        title: 'My Journey',
                        y2026: {
                            title: 'Software Engineering & Backend',
                            desc: 'Started my Software Engineering degree (ongoing). Concurrently, I continue working on freelance projects, API architecture, and expanding my backend ecosystem with C# and .NET.',
                        },
                        y2025: {
                            title: 'Complex Projects & Algorithms',
                            desc: "Evolved to more advanced projects and solved LeetCode challenges to sharpen logic. Learned JavaScript to integrate into my projects' ecosystem.",
                        },
                        y2024: {
                            title: 'Practical Studies',
                            desc: 'The year my studies gained total consistency. I began building and delivering my first practical and functional projects.',
                        },
                        y2023: {
                            title: 'First Contact',
                            desc: 'Introduction to programming. This was when I discovered the software development field and started researching deeply into it.',
                        },
                    },
                },

                stacks: {
                    label: 'Tech Stack',
                    heading1: 'What I work',
                    heading2: 'with',
                    subtitle: 'Tools and technologies I use to build, automate, and ship products.',
                    items: {
                        python: 'Primary language for scripting, automation, and backend development.',
                        javascript: 'Frontend interactivity, APIs, and Node.js ecosystem.',
                        csharp: 'Versatile language for backend development, automation, and desktop applications.',
                        django: 'Full-stack web framework for rapid, robust web applications.',
                        djangoRest: 'Building powerful RESTful APIs with authentication and serialization.',
                        flask: 'Lightweight WSGI microframework for Python web apps.',
                        pandas: 'Data manipulation, analysis, and transformation at scale.',
                        selenium: 'Browser automation and end-to-end web testing.',
                        express: 'Minimal Node.js framework for fast backend APIs.',
                        react: 'JavaScript library for building reactive user interfaces and reusable components.',
                        tailwind: 'Utility-first CSS framework for responsive, modern designs.',
                        dotnet: 'Comprehensive framework for building modern applications across platforms with C#.',
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
                        Hotel: 'Hotel Portfolio',
                    },
                    items: {
                        finmanager:
                            'FinManager is a financial management system developed with Django and React. The platform automates expense control through the import of bank CSVs, offers interactive dashboards with Chart.js, and uses AI for financial forecasts. Built on a solid Service Layer architecture and automated tests, the system organizes finances by categories and generates PDF reports in a secure and responsive manner.',
                        advocacia:
                            "This law firm website was developed using React and TailwindCSS, focusing on a modern, elegant, and highly professional design. The platform was created to strengthen the firm's digital presence, offering an intuitive and responsive experience across all devices. The website includes institutional sections, practice areas, testimonials, and integrated contact channels such as WhatsApp and email. Built with reusable components, smooth animations, and an organized architecture, the project prioritizes performance, accessibility, credibility, and user experience.",
                        flappybird:
                            'A faithful recreation of the classic game Flappy Bird built with Python and Pygame. It features perfect pixel collision detection, increasing difficulty, high score tracking with local persistence, and smooth gameplay. A fun exercise in designing game loops and 2D physics.',
                        chales: 'Project developed for Chalés São Mateus, focusing on visual presentation, information organization, and user experience. The site uses HTML, CSS, and JavaScript to create a modern, responsive, and intuitive interface, serving as a basis for promoting the enterprise and future project expansions.',
                        hotel: 'Institutional website for a hotel, developed as a portfolio project to showcase Front-end development skills. The application was built with React, HTML, CSS, and Tailwind CSS, following best practices for responsiveness, component organization, and creating modern and intuitive interfaces.',
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
                    about: 'Sobre',
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

                about: {
                    label: 'Sobre mim',
                    heading: 'Quem sou eu',
                    subheading: 'Um pouco sobre minha trajetória e o que me move.',
                    bio: {
                        p1: 'Olá! Sou Rafael, desenvolvedor de software com foco em backend, atuando no desenvolvimento de APIs, arquitetura de sistemas e aplicações web escaláveis. Atualmente curso Engenharia de Software, buscando constantemente unir conhecimento acadêmico à prática profissional, com atenção especial à performance, organização e qualidade de código.',
                        p2: "Minha principal experiência está no ecossistema <span class='text-white border-b border-accent/20 pb-0.5'>Python</span>, utilizando <span class='text-white font-medium'>Django</span> e <span class='text-white font-medium'>Django REST Framework</span> no desenvolvimento de soluções robustas e bem estruturadas. Também possuo conhecimento em <span class='text-white border-b border-accent/20 pb-0.5'>JavaScript</span> e <span class='text-white border-b border-accent/20 pb-0.5'>C#</span>, o que me permite participar de diferentes etapas do desenvolvimento e contribuir para aplicações completas e eficientes.",
                        p3: "Além da atuação em backend, trabalho como <span class='text-white font-medium'>freelancer</span> no desenvolvimento de <span class='text-white border-b border-accent/20 pb-0.5'>sites estáticos</span> e <span class='text-white border-b border-accent/20 pb-0.5'>landing pages</span>, criando interfaces modernas, responsivas e voltadas para presença digital e apresentação profissional de serviços e negócios.",
                    },
                    cards: {
                        education: 'Cursando Eng. de Software',
                        location: 'Brasil',
                        focus: 'Backend & APIs',
                        labels: {
                            education: 'Formação',
                            location: 'Localização',
                            focus: 'Foco',
                        },
                    },
                    journey: {
                        title: 'Minha Jornada',
                        y2026: {
                            title: 'Engenharia de Software & Backend',
                            desc: 'Iniciei a graduação em Engenharia de Software (em andamento). Paralelamente, sigo atuando com projetos freelancer, arquitetura de APIs e expandindo meu ecossistema backend com C# e .NET.',
                        },
                        y2025: {
                            title: 'Projetos Complexos & Algoritmos',
                            desc: 'Evolução para projetos mais avançados e resolução de desafios no LeetCode para afiar a lógica. Aprendi JavaScript para integrar ao ecossistema dos meus projetos.',
                        },
                        y2024: {
                            title: 'Estudos Práticos',
                            desc: 'O ano em que os estudos ganharam consistência total. Comecei a construir e entregar os primeiros projetos práticos e funcionais.',
                        },
                        y2023: {
                            title: 'O Primeiro Contato',
                            desc: 'Início na programação. Foi quando conheci a área de desenvolvimento de software e comecei a pesquisar a fundo sobre o assunto.',
                        },
                    },
                },

                stacks: {
                    label: 'Tecnologias',
                    heading1: 'Com o que eu',
                    heading2: 'trabalho',
                    subtitle: 'Ferramentas e tecnologias que uso para construir, automatizar e entregar produtos.',
                    items: {
                        python: 'Linguagem principal para scripts, automação e desenvolvimento backend.',
                        javascript: 'Interatividade no frontend, APIs e ecossistema Node.js.',
                        csharp: 'Linguagem versátil para desenvolvimento backend, automação e aplicações desktop.',
                        django: 'Framework web completo para aplicações robustas e rápidas.',
                        djangoRest: 'Construção de APIs RESTful com autenticação e serialização.',
                        flask: 'Microframework WSGI leve para aplicações web em Python.',
                        pandas: 'Manipulação, análise e transformação de dados em escala.',
                        selenium: 'Automação de navegador e testes end-to-end.',
                        express: 'Framework Node.js minimalista para APIs backend rápidas.',
                        react: 'Biblioteca JavaScript para construção de interfaces de usuário reativas e componentes reutilizáveis.',
                        tailwind: 'Framework CSS utilitário para design responsivo e moderno.',
                        dotnet: 'Framework abrangente para construir aplicações modernas em diversas plataformas com C#.',
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
                        Hotel: 'Hotel Portfólio',
                    },
                    items: {
                        finmanager:
                            'FinManager é um sistema de gestão financeira desenvolvido com Django e React. A plataforma automatiza o controle de despesas por meio da importação de CSVs bancários, oferece dashboards interativos com Chart.js e usa IA para previsões financeiras. Construído sobre uma arquitetura sólida de Service Layer e testes automatizados, o sistema organiza as finanças por categorias e gera relatórios em PDF de forma segura e responsiva.',
                        advocacia:
                            'Este site de advocacia foi desenvolvido utilizando React e TailwindCSS, com foco em um design moderno, elegante e altamente profissional. A plataforma foi criada para fortalecer a presença digital do escritório, oferecendo uma experiência intuitiva e responsiva em todos os dispositivos. O site conta com seções institucionais, áreas de atuação, depoimentos e canais de contato integrados, como WhatsApp e e-mail. Construído com componentes reutilizáveis, animações suaves e uma arquitetura organizada, o projeto prioriza desempenho, acessibilidade, credibilidade e experiência do usuário.',
                        flappybird:
                            'Uma recriação fiel do clássico Flappy Bird feita com Python e Pygame. Conta com detecção de colisão por pixel, dificuldade crescente, registro de pontuação máxima com persistência local e jogabilidade fluida. Um exercício divertido no design de game loops e física 2D.',
                        chales: 'Projeto desenvolvido para os Chalés São Mateus, com foco em apresentação visual, organização das informações e experiência do usuário. O site usa HTML, CSS e JavaScript para criar uma interface moderna, responsiva e intuitiva, servindo de base para a divulgação do empreendimento e futuras expansões.',
                        hotel: 'Website institucional para um hotel, desenvolvido como projeto de portfólio para demonstrar conhecimentos em desenvolvimento Front-end. A aplicação foi construída com React, HTML, CSS e Tailwind CSS, seguindo boas práticas de responsividade, organização de componentes e criação de interfaces modernas e intuitivas.',
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
