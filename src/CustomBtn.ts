// TypeScript file

/**
 * Custom button calss, you can set a button with a custom background。The default style is a black font, as well as white translucent background.
 * CustomBtn 自定义按钮类，可以设置带矢量背景的按钮。默认样式为黑色字体，白色半透明背景。
 */
class CustomBtn extends egret.DisplayObjectContainer {
    constructor(text: string, containerX: number, ContainerY: number, textX: number, textY: number, fontColor?: number, bgColor?: number, bgAlpha?:number , fontSize?: number, btnWidth?: number, btnHeight?: number) {
        super();
        this.bgcolor = bgColor;
        //Initialize the element 初始化元素
        this.btnlabel = new eui.Label(text);
        this.btnBg = new egret.Shape();
        //location setting 位置设置
        this.x = containerX;
        this.y = ContainerY;
        this.btnlabel.x = textX;
        this.btnlabel.y = textY;
        //Attribute assignment 属性赋值
        this.fontColor = fontColor;
        this.bgAlpha = bgAlpha;
        this.fontSize = fontSize;
        this.btnWidth = btnWidth;
        this.btnHeight = btnHeight;
        this.once(egret.Event.ADDED_TO_STAGE, this.addToStage, this);
    }

    private btnBg: egret.Shape;
    private btnlabel: eui.Label;
    
    private fontColor:number = 0x000000;
    private bgcolor: number = 0xff0000;
    private bgAlpha :number = 0.5;
    private fontSize :number = 30;
    private btnHeight: number = 100;
    private btnWidth: number = 60;
    
    private addToStage() {
        console.log(this.fontColor,this.bgcolor,this.bgAlpha);
        this.btnlabel.x = this.btnWidth / 2;
        this.btnlabel.y = this.btnHeight / 2;
        this.btnlabel.textColor = this.fontColor;
        this.btnlabel.size = this.fontSize;

        var shp: egret.Shape = new egret.Shape();
        shp.graphics.beginFill(this.bgcolor, 1);
        shp.graphics.drawRect(0, 0, this.btnWidth, this.btnHeight);
        shp.graphics.endFill();
        this.addChild(shp);

        this.addChild(this.btnlabel);
    }
}