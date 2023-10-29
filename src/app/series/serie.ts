export class Serie {
    readonly id: number;
    readonly name: string;
    readonly channel: string;
    readonly seasons: number;
    readonly linkWebPage: string;
    readonly linkImage: string;
    readonly description: string;

    constructor(
        id: number, 
        name: string, 
        seasons: number, 
        channel: string, 
        description: string, 
        linkWebPage: string, 
        linkImage: string
    ) {
        this.id = id;
        this.name = name;
        this.seasons = seasons;
        this.channel = channel;
        this.description = description;
        this.linkWebPage = linkWebPage;
        this.linkImage = linkImage;
    }

    get getId() {
        return this.id;
    }

    get getName() {
        return this.name;
    }

    get getSeasons() {
        return this.seasons;
    }

    get getChannel() {
        return this.channel;
    }

    get getDescription() {
        return this.description;
    }

    get getLinkWebPage() {
        return this.linkWebPage;
    }

    get getLinkImage() {
        return this.linkImage;
    }
}
