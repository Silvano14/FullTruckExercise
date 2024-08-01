import { useMemo, useRef, useState } from "react";
import json1 from "./json1.json";
import json2 from "./json2.json";

type Props = {
  aggregateBy: "day" | "week" | "month";
  timeTarget: "pickup_date" | "created_at";
  startDate: string | null;
  endDate: string | null;
};

/**
 * Custom hook for fetching statistics data.
 * @returns An object containing the `fetchStatistics` function.
 */
const useStatistics = (): {
  fetchStatistics: (obj: Props) => Promise<object>;
  isFetched: boolean;
} => {
  const toggleRef = useRef(false);
  const [isFetched, setIsFetched] = useState(false);

  /**
   * Fetches statistics data based on the provided props.
   * This function has a delay to simulate a slow network call.
   * @param props - The props object containing the necessary parameters for fetching statistics.
   * @returns A promise that resolves to the fetched statistics data.
   */

  const fetchStatistics = (_: Props): Promise<object> => {
    setIsFetched(false);
    toggleRef.current = !toggleRef.current;
    return new Promise((resolve) => {
      const delay = Math.random() * 3000 + 500;
      setTimeout(() => {
        toggleRef.current ? resolve(json1) : resolve(json2);
        setIsFetched(true);
      }, delay);
    });
  };

  return useMemo(() => ({ fetchStatistics, isFetched }), [isFetched]);
};

export default useStatistics;
