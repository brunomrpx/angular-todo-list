(function() {
    'use strict';
    angular
        .module('application')
        .controller('TasksController', TasksController);

    function TasksController() {
        var vm = this;

        vm.taskList = [];

        vm.add = function(newTask) {
            vm.taskList.push({ name: newTask });
        };

        vm.removeList = function(tasks) {
            for (var index in tasks) {
                if (tasks.hasOwnProperty(index)) {
                    remove(tasks[index], vm.taskList);
                }
            }
        };

        vm.remove = function(task) {
            remove(task, vm.taskList);
        };

        vm.removeSelectedTasks = function() {
            var itemsToRemove = [];
            for (var index in vm.taskList) {
                if (vm.taskList.hasOwnProperty(index)) {
                    if (vm.taskList[index].closed) {
                        itemsToRemove.push(vm.taskList[index]);
                    }
                }
            }

            vm.removeList(itemsToRemove);
        };

        function remove(item, list) {
            list.splice(list.indexOf(item), 1);
        }
    }
})();
