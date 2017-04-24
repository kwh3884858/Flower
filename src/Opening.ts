// TypeScript file

/**
 * Opening
 */
class Opening extends eui.Component {
    constructor() {
        super();
        this.skinName = "title";
        
    }

    private addToStage() {
        var customBtn = new CustomBtn("启始", 170, 680, 105, 50, 0x0c0c0c, 0xffffff,0.5, 50, 300, 150);
        customBtn.touchEnabled = true;

        this.addChild(customBtn);

        //show the opening of game 显示游戏开场背景

    }

    private touchBegin(evt:egret.TouchEvent){
        console.log("hah!It`s working!");
    }
}