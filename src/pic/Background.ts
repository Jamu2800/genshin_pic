import {PartsCreator} from "./PartsCreator";

export class Background{
    private readonly svgOption: SVGOption;

    constructor(
        svgOption: SVGOption = {
            width: 100,
            height: 100,
            viewBox: [0, 0, 100, 100]
        }) {
        this.svgOption = svgOption;
    }

    public async create(): Promise<Buffer> {
        const baseSVG: string =
            `<svg width=\"${this.svgOption.width}\" height=\"${this.svgOption.height}\" viewBox=\"${this.svgOption.viewBox.at(0)}, ${this.svgOption.viewBox.at(1)}, ${this.svgOption.viewBox.at(2)}, ${this.svgOption.viewBox.at(3)}\" xmlns=\"http://www.w3.org/2000/svg\">` +
            `</svg>`
        return Buffer.from(baseSVG);
    }

}