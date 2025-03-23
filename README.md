# Educational-chat-application
 
AI-Powered Educational Chat Application
This is a React-based chat application that simulates real-time AI-powered educational discussions. The application provides a seamless user experience with features like real-time updates, advanced state management, and optimized performance.

DEMO Images:
![Screenshot (443)](https://github.com/user-attachments/assets/26b037ee-0bb6-42a1-9ba5-f5194cdbf214)

![Screenshot (446)](https://github.com/user-attachments/assets/f7b79515-a61f-4c1b-8f5e-5fba45b2861c)

![Screenshot (450)](https://github.com/user-attachments/assets/3592baa5-96fd-45e3-8f0e-4358d1429b50)

**FEATURES**
Real-Time Chat Interface:

Responsive chat interface with rich text formatting (bold, italic, lists, links).

Scroll-to-bottom behavior for seamless navigation.

Message animations using Framer Motion.

Real-Time Experience Simulation:

"Typing..." indicators for AI-generated responses.

Sent, delivered, and read receipts.

User presence indicators (active, offline, typing).

Dark Mode & Theming Support:

Light and dark mode switching with persistent settings.

Custom theming using CSS variables and Zustand.

**Message Input Enhancements:**

Emoji selection, markdown-style formatting, and message editing.

Keyboard shortcuts (e.g., Shift + Enter for new lines, /help for quick actions).

Character limit indicator for long messages.

API Integration & State Management:

Mock API integration for simulating real-time interactions.

Zustand for state management and data persistence.

Performance & UI Optimization:

Lazy loading, tree-shaking, and code-splitting.

SEO and accessibility compliance (ARIA, keyboard navigation, high contrast modes).

Micro-interactions and animations using Framer Motion.

**Bonus Features:**

User mentions (@username).

Voice message support (recording and playback).

Chatbot personality settings (customize AI behavior and response style).

Progressive Web App (PWA) support (offline mode and installable functionality).

**TECHNOLOGIES USED:**
Frontend Framework: React

State Management: Zustand

Styling: Material-UI (MUI) with CSS-in-JS

Animations: Framer Motion

Real-Time Communication: Mock WebSocket API

Type Checking: TypeScript

Build Tool: Vite (or Create React App)

PWA Support: Workbox

Accessibility: ARIA compliance, keyboard navigation, and high contrast modes

**Other Libraries:**

emoji-picker-react for emoji selection

marked for markdown parsing

react-helmet for dynamic meta tags

**Prerequisites**
Before running the application, ensure you have the following installed on your system:

Node.js (v16 or higher)

npm (v8 or higher) or Yarn (v1.22 or higher)

Git (for cloning the repository)

**How to Run the Application**
Step 1: Clone the Repository
Clone the repository to your local machine using Git:
git clone https://github.com/your-username/ai-educational-chat-app.git
cd ai-educational-chat-app
Step 2: Install Dependencies
Install the required dependencies using npm or Yarn:
npm install
oR
yarn install
Step 3: Configure Environment Variables
Create a .env file in the root directory and add the following environment variables:
env
VITE_API_BASE_URL=http://localhost:3000
VITE_APP_NAME=AI Chat Application
Step 4: Run the Application
Start the development server:
npm run dev/npm start
or
yarn dev
The application will be available at:
http://localhost:5173
Step 5: Build for Production
To build the application for production, run:
npm run build
or
yarn build
The production-ready files will be generated in the dist folder.

Step 6: Serve the Production Build
To serve the production build locally, use a static server like serve:
npm install -g serve
serve -s dist
The application will be available at:
http://localhost:5000

**Folder Structure**

ai-educational-chat-app/
├── public/                  # Static assets
├── src/
│   ├── components/          # Reusable UI components
│   ├── store/               # Zustand state management
│   ├── utils/               # Utility functions and mock APIs
│   ├── hooks/               # Custom React hooks
│   ├── styles/              # Global styles and themes
│   ├── App.tsx              # Main application component
│   ├── main.tsx             # Entry point
├── .env                     # Environment variables
├── .gitignore               # Git ignore file
├── package.json             # Project dependencies and scripts
├── README.md                # Project documentation
├── tsconfig.json            # TypeScript configuration
└── vite.config.ts           # Vite configuration
**Key Files**
src/components/ChatInterface.tsx: Main chat interface component.

src/store/useChatStore.ts: Zustand store for managing chat state.

src/utils/mockApi.ts: Mock WebSocket API for simulating real-time communication.

src/styles/globalStyles.ts: Global styles and themes for the application.

**Contributing**
Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

Fork the repository.

Create a new branch for your feature or bugfix.

Commit your changes and push to the branch.

Submit a pull request.

License
This project is licensed under the MIT License. See the LICENSE file for details.

**Acknowledgments**
React for the frontend framework.

Zustand for state management.

Material-UI for UI components.

Framer Motion for animations.

Contact
For any questions or feedback, feel free to reach out:

Your Name: priyanka_chodagiri@srmap.edu.in

GitHub: https://github.com/priyanka8466

Enjoy building and using the AI-Powered Educational Chat Application! 🚀

Let me know if you need further assistance! 😊
