import "./App.scss";
import { Route, Routes, useLocation } from 'react-router-dom';
import { HomePage,EntrancePage } from "pages/index";


function App() {

  const location = useLocation();
  console.log(location)

  return (
    <main>

      <Routes>


        <Route element={<EntrancePage />}
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

export default App;
