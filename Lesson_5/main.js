const documentObject = {
    header: "header",
    body: "body",
    footer: "footer",
    data: "data",
    add: {
        header: {
            menu: "menu",
            logo: "logo",
        },
        body: {
            article1: "article1",
            article2: "article2",
        },
        footer: {
            logo: "logo",
            address: "address",
            copyright: "copyright"
        },
        notObject: "notObject",
        data: {
            logo: "logo",
            address: "address",
        },
    },
    fill: function (testObject) {
        let i = 0;
        var newObject = [];
        if (typeof testObject === 'object') {
            for (let key in testObject) {
                if (typeof testObject[key] !== 'object' && typeof testObject[key] !== 'function') {
                    newObject.push(testObject[key]= ++i + " - Parent object props" + "<hr>");
                } else if (typeof testObject[key] === 'object') {
                    for (let element in testObject[key]) {
                        if (typeof testObject[key][element] === 'object') {
                            for (let item in testObject[key][element]) {
                                newObject.push(testObject[key][element][item]= ++i + " - Child object objects props" + "<hr>");  
                            }
                        }
                        else{
                            i++;
                            newObject.push("This is not an object" + "<hr>");
                            console.log(i);
                        }
                    }
                }
                else {
                    i++;
                    newObject.push("Here is a Parent function" + "<hr>");
                    console.log(i);
                }
            }
        }
        return newObject.join(" ");
    },
    show: function (data) {
        document.querySelector(".rez").innerHTML = data;
        console.log(data);
    },
}

documentObject.fill(documentObject);
documentObject.show(documentObject.fill(documentObject));