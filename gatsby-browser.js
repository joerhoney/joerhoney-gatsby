import "/src/css/prism.css";
import "/src/css/main.scss";
import { installShutter, shutterRouteUpdated } from "./src/motion/shutter";

require("prismjs/plugins/command-line/prism-command-line.css");

// Page transition (proposal prototype): see src/motion/shutter.js.
export const onClientEntry = () => installShutter();
export const onRouteUpdate = () => shutterRouteUpdated();
