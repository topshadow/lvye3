import { ApplicationRef, ComponentFactoryResolver } from '@angular/core';
export declare class BsAppModule {
    private appRef;
    resolver: ComponentFactoryResolver;
    constructor(appRef: ApplicationRef, resolver: ComponentFactoryResolver);
    ngDoBootstrap(): void;
}
