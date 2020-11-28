## Nodemailer Sample Project:

### Overview:

-   Nodemailer is a NodeJS library.
-   Nodemailer is used to send mails programatically to an email address.

### Working:

-   The nodemailer service is written in the **nodemailer.js** file inside the service folder.
-   In configuration the sender's email's corresponding account's hostname, SMTP address, username & password is needed to be passed.
-   The above are the parameters required for running nodemailer.
-   Fetch the SMTP server settings of your email service provider. For e.g. - [Rediffmail](https://www.saleshandy.com/smtp/rediffmail-smtp-settings/)
-   Run **npm install**.
-   Run **npm start**. The program will ask for the email address to send the message to.

### Observations:

-   Gmail, Yahoo and some other prominent email service providers need some additional settings for nodemailer to work.
-   For e.g. - [GMail](https://nodemailer.com/usage/using-gmail/)
-   If the Gmail account has two factor auth enabled, it will not work and you need to have an application specific password. For e.g. - [Refer here](https://stackoverflow.com/questions/45478293/username-and-password-not-accepted-when-using-nodemailer)
-   For Gmail the user needs to create an app password which will be used instead of the original user's password so that nodemailer can access the email service.
