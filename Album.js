function make_album(artistName,albumTitle,noOftracks=0)
{
    var temp_list={
        artist:artistName,
        album:albumTitle,
    }
    if(noOftracks>0)
    {
        temp_list.tracks=noOftracks;
    }
    return temp_list;
}

album1=make_album("Ali Zafar","Channo");
console.log(album1);
album2=make_album("Atif Aslam","Jal Pari");
console.log(album2);
album3=make_album("Bohemea","Kali di Nalli");
console.log(album3);
album4=make_album("Abrar","billo",5);
console.log(album4);