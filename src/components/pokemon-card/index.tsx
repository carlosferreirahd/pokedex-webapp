import { ErrorMessage } from "@components/error-message";
import { PokemonSprite } from "./sprite";
import { PokemonBadge } from "./badge";
import { DetailsModal } from "./details-modal";
import { usePokemon } from "./hooks";
import FaceFrown from "@components/ui/icons/face-frown";

interface PokemonCardProps {
  pokemonName: string;
}

export function PokemonCard({
  pokemonName,
}: Readonly<PokemonCardProps>) {

  const {
    data,
    isPending,
    isError,
    error,
    modalRef,
    modalTriggered,
    setModalTriggered,
  } = usePokemon(pokemonName);

  if (isPending) {
    return (
      <div className="flex flex-col gap-4">
        <div className="skeleton h-32 w-full" />
        <div className="flex gap-4 justify-end">
          <div className="skeleton h-4 w-16" />
          <div className="skeleton h-4 w-16" />
        </div>
      </div>
    );
  }

  if (isError || !pokemonName) {

    if (error?.response?.status === 404 || !pokemonName) {
      return (
        <div className="card bg-base-200 shadow-xl h-full">
          <div className="card-body items-center text-center">
            <h2>
              <FaceFrown
                className="size-12 font-bold"
                aria-label="Not found icon"
              />
            </h2>
            <p className="card-title">
              "{pokemonName}" not found.
            </p>
          </div>
        </div>
      );
    }

    return (
      <ErrorMessage
        className="items-start min-h-full"
        errorMessage={error?.message || "(No description)"}
      />
    );
  }

  return (
    <>
      <label
        htmlFor={`${pokemonName}-modal-trigger`}
        className="card card-compact bg-base-200 shadow-xl h-full cursor-pointer focus-within:border focus-within:border-primary transition-[transform] ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
      >
        <input
          id={`${pokemonName}-modal-trigger`}
          className="appearance-none"
          tabIndex={0}
          type="checkbox"
          checked={modalTriggered}
          onChange={(e) => {
            setModalTriggered(e.target.checked as boolean);
            modalRef?.current?.showModal()
          }}
        />
        <div className="px-4 pt-4 flex justify-evenly">
          <PokemonSprite
            className="object-cover"
            src={data?.sprites?.front_default}
            alt={`${pokemonName} front`}
          />
          <PokemonSprite
            className="object-cover"
            src={data?.sprites?.back_default}
            alt={`${pokemonName} back`}
          />
        </div>
        <div className="card-body">
          <h2 className="card-title">
            {`#${data?.id} ${pokemonName}`}
          </h2>
          <ul className="card-actions justify-end">
            {data?.types?.map(({ type }) => (
              <li key={type.name}>
                <PokemonBadge pokemonType={type.name} />
              </li>
            ))}
          </ul>
        </div>
      </label>
      <DetailsModal
        ref={modalRef}
        pokemonDetails={data}
        onClose={() => setModalTriggered(false)}
      />
    </>
  );
}
