import cn from "@utils/cn";
import { getValueRange } from "@utils/helpers";

interface StatProgressProps {
  className?: string;
  value: number;
  maxValue: number;
}

export function StatProgress({
  className,
  value,
  maxValue,
}: Readonly<StatProgressProps>) {

  const valueRange = getValueRange(value, maxValue);

  return (
    <div className="w-full tooltip" data-tip={`${value}/${maxValue}`}>
      <progress
        className={cn(
          "h-3 progress progress-primary",
          className,
          {
            "progress-accent": valueRange === "high",
            "progress-success": valueRange === "great",
            "progress-warning": valueRange === "medium",
            "progress-error": valueRange === "low",
          },
        )}
        value={value}
        max={maxValue}
      />
    </div>
  );
}
