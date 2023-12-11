
var tabLinks = document.getElementsByClassName("tab-links");
var tabContents = document.getElementsByClassName("tab-contents");

function openTab(tabName){
    for (tablink of tabLinks) {
        tablink.classList.remove("active-link");
        
    }
    for (tabContent of tabContents) {
        tabContent.classList.remove("active-tab");
        
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabName).classList.add("active-tab");
}