import { InvalidQueryParamError } from '@/errors';

function validateBoolQueryParam(
    parameter: string | string[] | undefined,
    name: string,
    includeQueryParametersSoftCheck: string[]
): boolean | { where: { eliminato: null } } {
    parameter = Array.isArray(parameter) ? parameter[0] : parameter;

    if (parameter === undefined) {
        return false;
    }

    if (typeof parameter === 'string' && !['true', 'false'].includes(parameter)) {
        throw new InvalidQueryParamError(`Invalid query param ${name}`);
    }

    return parameter === 'true'
        ? includeQueryParametersSoftCheck.includes(name)
            ? { where: { eliminato: null } }
            : true
        : false;
}

export default function parseIncludeQueryParameters(
    queryParams: Record<string, string | string[]>,
    includeQueryParameters: string[],
    includeQueryParametersSoftCheck: string[]
): any {
    let result: any = {};

    for (const key of includeQueryParameters) {
        const parameter = queryParams[key];

        const keyParts = key.split('.');
        const lastKeyPartIndex = keyParts.length - 1;

        if (keyParts.length === 1) {
            result[key] = validateBoolQueryParam(parameter, key, includeQueryParametersSoftCheck);
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
                toModify[keyParts[lastKeyPartIndex]] = validateBoolQueryParam(
                    parameter,
                    key,
                    includeQueryParametersSoftCheck
                );
            }
        }
    }

    return result;
}
