const urlBuilder = (name) => {
  return name.replace(/[а-я]+/ig, "").trim().replace(' ', '-').toLowerCase();
}

const transferName = (name) => {
  let transferedName;
  
  if (name === 'pt-3' || name === 'pt-2') {
    transferedName = name.toUpperCase();
  } else {
    transferedName = name.replace("-", " ").replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())));
  }

  return transferedName;
}

export { urlBuilder, transferName };