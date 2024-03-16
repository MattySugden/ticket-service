Ticket-Service Front-End Service

This is the front-end service for the techTicket web application.

To start the service locally, the two repositories need to be cloned from GitHub to your device.  Create a folder on you hard drive (C:/ for Windows, or in the root folder on macOS) and name it ticket-service.  Then clone the two repositories here.  There should be two folders called: ticket-service and a second folder called: ticket-service-api.  If these two folders are in the ticket-service folder on your device, then a copy of the code should now be availble to access.

Open each folder in a new window within the code editor, Visual Studio Code is a good code editor to use.

Open the window for ticket-service-api, then open terminal and type: npm dev run.  See the ticket-service-api README.md for guidance.

Once the ticket-service-api back-end service is running, open the window for ticket-service.  Then in Terminal type: npm start.

Both the front-end and back-end services should now be running.  To access the full serviuce open a browser and type: http://localhost:3000

The techTickets homepage for the service should now be visible and can be logged into using one of the accounts available.

Successfully logged in accounts are presented with aWelcome menu page and the account nane should be displayed.  Depending on the level of access granted, will determine what menu options are available: 
Admin roles will see all menu options and manage user accounts;
Manager roles will be able to add and view tickets, view user profiles and create new users;
Employee will be able to view tickets and add new tickets only.
