//implementing extended interface
var RadioButton = /** @class */ (function () {
    function RadioButton(h, w, label) {
        this.h = h;
        this.w = w;
        this.label = label;
    }
    RadioButton.prototype.enableEvents = function (enable) {
        this.enable = enable;
    };
    return RadioButton;
}());
var radioButton = new RadioButton(100, 20, "test");
radioButton.enableEvents(true);
console.log(radioButton);
