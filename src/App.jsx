import { Route, Routes } from "react-router-dom";
import PublicProfile from "./pages/PublicProfile";
import CommonLayout from "./components/layouts/CommonLayout";
import NewsFeed from "./pages/NewsFeed";
import VideoModal from "./components/layouts/VideoModal";

function App() {
  return (
    <>
      <Routes>
        <Route element={<CommonLayout />}>
          <Route index path="/" element={<NewsFeed />} />
          <Route path="/public-profile" element={<PublicProfile />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
