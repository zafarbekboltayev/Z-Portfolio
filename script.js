
document.addEventListener('DOMContentLoaded', () => {
    const icon = document.getElementById('icon');
    const body = document.body;

    icon.addEventListener('click', () => {
        body.classList.toggle('dark-mode');

        if (body.classList.contains('dark-mode')) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    });
});
const translations = {
    uz: {
        home: "Bosh sahifa",
        about: "Men haqimda",
        skills: "Mahorat",
        services: "Xizmatlar",
        portfolio: "Portfolio",
        contact: "Bog'lanish",
        hello: "Salom",
        intro: "Mening ismim Zafarbek, Web dasturchi",
        introDesc: "Mening veb-ishlab chiquvchilar portfolioimga xush kelibsiz, men muvaffaqiyatli web-saytlar yaratish ishtiyoqi bilan malakali va ijodiy web-dasturchiman.",
        hire: "Bog'lanish",
        aboutTitle: "Men haqimda",
        frontend: "Frontend dasturchi",
        aboutDesc: "Mening shaxsiy portfolioimga hush kelibsiz men siz uchun o'zimning Portfolioimni taklif qilaman, batafsil Portfolio bo'limiga o'tib ko'rishingiz mumkin.",
        xizmat:"Xizmatlar",
        dev: "Dasturlash",
        bir:"Biz veb-saytlar va mobil ilovalar yaratamiz.",
        design:"Dizayn",
        ikki:"Kreativ dizayn xizmatlari taklif etamiz.",
        bog:"Bog'lanish",
        uch:"Server va hosting xizmatlarini taqdim etamiz.",
        name: "Ismingiz:",
        email: "Emailigiz:",
        message: "Habar qoldiring:",
        submit: "Yuborish" ,
    },
    ru: {
        home: "Главная страница",
        about: "Обо мне",
        skills: "Навыки",
        services: "Услуги",
        portfolio: "Портфолио",
        contact: "Связаться",
        hello: "Привет",
        intro: "Меня зовут Зафарбек, Веб-разработчик",
        introDesc: "Добро пожаловать в мое портфолио веб-разработчика. Я опытный и креативный веб-разработчик, страстно желающий создавать успешные веб-сайты.",
        hire: "связь",
        aboutTitle: "Обо мне",
        frontend: "разработчик интерфейса" ,
        aboutDesc: "Добро пожаловать в мое личное портфолио, я предлагаю вам свое Портфолио, вы можете перейти в подробный раздел Портфолио." ,
        xizmat:"Услуги",
        dev:"программирование",
        bir:"Мы создаем сайты и мобильные приложения.",
        design:"Дизайн",
        ikki:"Предлагаем услуги креативного дизайна.",
        bog:"Связь",
        uch:"Предоставляем услуги сервера и хостинга.",
        fgfh:"Услуги.",
        name: "Ваше имя:" ,
        email: "ваша электронная почта:" ,
        message: "оставить сообщение:" ,
        submit: "отправить" ,
    },
    en: {
        home: "Home",
        about: "About",
        skills: "Skills",
        services: "Services",
        portfolio: "Portfolio",
        contact: "Contact",
        hello: "Hello",
        intro: "My name is Zafarbek, a web developer",
        introDesc: "Welcome to my web developer portfolio, I am a skilled and creative web developer with a passion for building successful websites.",
        hire: "Connection",
        aboutTitle: "About me",
        frontend: "Frontend developer",
        aboutDesc: "Welcome to my personal portfolio, I offer my Portfolio for you, you can go to the detailed Portfolio section.",
        xizmat:"Services.",
        dev:"programming",
        bir:"We create websites and mobile applications.",
        design:"Design",
        ikki:"We offer creative design services.",
        bog:"Connection",
        uch:"We provide server and hosting services.",
        name: "Your name:",
        email: "Your gmail:",
        message: "Leave a message:",
        submit: "Submit" ,
    }
};


function setLanguage(language) {
    document.querySelectorAll('.translatable').forEach(element => {
        const key = element.getAttribute('data-key');
        element.textContent = translations[language][key];
    });
}


document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".service-card");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "scale(1)";
            } else {
                entry.target.style.opacity = "0";
                entry.target.style.transform = "scale(0.9)";
            }
        });
    });

    cards.forEach((card) => {
        card.style.transition = "opacity 0.5s ease, transform 0.5s ease";
        observer.observe(card);
    });
});
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });
    });
});
