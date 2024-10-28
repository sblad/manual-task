import { AboutData } from "@app/lib/types";

export class AboutViewModel {
    constructor(private readonly data: AboutData[]) {
        this.data = data;
    }

    get sectionData() {
        return this.data;
    }

    getSectionIndex(index: number) {
        if (index < 9) {
            return `0${index + 1}`;
        }

        return index + 1;
    }
}