import GlobalStyle from "./styles/global";
import Calculator from "./components/calculator/index";

export default function App() {
  return (
    <div className="Container">
      <GlobalStyle />
      <Calculator />
    </div>
  );
}
