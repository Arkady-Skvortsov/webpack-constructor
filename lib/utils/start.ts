import { promise } from "./helpers/promise";
import chalkAnimation from "chalk-animation";

const start = async () => {
  const webpackTitle = chalkAnimation.rainbow("Webpack-constructor\n");

  await promise(5000);

  return webpackTitle.stop();
};

export { start };
