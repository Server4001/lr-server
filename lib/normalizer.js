module.exports = {

    error(err) {
        if (typeof err === 'string') {
            err = new Error(err);
        }

        return err;
    }
};
