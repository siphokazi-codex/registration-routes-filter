# Registration Numbers Webapp

## About the application
  This application allows a user to enter different car registration numbers for different towns and filters the registration numbers of the different towns entered by user, according to the town selected by the user. The application also has a validation which checks if town entered by the user is not already on the Mongo database and does not add the town, if a user has not entered any registration number.

## Platforms the application can run on
  - Linux (Ubuntu)

## Get the Github Repository
#### Clone the Githhub Repository
  - On your terminal go to the directory where you want the application to be saved
  - On the terminal type: git clone https://github.com/siphokazi-codex/registration-routes-filter Or [you can click the direct link](https://github.com/siphokazi-codex/registration-routes-filter).

## Installations
### Different System Software needed for application
  - Install Atom Integrated Development Environment(IDE) on the terminal(type sudo apt-get install atom).
### Different Dependencies and devDependencies needed for application
  - On your terminal, go to the folder containing the application.
  - type npm install (to create node modules for the package.json file in the application).

## Tests
  - Tests for the application [![Build Status](https://travis-ci.org/siphokazi-codex/registration-routes-filter.svg?branch=master)](https://travis-ci.org/siphokazi-codex/registration-routes-filter)

## Usage
### Output Example
  ![Landing Page](registration.png)

### How to configure the app and run it on your machine
  - Open the project on your IDE, which is atom
  - Open the  terminal
  - Open the folder where the application is located on the terminal
  - Type nodemon on the terminal
  - Open the browser and type http:/localhost:3001/registration/add [Or you can click the direct link](http:/localhost:3001/registration/add).
### How the user can use the application
  - On the browser, enter the different car registration numbers for the different towns on the textbox provided, after that the user has the opportunity filter the for different towns as displayed on the application.  The user can than select the button for that particular town.

## Known Issues
  - The application can only run on Linux Ubuntu platform at the moment, platforms such as macOS, Windows are not yet covered for this application.

## Contributing
  - Create an issue and describe your idea
  - Fork it [https://github.com/siphokazi-codex/registration-routes-filter]
  - Create your feature branch (git checkout -b my-new-feature)
  - Commit your changes (git commit -m 'Add some feature')
  - Publish the branch (git push origin my-new-feature)
  - Create a new Pull Request
  - Finish! :white_check_mark:


## License
  - The license for the softwares used in this application is released under the MIT License. [MIT license](https://opensource.org/licenses/MIT)
