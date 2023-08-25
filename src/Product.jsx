



function Product() {

    const products = {
        name: "Sample Product",
        price: 19.99,
        description: "This is a sample product description.",
        imageUrl: "https://example.com/sample-product-image.jpg"
      };

  return (
    <div>
        <pre>{JSON.stringify(products, null, 2)}</pre>
    </div>
  );
}

export default Product;



