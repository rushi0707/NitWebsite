var links=document.getElementsByClassName("link");  
/* it is array and will contain all the links [skills,experience,academics]*/

var contents=document.getElementsByClassName("content");
/* it is array and will contain all the content [web development,app develepmen.....] */

function showContent(linkname)
{
    for(l of links)
    {
        l.classList.remove("currentLink");
    }

    for(c of contents)
    {
        c.classList.remove("currentContent");
    }
    document.getElementById(linkname).classList.add("currentContent");
}

