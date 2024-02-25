import Router from "..";

describe("Rourer", () => {
  let router;
  beforeEach(() => {
    router = new Router();
  });
  test("addRoute 메서드가 확실히 동작하는지 테스트 하기", () => {
    const pageFunction = jest.fn();
    router.addRoute("/", pageFunction);
    router.addRoute("/detail/(\\w+)", pageFunction);
    expect(router.routes.length).toBe(2);
    expect(router.routes[0].regexString).toEqual(/^\/$/);
    expect(router.routes[1].regexString).toEqual(/^\/detail\/(\w+)$/);
    expect(router.routes[0].page).toBe(pageFunction);
    expect(router.routes[1].page).toBe(pageFunction);
  });
  test("showNotFound 함수가 확실히 동작하는지 테스트 하기", () => {
    const showNotFound = jest.fn();
    const pageFunction = jest.fn();
    router.setNotFound(showNotFound);
    router.addRoute("/", pageFunction);
    router.navigate("/hello");
    expect(showNotFound).toHaveBeenCalled();
  });
  test("match 함수가 정확히 동작한다고 가정하였을때 정확한 파라미터를 넘겨주는지 테스트 하기", () => {
    const pageFunction = jest.fn();
    const path = "/detail/2";
    router.addRoute("/detail/(\\w+)", pageFunction);
    const match = path.match(router.routes[0].regexString);
    expect(match[1]).toBe("2");
  });
});
