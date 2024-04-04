import PhotoIcon from "@components/ui/icons/photo";

interface PokemonSpriteProps extends React.ImgHTMLAttributes<HTMLImageElement> { }

export function PokemonSprite({
  ...props
}: PokemonSpriteProps) {

  if (!props.src) {
    return (
      <figure>
        <PhotoIcon className="size-20" />
      </figure>
    );
  }

  return (
    <figure>
      <img
        {...props}
        alt={props.alt}
        loading="lazy"
      />
    </figure>
  );
}
