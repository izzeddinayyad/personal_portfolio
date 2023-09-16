function sum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
};

let nums = [2,7,3,11,15];
let target =10;
console.log(sum(nums, target)); 
