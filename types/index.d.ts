// Type definitions for react-custom-scrollbars 4.0
// Project: https://github.com/malte-wessel/react-custom-scrollbars
// Definitions by:  David-LeBlanc-git <https://github.com/David-LeBlanc-git>
//                  kittimiyo <https://github.com/kittimiyo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import {
  HTMLProps,
  UIEventHandler,
  StatelessComponent,
  Component,
} from 'react';

declare module 'eo-react-custom-scrollbars' {
  export interface positionValues {
    top: number;
    left: number;
    clientWidth: number;
    clientHeight: number;
    scrollWidth: number;
    scrollHeight: number;
    scrollLeft: number;
    scrollTop: number;
  }

  export interface ScrollbarProps extends HTMLProps<Scrollbars> {
    onScroll?: UIEventHandler<any>;
    onScrollFrame?: (values: positionValues) => void;
    onScrollStart?: () => void;
    onScrollStop?: () => void;
    onUpdate?: (values: positionValues) => void;

    renderView?: StatelessComponent<any>;
    renderTrackHorizontal?: StatelessComponent<any>;
    renderTrackVertical?: StatelessComponent<any>;
    renderThumbHorizontal?: StatelessComponent<any>;
    renderThumbVertical?: StatelessComponent<any>;

    scrollbarWidth?: number;

    tagName?: string;
    hideTracksWhenNotNeeded?: boolean;

    autoHide?: boolean;
    autoHideTimeout?: number;
    autoHideDuration?: number;

    thumbSize?: number;
    thumbMinSize?: number;
    universal?: boolean;

    autoHeight?: boolean;
    autoHeightMin?: number | string;
    autoHeightMax?: number | string;

    resizeThrottleTimeout?: number;
  }

  export class Scrollbars extends Component<ScrollbarProps> {
    scrollTop(top: number): void;
    scrollLeft(left: number): void;
    scrollToTop(): void;
    scrollToBottom(): void;
    scrollToLeft(): void;
    scrollToRight(): void;
    getScrollLeft(): number;
    getScrollTop(): number;
    getScrollWidth(): number;
    getScrollHeight(): number;
    getClientWidth(): number;
    getClientHeight(): number;
    getValues(): positionValues;
  }
}
