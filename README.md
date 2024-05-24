# Web4AI Exam Template

This template provides your dev environment for the Web 4 AI exam. (June '24)
You'll need to install the 2 docker containers (backend & frontend) to get started on the exam.
**If you don't, you won't be able to finish the exam.**

## Get it running

0. Make sure you have Docker (& docker-compose) installed (should be OK by now)
1. Clone this repo in a folder. **This is the folder that you'll use during your exam.**
2. In a terminal, navigate to the cloned folder
3. Execute `docker-compose up -d`
4. View the backend docs at http://localhost:8000/docs/
5. Check frontend at http://localhost:4242
     * This should show a page that says "Pre-installing Docker containers successful !"
6. During the exam, you will replace the `src` file in the frontend folder and the `main.py` file in the backend folder (plus add a database file with some test data)
     * Once you completed these replacements at the start of your exam, you should restart both containers to get the start application running
