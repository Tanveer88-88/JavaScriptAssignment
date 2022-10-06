function make_shirt(size ,message)
{
    var defaultMessage="I love JavaScript";
    if(message==defaultMessage)
    {
        size="large";
        console.log(size+" "+defaultMessage);
    }
    if((size=="large")||(size=="Medium"))
    {
        console.log(size+" "+defaultMessage);
    }
    else
    {
        console.log(size+" "+message);
    }
    //console.log("Shirt Size "+ size+"\n" + message);
}

make_shirt("small","I love JavaScript");