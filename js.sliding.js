var dlass = document.getElementsByClassName("slideIMG");

var indexslide = 0;

function slide() 
{
    for (var I = 0; I < dlass.length; I++) 
    {
        dlass[I].style.display = "none";
    }
    indexslide++;
    if (indexslide > dlass.length) 
    {
        indexslide = 1;
    }
    dlass[indexslide - 1].style.display = "block";
    setTimeout(slide, 3000);
}
