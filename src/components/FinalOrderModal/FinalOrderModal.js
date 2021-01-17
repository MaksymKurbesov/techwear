import React from "react";
import styles from "./FinalOrderModal.module.css";

const FinalOrderModal = ({ isVisible, hideModal, orderData }) => {
  return (
    <div
      className={
        isVisible ? styles.finalOrderModalShow : styles.finalOrderModalHide
      }
    >
      <div className={styles.finalOrderModalWrapper}>
        <h2>
          Уважаемый, {orderData.lastName} {orderData.firstName} Ваш заказ
          принят!
        </h2>
        <p>
          Мы скоро с вами свяжемся по номеру телефона:{" "}
          <span>{orderData.phoneNumber}</span>
          <br />
          или email: <span>{orderData.email}</span>
        </p>
        <i onClick={() => hideModal()}>X</i>
        <span>Techwear Team</span>
      </div>
    </div>
  );
};

export default FinalOrderModal;

// function binarySearch(arr, item) {
//   let start = 0;
//   let end = arr.length;
//   let found = false;
//   let position = -1;
//   let middle;
//   while (found === false && start <= end) {
//     middle = Math.floor((start + end) / 2);
//     if (arr[middle] === item) {
//       found = true;
//       position = middle;
//     }
//     if (item < arr[middle]) {
//       end = middle - 1;
//     } else {
//       start = middle + 1;
//     }
//   }
//   return position;
// }

// console.log(binarySearch(test, 11))

// function selectionSort(array) {
//   for (let i = 0; i < array.length; i++) {
//     let minIndex = i;
//     for (let j = i + 1; j < array.length; j++) {
//       if (array[minIndex] > array[j]) {
//         minIndex = j;
//       }
//     }
//     [array[minIndex], array[i]] = [array[i], array[minIndex]]
//   }
//   return array;
// }

// console.log(selectionSort(test))

// const test = [1, 7, 2,4,5,6,8,-5,9,1]

// function bubbleSort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[j] > arr[j + 1]) {
//         [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]]
//       }
//     }
//   }
//   return arr;
// }

// console.log(bubbleSort(test))

// function factorial(n) {
//   if (n === 1) {
//     return 1;
//   }

//   return n * factorial(n - 1);
// }

// console.log(factorial(5));