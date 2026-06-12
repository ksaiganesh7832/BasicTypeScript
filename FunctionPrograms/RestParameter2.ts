function subjectMarks(...marks: number[])
{
    let h: number = 0;
    for (let sumIs of marks)
    {
        h = h+sumIs;
        
    }
    console.log(h)
}

subjectMarks(56, 13, 12)