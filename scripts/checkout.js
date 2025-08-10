import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProducts, loadProductsFetch } from "../data/products.js";
import { loadCart } from "../data/cart.js";
// import "../data/backend-practice.js";
// import "../data/cart-class.js";

async function loadPage() {
  try {
    //throw "error1";
    await loadProductsFetch();

    await new Promise((resolve, reject) => {
      //throw "error2";
      loadCart(() => {
        //reject("error4");
        resolve();
      });
    });
  } catch (error) {
    console.error("Error loading products or cart:", error);
  }
  renderOrderSummary();
  renderPaymentSummary();
}

loadPage();

// Promise.all([
//   loadProductsFetch(),
//   new Promise((resolve) => {
//     loadCart(() => {
//       resolve();
//     });
//   }),
// ]).then((values) => {
//   renderOrderSummary();
//   renderPaymentSummary();
// });

// new Promise((resolve) => {
//   loadProducts(() => {
//     resolve("new value");
//   });
// })
//   .then((value) => {
//     console.log(value); // 'new value'
//     return new Promise((resolve) => {
//       loadCart(() => {
//         resolve();
//       });
//     });
//   })
//   .then(() => {
//     renderOrderSummary();
//     renderPaymentSummary();
//   });

// loadProducts(() => {
//   loadCart(() => {
//     renderOrderSummary();
//     renderPaymentSummary();
//   });
// });
