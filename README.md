# Geckos-Team-38 🦎

* A web app where users daily show their gratitude towards things that happen in their dayily life.

## Tech Stack

* Front-End: React
* Database: Firebase

## User Stories

#### As a Guest User I can:

* See a landing page with:
- > Navbar Containing:
    - a button to sigin/signup
    - a button that takes user to the about page
- > Description of what Gratitude Jar is and its benifits
- > Footer with links to:
    - About Page
    - Terms / Privacy Page
    - Team
    - GitHub Repo
    - Contact

#### As a Loged In User I can:

* Decide the time period to open the jar
* Daily input text, photos or small video clips of the things I am grateful about

## Development side

### Git workflow

* Git workflow for this project is based on [this](https://medium.com/@francesco.agnoletto/how-to-not-f-up-your-local-files-with-git-part-1-e0756c88fd3c) series, important points are summarized here for ease of reference.

* `master` branch - production branch - when everything is tested and works, update this branch
* `development` branch - It is a base for all the other branches - You do not code here, you send pull requests here to be checked by other members of your team and merged. The team members have to check your code and then merge to development.
* All other branches are of the format - `Type/short-description` - see below for more info

### Branches where coding is done 

* 4 basic types of branches followed by `/small-description`:

| Branch type | Purpose | Example
| ----------- | ------- | -------|
| `bug` | Bugfixes | "bug/fixed-all-caps"
| `feature` | for developing new features | "feature/giant-duck-modal"
| `refactor` | code refactoring | "refactor/add-prop-types"
| `style` | design/css stuff | "style/everything-is-black"

### Guidelines to push individual branches into the development branch

* For details refer to [this](https://medium.com/@francesco.agnoletto/how-to-not-f-up-your-local-files-with-git-part-2-fc4e243be02a) article.
* The development branch is always clean since the pull requests are reviewed and merged here. Thus `git pull` can be used without worrying about side effects. 
`$ git checkout development`
* Thus, keeping the development branch updated frequently will be helpful to reduce the number of merge conflicts in the new branches created.
`$ git pull` - update your local development branch from the remote branch 
* Once development branch is updated, switch to the working branch and merge.
`$ git checkout fix/my-branch`
`$ git merge development`

### Guidelines for posting issues

* Issues are the ways to check blockers in the project.
* All newly added issues and pull requests will automatically be added to the Blocks column in the Project board.
* All reopened issues and pull requests will be added to In-progress column.

### Format for posting issues

* The following information should be entered by the individual that report's the issue:

**_Issue Description & Expected Outcome:_** Description of what occurred and what the desired outcome should have been.

**_Symptoms:_** Summary of the symptoms including screenshots and logs, if available.

**_Steps to Recreate:_** List of steps the Developer can follow to recreate the problem. This should include not only navigation steps, but also data values that are to be entered.

**_Resolution:_** When the issue is resolved the Developer is responsible for describing how the issue was resolved along with any supplemental information that may be useful to other Developers if the issue should reoccur in the future:

### Issue Labelling - 
Follow the table given [here](https://github.com/Chingu-cohorts/pmrok/wiki/Getting-Started:-Issue-Reporting-and-Tracking#the-importance-of-labels).

## Team members  🤘
- [Harshil Agrawal](https://github.com/harshil1712)
- [Raghav Mundra](https://github.com/Raghav17)
- [Shovan Chatterjee](https://github.com/shovanch)
