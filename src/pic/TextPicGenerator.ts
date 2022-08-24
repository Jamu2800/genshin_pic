import TextToSVG, {GenerationOptions} from "text-to-svg";
import sharp from "sharp";

export class TextPicGenerator{
    private readonly textToSVG: TextToSVG = TextToSVG.loadSync("./out/font/ja-jp.ttf");

    async create(text: string, generationOptions: GenerationOptions): Promise<Buffer> {
        const svg = this.textToSVG.getSVG(text, generationOptions);

        return sharp(Buffer.from(svg))
            .toBuffer()
    }
}