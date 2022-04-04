alert("loading")
window.onload = function()
{
    alert("loaded")
    document.getElementById("button3").addEventListener("click", respond3);
}

function respond3(e)
{
    alert("Way to go!!");
}