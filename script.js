
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
        portfolio: "Portfolio",
        contact: "Bog'lanish",
        hello: "Salom",
        intro: "Mening ismim Zafarbek, Web dasturchi",
        introDesc: "Mening veb-ishlab chiquvchilar portfolioimga xush kelibsiz, men muvaffaqiyatli web-saytlar yaratish ishtiyoqi bilan malakali va ijodiy web-dasturchiman.",
        hire: "Bog'lanish",
        aboutTitle: "Men haqimda",
        frontend: "Frontend dasturchi",
        aboutDesc: "Mening shaxsiy portfolioimga hush kelibsiz men siz uchun o'zimning Portfolioimni taklif qilaman, batafsil Portfolio bo'limiga o'tib ko'rishingiz mumkin.",
        name: "Ismingiz:",
        email: "Emailigiz:",
        message: "Habar qoldiring:",
        submit: "Yuborish" ,
    },
    ru: {
        home: "Главная страница",
        about: "Обо мне",
        skills: "Навыки",
        portfolio: "Портфолио",
        contact: "Связаться",
        hello: "Привет",
        intro: "Меня зовут Зафарбек, Веб-разработчик",
        introDesc: "Добро пожаловать в мое портфолио веб-разработчика. Я опытный и креативный веб-разработчик, страстно желающий создавать успешные веб-сайты.",
        hire: "связь",
        aboutTitle: "Обо мне",
        frontend: "разработчик интерфейса" ,
        aboutDesc: "Добро пожаловать в мое личное портфолио, я предлагаю вам свое Портфолио, вы можете перейти в подробный раздел Портфолио." ,
        name: "Ваше имя:" ,
        email: "ваша электронная почта:" ,
        message: "оставить сообщение:" ,
        submit: "отправить" ,
    },
    en: {
        home: "home",
        about: "about",
        skills: "skills",
        portfolio: "Portfolio",
        contact: "contact",
        hello: "hello",
        intro: "My name is Zafarbek, a web developer",
        introDesc: "Welcome to my web developer portfolio, I am a skilled and creative web developer with a passion for building successful websites.",
        hire: "Connection",
        aboutTitle: "about me",
        frontend: "Frontend developer",
        aboutDesc: "Welcome to my personal portfolio, I offer my Portfolio for you, you can go to the detailed Portfolio section.",
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
