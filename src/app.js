import headerComponent from "./views/components/header";
import errorComponent from "./views/components/error";

(() => {
  const appTemplate = `
  <header id="header"></header>
  <main id="main"></main>
  <footer id="footer"></footer>
`;
  const app = document.getElementById("app");
  app.innerHTML = appTemplate;
})();
headerComponent();
errorComponent();
