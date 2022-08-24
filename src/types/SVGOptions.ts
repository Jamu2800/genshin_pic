export type SVGOption = {
    width: number,
    height: number,
    viewBox: [number, number, number, number],
    subOptions?: SVGSubOptions
}

export type SVGSubOptions = {
    name: SVGType,
    option: RectOption
}

export type SVGType = "rect" | "circle" | "ellipse" | "line" | "polyline" | "polygon" | "path" | "image" | "text";

export type RectOption = {
    x: number,
    y: number,
    width: number,
    height: number,
    rx: number,
    ry: number,
    fill: string
    fillOpacity: number
}
