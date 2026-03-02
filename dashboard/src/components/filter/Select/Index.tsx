interface Props {
  options: string[];
  selected: string;
  onChange: (value: string) => void;
}

export default function SelectFilter({
  options,
  selected,
  onChange,
}: Props) {

  return (
    <article className="flex gap-4">
      {options.map((option) => (
        <label
          key={option}
          className="flex items-center gap-1 cursor-pointer text-sm sm:text-base"
        >
          <input
            type="radio"
            name="select-filter"
            checked={selected === option}
            onChange={() => onChange(option)}
          />
          {option}
        </label>
      ))}
    </article>
  );
}