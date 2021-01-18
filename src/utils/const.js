const FILTERS = [
  { label: `ОДЕЖДА`, link: `/wear`, type: `wear` },
  { label: `НОВИНКИ`, link: `/wear/new`, type: `new` },
  { label: `КУРТКИ`, link: `/wear/coat`, type: `coat` },
  { label: `РУБАШКИ`, link: `/wear/shirt`, type: `shirt` },
  { label: `ФУТБОЛКИ`, link: `/wear/t-shirt`, type: `t-shirt` },
  { label: `ТОЛСТОВКИ`, link: `/wear/sweatshirt`, type: `sweatshirt` },
  { label: `ШТАНЫ`, link: `/wear/pants`, type: `pants` },
  { label: `SALE`, link: `/wear/sale`, type: `sale` },
  { label: `АРХИВ`, link: `/wear/archive`, type: `archive` },
];

const LINKS = [
  {
    to: "/wear",
    label: "Одежда",
  },
  {
    to: "/accessory",
    label: "Аксессуары",
  },
  {
    to: "/blog",
    label: "Блог",
  },
  {
    to: "/shipping",
    label: "Доставка и оплата",
  },
  {
    to: "/contacts",
    label: "Контакты",
  },
];

export { FILTERS, LINKS };
