import {Injectable} from '@angular/core';
import {Dispute} from '../models/disputes';
import {_} from 'underscore';

@Injectable()
export class DisputeService {
    private currentDisputes: Dispute[];
    private disputes = [
        {
            "disputeid": "d1",
            "createdOn": new Date(2017, 10, 1),
            "createdBy": "Adhir",
            "status": "RESOLVED",
            "transaction": "tr4",
            "customerid": "33445566",
            "disputeamount": 2000
        },
        {
            "disputeid": "d2",
            "createdOn": new Date(2017, 10, 11),
            "createdBy": "Adhir",
            "status": "RESOLVED",
            "transaction": "tr42",
            "customerid": "33445566",
            "disputeamount": 200
        },
        {
            "disputeid": "d3",
            "createdOn": new Date(2017, 10, 14),
            "createdBy": "Adhir",
            "status": "RESOLVED",
            "transaction": "tr56",
            "customerid": "33445566",
            "disputeamount": 20
        },
        {
            "disputeid": "d4",
            "createdOn": new Date(2017, 10, 24),
            "createdBy": "Adhir",
            "status": "RESOLVED",
            "transaction": "tr77",
            "customerid": "33445566",
            "disputeamount": 212
        },
        {
            "disputeid": "d5",
            "createdOn": new Date(2017, 10, 30),
            "createdBy": "Adhir",
            "status": "RESOLVED",
            "transaction": "tr88",
            "customerid": "33445566",
            "disputeamount": 223
        },
        {
            "disputeid": "d6",
            "createdOn": new Date(2017, 12, 11),
            "createdBy": "Adhir",
            "status": "OPEN",
            "transaction": "tr4",
            "customerid": "33445566",
            "disputeamount": 53400
        }
      ];

      public getDisputes(page: number) : Dispute[] {
          let disputesPage = [];
          let beginRange = 0;
          let endRange = 4;
          let pageSize = 4;
          if (page !== undefined) {
              beginRange = page > 1 ? page * pageSize : page - 1;
              endRange = beginRange + pageSize;
              if (endRange > this.disputes.length) {
                  endRange = this.disputes.length - 1;
              }
          }
          for (let i = beginRange; i < pageSize; i++) {
            disputesPage.push(this.disputes[i]);
          }
          this.currentDisputes = disputesPage;
          return disputesPage;
      }

      public addDispute(dispute: Dispute) {
        this.disputes.push(dispute);
      }

      public resolveDispute(disputeId: string) {
        _.map(this.disputes, function(dispute) {
            if (dispute.disputeid === disputeId) {
                dispute.status = "RESOLVED";
            }
        });
      }

      public getCurrentDisputes(): Dispute[] {
        return this.currentDisputes;
      }

      public clearCurrentDisputes() {
        this.currentDisputes = new Array<Dispute>();
      }

}