// easy-google-contacts-to-outlook-sync
const log4js = require('log4js');
const fs = require('fs');
const logger = log4js.getLogger();
const {
    runSample
} = require('./contacts')

log4js.configure('./config/log4js.json');
/**
 * 
 */
const SyncApp = {
    /**
     * Initialize Sync
     */
    async init() {
        try {
            logger.info('Starting')
            const result = await runSample();
            logger.info('received result: ', result)
            fs.writeFileSync('./contacts.json', JSON.stringify(result, null, 2), 'utf8');
        } catch (error) {
            logger.error('Eror while handling callback', error);
        }
    }
};

/**
 * 
 */
(async () => {
    await SyncApp.init()
})();