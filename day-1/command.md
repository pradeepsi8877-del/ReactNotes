
commands of react folder creation :-

step 1:- npm create vite@latest
npm create vite@latest — runs the Vite project creation tool.
my-react-app — the name of your project folder.
--template react — creates a project using the React templat

Start the development server:-

npm run dev

Vite displays a local address in your terminal, commonly something like: http://localhost:5173/


Understand the React Project Folder Structure
A newly created Vite React project typically contains the following structure:
my-react-app/
│
├── node_modules/
│
├── public/
│
├── src/
│   ├── assets/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── index.html
├── package.json
├── package-lock.json


| File/Folder | Purpose |

| `node_modules/` | Contains installed project dependencies. |
| `public/` | Stores static assets that can be served directly. |
| `src/` | Contains the application's source code. |
| `App.jsx` | Commonly contains the main App component. |
| `App.css` | Contains styles for the App component. |
| `index.css` | Commonly contains global styles. |
| `main.jsx` | Entry point that mounts the React application. |
| `index.html` | HTML document used to load the application. |
| `package.json` | Contains project metadata, scripts, and dependencies. |
| `vite.config.js` | Contains Vite configuration. |


| Command | Purpose |

| `npm run dev` | Runs the development server. |
| `npm run build` | Creates the production build. |
| `npm run preview` | Previews the production build locally. |