function router(view){
    hide_all_views();
    switch(view){
        case 'aboutMe':
            section_aboutme.classList.remove("d-none");
            break;
        case 'portfolio':
            section_portfolio.classList.remove("d-none");
            break;
        case 'contact':
            section_contact.classList.remove("d-none");
            break;
        default:
            break;          
    }
}

function hide_all_views(){
    section_aboutme.classList.add("d-none");
    section_portfolio.classList.add("d-none");
    section_contact.classList.add("d-none");
}