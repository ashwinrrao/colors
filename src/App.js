import AddColorForm from "./add-color";
import "./App.css";
import ColorList from "./colorList.js";
import ColorProvider from "./color-provider";

function App() {
  return (
    <ColorProvider>
      <ColorList />
      <AddColorForm />
    </ColorProvider>
  );
}

export default App;
