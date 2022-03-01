import Header from "./components/Header";
import List from "./components/List";

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Header />
      <List />
    </div>
  );
}

export default App;
