class JobOffers {
    constructor(employer, position) {
        this.employer = employer;
        this.position = position;
        this.jobCandidates = [];
    }
    jobApplication(candidates) {
        candidates.map(p=> {
            let [name, education, yearsExperience] = p.split("-");
            yearsExperience = Number(yearsExperience);

            let person = this.jobCandidates.find(p => p.name == name);
            if (person) {
                if(person.yearsExperience<yearsExperience) {
                    person.yearsExperience = yearsExperience
                }
            } else {
                this.jobCandidates.push({name, education, yearsExperience});
            }
        });
        let result = [];
        this.jobCandidates.map(p=> {
            result.push(p.name)
        });
        return `You successfully added candidates: ${result.join(', ')}.`
    }
    jobOffer(chosenPerson) {
        let hiredPerson = ''

        let [name, minimalExperience] = chosenPerson.split("-");
        minimalExperience = Number(minimalExperience);

        let targetPerson = this.jobCandidates.find(p => p.name == name);
        if (targetPerson) {
            if (targetPerson.yearsExperience < minimalExperience) {
                throw new Error(`${name} does not have enough experience as ${this.position}, minimum requirement is ${minimalExperience} years.`)
            } else {
                targetPerson.yearsExperience = "hired";
                hiredPerson = targetPerson.name;
            }
        } else {
            throw new Error(`${name} is not in the candidates list!`)
        }
        return `Welcome aboard, our newest employee is ${name}.`
    }
    salaryBonus(name) {

        const targetPersons = this.jobCandidates.find(p => p.name == name);
        if (targetPersons) {
            if (targetPersons.education == "Bachelor" ) {
                return (`${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $50,000 per year!`)
            } else if(targetPersons.education == "Master") {
                return (`${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $60,000 per year!"`)
            } else {
                return (`${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $40,000 per year!`)
            }
        }
    }
    candidatesDatabase() {
        if (this.jobCandidates === 0) {
            return "Candidate Database is empty!"
        }
        let result = [];
        result.push('Candidates list:')
        this.jobCandidates.sort((a,b) => a.name.localeCompare(b.name));
        for (let element of this.jobCandidates) {
            result.push(`${element.name}-${element.yearsExperience}`)
        }
        return result.join("\n")
    }
}
let Jobs = new JobOffers ("Google", "Strategy Analyst");
 console.log(Jobs.jobApplication(["John Doe-Bachelor-10", "Peter Parker-Master-5", "Daniel Jones- Bachelor-18"]));
 console.log(Jobs.jobOffer("John Doe-8"));
 console.log(Jobs.jobOffer("Peter Parker-4"));
 console.log(Jobs.jobOffer("John Jones-8"));







