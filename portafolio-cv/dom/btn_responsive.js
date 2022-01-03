const d = document;

export function responsiveMenu(btn,menu,menuLink) {
    const $menubtn = d.querySelector(btn),
          $menu = d.querySelector(menu);
   d.addEventListener("click", (e)=>{
       if(e.target.matches(btn) || e.target.matches(`${btn} *`)){
        $menubtn.firstElementChild.classList.toggle("none")
        $menubtn.lastElementChild.classList.toggle("none")
        $menu.classList.toggle("menu-is-active")
       }
       if(e.target.matches(menuLink)){
           $menu.classList.remove("menu-is-active")
           $menubtn.firstElementChild.classList.remove("none")
           $menubtn.lastElementChild.classList.add("none")
       }
   })
}