import { Error, Home, Launches, SingleLaunch, LaunchPads, SingleLaunchPad, Capsules, Cores, Crew, SingleCrew, Dragons, SingleDragon, Landpad, SingleLandPads, Roadster, Rocket, SingleRocket, Payload, Starlink } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/capsules" element={<Capsules />} />
        <Route path="/cores" element={<Cores />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/crew/:id" element={<SingleCrew />} />
        <Route path="/dragons" element={<Dragons />} />
        <Route path="/dragons/:id" element={<SingleDragon />} />
        <Route path="/landpads" element={<Landpad />} />
        <Route path="/landpads/:id" element={<SingleLandPads />} />
        <Route path="/launches" element={<Launches />} />
        <Route path="/launches/:id" element={<SingleLaunch />} />
        <Route path="/launchpads" element={<LaunchPads />} />
        <Route path="/launchpads/:id" element={<SingleLaunchPad />} />
        <Route path="/payloads" element={<Payload />} />
        <Route path="/roadster" element={<Roadster />} />
        <Route path="/rockets" element={<Rocket />} />
        <Route path="/rockets/:id" element={<SingleRocket />} />
        <Route path="/starlink" element={<Starlink />} />
        <Route path="*" element={<Error />} />
      </Routes>
      {/* Ships pages */}
      {/* Starlink pages */}
    </BrowserRouter>
  );
}

export default App;
