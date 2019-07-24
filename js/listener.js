console.log("listener is loaded...");


//nav bar
view_home.addEventListener("click", function(){
   console.log("User clicked on home button"); 
});

view_aboutme.addEventListener("click", function(){
    console.log ("User clicked on aboutme button");
    router("aboutMe");
});

view_portfolio.addEventListener("click", function(){
    console.log ("User clicked on portfolio button");
    router("portfolio");
});

view_contact.addEventListener("click", function(){
    console.log ("User clicked on contact button");
    router("contact");
});

btn_form.addEventListener('click',function(){
    form_submit(); 
});
