import { useEffect, useState } from "react";
import { BallotType } from "../../api";
import api from "../Api/Api";

export type BallotCategories = BallotType["items"][number]["title"][];

export const useGetBallots = () => {
  const [ballots, setBallots] = useState<BallotType | undefined>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | undefined>();
  const [categories, setCategory] = useState<BallotCategories | undefined>();

  useEffect(() => {
    async function getBallots() {
      setLoading(true);
      try {
        const ballots = await api.getBallotData();
        const cat = ballots?.items.map((ballot) => ballot.title);
        setCategory(cat);
        setBallots(ballots);
      } catch (e: unknown) {
        e instanceof Error && setError(e.message);
      }
    }

    getBallots();
  }, []);

  return { ballots, categories, loading, error };
};
