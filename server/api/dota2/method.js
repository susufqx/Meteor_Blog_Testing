import {meteor} from 'meteor/meteor';

Meteor.methods({
  'getMatchDota2'(id){
    check(id, String);
    let key = Meteor.settings.private.dota2api.key;

    const Dota2Api  =   require('dota2-api');
    const da        =   Dota2Api.create(key,570);
    const options   =   {
      match_id:id
    };
    return da.getMatchDetails(options);
  },

  'getAccountDota2'(id){
    check(id, String);
    return undefined;
  }
});
