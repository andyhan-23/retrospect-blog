import { setupWorker } from "msw";
import getMainData from "../api/get-main-data";
import getDetailData from "../api/get-detail-data";

const initMocks = () => {
  try {
    const mockWorker = [getMainData, getDetailData].map(handler => handler());
    const worker = setupWorker(...mockWorker);
    worker.start();
    return true;
  } catch (error) {
    if (import.meta.env.DEV) console.error(`worker error:${error}`);
    return false;
  }
};

export default initMocks;
