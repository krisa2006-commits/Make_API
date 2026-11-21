# Eventique – Backend API

A RESTful backend API for **Eventique**, an Event Management System designed to manage events, categories, bookings, and users efficiently.

The backend is built using Node.js and Express.js, with MongoDB for database management and JWT-based authentication for secure access.

---

## Overview

Eventique Backend provides APIs to support the core functionalities of an event management platform. It handles event management, user authentication, booking operations, category management, and image uploads.

## Features

- **Authentication & Authorization** – Secure authentication using JSON Web Tokens (JWT).
- **Role-Based Access Control** – Restricts administrative operations to authorized admins.
- **Event Management** – Create, read, update, and delete events.
- **Category Management** – Manage event categories.
- **Booking Management** – Handle event booking operations.
- **User Management** – Manage user-related operations.
- **Image Upload** – Upload event images using Cloudinary.
- **Input Validation** – Validate request data using Zod.
- **Database Integration** – Store and manage application data using MongoDB and Mongoose.
- **Error Handling** – Centralized error-handling middleware.

---

## Tech Stack

| Technology | Purpose |
|---|---|
| Node.js | JavaScript Runtime |
| Express.js | Backend Framework |
| MongoDB | NoSQL Database |
| Mongoose | ODM |
| JSON Web Token (JWT) | Authentication |
| bcrypt | Password Hashing |
| Zod | Request Validation |
| Cloudinary | Image Storage |
| Multer | File Upload Handling |
| CORS | Cross-Origin Resource Sharing |
| dotenv | Environment Variables |

---

## Project Structure

```text
server/
├── src/
│   ├── config/
│   │   ├── cloudinary.js
│   │   └── database.js
│   │
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── eventController.js
│   │   ├── bookingController.js
│   │   ├── userController.js
│   │   └── categoryController.js
│   │
│   ├── models/
│   │   ├── User.js
│   │   ├── Event.js
│   │   ├── Booking.js
│   │   └── Category.js
│   │
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── eventRoutes.js
│   │   ├── bookingRoutes.js
│   │   ├── userRoutes.js
│   │   └── categoryRoutes.js
│   │
│   ├── middleware/
│   │   ├── authMiddleware.js
│   │   ├── adminMiddleware.js
│   │   ├── validationMiddleware.js
│   │   ├── uploadMiddleware.js
│   │   └── errorMiddleware.js
│   │
│   ├── utils/
│   │   ├── generateToken.js
│   │   └── generateTicket.js
│   │
│   └── validations/
│       ├── authSchemas.js
│       ├── bookingSchemas.js
│       ├── categorySchemas.js
│       ├── eventSchemas.js
│       └── userSchemas.js
│
├── server.js
├── .env
├── .gitignore
├── package.json
└── README.md
```

---

## Installation & Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Start the Development Server

```bash
npm run start
```

The local server will start at:

```text
http://localhost:5050
```

To verify that the API is running, open:

http://localhost:5050/

Expected response:

```text
Eventique API is running...
```

---

## Live API Deployment

The Eventique Backend API is successfully deployed on **Render**.

**Production Base URL:**

https://eventique-backend-sikf.onrender.com

**Local Development URL:**

http://localhost:5050

### Live API Health Check

To verify that the deployed backend is running, visit:

https://eventique-backend-sikf.onrender.com/

Expected response:

```text
Eventique API is running...
```

### Live API Base Endpoints

| Module | Live Endpoint |
|---|---|
| Authentication | `/api/auth` |
| Events | `/api/events` |
| Categories | `/api/categories` |
| Bookings | `/api/bookings` |
| Users | `/api/users` |

**Hosting Platform:** Render

**Repository:** https://github.com/krisa2006-commits/Make_API

---

## API Routes

The backend uses the following API route groups:

| Module | Base Endpoint | Description |
|---|---|---|
| Authentication | `/api/auth` | User authentication |
| Events | `/api/events` | Event management |
| Categories | `/api/categories` | Category management |
| Bookings | `/api/bookings` | Booking operations |
| Users | `/api/users` | User management |

### Event API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/events` | Get all events |
| GET | `/api/events/:id` | Get event by ID |
| POST | `/api/events` | Create a new event |
| PUT | `/api/events/:id` | Update an event |
| DELETE | `/api/events/:id` | Delete an event |

## Image Upload

Eventique uses **Cloudinary** for storing event images.

- Images are uploaded through Multer.
- Cloudinary stores the uploaded images in the `Eventique` folder.
- Supported image formats: JPG, JPEG, and PNG.
- Maximum image size: 5 MB.
- The Cloudinary image URL is stored in MongoDB with the event details.

For event creation and image updates, use `multipart/form-data` with the image field named:

```text
image
```

---

## Error Handling & Validation

- Request validation is handled using Zod.
- Invalid requests return a `400 Bad Request` response.
- Unauthorized requests return an appropriate authentication error.
- Centralized error middleware handles application errors.

---

## Deployment

The backend is deployed using **Render**.

Deployment configuration:

1. Backend source code is maintained on GitHub.
2. GitHub repository is connected to Render.
3. Node.js Web Service is configured on Render.
4. Environment variables are configured securely.
5. MongoDB Atlas is used as the cloud database.
6. Cloudinary is used for cloud image storage.

**Deployment Environment Variables:**

- `MONGO_URI`
- `JWT_SECRET`
- `CLOUDINARY_CLOUD_NAME`
- `CLOUDINARY_API_KEY`
- `CLOUDINARY_API_SECRET`
- `PORT` (provided by the hosting platform when required)

---

## Security

- Environment variables are used to protect sensitive credentials.
- Passwords are hashed before storage.
- JWT authentication protects private routes.
- Role-based authorization restricts administrative operations.
- Input validation helps prevent invalid request data.
- Sensitive credentials are excluded from GitHub using `.gitignore`.

---

## Project Explanation Video

**Explanation Video:**

[Watch Eventique Project Explanation](https://drive.google.com/file/d/1PgmCPu9-Vkv_H59H4JEZ8oq7NMUY1Gv1/view?usp=sharing)

---

## Author

**Eventique – Event Management System**

Backend developed using Node.js, Express.js, MongoDB, and Cloudinary.

---