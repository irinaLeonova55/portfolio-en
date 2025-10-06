import portfolio from '../assets/images/portfolio.png';
import todo from '../assets/images/todo.jpg';
import mobileapp from '../assets/images/mobileapp.jpg';
import accordion from '../assets/images/accordion.jpg';

export const projects = [
  {
    id: 1,
    img: portfolio,
    tags: ['Website', 'React', 'SCSS Modules', 'IntersectionObserver API'],
    title: 'Portfolio Website',
    desc: 'A personal portfolio site showcasing my projects and skills, fully responsive and built with React and SCSS Modules. Features include smooth section-based navigation with IntersectionObserver, dark/light theme switching, subtle animations for an engaging user experience, multilingual support (EN/RU), Open Graph optimization.',
    previewLink: '#',
    codeLink: '#',
  },
  {
    id: 2,
    img: todo,
    tags: ['Mobile App', 'React'],
    title: 'ToDo App',
    desc: 'A minimalist task management app. Users can add, remove, and mark tasks as completed. This project demonstrates working with React state management and basic animations.',
    previewLink: 'https://irinaleonova55.github.io/todo-react/',
    codeLink: 'https://github.com/irinaLeonova55/todo-react',
  },
  {
    id: 3,
    img: mobileapp,
    tags: ['Mobile App', 'Vanilla JS', 'API'],
    title: 'Weather App',
    desc: 'A weather application that displays forecasts based on user-selected cities. Data is fetched from an open API and updates in real time. The interface is fully responsive and user-friendly.',
    previewLink: 'https://irinaleonova55.github.io/wheather-mobile-app/',
    codeLink: 'https://github.com/irinaLeonova55/wheather-mobile-app',
  },
  {
    id: 4,
    img: accordion,
    tags: ['Website', 'React'],
    title: 'FAQ Accordion',
    desc: 'An interactive FAQ section built with an accordion component. Each question expands with smooth animation to enhance user experience. Focused on clean, readable code without unnecessary dependencies.',
    previewLink: 'https://irinaleonova55.github.io/faq-s-react/',
    codeLink: 'https://github.com/irinaLeonova55/faq-s-react',
  },
];
