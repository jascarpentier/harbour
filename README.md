# Harbour

A central repo for my final project.

# Table of Contents

- [Project Description](#project-description)
  - [Collaborators](#collaborators)
- [Design](#design)
- [Development](#development)
  - [Functional Goals](#functional-goals)
    - [MVP](#mvp)
    - [Post-MVP](#post-mvp)
    - [User Stories](#user-stories)
  - [Functional Heirarchy](#functional-heirarchy)
    - [Repo Structure](#repo-structure)
  - [Functional Components](#functional-components)
    - [Component Breakdown](#component-breakdown)
    - [Component Timeframes](#component-timeframes)
    - [Helper Functions](#helper-functions)
  - [Supporting Libraries](#supporting-libraries)
  - [Conventions](#conventions)
- [Project Review](#project-review)
  - [Code Showcase](#code-showcase)
  - [Bugs, Issues, and Resolutions](#issues-&-resolutions)
- [Project Followup](#project-followup)

# Project Overview

Harbour is a web application where  users can see a list of the top Hostels of 2019 and leave a comment on them.

Users can leave reviews and comments on the different stays. 

### Collaborators
* [Jasmine Carpentier](https://github.com/jascarpentier)

# Design 

<img src="client/src/assets/header.png" alt="header">
<img src="client/src/assets/home-page.png" alt="header">
<img src="client/src/assets/enter-page.png" alt="header">
<img src="client/src/assets/my-profile.png" alt="header">
<img src="client/src/assets/multi-location.png" alt="header">
<img src="client/src/assets/single-location.png" alt="header">
<img src="client/src/assets/footer.png" alt="header">


# Development

## Functional Goals

### MVP 

Users will be able to sign-up and log-in to the web application.  

Users will be able to leave a review and/or comment on Stays.


### POST MVP

- Implementing the Google Maps API
- Adding a quiz that will match users to a suggested stay if they don't know where they want to go
- Implementing Host vs. Stayer status on users so that people can posts stays
- Adding the My Profile section and having full CRUD on users

## User Stories 
 * I'm a traveler that is tired of taking the 'tourist' route and want to find a unique place to stay during my travels. 
 * I'm a user that is my the city and wants to find a place to stay by a body of water and close to nature. 
 * I'm an avid traveler and I don't know where I want to travel to next, so I want to find ideas for my next trip by taking this quiz. 

## Functional Heirarchy

## Functional Components

```
    |___ Enter Page
         |___ Sign-up Form
         |___ Login Form

    |___ Header
    |___ Hero
    |___ Menu
         |___ Home 
         |___ All Stays
         |___ My Profile

    |___ My Profile Page
      
    |___ Single Stay Page

    |___ Multiple Grid Page Stay

    |___ Footer 

```

### ERD

<img src="client/src/assets/ERD.png" alt="header">

### Supporting Libraries

* React
* Express

### Git

#### Branching

Open terminal to your development branch; pull to ensure most recent merge.
> git pull origin development

Next, create your new branch from your updated development branch:
> git checkout -b {initials}-{branch type}-{component} development
> git push --set-upstream origin {initials}-{branch type}-{component}

Now, proceed to work on your component; add/commit as necessary:
> git add .
> git commit -m "{Message}"

#### Merging

Once you're ready to merge, confirm again that you have the most recent development branch updates:
> git pull origin development

Then proceed to GitHub, submit a new Pull Request. Confirm comparison is:
> from Development to {Your Branch}

### React

#### Component Structuring & Naming

```
<div className="header">
  <div className="secondary-nav">

  </div>
  <div className="primary-nav">

  </div>
</div>
```
# issues-&-resolutions

Being the first time using Auth on my own, it took me a longer time than expected. So I didn't have enough time to implement the My Profile section, which I would like to do after the final presentations. 


