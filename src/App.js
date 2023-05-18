import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import ClientLayout from "./layouts/ClientLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Courses from "./pages/Courses";
import Gallery from "./pages/Gallery";
import Shop from "./pages/Shop";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<ClientLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/shop" element={<Shop />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
