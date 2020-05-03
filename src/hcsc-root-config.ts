import { registerApplication, start } from "single-spa";
import { showExcept, showWhenAnyOf } from "./activity-functions";

registerApplication(
  "@hcsc/single-spa-login",
  () => System.import("@hcsc/single-spa-login"),
  (location) => location.pathname.startsWith("/login")
);

registerApplication(
  "@hcsc/single-spa-navbar",
  () => System.import("@hcsc/single-spa-navbar"),
  (location) => !location.pathname.startsWith("/login")
);

registerApplication(
  "@hcsc/single-spa-dashboard",
  () => System.import("@hcsc/single-spa-dashboard"),
  (location) => location.pathname === "/"
);

registerApplication(
  "@hcsc/single-spa-footer",
  () => System.import("@hcsc/single-spa-footer"),
  (location) => true
);

registerApplication(
  "@hcsc/single-spa-other",
  () => System.import("@hcsc/single-spa-other"),
  (location) => location.pathname === "/other"
);

start();
