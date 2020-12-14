export interface TurboClickEvent extends Event {
    target: Element;
    data: {
        url: string;
    };
}
export interface LinkInterceptorDelegate {
    shouldInterceptLinkClick(element: Element, url: string): boolean;
    linkClickIntercepted(element: Element, url: string): void;
}
export declare class LinkInterceptor {
    readonly delegate: LinkInterceptorDelegate;
    readonly element: Element;
    private clickEvent?;
    constructor(delegate: LinkInterceptorDelegate, element: Element);
    start(): void;
    stop(): void;
    clickBubbled: (event: Event) => void;
    linkClicked: EventListener;
    willVisit: () => void;
    respondsToEventTarget(target: EventTarget | null): boolean | null;
}
//# sourceMappingURL=link_interceptor.d.ts.map