import { faker } from "@faker-js/faker";

const createRandomProduct = () => {
  const id = faker.string.uuid();
  const name = faker.commerce.productName();
  const description = faker.commerce.productDescription();
  const price = faker.commerce.price();
  const image = faker.image.urlPlaceholder({ height: 150 });

  return { id, name, description, price, image };
};

const products = Array.from({ length: 5 }, createRandomProduct);

(() => {
  console.log("products::", products);

  products.forEach(async (product) => {
    const response = await fetch("http://localhost:5000/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });

    if (response.ok) {
      console.log("Seed data successfully created");
    } else {
      console.error("Failed to seed data");
    }
  });
})();
