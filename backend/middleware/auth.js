const AuthMiddleware = (minLevel) => (req, res, next) {
    next();
}

export default AuthMiddleware;
