

function getCombinedMenus(ListsOfMenus){
    console.log(ListsOfMenus);
    let flatMenu = ListsOfMenus.flat()
    console.log(flatMenu);
    let combinedMenus = new Set();
    flatMenu.forEach(item =>{
        combinedMenus.add(item);
    })
    menusNode = document.querySelector("#combined_menu");
    for (let item of combinedMenus){
        let itemNode = document.createElement("li");
        itemNode.innerText = item;
        menusNode.appendChild(itemNode);
    }
}

getCombinedMenus([["Pitza", "HotDog", "Snack"],["Pitza", "Chicken"], ["Chicken", "HotDog", "Mash Potato"]])