const animeList = [
 
];

const ul = document.querySelector(".list-container");
const input = document.querySelector("#input");
const add = document.querySelector("#addElement");

console.log(add);

function renderList() {
  for (let i = 0; i < animeList.length; i++) {
    let list = document.createElement("li");
    list.innerText = animeList[i].person;
    ul.append(list);
    list.classList.add("list");
  }
}
//renderList();

function updateList() {
  if (input.value === "") return;
  animeList.push({ quote: "", person: input.value, isRead: false });
  const index = animeList.length - 1;
  let list = document.createElement("li");
  const [checkList, deleteList] = [
    document.createElement("button"),
    document.createElement("button"),
  ];

  checkList.textContent = "check";
  deleteList.innerText = "delete";
  checkList.classList.add('check');
  deleteList.classList.add('deleteElement');
  checkList.addEventListener("click", () => {
    if (animeList[index].isRead == false) {
      checkList.previousElementSibling.style.textDecoration = "line-through";
      animeList[index].isRead = true;
    } else {
      checkList.previousElementSibling.style.textDecoration = "none";
      animeList[index].isRead = false;
    }
  });

  deleteList.addEventListener('click',(e)=>{
    let target = e.target;
    target.parentElement.remove();
    animeList.splice(index,1);
    console.log(animeList);
  })

  list.innerHTML = `<span>${input.value}<span>`;
  list.append(checkList);
  list.append(deleteList);
  ul.append(list);
  list.classList.add("list");
  input.value = "";
}

add.addEventListener("click", updateList);
