import { Meteor } from 'meteor/meteor';
import setupBrowserPolicy from './config/security.js';
import accountCreationHook from './config/user.js';

import publishUsers    from './publications/user.js';
import publishBlogs    from './publications/blog.js';

setupBrowserPolicy(BrowserPolicy);
Accounts.onCreateUser(accountCreationHook);

Meteor.startup(() => {
  publishUsers();
  publishBlogs();
});
