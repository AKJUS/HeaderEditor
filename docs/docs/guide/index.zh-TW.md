---
nav:
  title: 指南
  order: 1
group:
  title: 介紹
  order: 1
title: 安裝
order: 1
---

## 安裝

请根据您的平台不同，选择不同的安装方式：

| 浏览器 | 安装 |
| --- | --- |
| ![Firefox Logo](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/73.0.0/firefox/firefox_16x16.png) Firefox | [Mozilla Add-on](https://addons.mozilla.org/en-US/firefox/addon/header-editor/) 或 我们的[自分发版本](https://github.com/FirefoxBar/HeaderEditor/releases) |
| ![Chrome Logo](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/73.0.0/chrome/chrome_16x16.png) Chrome | [Chrome Web Store](https://chrome.google.com/webstore/detail/header-editor/eningockdidmgiojffjmkdblpjocbhgh) |
| ![Edge Logo](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/73.0.0/edge/edge_16x16.png) Edge(Chromium) | [Edge Addons](https://microsoftedge.microsoft.com/addons/detail/header-editor/afopnekiinpekooejpchnkgfffaeceko) |

## 功能比較

完整版（Header Editor）和精簡版（Header Editor Lite）的功能不同如下：

* Firefox 瀏覽器

| 功能 | 完整版 |精簡版 |
| --- | --- | --- |
| 基本功能 | ✅ | ✅ |
| DNR模式| ✅ | ✅ |
| 規則 - 排除 | ✅ | ✅ |
| 自訂函數 | ✅ | ❌ |
| 修改回應主體 | ✅ | ❌ |

* Chrome/Edge 瀏覽器

| 功能 | 完整版 |精簡版 |
| --- | --- | --- |
| 基本功能 | ✅ | ✅ |
| DNR模式 | ❌ | ✅ |
| 規則 - 排除 | ✅ | ❌ |
| 自訂函數 | ✅ | ❌ |
| 修改回應主體 | ❌ | ❌ |

筆記：
* Chrome/Edge 瀏覽器的「排除」功能將在後續版本中以其他方式支持，但與目前的支援方式不完全一致，可能需要手動遷移。
* 如果不支援相應的功能，**整個規則**將不會生效，但仍會保留。您可以等待後續版本支持，或透過「匯入匯出」手動遷移到其他瀏覽器。

## 基本使用

* 点击右上角的HE图标，打开HE管理面板
* 在规则界面新建规则：点击右下角的添加按钮，填写规则内容后，保存即可。
* 或者，您可以在“导入和导出”中下载他人的规则。

## 在 Chrome 中安裝完整版本

* 從 [此網址](https://github.com/FirefoxBar/HeaderEditor/issues/286) 下載最新安裝套件（crx 格式）
* 開啟 [chrome://extensions/](chrome://extensions/)
* 啟用“開發者模式”
* 將下載的 crx 檔案拖曳到擴充功能頁面

## 從其他類似擴展遷移

我們提供了一個小工具，可以協助你從一些類似的擴展，快速遷移到 Header Editor: [migrate-to-he.firefoxcn.net](https://migrate-to-he.firefoxcn.net/index_zh_tw.html)
