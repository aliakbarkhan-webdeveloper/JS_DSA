//Problem
//maximize the profit, one job can be schedule at a time, each job has a deadline

//solution to sequence all jobs according to profit
// function jobSequence() {
//   const jobs = [
//     { id: 1, deadline: 4, profit: 20 },
//     { id: 2, deadline: 1, profit: 10 },
//     { id: 3, deadline: 1, profit: 40 },
//     { id: 4, deadline: 1, profit: 30 },
//   ];
//   jobs.sort((a, b) => b.profit - a.profit)||b.deadline-a.deadline;
//   console.log(jobs);
//   const result=[];
//   const deadlineMap=new Map();
//   for (const job of jobs) {
//     for (let i = job.deadline; i >0; i--) {

//         deadlineMap.set(i,true)
//         result.push(job)
//         break
//     }
//   }
//   return result
// }

// console.log(jobSequence());

//solution to get get maximum profit from minimum jobs
function jobSequence() {
  const jobs = [
    { id: 1, deadline: 4, profit: 20 },
    { id: 2, deadline: 1, profit: 10 },
    { id: 3, deadline: 1, profit: 40 },
    { id: 4, deadline: 1, profit: 30 },
  ];
  jobs.sort((a, b) => b.profit - a.profit) || b.deadline - a.deadline;
  console.log(jobs);

  const minJobs = [];
  let maxProfit = 0;
  for (const job of jobs) {
    if (
      minJobs.length === 0 ||
      job.deadline > minJobs[minJobs.length - 1].deadline
    ) {
      minJobs.push(job);
      maxProfit += job.profit;
    }
  }
  return { maxProfit, minJobs };
}
let result = jobSequence();
console.log(
  `the maximum profit is ${
    result.maxProfit
  } by doing minimum job: ${result.minJobs.map((job) => job.id)} jobs`
);
