import handler from "../mocks/handler";
import getData from "../mocks/get-data";

const getDetailData = () =>
  handler(
    "get",
    "/detail/:id",
    getData("detail"),
    (req, data) => data[req.params.id],
  );

export default getDetailData;
