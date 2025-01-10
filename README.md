# Shared Objects

<pre>
 .
├──  components
│   ├──  'Chakra UI'
│   │   ├──  accordion.tsx
│   │   ├──  action-bar.tsx
│   │   ├──  alert.tsx
│   │   ├──  avatar.tsx
│   │   ├──  breadcrumb.tsx
│   │   ├──  button.tsx
│   │   ├──  checkbox-card.tsx
│   │   ├──  checkbox.tsx
│   │   ├──  clipboard.tsx
│   │   ├──  close-button.tsx
│   │   ├──  color-mode.tsx
│   │   ├──  data-list.tsx
│   │   ├──  dialog.tsx
│   │   ├──  drawer.tsx
│   │   ├──  empty-state.tsx
│   │   ├──  field.tsx
│   │   ├──  file-button.tsx
│   │   ├──  hover-card.tsx
│   │   ├──  input-group.tsx
│   │   ├──  link-button.tsx
│   │   ├──  menu.tsx
│   │   ├──  native-select.tsx
│   │   ├──  number-input.tsx
│   │   ├──  pagination.tsx
│   │   ├──  password-input.tsx
│   │   ├──  pin-input.tsx
│   │   ├──  popover.tsx
│   │   ├──  progress-circle.tsx
│   │   ├──  progress.tsx
│   │   ├──  prose.tsx
│   │   ├──  provider.tsx
│   │   ├──  radio-card.tsx
│   │   ├──  radio.tsx
│   │   ├──  rating.tsx
│   │   ├──  segmented-control.tsx
│   │   ├──  select.tsx
│   │   ├──  skeleton.tsx
│   │   ├──  slider.tsx
│   │   ├──  stat.tsx
│   │   ├──  status.tsx
│   │   ├──  stepper-input.tsx
│   │   ├──  steps.tsx
│   │   ├──  switch.tsx
│   │   ├──  tag.tsx
│   │   ├──  timeline.tsx
│   │   ├──  toaster.tsx
│   │   ├──  toggle-tip.tsx
│   │   └──  tooltip.tsx
│   ├──  mathjax
│   │   ├──  _example.js
│   │   └──  page.js
│   ├──  MDX
│   │   └──  mdx-layout.tsx
│   ├──  Onboarding
│   │   └──  Introduction
│   │       └──  introduction.js
│   ├──  'Quick Menu'
│   │   └──  quick-menu.js
│   └──  contrast-checker
├──  utils
│   ├──  color
│   │   ├──  brands
│   │   │   ├──  from
│   │   │   │   └──  brand-kit.jsonc
│   │   │   └──  imgnx
│   │   │       └──  brand-kit.js
│   │   ├──  color-factory
│   │   │   ├──  output
│   │   │   └──  refactor.mjs
│   │   ├──  converters
│   │   │   ├──  out
│   │   │   │   ├──  colors-x-htm.
│   │   │   │   └──  colors.html
│   │   │   └──  json2html.mjs
│   │   ├──  IMGNX
│   │   │   └──  palette.js
│   │   ├──  PANTONE
│   │   ├──  RAL
│   │   │   ├──  .yarn
│   │   │   │   └──  install-state.gz
│   │   │   ├──  node_modules
│   │   │   │   ├──  @imgnx
│   │   │   │   │   └──  random-color
│   │   │   │   │       ├──  .editorconfig
│   │   │   │   │       ├──  .gitattributes
│   │   │   │   │       ├──  package.json
│   │   │   │   │       ├──  random-color.js
│   │   │   │   │       ├──  README.md
│   │   │   │   │       └──  test.js
│   │   │   │   └──  .yarn-state.yml
│   │   │   ├──  out
│   │   │   │   └──  colors.html
│   │   │   ├──  src
│   │   │   │   ├──  RAL.json
│   │   │   │   └──  RAL.mjs
│   │   │   ├──  .DS_Store
│   │   │   ├──  json2html.mjs
│   │   │   ├──  package.json
│   │   │   ├──  palette.js
│   │   │   ├──  RAL.html
│   │   │   └──  yarn.lock
│   │   ├──  random-color
│   │   │   ├──  .git
│   │   │   │   ├──  hooks
│   │   │   │   │   ├──  applypatch-msg.sample
│   │   │   │   │   ├──  commit-msg.sample
│   │   │   │   │   ├──  fsmonitor-watchman.sample
│   │   │   │   │   ├──  post-update.sample
│   │   │   │   │   ├──  pre-applypatch.sample
│   │   │   │   │   ├──  pre-commit.sample
│   │   │   │   │   ├──  pre-merge-commit.sample
│   │   │   │   │   ├──  pre-push.sample
│   │   │   │   │   ├──  pre-rebase.sample
│   │   │   │   │   ├──  pre-receive.sample
│   │   │   │   │   ├──  prepare-commit-msg.sample
│   │   │   │   │   ├──  push-to-checkout.sample
│   │   │   │   │   ├──  sendemail-validate.sample
│   │   │   │   │   └──  update.sample
│   │   │   │   ├──  info
│   │   │   │   │   └──  exclude
│   │   │   │   ├──  logs
│   │   │   │   │   ├──  refs
│   │   │   │   │   │   ├──  heads
│   │   │   │   │   │   │   └──  main
│   │   │   │   │   │   └──  remotes
│   │   │   │   │   │       └──  origin
│   │   │   │   │   │           └──  main
│   │   │   │   │   └──  HEAD
│   │   │   │   ├──  objects
│   │   │   │   │   ├──  0a
│   │   │   │   │   │   └──  211ef7f8ed1b8d46370f3befa2b2588f45f169
│   │   │   │   │   ├──  1e
│   │   │   │   │   │   ├──  74a62507df7a51126107581785865a2714f41b
│   │   │   │   │   │   └──  d453a371ba5c23ea9e365f9a6984d6aec0a13e
│   │   │   │   │   ├──  6f
│   │   │   │   │   │   ├──  b8052e95c0e1b40968b991a7f6a3ee8ea26357
│   │   │   │   │   │   └──  be7bd69ba5fdd952845adf338642aadf433503
│   │   │   │   │   ├──  7d
│   │   │   │   │   │   └──  4fca29923e686b4b7837610e8223aa9883ee9e
│   │   │   │   │   ├──  7e
│   │   │   │   │   │   └──  1a49dc04bdfd7253260e3a08033abf6723df2a
│   │   │   │   │   ├──  8f
│   │   │   │   │   │   └──  a253910360e88b4486e0e78f8bb64294e7450f
│   │   │   │   │   ├──  26
│   │   │   │   │   │   └──  5de0926aa5b459a964480f01ec5751b18a63e2
│   │   │   │   │   ├──  38
│   │   │   │   │   │   └──  30be0336acfec4968b09cfc6dddcd74d4f2642
│   │   │   │   │   ├──  40
│   │   │   │   │   │   └──  53123d745f6ad2ab1dbcf918c5a514d2dcdf34
│   │   │   │   │   ├──  79
│   │   │   │   │   │   └──  3831a8aa76e3ef060603232460e8316ae9c416
│   │   │   │   │   ├──  87
│   │   │   │   │   │   └──  0eb6a500bafbc16da8915eed82ee80ab540f9d
│   │   │   │   │   ├──  a0
│   │   │   │   │   │   └──  24bd4a42b6b1673a2a1a3441f1913e6e92c7a4
│   │   │   │   │   ├──  a9
│   │   │   │   │   │   └──  0f6fef60259f46fb05d6a252a14d2d6770aac9
│   │   │   │   │   ├──  af
│   │   │   │   │   │   └──  3ad128122dfe2a143df207c66884380fd888d4
│   │   │   │   │   ├──  b5
│   │   │   │   │   │   └──  cdee52369ed609686cf744e31b3bac518fca41
│   │   │   │   │   ├──  bd
│   │   │   │   │   │   └──  45843f913b2bb8e975a56a52c63d7146ad7505
│   │   │   │   │   ├──  d7
│   │   │   │   │   │   └──  ba1e45fdded7da63ddbaae5e4bca0b5a5c5a17
│   │   │   │   │   ├──  fe
│   │   │   │   │   │   └──  1926cb61d1ea425f6cc503712d72e60a8738e4
│   │   │   │   │   ├──  info
│   │   │   │   │   └──  pack
│   │   │   │   ├──  refs
│   │   │   │   │   ├──  heads
│   │   │   │   │   │   └──  main
│   │   │   │   │   ├──  remotes
│   │   │   │   │   │   └──  origin
│   │   │   │   │   │       └──  main
│   │   │   │   │   └──  tags
│   │   │   │   ├──  COMMIT_EDITMSG
│   │   │   │   ├──  config
│   │   │   │   ├──  description
│   │   │   │   ├──  FETCH_HEAD
│   │   │   │   ├──  HEAD
│   │   │   │   └──  index
│   │   │   ├──  .yarn
│   │   │   │   └──  install-state.gz
│   │   │   ├──  node_modules
│   │   │   │   ├──  .cache
│   │   │   │   │   └──  prettier
│   │   │   │   └──  .yarn-state.yml
│   │   │   ├──  .editorconfig
│   │   │   ├──  .gitattributes
│   │   │   ├──  .gitignore
│   │   │   ├──  package.json
│   │   │   ├──  random-color.js
│   │   │   ├──  README.md
│   │   │   ├──  test.js
│   │   │   └──  yarn.lock
│   │   ├──  testing
│   │   │   └──  contrast.js
│   │   └──  .DS_Store
│   ├──  sleep
│   │   ├──  .git
│   │   │   ├──  hooks
│   │   │   │   ├──  applypatch-msg.sample
│   │   │   │   ├──  commit-msg.sample
│   │   │   │   ├──  fsmonitor-watchman.sample
│   │   │   │   ├──  post-update.sample
│   │   │   │   ├──  pre-applypatch.sample
│   │   │   │   ├──  pre-commit.sample
│   │   │   │   ├──  pre-merge-commit.sample
│   │   │   │   ├──  pre-push.sample
│   │   │   │   ├──  pre-rebase.sample
│   │   │   │   ├──  pre-receive.sample
│   │   │   │   ├──  prepare-commit-msg.sample
│   │   │   │   ├──  push-to-checkout.sample
│   │   │   │   ├──  sendemail-validate.sample
│   │   │   │   └──  update.sample
│   │   │   ├──  info
│   │   │   │   └──  exclude
│   │   │   ├──  logs
│   │   │   │   ├──  refs
│   │   │   │   │   ├──  heads
│   │   │   │   │   │   └──  main
│   │   │   │   │   └──  remotes
│   │   │   │   │       └──  origin
│   │   │   │   │           └──  main
│   │   │   │   └──  HEAD
│   │   │   ├──  objects
│   │   │   │   ├──  0e
│   │   │   │   │   └──  391c8b480cdf16626b23ba06858ec523efd184
│   │   │   │   ├──  1e
│   │   │   │   │   └──  d453a371ba5c23ea9e365f9a6984d6aec0a13e
│   │   │   │   ├──  2e
│   │   │   │   │   └──  06e146d01db19ba4b684eba2d3beb55e4c8521
│   │   │   │   ├──  3c
│   │   │   │   │   └──  d1dea6a2bab038498ef559ca4953e1fd7c053a
│   │   │   │   ├──  7a
│   │   │   │   │   └──  0eb477bc690ed06dcb9b3ab42a6fd012042103
│   │   │   │   ├──  19
│   │   │   │   │   └──  edf966419018c3a8ae2d0cf359106547203557
│   │   │   │   ├──  24
│   │   │   │   │   └──  72ccf20d3df4a222455a462a75861bdbb3a2a4
│   │   │   │   ├──  47
│   │   │   │   │   └──  2b67ff44ecf64580dd44707b0ef047e2f708ef
│   │   │   │   ├──  52
│   │   │   │   │   └──  4001e2bb6fad00f3a1f91371d807da68362eb1
│   │   │   │   ├──  62
│   │   │   │   │   └──  1918ec304132ed1a41fb5d5d32e20e60400892
│   │   │   │   ├──  75
│   │   │   │   │   └──  21890a8e37b0645eb2a66a01321e32888040bb
│   │   │   │   ├──  87
│   │   │   │   │   └──  0eb6a500bafbc16da8915eed82ee80ab540f9d
│   │   │   │   ├──  90
│   │   │   │   │   └──  2b9a14e498bfedff37671ff21bfa553fcd0b81
│   │   │   │   ├──  98
│   │   │   │   │   └──  88006cc37d753f90a79897995dd6d483dc1267
│   │   │   │   ├──  aa
│   │   │   │   │   └──  ac38e5d7905f010fb309929677f2afdf0957a5
│   │   │   │   ├──  ab
│   │   │   │   │   └──  6f2a6e4fc8f47b694793d90a5b2f0be29647ab
│   │   │   │   ├──  af
│   │   │   │   │   └──  3ad128122dfe2a143df207c66884380fd888d4
│   │   │   │   ├──  db
│   │   │   │   │   └──  bab4ddb28fe56d44af062d253ba9f0c66a97d9
│   │   │   │   ├──  f1
│   │   │   │   │   └──  161c547d4759c98091f8a0ad184e15134df0dd
│   │   │   │   ├──  f7
│   │   │   │   │   └──  cee19d0ab288e2014ab93e27715062a3b4f421
│   │   │   │   ├──  fa
│   │   │   │   │   └──  65a9afca3942dc721d6e451c028f826fbcb82d
│   │   │   │   ├──  info
│   │   │   │   └──  pack
│   │   │   ├──  refs
│   │   │   │   ├──  heads
│   │   │   │   │   └──  main
│   │   │   │   ├──  remotes
│   │   │   │   │   └──  origin
│   │   │   │   │       └──  main
│   │   │   │   └──  tags
│   │   │   ├──  COMMIT_EDITMSG
│   │   │   ├──  config
│   │   │   ├──  description
│   │   │   ├──  FETCH_HEAD
│   │   │   ├──  HEAD
│   │   │   └──  index
│   │   ├──  .yarn
│   │   │   └──  install-state.gz
│   │   ├──  node_modules
│   │   │   ├──  .cache
│   │   │   │   └──  prettier
│   │   │   └──  .yarn-state.yml
│   │   ├──  .editorconfig
│   │   ├──  .gitattributes
│   │   ├──  .gitignore
│   │   ├──  package.json
│   │   ├──  README.md
│   │   ├──  sleep.js
│   │   └──  yarn.lock
│   └──  .DS_Store
├──  .DS_Store
├──  .gitignore
├──  package.json
└──  README.md
</pre>