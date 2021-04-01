let navigate = (page) => {
    let pageName = page.indexOf('.html') === -1 ? page + ".html" : page;
    $("#content").load(pageName);
}