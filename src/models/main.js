import loadData from "./load-data";
import { URL } from "./constant";

const getMainList = async () => {
  const { retrospective } = await loadData(URL.main);
  return retrospective;
};

export default getMainList;
