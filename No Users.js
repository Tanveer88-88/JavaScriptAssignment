var mylist=["Admin","Abdul Hussain","Dilawar","Haider","Yasir"];
if(mylist.length>0)
{
for(var i=0;i<mylist.length;i++)
{
    if(mylist[i]=="Admin")
    {
        console.log(mylist[i]+",Hello Admin");
    }
    else{
        console.log(mylist[i]+",Good Morning");
    }
} 
}
else
{
    console.log("We need to find some users!");
}

for(var i=0;i<mylist.length;i++)
{
    let temp=mylist.pop();
    console.log(temp+"removed");
} 
