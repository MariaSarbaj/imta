export const NavDataRu =[
    {title: 'Главная', action: function (event) {console.log(event.target.innerText)}},
    {title: 'Услуги', action: function (event) {console.log(event.target.innerText)}, subMenu:[
            {title: 'Создание веб-сайта', action: function (event) {console.log(event.target.innerText)}},
            {title: 'Настройка рекламных компаний', action: function (event) {console.log(event.target.innerText)}},
            {title: 'Видеосъемка и видеоблоги', action: function (event) {console.log(event.target.innerText)}},
            {title: 'Создание продающих сообществ', action: function (event) {console.log(event.target.innerText)}},
            {title: 'Автоматизация работы предприятия', action: function (event) {console.log(event.target.innerText)}},
            {title: 'Упаковка бизнеса. Отдел маркетинга', action: function (event) {console.log(event.target.innerText)}},
        ]},
    {title: 'Портфолио', action: function (event) {console.log(event.target.innerText)}},
    {title: 'О нас', action: function (event) {console.log(event.target.innerText)}, subMenu:[
            {title: 'О компании', action: function (event) {console.log(event.target.innerText)}},
            {title: 'Блог', action: function (event) {console.log(event.target.innerText)}},
            {title: 'Отзывы', action: function (event) {console.log(event.target.innerText)}},
        ]},
    {title: 'Контакты', action: function (event) {console.log(event.target.innerText)}},

]