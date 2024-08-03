//Problem:
// there are n number of activities with their start and end times, a person can do only one work at a time, find meximum number of activities performed by a person
//Activities should be sorted according to end time.

//solution => activities shold not be overlap, means one's end and other start should not be to far, when 1st end then other should be start
// as greedy choose then activity which end completed
//1st sort on the basis on end time
//Start time >= end time of next activity

function activity(str) {

    //at index 0 of start is representing of starting point of first activity and the oth index of end shows the ending point of that activity
  let start = [1, 3, 0, 5, 8, 5];  //staring point of activities
  let end = [2, 4, 6, 7, 9, 9];//ending point of activities, end time is sorted

  //maximum activities should be done at a time

  let maxActivity=0;
  let ans=[]; // activity done will be stored in this array


  //1st activity
  maxActivity=1;//// update the maxActivity from 0 to 1

}
