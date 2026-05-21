"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.BadRequestException = exports.ConflictException = exports.UnauthorizedException = exports.NotfoundException = void 0;
var NotfoundException = /** @class */ (function (_super) {
    __extends(NotfoundException, _super);
    function NotfoundException(message) {
        return _super.call(this, message, { cause: 404 }) || this;
    }
    return NotfoundException;
}(Error));
exports.NotfoundException = NotfoundException;
var UnauthorizedException = /** @class */ (function (_super) {
    __extends(UnauthorizedException, _super);
    function UnauthorizedException(message) {
        return _super.call(this, message, { cause: 401 }) || this;
    }
    return UnauthorizedException;
}(Error));
exports.UnauthorizedException = UnauthorizedException;
var ConflictException = /** @class */ (function (_super) {
    __extends(ConflictException, _super);
    function ConflictException(message) {
        return _super.call(this, message, { cause: 409 }) || this;
    }
    return ConflictException;
}(Error));
exports.ConflictException = ConflictException;
var BadRequestException = /** @class */ (function (_super) {
    __extends(BadRequestException, _super);
    function BadRequestException(message, details) {
        var _this = _super.call(this, message, { cause: 400 }) || this;
        _this.details = details;
        return _this;
    }
    return BadRequestException;
}(Error));
exports.BadRequestException = BadRequestException;
