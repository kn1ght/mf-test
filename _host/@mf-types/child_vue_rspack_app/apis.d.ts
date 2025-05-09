
    export type RemoteKeys = 'child_vue_rspack_app/VueApp';
    type PackageType<T> = T extends 'child_vue_rspack_app/VueApp' ? typeof import('child_vue_rspack_app/VueApp') :any;