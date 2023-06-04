// 정의: 나중에 실행하는 함수
// 용도: 순차적으로 실행하고 싶을 때 사용
console.log('start')
setTimeout(function(){
    console.log(2+2)
}, 1000)
console.log('end')