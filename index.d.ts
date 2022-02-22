interface UseScreenshotOptions {
  type: string;
  quality: any;
}

export type Options = import('html2canvas').Options;

type TakeScreenShot = (node: HTMLElement, options?: Partial<Options>) => string;

export function useScreenshot ({ type, quality }: Partial<UseScreenshotOptions> | undefined): [string, TakeScreenShot, { error: Error }]
export function createFileName (extension: string, parts: string[]): string;
