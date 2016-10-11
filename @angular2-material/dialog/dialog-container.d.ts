import { ComponentRef } from '@angular/core';
import { BasePortalHost, ComponentPortal, PortalHostDirective, TemplatePortal } from '@angular2-material/core';
import { MdDialogConfig } from './dialog-config';
/**
 * Internal component that wraps user-provided dialog content.
 */
export declare class MdDialogContainer extends BasePortalHost {
    /** The portal host inside of this container into which the dialog content will be loaded. */
    _portalHost: PortalHostDirective;
    /** The dialog configuration. */
    dialogConfig: MdDialogConfig;
    /** Attach a portal as content to this dialog container. */
    attachComponentPortal<T>(portal: ComponentPortal<T>): ComponentRef<T>;
    attachTemplatePortal(portal: TemplatePortal): Map<string, any>;
}
