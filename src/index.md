---
layout: home
description: "UnSass is a suite of small, dependency-free Sass utilities — breakpoint, css, em, rem, selector, string, types and var. Install only what you need."

hero:
  name: "by Front Factory"
  text: "Standalone Sass utilities, à la carte."
  tagline: "Modular. Validated. Dependency-free."
  command:
    - label: Breakpoint
      value: npm install @unsass/breakpoint
    - label: CSS
      value: npm install @unsass/css
    - label: Em
      value: npm install @unsass/em
    - label: Rem
      value: npm install @unsass/rem
    - label: Selector
      value: npm install @unsass/selector
  actions:
    - theme: brand
      text: Get Started
      link: /guide/what-is-unsass
    - theme: alt
      text: GitHub
      link: https://github.com/unsass

features:
  - icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" opacity="0.4"/><rect x="6" y="7.5" width="12" height="9" rx="1.5" opacity="0.7"/><rect x="9.5" y="10.5" width="5" height="3" rx="1"/></svg>'
    title: Breakpoint
    details: Centralize named breakpoints and apply them with composable min, max, only and between mixins.
    link: /breakpoint/getting-started
    linkText: Read the docs
  - icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M8 4c-2 0-3 1-3 3v2c0 1-1 2-2 2 1 0 2 1 2 2v2c0 2 1 3 3 3"/><path d="M16 4c2 0 3 1 3 3v2c0 1 1 2 2 2-1 0-2 1-2 2v2c0 2-1 3-3 3"/></svg>'
    title: CSS
    details: Emit declarations and selectors consistently, with first-class support for custom properties.
    link: /css/getting-started
    linkText: Read the docs
  - icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><rect x="8" y="8" width="8" height="8" rx="1"/></svg>'
    title: Em
    details: Convert pixel values to context-relative em units, with the context explicit at every call.
    link: /em/getting-started
    linkText: Read the docs
  - icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><rect x="6" y="6" width="12" height="12" rx="1.5" opacity="0.3"/><rect x="9" y="9" width="6" height="6" rx="1"/></svg>'
    title: Rem
    details: Convert pixel values to rem units against a single, configurable document baseline.
    link: /rem/getting-started
    linkText: Read the docs
  - icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><text x="12" y="16.5" text-anchor="middle" font-family="ui-monospace,SFMono-Regular,Menlo,monospace" font-size="10" font-weight="600" fill="currentColor" stroke="none">.btn</text></svg>'
    title: Selector
    details: Build prefixed, suffixed and pseudo selectors from a single, expressive mixin.
    link: /selector/getting-started
    linkText: Read the docs
  - icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M5 17V11Q5 5 11 5M5 11H11V17H5" opacity="0.7"/><path d="M13 17V11Q13 5 19 5M13 11H19V17H13" opacity="0.7"/></svg>'
    title: String
    details: Replace, trim, test and combine strings with small, composable functions.
    link: /string/getting-started
    linkText: Read the docs
  - icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="3" opacity="0.4"/><path d="M8 12.5L11 15.5L16.5 9"/></svg>'
    title: Types
    details: Check whether a value is a number, string, color, list, map, boolean or null.
    link: /types/getting-started
    linkText: Read the docs
  - icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M8 4Q3 12 8 20" opacity="0.7"/><path d="M16 4Q21 12 16 20" opacity="0.7"/><path d="M9.5 12H11.5M12.5 12H14.5"/></svg>'
    title: Var
    details: Create var() functions with a fallback and read their name and fallback back.
    link: /var/getting-started
    linkText: Read the docs
---
