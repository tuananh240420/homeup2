var clickProfile = true 
function clickShowSubmenu() {

    let profileElement = document.getElementById("profile-submenu")
    if(clickProfile) {
        clickProfile = false
        profileElement.style.display = "block"
    } else {
        clickProfile = true
        profileElement.style.display = "none"
    }
} 