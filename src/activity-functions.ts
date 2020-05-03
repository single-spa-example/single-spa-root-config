export const showWhenAnyOf = (routes) => (location) =>
  routes.some((route) => location.pathname === route);

export const showWhenPrefix = (routes) => (location) =>
  routes.some((route) => location.pathname.startsWith(route));

export const showExcept = (routes) => (location) =>
  routes.every((route) => location.pathname !== route);
