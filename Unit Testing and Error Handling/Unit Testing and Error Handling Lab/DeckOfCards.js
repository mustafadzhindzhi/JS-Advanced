function printDeckOfCards(cards) {
    const faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const suits = {
        'S': '\u2660',
        'H': '\u2665',
        'D': '\u2666',
        'C': '\u2663'
    };

    function makeCard(face, suit) {
        if (!faces.includes(face) || !suits[suit]) {
            throw new Error(`Invalid card: ${face}${suit}`);
        }

        return {
            face: face,
            suit: suits[suit],
            toString: function () {
                return `${face}${suits[suit]}`;
            }
        };
    }

    if (!Array.isArray(cards) || cards.length === 0) {
        console.log("No cards to process.");
        return;
    }

    try {
        let resultCards = cards.map(card => {
            const [face, suit] = [card.slice(0, -1), card.slice(-1)];
            return makeCard(face, suit);
        });

        console.log(resultCards.join(' '));
    } catch (error) {
        console.log(error.message);
    }
}

printDeckOfCards(['AS', '10D', 'KH', '2C']);