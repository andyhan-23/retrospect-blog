import "./index.css";
import formatDate from "../list/format-date";

const contentTemplate = (createdDate, detailContent, title) => ` 
<main>
  <div id="detail_container">
    <div id="detail_inner_container">
      <section>
        <div id="detail_title_container">
          <h1>${title}</h1>
        </div>
        <div id="detail_created_container">
          <p>${formatDate(createdDate)}</p>
        </div>
        <div id="detail_content_container">
          <p>${detailContent}</p>
        </div>
      <section>
    </div>
  </div>
</main>
`;

const contentComponet = articleItem => {
  const { created_date: createdDate, detailContent, title } = articleItem;
  const main = document.getElementById("main");
  main.innerHTML = contentTemplate(createdDate, detailContent, title);
};

export default contentComponet;
