function attachEventsListeners() {
    const convertButton = document.getElementById('convert');
    convertButton.addEventListener('click', convertDistance);

    function convertDistance() {
        const inputDistance = document.getElementById('inputDistance').value;
        const inputUnits = document.getElementById('inputUnits').value;
        const outputUnits = document.getElementById('outputUnits').value;
        const outputDistance = document.getElementById('outputDistance');
        
        const conversionRates = {
            km: 1000,
            m: 1,
            cm: 0.01,
            mm: 0.001,
            mi: 1609.34,
            yrd: 0.9144,
            ft: 0.3048,
            in: 0.0254
        };

        const distanceInMeters = inputDistance * conversionRates[inputUnits];

        const convertedDistance = distanceInMeters / conversionRates[outputUnits];

        outputDistance.value = convertedDistance;
    }
}