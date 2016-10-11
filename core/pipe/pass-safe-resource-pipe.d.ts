import { PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
export declare class PassSafeResouceUrlPipe implements PipeTransform {
    security: DomSanitizer;
    constructor(security: DomSanitizer);
    transform(value: string, exponent: string): any;
}
