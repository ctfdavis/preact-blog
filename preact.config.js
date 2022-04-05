import * as path from "path";

export default (config, env, helpers) => {
    config.module.rules[4].include = [
        path.resolve(__dirname, 'src', 'app'),
    ];

    config.module.rules[5].exclude = [
        path.resolve(__dirname, 'src', 'app'),
    ];
}
