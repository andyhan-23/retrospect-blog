import headerComponent from "./views/components/header";
import errorComponent from "./views/components/error";
import listComponent from "./views/components/list";
import contentComponet from "./views/components/content";
import mainPage from "./views/pages/main";
import detailPage from "./views/pages/detail";
import notFoundPage from "./views/pages/not-found";
import Model from "./models";

const appTemplate = `
  <header id="header"></header>
  <main id="main"></main>
  <footer id="footer"></footer>
`;
const app = document.getElementById("app");
app.innerHTML = appTemplate;
const model = new Model();
//headerComponent();
//errorComponent();
const list = async () => await model.mainList();
const content = async () => await model.detailItem(2);

//detailPage(await content());
//contentComponet(await content());
notFoundPage();
mainPage(await list());
