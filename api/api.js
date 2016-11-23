'use strict';

const MEMBERS_TO_GENERATE = 10;
const MAX_TRANSACTION_COST = 150;
const MIN_TRANSACTION_COST = 1;
const MAX_TRANSACTION_HISTORY = 10;
const PAST_YEAR_PURCHASE_DATA = 10;

let faker = require('faker');

function seedRandomMemberData(members){
    for (var i = 0; i < MEMBERS_TO_GENERATE; i++) {
        members.push({ 
            id: i, 
            name: faker.name.findName(),
            email: faker.internet.email(),
        });
    }

    return members;
}

function seedRandomTransactionData(transactions){
    for (var i = 0; i < MEMBERS_TO_GENERATE; i++) {
        let transaction = { 
            id: faker.random.uuid(),
            memberId: i,
            transactions: []
        };

        transactions.push(transaction);
    }

    return transactions;
}

function seedRandomTransactionHistoryData(transactions){
    transactions.forEach(transaction => {
        for (var i = 0; i < Math.floor(Math.random() * MAX_TRANSACTION_HISTORY) + 1; i++) {
            transaction.transactions.push({
                item: faker.lorem.words(),
                cost: Math.floor(Math.random() * MAX_TRANSACTION_COST) + MIN_TRANSACTION_COST,
                date: faker.date.past(5)
            });
        };
    });

    return transactions;
}

function seedRandomPoliciesData(policies){
    let usedMemberIds = [];

    for (var i = 0; i < Math.floor(Math.random() * MEMBERS_TO_GENERATE) + 1; i++) {
        let memberID = Math.floor((Math.random() * MEMBERS_TO_GENERATE) + 1);

        if(usedMemberIds.indexOf(memberID) === -1){
            policies.push({
                id: i,
                memberID: memberID,
                hasPolicy: true,
                date: faker.date.past(PAST_YEAR_PURCHASE_DATA)
            });

            usedMemberIds.push(memberID);
        }
    }

    return policies;
}

function seedRandomLegalData(purchases){
    let usedMemberIds = [];

    for (var i = 0; i < Math.floor(Math.random() * MEMBERS_TO_GENERATE) + 1; i++) {
        let memberID = Math.floor((Math.random() * MEMBERS_TO_GENERATE) + 1);

        if(usedMemberIds.indexOf(memberID) === -1){
            purchases.push({
                id: i,
                memberID: memberID,
                transactions: []
            });

            usedMemberIds.push(memberID);
        }
    }

    return purchases;
}

function seedRandomLegalPurachseData(purchases){
    purchases.forEach(purchases => {
        for (var i = 0; i < Math.floor(Math.random() * MEMBERS_TO_GENERATE) + 1; i++) {
            purchases.transactions.push({
                item: faker.lorem.words(),
                cost: Math.floor(Math.random() * MAX_TRANSACTION_COST) + MIN_TRANSACTION_COST,
                date: faker.date.past(PAST_YEAR_PURCHASE_DATA)
            });
        };
    });

    return purchases;
}

function seedRandomFuneralData(funerals){
    let usedMemberIds = [];

    for (var i = 0; i < Math.floor(Math.random() * MEMBERS_TO_GENERATE) + 1; i++) {
        let memberID = Math.floor((Math.random() * MEMBERS_TO_GENERATE) + 1);

        if(usedMemberIds.indexOf(memberID) === -1){
            funerals.push({
                id: i,
                memberID: memberID,
                transactions: {
                    date: faker.date.past(PAST_YEAR_PURCHASE_DATA),
                },
                prepaid: Math.random() >= 0.5
            });

            usedMemberIds.push(memberID);
        }
    }

    return funerals;
}

module.exports = function() {
    let data = { 
        members: [],
        transactions: [],
        policies: [],
        legal: [],
        funerals: []
    }

    data.members = seedRandomMemberData(data.members);

    data.transactions = seedRandomTransactionData(data.transactions);
    data.transactions = seedRandomTransactionHistoryData(data.transactions);

    data.policies = seedRandomPoliciesData(data.policies);
    
    data.legal = seedRandomLegalData(data.legal);
    data.legal = seedRandomLegalPurachseData(data.legal);

    data.funerals = seedRandomFuneralData(data.funerals);
    
    return data;
}