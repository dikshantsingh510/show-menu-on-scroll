let navbar = document.getElementById('navbar');
let menu = document.getElementById('menu');
let sidebar = document.getElementById('sidebar');
let footer = document.getElementById('footer')

menu.addEventListener('click', function() {
  navbar.classList.toggle('active')
  menu.classList.toggle('active');
  sidebar.classList.toggle('active')
});

document.addEventListener('scroll',()=>{
    if(scrollY > navbar.getBoundingClientRect().height){
      navbar.style.position = `fixed`
}else{
        navbar.style.position = `relative`

}

})
