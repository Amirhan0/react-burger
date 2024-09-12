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

//////////////////////-- get --///////////////////////////////////////////

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
