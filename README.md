# My Portfolio - Laravel & Inertia.js

This is a full-stack portfolio application built with a powerful and modern stack. The backend is powered by Laravel, and the frontend is a dynamic Single Page Application (SPA) built with React, Inertia.js, and TypeScript.

It includes a complete content management system (CMS) for managing portfolio sections like "About Me" and "Projects", complete with user authentication and a dashboard.

## About The Project

This project aims to be a personal portfolio website with a robust backend for easy content updates.

### Key Features

*   **Dynamic Frontend**: A seamless and fast user experience powered by Inertia.js and React.
*   **Content Management**: A secure dashboard to perform CRUD (Create, Read, Update, Delete) operations on "About Me" and "Project" entries.
*   **User Authentication**: Full authentication system including registration, login, password reset, and email verification.
*   **Profile Management**: Authenticated users can update their profile information and change their password.
*   **Type-Safe Routing**: Uses `laravel/wayfinder` to automatically generate typed TypeScript route functions from Laravel routes, ensuring frontend-backend consistency.
*   **Modern Tooling**: Utilizes Vite for fast frontend asset bundling.
*
### Built With

*   Laravel
*   Inertia.js
*   React
*   TypeScript
*   Tailwind CSS
*   Vite

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have the following software installed on your machine:
*   PHP (>= 8.1)
*   Composer
*   Node.js and npm (or yarn)
*   A database server (e.g., MySQL, PostgreSQL, SQLite)

### Installation

1.  **Clone the repository**
    ```sh
    git clone https://github.com/your_username/your_repository.git
    cd your_repository
    ```

2.  **Install PHP dependencies**
    ```sh
    composer install
    ```

3.  **Install NPM dependencies**
    ```sh
    npm install
    ```

4.  **Set up your environment file**
    Copy the example environment file and generate an application key.
    ```sh
    cp .env.example .env
    php artisan key:generate
    ```

5.  **Configure your database**
    Open the `.env` file and update the `DB_*` variables with your database credentials.
    ```env
    DB_CONNECTION=mysql
    DB_HOST=127.0.0.1
    DB_PORT=3306
    DB_DATABASE=portfolio
    DB_USERNAME=root
    DB_PASSWORD=
    ```

6.  **Run database migrations**
    This will create all the necessary tables in your database.
    ```sh
    php artisan migrate
    ```

7.  **Run the development servers**
    You'll need to run both the PHP server and the Vite development server.

    *   In one terminal, start the Laravel server:
        ```sh
        php artisan serve
        ```

    *   In another terminal, start the Vite server for frontend hot-reloading:
        ```sh
        npm run dev
        ```

8.  **You're all set!**
    Visit `http://127.0.0.1:8000` in your browser to see the application.

## License

Distributed under the MIT License. See `LICENSE` for more information.


