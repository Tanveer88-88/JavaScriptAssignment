var mylist=["Abdul Hussain","Dilawar","Haider","Yasir"];
for(var i=0;i<mylist.length;i++)
{
    console.log(mylist[i]+", i am inviting you to have dinner with you");
}
console.log("\n"+mylist[3]+" is not able to join us on Dinner\n");
for(var i=0;i<mylist.length;i++)
{
    if(mylist[i]=="Yasir")
        {mylist[i]="Danish";}
        console.log(mylist[i]+", i am inviting you to have dinner with you")   
}