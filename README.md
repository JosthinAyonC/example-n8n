# Fast Node.js API with Express

A boilerplate project to quickly start building APIs using Node.js and Express, following best practices for maintainability and scalability.

## Features

- **Fast setup**: Minimal configuration to get started quickly.
- **Best practices**: Pre-configured structure for clean and maintainable code.
- **Environment management**: `.env` support for configuration.
- **Error handling**: Centralized error handling for better debugging.
- **Middleware**: Pre-configured middlewares for common tasks.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v20 or higher)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone the repository:
    ```bash
    git clone git@github.com:JosthinAyonC/fast-nodejs-api.git
    cd fast-nodejs-api
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Copy the `.env.example` file to create `.env.production` and `.env.development` files:
    ```bash
    cp .env.example .env.production
    cp .env.example .env.development
    ```

   - In the `.env.production` file, set `NODE_ENV` to `production`:
     ```env
     NODE_ENV=production
     ```

4. Start the development server:
    ```bash
    npm run dev
    ```

5. Access the API at `http://localhost:3000`.

## Project Structure

```
fast-nodejs-api/
├── src/
│   ├── controllers/   # Route handlers
│   ├── middlewares/   # Custom middleware
│   ├── routes/        # API routes
│   ├── services/      # Business logic
│   ├── utils/         # Utility functions
│   └── index.ts         # Express app setup
├── .env               # Environment variables
├── package.json       # Project metadata
└── README.md          # Project documentation
```

## Scripts

- `npm run dev`: Start the development server with hot reload.
- `npm start`: Start the production server.
- `npm run lint`: Run ESLint to check for code quality issues.

## Best Practices

1. **Modular structure**: Keep your code organized by separating concerns (e.g., controllers, services).
2. **Environment variables**: Use `.env` files to manage sensitive data.
3. **Error handling**: Use a centralized error handler to manage API errors.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).