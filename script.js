/*
  ============================================
  ARCHIVO DE LÓGICA (script.js) - VERSIÓN CON TRADUCCIÓN
  ============================================
*/

const portfolioData = {
  "personal": {
    "name": "Rodyher Viloria",
    "contact": {
      "email": "rodyher15@gmail.com",
      "linkedin": "https://linkedin.com/in/rodyher",
      "github": "https://github.com/rodyher"
    },
    "formspreeEndpoint": "https://api.web3forms.com/submit"
  },
  "projects": [
    { "images": ["assets/1.gif"], "tags": ["Flutter", "Móvil", "Finanzas", "Automatización"] },
    { "images": ["assets/2.gif"], "tags": ["Flutter", "Móvil", "RRHH", "Gestión"] },
    { "images": ["assets/3.gif"], "tags": ["Python", "Automatización", "PDF", "Excel"] },
    { "images": ["assets/4.gif"], "tags": ["WebApp", "Gestión", "Seguridad", "Base de Datos", "Login"] },
    { "images": ["assets/5.gif"], "tags": ["HTML5", "CSS3", "JavaScript", "Marketing", "UI/UX"] },
    { "images": ["assets/6.gif"], "tags": ["Web", "Educación", "Contenido", "SEO", "Interactividad"] }
  ],
  "skills": [
    "Python", "Dart & Flutter", "SQL", "JavaScript", "HTML5", "CSS3",
    "Automatización de Procesos (RPA)", "Web Scraping", "Análisis de Datos",
    "Desarrollo Móvil Multiplataforma", "Diseño de APIs", "Gestión de Bases de Datos",
    "Linux", "Git & GitHub", "Docker"
  ],
  "process": [
    { "step": "01" }, { "step": "02" }, { "step": "03" }, { "step": "04" }
  ]
};

