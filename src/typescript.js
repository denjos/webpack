import {HelloWorld} from "./components/App.ts";
import logo from "./img/ts.png";
import data from "./data.json";
import "./scss/main.scss";

//import {suma} from './suma';
let d = document;
let img=d.createElement('img');
img.src=logo;
img.classList.add('logo');
let list = d.createElement('div');
let brand = d.createElement('div');
brand.textContent=new HelloWorld('Typescript').greet();
list.classList.add('menu');
let item;
data.links.forEach((el) => {
    item=d.createElement('a');
    item.classList.add('item');
    item.textContent=el[0];
    item.href=el[1];
    list.appendChild(item);
});

d.getElementById('app').appendChild(img);
d.getElementById('app').appendChild(brand);
d.getElementById('app').appendChild(list);
