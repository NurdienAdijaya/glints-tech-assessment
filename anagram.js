/**
 * cocokan jumlah karakter yang ada didalam string
 * - psahkan / bentuk array baru
 * - sort
 * - samakan dengan string kedua
 */

function anagram(str1, str2) {
  var list = [];
  for (i = 0; i < str1.length; i++) {
    list = [...list, str2[i]];
  }
  console.log(list);
}
anagram("bebek", "kbbee");
