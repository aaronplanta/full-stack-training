# INSTALLATIONS
1. Virtual Environment
    # Create a virtual environment:
        python -m venv venv
    # Activate the virtual environment:
        .\venv\Scripts\activate

2. Playwright
    # Install Playwright:
        pip install playwright

3. Requests
    # Install to convert JSON to Dictionary
        pip install requests

4. FastAPI and SQLAlchemy
    # Install FastAPI, Uvicorn, and SQLAlchemy:
        pip install fastapi uvicorn sqlalchemy
    # Activate FastAPI Server:
        uvicorn main:app --reload

5. Vite and React
    # Install React TS:
        npm create vite@latest fe -- --template react-ts
        cd fe
        > npm install
        > npm install axios
        > npm install react-router-dom
    # Run App
        > npm run dev

6. Tailwind
    # Install Tailwind CSS
        > npm install -D tailwindcss @tailwindcss/vite

# DOCKER
1. Save Dependencies
    # Generate a requirements.txt file:
        pip freeze > requirements.txt