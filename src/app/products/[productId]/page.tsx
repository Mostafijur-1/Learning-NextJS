export default function page({ params }: { params: { productId: string } }) {
  return (
    <div>
      <h1>product {params.productId}</h1>
    </div>
  );
}
