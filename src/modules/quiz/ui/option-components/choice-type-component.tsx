import { OptionComponentProps } from "../../application/use-option-component";

export function ChoiceTypeComponent({
  option,
  onAnwserSelected,
}: OptionComponentProps) {
  return (
    <button
      className="border border-gray-300 p-4 hover:bg-gray-100 cursor-pointer rounded-md"
      onClick={() => onAnwserSelected(option.value, option.isRejection)}
    >
      <div dangerouslySetInnerHTML={{ __html: option.display }}></div>
    </button>
  );
}
