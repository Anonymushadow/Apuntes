try {
  const user = getUser();
  const cart = getCart(user);

  return cart;
} catch (error) {
  console.error(error);
}
