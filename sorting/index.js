const studentDetails = [
    {
        name : "Anand",
        science : 80,
        maths : 70
    },
    {
        name : "Anoop",
        science: 88,
        maths : 90
    },
    {
        name : "Ram",
        science : 90,
        maths : 60
    },
    {
        name : "Sita",
        science : 60,
        maths : 90
    },
    {
        name : "Arjun",
        science : 100,
        maths : 80
    }
];

function customComparator(a,b){
    var sumA = getTotalMarks(a)
    var sumB = getTotalMarks(b)
    if(sumA==sumB){
        return a.maths - b.maths
    }else{
        return sumA-sumB
    }
}

function getTotalMarks(element){
    return element.science+ element.maths
}

var sortedArray = studentDetails.sort(customComparator)

console.log(JSON.stringify(sortedArray,null,4))