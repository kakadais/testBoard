Template.board.onCreated(function () {
  
});

Template.board.helpers({
  posts() {
    return Posts.find({}, { sort: { createdAt: -1 } });
  }
});

Template.board.events({
  'click #buttonPost, keyup #inputPost'(event, instance) {
    if (event.type === 'keyup' && event.keyCode !== 13) {
      return; // If the event is a keyup and the key is not Enter, return
    }
    const content = $('#inputPost').val().trim();
    if (content) {
      Posts.insert({
        createdAt: new Date(),
        content: content
      });
      $('#inputPost').val('');
    }
  },
});
