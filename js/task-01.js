const categoriesItems = document.querySelectorAll("li.item");
console.log(`Number of categories: ${categoriesItems.length}\n`);

for (let item of categoriesItems) {
    const categoriesItem = item.querySelector("h2");
    console.log(`Category: ${categoriesItem.textContent}`);

    const subItems = item.querySelectorAll("li");
    console.log(`Elements: ${subItems.length}`);
}
