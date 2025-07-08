import { Route, Routes, Navigate } from 'react-router-dom';

import Home2 from './pages/homePages/Home2';

import AboutUsPage from './pages/innerPages/AboutUsPage';
import AboutUs2Page from './pages/innerPages/AboutUs2Page';
import TeamPage from './pages/innerPages/TeamPage';
import Team2Page from './pages/innerPages/Team2Page';
import TeamDetailsPage from './pages/innerPages/TeamDetailsPage';
import PricingPage from './pages/innerPages/PricingPage';
import FaqPage from './pages/innerPages/FaqPage';
import ContactUsPage from './pages/innerPages/ContactUsPage';

import ServicesPage from './pages/servicePages/ServicesPage';
import Services2Page from './pages/servicePages/Services2Page';
import Services3Page from './pages/servicePages/Services3Page';
import ServicesDetailsPage from './pages/servicePages/ServicesDetailsPage';

import BlogStandardPage from './pages/blogPages/BlogStandardPage';
import BlogWithSidebarPage from './pages/blogPages/BlogWithSidebarPage';
import Blog2ColumnPage from './pages/blogPages/Blog2ColumnPage';
import Blog3ColumnPage from './pages/blogPages/Blog3ColumnPage';
import BlogSinglePage from './pages/blogPages/BlogSinglePage';
import BlogSingleWithSidebarPage from './pages/blogPages/BlogSingleWithSidebarPage';

import NotFoundPage from './pages/innerPages/NotFoundPage';

const Routers = () => {
    return (
        <>
            <Routes>
                {/* 🔁 Redirect root to /home-2 */}
                <Route path="/" element={<Navigate to="/home-2" />} />

                <Route path="/home-2" element={<Home2 />} />

                <Route path="/about-us" element={<AboutUsPage />} />
                <Route path="/about-us-2" element={<AboutUs2Page />} />
                <Route path="/team" element={<TeamPage />} />
                <Route path="/team-2" element={<Team2Page />} />
                <Route path="/team-details/:id" element={<TeamDetailsPage />} />
                <Route path="/pricing" element={<PricingPage />} />
                <Route path="/faq" element={<FaqPage />} />
                <Route path="/contact-us" element={<ContactUsPage />} />

                <Route path="/services" element={<ServicesPage />} />
                <Route path="/services-2" element={<Services2Page />} />
                <Route path="/services-3" element={<Services3Page />} />
                <Route path="/services-details/:id" element={<ServicesDetailsPage />} />

                <Route path="/blog-standard" element={<BlogStandardPage />} />
                <Route path="/blog-standard?:page?" element={<BlogStandardPage />} />
                <Route path="/blog-with-sidebar" element={<BlogWithSidebarPage />} />
                <Route path="/blog-with-sidebar?:page?" element={<BlogWithSidebarPage />} />
                <Route path="/blog-2-column" element={<Blog2ColumnPage />} />
                <Route path="/blog-2-column?:page?" element={<Blog2ColumnPage />} />
                <Route path="/blog-3-column" element={<Blog3ColumnPage />} />
                <Route path="/blog-3-column?:page?" element={<Blog3ColumnPage />} />
                <Route path="/blog-single/:id" element={<BlogSinglePage />} />
                <Route path="/blog-single-with-sidebar/:id" element={<BlogSingleWithSidebarPage />} />

                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </>
    );
};

export default Routers;
