//DOM元素
const send = document.querySelector('.send-text');
const list = document.querySelector('.list');
//取出localStorage的string轉乘object 前面若是空值回傳[]
const data = JSON.parse(localStorage.getItem('listData')) || [];


send.addEventListener('click',addData);
list.addEventListener('click', beDone);
upDateList(data)

function addData(e){
  e.preventDefault();
  //取出text內容
  const text = document.querySelector('.input-text').value;
  //放入物件中
  const todo ={
      key:text
  }
  //傳入到 localStorage
  data.push(todo)
  localStorage.setItem('listData', JSON.stringify(data))
  upDateList(data)

}
 

//更新列表內容 items = data
function upDateList(items){
    str = '';
    let lengh = items.length;
    for (let i = 0; lengh > i; i++) {
      str += `
      <li>
        <a href="#" data-index=${i} />刪除</a> 
        <span>${items[i].key}</span>
      </li>
      `
    }
    list.innerHTML = str; 
}


//刪除事件
function beDone(e){
e.preventDefault();
  if(e.target.nodeName !== "A"){return}
  //取出刪除項目的data
  const index = e.target.dataset.index
  //刪除選項第一筆
  data.splice(index,1);
  localStorage.setItem('listData', JSON.stringify(data))
  upDateList(data);
}