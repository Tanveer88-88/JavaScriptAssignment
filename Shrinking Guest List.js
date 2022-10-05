var mylist=["Abdul Hussain","Dilawar","Haider","Habib","Yasir"];
    for(var i=0;i<mylist.length;i++)
    {
        console.log(mylist[i]+", i am inviting you to have dinner with you");
    }
     console.log("\n"+mylist[3]+" is not able to join us on Dinner\n");
    //add new guest//
    for(var i=0;i<mylist.length;i++)
    {
        if(mylist[i]=="Yasir")
            {mylist[i]="Danish";}
            console.log(mylist[i]+", i am inviting you to have dinner with you")   
    }
    console.log("\n"+"We got bigger table so can invite more people to the Dinner\n");
    
    //add three new guest//
    mylist.unshift("Abdul Basit");
    mylist.splice(3,0,"John Carry");
    mylist.push("MBS");
    for(var i=0;i<mylist.length;i++)
    {
        console.log(mylist[i]+", i am inviting you to have dinner with you");
    }
    console.log("\n"+" We can invite only two people for dinner\n");

    //shrink guest list
    var count=0;
    for(var i=0;i<mylist.length;i++)
    {
        while(mylist.length>2)
        {
            var removedGuest=mylist.pop();
            console.log(""+removedGuest+" We are sorry we can’t invite you to dinner.");
        }
        console.log("\n");
        for(var i=0;i<mylist.length;i++)
        {
            console.log(mylist[i]+", i am inviting you to have dinner with you");
        }
        //remove list
        while(mylist.length>0)
        {
            mylist.shift();
        }
        console.log("\n"+mylist);
        
    }
