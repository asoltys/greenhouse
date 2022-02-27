import wretch from "wretch";
export const get = (url, fetch) =>
  wretch().polyfills({ fetch }).url(url).get().json();
