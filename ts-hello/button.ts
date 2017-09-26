class Button {
    protected likeCount: number = 0;
    protected dislikeCount: number = 0;
    protected isLiked: boolean = false;
    protected isDisliked: boolean = false;

    constructor() {
    }

    like() {
        if (this.isDisliked) {
            this.dislikeCount--;
            this.isDisliked = false;
        }

        this.likeCount++;
        this.isLiked = true;

        console.log('likeCount', this.likeCount);
        console.log('dislikeCount', this.dislikeCount);
        console.log('isLiked', this.isLiked);
        console.log('isDisliked', this.isDisliked);
    }

    dislike() {
        if (this.isLiked) {
            this.likeCount--;
            this.isLiked = false;
        }

        this.dislikeCount++;
        this.isDisliked = true;

        console.log('likeCount', this.likeCount);
        console.log('dislikeCount', this.dislikeCount);
        console.log('isLiked', this.isLiked);
        console.log('isDisliked', this.isDisliked);
    }
}

const button = new Button();
console.log('--- 1 ---');
button.like();
console.log('--- 2 ---');
button.dislike();
console.log('--- 3 ---');
button.like();
console.log('--- 4 ---');
button.dislike();

