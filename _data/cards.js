const fg = require('fast-glob');

module.exports = async function() {
  const cards = await fg.glob(['cards/**.png']);

  return cards.map(card => card.split('.png')[0]);
}