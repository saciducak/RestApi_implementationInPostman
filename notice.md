Getting Started

Step 1: Get your access token
An access token is automatically generated using a default client_id and secret. PayPal recommends using your own client_id and secret from the Developer Dashboard by entering the values under the Variables tab. A pre-request script will generate and manage the access_token automatically.

Note: Your developer account client_id and secret may have a different scope than the default client_id and secret.

Step 2: Make your first API call
PayPal recommends starting with the Orders API. These steps will use the Orders API to create an order and capture payment using sandbox accounts linked to your Developer Dashboard account.

To create an order:

In your workspace, navigate to your fork of the PayPal collection.
Select Orders > Create Order.
Select the Send button to create the order. On a successful call, the API returns a 201 order created response code.
In the response, find the approve link.
Open the approve link in a browser.
Log in with your Developer Dashboard Sandbox Personal Account credentials. You can find those credentials by logging into the Developer Dashboard and selecting Sandbox > Account
Select the Continue button. Payment has now been made.
To capture payment:

In the response of the order you created, find the order_id.
In the Variables tab, enter the order_id number.
Select Orders > Capture payment for order.
Select Send. On a successful call, the API returns a 201 order created response code.
Your order has been created and payment has been captured. You can verify the transaction in both the sandbox personal account and the sandbox business account.
