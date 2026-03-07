// Projects Data
const projects = [
     { title: "Shooting Game", desc: "A fun and interactive shooting game with simple mechanics.", category: "Scratch", previewLink: "https://scratch.mit.edu/projects/1189668684" },
     { title: "Clock", desc: "Digital/Analog clock visualization with real-time tracking.", category: "Scratch", previewLink: "https://scratch.mit.edu/projects/1185630126" },
     { title: "MapFinder (Scratch)", desc: "A creative app to locate places using custom maps.", category: "Scratch", previewLink: "https://scratch.mit.edu/projects/1190290674" },

     { title: "IRCTC", desc: "A UI re-designed version of the popular railway booking portal.", category: "HTML/CSS", previewLink: "https://7-sriram-s.github.io/IRCTC-Redesigned-Page/", codeLink: "https://github.com/7-SRIRAM-S/IRCTC-Redesigned-Page" },
     { title: "Meet-the-brain Recreation", desc: "Pixel-perfect clone of a landing page focusing on responsive design.", category: "HTML/CSS", codeLink: "https://github.com/7-SRIRAM-S/Meet-the-brain-Page-Recreation" },
     { title: "Page Recreation", desc: "Complex layout cloning utilizing CSS grid and flexbox.", category: "HTML/CSS", codeLink: "https://github.com/7-SRIRAM-S/Page_Recreation" },

     { title: "MapFinder", desc: "Interactive map utility built with vanilla JavaScript.", category: "JavaScript", previewLink: "https://7-sriram-s.github.io/Map-Finder-Game/", codeLink: "https://github.com/7-SRIRAM-S/Map-Finder-Game" },
     { title: "Age Calculator", desc: "A handy tool to compute accurate age dynamically.", category: "JavaScript", previewLink: "https://7-sriram-s.github.io/Age-Calculator/", codeLink: "https://github.com/7-SRIRAM-S/Age-Calculator" },
     { title: "Problem Solving Programs", desc: "A collection of algorithmic challenges solved in JS.", category: "JavaScript", previewLink: "https://7-sriram-s.github.io/DOM-ProblemSolving/", codeLink: "https://github.com/7-SRIRAM-S/DOM-ProblemSolving" },

     { title: "MatchMaker", desc: "Algorithm implementation to find optimal matches between sets.", category: "Java", codeLink: "https://github.com/7-SRIRAM-S/match_maker_with_db" },
     { title: "TreeMap Implementation", desc: "Comprehensive repository of core tree map implementation.", category: "Java", codeLink: "https://github.com/7-SRIRAM-S/Student-Grading-System-TreeMap" },
     { title: "Student Manager", desc: "Console application to manage student records efficiently.", category: "Java", codeLink: "https://github.com/7-SRIRAM-S/StudentManager" },

     { title: "Linked List", desc: "Singly and Doubly Linked List operations and edge cases.", category: "DSA", codeLink: "https://github.com/7-SRIRAM-S/DSA/blob/master/LinkedList.java" },
     { title: "Stack", desc: "LIFO data structure with various real-world application examples.", category: "DSA", codeLink: "https://github.com/7-SRIRAM-S/DSA/blob/master/Stack.java" },
     { title: "Binary Search Tree", desc: "BST traversals (Inorder, Preorder, Postorder) and manipulation.", category: "DSA", codeLink: "https://github.com/7-SRIRAM-S/DSA/blob/master/Tree.java" },

     { title: "Planet Page", desc: "A dynamic web app serving facts about planets via API.", category: "Node.js", codeLink: "https://github.com/7-SRIRAM-S/Planet-Facts" },
     { title: "Rock-Paper-Scissors", desc: "Made a two player mode Game using Web socket", category: "Node.js", codeLink: "https://github.com/7-SRIRAM-S/Rock-Paper-Scissor-Game" },

     { title: "Chrome Extension – Tab Blocker", desc: "A productivity tool to block distracting websites.", category: "Miscellaneous",  codeLink: "https://github.com/7-SRIRAM-S/TabBlocker-Extension.git" },
     { title: "Testing – Car Website Testing", desc: "Automated functional tests built for an automotive site.", category: "Miscellaneous",  codeLink: "https://github.com/7-SRIRAM-S/Automation-Testing.git" }
];

