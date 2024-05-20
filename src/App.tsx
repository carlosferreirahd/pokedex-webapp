import { Content, Footer, Header } from "@components/layout";
import Routes from "./routes";

function App() {

  return (
    <div className="w-full min-h-screen flex flex-col">
      <Header />
      <Content>
        <Routes />
      </Content>
      <Footer />
    </div>
  );
}

export default App;
