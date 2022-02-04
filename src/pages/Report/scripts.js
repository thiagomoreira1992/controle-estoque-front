export let nav = 0;

export function openNav() {
    console.log(nav);
    nav = 1; 
    document.getElementById('sidebar').style.width = '250px';
    document.getElementById('main').style.marginLeft = '0px';
    document.getElementById('menuSide').style.opacity = '0';
    document.body.style.backgroundColor = 'rgba(0,0,0,0.4)';
    document.getElementById('main').style.pointerEvents = 'none';
    document.getElementById('main').style.userSelect = 'none';
}

export function closeNav() {
    console.log(nav);
    document.getElementById('sidebar').style.width = '0';
    document.getElementById('main').style.marginLeft = '0';
    document.getElementById('menuSide').style.opacity = '1';    
    document.getElementById('main').style.pointerEvents = 'auto';
    document.getElementById('main').style.userSelect = 'auto';  
    document.body.style.backgroundColor = 'white';
    nav = 0;
}

export function closeNavClick() {
    console.log(nav);
	if(nav===1){
		closeNav();
	}
}