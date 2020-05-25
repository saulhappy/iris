# Iris: A Site to Help Your Neighbors During Crisis

## Status: under development

## Table of contents

- [Background](#background)
- [Technical Information](#technical-information)
- [Backend Details](#backend-details)
- [Fronted Details](#frontend-details)
- [Functionality Details](#functionality-detials)
- [Demo](#demo)
- [Deployment](#deployment)
- [Contact](#contact)

## Background

According to ancient Greek Mythology as described in Hesiod's Theogony, Iris is the daughter of Thaumas and the Oceanid Electra, and the sister of the Harpies: Aello and Ocypete. During the Titan Battles, Iris was the messenger of the Olympian Gods.

Though Iris was principally associated with communication and messages, she was also believed to aid in the fulfillment of humans' prayers, either by fulfilling them herself or by bringing them to the attention of other deities. She is also said to travel on the rainbow while carrying messages from the gods to mortals.

We need more of this. Especially now, during time of development, when the world is reeling from the COVID-19 Crisis.

Iris will be a site where users can create their profiles, add where they live, contact information about themselves, where they live, and how they can help those around them. Other users would then be able to contact these people with requests for help.

## Technical Information

This application is written in Node.js using the Express.js framework in the backend and React.js in the frontend. The ASYNC/AWAIT paradigm was used for promise resolution throughout.

### Backend Details

Mongo is used for data persistence. The following packages where used in backend development:

- [mongoose](https://mongoosejs.com/): for object modeling with MongoDB
- [express.js](https://expressjs.com/): for API and routing utilities
- [bcrypt.js](https://www.npmjs.com/package/bcryptjs): for password encryption
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken): for data encryption and protection
- [config](https://www.npmjs.com/package/config): for custom authentication middleware

### Frontend Details

A single-page React.js application serves as the frontend. The following packages where used in frontend development:

- [axios](https://www.npmjs.com/package/axios): for http requests and global headers
- [react-router-dom](https://www.npmjs.com/package/react-router-dom): for web routing
- [redux](https://redux.js.org/introduction/getting-started): for state management
- [react-redux](https://react-redux.js.org/introduction/quick-start): for react and redux binding
- [redux-thunk](https://www.npmjs.com/package/redux-thunk): middleware for async requests in actions
- [redux-devtools-extensions](https://www.npmjs.com/package/redux-devtools-extension): helper for using redux devtools
- [moment](https://www.npmjs.com/package/moment): for date formatting
- [react-moment](https://www.npmjs.com/package/react-moment): to use moment within react components
- [uuid](https://www.npmjs.com/package/uuid): for redux alert IDs

## Functionality Details

Users are able to experience the following functionalities:

- Create, update, and delete an account with information about who they are. A user picture will automatically be generated if they use gravatar(https://en.gravatar.com/). If the user doesn't have a gravatar account, a default image is created.
- Create, update, and delete a profile with further information about who they are, what neighborhood they live in, what kinds of activities they are able to help others with, and links to their social media presence.
- Post comments, delete comments, like and unlike comments. Comments can only be liked once per user. Comments live independent of the user, so that their comments can exist even if a user deletes their profile.

## Demo

TBD

## Deployment

This application is deployed on Heroku. You can visit it here: project-iris-app.herokuapp.com(https://project-iris-app.herokuapp.com/)

## Contact

**Saul Feliz** [LinkedIn](https://www.linkedin.com/in/saul-feliz/) // [Portfolio](https://saulfeliz.com/)
