/**
 * Stub de Module Federation 2.0
 * En Webpack/Rspack real: exposes + remotes entre checkout/catalog/profile.
 */
export const federationConfig = {
  name: 'atlas_shell',
  remotes: {
    checkout: 'checkout@https://cdn.example/checkout/remoteEntry.js',
    catalog: 'catalog@https://cdn.example/catalog/remoteEntry.js',
    profile: 'profile@https://cdn.example/profile/remoteEntry.js',
  },
  shared: {
    react: { singleton: true, requiredVersion: '^19.0.0' },
    'react-dom': { singleton: true, requiredVersion: '^19.0.0' },
  },
}
