document.querySelector('.add-todo').addEventListener('click', function(){
    const inputBox = document.querySelector('.todo-input');
    const listArr = [];
    if (inputBox.value !== '' && inputBox.value !== ' '){
    listArr.push(inputBox.value);
    for (const item of listArr){
        document.querySelector('.todo-list').appendChild(document.createElement('li')).innerText = item;
    }
    inputBox.value = '';
    }
});