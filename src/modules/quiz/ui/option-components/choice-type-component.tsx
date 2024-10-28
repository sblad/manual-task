import { clsx } from "clsx";
import { OptionComponentProps } from "../../application/use-option-component";

export function ChoiceTypeComponent({
  option,
  onAnwserSelected,
  previouslySelected,
}: OptionComponentProps) {
  return (
    <button
      className={clsx(
        "border border-gray-300 p-4 hover:bg-gray-100 cursor-pointer rounded-md",
        { "bg-green-300": previouslySelected }
      )}
      onClick={() => onAnwserSelected(option.value, option.isRejection)}
    >
      <div dangerouslySetInnerHTML={{ __html: option.display }}></div>
    </button>
  );
}
