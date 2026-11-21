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

## Installation & Setup

### 1. Start the Development Server

```bash
npm run start
```

The server will start at:

```text
http://localhost:5050
```

To verify that the API is running, open:

```text
http://localhost:5050/
```

Expected response:

```text
Eventique API is running...
```

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

### Authentication

Protected routes require a valid JWT access token.

Add the following header to authenticated requests:

```text
Authorization: Bearer YOUR_JWT_TOKEN
```

Administrative event operations require an authorized Admin account.

---

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

The backend can be deployed using a Node.js hosting platform such as Render.

For deployment:

1. Push the backend code to GitHub.
2. Create a Web Service on Render.
3. Configure the server root directory and build/start commands.
4. Add all required environment variables in the hosting platform.
5. Deploy the application.
6. Test the live API endpoints.

**Deployment Environment Variables:**

- `PORT` (when required by the hosting platform)
- `MONGO_URI`
- `JWT_SECRET`
- `CLOUDINARY_CLOUD_NAME`
- `CLOUDINARY_API_KEY`
- `CLOUDINARY_API_SECRET`

---

## Security

- Environment variables are used to protect sensitive credentials.
- Passwords are hashed before storage.
- JWT authentication protects private routes.
- Role-based authorization restricts administrative operations.
- Input validation helps prevent invalid request data.

---

# Project Explanation Video

**Explanation Video:**
https://drive.google.com/file/d/1PgmCPu9-Vkv_H59H4JEZ8oq7NMUY1Gv1/view?usp=sharing

---

## Author

**Eventique – Event Management System**

Backend developed using Node.js, Express.js, MongoDB, and Cloudinary.

---
