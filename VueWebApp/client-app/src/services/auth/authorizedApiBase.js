/**
 * Configuration class needed in base class.
 * The config is provided to the API client at initialization time.
 * API clients inherit from #AuthorizedApiBase and provide the config.
 */
export class IConfig {
    /**
     * Returns a valid value for the Authorization header.
     * Used to dynamically inject the current auth header.
     */
    getAuthorization;
}
export class AuthorizedApiBase {
    config;
    constructor(config) {
        this.config = config;
    }
    transformOptions = (options) => {
        options.headers = {
            ...options.headers,
            Authorization: this.config.getAuthorization(),
        };
        return Promise.resolve(options);
    };
}
//# sourceMappingURL=authorizedApiBase.js.map