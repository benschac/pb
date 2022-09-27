import { BallotType } from "../../api/index";
const api = {
  getBallotData: async () => {
    const response = await fetch("/api/getBallotData");
    const json: BallotType = await response.json();

    return json;
  },
};

export default api;
