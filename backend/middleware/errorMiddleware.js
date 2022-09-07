const notfoundErrorMiddleware = (req, res, next) => {

    const error = new Error(`Not found - ${req.originalUrl}`);

    res.status(404);
    next(error);
};

const errorMiddlewareHandler = (err, req, res, next) => {

    const errorStatusCode = res.statusCode === 200 ? 500 : res.statusCode;

    res.status(errorStatusCode);
    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack,
    });
};

module.exports = { errorMiddlewareHandler, notfoundErrorMiddleware };