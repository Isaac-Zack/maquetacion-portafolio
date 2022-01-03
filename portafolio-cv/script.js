import { responsiveMenu } from "./dom/btn_responsive.js";
import maquinaEscribir from "./dom/writing_logo.js";
;

const d = document;

(()=>{
    const $form = document.querySelector(".contact-form"),
          $loader = document.querySelector(".contact-form-loader"),
          $response = document.querySelector(".contact-form-response");
  $form.addEventListener("submit",(e)=>{
   e.preventDefault();
   $loader.classList.remove("none");
   fetch("https://formsubmit.co/ajax/zack_garcia0@hotmail.com",{
      method: "POST",
      body: new FormData(e.target),
   })
   .then((res)=> (res.ok ? res.json() : Promise.reject(res)))
   .then((json) =>{
       location.hash = "#gracias";
       $form.reset();
   })
   .catch(err =>{
       let message = err.statusText || "ocurrio un error al enviar el mensaje, intenta nuevamente" 
       $response.querySelector("h3").innerHTML = `error ${err.status} ${message}`;
      }).finally(()=>{
      $loader.classList.add("none")
      setTimeout(() => {
        location.hash = "#close"
      }, 3000);
   });
  
  })    
  })();

  
d.addEventListener("DOMContentLoaded",()=>{
    responsiveMenu(".menu-btn",".menu",".menu a");
    maquinaEscribir("saac Garcia");
})

