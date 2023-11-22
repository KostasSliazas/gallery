/*jshint esversion: 11 */

//document select
const d = document;
//document element select
const de = d.documentElement;

//Function appendChild helper
const append = (e, ...arrg) => arrg.forEach((item) => e.appendChild(item));

//Function setAttribute helper
const atribute = (e, ...arrg) => arrg.forEach((val, i) => i % 2 === 0 && e.setAttribute(val, arrg[i + 1]));

//Function createElement helper
const element = (e) => d.createElement(e);

export { element, atribute, append, d, de };
