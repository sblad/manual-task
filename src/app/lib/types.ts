export interface AboutData {
    id: string;
    subtitle: string;
    title: string;
    content: string;
    imgUrl: string;
}

export interface FooterSubitem {
    name: string;
    link: string;
}

export interface FooterSection {
    section: string;
    items: FooterSubitem[];
}