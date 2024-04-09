//Methods that modify the original array (Mutability)
//Shift() remove the first one
const colors =['yellow','blue','red'];
const removedColors=colors.shift();

console.log(colors)
console.log(removedColors)
console.log(colors)

// unshift()  add one at the beginning

const newColors=colors.unshift('pink','purple')
console.log(colors)
console.log(newColors)
console.log(colors)

function managePlayList(playlist,newSong){
    playlist.shift();
    playlist.unshift(newSong);
    return playlist;
}

const initialPlayList=['wacha tanguda','pimp'];
const newSong='la colegiala';

console.log(initialPlayList);
const updatedPlaylist= managePlayList(initialPlayList,newSong);
console.log(updatedPlaylist);

