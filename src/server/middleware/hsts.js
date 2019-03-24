
// one year MAX_AGE for HSTS
const HTTS_MAXAGE = 31557600;

export default setHSTS = (req, res, next) => {
    if(req.secure) {
        res.cookie('Strict-Transport-Security', { maxAge: HTTS_MAXAGE, httpOnly: true });
    }
    next();
};