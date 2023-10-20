let result = (() => {
    const commands = {
        upvote: (post) => post.upvotes++,
        downvote: (post) => post.downvotes++,
        score: (post) => {
            const upVotes = post.upvotes;
            const downVotes = post.downvotes;
            const totalVotes = upVotes + downVotes;
            let obfuscationNumber = 0;

            if (totalVotes > 50) {
                const maxVotes = Math.max(upVotes, downVotes);
                obfuscationNumber = Math.ceil(0.25 * maxVotes);
            }

            const scoreResult = [
                upVotes + obfuscationNumber,
                downVotes + obfuscationNumber,
                upVotes - downVotes,
                getRating(upVotes, downVotes, totalVotes)
            ];

            return scoreResult;
        },
        call: (post, args) => {
            const result = commands[args](post);
            if (args === 'score') {
                console.log(result);
            }
        }
    };

    function getRating(upVotes, downVotes, totalVotes) {
        const balance = upVotes - downVotes;

        if (totalVotes < 10) {
            return 'new';
        }
        if ((upVotes / totalVotes) > 0.66) {
            return 'hot';
        }
        if ((downVotes / totalVotes <= 0.66) && balance >= 0 && (upVotes > 100 || downVotes > 100)) {
            return 'controversial';
        }
        if (balance < 0 && totalVotes >= 10) {
            return 'unpopular';
        }
        return 'new';
    }

    return commands;
})();

const forumPost = {
    id: '1',
    author: 'pesho',
    content: 'hi guys',
    upvotes: 0,
    downvotes: 0
};

result.call(forumPost, 'upvote');
result.call(forumPost, 'score');