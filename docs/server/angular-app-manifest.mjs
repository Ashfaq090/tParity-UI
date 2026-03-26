
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/tParity-UI/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-RPMQDPQV.js"
    ],
    "redirectTo": "/tParity-UI/auth/login",
    "route": "/tParity-UI/auth"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-RPMQDPQV.js"
    ],
    "route": "/tParity-UI/auth/login"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-RPMQDPQV.js"
    ],
    "route": "/tParity-UI/auth/register"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-RPMQDPQV.js"
    ],
    "route": "/tParity-UI/auth/forget-password"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-RPMQDPQV.js"
    ],
    "redirectTo": "/tParity-UI/auth/login",
    "route": "/tParity-UI/auth/**"
  },
  {
    "renderMode": 2,
    "route": "/tParity-UI/features"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-3RFH4XRX.js"
    ],
    "route": "/tParity-UI/features/profile"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-3RFH4XRX.js"
    ],
    "redirectTo": "/tParity-UI/features/profile",
    "route": "/tParity-UI/features/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 6248, hash: '7ef9b58528927924e36304e45e48ee611d992f523875b5e62e1436276cf46ee2', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1256, hash: '70011ebe01fa65cf203a7dfe75387c01577fc59ca3d871c8ad9f499c80f6f9f1', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'auth/forget-password/index.html': {size: 6657, hash: 'de5106fe3037e079cc5c55824b70f3d2fe1be343ac14c1daa1b2186e881c0322', text: () => import('./assets-chunks/auth_forget-password_index_html.mjs').then(m => m.default)},
    'auth/register/index.html': {size: 6636, hash: '4e325423433efc0cb691c0d807ae4d62c8a288f0b9a8f2146f82c87848781024', text: () => import('./assets-chunks/auth_register_index_html.mjs').then(m => m.default)},
    'auth/login/index.html': {size: 15985, hash: 'f32aad1504b6bdd4a63819b9a30720e3590059815808f4f84110e716bad1c395', text: () => import('./assets-chunks/auth_login_index_html.mjs').then(m => m.default)},
    'features/index.html': {size: 306, hash: 'd473135532b1986e584466207efcdf7a84cd60d3c2553681f76a39bfeff22575', text: () => import('./assets-chunks/features_index_html.mjs').then(m => m.default)},
    'features/profile/index.html': {size: 8017, hash: 'c89639409426aa8c64bc5a96838c349a85f98d9c5b27e4657364de18a6a76fae', text: () => import('./assets-chunks/features_profile_index_html.mjs').then(m => m.default)},
    'styles-3WUSCJDA.css': {size: 16669, hash: 'BONBTH+yMjw', text: () => import('./assets-chunks/styles-3WUSCJDA_css.mjs').then(m => m.default)}
  },
};
