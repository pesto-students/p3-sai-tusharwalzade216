/**
 * @function findTownJudge finds a possible judge in the town
 * @summary Time Complexity - O(n), Space Complexity - O(n+1)
 * @param {Number} n number of persons
 * @param {Array<Array<Number>>} trust a 2-D array of edges
 * @returns a node which can possibly be judge
 */
function findTownJudge(n, trust) {
    if (!trust.length && n === 1) return 1;
    if (trust.length === 1) return trust[0][1];
    if (n < 1 || n > 1000) throw new Error("Invalid number of persons passed!");
    if (trust.length > 104) throw new Error("Trust size exceeded!");
    if (trust.every(arr => arr[0] != arr[1])) throw new Error("Trust person can't be himself");

    const totalTrust = Array(n + 1).fill(0);

    for (let [person, trustPerson] of trust) {
        // considering that person isn't a judge
        totalTrust[person]--;
        // person trusts another person next to it
        totalTrust[trustPerson]++;
    }

    for (let i = 0; i < totalTrust.length; i++) {
        // the last person will be most trusted
        if (totalTrust[i] == n - 1) return i;
    }

    return -1;
}

function test() {
    try {
        const n = 2, trust = [[1, 2]];
        console.log(findTownJudge(n, trust));       //  2

        const n2 = 3, trust2 = [[1, 3], [2, 3]];
        console.log(findTownJudge(n2, trust2));     //  3

        const n3 = 3, trust3 = [[1, 3], [2, 3], [3, 1]];
        console.log(findTownJudge(n3, trust3));     //  -1

        const n4 = 1, trust4 = [];
        console.log(findTownJudge(n4, trust4));     //  1

        const n5 = 1, trust5 = [[1, 1]];
        console.log(findTownJudge(n5, trust5));     //  Error: Trust person can't be himself

    } catch (error) {
        console.error(error);
    }
}
test();