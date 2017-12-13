import {Injectable} from '@angular/core';
import {Transaction} from '../models/transaction';
import {_} from 'underscore';

@Injectable()
export class TransactionService {
    private transactions = [
        {
          "trxid": "tr1", 
          "trxdate": new Date(2018, 12, 1),
          "mode": "ATM",
          "status": "COMPLETED",
          "requester": "SELF",
          "benificairy": "SELF",
          "accountno": "123456789",
          "customerid": "33445566",
          "amount": 20000
        },
        {
          "trxid": "tr2", 
          "trxdate": new Date(2018, 12, 2),
          "mode": "ATM",
          "status": "COMPLETED",
          "requester": "SELF",
          "benificairy": "SELF",
          "accountno": "123456789",
          "customerid": "33445566",
          "amount": 2000
        },
        {
          "trxid": "tr3", 
          "trxdate": new Date(2018, 12, 3),
          "mode": "ONLINE_SHOPPING",
          "status": "PENDING",
          "requester": "SELF",
          "benificairy": "AMAZON",
          "accountno": "123456789",
          "customerid": "33445566",
          "amount": 1984
        },{
          "trxid": "tr4", 
          "trxdate": new Date(2018, 12, 4), 
          "mode": "TRANSFER",
          "status": "COMPLETED",
          "requester": "SELF",
          "benificairy": "CLAY EDUCATION",
          "accountno": "123456789",
          "customerid": "33445566",
          "amount": 53400
        },
        {
          "trxid": "tr5", 
          "trxdate": new Date(2018, 12, 5),
          "mode": "CHEQUE",
          "status": "COMPLETED",
          "requester": "SELF",
          "benificairy": "BRIGADE DEVELOPERS",
          "accountno": "123456789",
          "customerid": "33445566",
          "amount": 200000
        },
        {
          "trxid": "tr6", 
          "trxdate": new Date(2018, 12, 6),
          "mode": "UPI",
          "status": "COMPLETED",
          "requester": "SELF",
          "benificairy": "BARRELS WINES",
          "accountno": "123456789",
          "customerid": "33445566",
          "amount": 200
        },
        {
          "trxid": "tr6_2", 
          "trxdate": new Date(2018, 12, 6),
          "mode": "UPI",
          "status": "COMPLETED",
          "requester": "SELF",
          "benificairy": "BARRERLS WINES",
          "accountno": "123456789",
          "customerid": "33445566",
          "amount": 200
        },
        {
          "trxid": "tr7", 
          "trxdate": new Date(2018, 12, 7),
          "mode": "ONLINE",
          "status": "COMPLETED",
          "requester": "SELF",
          "benificairy": "FLIPKART",
          "accountno": "123456789",
          "customerid": "33445566",
          "amount": 23000
        },
        {
          "trxid": "tr8", 
          "trxdate": new Date(2018, 12, 8),
          "mode": "PAYTM",
          "status": "COMPLETED",
          "requester": "SELF",
          "benificairy": "BESCOM",
          "accountno": "123456789",
          "customerid": "33445566",
          "amount": 778
        },
        {
          "trxid": "tr8_2", 
          "trxdate": new Date(2018, 12, 8),
          "mode": "PAYTM",
          "status": "COMPLETED",
          "requester": "SELF",
          "benificairy": "AIRTEL",
          "accountno": "123456789",
          "customerid": "33445566",
          "amount": 447
        },
        {
          "trxid": "tr9", 
          "trxdate": new Date(2018, 12, 1),
          "mode": "POS",
          "status": "COMPLETED",
          "requester": "SELF",
          "benificairy": "TOIT BAR",
          "accountno": "123456789",
          "customerid": "33445566",
          "amount": 2345
        },
        {
          "trxid": "tr9_2", 
          "trxdate": new Date(2018, 12, 1),
          "mode": "POS",
          "status": "COMPLETED",
          "requester": "SELF",
          "benificairy": "TOIT BAR",
          "accountno": "123456789",
          "customerid": "33445566",
          "amount": 2345
        }
      ]

      public getTransactions(page: number): Transaction[] {
        let trxnPage = [];
        let beginRange = 0;
        let endRange = 4;
        let pageSize = 4;
        console.log("passed page", page);
        if (page !== undefined) {
            beginRange = page > 1 ? page * pageSize : page - 1;
            endRange = beginRange + pageSize;
            if (endRange > this.transactions.length) {
                endRange = this.transactions.length - 1;
            }
        }
        for (let i = beginRange; i < pageSize; i++) {
          console.log("push >> ", this.transactions[i]);
          trxnPage.push(this.transactions[i]);
        }
          return this.transactions;
      }

      public addTransaction(transaction: Transaction) {

      }

      public getTransaction(trxId: string): Transaction {
          let trxn: Transaction;
        _.map(this.transactions, function(trx) {
            if (trx.trxid === trxId) {
                
            }
        });
        return trxn;
      }

}