import * as Joi from 'joi';

import { InvalidBodyError, InvalidIdError, InvalidPathParamError, InvalidQueryParamError } from '@/errors';
import logger from '@/utils/logger';

export abstract class TableService {
    protected readonly idValidator = Joi.number().integer().positive();
    protected readonly stringValidator = Joi.string().min(1).required();

    protected abstract readonly model: any;

    protected abstract readonly includeQueryParameters: string[];
    protected abstract readonly includeQueryParametersSoftCheck: string[];

    protected abstract readonly bodyValidator: Record<string, Joi.Schema>;
    protected abstract readonly postValidatorExcludes: string[];
    protected abstract readonly putValidatorExcludes: string[];
    protected abstract readonly patchValidatorExcludes: string[];

    protected get postBodyValidator(): Joi.ObjectSchema {
        const validator = { ...this.bodyValidator };
        this.postValidatorExcludes.forEach(key => delete validator[key]);
        return Joi.object(validator).required().options({ presence: 'required' });
    }
    protected get putBodyValidator(): Joi.ObjectSchema {
        const validator = { ...this.bodyValidator };
        this.putValidatorExcludes.forEach(key => delete validator[key]);
        return Joi.object(validator).required().options({ presence: 'required' });
    }
    protected get patchBodyValidator(): Joi.ObjectSchema {
        const validator = { ...this.bodyValidator };
        this.patchValidatorExcludes.forEach(key => delete validator[key]);
        return Joi.object(validator).required().options({ presence: 'optional' });
    }

    protected validateId(id: any, name: string): void {
        const error = this.idValidator.validate(id).error;
        if (error) {
            logger.warning('Validation error', error.message);
            throw new InvalidIdError(`Invalid id ${name}`);
        }
    }

    protected validateStringParam(val: any, name: string): void {
        const error = this.stringValidator.validate(val).error;
        if (error) {
            logger.warning('Validation error', error.message);
            throw new InvalidPathParamError(`Invalid ${name}`);
        }
    }

    private validateBody<T>(schema: Joi.Schema, body: any): T {
        const result = schema.validate(body);

        if (result.error) {
            logger.warning('Validation error', result.error.message);
            throw new InvalidBodyError();
        }

        return result.value;
    }

    protected validatePostBody(body: any): any {
        return this.validateBody(this.postBodyValidator, body);
    }

    protected validatePutBody(body: any): any {
        return this.validateBody(this.putBodyValidator, body);
    }

    protected validatePatchBody(body: any): any {
        return this.validateBody(this.patchBodyValidator, body);
    }

    private validateBoolQueryParam(
        parameter: string | string[] | undefined,
        name: string
    ): boolean | { where: { eliminato: null } } {
        parameter = Array.isArray(parameter) ? parameter[0] : parameter;

        if (parameter === undefined) {
            return false;
        }

        if (typeof parameter === 'string' && !['true', 'false'].includes(parameter)) {
            throw new InvalidQueryParamError(`Invalid query param ${name}`);
        }

        return parameter === 'true'
            ? this.includeQueryParametersSoftCheck.includes(name)
                ? { where: { eliminato: null } }
                : true
            : false;
    }

    protected parseIncludeQueryParameters(
        queryParams: Record<string, string | string[]>,
        includeQueryParameters: string[]
    ): any {
        let result: any = {};

        for (const key of includeQueryParameters) {
            const parameter = queryParams[key];

            const keyParts = key.split('.');
            const lastKeyPartIndex = keyParts.length - 1;

            if (keyParts.length === 1) {
                result[key] = this.validateBoolQueryParam(parameter, key);
            } else {
                let toModify = result;
                for (const keyPart of keyParts.slice(0, lastKeyPartIndex)) {
                    if (!toModify[keyPart]) {
                        toModify = null;
                        break;
                    }

                    if (typeof toModify[keyPart] === 'boolean') {
                        toModify[keyPart] = { include: {} };
                    } else if (!('include' in toModify[keyPart])) {
                        toModify[keyPart].include = {};
                    }

                    toModify = toModify[keyPart].include;
                }

                if (toModify) {
                    toModify[keyParts[lastKeyPartIndex]] = this.validateBoolQueryParam(parameter, key);
                }
            }
        }

        return result;
    }
}