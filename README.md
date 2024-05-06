# 🚀 Node.js TypeScript Express MySQL Microservice Template

Welcome to our Microservice Template repository! This template provides a robust foundation for building microservices using Node.js, TypeScript, Express, MySQL with Sequelize, and Docker. Dive in and accelerate your development with our example services and clear project structure.

## ✨ Features

- **Microservice Architecture**: Designed with a proxy gateway for seamless communication.
- **Express.js Power**: Harness the flexibility and speed of Express.js for handling HTTP requests.
- **TypeScript Brilliance**: Enjoy the benefits of TypeScript for type safety and enhanced developer experience.
- **Sequelize ORM**: Simplify database interactions with Sequelize ORM for MySQL.
- **Dockerization**: Docker configuration for easy deployment and scalability.
- **Example Services**: Explore our example services with a clear folder structure for easy understanding and extension.

## 🛠️ Prerequisites

- **Node.js**: Make sure Node.js is installed on your machine.
- **Docker**: Install Docker on your machine for containerization.
- **MySQL Server**: Ensure a MySQL server is running locally or accessible via the network.

## 🚀 Getting Started

1. **Clone the repository**:

   ```bash
   git clone git@github.com:briceallard/nodejs-express-microservice.git
   ```

2. **Install Dependencies**:

   ```bash
   cd nodejs-express-microservice
   npm install
   ```

3. **Set Up Environment Variables**:

   - Create a `.env` file in the root directory based on the provided `.env-example`.
   - Update the environment variables with your MySQL database configuration.

4. **Run the Services**:

   ```bash
   docker compose up
   ```

5. **Access the Services**:

   - Visit `http://localhost:3000` (or the configured port) to interact with the services.

## 📂 Project Structure

```
nodejs-express-microservice/
├── 📁 gateway-service/        # Proxy gateway service
│   ├── 📁 app/                # Proxy controller logic
│   |   └── 📄 server.ts       # Entry point for proxy service
│   ├── 📁 config/             # Configuration files
│   |   └── 📄 db.config.ts    # Database configuration
│   |   └── 📄 index.ts        # Default exports
├── 📁 auth-service/           # Auth service
│   ├── 📁 app/                # Auth logic (controllers, routes, etc.)
│   |   └── 📄 server.ts       # Entry point for auth service
│   ├── 📁 config/             # Configuration files
│   |   └── 📄 db.config.ts    # Database configuration
│   |   └── 📄 index.ts        # Default exports
├── 📁 user-service/           # User service
│   ├── 📁 app/                # User logic (controllers, routes, etc.)
│   |   └── 📄 server.ts       # Entry point for user service
│   ├── 📁 config/             # Configuration files
│   |   └── 📄 db.config.ts    # Database configuration
│   |   └── 📄 index.ts        # Default exports
│   └── ...
|── 📄 init.sh                 # A shell script to update all services
|── 📄 schema.sql              # MySQL Schema file for docker volume
├── 📄 .dockerignore           # Files to be ignored in Docker build
├── 📄 docker-compose.yml      # Docker configuration
├── 📄 .env.example            # Example environment variables
└── 📄 README.md               # You are here
```

## 🤝 Contributing

We welcome contributions! Feel free to open issues or submit pull requests to help us improve this template.

## 📝 License

This project is licensed under the [MIT License](LICENSE).
