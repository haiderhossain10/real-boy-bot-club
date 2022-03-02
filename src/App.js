import { Route, Routes } from "react-router-dom";
import CommingSoon from "./pages/CommingSoon";
import "./assets/css/app.scss";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<CommingSoon />} />
            </Routes>
        </>
    );
}

export default App;
