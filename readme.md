# Custom CRM Application

This is a custom CRM application built to feel like CarePatron, with a focus on a clean GUI, custom intake forms, a client hub, and secure handling of PII.

## Features

*   **User Authentication:** Secure user registration and login system using JWT.
*   **Client Hub:** View and manage a list of clients.
*   **Custom Intake Forms:** A dynamic form builder to create custom intake forms and a view for clients to fill them out.
*   **File Uploads:** Functionality for users to upload files.
*   **Case Progress Tracking:** A simple status system to track client cases.
*   **FAQ Section:** A public-facing FAQ page.
*   **Encryption Strategy:** A detailed plan for future implementation of end-to-end encryption is available in `ENCRYPTION_NOTES.md`.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

*   [Node.js](https://nodejs.org/) (which includes npm)
*   [MongoDB](https://www.mongodb.com/try/download/community) - Make sure you have a MongoDB server running locally.

### Installation & Running the Application

The project is split into two parts: a `server` (backend) and a `client` (frontend). You will need to run them in separate terminals.

**1. Backend Server:**

```bash
# Navigate to the server directory
cd server

# Install dependencies
npm install

# Start the server (uses nodemon for auto-restarts)
npm run dev
```
The backend server will start on `http://localhost:5000`. It will try to connect to a local MongoDB instance at `mongodb://localhost:27017/crm`.

**2. Frontend Client:**

```bash
# Open a new terminal and navigate to the client directory
cd client

# Install dependencies
npm install

# Start the frontend development server
npm run dev
```
The frontend application will start, and you can view it in your browser. The terminal will provide the exact URL (usually `http://localhost:5173`).

Once both the backend and frontend are running, you can open the provided URL in your browser to use the CRM. You can register a new user, log in, and explore the features.
