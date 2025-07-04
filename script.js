/*
  ============================================
  ARCHIVO DE LÓGICA (script.js) - VERSIÓN CORREGIDA Y FINAL
  ============================================
  TODA LA INFORMACIÓN DE TU PORTAFOLIO ESTÁ AQUÍ.
  Para editar el contenido de tu página (tu nombre, proyectos, habilidades, etc.),
  modifica el contenido del objeto "portfolioData" a continuación.
*/

const portfolioData = {
  "personal": {
    "name": "Rodyher Viloria",
    "title": "Administrador y Desarrollador de Soluciones de Automatización",
    "subtitle": "Especializado en transformar tareas administrativas repetitivas en sistemas eficientes, ahorrándote tiempo y recursos para que te enfoques en crecer.",
    "contact": {
      "email": "rodyher15@gmail.com",
      "linkedin": "https://linkedin.com/in/rodyher",
      "github": "https://github.com/rodyher"
    },
    "formspreeEndpoint": "https://api.web3forms.com/submit"
  },
  "availability": {
    "isAvailable": true,
    "message": "Actualmente disponible para nuevos proyectos y oportunidades laborales a tiempo completo."
  },
  "about": {
    "title": "¿Por qué trabajar conmigo?",
    "differentiators": [
      {
        "title": "Soluciones Empáticas y Adaptables",
        "description": "Entiendo que no todas las empresas necesitan un cambio drástico. Mi mayor desafío fue migrar la operación de un cliente desde apuntes en cuadernos y archivos de Excel a un sistema digital. En lugar de forzar una base de datos compleja, implementé una solución intermedia usando Google Sheets como una base de datos funcional a través de su API. Esto le dio al cliente una herramienta potente en una interfaz familiar, demostrando mi habilidad para crear la solución *correcta* para el cliente, no la más complicada."
      },
      {
        "title": "Desarrollo Ágil y a Medida",
        "description": "Me comprometo a entregar soluciones de alta calidad en los tiempos acordados. El proceso de desarrollo es 100% personalizado: la solución final será exactamente como la necesitas, con una comunicación constante para asegurar que cada detalle esté a tu gusto."
      }
    ]
  },
  "projects": [
    {
      "title": "Gestor Financiero Inteligente para Empresas",
      "description": "Desarrollé una aplicación móvil con Flutter que automatiza el análisis de grandes volúmenes de transacciones. La app presenta la información en gráficos visuales e intuitivos, permitiendo un control financiero en tiempo real y decisiones rápidas basadas en datos precisos.",
      "images": [
        "assets/images.jpeg",
        "assets/images2.jpeg",
        "assets/gif.gif"
      ],
      "tags": ["Flutter", "Móvil", "Finanzas", "Automatización"]
    },
    {
      "title": "Sistema de Gestión de Asistencia de Personal",
      "description": "Creé una aplicación móvil para registrar y procesar automáticamente la asistencia del personal. El sistema centraliza la información, automatizando el cálculo de la planilla y liberando al equipo administrativo de tareas manuales.",
      "images": [
        "assets/images2.jpeg",
        "assets/images.jpeg"
      ],
      "tags": ["Flutter", "Móvil", "RRHH", "Gestión"]
    },
    {
      "title": "Script de Automatización de Reportes",
      "description": "Diseñé un script en Python que extrae datos de múltiples fuentes (Excel, CSVs), los procesa y genera reportes diarios en PDF de forma automática, ahorrando aproximadamente 10 horas de trabajo manual a la semana.",
      "images": [
        "assets/gif.gif"
      ],
      "tags": ["Python", "Automatización", "PDF", "Excel"]
    },
    {
      "title": "Plataforma de Gestión Empresarial a Medida",
      "description": "Sistema web integral para la gestión de procesos internos de una empresa. Incluye módulos de clientes, proyectos y facturación, con un sistema de login y roles de usuario para garantizar la seguridad y el acceso controlado a la información a través de un Dashboard intuitivo.",
      "images": [
        "assets/images.jpeg",
        "assets/images2.jpeg",
        "assets/gif.gif"
      ],
      "tags": ["WebApp", "Gestión", "Seguridad", "Base de Datos", "Login"]
    },
    {
      "title": "Landing Pages de Alto Impacto y Conversión",
      "description": "Creación de páginas de aterrizaje optimizadas para la conversión. Diseño moderno, rápido y totalmente responsivo para capturar la atención del visitante y guiarlo hacia una acción específica, como registrarse o comprar un producto, convirtiendo visitas en clientes.",
      "images": [
        "assets/gif.gif",
        "assets/images2.jpeg"
      ],
      "tags": ["HTML5", "CSS3", "JavaScript", "Marketing", "UI/UX"]
    },
    {
      "title": "Webs Informativas y Educativas Interactivas",
      "description": "Desarrollo de sitios web dedicados a la enseñanza y divulgación. Estas plataformas están diseñadas para presentar contenido de manera clara y estructurada, facilitando el aprendizaje con imágenes, animaciones didácticas y una navegación intuitiva.",
      "images": [
        "assets/images.jpeg",
        "assets/images2.jpeg",
        "assets/gif.gif"
      ],
      "tags": ["Web", "Educación", "Contenido", "SEO", "Interactividad"]
    }
  ],
  "skills": [
    "Python", "Dart & Flutter", "SQL", "JavaScript", "HTML5", "CSS3",
    "Automatización de Procesos (RPA)", "Web Scraping", "Análisis de Datos",
    "Desarrollo Móvil Multiplataforma", "Diseño de APIs", "Gestión de Bases de Datos",
    "Linux", "Git & GitHub", "Docker"
  ],
  "process": [
    {
      "step": "01",
      "title": "Consulta Inicial",
      "description": "Analizamos juntos tus necesidades y objetivos para definir el alcance del proyecto."
    },
    {
      "step": "02",
      "title": "Propuesta Detallada",
      "description": "Te presento una propuesta clara que incluye el plan de trabajo, cronograma y la inversión."
    },
    {
      "step": "03",
      "title": "Desarrollo y Comunicación",
      "description": "Construyo tu solución manteniéndote informado y abierto a tus ideas en cada paso."
    },
    {
      "step": "04",
      "title": "Entrega y Garantía",
      "description": "Te entrego el producto final totalmente funcional, con un período de garantía."
    }
  ]
};

