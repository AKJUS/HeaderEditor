import { getDomain } from './utils';
import { isBasicRule } from './types';
import { IS_MATCH, TABLE_NAMES_ARR } from './constant';
import type { InitdRule, Rule, BasicRule } from './types';

export function detectRunner(rule: Rule): 'web_request' | 'dnr' {
  if (rule.isFunction) {
    return 'web_request';
  }
  if (rule.exclude) {
    return 'web_request';
  }
  return 'dnr';
}

export function initRule(rule: Rule, forceUseWebRequest = false): InitdRule {
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  const initd: InitdRule = { ...rule } as InitdRule;
  initd._runner = detectRunner(rule);
  // DNR not enable, force to web_request
  if (!ENABLE_DNR && initd._runner === 'dnr') {
    initd._runner = 'web_request';
  }
  if (initd._runner === 'web_request' || forceUseWebRequest) {
    if (initd.isFunction && ENABLE_EVAL) {
      // eslint-disable-next-line no-new-func
      initd._func = new Function('val', 'detail', initd.code) as any;
    }
    // Init regexp
    if (initd.matchType === 'regexp') {
      initd._reg = new RegExp(initd.pattern, 'g');
    }
    if (typeof initd.exclude === 'string' && initd.exclude.length > 0) {
      initd._exclude = new RegExp(initd.exclude);
    }
  }
  return initd;
}

export function createExport(arr: { [key: string]: Array<Rule | InitdRule> }) {
  const result: { [key: string]: BasicRule[] } = {};
  Object.keys(arr).forEach((k) => {
    result[k] = arr[k].map((e) => convertToBasicRule(e));
  });
  return result;
}

export function convertToRule(rule: InitdRule | Rule): Rule {
  const item = { ...rule };
  delete item._reg;
  delete item._func;
  delete item._v_key;
  return item;
}

export function convertToBasicRule(rule: InitdRule | Rule | BasicRule): BasicRule {
  if (isBasicRule(rule)) {
    return rule;
  }
  const item = convertToRule(rule) as BasicRule;
  delete item.id;
  return item;
}

export function fromJson(str: string) {
  const list: { [key: string]: Rule[] } = JSON.parse(str);
  TABLE_NAMES_ARR.forEach((e) => {
    if (list[e]) {
      list[e].map((ee: BasicRule) => {
        delete ee.id;
        return upgradeRuleFormat(ee);
      });
    }
  });
  return list;
}

export function upgradeRuleFormat(s: any) {
  if (typeof s.matchType === 'undefined') {
    s.matchType = s.type;
    delete s.type;
  }
  if (typeof s.isFunction === 'undefined') {
    s.isFunction = false;
  } else {
    s.isFunction = !!s.isFunction;
  }
  if (typeof s.enable === 'undefined') {
    s.enable = true;
  } else {
    s.enable = !!s.enable;
  }
  if ((s.ruleType === 'modifySendHeader' || s.ruleType === 'modifyReceiveHeader') && !s.isFunction) {
    s.action.name = s.action.name.toLowerCase();
  }
  return s;
}

export function isMatchUrl(rule: InitdRule, url: string): IS_MATCH {
  let result = false;
  switch (rule.matchType) {
    case 'all':
      result = true;
      break;
    case 'regexp': {
      const reg = rule._reg || new RegExp(rule.pattern, 'g');
      reg.lastIndex = 0;
      result = reg.test(url);
      break;
    }
    case 'prefix':
      result = url.indexOf(rule.pattern) === 0;
      break;
    case 'domain':
      result = getDomain(url) === rule.pattern;
      break;
    case 'url':
      result = url === rule.pattern;
      break;
    default:
      break;
  }
  if (!result) {
    return IS_MATCH.NOT_MATCH;
  }

  if (rule._exclude) {
    return rule._exclude.test(url) ? IS_MATCH.MATCH_BUT_EXCLUDE : IS_MATCH.MATCH;
  }

  return IS_MATCH.MATCH;
}
