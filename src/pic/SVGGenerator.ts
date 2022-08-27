import {RectOption, SVGOption} from "../types/SVGOptions";

export const svgCreate = async (
    svgOption: SVGOption = {
        width: 100,
        height: 100,
        viewBox: [0, 0, 100, 100]
    }): Promise<Buffer> => {
    const baseSVG: string = `<svg ` +
        `width=\"${svgOption.width}\" ` +
        `height=\"${svgOption.height}\" ` +
        `viewBox=\"${svgOption.viewBox.at(0)}, ` +
            `${svgOption.viewBox.at(1)}, ` +
            `${svgOption.viewBox.at(2)}, ` +
            `${svgOption.viewBox.at(3)}\" ` +
        `xmlns=\"http://www.w3.org/2000/svg\"> `;
    const endSVG = "</svg>";

    let finalSVG: string;

    if(svgOption.subOptions != null) {
        switch (svgOption.subOptions.name) {
            case "rect":
                finalSVG = baseSVG + rectGenerator(svgOption.subOptions.option) + endSVG;
                break;
            default:
                finalSVG = baseSVG + endSVG;
        }
    } else {
        finalSVG = baseSVG + endSVG;
    }

    return Buffer.from(finalSVG);
}

export const rectGenerator = (rectOptions: RectOption): string => {
    return `<rect ` +
        `x=\"${rectOptions.x}\" ` +
        `y=\"${rectOptions.y}\" ` +
        `width=\"${rectOptions.width}\" ` +
        `height=\"${rectOptions.height}\" ` +
        `rx=\"${rectOptions.rx}\" ` +
        `ry=\"${rectOptions.rx}\" ` +
        `fill=\"${rectOptions.fill}\" ` +
        `fill-opacity=\"${rectOptions.fillOpacity}\"` +
        `/>`;
}