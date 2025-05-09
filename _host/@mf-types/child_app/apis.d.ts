
    export type RemoteKeys = 'child_app/VueApp';
    type PackageType<T> = T extends 'child_app/VueApp' ? typeof import('child_app/VueApp') :any;