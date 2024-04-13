import { Content, Footer, Header } from "@components/layout";
import { PokemonList } from "@components/pokemon-list";

function App() {

  return (
    <div className="w-full min-h-screen flex flex-col">
      <Header />
      <Content>
        <PokemonList />
      </Content>
      <Footer />
    </div>
  );
}

export default App;
