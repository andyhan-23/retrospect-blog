import instance from "./request";

const loadData = async path => {
  try {
    const result = await instance.get(path);
    return result;
  } catch (error) {
    if (import.meta.env.DEV)
      console.error(`${path}에 해당하는 에러 메시지 출력:${error.message}`);
  }
  return null;
};

export default loadData;
