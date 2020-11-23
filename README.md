# JuniorDesign
<a href="https://zenhub.com"><img src="https://dxssrr2j0sq4w.cloudfront.net/3.2.0/img/external/zenhub-badge.png" alt="ZenHub logo"></a>


# Git Commands
1. **BEFORE EDITING FILES**: check out master or whatever branch you want to work from
2. `git checkout -b your-new-branch-name`
3. edit your files
4. `git add -A (to add all files you have edited)`
5. `git commit -m "message about your commit"`
6. `git push origin your-new-branch-name`
7. go to the Git repo and navigate to your branch
8. create a Pull Request and (if acceptable) merge it to master

# Delivery Documentation
Below, you will find all necessary information about the delivery process of this Git repository.

## Release 1.0 Notes
- New Software
	> We have implemented numerous software features in Release 1.0. Users can log in to the site using an email/password combination specific to PlantLanta as well as through Google. Once logged in, the site will determine if this user is an admin or not and adjust site functionality accordingly. All users will be able to donate via PayPal to PlantLanta, and those wishing to give their time can register to volunteer or attend events, too. Additionally, all users can view PlantLanta’s mission statement and contact info. Admins will have the ability to manipulate the site’s data by creating new events that users can register for and edit certain text blocks such as the PlantLanta mission statement.

- Bug Fixes
	> As this is the first release of this software, there were no bugs fixed from the previous release.

- Known Bugs/Missing Features
	> As this site uses a free MongoDB instance as a database, the data security is not as sophisticated as possible regarding storing users’ names and emails. Additionally, although this was suggested recently and not part of our original functionality plan, we did not complete the integration of Shopify to the website for users to be able to purchase PlantLanta merchandise.

## Install Guide

- Pre-Requisites
	> To view/edit the database manually, install [MongoDB Compass](https://www.mongodb.com/try/download/compass)
	**Note: this is not necessary for build/execution and is mainly if someone is curious about the database**
- Dependent Libraries
	> Install [npm (node package manager)](https://www.npmjs.com/get-npm)
	> Install various JavaScript packages using `npm install`
- Download Instruction
	> 1. Decide on a folder to put the project in
	> 2. In a terminal, execute `cd /path/to/folder`
	> 3. In the same terminal, execute `git clone https://github.com/jhunter64/JuniorDesign.git`
	**Now you have created a directory named JuniorDesign inside the folder you selected in step 1 containing all the project code**
- Build Instructions
	> **Not Applicable--see the Run Instructions for details on executing the application**
- Installation of Application
	> **There are no required directories other than the ones created via the git clone command described previously**
- Run Instructions
	> 1. To run locally, open two terminal windows
	> 2. In both terminal windows, navigate to the project directory (ex. `cd Documents/JuniorDesign`)
	> 3. In one terminal, execute `cd server`
	> 4. In that same terminal, execute `npm start`
	> 5. In the  other terminal, execute `cd client`
	> 6. In that same terminal, execute `npm start`
	**Now you have `npm start` running in the server terminal and client terminal**
	> 7. This should automatically open a tab in a browser with the site running, but if not, **you can open a tab in a browser and enter localhost:3000 as the URL**
- Troubleshooting
	> The most common error is a package not being installed, which **can be fixed by executing `npm install` in a project directory terminal window**
	> Another potential error is trying to access the site before the client and server are fully running, so try to **wait a few seconds after executing the two `npm start` commands before manually opening the site URL**
