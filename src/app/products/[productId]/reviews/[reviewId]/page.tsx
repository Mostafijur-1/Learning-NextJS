export default function page({
  params,
}: {
  params: { productId: string; reviewId: string };
}) {
  return (
    <div>
      <h1>
        product {params.productId} review {params.reviewId}
      </h1>
    </div>
  );
}
