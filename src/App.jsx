import { Suspense, lazy } from "react";
import { Route, Routes, useLocation } from "react-router";
import Home from "./pages/home/page";
import Header from "./shared/Header";
import Footer from "./shared/Footer";
import Layout from "./shared/Layout";

function App() {
  const location = useLocation();

  return (
    <>
      <Header />
      <Suspense fallback="loading.,,..,">
        <Layout>
          <Routes location={location} key={location.pathname}>
            <Route element={<Home />} path="/" />
            <Route element={<About />} path="/about" />
            <Route element={<Service />} path="/service" />
            <Route element={<SingleService />} path="/service/single-service" />
            <Route element={<Blogs />} path="/blogs" />
            <Route element={<SingleBlog />} path="/blogs/:id" />
            <Route element={<Contact />} path="/contact" />
          </Routes>
        </Layout>
      </Suspense>
      <Footer />
    </>
  );
}

export default App;

const SingleService=lazy(()=>import('./pages/service/single-service/page'))
const SingleBlog=lazy(()=>import('./pages/blogs/single-blog/page'))
const About = lazy(() => import("./pages/about/page"));
const Service = lazy(() => import("./pages/service/page"));
const Blogs = lazy(() => import("./pages/blogs/page"));
const Contact = lazy(() => import("./pages/contact/page"));
