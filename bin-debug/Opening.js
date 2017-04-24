// TypeScript file
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Opening
 */
var Opening = (function (_super) {
    __extends(Opening, _super);
    function Opening() {
        var _this = _super.call(this) || this;
        _this.skinName = "title";
        return _this;
    }
    Opening.prototype.addToStage = function () {
        var customBtn = new CustomBtn("启始", 170, 680, 105, 50, 0x0c0c0c, 0xffffff, 0.5, 50, 300, 150);
        customBtn.touchEnabled = true;
        this.addChild(customBtn);
        //show the opening of game 显示游戏开场背景
    };
    Opening.prototype.touchBegin = function (evt) {
        console.log("hah!It`s working!");
    };
    return Opening;
}(eui.Component));
__reflect(Opening.prototype, "Opening");
//# sourceMappingURL=Opening.js.map