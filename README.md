# att-service

`att-service` is a full-stack web application designed to provide a foundational service for managing data, featuring a modern React frontend and a robust Flask API backend. It leverages best-in-class tools for development efficiency and maintainability.

## Short Description

This project serves as a comprehensive boilerplate or a core service application, integrating a responsive frontend built with React, Vite, TypeScript, and Tailwind CSS, with a scalable backend API powered by Flask, SQLAlchemy, and Flask-Migrate. It provides basic CRUD operations for "items," serving as a starting point for more complex data management services.

## Key Features

*   **Robust RESTful API**: Built with Flask, offering endpoints for creating, retrieving, and managing data entities (e.g., "Items").
*   **Modern Frontend Development**: Utilizes React for dynamic UIs, Vite for lightning-fast development, and TypeScript for enhanced code quality and type safety.
*   **Integrated Database Management**: Employs SQLAlchemy for Object-Relational Mapping (ORM) and Flask-Migrate for seamless database schema evolution.
*   **Responsive UI Styling**: Leverages Tailwind CSS for utility-first styling, enabling rapid and consistent UI development, complemented by Lucide React for crisp icons.

## Tech Stack

**Frontend:**
*   **React**: A JavaScript library for building user interfaces.
*   **Vite**: A next-generation frontend tooling for fast development.
*   **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
*   **Tailwind CSS**: A utility-first CSS framework for rapidly building custom designs.
*   **Lucide React**: A collection of beautiful and customizable open-source icons.

**Backend:**
*   **Flask**: A lightweight Python web framework.
*   **SQLAlchemy**: A powerful and flexible Object Relational Mapper (ORM) for Python.
*   **Flask-Migrate**: Extension that handles SQLAlchemy database migrations via Alembic.
*   **SQLite**: A lightweight, file-based SQL database (default for development).

## Getting Started

Follow these steps to set up and run the `att-service` project locally.

### Prerequisites

Ensure you have the following installed on your machine:
*   Python (3.7+)
*   pip (Python package installer)
*   Node.js (14+)
*   npm (Node Package Manager) or Yarn

### Backend Setup

1.  **Navigate to the project root:**
    ```bash
    cd att-service
    ```

2.  **Create and activate a Python virtual environment:**
    ```bash
    python -m venv venv
    # On Windows
    .\venv\Scripts\activate
    # On macOS/Linux
    source venv/bin/activate
    ```

3.  **Install Python dependencies:**
    ```bash
    pip install flask flask-sqlalchemy flask-migrate
    ```

4.  **Initialize and run database migrations:**
    ```bash
    # Initialize migrations (only first time)
    flask db init
    # Make initial migration (if models are defined)
    flask db migrate -m "Initial migration."
    # Apply migrations to the database
    flask db upgrade
    ```

5.  **Run the Flask application:**
    ```bash
    export FLASK_APP=app.py # For macOS/Linux
    # For Windows: set FLASK_APP=app.py
    flask run
    ```
    The backend API will be available at `http://127.0.0.1:5000` (or `localhost:5000`).

### Frontend Setup

1.  **Navigate to the project root (where `package.json` is located):**
    ```bash
    cd att-service
    ```

2.  **Install Node.js dependencies:**
    ```bash
    npm install
    # or yarn install
    ```

3.  **Start the development server:**
    ```bash
    npm run dev
    # or yarn dev
    ```
    The frontend application will typically open in your browser at `http://localhost:5173` (or similar, as indicated by Vite).