import { Route, Routes } from "react-router-dom";
import PublicProfile from "./pages/PublicProfile";
import CommonLayout from "./components/layouts/CommonLayout";

function App() {
  return (
    <>
      <Routes>
        <Route element={<CommonLayout />}>
          <Route index path="/" element={<PublicProfile />} />
          <Route path="step-3" element={<PublicProfile />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
