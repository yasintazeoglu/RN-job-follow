import { update } from "./index";
export const singleSave = (d, sub, ref) => {
  if (sub !== "") {
    for (let i in d) {
      if (d[i] === sub) {
        return Promise.reject(1);
      }
    }
    let keys = Object.keys(d);
    let wd = {};
    keys = parseInt(keys[keys.length - 1]);
    wd[keys + 1] = sub;
    update(ref, wd);
    return Promise.resolve(wd);
  } else {
    return Promise.reject(0);
  }
};
export const multiSave = (d, sub, ref) => {
  let c = true;
  for (i in sub) {
    if (sub[i] === "") {
      c = false;
    }
  }
  if (c) {
    let keys = Object.keys(d);
    let wd = {};
    keys = parseInt(keys[keys.length - 1]);
    wd[keys + 1] = sub;
    update(ref, wd);
    return Promise.resolve(wd);
  } else {
    return Promise.reject(0);
  }
};
