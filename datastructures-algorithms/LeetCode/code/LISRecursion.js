// https://www.kancloud.cn/alex_wsc/dataalg/1853989
// 时间复杂度 O(2n)

function getLTS(arr) {
    
    let max = 1;
    LTS(arr, arr.length)


    function LTS(arr, n) {
        if (n <= 1) {
            return n;
        }

        let result = 0, maxEndingHere = 1; //包含当前最后一个元素的情况下，最长的上升子序列长度。

        // 从头遍历数组，递归求出以每个点为结尾的子数组中最长上升序列的长度
        for (let i = 1; i < n; i++) {

            // 前i个元素上升序列的最大长度
            result = LTS(arr, i);

            if (nums[i - 1] < nums[n - 1] && (result + 1) > maxEndingHere) {
                maxEndingHere = result + 1;
            }
        }

        if (max < maxEndingHere) {
            max = maxEndingHere;
        }

        return maxEndingHere;
    }

}