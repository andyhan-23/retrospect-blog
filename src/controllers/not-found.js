import notFoundPage from "../views/pages/not-found";
import { addClickEventToLogo } from "./click";

function NotFoundController(router) {
  this.notFoundPage = () => {
    try {
      notFoundPage();
      addClickEventToLogo(router);
    } catch (error) {
      if (import.meta.env.DEV)
        console.error(
          `페이지를 찾지 못하는 컨트롤러를 통해 화면을 보여주는 부분에서 에러발생:${error}`,
        );
    }
  };
  router.setNotFound(this.notFoundPage);
}

export default NotFoundController;
