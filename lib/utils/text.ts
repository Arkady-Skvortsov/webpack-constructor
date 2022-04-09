import * as chalkAnimation from "chalk-animation";
import { preset } from "./helpers/enum";
import { promise } from "./helpers/promise";

async function figletText(preset: preset) {
  const animation = chalkAnimation.rainbow(
    `Webpack ${preset} config had been generated!\n`
  );

  await promise(10000);

  return animation.stop();
}

function parseString(str: string) {
  return str.split(" ").join(" ");
}

export { figletText, parseString };
