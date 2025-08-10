import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProducts } from "../data/products.js";
import { loadCart } from "../data/cart.js";
// import "../data/backend-practice.js";
// import "../data/cart-class.js";

Promise.all([
  new Promise((resolve) => {
    loadProducts(() => {
      resolve("new value");
    });
  }),
  new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });
  }),
]).then((values) => {
  console.log(values);
  renderOrderSummary();
  renderPaymentSummary();
});

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
