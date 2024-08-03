import "./App.scss";
import { Route, Routes, useLocation } from 'react-router-dom';
import { HomePage, EntrancePage } from "pages/index";


export default function App() {


  // ---------- CONSOLE

  const location = useLocation();
  console.log("PATHNAME: ", location.pathname);


  // ---------- MARKUP

  return (
    <main>

      <Routes>

        <Route
          element={<EntrancePage />}
          path="/"
        />
        <Route
          element={<HomePage />}
          path="/home"
        />

      </Routes>

    </main>
  );
}
