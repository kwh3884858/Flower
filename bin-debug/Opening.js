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
        _this.once(egret.Event.ADDED_TO_STAGE, _this.addToStage, _this);
        return _this;
    }
    Opening.prototype.addToStage = function () {
        var customBtn = new CustomBtn("kaish", 100, 80, 30, 20, 0x0c0c0c, 0xff0000, 20, 100, 100);
        this.addChild(customBtn);
        //show the opening of game 显示游戏开场背景
    };
    return Opening;
}(eui.Component));
__reflect(Opening.prototype, "Opening");
//# sourceMappingURL=Opening.js.map