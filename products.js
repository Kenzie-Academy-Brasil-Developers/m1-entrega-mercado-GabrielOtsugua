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


function addProductsFruits(list) {
  let ul = document.querySelector(".fruits")

  for (let i = 0; i < list.length; i++) {
    if (list[i].category == "Frutas") {

      let li = document.createElement("li")
      let img = document.createElement("img")
      let main = document.createElement("main")
      let h1 = document.createElement("h1")
      let h5 = document.createElement("h5")
      let strong = document.createElement("strong")

      li.classList.add("product")
      img.classList.add("product-img")
      main.classList.add("product-main")
      h1.classList.add("product-title")
      h5.classList.add("product-category")
      strong.classList.add("product-price")
      
      img.src = list[i].image
      if (list[i].image == undefined) {
        img.src = "./img/products/no-img.svg"
      }
      else {
        img.src = list[i].image
      }
      h1.innerText = list[i].title
      h5.innerText = list[i].category
      strong.innerText = list[i].price

      ul.appendChild(li)
      li.append(img, main)
      main.append(h1, h5, strong)
    }
  }
}
addProductsFruits(products)


function addProductsDrinks(list) {
  let ul = document.querySelector(".drinks")

  for (let i = 0; i < list.length; i++) {
    if (list[i].category == "Bebidas") {

      let li = document.createElement("li")
      let img = document.createElement("img")
      let main = document.createElement("main")
      let h1 = document.createElement("h1")
      let h5 = document.createElement("h5")
      let strong = document.createElement("strong")

      li.classList.add("product")
      img.classList.add("product-img")
      main.classList.add("product-main")
      h1.classList.add("product-title")
      h5.classList.add("product-category")
      strong.classList.add("product-price")
      
      img.src = list[i].image
      if (list[i].image == undefined) {
        img.src = "./img/products/no-img.svg"
      }
      else {
        img.src = list[i].image
      }
      h1.innerText = list[i].title
      h5.innerText = list[i].category
      strong.innerText = list[i].price

      ul.appendChild(li)
      li.append(img, main)
      main.append(h1, h5, strong)
    }
  }
}
addProductsDrinks(products)


function addProductsHygiene(list) {
  let ul = document.querySelector(".hygiene")

  for (let i = 0; i < list.length; i++) {
    if (list[i].category == "Higiene") {

      let li = document.createElement("li")
      let img = document.createElement("img")
      let main = document.createElement("main")
      let h1 = document.createElement("h1")
      let h5 = document.createElement("h5")
      let strong = document.createElement("strong")

      li.classList.add("product")
      img.classList.add("product-img")
      main.classList.add("product-main")
      h1.classList.add("product-title")
      h5.classList.add("product-category")
      strong.classList.add("product-price")
      
      img.src = list[i].image
      if (list[i].image == undefined) {
        img.src = "./img/products/no-img.svg"
      }
      else {
        img.src = list[i].image
      }
      h1.innerText = list[i].title
      h5.innerText = list[i].category
      strong.innerText = list[i].price

      ul.appendChild(li)
      li.append(img, main)
      main.append(h1, h5, strong)
    }
  }
}
addProductsHygiene(products)
