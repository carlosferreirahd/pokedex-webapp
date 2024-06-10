import PhotoIcon from "@components/ui/icons/photo";
import cn from "@utils/cn";
import { PokemonType } from "@shared/interfaces/pokemon.interface";

interface PokemonSpriteProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  maskType?: PokemonType
}

export function PokemonSprite({
  className,
  maskType,
  ...props
}: Readonly<PokemonSpriteProps>) {

  if (!props.src) {
    return (
      <figure className="animate-fade animate-once animate-duration-[2000ms]">
        <PhotoIcon className="size-20" />
      </figure>
    );
  }

  return (
    <figure className="animate-fade animate-once animate-duration-[2000ms]">
      <img
        {...props}
        className={cn(
          className,
          {
            "bg-normal-lighter": maskType === "normal",
            "bg-fire-lighter": maskType === "fire",
            "bg-water-lighter": maskType === "water",
            "bg-electric-lighter": maskType === "electric",
            "bg-grass-lighter": maskType === "grass",
            "bg-ice-lighter": maskType === "ice",
            "bg-fighting-lighter": maskType === "fighting",
            "bg-poison-lighter": maskType === "poison",
            "bg-ground-lighter": maskType === "ground",
            "bg-flying-lighter": maskType === "flying",
            "bg-psychic-lighter": maskType === "psychic",
            "bg-bug-lighter": maskType === "bug",
            "bg-rock-lighter": maskType === "rock",
            "bg-ghost-lighter": maskType === "ghost",
            "bg-dragon-lighter": maskType === "dragon",
            "bg-dark-lighter": maskType === "dark",
            "bg-steel-lighter": maskType === "steel",
            "bg-fairy-lighter": maskType === "fairy",
          }
        )}
        alt={props.alt}
        loading="lazy"
      />
    </figure>
  );
}
