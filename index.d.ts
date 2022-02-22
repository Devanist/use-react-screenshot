interface UseScreenshotOptions {
  type: string;
  quality: any;
}

export type Options = import('html2canvas').Options;

type TakeScreenShot = (node: HTMLElement, options?: Partial<Options>) => string;

type UseScreenshot = ({ type, quality }: Partial<UseScreenshotOptions> | undefined) => [string, TakeScreenShot, { error: Error }]

type CreateFileName = (extension: string, parts: string[]) => string;

declare const useScreenshot: UseScreenshot;
declare const createFileName: CreateFileName;

export default { createFileName, useScreenshot };
