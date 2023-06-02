window.fbAsyncInit = function() {
	FB.init({
		appId: '<Facebook-App-ID>', // Facebook App ID
		cookie: true, // enable cookies
		xfbml: true, // parse social plugins on this page
		version: 'v17.0' // Graph API version
	});
}

// Load the JavaScript SDK asynchronously
(function (d, s, id) {
	var js, fjs = d.getElementsByTagName(s)[0];
	if (d.getElementById(id)) return;
	js = d.createElement(s); js.id = id;
	js.src = "https://connect.facebook.net/en_US/sdk.js";
	fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

// Facebook Login with JavaScript SDK
function launchWhatsAppSignup() {
	// Lauch Facebook Login
	FB.login(function (response) {
		console.log(response);
		if (response.authResponse) {
			const accessToken = response.authResponse.accessToken;
			// Use the token to call the debug_token API and get the shared WABA's ID
			console.log('accessToken ' + accessToken);
		} else {
			console.log('User cancelled login or did not fully authorize.');
			console.log(response);
			const accessToken = 'aa';
		}
	}, {
		scope: 'business_management, whatsapp_business_management, whatsapp_business_messaging',
extras: {
	feature: 'whatsapp_embedded_signup',
	setup: {
		// Prefilled data can go here
	}
}
});
}
