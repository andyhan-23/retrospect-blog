import headerComponent from "../../components/header";
import listComponent from "../../components/list";

const mainPage = list => {
  headerComponent();
  listComponent(list);
};

export default mainPage;
