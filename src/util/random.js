let nanoid = null;

exports.randomId = async () => {
  if (!nanoid) {
    const { nanoid: func } = await import('nanoid');
    nanoid = func;
  }

  return nanoid(16);
};
