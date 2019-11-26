document.querySelector('.remove-todo').addEventListener('click', function(){
    const indexBox = document.querySelector('.index-input');
    const todoList = document.querySelector('.todo-list'); 
    const listArr = [];
    document.querySelectorAll('li').forEach(item => {
        listArr.push(item.innerText);
        todoList.removeChild(item);
    });
    listArr.splice(Number(indexBox.value), 1);
    for (const item of listArr){
        document.querySelector('.todo-list').appendChild(document.createElement('li')).innerText = item;
    }
    indexBox.value = '';
})