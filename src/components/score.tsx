import { Field, Label, Switch } from "@headlessui/react";
import { classNames } from "../lib/utils.ts";
import { Rating } from "../types.ts";

interface Props {
  score: number;
  useWeightedScore: boolean;
  onChangeUseWeightedScore: (value: boolean) => void;
}

export const Score = ({
  score,
  useWeightedScore,
  onChangeUseWeightedScore,
}: Props) => {
  return (
    <div className="max-w-64">
      <p>
        <span className="text-9xl font-bold">{score.toFixed(1)}</span>
        <span className="text-3xl font-normal text-slate-500 dark:text-slate-400">
          /{Rating.GREAT}
        </span>
      </p>
      <Field className="mb-4 flex justify-between">
        <Label as="span" className="text-sm font-medium leading-6" passive>
          {useWeightedScore ? "Weighted Score" : "Unweighted Score"}
        </Label>
        <Switch
          checked={useWeightedScore}
          onChange={onChangeUseWeightedScore}
          className="group relative inline-flex h-5 w-10 flex-shrink-0 cursor-pointer items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 dark:focus:ring-4 dark:focus:ring-slate-400 dark:focus:ring-offset-0"
        >
          <span className="sr-only">Use setting</span>
          <span
            aria-hidden="true"
            className="pointer-events-none absolute h-full w-full rounded-md bg-white dark:bg-slate-700"
          />
          <span
            aria-hidden="true"
            className={classNames(
              useWeightedScore
                ? "bg-slate-600 dark:bg-slate-400"
                : "bg-slate-200",
              "pointer-events-none absolute mx-auto h-4 w-9 rounded-full transition-colors duration-200 ease-in-out",
            )}
          />
          <span
            aria-hidden="true"
            className={classNames(
              useWeightedScore ? "translate-x-5" : "translate-x-0",
              "pointer-events-none absolute left-0 inline-block h-5 w-5 transform rounded-full border border-gray-200 bg-white shadow ring-0 transition-transform duration-200 ease-in-out",
            )}
          />
        </Switch>
      </Field>
    </div>
  );
};
