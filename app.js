(function () {
    'use strict'

    function addTask(task) {
        var table = document.querySelector('table')
        var row   = table.insertRow()

        for (var prop in task) {
            var val = task[prop]
            var child = document.createTextNode(val)

            row.insertCell().appendChild(child)
        }
    }

    function prependTask(task) {
        var table = document.querySelector('table')
        var row   = table.insertRow(0)

        for (var prop in task) {
            var val = task[prop]
            var child = document.createTextNode(val)

            row.insertCell().appendChild(child)
        }
    }

    var json = document.getElementById('data').textContent
    var data = JSON.parse(json)

    data.forEach(function (task) {
        addTask(task)
    });

    document.querySelector('form').addEventListener('click', function () {
        var task = {
            name:     this[0].value,
            date:     this[1].value,
            assigned: this[2].value
        }

        console.log(task)

        prependTask(task)
    })
})()
