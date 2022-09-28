import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

import { Home } from "../pages";

const ContactUs = lazy(() => import('../pages/contactUs/ContactUs'));

const AppRoutes = () => (
    <Routes>
        <Route path="contact-us" element={<ContactUs />} />
        <Route path="home" element={<Home />} />
        <Route path="*" element={<Home />} />
    </Routes>
);

export default AppRoutes;
