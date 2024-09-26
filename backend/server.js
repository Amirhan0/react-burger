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

// Регистрация пользователя
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

// Обновление профиля
app.post("/update-profile", (req, res) => {
  const { id, nameUser, image } = req.body;

  if (!nameUser || !image || !id) {
    return res.status(400).json({ message: "Все поля обязательны" });
  }

  const query = `UPDATE users SET nameUser = ?, image = ? WHERE id = ?`;

  db.query(query, [nameUser, image, id], (err, result) => {
    if (err) {
      console.log("Ошибка при обновлении профиля", err);
      return res.status(500).json({ message: "Ошибка при обновлении профиля" });
    }
    res.status(200).json({ message: "Профиль успешно обновлен!" });
  });
});

// Вход в систему
app.post("/login", (req, res) => {
  const { email, passwordUser } = req.body;

  const query = "SELECT * FROM users WHERE email = ? AND passwordUser = ?";

  db.query(query, [email, passwordUser], (err, result) => {
    if (err) {
      console.log("Ошибка при запросе к базе данных:", err);
      return res.status(500).json({ message: "Ошибка сервера" });
    }

    if (result.length === 0) {
      return res.status(401).json({ message: "Неправильный email или пароль" });
    }

    const user = result[0];
    res.status(200).json({
      message: "Успешный вход в свой профиль",
      user: {
        id: user.id,
        email: user.email,
        nameUser: user.nameUser,
        image: user.image,
      },
    });
  });
});

// Добавление продукта
app.post("/products", (req, res) => {
  const { nameProduct, description, price, weight, image } = req.body;

  const query =
    "INSERT INTO products (nameProduct, description, price, weight, image) VALUES (?, ?, ?, ?, ?)";

  db.query(
    query,
    [nameProduct, description, price, weight, image],
    (err, result) => {
      if (err) {
        console.log("Ошибка при добавлении товара", err);
        return res
          .status(500)
          .json({ message: "Ошибка при добавлении товара" });
      }
      res.status(200).json({ message: "Товар успешно добавлен" });
    }
  );
});

// Добавление категории
app.post("/categoryes", (req, res) => {
  const { categoryName, imageCategory } = req.body;

  const query =
    "INSERT INTO category (categoryName, imageCategory) VALUES (?, ?)";

  db.query(query, [categoryName, imageCategory], (err, result) => {
    if (err) {
      console.log("Ошибка при добавлении категории", err);
      return res
        .status(500)
        .json({ message: "Ошибка при добавлении категории" });
    }
    res.status(200).json({ message: "Категория успешно добавлена" });
  });
});

// Оформление заказа
app.post("/orders", (req, res) => {
  const { userId, totalPrice, paymentMethod, address, nameUser } = req.body;

  // SQL-запрос для добавления заказа
  const orderQuery =
    "INSERT INTO orders (userId, totalPrice, paymentMethod, nameUser, address) VALUES (?, ?, ?, ?, ?)";

  db.query(
    orderQuery,
    [userId, totalPrice, paymentMethod, nameUser, address],
    (err, result) => {
      if (err) {
        console.log("Ошибка при добавлении данных в orders", err);
        return res
          .status(500)
          .json({ message: "Ошибка при добавлении данных в orders" });
      }

      // Возвращаем ID созданного заказа
      const orderId = result.insertId;
      res.status(200).json({ orderId });
    }
  );
});

app.post("/orders-items", (req, res) => {
  const { items } = req.body;

  console.log("Полученные данные для orders-items:", { items });

  if (!items || items.length === 0) {
    return res
      .status(400)
      .json({ message: "Не все обязательные данные переданы" });
  }

  const orderItemsQueries = items.map((item) => {
    const query =
      "INSERT INTO orders_items ( userId, productId, price, quantity) VALUES (?, ?, ?, ?)";

    // Логируем каждый элемент заказа
    console.log("Элемент заказа:", item);

    return new Promise((resolve, reject) => {
      db.query(
        query,
        [item.userId, item.productId, item.price, item.quantity],
        (err) => {
          if (err) {
            console.log("Ошибка при добавлении элемента заказа:", err);
            reject(err);
          } else {
            resolve();
          }
        }
      );
    });
  });

  Promise.all(orderItemsQueries)
    .then(() =>
      res.status(200).json({ message: "Элементы заказа успешно добавлены" })
    )
    .catch((err) => {
      console.log("Ошибка при добавлении элементов заказа:", err);
      res
        .status(500)
        .json({ message: "Ошибка при добавлении элементов заказа" });
    });
});

app.get("/orders-items/:userId", (req, res) => {
  const { userId } = req.params;

  const query = "SELECT * FROM orders_items WHERE id = ?";

  db.query(query, [userId], (err, results) => {
    if (err) {
      console.error("Ошибка при получении заказов:", err);
      return res.status(500).json({ message: "Ошибка при получении заказов" });
    }

    res.status(200).json(results);
  });
});

// Получение категорий
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

// Получение продуктов
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

// Получение продукта по ID
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

// Получение пользователей
app.get("/users", (req, res) => {
  const query =
    "SELECT id, email, phoneNumber, passwordUser, nameUser, image FROM users";

  db.query(query, (err, result) => {
    if (err) {
      console.log("Ошибка при получении пользователей:", err);
      return res
        .status(500)
        .json({ message: "Ошибка при получении пользователей" });
    }
    res.status(200).json(result);
  });
});

// Запуск сервера
app.listen(port, () => {
  console.log("Сервер запущен на порту", port);
});
