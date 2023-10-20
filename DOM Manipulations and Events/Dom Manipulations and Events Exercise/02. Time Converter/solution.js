function attachEventsListeners() {
    const buttonElements = document.querySelectorAll('input[type="button"]');
    const daysInputElement = document.getElementById('days');
    const hoursInputElement = document.getElementById('hours');
    const minutesInputElement = document.getElementById('minutes');
    const secondsInputElement = document.getElementById('seconds');

    const buttons = Array.from(buttonElements);

    const values = {
        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400,
    };

    function convert(value, unit) {

        const days = value / values[unit];

        return {
            days: days,
            hours: days * values.hours,
            minutes: days * values.minutes,
            seconds: days * values.seconds,
        };
    }

    buttons.forEach(button => {
        button.addEventListener('click', onConvert);
    });

    function onConvert(e) {
        const inputElement = e.currentTarget.parentElement.querySelector('input[type="text"]');

        const time = convert(Number(inputElement.value), inputElement.id);

        daysInputElement.value = time.days;
        hoursInputElement.value = time.hours;
        minutesInputElement.value = time.minutes;
        secondsInputElement.value = time.seconds;
    }
}