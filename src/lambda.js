module.exports = {
    handler: async event => {
        if ('throw' in event.query){
            throw new Error('An error has occurred');
        }
        return 'This is the successful response body';
    }
}
