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
  - icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><text x="12" y="16.5" text-anchor="middle" font-family="ui-monospace,SFMono-Regular,Menlo,monospace" font-size="10" font-weight="600" fill="currentColor" stroke="none">&lt;-&gt;</text></svg>'
    title: Breakpoint
    details: Centralize named breakpoints and apply them with composable min, max, only and between mixins.
    link: /breakpoint/getting-started
    linkText: Read the docs
  - icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><text x="12" y="16.5" text-anchor="middle" font-family="ui-monospace,SFMono-Regular,Menlo,monospace" font-size="10" font-weight="600" fill="currentColor" stroke="none">{;}</text></svg>'
    title: CSS
    details: Emit declarations and selectors consistently, with first-class support for custom properties.
    link: /css/getting-started
    linkText: Read the docs
  - icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><text x="12" y="16.5" text-anchor="middle" font-family="ui-monospace,SFMono-Regular,Menlo,monospace" font-size="10" font-weight="600" fill="currentColor" stroke="none">1em</text></svg>'
    title: Em
    details: Convert pixel values to context-relative em units, with the context explicit at every call.
    link: /em/getting-started
    linkText: Read the docs
  - icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><text x="12" y="16.5" text-anchor="middle" font-family="ui-monospace,SFMono-Regular,Menlo,monospace" font-size="10" font-weight="600" fill="currentColor" stroke="none">1rem</text></svg>'
    title: Rem
    details: Convert pixel values to rem units against a single, configurable document baseline.
    link: /rem/getting-started
    linkText: Read the docs
  - icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><text x="12" y="16.5" text-anchor="middle" font-family="ui-monospace,SFMono-Regular,Menlo,monospace" font-size="10" font-weight="600" fill="currentColor" stroke="none">.btn</text></svg>'
    title: Selector
    details: Build prefixed, suffixed and pseudo selectors from a single, expressive mixin.
    link: /selector/getting-started
    linkText: Read the docs
  - icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><text x="12" y="16.5" text-anchor="middle" font-family="ui-monospace,SFMono-Regular,Menlo,monospace" font-size="10" font-weight="600" fill="currentColor" stroke="none">"ab"</text></svg>'
    title: String
    details: Replace, trim, test and combine strings with small, composable functions.
    link: /string/getting-started
    linkText: Read the docs
  - icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><text x="12" y="16.5" text-anchor="middle" font-family="ui-monospace,SFMono-Regular,Menlo,monospace" font-size="10" font-weight="600" fill="currentColor" stroke="none">is-*</text></svg>'
    title: Types
    details: Check whether a value is a number, string, color, list, map, boolean or null.
    link: /types/getting-started
    linkText: Read the docs
  - icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><text x="12" y="16.5" text-anchor="middle" font-family="ui-monospace,SFMono-Regular,Menlo,monospace" font-size="10" font-weight="600" fill="currentColor" stroke="none">--x</text></svg>'
    title: Var
    details: Create var() functions with a fallback and read their name and fallback back.
    link: /var/getting-started
    linkText: Read the docs
---
