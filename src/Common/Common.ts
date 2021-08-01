
/** ローカル環境 */
const isLocal = true;
/** ローカルドメインURL */
const DomainUrlForLocal = 'http://localhost:8080';
/** 本番ドメインURL */
const DomainUrlForLive = 'http://xxx';

export const DomainUrl =
    isLocal
        ? DomainUrlForLocal
        : DomainUrlForLive;