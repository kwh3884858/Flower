// TypeScript file

/**
 * Opening
 */
class Opening extends eui.Component {
    constructor() {
        super();
        this.skinName = "title";

        this.once(egret.Event.ADDED_TO_STAGE, this.addToStage, this);

    }

    private addToStage() {
        var customBtn = new CustomBtn("kaish", 100, 80, 30, 20, 0x0c0c0c, 0xff0000, 20, 100, 100);
        this.addChild(customBtn);

        //show the opening of game 显示游戏开场背景


    }
}