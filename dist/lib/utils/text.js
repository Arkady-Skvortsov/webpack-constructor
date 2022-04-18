import * as chalkAnimation from "chalk-animation";
import { promise } from "./helpers/promise";
async function figletText(preset) {
    console.clear();
    const animation = chalkAnimation.rainbow(`Webpack ${preset} config had been generated!\n`);
    await promise(5000);
    return animation.stop();
}
function parseString(str) {
    return str.split(" ").join(" ");
}
export { figletText, parseString };
//# sourceMappingURL=text.js.map