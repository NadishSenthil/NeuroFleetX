# NeuroFleetX - AI-Driven Urban Mobility Optimization

A full-stack application with Spring Boot backend and React frontend for user authentication.

## Project Structure

```
NeuroFleetX/
├── springapp/          # Spring Boot Backend
├── reactapp/           # React Frontend
└── README.md
```

## Features

- User Registration and Login
- JWT Authentication
- Protected Routes
- Responsive Design
- MySQL Database

## Backend (Spring Boot)

### Prerequisites
- Java 17 or higher
- Maven

### Running the Backend

1. Navigate to the springapp directory:
   ```bash
   cd springapp
   ```

2. Run the application:
   ```bash
   mvn spring-boot:run
   ```

The backend will start on `http://localhost:8080`

### API Endpoints

- `POST /api/auth/login` - User login
- `POST /api/auth/register` - User registration


## Frontend (React)

### Prerequisites
- Node.js 16 or higher
- npm

### Running the Frontend

1. Navigate to the reactapp directory:
   ```bash
   cd reactapp
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

The frontend will start on `http://localhost:3000`

## Usage

1. Start the Spring Boot backend first
2. Start the React frontend
3. Open `http://localhost:3000` in your browser
4. Register a new account or login with existing credentials
5. After successful authentication, you'll be redirected to the home page

## Default Configuration

- Backend Port: 8080
- Frontend Port: 3000
- Database: H2 In-Memory
- JWT Expiration: 24 hours

## Development Notes

- MySQL database: `infosys`
- Database URL: `jdbc:mysql://localhost:3306/infosys`
- Username: `root`
- Password: `root`