class footballTeam {
    constructor(clubName, country) {
        this.clubName = clubName;
        this.country = country;
        this.invitedPlayers = [];
    }

    newAdditions(footballPlayers) {
        const names = [];

        for (const line of footballPlayers) {
            let [name, age, value] = line.split('/');
            age = Number(age);
            value = Number(value);

            const player = this.invitedPlayers.find(p => p.name === name);

            if (player) {
                if (player.value < value) {
                    player.value = value;
                }
            } else {
                names.push(name);
                this.invitedPlayers.push({
                    name,
                    age,
                    value,
                });
            }
        }

        return `You successfully invite ${names.join(', ')}.`;
    }

    signContract(selectedPlayer) {
        let [name, offer] = selectedPlayer.split('/');
        offer = Number(offer);

        const player = this.invitedPlayers.find(p => p.name === name);

        if (!player) {
            throw new Error(`${name} is not invited to the selection list!`);
        }

        if (player.value > offer) {
            throw new Error(`The manager's offer is not enough to sign a contract with ${name}, ${player.value - offer} million more are needed to sign the contract!`);
        }

        player.value = 'Bought';
        return `Congratulations! You sign a contract with ${name} for ${offer} million dollars.`;
    }

    ageLimit(name, age) {
        const player = this.invitedPlayers.find(p => p.name === name);

        if (!player) {
            throw new Error(`${name} is not invited to the selection list!`);
        }

        if (player.age < age) {
            const limitAge = age - player.age;
            if (limitAge < 5) {
                return `${name} will sign a contract for ${limitAge} years with ${this.clubName} in ${this.country}!`;
            } else if (limitAge > 5) {
                return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`;
            }
        }

        return `${name} is above age limit!`;
    }

    transferWindowResult() {
        const result = [];
        result.push('Players list:');

        const sorted = this.invitedPlayers.sort((a, b) => a.name.localeCompare(b.name));

        sorted.forEach(p => {
            result.push(`Player ${p.name}-${p.value}`);
        });

        return result.join('\n');
    }
}

let fTeam = new footballTeam('Barcelona', 'Spain');
console.log(fTeam.newAdditions(['Kylian Mbappé/23/160', 'Kylian Mbappé/23/160', 'Lionel Messi/35/50', 'Pau Torres/25/52']));
console.log(fTeam.signContract('Kylian Mbappé/240'));
console.log(fTeam.ageLimit('Kylian Mbappé', 30));
console.log(fTeam.transferWindowResult());

