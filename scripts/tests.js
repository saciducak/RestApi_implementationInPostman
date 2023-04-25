var successHttpStatuses = [200, 201, 202, 204];
var message = pm.response.code +", Paypal-Debug-Id="+getPayPalDebugId();

if(!isSuccessful()) {
    console.error("Unexpected HTTP Status Code: ", message, pm.response.text());
    console.error("https://developer.paypal.com/developer/dashboard/sandbox?Paypal-Debug-Id="+getPayPalDebugId());
    message = message + ", "+pm.response.text();
}

pm.test("HTTP Status Code must be one of "+successHttpStatuses+", actual is "+message, function () {
    pm.expect(pm.response.code).to.be.oneOf(successHttpStatuses);
});

function getPayPalDebugId() {
    if(pm && pm.response && pm.response.headers) {
        return pm.response.headers.get('Paypal-Debug-Id');
    } 
}

function isSuccessful() {
    return successHttpStatuses.includes(pm.response.code);
}