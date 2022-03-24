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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const products_entity_1 = require("./products.entity");
let ProductsService = class ProductsService {
    constructor(productRepository) {
        this.productRepository = productRepository;
    }
    async getAll() {
        return await this.productRepository.find({});
    }
    async getProductById(id) {
        try {
            const product = await this.productRepository.findOne(id);
            if (product) {
                return {
                    isSuccess: true,
                    data: product,
                };
            }
        }
        catch (e) {
            console.log(e);
        }
        return {
            isSuccess: false,
            data: null,
        };
    }
    async createProduct(productInfo) {
        try {
            let product = new products_entity_1.ProductsEntity();
            product = this.productRepository.create(productInfo);
            const response = await this.productRepository.save(product);
            return {
                isSuccess: true,
                data: response,
            };
        }
        catch (e) {
            console.log(e);
        }
        return {
            isSuccess: false,
            data: null,
        };
    }
    async removeProduct(id) {
        const product = await this.productRepository.findOne(id);
        if (product) {
            try {
                await this.productRepository.delete(id);
                return {
                    isSuccess: true,
                    data: null,
                };
            }
            catch (e) {
                console.log(e);
            }
        }
        return {
            isSuccess: false,
            data: null,
        };
    }
};
ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(products_entity_1.ProductsEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ProductsService);
exports.ProductsService = ProductsService;
//# sourceMappingURL=products.service.js.map