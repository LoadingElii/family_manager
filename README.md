
# Family Manager

Family Manager is an application designed to help families stay organized and manage their tasks effectively. It provides individual and family-wide to-do lists, ensuring no task is forgotten in the hustle of daily life.

## General Overview

This application aims to address the challenges families face in keeping track of tasks and errands. Every family member can maintain their personal to-do list while also accessing shared family tasks.

### Key Features

- **Family Objects:** Contains a list of members and family-wide to-do items.
- **Member Objects:** Each member has a personal to-do list and can belong to a family.
- **Todo Items:** Organized by urgency, description, and completion status.

## Tech Stack

The project utilizes the following technologies:
- **Backend:** Flask, SQLAlchemy, PyJWT, Python-dotenv, PostgreSQL
- **Frontend:** Next.js, TypeScript

## Getting Started

### Backend Setup

1. Install `virtualenv`:
   ```bash
   pip install virtualenv
   ```

2. Create and activate a virtual environment:
   ```bash
   python -m venv venv-name
   # Windows
   path\to\venv-name\Scripts\activate.bat
   # Linux
   source path/to/venv-name/bin/activate
   ```

3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Start the Flask application:
   ```bash
   flask --app app run
   ```

### Frontend Setup

1. Navigate to the `frontend` directory.

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## API Endpoints

### Member Endpoints
- **Create Member:** `[POST] /admin/signup`
- **Login Member:** `[POST] /admin/login`

### Family Endpoints
- **Create Family:** `[POST] /family/create`
- **Get Family Details:** `[GET] /family/`

### Todo Endpoints
- **Add Todo (Member):** `[POST] /todos/create`
- **Add Todo (Family):** `[POST] /todos/family/create`

## Project Status

The project is currently in progress with the following planned improvements:
- Allow family members to add family tasks to their personal to-do list.
- Enhance API responses to include family tasks when retrieving family details.

## Acknowledgements

- Flask Application Factory Pattern: [Flask Documentation](https://flask.palletsprojects.com/en/2.3.x/patterns/appfactories/)
- Video Tutorial: [Flask CRUD API Tutorial](https://www.youtube.com/watch?v=qKOCXL5ZseA)

## Contributions

Contributions are welcome! Please feel free to fork the repository and submit pull requests with improvements or fixes.

## License

[MIT License](LICENSE)
