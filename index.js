var GoogleContacts = require('google-contacts').GoogleContacts;

const SyncApp = {
    /**
     * Initialize Sync
     */
    async init() {
        var client = new GoogleContacts({
            token: 'oauth2 token...'
        });
    }
};

/**
 * 
 */
(async () => {
    await SyncApp.init()
})();