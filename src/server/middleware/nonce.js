
import hash from 'xxhashjs';

const handleNonce = (req, res, next) => {
	// We are identifying if the request originated from Firefox.
	// If it did and the request is 304 we do not attach the nonce
	// This is done to avoid the issue with FF where in a 304 request
	// a new nonce is returned but since the shell is cahced it still has
	// the old nonce and hence it fails.
	// Nonce from cookie is stripped off everyting except numbers.
    // This is to take care of an issue raised by appsec (SECBUG-698)

    // we need to find a way of generating new nonce or re-using
    const RID = 'abcdef';

	const cookieNonce = (req.cookies && req.cookies.nonce || '').replace(/\D/g,'');
	const nonce = hash.h32(req.requestId || RID, 0xabeabecd).toString();
    req.nonce = cookieNonce ? cookieNonce : nonce;
    

    if(!req.cookies) {
        res.cookie('nonce', req.nonce, { maxAge: 13434242443, httpOnly: true });
    }

	next();
};

export default handleNonce;
