# TravelTrucks - Web app


<img src="https://github.com/renerroll/TravelTrucks/blob/main/public/screens/homepage.png?raw=true" width="400" title="home page"> <img src="https://github.com/renerroll/TravelTrucks/blob/main/public/screens/filtering.png?raw=true" width="400" title="filtering">

## Project Summary
This project is developed for **TravelTrucks**, a company specializing in camper rentals.
 The web application includes multiple pages, such as:

- Home page
- Camper catalog
- Individual camper page with reviews and a booking form

### The frontend app communicates with the backend API for camper listings, available at:

[https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers](https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers)

### Key API Endpoints:

- `GET /campers` – Retrieve all listings (with optional filtering parameters)
- `GET /campers/:id` – Retrieve details for a specific camper by I

## Technology Stack

- **React** – for building the user interface
- **Vite** – used as the project bundler and development server
- **ESLint** – for code quality checks


## Getting Started

### Prerequisites

Before running this project locally, ensure you have the following installed:

- **Node.js** (recommended version: 16.x or higher)
- **npm** (recommended version: 8.x or higher)

### Steps to Run the Project

1. **Clone the repository**

   Begin by cloning the project repository to your local environment:


   ```zsh
   git clone https://github.com/renerroll/TravelTrucks.git
   ```

2. **Install dependencies**

    ```zsh
    cd traveltrucks
    npm install

3. **Start the development server**

    ```zsh
    npm run dev

4. **Build the project for production**

    ```zsh
    npm run build 

5. **Preview the production build**

    ```zsh
    npm run preview

6. **Run code linting**

    ```zsh
    npm run lint
