'use strict';

document.querySelector('.ads').remove();
const content = document.querySelectorAll('.content');
const item = document.querySelectorAll('.item');
const propsList = document.querySelectorAll('.props__list');
const propsItem = document.querySelectorAll('.props__item');
const title = document.querySelectorAll('h2');
const image = document.querySelectorAll('.item__image');
image[5].after(title[2]);
image[4].after(title[5]);
image[2].after(title[4]);
const newTitle = document.createElement('h2');
newTitle.className = 'item__title';
newTitle.innerHTML = 'This и прототипы объектов';
title[3].remove();
image[3].after(newTitle);
content[2].append(propsItem[43]);
content[2].append(propsItem[44]);
propsItem[2].after(propsItem[14]);
content[3].append(propsList[4]);
content[4].append(propsList[3]);
item[3].after(item[0]);
