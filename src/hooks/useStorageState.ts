import { useEffect, useState } from "react";

type SetStateAction<S> = S | ((prevState: S) => S);
type Dispatch<A> = (value: A) => void;

export default function useStorageState<S = undefined>(
  defaultValue: S,
  key: string,
): [S, Dispatch<SetStateAction<S>>] {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    chrome.storage.local.get([key]).then((result) => {
      setValue(
        result[key] === undefined ? defaultValue : JSON.parse(result[key]),
      );
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    chrome.storage.local.set({ [key]: JSON.stringify(value) });
  }, [key, value]);

  return [value, setValue];
}
