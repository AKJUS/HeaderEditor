---
nav:
  title: Guide
  order: 1
group:
  title: Introduction
  order: 1
title: Setup
order: 1
---

## Install

Please choose a different installation method depending on your browser:

| Browser | Installation |
| --- | --- |
| ![Firefox Logo](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/73.0.0/firefox/firefox_16x16.png) Firefox | [Mozilla Add-on](https://addons.mozilla.org/en-US/firefox/addon/header-editor/) or our [self-distributed version](https://github.com/FirefoxBar/HeaderEditor/releases) |
| ![Chrome Logo](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/73.0.0/chrome/chrome_16x16.png) Chrome | [Chrome Web Store](https://chrome.google.com/webstore/detail/header-editor/eningockdidmgiojffjmkdblpjocbhgh) |
| ![Edge Logo](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/73.0.0/edge/edge_16x16.png) Edge(Chromium) | [Edge Addons](https://microsoftedge.microsoft.com/addons/detail/header-editor/afopnekiinpekooejpchnkgfffaeceko) |

## Features Comparison

The features of the full version (Header Editor) and the lite version (Header Editor Lite) are different as follows:

* Firefox browser

| Feature | Full | Lite |
| --- | --- | --- |
| Basic functions | ✅ | ✅ |
| DNR mode | ✅ | ✅ |
| Rules - Exclude | ✅ | ✅ |
| Custom functions | ✅ | ❌ |
| Modify response body | ✅ | ❌ |

* Chrome/Edge browser

| Feature | Full | Lite |
| --- | --- | --- |
| Basic functions | ✅ | ✅ |
| DNR mode | ❌ | ✅ |
| Rules - Exclude | ✅ | ❌ |
| Custom functions | ✅ | ❌ |
| Modify response body | ❌ | ❌ |

Notes:
* The "exclude" for Chrome/Edge browser will be supported in other ways in subsequent versions, but they not be completely consistent with the current support methods, and manual migration may be required.
* If the corresponding feature is not supported, **the entire rule** will not take effect, but will still be retained. You can wait for subsequent versions to support it, or manually migrate to other browsers through the "Import and Export".

## Basic usage

* Click the HE icon in the upper right corner of your browser to open the HE Management Panel
* Create a new rule: Click the Add button in the lower right corner, fill in the rules, and save.
* Alternatively, you can download the rules of others in "Import and Export".

## Install the full version in Chrome

* Download the latest installation package (crx format) from [this address](https://github.com/FirefoxBar/HeaderEditor/issues/286)
* Open [chrome://extensions/](chrome://extensions/)
* Enable "Developer Mode"
* Drag the downloaded crx file to the extension page

## Migrate from other similar extensions

We provide a small tool that can help you migrate from other similar extensions to Header Editor: [migrate-to-he.firefoxcn.net](https://migrate-to-he.firefoxcn.net/index_en.html)