// ===================================================================
// LÓGICA DE TRADUCCIÓN
// ===================================================================
const translations = {
  es: {
    // NAV
    nav_about: "Sobre Mí",
    nav_projects: "Proyectos",
    nav_skills: "Habilidades",
    nav_contact: "Contactar",
    // HERO
    hero_title: "Administrador y Desarrollador de Soluciones de Automatización",
    hero_subtitle: "Especializado en transformar tareas administrativas repetitivas en sistemas eficientes, ahorrándote tiempo y recursos para que te enfoques en crecer.",
    hero_availability: "Actualmente disponible para nuevos proyectos y oportunidades laborales a tiempo completo.",
    hero_button: "Hablemos de tu proyecto",
    // ABOUT
    about_title: "¿Por qué trabajar conmigo?",
    about_differentiator1_title: "Soluciones Empáticas y Adaptables",
    about_differentiator1_desc: "Entiendo que no todas las empresas necesitan un cambio drástico. Mi mayor desafío fue migrar la operación de un cliente desde apuntes en cuadernos y archivos de Excel a un sistema digital. En lugar de forzar una base de datos compleja, implementé una solución intermedia usando Google Sheets como una base de datos funcional a través de su API. Esto le dio al cliente una herramienta potente en una interfaz familiar, demostrando mi habilidad para crear la solución *correcta* para el cliente, no la más complicada.",
    about_differentiator2_title: "Desarrollo Ágil y a Medida",
    about_differentiator2_desc: "Me comprometo a entregar soluciones de alta calidad en los tiempos acordados. El proceso de desarrollo es 100% personalizado: la solución final será exactamente como la necesitas, con una comunicación constante para asegurar que cada detalle esté a tu gusto.",
    // PROJECTS
    projects_title: "Casos de Éxito",
    project1_title: "Gestor Financiero Inteligente para Empresas",
    project1_desc: "Desarrollé una aplicación móvil con Flutter que automatiza el análisis de grandes volúmenes de transacciones. La app presenta la información en gráficos visuales e intuitivos, permitiendo un control financiero en tiempo real y decisiones rápidas basadas en datos precisos.",
    project2_title: "Sistema de Gestión de Asistencia de Personal",
    project2_desc: "Creé una aplicación móvil para registrar y procesar automáticamente la asistencia del personal. El sistema centraliza la información, automatizando el cálculo de la planilla y liberando al equipo administrativo de tareas manuales.",
    project3_title: "Script de Automatización de Reportes",
    project3_desc: "Diseñé un script en Python que extrae datos de múltiples fuentes (Excel, CSVs), los procesa y genera reportes diarios en PDF de forma automática, ahorrando aproximadamente 10 horas de trabajo manual a la semana.",
    project4_title: "Plataforma de Gestión Empresarial a Medida",
    project4_desc: "Sistema web integral para la gestión de procesos internos de una empresa. Incluye módulos de clientes, proyectos y facturación, con un sistema de login y roles de usuario para garantizar la seguridad y el acceso controlado a la información a través de un Dashboard intuitivo.",
    project5_title: "Landing Pages de Alto Impacto y Conversión",
    project5_desc: "Creación de páginas de aterrizaje optimizadas para la conversión. Diseño moderno, rápido y totalmente responsivo para capturar la atención del visitante y guiarlo hacia una acción específica, como registrarse o comprar un producto, convirtiendo visitas en clientes.",
    project6_title: "Webs Informativas y Educativas Interactivas",
    project6_desc: "Desarrollo de sitios web dedicados a la enseñanza y divulgación. Estas plataformas están diseñadas para presentar contenido de manera clara y estructurada, facilitando el aprendizaje con imágenes, animaciones didácticas y una navegación intuitiva.",
    // SKILLS
    skills_title: "Mi Caja de Herramientas",
    // PROCESS
    process_title: "Mi Proceso de Trabajo",
    process1_title: "Consulta Inicial",
    process1_desc: "Analizamos juntos tus necesidades y objetivos para definir el alcance del proyecto.",
    process2_title: "Propuesta Detallada",
    process2_desc: "Te presento una propuesta clara que incluye el plan de trabajo, cronograma y la inversión.",
    process3_title: "Desarrollo y Comunicación",
    process3_desc: "Construyo tu solución manteniéndote informado y abierto a tus ideas en cada paso.",
    process4_title: "Entrega y Garantía",
    process4_desc: "Te entrego el producto final totalmente funcional, con un período de garantía.",
    // CONTACT
    contact_title: "¿Tienes una idea?",
    contact_desc: "Estoy listo para ayudarte a hacerla realidad. Rellena el formulario y me pondré en contacto contigo lo antes posible.",
    contact_email_cta: "O si lo prefieres, escríbeme directamente:",
    contact_form_name: "Tu Nombre",
    contact_form_email: "Tu Correo Electrónico",
    contact_form_message: "Cuéntame sobre tu proyecto...",
    contact_form_button: "Enviar Mensaje",
    // FOOTER
    footer_text: `© ${new Date().getFullYear()} Rodyher Viloria. Todos los derechos reservados.`
  },
  en: {
    // NAV
    nav_about: "About Me",
    nav_projects: "Projects",
    nav_skills: "Skills",
    nav_contact: "Contact",
    // HERO
    hero_title: "Administrator and Automation Solutions Developer",
    hero_subtitle: "Specialized in transforming repetitive administrative tasks into efficient systems, saving you time and resources to focus on growth.",
    hero_availability: "Currently available for new projects and full-time job opportunities.",
    hero_button: "Let's talk about your project",
    // ABOUT
    about_title: "Why work with me?",
    about_differentiator1_title: "Empathetic and Adaptable Solutions",
    about_differentiator1_desc: "I understand that not all companies need a drastic change. My biggest challenge was migrating a client's operation from notebooks and Excel files to a digital system. Instead of forcing a complex database, I implemented an intermediate solution using Google Sheets as a functional database through its API. This gave the client a powerful tool in a familiar interface, demonstrating my ability to create the *right* solution for the client, not the most complicated one.",
    about_differentiator2_title: "Agile and Custom Development",
    about_differentiator2_desc: "I am committed to delivering high-quality solutions on time. The development process is 100% personalized: the final solution will be exactly as you need it, with constant communication to ensure every detail is to your liking.",
    // PROJECTS
    projects_title: "Success Stories",
    project1_title: "Intelligent Financial Manager for Companies",
    project1_desc: "I developed a mobile application with Flutter that automates the analysis of large volumes of transactions. The app presents the information in visual and intuitive graphics, allowing for real-time financial control and quick decisions based on accurate data.",
    project2_title: "Personnel Attendance Management System",
    project2_desc: "I created a mobile application to automatically record and process staff attendance. The system centralizes information, automating payroll calculation and freeing the administrative team from manual tasks.",
    project3_title: "Report Automation Script",
    project3_desc: "I designed a Python script that extracts data from multiple sources (Excel, CSVs), processes it, and automatically generates daily PDF reports, saving approximately 10 hours of manual work per week.",
    project4_title: "Custom Business Management Platform",
    project4_desc: "A comprehensive web system for managing a company's internal processes. It includes customer, project, and billing modules, with a login system and user roles to ensure security and controlled access to information through an intuitive Dashboard.",
    project5_title: "High-Impact and Conversion Landing Pages",
    project5_desc: "Creation of landing pages optimized for conversion. Modern, fast, and fully responsive design to capture the visitor's attention and guide them towards a specific action, such as registering or buying a product, turning visits into customers.",
    project6_title: "Informative and Interactive Educational Websites",
    project6_desc: "Development of websites dedicated to teaching and dissemination. These platforms are designed to present content in a clear and structured way, facilitating learning with images, didactic animations, and intuitive navigation.",
    // SKILLS
    skills_title: "My Toolbox",
    // PROCESS
    process_title: "My Work Process",
    process1_title: "Initial Consultation",
    process1_desc: "We analyze your needs and objectives together to define the project scope.",
    process2_title: "Detailed Proposal",
    process2_desc: "I present you with a clear proposal that includes the work plan, schedule, and investment.",
    process3_title: "Development and Communication",
    process3_desc: "I build your solution keeping you informed and open to your ideas at every step.",
    process4_title: "Delivery and Guarantee",
    process4_desc: "I deliver the final, fully functional product with a warranty period.",
    // CONTACT
    contact_title: "Have an idea?",
    contact_desc: "I'm ready to help you make it a reality. Fill out the form and I'll get in touch with you as soon as possible.",
    contact_email_cta: "Or if you prefer, write to me directly:",
    contact_form_name: "Your Name",
    contact_form_email: "Your Email",
    contact_form_message: "Tell me about your project...",
    contact_form_button: "Send Message",
    // FOOTER
    footer_text: `© ${new Date().getFullYear()} Rodyher Viloria. All rights reserved.`
  }
};

