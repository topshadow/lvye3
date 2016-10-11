export declare var themes: ({
    name: string;
    templates: ({
        name: string;
        picture: string;
        data: {
            selector: string;
            content: {
                logo: string;
                pages: {
                    pageName: string;
                    path: string;
                }[];
            };
        };
    } | {
        name: string;
        picture: string;
        data: {
            selector: string;
            content: {
                sliders: {
                    title1: string;
                    title2: string;
                    lgImage: string;
                    smImage: string;
                }[];
            };
        };
    } | {
        name: string;
        picture: string;
        data: {
            selector: string;
            content: {
                title1: string;
                title2: string;
                featureItems: {
                    icon: string;
                    summary: string;
                    detail: string;
                }[];
            };
        };
    } | {
        name: string;
        picture: string;
        data: {
            selector: string;
            content: {
                title: string;
                subTitle: string;
                products: {
                    title: string;
                    subTitle: string;
                    link: string;
                    picture: string;
                }[];
            };
        };
    } | {
        name: string;
        picture: string;
        data: {
            selector: string;
            content: {
                title: string;
                subTitle: string;
                backgroundImage: string;
                services: {
                    picture: string;
                    title: string;
                    subTitle: string;
                }[];
            };
        };
    } | {
        name: string;
        picture: string;
        data: {
            selector: string;
            content: {
                title: string;
                subTitle: string;
                rightTitle: string;
                skills: {
                    title: string;
                    percent: string;
                }[];
                advantages: {
                    title: string;
                    subTitle: string;
                    detail: string;
                    picture: string;
                }[];
            };
        };
    } | {
        name: string;
        picture: string;
        data: {
            selector: string;
            content: {
                linkSets: {
                    title: string;
                    links: ({
                        title: string;
                        href: string;
                    } | {
                        title: string;
                    })[];
                }[];
            };
        };
    } | {
        name: string;
        picture: string;
        data: {
            selector: string;
            content: {
                companyName: string;
                links: {
                    title: string;
                    href: string;
                }[];
            };
        };
    })[];
} | {
    name: string;
    templates: ({
        name: string;
        picture: string;
        data: {
            selector: string;
            content: {
                title: string;
                subTitle: string;
                sliders: {
                    picture: string;
                }[];
            };
        };
    } | {
        name: string;
        picture: string;
        data: {
            selector: string;
            content: {
                title: string;
                subTitle: string;
                persons: {
                    name: string;
                    picture: string;
                    goodats: string[];
                    contactLinks: any[];
                    info: string;
                }[];
            };
        };
    })[];
})[];
