//this function prints the magicans list
function show_magicians(magicianslist)
{
    magicianslist.forEach(element => {
    console.log(element);
  });
}

//this function append string after eacch magiians names
function make_great(magicianslist)
{
    for(var i=0;i<magicians.length;i++)
    {
        try{
            magicians[length+1]=magicianslist[i]+" The Great";
        }
        catch(err)
        {
            magicians[i]=magicianslist[i]+" The Great";
        }
        
    }
} 
var magicians=["zarkoon","Hamoon","zakoota","Harbour"];
make_great(magicians);
show_magicians(magicians);