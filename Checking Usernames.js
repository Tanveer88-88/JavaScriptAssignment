var  current_users=["ALI","Basit","Yasir","Rashid","Bilal"];
var new_users=["Ali","Basit","Amir","Ahsan","Mohsin"];
for(var i=0;i<new_users.length;i++)
{
 for(var j=0;j<current_users.length;j++)
 {
    if((new_users[i].toUpperCase())==(current_users[j].toUpperCase()))
    {
        console.log(new_users[i]+" username is already in use!.");
    }
 }
}