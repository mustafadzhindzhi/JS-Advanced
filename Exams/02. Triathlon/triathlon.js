class Triathlon {
    constructor(competitionName) {
        this.competitionName = competitionName;
        this.participants = {};
        this.listOfFinalists = [];
    }

    addParticipant(participantName, participantGender) {
        if (this.participants[participantName]) {
            return `${participantName} has already been added to the list`;
        }

        this.participants[participantName] = participantGender;
        return `A new participant has been added - ${participantName}`;
    }

    completeness(participantName, condition) {
        if (!this.participants[participantName]) {
            throw new Error(`${participantName} is not in the current participants list`);
        }

        if (condition < 30) {
            throw new Error(`${participantName} is not well prepared and cannot finish any discipline`);
        }

        const disciplinesCount = Math.round(condition / 30);
        if (disciplinesCount > 0 && disciplinesCount <= 2) {
            return `${participantName} could only complete ${disciplinesCount} of the disciplines`;
        }

        const gender = this.participants[participantName];
        this.listOfFinalists.push({
            participantName,
            gender,
        });

        delete this.participants[participantName];
        return `Congratulations, ${participantName} finished the whole competition`;
    }

    rewarding(participantName) {
        const participant = this.listOfFinalists.find(p => p.participantName === participantName);

        if (!participant) {
            return `${participantName} is not in the current finalists list`;
        }

        return `${participantName} was rewarded with a trophy for his performance`;
    }

    showRecord(criteria) {
        if (this.listOfFinalists.length === 0) {
            return 'There are no finalists in this competition';
        }

        const filtredByCriteria = this.listOfFinalists.filter(el => el.gender === criteria);

        if (criteria !== 'all' && filtredByCriteria.length === 0) {
            return `There are no ${criteria}'s that finished the competition`;
        }

        if (filtredByCriteria.length > 0 && criteria !== 'all') {
            const currentParticipant = filtredByCriteria.find(p => p.gender = criteria);
            return `${currentParticipant.participantName} is the first ${criteria} that finished the ${this.competitionName} triathlon`;
        }

        const result = [];

        if (criteria === 'all') {
            result.push(`List of all ${this.competitionName} finalists:`);
            this.listOfFinalists
                .sort((a, b) => a.participantName.localeCompare(b.participantName))
                .forEach(personInfo => {
                    result.push(personInfo.participantName);
                });
        }

        return result.join('\n');
    }
}