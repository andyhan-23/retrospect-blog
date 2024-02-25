import "./index.css";

const headerTemplate = `
<header id="header_container">
  <div id="header_inner_container">
    <a href="/">
      <div id="header_logo_container">
        <h1 class="logoName">멘토링 회고록</h1>
      </div>
    </a>
  </div>
</header>
`;

const headerComponent = () => {
  const header = document.getElementById("header");
  header.innerHTML = headerTemplate;
};

export default headerComponent;