// ===================================================================
// CLASE PRINCIPAL DE LA APLICACIÓN
// ===================================================================

class PortfolioApp {
    constructor(data) {
        this.data = data;
        this.currentLang = 'es'; // Idioma por defecto
        this.init();
    }

    init() {
        if (this.data) {
            this.renderAllContent();
            this.setupEventListeners();
            this.setupProjectCarousels();
            this.setupLanguageSwitcher();
            this.setupModal(); // Configurar la modal
        } else {
            console.error("No se encontraron datos para renderizar el portafolio.");
        }
    }

    renderAllContent() {
        this.renderHeader(this.data.personal);
        this.renderAbout();
        this.renderProjects(this.data.projects);
        this.renderSkills(this.data.skills);
        this.renderProcess(this.data.process);
        this.renderContact(this.data.personal);
        this.renderFooter(this.data.personal);
        this.setLanguage(this.currentLang); // Aplicar idioma inicial
    }
    
    renderHeader(personal) {
        document.querySelector('.nav__logo').textContent = `<${personal.name.split(' ')[0]} />`;
    }

    renderAbout() {
        const container = document.getElementById('about-content');
        container.innerHTML = [1, 2].map(i => `
            <div class="about__card">
                <h3 data-key="about_differentiator${i}_title"></h3>
                <p data-key="about_differentiator${i}_desc"></p>
            </div>
        `).join('');
    }

