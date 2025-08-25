const products = [
  {
    name: "iPhone 16 pro",
    price: "From $999 or $41.62/mo. for 24 mo.",
    description: "The ultimate iPhone.",
    imageSrc: "./images/iphone_16pro.png",
  },
  {
    name: "iPhone 16",
    price: "From $799 or $41.62/mo. for 24 mo.",
    description: "A total powerhouse.",
    imageSrc: "./images/iphone_16.png",
  },
  {
    name: "iPhone 16e",
    price: "From $599 or $41.62/mo. for 24 mo.",
    description: "Latest iPhone. Greatest price.",
    imageSrc: "./images/iphone_16e.png",
  },
  {
    name: "iPhone 15",
    price: "From $699 or $41.62/mo. for 24 mo.",
    description: "As amazing as ever.",
    imageSrc: "./images/iphone_15.png",
  },
];
products.map((product) => {
  const cards = document.createElement("div");
  cards.setAttribute("id", "card");

  const title = document.createElement("h2");

  title.innerText = product.name;

  const price = document.createElement("p");
  price.setAttribute("class", "moto");
  price.innerText = product.price;

  const description = document.createElement("p");
  description.setAttribute("class", "descriptionTxt");
  description.innerText = product.description;

  const picture = document.createElement("img");
  picture.src = product.imageSrc;

  cards.appendChild(title);
  cards.appendChild(price);
  cards.appendChild(description);
  cards.appendChild(picture);

  document.getElementById("app").appendChild(cards);
});
