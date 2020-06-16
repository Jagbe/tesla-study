let links = document.querySelectorAll('p.has-text-black ');
let linkArray = Array.from(links);
links.forEach(link => {
    link.addEventListener('mouseover', e => {
        e.target.classList.add("has-text-white");
        e.target.classList.remove('has-text-black');
    });

    link.addEventListener('mouseout', e => {
        e.target.classList.add("has-text-black");
        e.target.classList.remove('has-text-white');
    });
    console.log(link);
    console.log(link.classList);
});