// ===================================================================
// NO NECESITAS MODIFICAR NADA DEBAJO DE ESTA LÍNEA
// ===================================================================

class PortfolioApp {
    constructor(data) {
        this.data = data;
        this.init();
    }

    init() {
        if (this.data) {
            this.renderContent(this.data);
            this.setupEventListeners(this.data);
            this.setupProjectCarousels();
        } else {
            console.error("No se encontraron datos para renderizar el portafolio.");
        }
    }

    renderContent(data) {
        this.renderHeader(data.personal);
        this.renderHero(data.personal, data.availability);
        this.renderAbout(data.about);
        this.renderProjects(data.projects);
        this.renderSkills(data.skills);
        this.renderProcess(data.process);
        this.renderContact(data.personal);
        this.renderFooter(data.personal);
    }
    
    renderHeader(personal) {
        document.querySelector('.nav__logo').textContent = `<${personal.name.split(' ')[0]} />`;
    }

    renderHero(personal, availability) {
        document.getElementById('hero-title').textContent = personal.title;
        document.getElementById('hero-subtitle').textContent = personal.subtitle;
        
        const availabilityStatus = document.getElementById('availability-status');
        if (availability.isAvailable) {
            availabilityStatus.textContent = availability.message;
            availabilityStatus.style.display = 'block';
        } else {
            availabilityStatus.style.display = 'none';
        }

        const socialContainer = document.getElementById('hero-social');
        socialContainer.innerHTML = `
            <a href="mailto:${personal.contact.email}" target="_blank" aria-label="Email"><i class="fas fa-envelope"></i></a>
            <a href="${personal.contact.linkedin}" target="_blank" aria-label="LinkedIn"><i class="fab fa-linkedin"></i></a>
            <a href="${personal.contact.github}" target="_blank" aria-label="GitHub"><i class="fab fa-github"></i></a>
        `;
    }

