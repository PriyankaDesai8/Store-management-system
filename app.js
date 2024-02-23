angular.module('storeManagementApp', [])
    .controller('StoreController', function () {
        var vm = this;
        vm.products = [];
        vm.newProduct = {};
        vm.billDetails = {};
        vm.billDetails.purchaserName = "";
        vm.billDetails.phoneNumber = "";

        vm.addProduct = function () {
            if (vm.newProduct.name && vm.newProduct.price && vm.newProduct.quantity && vm.newProduct.unit) {
                var total = vm.newProduct.price * vm.newProduct.quantity;
                vm.products.push({
                    name: vm.newProduct.name,
                    price: vm.newProduct.price,
                    quantity: vm.newProduct.quantity,
                    unit: vm.newProduct.unit,
                    total: total
                });
                vm.newProduct = {};
            }
        };

        vm.generateBill = function () {
            if (vm.products.length > 0 && vm.billDetails.purchaserName && vm.billDetails.phoneNumber) {
                vm.bill = angular.copy(vm.products);
                var currentDate = new Date();
                vm.billDetails.date = currentDate.toLocaleDateString();
                vm.billDetails.time = currentDate.toLocaleTimeString();
                vm.total = 0;
                angular.forEach(vm.products, function (product) {
                    vm.total += product.total;
                });
            } else {
                alert("Please fill all the fields and add products to generate the bill.");
            }
        };
    });
