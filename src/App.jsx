import { Suspense, lazy, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router";
import Home from "./pages/home/page";
import Header from "./shared/Header";
import Footer from "./shared/Footer";
import Loading from "./shared/Loading";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [location.pathname]);
  return (
    <>
      <Header />
      <AnimatePresence mode="wait">
        <Suspense fallback={<Loading />}>
          <Routes location={location} key={location.pathname}>
            <Route element={<NotFound />} path="*" />
            <Route element={<Home />} path="/" />
            <Route element={<About />} path="/about" />
            <Route element={<Service />} path="/service" />
            <Route element={<SingleService />} path="/service/single-service" />
            <Route element={<Blogs />} path="/blogs" />
            <Route element={<SingleBlog />} path="/blogs/:id" />
            <Route element={<Contact />} path="/contact" />
          </Routes>
        </Suspense>
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default App;

const SingleService = lazy(() => import("./pages/service/single-service/page"));
const SingleBlog = lazy(() => import("./pages/blogs/single-blog/page"));
const About = lazy(() => import("./pages/about/page"));
const Service = lazy(() => import("./pages/service/page"));
const Blogs = lazy(() => import("./pages/blogs/page"));
const Contact = lazy(() => import("./pages/contact/page"));
const NotFound = lazy(() => import("./shared/NotFound"));