    renderProjects(projects) {
        const container = document.getElementById('projects-container');
        if (!projects || projects.length === 0) {
            container.innerHTML = '<p>No hay proyectos para mostrar.</p>';
            return;
        }

        container.innerHTML = projects.map((proj, projIndex) => `
            <article class="project__card caso-de-exito">
                <div class="project__image">
                    <div class="carousel__wrapper">
                        ${proj.images.map((img, imgIndex) => `
                            <img src="${img}" alt="Imagen del proyecto" class="carousel__slide ${imgIndex === 0 ? 'active' : ''}">
                        `).join('')}
                    </div>
                    ${proj.images.length > 1 ? `
                        <button class="carousel__button prev"><i class="fas fa-chevron-left"></i></button>
                        <button class="carousel__button next"><i class="fas fa-chevron-right"></i></button>
                        <div class="carousel__dots">
                            ${proj.images.map((_, dotIndex) => `
                                <span class="carousel__dot ${dotIndex === 0 ? 'active' : ''}" data-slide-to="${dotIndex}"></span>
                            `).join('')}
                        </div>
                    ` : ''}
                </div>
                <div class="project__content">
                    <h3 data-key="project${projIndex + 1}_title"></h3>
                    <p data-key="project${projIndex + 1}_desc"></p>
                    <div class="project__tags">
                        ${proj.tags.map(tag => `<span class="project__tag">${tag}</span>`).join('')}
                    </div>
                </div>
            </article>
        `).join('');
    }

    setupProjectCarousels() {
        const projectCards = document.querySelectorAll('.project__card');
        projectCards.forEach(card => {
            const slides = card.querySelectorAll('.carousel__slide');
            if (slides.length <= 1) return;

            const dots = card.querySelectorAll('.carousel__dot');
            const prevButton = card.querySelector('.carousel__button.prev');
            const nextButton = card.querySelector('.carousel__button.next');
            let currentIndex = 0;

            const showSlide = (index) => {
                if (index >= slides.length) index = 0;
                if (index < 0) index = slides.length - 1;
                slides.forEach(slide => slide.classList.remove('active'));
                slides[index].classList.add('active');
                dots.forEach(dot => dot.classList.remove('active'));
                dots[index].classList.add('active');
                currentIndex = index;
            };
            
            nextButton.addEventListener('click', () => showSlide(currentIndex + 1));
            prevButton.addEventListener('click', () => showSlide(currentIndex - 1));
            dots.forEach(dot => {
                dot.addEventListener('click', (e) => showSlide(parseInt(e.target.dataset.slideTo)));
            });
        });
    }

