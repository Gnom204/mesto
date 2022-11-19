# Проект: Место
### [Ссылка на проект:]()
### Обзор

* Figma
* Стек
* Описание
* Новые навыки

**Figma**

* [Ссылка на макет в Figma](https://www.figma.com/file/2cn9N9jSkmxD84oJik7xL7/JavaScript.-Sprint-4?node-id=0%3A1)

**Стек**

![HYML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E) 

**Описание**

Это мой первый проект на языке JavaScript, который мне очень понравился. Проект напоминает небольшую социальную сеть, где можно постить картинки, ставить лайки и изменять свой профиль, но пока это делать нельзя.

**Новые навыки**

Во время написания страницы, я приобрел новые навыки. Например:
* Работа с формами
* Работа с DOM элементами
* Создание попапов
* Научился заваривать матчу

<!DOCTYPE html>
<html lang="en">

<head>
    <link rel="stylesheet" href="./pages/index.css">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mesto</title>
</head>

<body class="page">
    <header class="header">
        <img src="./images/logo/logo.png" alt="Логотип с надписью Место" class="header__logo">
    </header>
    <main class="content">
        <section class="profile">
            <img src="./images/jak-if-kusto.png" alt="Фотография Жака-Иф-Кусто" class="profile__avatar">
            <div class="profile__intro">
                <div class="profile__container">
                    <h1 class="profile__title">Жак-Ив Кусто</h1>
                    <div class="profile__edit-button"></div>
                </div>
                <p class="profile__subtitle">Исследователь океана</p>
            </div>
            <div class="profile__add-button">
                <div class="profile__plus"></div>
            </div>
        </section>
        <section class="elements">
            <ul class="elements__container">
                <li class="element">
                    <img src="./images/castle.png" alt="Разрушенная церковь на фоне гор" class="element__img">
                    <div class="element__group">
                        <h2 class="element__heading">Карачаевск</h2>
                        <img src="./images/svg/heart.svg" alt="иконка лайка" class="element__like">
                    </div>
                </li>
                <li class="element">
                    <img src="./images/field.png" alt="Разрушенная церковь на фоне гор" class="element__img">
                    <div class="element__group">
                        <h2 class="element__heading">Гора Эльбрус</h2>
                        <img src="./images/svg/heart.svg" alt="иконка лайка" class="element__like">
                    </div>
                </li>
                <li class="element">
                    <img src="./images/mountain.png" alt="Разрушенная церковь на фоне гор" class="element__img">
                    <div class="element__group">
                        <h2 class="element__heading">Домбай</h2>
                        <img src="./images/svg/heart.svg" alt="иконка лайка" class="element__like">
                    </div>
                </li>
                <li class="element">
                    <img src="./images/field.png" alt="Разрушенная церковь на фоне гор" class="element__img">
                    <div class="element__group">
                        <h2 class="element__heading">Гора Эльбрус</h2>
                        <img src="./images/svg/heart.svg" alt="иконка лайка" class="element__like">
                    </div>
                </li>
                <li class="element">
                    <img src="./images/mountain.png" alt="Разрушенная церковь на фоне гор" class="element__img">
                    <div class="element__group">
                        <h2 class="element__heading">Домбай</h2>
                        <img src="./images/svg/heart.svg" alt="иконка лайка" class="element__like">
                    </div>
                </li>
                <li class="element">
                    <img src="./images/castle.png" alt="Разрушенная церковь на фоне гор" class="element__img">
                    <div class="element__group">
                        <h2 class="element__heading">Карачаево-Черкесск</h2>
                        <img src="./images/svg/heart.svg" alt="иконка лайка" class="element__like">
                    </div>
                </li>
            </ul>
        </section>
    </main>
    <footer class="footer">
        <p class="footer__copyright">&copy; 2020 Mesto Russia</p>
    </footer>
    <!-- Попап -->
    <section class="popup">
        <div class="popup__container">
            <img src="./images/svg/Close Icon.svg" alt="Крестик,закрывающий попап" class="popup__close">
            <div class="popup__zone">
                <h2 class="popup__heading">Редактировать профиль</h2>
                <form class="popup__forms" method="get" action="#">
                    <input type="text" class="popup__form popup__form_name">
                    <input type="text" class="popup__form popup__form_description">
                    <button class="popup__save-button" type="submit">Сохранить</button>
                </form>
            </div>
        </div>
    </section>
    <script src="./scripts/index.js"></script>
</body>

</html>