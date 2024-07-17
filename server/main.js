import { Meteor } from 'meteor/meteor';


Meteor.startup(() => {
  // code to run on server at startup
  const Posts = new Mongo.Collection('posts');
});
