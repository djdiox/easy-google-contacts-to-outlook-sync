// easy-google-contacts-to-outlook-sync
const log4js = require('log4js');
log4js.configure('./config/log4js.json')
const logger = log4js.getLogger();
const { runSample } = require('./src/contacts')
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
            logger.info('received result: ', result);
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