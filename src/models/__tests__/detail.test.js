import getDetailContent from "../detail";
import articleContent from "../../../__fixtures__/detail.json";
import { URL } from "../constant";
import { server } from "./server";

beforeAll(() => server(URL.detail, 2).listen());
test("getDetailContent 함수가 잘 동작하여 특정 id에 맞게 상세내용을 성공적으로 받아오는지 확인", async () => {
  const result = await getDetailContent(2);
  expect(result).toEqual(articleContent[2]);
});
afterAll(() => server(URL.detail, 2).close());
