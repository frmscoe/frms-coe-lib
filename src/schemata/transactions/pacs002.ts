export const pacs002Schema = {
  $id: 'pacs002Schema',
  type: 'object',
  properties: {
    TxTp: {
      type: 'string',
    },
    FIToFIPmtSts: {
      type: 'object',
      properties: {
        GrpHdr: {
          type: 'object',
          properties: {
            MsgId: {
              type: 'string',
            },
            CreDtTm: {
              type: 'string',
            },
          },
          required: ['MsgId', 'CreDtTm'],
        },
        TxInfAndSts: {
          type: 'object',
          properties: {
            OrgnlInstrId: {
              type: 'string',
            },
            OrgnlEndToEndId: {
              type: 'string',
            },
            TxSts: {
              type: 'string',
            },
            ChrgsInf: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  Amt: {
                    type: 'object',
                    properties: {
                      Amt: {
                        type: 'integer',
                      },
                      Ccy: {
                        type: 'string',
                      },
                    },
                    required: ['Amt', 'Ccy'],
                  },
                  Agt: {
                    type: 'object',
                    properties: {
                      FinInstnId: {
                        type: 'object',
                        properties: {
                          ClrSysMmbId: {
                            type: 'object',
                            properties: {
                              MmbId: {
                                type: 'string',
                              },
                            },
                            required: ['MmbId'],
                          },
                        },
                        required: ['ClrSysMmbId'],
                      },
                    },
                    required: ['FinInstnId'],
                  },
                },
                required: ['Amt', 'Agt'],
              },
            },
            AccptncDtTm: {
              type: 'string',
            },
            InstgAgt: {
              type: 'object',
              properties: {
                FinInstnId: {
                  type: 'object',
                  properties: {
                    ClrSysMmbId: {
                      type: 'object',
                      properties: {
                        MmbId: {
                          type: 'string',
                        },
                      },
                      required: ['MmbId'],
                    },
                  },
                  required: ['ClrSysMmbId'],
                },
              },
              required: ['FinInstnId'],
            },
            InstdAgt: {
              type: 'object',
              properties: {
                FinInstnId: {
                  type: 'object',
                  properties: {
                    ClrSysMmbId: {
                      type: 'object',
                      properties: {
                        MmbId: {
                          type: 'string',
                        },
                      },
                      required: ['MmbId'],
                    },
                  },
                  required: ['ClrSysMmbId'],
                },
              },
              required: ['FinInstnId'],
            },
          },
          required: ['OrgnlInstrId', 'OrgnlEndToEndId', 'TxSts', 'ChrgsInf', 'AccptncDtTm', 'InstgAgt', 'InstdAgt'],
        },
      },
      required: ['GrpHdr', 'TxInfAndSts'],
    },
  },
  required: ['TxTp', 'FIToFIPmtSts'],
};

export const pacs002SchemaResponse = {
  '2xx': {
    type: 'object',
    properties: {
      message: {
        type: 'string',
      },
      data: { $ref: 'pacs002Schema#' },
    },
    required: ['message', 'data'],
  },
};