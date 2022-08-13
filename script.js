
window.addEventListener("keydown", (e)=>{
    console.log(e);
    document.querySelector(".events").innerHTML = `
    
    
    <div class="keys">
      ${(e.key === ' ') ? 'Space' : e.key }
      <small>event.key</small>
    </div>
    <div class="keys">
      ${e.keyCode}
      <small>event.keyCode</small>
    </div>
    <div class="keys">
       ${e.code}
      <small> event.code</small>
    </div>
    `
})