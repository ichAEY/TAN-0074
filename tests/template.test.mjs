import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";
import site from "../site-data.mjs";
import { bookingMode, categoryMode, specialtyMode } from "../template-rules.mjs";
const html = fs.readFileSync("out/index.html", "utf8");
test("fresh Master Engine v2 structure",()=>{assert.match(html,/site-root/);assert.match(html,/id="mobile-portfolio"/);assert.match(html,/Смотреть все работы/);assert.match(html,/mct-work-placeholder/);});
test("TAN-0074 confirmed data",()=>{assert.equal(site.master.name,"Ксения");assert.equal(site.brand.name,"Ксения Шаповалова");assert.equal(site.contacts.phoneHref,"tel:+79152550518");assert.equal(site.links.bookingUrl,"https://t.me/Ksusha_colorist");assert.equal(site.images.gallery.length,0);assert.equal(specialtyMode(site),"hair");assert.equal(categoryMode(site),"single");assert.equal(bookingMode(site),"direct");assert.equal(site.services.groups[0].services.length,3);assert.match(html,/эксперт по волосам/);assert.match(html,/https:\/\/t\.me\/Ksusha_colorist/);});
