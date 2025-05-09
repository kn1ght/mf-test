
    export type RemoteKeys = 'child_vue_rspack/VueApp';
    type PackageType<T> = T extends 'child_vue_rspack/VueApp' ? typeof import('child_vue_rspack/VueApp') :any;