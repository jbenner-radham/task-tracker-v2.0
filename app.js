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
            var val   = task[prop]
            var child = document.createTextNode(val)

            row.insertCell().appendChild(child)
        }
    }

    var json = document.getElementById('data').textContent
    var data = JSON.parse(json)

    data.forEach(function (task) {
        addTask(task)
    })

    document.querySelector('button').addEventListener('click', function () {
        var task = {
            name:     this.form.elements[0].value,
            date:     this.form.elements[1].value,
            assigned: this.form.elements[2].value
        }

        prependTask(task)
    })
})()
