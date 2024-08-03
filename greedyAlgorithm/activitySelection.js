//Problem:
// there are n number of activities with their start and end times, a person can do only one work at a time, find meximum number of activities performed by a person
//Activities should be sorted according to end time.

//solution => activities shold not be overlap, means one's end and other start should not be to far, when 1st end then other should be start
// as greedy choose then activity which end completed
//1st sort on the basis on end time
//Start time >= end time of next activity
