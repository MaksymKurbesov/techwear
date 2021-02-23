import React from "react";
import NavMenu from "../NavMenu/NavMenu";
import MinimizeNavMenu from "../MinimizeNavMenu/MinimizeNavMenu";
import CartIcon from "../../assets/images/cart.svg";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router";

import styles from "./Header.module.css";

const Header = ({ cartItemsCount, match }) => {
  const isMobile = document.documentElement.clientWidth < 500;

  return (
    <header className={match.isExact ? styles.headerMain : ""}>
      <span className={styles.logotype}>
        <NavLink to="/">TECHWEAR</NavLink>
      </span>
      <MinimizeNavMenu />
      <span className={styles.headerCart}>
        <NavLink to="/cart">
          {isMobile ? `[${cartItemsCount}]` : `Корзина [${cartItemsCount}]`}
          {isMobile ? <img src={CartIcon} alt="Иконка корзины" /> : ""}
        </NavLink>
      </span>
      <NavMenu />
    </header>
  );
};

export default withRouter(Header);

// function spoonerize(words) {
//   let twoWordsArray = words.split(" ");
//   let temp = twoWordsArray[0].split("");
//   let temp2 = twoWordsArray[1].split("");
//   [temp[0], temp2[0]] = [temp2[0], temp[0]];

//   return `${temp.join("")} ${temp2.join("")}`;
// }

// console.log(spoonerize("nit picking"));

// function switcheroo(x) {
//   let switchedArray = x.split("").map((char) => {
//     if (char.includes("a")) {
//       return "b";
//     }
//     if (char.includes("b")) {
//       return "a";
//     }

//     return "c";
//   });

//   return switchedArray.join("");
// }

// console.log(switcheroo("aaabcccbaaa"));

// // a - 97, b - 98, c - 99;

// function divCon(x) {
//   let totalString = 0;
//   let totalNumber = 0;
//   x.reduce((accum, current) => {
//     if (typeof current === "string") {
//       totalString += Number(current);
//     }
//     if (typeof current === "number") {
//       totalNumber += current;
//     }
//   }, 0);

//   return totalNumber - totalString;
// }

// console.log(divCon(["5", "0", 9, 3, 2, 1, "9", 6, 7]));

// function crap(x, bags, cap) {
//   let crabCount = 0;
//   let fulledBags = 0;
//   let dogged = false;

//   x.forEach((garden) => {
//     garden.forEach((item) => {
//       if (item == "D") {
//         dogged = true;
//       }
//       if (item === "@" && crabCount < cap) {
//         crabCount++;
//       }
//       if (crabCount === cap) {
//         fulledBags++;
//         crabCount = 0;
//       }
//     });
//   });

//   if (dogged) {
//     return 'Dog!!'
//   }
//   if (bags > fulledBags) {
//     return "Clean";
//   }
//   if (fulledBags <= bags) {
//     return "Cr@p";
//   }
// }

// console.log(crap([['_','_'], ['_','@'], ['D','_']], 2, 2))

// function last(x){
//   return x.split(' ').sort((a, b) => {
//     let aL = a[a.length - 1];
//     let bL = b[b.length - 1];
//     if (aL < bL) return -1;
//     if (aL > bL) return 1;
//     return 0;
//   });
// }

// console.log(last('man i need a taxi up to ubud'));

// function vowel2index(str) {
//    //code me
//    let strArr = str.split('')
//    for (let i = 0; i < strArr.length; i++) {
//      if (strArr[i] === 'a' || strArr[i] === 'e' || strArr[i] === 'i' || strArr[i] === 'o' || strArr[i] === 'u') {
//        strArr[i] = i + 1;
//      }
//    }
//    return strArr.join('');
// }

// console.log(vowel2index('Tomorrow is going to be raining'))
