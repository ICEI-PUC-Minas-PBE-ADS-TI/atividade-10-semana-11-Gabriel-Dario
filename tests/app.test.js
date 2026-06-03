"use strict";

const assert = require("node:assert/strict");
const test = require("node:test");
const {
  buildDetailsUrl,
  escapeHtml,
  formatScore,
  getFeaturedManhwa,
  getManhwaById,
  getQueryParam,
  projectData
} = require("../public/app.js");

test("getFeaturedManhwa returns a highlighted manhwa", () => {
  const featured = getFeaturedManhwa(projectData.manhwas);

  assert.equal(featured.highlight, true);
});

test("getManhwaById finds the record using string id", () => {
  const manhwa = getManhwaById(projectData.manhwas, "3");

  assert.equal(manhwa.title, "Omniscient Reader");
});

test("getManhwaById returns null for missing id", () => {
  assert.equal(getManhwaById(projectData.manhwas, "99"), null);
});

test("buildDetailsUrl creates the expected URL with id", () => {
  assert.equal(buildDetailsUrl(6), "detalhes.html?id=6");
});

test("getQueryParam reads values from query string", () => {
  assert.equal(getQueryParam("?id=2&view=full", "id"), "2");
});

test("formatScore uses the project score pattern", () => {
  assert.equal(formatScore(84), "84/100");
});

test("escapeHtml protects dynamic text before rendering", () => {
  assert.equal(escapeHtml("<img src=x onerror=alert(1)>"), "&lt;img src=x onerror=alert(1)&gt;");
});
