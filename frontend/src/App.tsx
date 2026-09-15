import { BrowserRouter, Navigate, Route, Routes, useNavigate } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LobbyPage from "./pages/LobbyPage";
import "./styles/tokens.css";
import "./styles/landing.css";
import "./styles/lobby.css";

type PlaceholderPageProps = {
  title: string;
  description: string;
};

function PlaceholderPage({ title, description }: PlaceholderPageProps) {
  const navigate = useNavigate();

  return (
    <main className="placeholder-page">
      <button
        type="button"
        className="placeholder-page__back"
        onClick={() => navigate("/lobby")}
      >
        ← BACK TO LOBBY
      </button>

      <div className="placeholder-page__content">
        <p className="placeholder-page__eyebrow">PORTFOLIO SECTION</p>

        <h1>{title}</h1>

        <p>{description}</p>
      </div>
    </main>
  );
}

function AppRoutes() {
  const navigate = useNavigate();

  return (
    <Routes>
      <Route
        path="/"
        element={<LandingPage onEnter={() => navigate("/lobby")} />}
      />

      <Route
        path="/lobby"
        element={<LobbyPage onNavigate={(destination) => navigate(`/${destination}`)} />}
      />

      <Route
        path="/projects"
        element={
          <PlaceholderPage
            title="Projects"
            description="This section will showcase my projects, experiments, and development work."
          />
        }
      />

      <Route
        path="/about"
        element={
          <PlaceholderPage
            title="About Me"
            description="This section will introduce who I am, what I care about, and what drives me as a developer."
          />
        }
      />

      <Route
        path="/skills"
        element={
          <PlaceholderPage
            title="Skills"
            description="This section will showcase my technical skills, tools, and technologies."
          />
        }
      />

      <Route
        path="/ai-lab"
        element={
          <PlaceholderPage
            title="AI Lab"
            description="This section will showcase AI experiments, workflows, and projects built with AI-assisted development."
          />
        }
      />

      <Route
        path="/journey"
        element={
          <PlaceholderPage
            title="Developer Journey"
            description="This section will tell the story of my growth, learning process, and evolution as a developer."
          />
        }
      />

      <Route
        path="/contact"
        element={
          <PlaceholderPage
            title="Contact"
            description="This section will contain my contact information and professional links."
          />
        }
      />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;