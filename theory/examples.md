# Приклади HTML + CSS (поглиблений рівень)

## 🔸 Приклад 1: Семантична HTML-сторінка

```html
<!DOCTYPE html>
<html lang="uk">
  <head>
    <meta charset="UTF-8">
    <title>Мій блог</title>
  </head>
  <body>
    <header>
      <h1>Веброзробка для початківців</h1>
    </header>

    <nav>
      <ul>
        <li><a href="#about">Про мене</a></li>
        <li><a href="#articles">Статті</a></li>
        <li><a href="#contacts">Контакти</a></li>
      </ul>
    </nav>

    <main>
      <section id="about">
        <h2>Про мене</h2>
        <p>Я починаючий веброзробник, який вивчає HTML та CSS.</p>
      </section>

      <section id="articles">
        <h2>Останні статті</h2>
        <article>
          <h3>Як працює HTML</h3>
          <p>HTML задає структуру сторінки...</p>
        </article>
      </section>
    </main>

    <footer>
      <p>&copy; 2025 Веброзробка з нуля</p>
    </footer>
  </body>
</html>
```

---

## 🔸 Приклад 2: Зовнішній CSS-файл

```css
/* styles/custom.css */
body {
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
  color: #333;
  line-height: 1.6;
}

header {
  background: #004080;
  color: white;
  padding: 1rem;
  text-align: center;
}

nav ul {
  display: flex;
  gap: 1rem;
  list-style: none;
  justify-content: center;
  padding: 0;
}

nav a {
  text-decoration: none;
  color: #004080;
  font-weight: bold;
}
```

---

## 🔸 Приклад 3: Flexbox-розмітка

```html
<div class="flex-container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>
```

```css
.flex-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.item {
  width: 100px;
  height: 100px;
  background-color: lightblue;
  text-align: center;
  line-height: 100px;
  margin: 10px;
}
```

---

## 🔸 Приклад 4: Адаптивний макет

```css
@media (max-width: 600px) {
  .flex-container {
    flex-direction: column;
  }
}
```

---

*Ці приклади створені за допомогою генеративного ШІ (ChatGPT).*
