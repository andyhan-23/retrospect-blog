import headerComponent from "../../components/header";
import contentComponet from "../../components/content";

const detailPage = articleItem => {
  headerComponent();
  contentComponet(articleItem);
};

export default detailPage;
