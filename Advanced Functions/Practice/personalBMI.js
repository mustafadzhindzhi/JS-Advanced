function composeChart(name, age, weightKg, heightCm) {
    const BMI_CATEGORIES = {
        UNDERWEIGHT: 18.5,
        NORMAL: 25,
        OVERWEIGHT: 30,
    };

    const calculateBMI = (weight, heightM) => {
        return Math.round(weight / (heightM ** 2));
    }

    const getBMICategory = (bmi) => {
        switch (true) {
            case bmi < BMI_CATEGORIES.UNDERWEIGHT:
                return 'underweight';
            case bmi < BMI_CATEGORIES.NORMAL:
                return 'normal';
            case bmi < BMI_CATEGORIES.OVERWEIGHT:
                return 'overweight';
            default:
                return 'obese';
        }
    }

    const heightM = heightCm / 100;
    const bmi = calculateBMI(weightKg, heightM);

    const chart = {
        name,
        personalInfo: {
            age,
            weight: weightKg,
            height: heightCm
        },
        BMI: bmi,
        status: getBMICategory(bmi)
    };

    if (chart.status === 'obese') {
        chart.recommendation = 'admission required';
    }

    console.log(chart);
}

composeChart("Honey Boo Boo", 9, 57, 137);