import React, { forwardRef, useEffect, useMemo } from "react";
import ReactDOM from "react-dom";
import XMarkIcon from "@components/ui/icons/x-mark";
import { PokemonSprite } from "./sprite";
import { PokemonBadge } from "./badge";
import { StatProgress } from "./stat-progress";
import cn from "@utils/cn";
import { statNameToAcronym } from "@utils/helpers";
import { IStatsData, ITypesData } from "@shared/interfaces/pokemon.interface";

interface IPokemonDetails {
  id: number;
  name: string;
  types: Array<ITypesData>;
  weight: number;
  height: number;
  stats: Array<IStatsData>;
  front_image: string;
}

interface DetailsModalProps {
  pokemonDetails: IPokemonDetails;
  onClose?: () => void;
}

export const DetailsModal = forwardRef<HTMLDialogElement, DetailsModalProps>((
  { pokemonDetails, onClose },
  ref
) => {

  const portalContainer = useMemo<HTMLDivElement>(() => {
    const wrapperDiv = document?.createElement("div");
    wrapperDiv.id = `${pokemonDetails.name}-details-modal`;
    return wrapperDiv;
  }, [pokemonDetails.name]);

  useEffect(() => {
    if (portalContainer) {
      document?.body?.appendChild(portalContainer);
    }

    return () => {
      document?.body?.removeChild(portalContainer);
    };
  }, [portalContainer]);

  const {
    id,
    name,
    types,
    stats,
    weight,
    height,
    front_image,
  } = pokemonDetails;

  if (!portalContainer) return null;

  return ReactDOM.createPortal(
    <dialog
      ref={ref}
      className="modal"
      onClick={() => {
        ref?.current?.close();
        if (onClose) onClose();
      }}
    >
      <section
        className="modal-box"
        onClick={(e) => e?.stopPropagation()}
      >
        <form
          method="dialog"
          onSubmit={() => {
            if (onClose) onClose();
          }}
        >
          <button
            className="btn btn-square absolute right-2 top-2"
            aria-label="Close Modal Button"
          >
            <XMarkIcon className="size-6" aria-label="Close Icon" />
          </button>
        </form>
        <h3 className="font-bold text-lg">
          {`#${id} ${name}`}
        </h3>
        <div className="pt-4 flex flex-col items-center justify-between gap-2">
          <PokemonSprite
            className="object-cover mask mask-squircle p-2"
            maskType={types[0]?.type?.name}
            src={front_image}
            alt={`modal ${name} front image`}
          />
          <ul className={cn(
            "mt-2",
            { "join join-horizontal": types.length > 1 },
          )}>
            {types.map(({ type }) => (
              <li key={type.name}>
                <PokemonBadge
                  className="join-item badge-lg"
                  pokemonType={type.name}
                />
              </li>
            ))}
          </ul>
          <div className="flex gap-3">
            <div className="stat place-items-center">
              <div id="pokemon-weight" className="stat-value">
                {weight}
              </div>
              <label className="stat-title" htmlFor="pokemon-weight">
                Weight
              </label>
            </div>
            <div className="stat place-items-center">
              <div id="pokemon-height" className="stat-value">
                {height}
              </div>
              <label className="stat-title" htmlFor="pokemon-height">
                Height
              </label>
            </div>
          </div>
          <dl className="w-full px-6 grid grid-cols-[max-content_max-content_auto] gap-x-2">
            {stats.map(({ stat, base_stat }) => (
              <React.Fragment key={stat.name}>
                <dt className="col-start-1 text-right font-semibold">
                  {statNameToAcronym[stat.name]}
                </dt>
                <dd className="col-start-2 pl-5 text-right">
                  {base_stat}
                </dd>
                <dd className="col-start-3 flex items-center">
                  <StatProgress
                    value={base_stat}
                    maxValue={255}
                  />
                </dd>
              </React.Fragment>
            ))}
          </dl>
        </div>
      </section>
    </dialog>,
    portalContainer
  );
});
