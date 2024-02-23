import handler from "../mocks/handler";
import getData from "../mocks/get-data";

const getMainData = () =>
  handler("get", "/main", getData("main"), (req, data) => data);

export default getMainData;
