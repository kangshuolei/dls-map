import "./chunk-V4OQ3NZ2.js";

// ../node_modules/.pnpm/compare-versions@6.1.1/node_modules/compare-versions/lib/esm/utils.js
var semver = /^[v^~<>=]*?(\d+)(?:\.([x*]|\d+)(?:\.([x*]|\d+)(?:\.([x*]|\d+))?(?:-([\da-z\-]+(?:\.[\da-z\-]+)*))?(?:\+[\da-z\-]+(?:\.[\da-z\-]+)*)?)?)?$/i;
var validateAndParse = (version) => {
  if (typeof version !== "string") {
    throw new TypeError("Invalid argument expected string");
  }
  const match = version.match(semver);
  if (!match) {
    throw new Error(`Invalid argument not valid semver ('${version}' received)`);
  }
  match.shift();
  return match;
};
var isWildcard = (s) => s === "*" || s === "x" || s === "X";
var tryParse = (v) => {
  const n = parseInt(v, 10);
  return isNaN(n) ? v : n;
};
var forceType = (a, b) => typeof a !== typeof b ? [String(a), String(b)] : [a, b];
var compareStrings = (a, b) => {
  if (isWildcard(a) || isWildcard(b))
    return 0;
  const [ap, bp] = forceType(tryParse(a), tryParse(b));
  if (ap > bp)
    return 1;
  if (ap < bp)
    return -1;
  return 0;
};
var compareSegments = (a, b) => {
  for (let i = 0; i < Math.max(a.length, b.length); i++) {
    const r = compareStrings(a[i] || "0", b[i] || "0");
    if (r !== 0)
      return r;
  }
  return 0;
};

// ../node_modules/.pnpm/compare-versions@6.1.1/node_modules/compare-versions/lib/esm/compareVersions.js
var compareVersions = (v1, v2) => {
  const n1 = validateAndParse(v1);
  const n2 = validateAndParse(v2);
  const p1 = n1.pop();
  const p2 = n2.pop();
  const r = compareSegments(n1, n2);
  if (r !== 0)
    return r;
  if (p1 && p2) {
    return compareSegments(p1.split("."), p2.split("."));
  } else if (p1 || p2) {
    return p1 ? -1 : 1;
  }
  return 0;
};

// ../node_modules/.pnpm/compare-versions@6.1.1/node_modules/compare-versions/lib/esm/compare.js
var compare = (v1, v2, operator) => {
  assertValidOperator(operator);
  const res = compareVersions(v1, v2);
  return operatorResMap[operator].includes(res);
};
var operatorResMap = {
  ">": [1],
  ">=": [0, 1],
  "=": [0],
  "<=": [-1, 0],
  "<": [-1],
  "!=": [-1, 1]
};
var allowedOperators = Object.keys(operatorResMap);
var assertValidOperator = (op) => {
  if (typeof op !== "string") {
    throw new TypeError(`Invalid operator type, expected string but got ${typeof op}`);
  }
  if (allowedOperators.indexOf(op) === -1) {
    throw new Error(`Invalid operator, expected one of ${allowedOperators.join("|")}`);
  }
};

// ../node_modules/.pnpm/compare-versions@6.1.1/node_modules/compare-versions/lib/esm/satisfies.js
var satisfies = (version, range) => {
  range = range.replace(/([><=]+)\s+/g, "$1");
  if (range.includes("||")) {
    return range.split("||").some((r4) => satisfies(version, r4));
  } else if (range.includes(" - ")) {
    const [a, b] = range.split(" - ", 2);
    return satisfies(version, `>=${a} <=${b}`);
  } else if (range.includes(" ")) {
    return range.trim().replace(/\s{2,}/g, " ").split(" ").every((r4) => satisfies(version, r4));
  }
  const m = range.match(/^([<>=~^]+)/);
  const op = m ? m[1] : "=";
  if (op !== "^" && op !== "~")
    return compare(version, range, op);
  const [v1, v2, v3, , vp] = validateAndParse(version);
  const [r1, r2, r3, , rp] = validateAndParse(range);
  const v = [v1, v2, v3];
  const r = [r1, r2 !== null && r2 !== void 0 ? r2 : "x", r3 !== null && r3 !== void 0 ? r3 : "x"];
  if (rp) {
    if (!vp)
      return false;
    if (compareSegments(v, r) !== 0)
      return false;
    if (compareSegments(vp.split("."), rp.split(".")) === -1)
      return false;
  }
  const nonZero = r.findIndex((v4) => v4 !== "0") + 1;
  const i = op === "~" ? 2 : nonZero > 1 ? nonZero : 1;
  if (compareSegments(v.slice(0, i), r.slice(0, i)) !== 0)
    return false;
  if (compareSegments(v.slice(i), r.slice(i)) === -1)
    return false;
  return true;
};

// ../node_modules/.pnpm/compare-versions@6.1.1/node_modules/compare-versions/lib/esm/validate.js
var validate = (version) => typeof version === "string" && /^[v\d]/.test(version) && semver.test(version);
var validateStrict = (version) => typeof version === "string" && /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/.test(version);
export {
  compare,
  compareVersions,
  satisfies,
  validate,
  validateStrict
};
//# sourceMappingURL=compare-versions.js.map
