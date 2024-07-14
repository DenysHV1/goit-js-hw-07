const categoriesUl = document.querySelector('#categories');

console.dir(`Number of categories ${categoriesUl.children.length}`);

const arrayPrototypeInfo = categoriesUl.children;

const insideArray = [...arrayPrototypeInfo];
for (let item of insideArray) {
	console.dir(`Category:${item.firstElementChild.textContent}`);
	console.dir(`Elements: ${item.lastElementChild.children.length}`);
}
