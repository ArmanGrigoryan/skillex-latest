import { useEffect, useState } from "react";

interface IProps {
    defValue: string;
    delay: number;
}

const useDebounce = ({
    defValue,
    delay
}: IProps) => {
  const [debounced, setDebounced] = useState(defValue);

  useEffect(() => {
    const handler = setTimeout(setDebounced, delay, defValue);

    return () => clearTimeout(handler);
  }, [defValue, delay]);

  return debounced;
}

export default useDebounce;