    setupModal() {
        const modal = document.getElementById('media-modal');
        const modalMedia = document.getElementById('modal-media');
        const closeButton = modal.querySelector('.close-button');
        const projectsContainer = document.getElementById('projects-container');

        if (!modal || !modalMedia || !closeButton || !projectsContainer) {
            console.error('Elementos de la modal no encontrados.');
            return;
        }

        const openModal = (target) => {
            const image = target.querySelector('.carousel__slide.active');
            if (image) {
                modalMedia.src = image.src;
                modal.classList.add('visible');
            }
        };

        const closeModal = () => {
            modal.classList.remove('visible');
            setTimeout(() => {
                modalMedia.src = '';
            }, 400); // Coincide con la duración de la transición de opacidad
        };

        projectsContainer.addEventListener('click', (e) => {
            const clickedCard = e.target.closest('.caso-de-exito');
            const isCarouselControl = e.target.closest('.carousel__button, .carousel__dots');
            
            if (clickedCard && !isCarouselControl) {
                openModal(clickedCard);
            }
        });

        closeButton.addEventListener('click', closeModal);

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });
    }

    renderSkills(skills) {
        const container = document.getElementById('skills-container');
        container.innerHTML = skills.map(skill => `<span class="skill__item">${skill}</span>`).join('');
    }
    
    renderProcess(processSteps) {
        const container = document.getElementById('process-container');
        container.innerHTML = processSteps.map((step, index) => `
            <div class="process__card">
                <div class="process__card-step">${step.step}</div>
                <h3 data-key="process${index + 1}_title"></h3>
                <p data-key="process${index + 1}_desc"></p>
            </div>
        `).join('');
    }

    renderContact(personal) {
        const emailContainer = document.getElementById('contact-email-container');
        if (emailContainer) {
            emailContainer.innerHTML = `
                <p class="contact__email">
                    <span data-key="contact_email_cta"></span>
                    <a href="mailto:${personal.contact.email}">
                        <i class="fa-solid fa-paper-plane"></i> ${personal.contact.email}
                    </a>
                </p>
            `;
        }
    }

    renderFooter(personal) {
        const socialContainer = document.getElementById('footer-social');
        socialContainer.innerHTML = `
            <a href="mailto:${personal.contact.email}" target="_blank" aria-label="Email"><i class="fas fa-envelope"></i></a>
            <a href="${personal.contact.linkedin}" target="_blank" aria-label="LinkedIn"><i class="fab fa-linkedin"></i></a>
            <a href="${personal.contact.github}" target="_blank" aria-label="GitHub"><i class="fab fa-github"></i></a>
        `;
    }

    setupEventListeners() {
        const navToggle = document.getElementById('nav-toggle');
        const navMenu = document.querySelector('.nav__menu');
        const navLinks = document.querySelectorAll('.nav__link');
        const mainContent = document.querySelector('.main');

        if (navToggle) {
            navToggle.addEventListener('click', () => navMenu.classList.toggle('show-menu'));
        }
        
        const closeMenu = () => navMenu.classList.remove('show-menu');
        navLinks.forEach(link => link.addEventListener('click', closeMenu));
        mainContent.addEventListener('click', closeMenu);

        const contactForm = document.getElementById('contact-form');
        if (contactForm) {
            contactForm.action = this.data.personal.formspreeEndpoint;
            contactForm.method = 'POST';
            contactForm.addEventListener('submit', this.handleFormSubmit.bind(this));
        }
    }

    async handleFormSubmit(event) {
        event.preventDefault();
        const form = event.target;
        const status = document.getElementById('form-status');
        const data = new FormData(form);

        status.textContent = 'Enviando...';
        status.style.color = 'var(--color-secondary)';

        try {
            const response = await fetch(form.action, {
                method: form.method,
                body: data,
                headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
                status.textContent = "¡Gracias! Tu mensaje ha sido enviado.";
                status.style.color = 'var(--color-accent-2)';
                form.reset();
            } else {
                const responseData = await response.json();
                status.textContent = responseData.errors ? responseData.errors.map(e => e.message).join(", ") : "Oops! Hubo un problema al enviar tu mensaje.";
                status.style.color = '#ff6b6b';
            }
        } catch (error) {
            status.textContent = "Oops! Hubo un problema de red al enviar tu mensaje.";
            status.style.color = '#ff6b6b';
        }
    }

    setLanguage(lang) {
        this.currentLang = lang;
        document.documentElement.lang = lang;
        const langConfig = translations[lang];

        document.querySelectorAll('[data-key]').forEach(element => {
            const key = element.dataset.key;
            if (langConfig[key]) {
                if (element.placeholder) {
                    element.placeholder = langConfig[key];
                } else {
                    element.textContent = langConfig[key];
                }
            }
        });
        
        const langSwitcherText = document.getElementById('language-text');
        if(langSwitcherText) {
            langSwitcherText.textContent = lang === 'es' ? 'EN' : 'ES';
        }
    }

    setupLanguageSwitcher() {
        const switcher = document.getElementById('language-switcher');
        if (switcher) {
            switcher.addEventListener('click', () => {
                const newLang = this.currentLang === 'es' ? 'en' : 'es';
                this.setLanguage(newLang);
            });
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new PortfolioApp(portfolioData);
});
