export const ProductTile = ({ product }) => {
  return (
    <div>
      Product: {product.name} {product.price}
    </div>
  );
};

export const ProductFeed = ({ children }) => {
  return <div>{children}</div>;
};
