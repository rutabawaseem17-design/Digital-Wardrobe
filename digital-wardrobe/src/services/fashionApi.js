const API_URL = "https://dummyjson.com/products";

const fashionCategories = [
    "womens-dresses",
    "womens-shoes",
    "womens-bags",
];

export async function getFashionItems() {
    const requests = fashionCategories.map((category) =>
        fetch(`${API_URL}/category/${category}`)
    );

    const responses = await Promise.all(requests);

    for (const response of responses) {
        if (!response.ok) {
            throw new Error("Failed to load fashion items");
        }
    }

    const results = await Promise.all(
        responses.map((response) => response.json())
    );

    return results.flatMap((result) => result.products);
}