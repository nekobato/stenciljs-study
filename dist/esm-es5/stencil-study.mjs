import { p as patchBrowser, b as bootstrapLazy } from './index-504e7c25.js';
patchBrowser().then(function (options) {
    return bootstrapLazy([["my-component", [[1, "my-component", { "first": [1], "middle": [1], "last": [1] }]]]], options);
});
