setTimeout(function () {
        var t0 = document.getElementById("t0");
        if (t0) {
            t0.innerHTML = "<span><a href='javascript:show(65535);'>所有方法</a></span>";
        }
    }
    ,
    2000
);


function show(type) {
    count = 0;
    for (var key in methods) {
        var row = document.getElementById(key);
        if ((methods[key] & type) != 0) {
            row.style.display = '';
            row.className = (count++ % 2) ? rowColor : altColor;
        }
        else
            row.style.display = 'none';
    }
    updateTabs(type);
}

function updateTabs(type) {
    for (var value in tabs) {
        var sNode = document.getElementById(tabs[value][0]);
        var spanNode = sNode.firstChild;
        if (value == type) {
            sNode.className = activeTableTab;

        }
        else {
            sNode.className = tableTab;

        }
    }
}
