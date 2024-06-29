import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element:
            <div className="bg-[#FFEDD8] min-h-screen poppins">
                <Home />
            </div>,
    },
]);

export default router;