"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var supplierComponent = /** @class */ (function () {
    function supplierComponent() {
        this.suppliers = [
            { firstName: 'customer1FirstName', lastName: 'customer1LastName', gender: 'Male', age: 18 },
            { firstName: 'customer2FirstName', lastName: 'customer2LastName', gender: 'Male', age: 18 },
            { firstName: 'customer3FirstName', lastName: 'customer3LastName', gender: 'FeMale', age: 18 },
            { firstName: 'customer4FirstName', lastName: 'customer4LastName', gender: 'FeMale', age: 18 },
            { firstName: 'customer5FirstName', lastName: 'customer5LastName', gender: 'FeMale', age: 18 },
            { firstName: 'customer6FirstName', lastName: 'customer6LastName', gender: 'FeMale', age: 18 }
        ];
    }
    supplierComponent = __decorate([
        core_1.Component({
            selector: 'supplier-ui',
            templateUrl: 'app/Supplier/supplier.html'
        }),
        __metadata("design:paramtypes", [])
    ], supplierComponent);
    return supplierComponent;
}());
exports.supplierComponent = supplierComponent;
//# sourceMappingURL=supplier.component.js.map