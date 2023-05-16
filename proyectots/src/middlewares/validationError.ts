import { NextFunction, Request, Response } from 'express';
import { validationResult } from 'express-validator';


class ValidationErrorMiddleware {
	//422 Unprocessable Entity
    //https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/422
    public static handleErrors(req: Request, res: Response, next: NextFunction) {
		const result = validationResult(req);
		if (!result.isEmpty()) {
			return res.status(422).json({ errors: result.array() });
		}
		return next();
	}
}

export default ValidationErrorMiddleware;