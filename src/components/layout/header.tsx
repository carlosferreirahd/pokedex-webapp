import MagnifyIcon from "@components/ui/icons/magnify";
import MoonIcon from "@components/ui/icons/moon";
import PokeballIcon from "@components/ui/icons/pokeball";
import SunIcon from "@components/ui/icons/sun";
import { useTheme } from "@context/theme";

export function Header() {

  const { toggleTheme, theme } = useTheme();

  return (
    <header className="w-full shadow-md">
      <div className="container">
        <div className="navbar bg-base-100 py-3">
          <div className="navbar-start">
            <h1 className="font-semibold">
              <PokeballIcon className="inline-block align-middle size-7 mr-2 mb-1" />
              Pokédex
            </h1>
          </div>
          <div className="navbar-center">
            <label htmlFor="pokemon-search" className="input input-primary input-bordered flex items-center gap-2">
              <MagnifyIcon className="size-5 mb-1 inline-block align-middle" />
              <input
                id="pokemon-search"
                type="text"
                className="grow w-96"
                placeholder="Search"
              />
              <kbd className="kbd kbd-sm">⌘</kbd>
              <kbd className="kbd kbd-sm">K</kbd>
            </label>
          </div>
          <div className="navbar-end">
            <label
              htmlFor="theme-switch"
              className="swap swap-rotate btn btn-ghost focus-within:bg-base-200"
            >
              <input
                tabIndex={0}
                id="theme-switch"
                className="theme-controller"
                type="checkbox"
                checked={theme === "light"}
                aria-label="Alternar tema entre Claro e Escuro"
                onChange={toggleTheme}
              />
              <SunIcon
                className="swap-on fill-current size-7"
                aria-label="Tema claro"
              />
              <MoonIcon
                className="swap-off fill-current size-7"
                aria-label="Tema escuro"
              />
            </label>
          </div>
        </div>
      </div>
    </header>
  );
}
