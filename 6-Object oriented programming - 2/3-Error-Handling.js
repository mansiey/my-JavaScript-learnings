function bootNavigation(mapLoaded) {
    try {
        console.log(`Is Navigation loaded: ${mapLoaded}`);
        if (!mapLoaded) {
            throw new Error("Something went wrong!");
        }
        return ("NAV_OKAY!!");
    } catch (error) {
        console.log(error);
        console.log(`Navigation Failed: ${error.message}`);
    } finally {
        console.log("Navigation sequence completed!");
    }
}

const status1 = bootNavigation(true);
console.log(`Result: ${status1}`);

const status2 = bootNavigation(false);
console.log(`Result: ${status2}`);
