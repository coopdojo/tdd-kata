### Co-op Digital Coderdojo - Kata #1
#### Started: Monday 28th November 2016 - Ended: Ongoing

##### Problem: Eligibility to vote

###### Problem: 
The Co-op is a democratic organisation, which means Co-op members may have the ability to vote in our annual AGM at the end of each year! 

Members ability to vote is decided by a series of constraints based on their interactions and purchase history with the Co-op. 

Members eligibility is decided on the last day of every year, they are considered eligible if any of the below 5 constraints are true.

###### Constraints:
1. A member has spent more than £250 at the Co-op
2. A member has taken out a Co-op insurance policy within the last 12 months prior to the calculation date
3. A member has made any purchases from Co-op legal services within the last 12 months prior to the calculation date
4. A member has made a pre-paid funeral plan purchase from Co-op funerals within the last 12 months prior to the calculation date

(ps, these rules are totally fictional)

###### Task: 
You need to build a program which consumes several fake API endpoints and use their data to calculate members eligibility to vote within the year the calculation is running within and finally generating the following table in CSV format as below:

```
Member ID,Total of all members transactions,Percentage of member contribution,Eligible to vote
1,£400,97.56%,true
2,£10,2.44%,false
```

###### Launching the mock API: 

The mock API provided is a fake RESTful JSON server with several available resources. You'll need Node.js 4+ to run it.

```shell
$ git clone git@github.com:coopdojo/tdd-kata.git && cd tdd-kata
$ npm install
$ npm start
```

The API will launch on http://localhost:3000 with these available resources:

* http://localhost:3000/members
* http://localhost:3000/transactions
* http://localhost:3000/policies
* http://localhost:3000/legal
* http://localhost:3000/funerals

Good luck! 
