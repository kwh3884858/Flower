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
 * Custom button calss, you can set a button with a custom background。The default style is a black font, as well as white translucent background.
 * CustomBtn 自定义按钮类，可以设置带矢量背景的按钮。默认样式为黑色字体，白色半透明背景。
 */
var CustomBtn = (function (_super) {
    __extends(CustomBtn, _super);
    function CustomBtn(text, containerX, ContainerY, textX, textY, fontColor, bgColor, bgAlpha, fontSize, btnWidth, btnHeight) {
        var _this = _super.call(this) || this;
        _this.fontColor = 0x000000;
        _this.bgcolor = 0xff0000;
        _this.bgAlpha = 0.5;
        _this.fontSize = 30;
        _this.btnHeight = 100;
        _this.btnWidth = 60;
        _this.bgcolor = bgColor;
        //Initialize the element 初始化元素
        _this.btnlabel = new eui.Label(text);
        _this.btnBg = new egret.Shape();
        //location setting 位置设置
        _this.x = containerX;
        _this.y = ContainerY;
        _this.btnlabel.x = textX;
        _this.btnlabel.y = textY;
        //Attribute assignment 属性赋值
        _this.fontColor = fontColor;
        _this.bgAlpha = bgAlpha;
        _this.fontSize = fontSize;
        _this.btnWidth = btnWidth;
        _this.btnHeight = btnHeight;
        _this.once(egret.Event.ADDED_TO_STAGE, _this.addToStage, _this);
        return _this;
    }
    CustomBtn.prototype.addToStage = function () {
        console.log(this.fontColor, this.bgcolor, this.bgAlpha);
        this.btnlabel.textColor = this.fontColor;
        this.btnlabel.size = this.fontSize;
        var shp = new egret.Shape();
        shp.graphics.beginFill(this.bgcolor, this.bgAlpha);
        shp.graphics.drawRect(0, 0, this.btnWidth, this.btnHeight);
        shp.graphics.endFill();
        this.addChild(shp);
        this.addChild(this.btnlabel);
    };
    return CustomBtn;
}(egret.DisplayObjectContainer));
__reflect(CustomBtn.prototype, "CustomBtn");
//# sourceMappingURL=CustomBtn.js.map