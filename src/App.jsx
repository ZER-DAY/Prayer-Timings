import { Container } from "@mui/material";
import "./App.css";
import MainContent from "./components/MainContent";

function App() {
  return (
    <div
      style={{
        display: "felx",
        justifyContent: "center",
        width: "100vw",
      }}
    >
      <Container maxWidth="xl">
        <MainContent />
      </Container>
    </div>
  );
}

export default App;
