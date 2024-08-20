export default function page({ params }: { params: { slug: string[] } }) {
  if (params.slug?.length === 2) {
    return (
      <div>
        <h1>
          showing {params.slug[0]} for {params.slug[1]}
        </h1>
      </div>
    );
  } else if (params.slug?.length === 1) {
    return (
      <div>
        <h1>showing {params.slug[0]}</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>DocsPage</h1>
    </div>
  );
}
