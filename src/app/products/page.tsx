import Image from "next/image";

export default async function Product() {
  try {
    const res = await fetch(
      "https://varsitywares.onrender.com/api/product/get-all-products"
    );

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();
    console.log("API Response:", data);

    const products = Array.isArray(data) ? data : data.products || [];

    if (!Array.isArray(products)) {
      throw new Error("Expected products to be an array");
    }

    return (
      <main className="p-4">
        <div className="p-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product: any) => (
            <div key={product._id} className="border p-4 mb-4">
              <h2 className="text-xl font-semibold">{product.name}</h2>

              {/* Display the first image from the images array */}
              {product.images && product.images.length > 0 && (
                <Image
                  src={product.images[0].url} // Use the 'url' property of the first image object
                  alt={product.name}
                  width={300}
                  height={300}
                  objectFit="cover"
                  className="rounded"
                />
              )}

              <p className="mt-2">Price: ${product.discountPrice}</p>
              <p>Stock: {product.stock}</p>

              {/* Shop information (if needed) */}
              {product.shop && (
                <p className="text-gray-500">Shop ID: {product.shopId}</p>
              )}
            </div>
          ))}
        </div>
      </main>
    );
  } catch (error) {
    console.error("Error fetching products:", error);

    return (
      <main className="p-4">
        <div className="mb-4">
          <h1 className="text-2xl font-bold">HomePage</h1>
          <p className="text-red-500">
            Failed to load products. Please try again later.
          </p>
        </div>
      </main>
    );
  }
}
