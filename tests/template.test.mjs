import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";
import site from "../site-data.mjs";
import { bookingMode, categoryMode, specialtyMode } from "../template-rules.mjs";

const html = fs.readFileSync("out/index.html", "utf8");

test("client static export is built", () => {
  assert.match(html, /site-root/);
  assert.match(html, /Ксения Шаповалова/);
});

test("verified client identity and template mode are populated", () => {
  assert.equal(site.master.name, "Ксения Шаповалова");
  assert.equal(specialtyMode(site), "hair");
  assert.equal(site.services.groups.length, 3);
  assert.equal(site.contacts.phoneDisplay, "+7 (915) 255-05-18");
});

test("service category mode is correct", () => {
  assert.equal(categoryMode(site), "many");
});

test("booking mode follows verified data", () => {
  assert.equal(bookingMode(site), "contact");
});

test("canonical stylesheet and runtime are present", () => {
  assert.ok(fs.existsSync("app/template.css"));
  assert.ok(fs.existsSync("public/template-runtime.js"));
});
