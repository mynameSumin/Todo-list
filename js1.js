let todo_button = document.getElementById('todo_button');
let todo_box = document.getElementById('todo_box');
let todo_space = document.getElementById('todo_space');
let lenght = document.getElementById('number');
count();

function add_todo(){
  if(todo_box.value!=""){ //입력 있을 때만 추가
    let list = document.createElement('input');
    list.type='text';
    list.className = "form-control";
    list.value = todo_box.value;

    let checkbox = document.createElement('input');
    checkbox.type='checkbox';
    checkbox.addEventListener('click', count);
    let checkbox_text = document.createElement('div');
    checkbox_text.className = 'input-group-text';
    checkbox_text.appendChild(checkbox);

    let xbutton = document.createElement('button');
    xbutton.className='btn-close';
    let xbutton_space = document.createElement('div');
    xbutton_space.className = 'input-group-text';
    xbutton_space.appendChild(xbutton);

    let space = document.createElement('div');
    space.className = "container-fluid p-2"
    space.classList.add("input-group");

    space.appendChild(checkbox_text);
    space.appendChild(list);
    space.appendChild(xbutton_space);

    todo_space.appendChild(space);
    todo_box.placeholder="할 일을 입력해주세요";
    todo_box.value="";

    xbutton_space.addEventListener('click',function(e){
      todo_space.removeChild(e.currentTarget.parentNode)
      count();
    })
  }
  //아무 입력 없을 땐 추가 안됨
    else{
    }
}

function count(){
  let itemCount = document.querySelectorAll('input[type="checkbox"]').length
  let checkedCount = document.querySelectorAll('input[type="checkbox"]:checked').length
  let uncheckedCount = itemCount - checkedCount
  lenght.innerHTML = uncheckedCount;
}


todo_button.addEventListener('click',add_todo)
todo_box.addEventListener('keydown',function(e){
  if(e.keyCode === 13){
    add_todo();
    count();
  }
})
todo_button.addEventListener('click',count)
