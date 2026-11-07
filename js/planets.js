/* The planets and their comets: which kind of work each bot belongs to, and what a link opens.
 *
 * window.PLANETS (js/bots.js) lists the four kinds of work, each with its bots in order; every bot
 * names its planet too. This file only reads them — js/worlds.js and js/hero.js ask it, and so does
 * tools/planets.test.mjs, which checks that every bot circles exactly one planet.
 *
 *   Planets.planetOf("dental")     → the Booking planet
 *   Planets.resolve("#dental")     → { planet: "booking", bot: "dental" }
 *   Planets.resolve("#world-snack") → { planet: "shops", bot: "snack" }   (the old panel links)
 *   Planets.resolve("#booking")    → { planet: "booking", bot: null }     (its first or last chosen bot)
 *   Planets.resolve("#nothing")    → null
 *
 * A bot's own id is tried before a planet's, so "#voice" opens Mawaeed Voice on the Voice planet —
 * the same place either way.
 */
(function (root) {
  "use strict";

  const planets = () => (root.PLANETS || []).filter((planet) => planet.bots && planet.bots.length);
  const bots = () => root.BOTS || [];

  function planetOf(botId) {
    return planets().find((planet) => planet.bots.includes(botId)) || null;
  }

  function botsOf(planetId) {
    const planet = planets().find((one) => one.id === planetId);
    if (!planet) return [];
    return planet.bots.map((id) => bots().find((bot) => bot.id === id)).filter(Boolean);
  }

  function resolve(hash) {
    let id;
    try {
      id = decodeURIComponent(String(hash || "").replace(/^#/, "")).replace(/^world-/, "");
    } catch {
      return null; // a hash like #100% is not one of ours
    }
    if (!id) return null;
    if (bots().some((bot) => bot.id === id)) {
      const planet = planetOf(id);
      return planet ? { planet: planet.id, bot: id } : null;
    }
    const planet = planets().find((one) => one.id === id);
    return planet ? { planet: planet.id, bot: null } : null;
  }

  root.Planets = { planetOf, botsOf, resolve };
})(typeof window !== "undefined" ? window : globalThis);
