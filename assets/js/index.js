document.onreadystatechange = () => {
    if(document.readyState === `complete`) {
        console.log($("button[name=activityA]"));
    }
}