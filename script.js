$(".drops").click(function(){
    console.log($(this).find('img'));
    $(this).find('img').toggle();
})
if (window.innerWidth < 768){
    $(".nav-item").removeClass("ps-3");
}
$('#nav-btn').on('click', function(){
    $('.navbar-collapse').toggleClass('show');
    $(this).find('span').toggle();
    $("body").toggleClass('body-on');
    console.log($(this));
})

function hello(){
    let nav = document.querySelector(".navbar")
    nav.style.boxShadow = '0 3px 10px 0 rgba(115,143,147,0.3)'
}


for(let i=1; i<101; i++){
    if (i%15 == 0){
        console.log("FizzBuzz");
    }else if(i%3 == 0){
        console.log("Fizz");
    }else if(i%5 ==0){
        console.log("Buzz");
    }else{
        console.log(i);
    };
};