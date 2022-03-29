export const updateQuery = ({ router, key, value }) => {
  router.push({
    pathname: '/',
    query: { [key]: encodeURI(value) },
  });
};

export default updateQuery