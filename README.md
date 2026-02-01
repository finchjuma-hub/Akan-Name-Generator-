# Akan-Name-Generator-

## Project Description
The Akan Name Generator is a web application that allows users to discover their traditional Akan name.
In Ghana, Ivory Coast and Togo names are given based on the day of the week a child is born and their gender.
This project collects a user's birthdate and gender, validates the input, calculates the day of the week, and displays the correct Akan name.

## Author's Information
Name: Finch Juma
Location: Nairobi, Kenya
Role: Developer and Designer

## Set up instructions
Download this repository.
Open the project folder.
Launch "index.html" in your browser.
Ensure "style.css" and "script.js" are linked correctly.

## BDD(Behavior-Driven Development)
Scenario 1: User enters a valid date and selects gender
            The user inputs '14/01/2006' and selects 'Male'
            Then the form is submitted
            The display will be:

            "You were born on Saturday."
            "Your Akan name is Kwame."

Scenario 2: User enters an invalid date 
            The user inputs an impossible date (e.g. 31/02/2020)
            And the form is submitted
            The app displays and alert:

            "Please enter a valid date."

Scenario 3: User does not select a gender
            The user leaves gender blank
            And the form is submitted
            The app displays:

            "Please select an item in the list."


## Technologies Used
HTML for the structure and form inputs
CSS for styling and layout
JavaScript for validation, calculation, and result display

## Contact information
Email: finchjuma7@gmail.com

## License and Copyright information
This project is licensed under the MIT License.
© 2026 Akan Name Generator | Built by Finch.