import { Content, Footer, Header } from "@components/layout";

function App() {

  return (
    <div className="w-full min-h-screen flex flex-col">
      <Header />
      <Content>
        main content
      </Content>
      <Footer />
    </div>
  );
}

export default App;
