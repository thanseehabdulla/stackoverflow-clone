# Carbon Stack Overflow Clone

This project is a simplified version of Stack Overflow built using the IBM Carbon Design System, React, and JavaScript. It demonstrates the use of Carbon components to create a responsive and accessible web application.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **IBM Carbon Design System**: A comprehensive design system to ensure a consistent and unified user experience.
- **JavaScript**: The programming language used to build the interactive features of the application.
- **Docker**: Used to containerize the application for deployment.
- **OpenShift**: A Kubernetes-based platform to deploy and manage containerized applications.

## Features

- List of questions with details such as title, author, date, votes, answers, and points.
- Leaderboard to display top users based on their points.
- Introduction to React and JavaScript.
- Instructions for deploying the application on OpenShift.

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.
- Docker installed on your machine.
- OpenShift account and CLI installed.

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/carbon-stackoverflow-clone.git
    cd carbon-stackoverflow-clone
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

### Running the Application

1. Start the development server:

    ```bash
    npm start
    ```

2. Open your browser and navigate to `http://localhost:3000` to see the application in action.

### Building the Docker Image

1. Build the Docker image:

    ```bash
    docker build -t my-react-app .
    ```

### Deploying to OpenShift

1. Log in to your OpenShift account using the CLI:

    ```bash
    oc login
    ```

2. Create a new project in OpenShift:

    ```bash
    oc new-project my-react-app
    ```

3. Deploy the Docker image to OpenShift:

    ```bash
    oc new-app my-react-app
    ```

4. Expose the service to create a route:

    ```bash
    oc expose svc/my-react-app
    ```

5. Access your application via the route provided by OpenShift. You can get the route URL using:

    ```bash
    oc get routes
    ```

## Application Structure

- **`src`**: Contains the source code of the application.
  - **`components`**: Contains the React components.
  - **`styles`**: Contains the CSS styles.
- **`public`**: Contains the static assets.
- **`Dockerfile`**: Used to build the Docker image for the application.

## Application Components

### `App.js`

The main component that sets up the layout and routing for the application.

### `QuestionList.js`

Component that displays the list of questions and the leaderboard. It also includes an introduction to React and JavaScript along with deployment instructions.

### `QuestionList.css`

CSS file to style the `QuestionList` component and ensure a consistent design with the Carbon Design System.

## Contribution

Contributions are welcome! Please open an issue or submit a pull request for any changes or improvements.

## License

This project is licensed under the MIT License.

Directory

my-react-app/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── QuestionList.js
│   │   └── ...
│   ├── styles/
│   │   ├── QuestionList.css
│   │   └── ...
│   ├── App.js
│   ├── index.js
│   └── ...
├── .dockerignore
├── Dockerfile
├── nginx.conf
├── package.json
├── package-lock.json
└── README.md
