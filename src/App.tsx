import Footer from "./components/shared/Footer";
import Navbar from "./components/shared/Navbar";
import Home from "./pages/Home";

export default function App() {
  return (
    <>
      <Navbar />
      <main className="container space-y-20">
        <Home />
      </main>
      <Footer />
    </>
  );
}
