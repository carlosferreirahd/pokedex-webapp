import { Content, Footer, Header } from "@components/layout";
import { useTheme } from "@context/theme";
import cn from "@utils/cn";

function App() {

  const { theme } = useTheme();

  return (
    <div
      data-theme={theme}
      className={cn("w-full min-h-screen flex flex-col", { "dark": theme === "dark" })}
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
