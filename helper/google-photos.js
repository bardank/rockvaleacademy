import fetch from 'isomorphic-unfetch';

const regex = /\["(https:\/\/photos\.google\.com\/share\/[a-zA-Z0-9\-_]*)"/g
// https://photos.google.com/share/
function extractPhotos(content) {
 const links = new Set()
  let match
  while (match = regex.exec(content)) {
    links.add(match[1])
  } 
  return Array.from(links)
}

async function getAlbum(id) {
  const response = await fetch(`https://photos.app.goo.gl/${id}`)
  console.log(response)
  return extractPhotos(response)
}


module.exports = {
 getAlbum 
}