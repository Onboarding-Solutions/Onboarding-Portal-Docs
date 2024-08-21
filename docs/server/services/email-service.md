# Email Service

## Overview

The Email Service in our Express.js server is responsible for sending various types of emails, such as invitations, notifications, and more. This service is built using `nodemailer` and handles email templating with `hbs` to ensure compatibility across different email providers and rendering engines.

### Important Notice

- **Email Service is Currently Disabled:** Please be aware that the email service is currently disabled to prevent our team’s email account from being flagged as spam. Do not attempt to send emails without proper authorization.
  
- **Logging:** If you see `email sent` in the console logs, it indicates that the email was successfully sent.

## Requesting a New Email Sending Method

If you need to add a new email sending feature, please contact **Liam**. He will provide you with a method, such as `sendRegisterInvitationEmail`, which you can then call from your code. 

### Example Workflow:

1. **Request the Method from Liam:**
   - If you need to send a new type of email, contact Liam. He will create a specific method for this, like `sendRegisterInvitationEmail`.

2. **Call the Method in Your Code:**
   - Once you have the method, simply call it where needed in your application.

   ```javascript
   // Example usage of the provided method
   sendRegisterInvitationEmail(userEmail, invitationDetails);
   ```

3. **Monitor Console Logs:**
   - Check the console for `email sent` logs to confirm the success of your email operation.

## Technical Details (Optional)

For those interested in the technical implementation, here’s a deeper dive into the email service:

### 1. **NodeMailer Integration**

The email service is built using `nodemailer`, a popular Node.js library for sending emails.

- **Email Configuration:** Configurations such as SMTP server details are set up in the `emailService.js` file.
- **Error Handling:** Proper error handling is implemented to manage issues like failed email delivery.

### 2. **HTML Email Templates**

Each email is associated with an HTML template, written using `hbs` (Handlebars). This templating engine allows for dynamic content and ensures compatibility across different email clients (Gmail, Outlook, etc.).

- **Complex Table-Based Layouts:** The templates use table-based HTML layouts to achieve consistent rendering across various email providers.
- **Customization:** If you need to modify or create a new email template, refer to `emailTemplateService.js`. This file outlines how to define a new HTML template, including the subject line and plain text content.

### 3. **Subjects and Plain Text Content**

In addition to the HTML body, each email has a corresponding subject and plain text content. These are crucial for proper email delivery and display in different clients.

- **Defining a New Email:** To create a new email template, both the subject and plain text content must be defined. Refer to the `emailTemplateService.js` file for guidance.