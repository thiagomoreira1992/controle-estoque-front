

export function openNav() {
    document.getElementById("sidebar").style.width = "250px";
    document.getElementById("menuSide").style.opacity = "0";
    document.body.style.backgroundColor = 'rgba(0,0,0,0.4)';
}

export function closeNav() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("menuSide").style.opacity = "1";
    document.body.style.backgroundColor = 'white';
}

