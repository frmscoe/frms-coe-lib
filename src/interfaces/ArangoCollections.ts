const schema = {
  transactions: {
    pacs008: 'transactionHistoryPacs008',
    pacs002: 'transactionHistoryPacs002',
    pain001: 'transactionHistoryPain001',
    transactions: 'transactions',
  },
  pseudonyms: {
    self: 'pseudonyms',
    accounts: 'accounts',
    account_holder: 'account_holder',
    entities: 'entities',
    transactionRelationship: 'transactionRelationship',
  },
  networkMap: {
    netConfig: 'networkConfiguration',
  },
  config: {
    self: 'configuration',
    typologyExpression: 'typologyExpression',
  },
};
const { transactions, pseudonyms, networkMap, config } = schema;
const dbTransactions = Object.freeze(transactions);
const dbPseudonyms = Object.freeze(pseudonyms);
const dbConfiguration = Object.freeze(config);
const dbNetworkMap = Object.freeze(networkMap);
export { dbTransactions, dbPseudonyms, dbConfiguration, dbNetworkMap };
