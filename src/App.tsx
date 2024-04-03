import { Content, Footer, Header } from "@components/layout";
import { useTheme } from "@context/theme";

function App() {

  const { theme } = useTheme();

  return (
    <div
      data-theme={theme}
      className="w-full min-h-screen flex flex-col"
    >
      <Header />
      <Content>
        main content
      </Content>
      <Footer />
    </div>
  );
}

export default App;
