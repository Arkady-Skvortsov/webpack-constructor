import chalkAnimation from "chalk-animation";
import { promise } from "./helpers/promise";
async function start() {
    const webpackTitle = chalkAnimation.rainbow("Webpack-constructor\n");
    await promise(5000);
    return webpackTitle.stop();
}
export { start };
//# sourceMappingURL=start.js.map