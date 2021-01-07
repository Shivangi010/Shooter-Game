module objects 
{
    export class Label extends createjs.Text
    {
        /**
         * Creates an instance of Label.
         * @param {string} labelString
         * @param {string} fontSize
         * @param {string} fontFamily
         * @param {string} fontColour
         * @param {number} x
         * @param {number} y
         * @param {boolean} isCentered
         * @memberof Label
         */
        constructor(
            labelString:string = "unknown label", 
            fontSize:string = "20px", 
            fontFamily:string = "Consolas", 
            fontColour:string = "#000000", 
            x:number = 0, y:number = 0, isCentered:boolean = false)
        {
            super(labelString, fontSize + " " + fontFamily, fontColour);

            if(isCentered)
            {
                this.regX = this.getBounds().width * 0.5;
                this.regY = this.getMeasuredLineHeight() * 0.5;
            }

            this.x = x;
            this.y = y;
        }

        public setText(newText:string)
        {
            this.text = newText;
            this.regX = this.getBounds().width * 0.5;
            this.regY = this.getMeasuredHeight() * 0.5;
        }
    }
}