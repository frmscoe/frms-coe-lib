export const pain001Schema = {
  $id: 'pain001Schema',
  type: 'object',
  properties: {
    TxTp: {
      type: 'string',
    },
    CstmrCdtTrfInitn: {
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
            NbOfTxs: {
              type: 'integer',
            },
            InitgPty: {
              type: 'object',
              properties: {
                Nm: {
                  type: 'string',
                },
                Id: {
                  type: 'object',
                  properties: {
                    PrvtId: {
                      type: 'object',
                      properties: {
                        DtAndPlcOfBirth: {
                          type: 'object',
                          properties: {
                            BirthDt: {
                              type: 'string',
                            },
                            CityOfBirth: {
                              type: 'string',
                            },
                            CtryOfBirth: {
                              type: 'string',
                            },
                          },
                          required: ['BirthDt', 'CityOfBirth', 'CtryOfBirth'],
                        },
                        Othr: {
                          type: 'object',
                          properties: {
                            Id: {
                              type: 'string',
                            },
                            SchmeNm: {
                              type: 'object',
                              properties: {
                                Prtry: {
                                  type: 'string',
                                },
                              },
                              required: ['Prtry'],
                            },
                          },
                          required: ['Id', 'SchmeNm'],
                        },
                      },
                      required: ['DtAndPlcOfBirth', 'Othr'],
                    },
                  },
                  required: ['PrvtId'],
                },
                CtctDtls: {
                  type: 'object',
                  properties: {
                    MobNb: {
                      type: 'string',
                    },
                  },
                  required: ['MobNb'],
                },
              },
              required: ['Nm', 'Id', 'CtctDtls'],
            },
          },
          required: ['MsgId', 'CreDtTm', 'NbOfTxs', 'InitgPty'],
        },
        PmtInf: {
          type: 'object',
          properties: {
            PmtInfId: {
              type: 'string',
            },
            PmtMtd: {
              type: 'string',
            },
            ReqdAdvcTp: {
              type: 'object',
              properties: {
                DbtAdvc: {
                  type: 'object',
                  properties: {
                    Cd: {
                      type: 'string',
                    },
                    Prtry: {
                      type: 'string',
                    },
                  },
                  required: ['Cd', 'Prtry'],
                },
              },
              required: ['DbtAdvc'],
            },
            ReqdExctnDt: {
              type: 'object',
              properties: {
                Dt: {
                  type: 'string',
                },
                DtTm: {
                  type: 'string',
                },
              },
              required: ['Dt', 'DtTm'],
            },
            Dbtr: {
              type: 'object',
              properties: {
                Nm: {
                  type: 'string',
                },
                Id: {
                  type: 'object',
                  properties: {
                    PrvtId: {
                      type: 'object',
                      properties: {
                        DtAndPlcOfBirth: {
                          type: 'object',
                          properties: {
                            BirthDt: {
                              type: 'string',
                            },
                            CityOfBirth: {
                              type: 'string',
                            },
                            CtryOfBirth: {
                              type: 'string',
                            },
                          },
                          required: ['BirthDt', 'CityOfBirth', 'CtryOfBirth'],
                        },
                        Othr: {
                          type: 'object',
                          properties: {
                            Id: {
                              type: 'string',
                            },
                            SchmeNm: {
                              type: 'object',
                              properties: {
                                Prtry: {
                                  type: 'string',
                                },
                              },
                              required: ['Prtry'],
                            },
                          },
                          required: ['Id', 'SchmeNm'],
                        },
                      },
                      required: ['DtAndPlcOfBirth', 'Othr'],
                    },
                  },
                  required: ['PrvtId'],
                },
                CtctDtls: {
                  type: 'object',
                  properties: {
                    MobNb: {
                      type: 'string',
                    },
                  },
                  required: ['MobNb'],
                },
              },
              required: ['Nm', 'Id', 'CtctDtls'],
            },
            DbtrAcct: {
              type: 'object',
              properties: {
                Id: {
                  type: 'object',
                  properties: {
                    Othr: {
                      type: 'object',
                      properties: {
                        Id: {
                          type: 'string',
                        },
                        SchmeNm: {
                          type: 'object',
                          properties: {
                            Prtry: {
                              type: 'string',
                            },
                          },
                          required: ['Prtry'],
                        },
                      },
                      required: ['Id', 'SchmeNm'],
                    },
                  },
                  required: ['Othr'],
                },
                Nm: {
                  type: 'string',
                },
              },
              required: ['Id', 'Nm'],
            },
            DbtrAgt: {
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
            CdtTrfTxInf: {
              type: 'object',
              properties: {
                PmtId: {
                  type: 'object',
                  properties: {
                    EndToEndId: {
                      type: 'string',
                    },
                  },
                  required: ['EndToEndId'],
                },
                PmtTpInf: {
                  type: 'object',
                  properties: {
                    CtgyPurp: {
                      type: 'object',
                      properties: {
                        Prtry: {
                          type: 'string',
                        },
                      },
                      required: ['Prtry'],
                    },
                  },
                  required: ['CtgyPurp'],
                },
                Amt: {
                  type: 'object',
                  properties: {
                    InstdAmt: {
                      type: 'object',
                      properties: {
                        Amt: {
                          type: 'object',
                          properties: {
                            Amt: {
                              type: 'number',
                            },
                            Ccy: {
                              type: 'string',
                            },
                          },
                          required: ['Amt', 'Ccy'],
                        },
                      },
                      required: ['Amt'],
                    },
                    EqvtAmt: {
                      type: 'object',
                      properties: {
                        Amt: {
                          type: 'object',
                          properties: {
                            Amt: {
                              type: 'number',
                            },
                            Ccy: {
                              type: 'string',
                            },
                          },
                          required: ['Amt', 'Ccy'],
                        },
                        CcyOfTrf: {
                          type: 'string',
                        },
                      },
                      required: ['Amt', 'CcyOfTrf'],
                    },
                  },
                  required: ['InstdAmt', 'EqvtAmt'],
                },
                ChrgBr: {
                  type: 'string',
                },
                CdtrAgt: {
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
                Cdtr: {
                  type: 'object',
                  properties: {
                    Nm: {
                      type: 'string',
                    },
                    Id: {
                      type: 'object',
                      properties: {
                        PrvtId: {
                          type: 'object',
                          properties: {
                            DtAndPlcOfBirth: {
                              type: 'object',
                              properties: {
                                BirthDt: {
                                  type: 'string',
                                },
                                CityOfBirth: {
                                  type: 'string',
                                },
                                CtryOfBirth: {
                                  type: 'string',
                                },
                              },
                              required: ['BirthDt', 'CityOfBirth', 'CtryOfBirth'],
                            },
                            Othr: {
                              type: 'object',
                              properties: {
                                Id: {
                                  type: 'string',
                                },
                                SchmeNm: {
                                  type: 'object',
                                  properties: {
                                    Prtry: {
                                      type: 'string',
                                    },
                                  },
                                  required: ['Prtry'],
                                },
                              },
                              required: ['Id', 'SchmeNm'],
                            },
                          },
                          required: ['DtAndPlcOfBirth', 'Othr'],
                        },
                      },
                      required: ['PrvtId'],
                    },
                    CtctDtls: {
                      type: 'object',
                      properties: {
                        MobNb: {
                          type: 'string',
                        },
                      },
                      required: ['MobNb'],
                    },
                  },
                  required: ['Nm', 'Id', 'CtctDtls'],
                },
                CdtrAcct: {
                  type: 'object',
                  properties: {
                    Id: {
                      type: 'object',
                      properties: {
                        Othr: {
                          type: 'object',
                          properties: {
                            Id: {
                              type: 'string',
                            },
                            SchmeNm: {
                              type: 'object',
                              properties: {
                                Prtry: {
                                  type: 'string',
                                },
                              },
                              required: ['Prtry'],
                            },
                          },
                          required: ['Id', 'SchmeNm'],
                        },
                      },
                      required: ['Othr'],
                    },
                    Nm: {
                      type: 'string',
                    },
                  },
                  required: ['Id', 'Nm'],
                },
                Purp: {
                  type: 'object',
                  properties: {
                    Cd: {
                      type: 'string',
                    },
                  },
                  required: ['Cd'],
                },
                RgltryRptg: {
                  type: 'object',
                  properties: {
                    Dtls: {
                      type: 'object',
                      properties: {
                        Tp: {
                          type: 'string',
                        },
                        Cd: {
                          type: 'string',
                        },
                      },
                      required: ['Tp', 'Cd'],
                    },
                  },
                  required: ['Dtls'],
                },
                RmtInf: {
                  type: 'object',
                  properties: {
                    Ustrd: {
                      type: 'string',
                    },
                  },
                  required: ['Ustrd'],
                },
                SplmtryData: {
                  type: 'object',
                  properties: {
                    Envlp: {
                      type: 'object',
                      properties: {
                        Doc: {
                          type: 'object',
                          properties: {
                            Dbtr: {
                              type: 'object',
                              properties: {
                                FrstNm: {
                                  type: 'string',
                                },
                                MddlNm: {
                                  type: 'string',
                                },
                                LastNm: {
                                  type: 'string',
                                },
                                MrchntClssfctnCd: {
                                  type: 'string',
                                },
                              },
                              required: ['FrstNm', 'MddlNm', 'LastNm', 'MrchntClssfctnCd'],
                            },
                            Cdtr: {
                              type: 'object',
                              properties: {
                                FrstNm: {
                                  type: 'string',
                                },
                                MddlNm: {
                                  type: 'string',
                                },
                                LastNm: {
                                  type: 'string',
                                },
                                MrchntClssfctnCd: {
                                  type: 'string',
                                },
                              },
                              required: ['FrstNm', 'MddlNm', 'LastNm', 'MrchntClssfctnCd'],
                            },
                            DbtrFinSvcsPrvdrFees: {
                              type: 'object',
                              properties: {
                                Ccy: {
                                  type: 'string',
                                },
                                Amt: {
                                  type: 'integer',
                                },
                              },
                              required: ['Ccy', 'Amt'],
                            },
                            Xprtn: {
                              type: 'string',
                            },
                          },
                          required: ['Dbtr', 'Cdtr', 'DbtrFinSvcsPrvdrFees', 'Xprtn'],
                        },
                      },
                      required: ['Doc'],
                    },
                  },
                  required: ['Envlp'],
                },
              },
              required: [
                'PmtId',
                'PmtTpInf',
                'Amt',
                'ChrgBr',
                'CdtrAgt',
                'Cdtr',
                'CdtrAcct',
                'Purp',
                'RgltryRptg',
                'RmtInf',
                'SplmtryData',
              ],
            },
          },
          required: ['PmtInfId', 'PmtMtd', 'ReqdAdvcTp', 'ReqdExctnDt', 'Dbtr', 'DbtrAcct', 'DbtrAgt', 'CdtTrfTxInf'],
        },
        SplmtryData: {
          type: 'object',
          properties: {
            Envlp: {
              type: 'object',
              properties: {
                Doc: {
                  type: 'object',
                  properties: {
                    InitgPty: {
                      type: 'object',
                      properties: {
                        InitrTp: {
                          type: 'string',
                        },
                        Glctn: {
                          type: 'object',
                          properties: {
                            Lat: {
                              type: 'string',
                            },
                            Long: {
                              type: 'string',
                            },
                          },
                          required: ['Lat', 'Long'],
                        },
                      },
                      required: ['InitrTp', 'Glctn'],
                    },
                  },
                  required: ['InitgPty'],
                },
              },
              required: ['Doc'],
            },
          },
          required: ['Envlp'],
        },
      },
      required: ['GrpHdr', 'PmtInf', 'SplmtryData'],
    },
  },
  required: ['TxTp', 'CstmrCdtTrfInitn'],
};
export const pain001SchemaResponse = {
  '2xx': {
    type: 'object',
    properties: {
      message: {
        type: 'string',
      },
      data: { $ref: 'pain001Schema#' },
    },
    required: ['message', 'data'],
  },
};
