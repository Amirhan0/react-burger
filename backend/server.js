const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const app = express();
const port = 3001;
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "react_burger",
});

db.connect((err) => {
  if (err) {
    console.log("Ошибка в подключении к базе данных SQL");
    return;
  }
  console.log("Подключение к базе данных успешна");
});

app.use(cors());
app.use(express.json());
//////////////////////-- post --///////////////////////////////////////////
app.post("/register", (req, res) => {
  const { email, phoneNumber, passwordUser } = req.body;

  if (!email || !phoneNumber || !passwordUser) {
    return res.status(400).json({ message: "Все поля обязательны" });
  }

  const query =
    "INSERT INTO users (email, phoneNumber, passwordUser) VALUES (?, ?, ?)";

  db.query(query, [email, phoneNumber, passwordUser], (err, result) => {
    if (err) {
      console.log("Ошибка регистрации", err);
      return res.status(500).json({ message: "Ошибка при регистрации" });
    }
    const userId = result.insertId;
    res
      .status(200)
      .json({ message: "Пользователь успешно зарегистрирован!", id: userId });
  });
});

app.post("/update-profile", (req, res) => {
  const { id, nameUser, image } = req.body;

  if (!nameUser || !image || !id) {
    return res.status(400).json({ message: "Все поля обязательны" });
  }

  const query = `UPDATE users SET nameUser = ?, image = ? WHERE id = ?`;

  db.query(query, [nameUser, image, id], (err, result) => {
    if (err) {
      console.log("Ошибка при обновление профиля", err);
      return res.status(500).json({ message: "Ошибка при обновлении профиля" });
    }
    res.status(200).json({ message: "Профиль успешно обновлен!" });
  });
});

app.post("/login", (req, res) => {
  const { email, passwordUser } = req.body;
  console.log("Полученные данные:", email, passwordUser);

  const query = "SELECT * FROM users WHERE email = ? AND passwordUser = ?";

  db.query(query, [email, passwordUser], (err, result) => {
    if (err) {
      console.log("Ошибка при запросе к базе данных:", err);
      return res.status(500).json({ message: "Ошибка сервера" });
    }

    console.log("Результат запроса:", result);

    if (result.length === 0) {
      return res.status(401).json({ message: "Неправильный email или пароль" });
    }

    res.status(200).json({ message: "Успешный вход в свой профиль" });
  });
});

app.post("/products", (req, res) => {
  const { nameProduct, description, price, weight, image } = req.body;

  const query =
    "INSERT INTO products (nameProduct, description, price, weight, image) VALUES (?,?,?,?,?)";

  db.query(
    query,
    [nameProduct, description, price, weight, image],
    (err, result) => {
      if (err) {
        console.log("Ошибка при добавление товара", err);
        return res
          .status(500)
          .json({ message: "Ошибка при добавление товара" });
      }
      res.status(200).json({ message: "Товар успешно добавлен" });
    }
  );
});

app.post("/categoryes", (req, res) => {
  const { categoryName, imageCategory } = req.body;

  const query =
    "INSERT INTO category (categoryName, imageCategory) VALUES (?, ?)";

  db.query(query, [categoryName, imageCategory], (err, result) => {
    if (err) {
      console.log("Ошибка при добавление категории", err);
      return res
        .status(500)
        .json({ message: "Ошибка при добавлении катгеории" });
    }
    res.status(200).json({ message: "Товар успешно добавлен" });
  });
});

//////////////////////-- get --///////////////////////////////////////////
app.get("/categoryes", (req, res) => {
  const query = "SELECT categoryName, imageCategory FROM category";

  db.query(query, (err, result) => {
    if (err) {
      console.log("Ошибка при получении списка категорий:", err);
      return res
        .status(500)
        .json({ message: "Ошибка при получении категорий" });
    }
    res.status(200).json(result);
  });
});

app.get("/products", (req, res) => {
  const query =
    "SELECT id, nameProduct, description, price, weight, image FROM products";

  db.query(query, (err, result) => {
    if (err) {
      console.log("Ошибка при получении списка товаров:", err);
      return res.status(500).json({ message: "Ошибка при получении товаров" });
    }
    res.status(200).json(result);
  });
});

app.get("/products/:id", (req, res) => {
  const { id } = req.params;

  const query = "SELECT * FROM products WHERE id = ?";

  db.query(query, [id], (err, result) => {
    if (err) {
      console.log("Ошибка при получении продукта:", err);
      return res.status(500).json({ message: "Ошибка сервера" });
    }

    if (result.length === 0) {
      return res.status(404).json({ message: "Продукт не найден" });
    }

    res.status(200).json(result[0]);
  });
});


app.get("/users", (req, res) => {
  const query =
    "SELECT id, email, phoneNumber, passwordUser, nameUser, image FROM users";

  db.query(query, (err, result) => {
    if (err) {
      console.log("Ошибка при получение пользователя");
      return;
    }
    res.status(200).json(result);
  });
});

app.listen(port, () => {
  console.log("Сервер запущен");
});
