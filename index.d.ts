import { Options } from 'html2canvas';

type TakeScreenShot = (node: HTMLElement, options: Options) => string;

type UseScreenshot = ({ type, quality }) => [string, TakeScreenShot, { error: Error }]

type CreateFileName = (extension: string, parts: string[]) => string;

declare const useScreenshot: UseScreenshot;
declare const createFileName: CreateFileName;

export { createFileName, useScreenshot };
