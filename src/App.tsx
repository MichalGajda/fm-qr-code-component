import "./App.css";
import Attribution from "./components/Attribution";
import QrCaption from "./components/QrCaption";
import QrImage from "./components/QrImage";

function App() {
  return (
    <>
      <main className="appContainer">
        <QrImage />
        <QrCaption />
      </main>
      <footer>
        <Attribution />
      </footer>
    </>
  );
}

export default App;
