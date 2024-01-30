$(document).ready(function() {
    var colorSchemes = [
        { '--main-color-one': '#6a7d73', '--main-color-two': '#bfa07a', '--main-color-three': '#465454' },
        { '--main-color-one': '#606c88', '--main-color-two': '#bfbfbf', '--main-color-three': '#2c3e50' }
    ];

    var currentColorSchemeIndex = 0;
    var root = document.documentElement;

    $("#color").on("click", function() {
        var currentColorScheme = colorSchemes[currentColorSchemeIndex];

        // Update the values of the CSS variables
        Object.keys(currentColorScheme).forEach(function(key) {
            root.style.setProperty(key, currentColorScheme[key]);
        });

        // Increment the index and reset to 0 if it reaches the end
        currentColorSchemeIndex = (currentColorSchemeIndex + 1) === colorSchemes.length ? 0 : currentColorSchemeIndex + 1;
    });
});
