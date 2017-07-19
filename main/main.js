module.exports = function main(nums) {
    var num_list=['._.   ...   ._.   ._.   ...   ._.   ._.   ._.   ._.   ._. ','|.|   ..|   ._|   ._|   |_|   |_.   |_.   ..|   |_|   |_| ','|_|   ..|   |_.   ._|   ..|   ._|   |_|   ..|   |_|   ..| '];
    var list='';
    for(let i=0;i<3;i++){
        for(let j=0;j<nums.length;j++){
            let num=parseInt(nums.charAt(j));
            list=list+num_list[i].substring(num*6,num*6+4);
        }
        list=list.substring(0,list.length-1)+'\n';
    }
    return list;
};
