var mylist=["Abdul Hussain","Dilawar","Haider","Habib","Yasir"];
    //add new guest//
    for(var i=0;i<mylist.length;i++)
    {
        if(mylist[i]=="Yasir")
            {mylist[i]="Danish";} 
    };
    
    //add three new guest//
    mylist.unshift("Abdul Basit");
    mylist.splice(3,0,"John Carry");
    mylist.push("MBS");
    console.log("Number of Guest invited="+mylist.length);
    