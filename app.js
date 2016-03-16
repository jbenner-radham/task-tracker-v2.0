(function () {
    'use strict'

    function addTask(task) {
        var table = document.querySelector('table')
        var row   = table.insertRow()

        for (var property in task) {
            var val   = task[property]
            var child = document.createTextNode(val)

            row.insertCell().appendChild(child)
        }
    }

    function prependTask(task) {
        var table = document.querySelector('table')
        var row   = table.insertRow(0)

        for (var property in task) {
            var val   = task[property]
            var child = document.createTextNode(val)

            row.insertCell().appendChild(child)
        }
    }

    var json = document.getElementById('data').textContent
    var data = JSON.parse(json)

    data.forEach(addTask)

    document.querySelector('button').addEventListener('click', function () {
        var dateRegEx       = /[0-9]{1,2}\/[0-9]{1,2}\/[0-9]{4}/
        var chromeDateRegEx = /[0-9]{4}-[0-9]{1,2}-[0-9]{1,2}/
        var task            = {
            name:     this.form.elements[0].value,
            date:     this.form.elements[1].value,
            assigned: this.form.elements[2].value
        }

        // Validate the form input.
        if (!task.name || !task.date || !task.assigned) {
            alert('All form fields must be populated.')

            return false
        }

        if (task.date.match(dateRegEx) === null && task.date.match(chromeDateRegEx) === null) {
            alert('The "Date" must be in `mm/dd/yyyy` format.')

            return false
        }

        prependTask(task)

        // Clear the form values after creating the task.
        for (var i in [0, 1, 2]) {
            this.form.elements[i].value = ''
        }
    })
})()
