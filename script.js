let index = 0

function changeColors() {
    const colors = ["green", "red", "yellow", "blue", "purple", "orange"]

    document.getElementsByTagName("body")[0].
    style.background = colors[index++];

    if (index > colors.length -1) 
        index = 0;
}