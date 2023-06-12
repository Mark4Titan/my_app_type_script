import "./App.css";
import { Main, Section } from "./App.styled";
import Bills from "./components/Bills/Bills";
import ExchangeRate from "./components/ExchangeRate/ExchangeRate";
import MenuButton from "./components/MenuButton/MenuButton";

function App() {
  const { showPortal, Component } = MenuButton();

  return (
    <Section>
        {Component}
      <Main>
        {showPortal === "Bills" && <Bills />}
        {showPortal === "ExchangeRate" && <ExchangeRate />}
      </Main>
    </Section>
  );
}

export default App;
