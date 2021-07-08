import "./App.css";
import Header from "./components/Header";
import Platform from "./components/Platform";
import Price from "./components/Price";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Header />
      <Price />
      <Platform />
      <Footer />
    </div>
  );
}

export default App;
