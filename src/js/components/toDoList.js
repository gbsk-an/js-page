const form = document.querySelector('#itemForm');
const itemInput = document.querySelector('#itemInput');
const itemList = document.querySelector('.todo__item-list');
const clearButton = document.querySelector('#clear-list');

let todoItems = [];

const handleItem = function(itemName){

    const items = itemList.querySelectorAll('.item');

    items.forEach(function(item){

        if(item.querySelector('.item-name').textContent === itemName){
            item.querySelector('.complete-item').addEventListener('click', function(){
                item.querySelector('.item-name').classList.toggle('completed');
                this.classList.toggle('visibility');

            });
            item.querySelector('.edit-item').addEventListener('click', function(){
                itemInput.value = itemName;
                itemList.removeChild(item);

                todoItems = todoItems.filter(function(item){
                    return item !== itemName;
                });
            });

            item.querySelector('.delete-item').addEventListener('click', function(){
                debugger;
                itemList.removeChild(item);

                todoItems = todoItems.filter(function(item){
                    return item !== itemName;
                });

                showFeedback('item delete', 'success');
            })
        }
    })
}

const removeItem = function(item){
    console.log(item);
    const removeIndex = (todoItems.indexOf(item));
    console.log(removeIndex);
    todoItems.splice(removeIndex, 1);
}

const getList = function(todoItems){
    itemList.innerHTML = '';

        todoItems.forEach(function(item){
            itemList.insertAdjacentHTML('beforeend', `<div class="item"><h5 class="item-name">${item}</h5><div class="item-icons"><a href="#" class="complete-item item-icon"><img src="../img/svg/done.svg" class="" alt="complete"></a><a href="#" class="edit-item item-icon"><img src="../img/svg/edit.svg" class="" alt="edit"></a><a href="#" class="delete-item item-icon"><img src="../img/svg/delete.svg" class="" alt="delete"></a></div></div>` );

            handleItem(item);
        });
}

const getLocalStorage = function(){

    const todoStorage = localStorage.getItem('todoItems');
    if (todoStorage === 'undefined' || todoStorage === null){
        todoItems = [];
    } else {
        todoItems = JSON.parse(todoStorage);
        getList(todoItems);
    }
}

const setLocalStorage = function(todoItems){
    localStorage.setItem('todoItems', JSON.stringify(todoItems));
}

getLocalStorage();

form.addEventListener('submit', function(e){
    e.preventDefault();
    const itemName = itemInput.value;

    if (itemName.length === 0){
        feedback.innerHTML = 'Please Enter Valid Value';
        feedback.classList.add('showItem', 'alert-danger');
        setTimeout(
            function(){
                feedback.classList.remove('showItem');
                }, 3000);
    } else {
        todoItems.push(itemName);
        setLocalStorage(todoItems);
        getList(todoItems);
    }

    itemInput.value = '';

    });

clearButton.addEventListener('click', function(){
    todoItems = [];
    localStorage.clear();
    getList(todoItems);
})
