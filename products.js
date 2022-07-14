const products = [
  {
    title: "Uva Crimson",
    price: 8.99,
    category: "Frutas",
    image: undefined,
    imageDescription: "",
  },
  {
    title: "Banana",
    price: 5.69,
    category: "Frutas",
    image: "./img/products/product_2.svg",
    imageDescription: "",
  },
  {
    title: "Mamão",
    price: 4.99,
    category: "Frutas",
    image: "./img/products/product_3.svg",
    imageDescription: "",
  },
  {
    title: "Maçã",
    price: 9.2,
    category: "Frutas",
    image: "./img/products/product_4.svg",
    imageDescription: "",
  },

  {
    title: "Refrigerante",
    price: 8.99,
    category: "Bebidas",
    image: undefined,
    imageDescription: "",
  },
  {
    title: "Vinho",
    price: 8.99,
    category: "Bebidas",
    image: "./img/products/product_6.svg",
    imageDescription: "",
  },
  {
    title: "Água Tônica",
    price: 8.99,
    category: "Bebidas",
    image: undefined,
    imageDescription: "",
  },
  {
    title: "Água de coco",
    price: 8.99,
    category: "Bebidas",
    image: "./img/products/product_8.svg",
    imageDescription: "",
  },

  {
    title: "Sabonete",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_9.svg",
    imageDescription: "",
  },
  {
    title: "Detergente",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_10.svg",
    imageDescription: "",
  },
  {
    title: "Limpa superfícies",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_11.svg",
    imageDescription: "",
  },
  {
    title: "Lustra Móveis",
    price: 8.99,
    category: "Higiene",
    image: undefined,
    imageDescription: "",
  },
];


let higiene = document.querySelector(".products-section")

higiene.insertAdjacentHTML("afterbegin", `
    <h1>Higiene</h1>
      <main class="products-content hygiene">
        <ul>
          <li class="product">
            <img src="./img/products/product_9.svg" alt="" title="" class="product-img" />
            <main class="product-main">
              <h1 class="product-title">Sabonete</h1>
              <h5 class="product-category">Higiene</h5>
              <strong class="product-price">R$ 8.99</strong>
            </main>
          </li>
          <li class="product">
            <img src="./img/products/product_10.svg" alt="" title="" class="product-img" />
            <main class="product-main">
              <h1 class="product-title">Detergente</h1>
              <h5 class="product-category">Higiene</h5>
              <strong class="product-price">R$ 8.99</strong>
            </main>
          </li>
          <li class="product">
            <img src="./img/products/product_11.svg" alt="" title="" class="product-img" />
            <main class="product-main">
              <h1 class="product-title">Limpa superfícies</h1>
              <h5 class="product-category">Higiene</h5>
              <strong class="product-price">R$ 8.99</strong>
            </main>
          </li>
          <li class="product">
            <img src="./img/products/no-img.svg" alt="" title="" class="product-img" />
            <main class="product-main">
              <h1 class="product-title">Lustra Móveis</h1>
              <h5 class="product-category">Higiene</h5>
              <strong class="product-price">R$ 8.99</strong>
            </main>
          </li>
        </ul>
      </main>
    </section>
  </main>
`)


let drinks = document.querySelector(".products-section")

drinks.insertAdjacentHTML("afterbegin", `
    <h1>Bebidas</h1>
      <main class="products-content drinks">
        <ul>
          <li class="product">
            <img src="./img/products/no-img.svg" alt="" title="" class="product-img" />
            <main class="product-main">
              <h1 class="product-title">Refrigerante</h1>
              <h5 class="product-category">Bebidas</h5>
              <strong class="product-price">R$ 8.99</strong>
            </main>
          </li>
          <li class="product">
            <img src="./img/products/product_6.svg" alt="" title="" class="product-img" />
            <main class="product-main">
              <h1 class="product-title">Vinho</h1>
              <h5 class="product-category">Bebidas</h5>
              <strong class="product-price">R$ 8.99</strong>
            </main>
          </li>
          <li class="product">
            <img src="./img/products/no-img.svg" alt="" title="" class="product-img" />
            <main class="product-main">
              <h1 class="product-title">Água Tônica</h1>
              <h5 class="product-category">Bebidas</h5>
              <strong class="product-price">R$ 8.99</strong>
            </main>
          </li>
          <li class="product">
            <img src="./img/products/product_8.svg" alt="" title="" class="product-img" />
            <main class="product-main">
              <h1 class="product-title">Água de coco</h1>
              <h5 class="product-category">Bebidas</h5>
              <strong class="product-price">R$ 8.99</strong>
            </main>
          </li>
        </ul>
      </main>
`)


let frutas = document.querySelector(".products-section")

frutas.insertAdjacentHTML("afterbegin", `
    <h1>Frutas</h1>
      <main class="products-content fruits">
        <ul>
          <li class="product">
            <img src="./img/products/no-img.svg" alt="" title="" class="product-img" />
            <main class="product-main">
              <h1 class="product-title">Uva Crimson</h1>
              <h5 class="product-category">Frutas</h5>
              <strong class="product-price">R$ 8.99</strong>
            </main>
          </li>
          <li class="product">
            <img src="./img/products/product_2.svg" alt="" title="" class="product-img" />
            <main class="product-main">
              <h1 class="product-title">Banana</h1>
              <h5 class="product-category">Frutas</h5>
              <strong class="product-price">R$ 5.69</strong>
            </main>
          </li>
          <li class="product">
            <img src="./img/products/product_3.svg" alt="" title="" class="product-img" />
            <main class="product-main">
              <h1 class="product-title">Mamão</h1>
              <h5 class="product-category">Frutas</h5>
              <strong class="product-price">R$ 4.99</strong>
            </main>
          </li>
          <li class="product">
            <img src="./img/products/product_4.svg" alt="" title="" class="product-img" />
            <main class="product-main">
              <h1 class="product-title">Maçã</h1>
              <h5 class="product-category">Frutas</h5>
              <strong class="product-price">R$ 9.2</strong>
            </main>
          </li>
        </ul>
      </main>
`)