// Interests Data
const interests = [
     { title: "Rust Language Basics", desc: "Exploring memory safety and concurrency without garbage collection.", link: "https://github.com/7-SRIRAM-S/Guessing-Game-Rust" },
     { title: "WASM Calculator", desc: "A web based calculator compiled down to WebAssembly for performance.", link: "https://github.com/7-SRIRAM-S/Arithmetic-Calculator-WASM.git" },
     { title: "Formar Portal", desc: "Ideas around building a portal for comprehensive form management.", link: "https://farmers-portal-ws7i.onrender.com/" },
     { title: "AI-ChatBot", desc: "Multilanguage AI Chatbot using Gemini API-key with voice", link: "https://chatbot-ai-25.onrender.com/" },
     { title: "LLVM", desc: "Studying the fundamentals of compiler infrastructure and intermediate representation.", link: "https://llvm.org/docs/index.html" },
     { title: "Own Wrapper for yargs Library", desc: "Made a userfriendly wrapper for yargs to handle command-line arguments.", link: "https://github.com/7-SRIRAM-S/custom-wrapper-yargs.git" }
];

// DOM Elements
const projectsContainer = document.getElementById('projects-content');
const interestsContainer = document.getElementById('interests-grid');
const filterBtns = document.querySelectorAll('.filter-btn');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const showMoreBtn = document.getElementById('show-more-btn');
const allProjectsLayout = document.getElementById('all-projects');
const themeToggleBtn = document.getElementById('theme-toggle');
const sunIcon = document.querySelector('.sun-icon');
const moonIcon = document.querySelector('.moon-icon');

// Theme Toggle Logic
function setTheme(isLight) {
     if (isLight) {
          document.documentElement.classList.add('light-mode');
          sunIcon.style.display = 'none';
          moonIcon.style.display = 'block';
          localStorage.setItem('theme', 'light');
     } else {
          document.documentElement.classList.remove('light-mode');
          sunIcon.style.display = 'block';
          moonIcon.style.display = 'none';
          localStorage.setItem('theme', 'dark');
     }
}

// Check saved theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
     setTheme(true);
}

themeToggleBtn.addEventListener('click', () => {
     const isLight = !document.documentElement.classList.contains('light-mode');
     setTheme(isLight);
});

// Toggle Mobile Menu
hamburger.addEventListener('click', () => {
     navLinks.classList.toggle('active');
     hamburger.classList.toggle('active');
});

// Show More Projects Logic
showMoreBtn.addEventListener('click', () => {
     allProjectsLayout.classList.remove('hidden');
     showMoreBtn.parentElement.classList.add('hidden');
     // Ensure the first category is rendered
     const activeBtn = document.querySelector('.filter-btn.active');
     if (activeBtn) {
          renderProjects(activeBtn.dataset.filter);
     }
});

