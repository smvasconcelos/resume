A modern, responsive interactive resume built with **React**, **TypeScript**, and **Vite**. This project serves as both a professional portfolio and a demonstration of modern frontend development practices.

## Features

- **Responsive Design:** Optimized for all screen sizes, from mobile to ultra-wide monitors.
- **Fast Performance:** Powered by Vite for near-instant hot module replacement (HMR).
- **Type Safe:** Built entirely with TypeScript for better maintainability and developer experience.
- **Dockerized:** Ready for containerized local development and deployment.

## Tech Stack

- **Framework:** React
- **Build Tool:** Vite
- **Language:** TypeScript
- **Package Manager:** yarn
- **Containerization:** Docker & Docker Compose

## Getting Started

### Prerequisites

- [Docker](https://www.docker.com/) (optional, for containerized execution)
- [Node.js](https://nodejs.org/)
- [Yarn](https://classic.yarnpkg.com/en/docs/install)

### Local Development

1. **Clone the repository:**

   ```bash
   git clone [https://github.com/smvasconcelos/resume.git](https://github.com/smvasconcelos/resume.git)
   cd resume
   ```

2. **Install dependencies:**

   ```bash
   yarn install
   ```

3. **Run the development server:**

   ```bash
   yarn dev
   ```

   The application will be available at http://localhost:5173.

## 🐳 Running with Docker

You can run the environment without installing Node locally by using the provided Docker configuration.

**Build and start the container:**

```bash
docker-compose up --build
```

Access the app: Open your browser and navigate to http://localhost:5173.

The container is configured with volumes, so any changes you make to the source code on your local machine will automatically reflect in the running container.

Docker Configuration Details

- Dockerfile: Uses node:24-alpine for a lightweight footprint.
- Port: Exposes port 5173.
- Syncing: Uses volumes to sync the project root and persist node_modules for optimal performance.
  '
