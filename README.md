# Connectverse & MelodyVerse: Full-Stack Application

This repository houses two interconnected applications:

1.  **Connectverse** (Backend API): A social media platform's core functionality, built with Node.js, Express, MongoDB, and JWT for secure authentication.
2.  **MelodyVerse** (Frontend): A user-friendly music streaming service interface crafted using React and Tailwind CSS, featuring login and signup screens and one Home Page

## Table of Contents

  * [Project Setup](#project-setup)
  * [Tech Stack](#tech-stack)
  * [Connectverse (Backend API)](#backend-api-connectverse)
      * [API Endpoints](#api-endpoints)
      * [Authentication (JWT)](#authentication-jwt)
      * [Error Handling](#error-handling)
  * [MelodyVerse (Frontend)](#frontend-melodyverse)
      * [Login Screen](#login-screen)
      * [Signup Screen](#signup-screen)
  * [Scripts](#scripts)
  * [Environment Variables](#environment-variables)

-----

## Project Setup

### Backend (Connectverse)

1.  Navigate to the `backend` directory.

2.  Install dependencies:

    ```bash
    npm install
    ```

3.  Run the backend server:

    ```bash
    npm run dev
    ```

### Frontend (MelodyVerse)

1.  Navigate to the `frontend` directory.

2.  Install dependencies:

    ```bash
    npm install
    ```

3.  Run the frontend development server:

    ```bash
    npm run dev
    ```

## Tech Stack

### Backend (Connectverse)

  * **Node.js:** The JavaScript runtime environment that empowers the backend server execution.
  * **Express:** A lightweight and versatile Node.js framework for building web applications and APIs.
  * **MongoDB:** A NoSQL database that provides flexible data storage for user information.
  * **JWT (JSON Web Token):** A secure mechanism for user authentication, enabling authorization for accessing protected API routes.
  * **bcrypt:** A robust password hashing library to safeguard user credentials.

### Frontend (MelodyVerse)

  * **React:** A JavaScript library for efficiently constructing user interfaces.
  * **Tailwind CSS:** A utility-first CSS framework that streamlines creating modern, responsive UI components.
  * **React Router:** A routing library that facilitates seamless navigation between login and signup screens within the React application.
  * **Local Storage/Cookies (Optional):** Used for "Remember Me" functionality to maintain user sessions between page refreshes.

## Connectverse (Backend API)

### API Endpoints

  * **POST /signup**
      * **Description:** Registers a new user to the platform.
      * **Request Body:**
        ```json
        {
          "username": "string",
          "email": "string",
          "password": "string"
        }
        ```
      * **Response:**
          * **Success:** Returns a JWT token that authorizes API access.
          * **Failure:** Returns an error message if the email or username is already taken or validation fails.
  * **POST /login**
      * **Description:** Authenticates a registered user for API access.
      * **Request Body:**
        ```json
        {
          "email": "string",
          "password": "string"
        }
        ```
      * **Response:**
          * **Success:** Returns a JWT token upon successful login.
          * **Failure:** Returns an error message if the credentials are invalid.

### Authentication (JWT)

  * Upon successful login, the backend generates a JWT token. This token is essential for authentication and authorizes access to protected routes within the API.
  * The token's expiration time is configurable and specified in the `.env` file.

### Error Handling

  * A custom `asyncHandler` middleware is employed to gracefully manage exceptions encountered while processing API requests. This ensures clean error handling and prevents the application from crashing due to unexpected issues.

## MelodyVerse (Frontend)

### Login Screen

  * Fields: Enter your username or email address and password.
  * Validation: Performs basic checks for required fields and enforces password complexity using React state management for validation logic.
  * Features:
      * "Remember Me" functionality (implementation details subject to chosen storage method).
      * "Forgot Password" link (currently non-functional, implementation details needed).
  * Success: Redirects to the application homepage after successful login using React Router.

### Signup Screen

  * Fields: Enter your username, email address, password, confirm password, optional name, and profile picture upload.
  * Validation:
      * Validates required fields and email format.
      * Password confirmation check.
  * Features:
      * Checkbox for "Terms and Conditions".
      * On successful signup, redirect to the login screen using React Router.
      * Simulated welcome email notification (no actual email sending).

## Scripts

  * **Backend (Connectverse):** `npm run dev` (in the backend folder)
  * **Frontend (MelodyVerse):** `npm run dev` (in the frontend folder)

## Environment Variables

**Required environment variables:**

| Variable Name | Description | Value Example |
|---|---|---|
| `PORT` | The port number on which the application will listen for incoming requests. | 5000 |
| `MONGODB_URI` | The connection string for your MongoDB database. | `mongodb+srv://<your_username>:<your_password>@<your_cluster_name>.mongodb.net/<your_database_name>?retryWrites=true&w=majority` |
| `CORS_ORIGIN` | The allowed origins for Cross-Origin Resource Sharing (CORS). Set to `*` to allow requests from any origin. | `*` |

**Optional environment variables:**

| Variable Name | Description | Value Example |
|---|---|---|
| `ACCESS_TOKEN_SECRET` | The secret key used to sign access tokens. | `your_access_token_secret` |
| `ACCESS_TOKEN_EXPIRY` | The expiration time for access tokens in seconds. | `86400` (1 day) |
| `REFRESH_TOKEN_SECRET` | The secret key used to sign refresh tokens. | `your_refresh_token_secret` |
| `REFRESH_TOKEN_EXPIRY` | The expiration time for refresh tokens in seconds. | `604800` (7 days) |

**Note:**

* Replace the placeholders `<your_username>`, `<your_password>`, `<your_cluster_name>`, and `<your_database_name>` with your actual MongoDB connection details.
* The `ACCESS_TOKEN_SECRET` and `REFRESH_TOKEN_SECRET` should be strong, randomly generated values.
* Adjust the `ACCESS_TOKEN_EXPIRY` and `REFRESH_TOKEN_EXPIRY` values to suit your application's requirements.
* For production environments, it's recommended to store these environment variables securely using a secrets management tool.

By following these guidelines, you can ensure that your application is configured correctly and secure.

