export default async function FetchData() {
  try {
    const res = await fetch(
      "https://varsitywares.onrender.com/api/product/get-all-products"
    );

    if (!res.ok) {
      throw new Error(`An error occurred: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return null;
  }
}