// Render Projects
function renderProjects(category) {
     projectsContainer.innerHTML = '';

     let filtered = projects;
     if (category !== 'All') {
          filtered = projects.filter(p => p.category === category);
     }

     if (filtered.length === 0) {
          projectsContainer.innerHTML = '<p style="color:var(--text-muted)">No projects found in this category.</p>';
          return;
     }

     filtered.forEach((project, index) => {
          const card = document.createElement('div');
          card.className = 'project-card';
          card.style.animationDelay = `${index * 0.1}s`;

          // Category Icon Mapping
          const iconMap = {
               "HTML/CSS": `<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" style="width:24px;height:24px;" alt="HTML">`,
               "JavaScript": `<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" style="width:24px;height:24px;" alt="JS">`,
               "Java": `<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" style="width:24px;height:24px;" alt="Java">`,
               "DSA": `<svg viewBox="0 0 24 24" width="24" height="24" fill="var(--accent)"><path d="M21 16.5c0 .38-.21.71-.53.88l-7.9 4.44c-.16.12-.36.18-.57.18-.21 0-.41-.06-.57-.18l-7.9-4.44A.991.991 0 0 1 3 16.5v-9c0-.38.21-.71.53-.88l7.9-4.44c.16-.12.36-.18.57-.18.21 0 .41.06.57.18l7.9 4.44c.32.17.53.5.53.88v9M12 4.15 5.6 7.75 12 11.35l6.4-3.6L12 4.15M4.5 9.8l6.75 3.8v7.26L4.5 17.06V9.8m15 7.26-6.75 3.8v-7.26l6.75-3.8v7.26z"/></svg>`,
               "Node.js": `<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" style="width:24px;height:24px;" alt="Nodejs">`,
               "Scratch": `<img src="https://upload.wikimedia.org/wikipedia/commons/7/75/Scratch.logo.S.png" style="width:24px;height:24px;object-fit:contain;" alt="Scratch">`,
               "Miscellaneous": `<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" style="width:24px;height:24px;" alt="Misc">`
          };
          const catIcon = iconMap[project.category] || '';

          let linksHTML = '';
          if (project.previewLink || project.codeLink) {
               linksHTML += '<div class="project-links">';
               if (project.previewLink) {
                    linksHTML += `<a href="${project.previewLink}" target="_blank" class="btn btn-primary sm">Preview</a>`;
               }
               if (project.codeLink) {
                    linksHTML += `<a href="${project.codeLink}" target="_blank" class="btn btn-secondary sm">Code</a>`;
               }
               linksHTML += '</div>';
          }

          card.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.5rem;">
                <h3 style="margin-bottom: 0;">${project.title}</h3>
                <div title="${project.category}">${catIcon}</div>
            </div>
            <p>${project.desc}</p>
            ${linksHTML}
        `;
          projectsContainer.appendChild(card);
     });
}

// Filter Logic
filterBtns.forEach(btn => {
     btn.addEventListener('click', () => {
          // Remove active class
          filterBtns.forEach(b => b.classList.remove('active'));
          // Add active class
          btn.classList.add('active');
          // Render category
          renderProjects(btn.dataset.filter);
     });
});

// Render Interests
function renderInterests() {
     interests.forEach((interest, index) => {
          const card = document.createElement('div');
          card.className = `interest-card fade-up`;
          card.style.transitionDelay = `${(index % 4) * 0.1}s`;

          card.innerHTML = `
            <h3>${interest.title}</h3>
            <p>${interest.desc}</p>
        `;

          if (interest.link) {
               card.style.cursor = 'pointer';
               card.addEventListener('click', () => {
                    window.open(interest.link, '_blank');
               });
               // Optional: Add a subtle hover effect hint via inline CSS
               card.onmouseover = () => card.style.transform = 'translateY(-5px)';
               card.onmouseout = () => card.style.transform = '';
          }

          interestsContainer.appendChild(card);
     });
}

// Initial Rendering
renderInterests();

// Typing Effect for Subtitle
const typingText = document.getElementById('typing-text');
const textArray = ["Future Software Engineer","Lifelong Learner","Research-Driven Learner"];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeWriter() {
     const currentText = textArray[textIndex];

     if (isDeleting) {
          typingText.textContent = currentText.substring(0, charIndex - 1);
          charIndex--;
     } else {
          typingText.textContent = currentText.substring(0, charIndex + 1);
          charIndex++;
     }

     let typeSpeed = 100;
     if (isDeleting) {
          typeSpeed /= 2;
     }

     if (!isDeleting && charIndex === currentText.length) {
          typeSpeed = 2000;
          isDeleting = true;
     } else if (isDeleting && charIndex === 0) {
          isDeleting = false;
          textIndex = (textIndex + 1) % textArray.length;
          typeSpeed = 500;
     }

     setTimeout(typeWriter, typeSpeed);
}

// Start typing effect slightly after element appears
setTimeout(typeWriter, 800);

// Intersection Observer for scroll animations
const observerOptions = {
     threshold: 0.1,
     rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
     entries.forEach(entry => {
          if (entry.isIntersecting) {
               entry.target.classList.add('appear');
               // Remove observe to prevent repeat animation
               observer.unobserve(entry.target);
          }
     });
}, observerOptions);

// Observe all elements with animation classes
document.querySelectorAll('.fade-in, .fade-up, .slide-in, .slide-in-left, .slide-in-right').forEach(el => {
     observer.observe(el);
});

// Reactivate observation if filter changes (for projects specifically)
function reObserveProjects() {
     document.querySelectorAll('.project-card').forEach(el => {
          // Direct addition since animation is handled by css animation delay
          el.classList.add('appear');
     });
}

// Navbar Scroll Effect and Active Section Highlighting
const navbar = document.getElementById('navbar');
const sections = document.querySelectorAll('section, header');

window.addEventListener('scroll', () => {
     let current = '';

     if (window.scrollY > 50) {
          navbar.style.boxShadow = '0 4px 12px rgba(0,0,0,0.5)';
          navbar.style.padding = '0.5rem 0';
     } else {
          navbar.style.boxShadow = '0 1px 0 var(--border-color)';
          navbar.style.padding = '0';
     }

     sections.forEach(section => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;
          // Trigger when the section reaches the middle of the viewport
          if (scrollY >= sectionTop - (window.innerHeight / 2)) {
               current = section.getAttribute('id');
          }
     });

     // Check if user has scrolled to the very bottom
     if ((window.innerHeight + Math.round(window.scrollY)) >= document.body.offsetHeight - 50) {
          current = 'contact';
     }

     document.querySelectorAll('.nav-link').forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href').includes(current)) {
               link.classList.add('active');
          }
     });
});

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-link').forEach(link => {
     link.addEventListener('click', () => {
          navLinks.classList.remove('active');
          hamburger.classList.remove('active');
     });
});
