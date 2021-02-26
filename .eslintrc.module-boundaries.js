/**
 * Common module boundary rules based on project types.
 */
const typeConstraints = [
  {
    sourceTag: 'type:application',
    onlyDependOnLibsWithTags: [
      'type:feature',
      'type:data-access',
      'type:ui',
      'type:util',
      'type:mocks',
    ],
  },
  {
    sourceTag: 'type:feature',
    onlyDependOnLibsWithTags: ['type:data-access', 'type:ui', 'type:util', 'type:mocks'],
  },
  {
    sourceTag: 'type:data-access',
    onlyDependOnLibsWithTags: ['type:data-access', 'type:ui', 'type:util', 'type:mocks'],
  },
  {
    sourceTag: 'type:ui',
    onlyDependOnLibsWithTags: ['type:data-access', 'type:ui', 'type:util', 'type:mocks'],
  },
  {
    sourceTag: 'type:util',
    onlyDependOnLibsWithTags: ['type:data-access', 'type:ui', 'type:util'],
  },
  {
    sourceTag: 'type:e2e',
    onlyDependOnLibsWithTags: ['type:util'],
  },
];

/**
 * Shared module boundary rules based on scopes.
 */
const sharedConstraints = [
  {
    sourceTag: 'scope:proto',
    onlyDependOnLibsWithTags: [],
  },
];

/**
 * Backend module boundary rules based on scopes.
 */
const backendConstraints = [
  {
    sourceTag: 'scope:api',
    onlyDependOnLibsWithTags: ['scope:api-interface', 'scope:proto'],
  },
  {
    sourceTag: 'scope:api-interface',
    onlyDependOnLibsWithTags: ['scope:proto'],
  },
];

/**
 * Client module boundary rules based on scopes.
 */
const clientConstraints = [
  {
    sourceTag: 'scope:documentation',
    onlyDependOnLibsWithTags: ['scope:client-material', 'scope:client-util'],
  },
  {
    sourceTag: 'scope:documentation-e2e',
    onlyDependOnLibsWithTags: ['scope:client-util'],
  },
  {
    sourceTag: 'scope:mocks-core',
    onlyDependOnLibsWithTags: ['*'], // TODO: remove all library imports from mocks-core
  },
  {
    sourceTag: 'scope:client-material',
    onlyDependOnLibsWithTags: [],
  },
  {
    sourceTag: 'scope:client-core',
    onlyDependOnLibsWithTags: ['scope:client-util', 'scope:client-store'],
  },
  {
    sourceTag: 'scope:client-store',
    onlyDependOnLibsWithTags: [
      'scope:mocks-core',
      'scope:proto',
      'scope:client-util',
      'scope:client-translate',
    ],
  },
  {
    sourceTag: 'scope:client-services',
    onlyDependOnLibsWithTags: ['scope:mocks-core', 'scope:proto'],
  },
  {
    sourceTag: 'scope:client-componnents',
    onlyDependOnLibsWithTags: [
      'scope:mocks-core',
      'scope:proto',
      'scope:client-core',
      'scope:client-material',
      'scope:client-store',
      'scope:client-util',
      'scope:client-translate',
    ],
  },
  {
    sourceTag: 'scope:client-gql',
    onlyDependOnLibsWithTags: ['scope:mocks-core', 'scope:proto', 'scope:client-util'],
  },
  {
    sourceTag: 'scope:client-chatbot',
    onlyDependOnLibsWithTags: [
      'scope:mocks-core',
      'scope:proto',
      'scope:client-material',
      'scope:client-store',
      'scope:client-translate',
    ],
  },
  {
    sourceTag: 'scope:client-util',
    onlyDependOnLibsWithTags: [],
  },
  {
    sourceTag: 'scope:translate',
    onlyDependOnLibsWithTags: [],
  },
  {
    sourceTag: 'scope:client',
    onlyDependOnLibsWithTags: [
      'scope:mocks-core',
      'scope:proto',
      'scope:client-gql',
      'scope:client-store',
      'scope:client-services',
      'scope:client-chatbot',
      'scope:client-components',
      'scope:client-core',
      'scope:client-material',
      'scope:client-translate',
      'scope:client-util',
    ],
  },
  {
    sourceTag: 'scope:client-e2e',
    onlyDependOnLibsWithTags: ['scope:client-util'],
  },
  {
    sourceTag: 'scope:client-components-e2e',
    onlyDependOnLibsWithTags: ['scope:client-util'],
  },
];

/**
 * Nrwl nx module boudary rules.
 */
exports.nxModuleBoundaryRules = {
  enforceBuildableLibDependency: true,
  allow: ['mocks-core'], // TODO: remove all library imports from mocks-core
  depConstraints: [
    ...sharedConstraints,
    ...clientConstraints,
    ...backendConstraints,
    ...typeConstraints,
  ],
};
