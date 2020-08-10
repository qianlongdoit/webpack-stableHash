/**
 * Created by admin on 2018/3/13.
 */
import add from "@my-sum";
import _log from "../utils";


import '../css/index.css'
import '../css/another.css'



function component() {
    let num = add(1, 3);
    _log(1, 3);
    var element = document.createElement('div');
    element.innerHTML = `${num} hello this is index.js`;


    return element;
}

document.body.appendChild(component());