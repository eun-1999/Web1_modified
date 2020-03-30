function nightDayHandler(self){
//   if(document.querySelector('#night_day').value === 'night'){
//     document.querySelector('body').style.backgroundColor = 'black';
//     document.querySelector('body').style.color = 'white';
//     document.querySelector('#night_day').value = 'day';
//   } else {
//     document.querySelector('body').style.backgroundColor = 'white';
//     document.querySelector('body').style.color = 'black';
//     document.querySelector('#night_day').value = 'night';
//   }
// "> 이코드를 아래처럼 리팩토링 가능
var target = document.querySelector('body');
if(self.value === 'night'){
  target.style.backgroundColor = 'black';
  target.style.color = 'white';
  self.value = 'day';

   var alist = document.querySelectorAll('a');
   var i = 0;
   while(i < alist.length){
     alist[i].style.color = 'powderblue';
     i = i + 1;
   }

   <!-- a태그부분은 모조리 파우더블루색으로 -->
} else {
  target.style.backgroundColor = 'white';
  target.style.color = 'black';
  self.value = 'night';
  var alist = document.querySelectorAll('a');
    var i = 0;
    while(i < alist.length){
      alist[i].style.color = 'blue';
      i = i + 1;
    }
}
}
