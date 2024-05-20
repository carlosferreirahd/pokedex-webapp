import { useCallback, useEffect, useRef } from "react";
import MagnifyIcon from "@components/ui/icons/magnify";
import MoonIcon from "@components/ui/icons/moon";
import PokeballIcon from "@components/ui/icons/pokeball";
import SunIcon from "@components/ui/icons/sun";
import { useTheme } from "@context/theme";
import { createSearchParams, useNavigate } from "react-router-dom";
import cn from "@utils/cn";

function Search() {

  const navigate = useNavigate();

  const inputRef = useRef<HTMLInputElement>(null);

  const onSearch = useCallback((e: React.SyntheticEvent) => {
    e.preventDefault();

    const target = e.target as typeof e.target & {
      "pokemon-search": { value: string };
    };

    const searchText = target["pokemon-search"]?.value;

    if (!searchText) return;

    // sends user to /search with search params
    navigate({
      pathname: 'search',
      search: `?${createSearchParams({
        'pokemon': searchText,
      })}`,
    });
  }, [navigate]);

  const keyCtrlKHandler = useCallback((e: KeyboardEvent) => {
    if (e.ctrlKey && e.key?.toLocaleLowerCase() === "k") {
      e.preventDefault();
      inputRef?.current?.focus();
    }
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", keyCtrlKHandler);
    return () => {
      window.removeEventListener("keydown", keyCtrlKHandler);
    };
  });

  return (
    <form
      className={cn(
        "form-control w-full",
        "lg:w-auto"
      )}
      onSubmit={onSearch}
    >
      <label
        htmlFor="pokemon-search-input"
        className="input input-primary input-bordered flex items-center gap-2"
      >
        <MagnifyIcon
          className="size-5 mb-1 inline-block align-middle"
        />
        <input
          ref={inputRef}
          id="pokemon-search-input"
          name="pokemon-search"
          type="text"
          className={cn(
            "grow w-full",
            "sm:w-auto"
          )}
          placeholder="Search..."
        />
        <kbd className={cn(
          "kbd kbd-sm hidden",
          "lg:flex"
        )}>
          Ctrl
        </kbd>
        <kbd className={cn(
          "kbd kbd-sm hidden",
          "lg:flex"
        )}>
          K
        </kbd>
      </label>
    </form>
  );
}

function ThemeSwitch() {

  const { toggleTheme, theme } = useTheme();

  return (
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
        aria-label="Switch between Light and Dark themes"
        onChange={toggleTheme}
      />
      <SunIcon
        className="swap-on fill-current size-7"
        aria-label="Light theme"
      />
      <MoonIcon
        className="swap-off fill-current size-7"
        aria-label="Dark theme"
      />
    </label>
  );
}

export function Header() {

  return (
    <header className="w-full shadow-md">
      <div className="container">
        <div className="navbar bg-base-100 py-3">
          <div className="navbar-start">
            <h1 className="font-semibold">
              <PokeballIcon
                className="inline-block align-middle size-7 mr-2 mb-1"
              />
              Pokédex
            </h1>
          </div>
          <div className={cn(
            "hidden",
            "sm:flex sm:navbar-center",
          )}>
            <Search />
          </div>
          <div className="navbar-end">
            <ThemeSwitch />
          </div>
        </div>
        <div className={cn(
          "w-full flex justify-center pb-4",
          "sm:hidden"
        )}>
          <Search />
        </div>
      </div>
    </header>
  );
}
