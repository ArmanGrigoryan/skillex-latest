import { LIMIT_OPTIONS } from "../../../utils/constants";

interface Props {
  value: number;
  onChange: (value: number) => void;
}

export default function LimitSelect({ value, onChange }: Props) {
  return (
    <label className="flex items-center gap-2 text-sm sm:text-base">
      Items per page:

      <select
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="bg-white text-black py-1 px-2 rounded-sm border cursor-pointer"
      >
        {
          LIMIT_OPTIONS.map(limit => (
            <option key={limit} value={limit}>
              {limit}
            </option>
          ))
        }
      </select>
    </label>
  );
}