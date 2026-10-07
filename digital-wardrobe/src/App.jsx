import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Wardrobe from "./pages/Wardrobe";
import DressUp from "./pages/DressUp";
import SavedLooks from "./pages/SavedLooks";
import DollCreator from "./pages/DollCreator";
import DressMe from "./pages/DressMe";


function App() {
    return (
        <>
            <Navbar />

            <Routes>

                {/* HOME */}

                <Route
                    path="/"
                    element={<Home />}
                />


                {/* CLOSET */}

                <Route
                    path="/closet"
                    element={<Wardrobe />}
                />


                {/* EXISTING DRESS UP */}

                <Route
                    path="/dress-up"
                    element={<DressUp />}
                />


                {/* DRESS ME */}

                <Route
                    path="/dress-me"
                    element={<DressMe />}
                />


                {/* SAVED LOOKS */}

                <Route
                    path="/looks"
                    element={<SavedLooks />}
                />


                {/* DOLL CREATOR */}

                <Route
                    path="/create-doll"
                    element={<DollCreator />}
                />

            </Routes>
        </>
    );
}

export default App;