    renderAbout(about) {
        document.getElementById('about-title').textContent = about.title;
        const container = document.getElementById('about-content');
        container.innerHTML = about.differentiators.map(item => `
            <div class="about__card">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
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
            <article class="project__card">
                <div class="project__image">
                    <div class="carousel__wrapper">
                        ${proj.images.map((img, imgIndex) => `
                            <img src="${img}" alt="Imagen ${imgIndex + 1} del proyecto ${proj.title}" class="carousel__slide ${imgIndex === 0 ? 'active' : ''}">
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
                    <h3>${proj.title}</h3>
                    <p>${proj.description}</p>
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
            let autoSlideInterval;

            const showSlide = (index) => {
                if (index >= slides.length) index = 0;
                if (index < 0) index = slides.length - 1;

                slides.forEach(slide => slide.classList.remove('active'));
                slides[index].classList.add('active');

                dots.forEach(dot => dot.classList.remove('active'));
                dots[index].classList.add('active');

                currentIndex = index;
            };

            const resetAutoSlide = () => {
                clearInterval(autoSlideInterval);
                autoSlideInterval = setInterval(() => {
                    showSlide(currentIndex + 1);
                }, 5000);
            };
            
            nextButton.addEventListener('click', () => {
                showSlide(currentIndex + 1);
                resetAutoSlide();
            });

            prevButton.addEventListener('click', () => {
                showSlide(currentIndex - 1);
                resetAutoSlide();
            });

            dots.forEach(dot => {
                dot.addEventListener('click', (e) => {
                    const slideIndex = parseInt(e.target.dataset.slideTo);
                    showSlide(slideIndex);
                    resetAutoSlide();
                });
            });

            resetAutoSlide();
        });
    }

    renderSkills(skills) {
        const container = document.getElementById('skills-container');
        container.innerHTML = skills.map(skill => `<span class="skill__item">${skill}</span>`).join('');
    }
    
    renderProcess(processSteps) {
        const container = document.getElementById('process-container');
        container.innerHTML = processSteps.map(step => `
            <div class="process__card">
                <div class="process__card-step">${step.step}</div>
                <h3>${step.title}</h3>
                <p>${step.description}</p>
            </div>
        `).join('');
    }

    renderContact(personal) {
        const emailContainer = document.getElementById('contact-email-container');
        if (emailContainer) {
            emailContainer.innerHTML = `
                <p class="contact__email">
                    O si lo prefieres, escríbeme directamente:
                    <a href="mailto:${personal.contact.email}">
                        <i class="fa-solid fa-paper-plane"></i> ${personal.contact.email}
                    </a>
                </p>
            `;
        }
    }

    renderFooter(personal) {
        document.getElementById('footer-text').textContent = `© ${new Date().getFullYear()} ${personal.name}. Todos los derechos reservados.`;
        const socialContainer = document.getElementById('footer-social');
        socialContainer.innerHTML = `
            <a href="mailto:${personal.contact.email}" target="_blank" aria-label="Email"><i class="fas fa-envelope"></i></a>
            <a href="${personal.contact.linkedin}" target="_blank" aria-label="LinkedIn"><i class="fab fa-linkedin"></i></a>
            <a href="${personal.contact.github}" target="_blank" aria-label="GitHub"><i class="fab fa-github"></i></a>
        `;
    }

    setupEventListeners(data) {
        const navToggle = document.getElementById('nav-toggle');
        const navMenu = document.querySelector('.nav__menu');
        const navLinks = document.querySelectorAll('.nav__link');
        const mainContent = document.querySelector('.main');

        if (navToggle) {
            navToggle.addEventListener('click', () => {
                navMenu.classList.toggle('show-menu');
            });
        }
        
        const closeMenu = () => navMenu.classList.remove('show-menu');
        navLinks.forEach(link => link.addEventListener('click', closeMenu));
        mainContent.addEventListener('click', closeMenu);

        const contactForm = document.getElementById('contact-form');
        if (contactForm) {
            contactForm.action = data.personal.formspreeEndpoint;
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
}

document.addEventListener('DOMContentLoaded', () => {
    new PortfolioApp(portfolioData);
});
