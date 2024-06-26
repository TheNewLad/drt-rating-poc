import { Rating, Ratings } from "../types.ts";
import { ChevronDoubleUpIcon } from "./icons/chevron-double-up.icon.tsx";
import { ChevronDownIcon } from "./icons/chevron-down.icon.tsx";
import { ChevronUpIcon } from "./icons/chevron-up.icon.tsx";
import { DashIcon } from "./icons/dash.icon.tsx";
import { RatingButton } from "./rating-button.tsx";

interface RatingButtonGroupProps {
  label: string;
  description: string;
  id: keyof Ratings;
  rating?: number;
  setRating: (rating: number) => void;
}

export const RatingButtonGroup = ({
  label,
  description,
  id,
  rating = -1,
  setRating,
}: RatingButtonGroupProps) => {
  return (
    <div className="flex min-w-80 max-w-80 flex-col">
      <label
        className="inline-flex gap-2 text-sm font-medium leading-6"
        htmlFor={id}
      >
        <h2>{label}</h2>
        <p className="content-center text-xs text-slate-500 dark:text-slate-300">
          {description}
        </p>
      </label>
      <span className="isolate inline-flex max-w-full rounded-md shadow-sm">
        <RatingButton
          className="rounded-l-md"
          onClick={() => setRating(Rating.BAD)}
          selected={rating === Rating.BAD}
        >
          Bad
          <ChevronDownIcon />
        </RatingButton>
        <RatingButton
          className="-ml-px"
          onClick={() => setRating(Rating.OK)}
          selected={rating === Rating.OK}
        >
          OK
          <DashIcon />
        </RatingButton>
        <RatingButton
          className="-ml-px"
          onClick={() => setRating(Rating.GOOD)}
          selected={rating === Rating.GOOD}
        >
          Good
          <ChevronUpIcon />
        </RatingButton>
        <RatingButton
          className="-ml-px rounded-r-md"
          onClick={() => setRating(Rating.GREAT)}
          selected={rating === Rating.GREAT}
        >
          Great
          <ChevronDoubleUpIcon />
        </RatingButton>
      </span>
    </div>
  );
};
