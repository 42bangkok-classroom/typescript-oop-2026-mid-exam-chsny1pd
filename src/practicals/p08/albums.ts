import axios from 'axios'
import { title } from 'process'

interface Album {
    userId:number[],
    id:number,
    title:string
}

interface Photo{
    albumId:number,
    id:number,
    title:string,
    url:string,
    thumbnailUrl:string

}

interface FullAlbum {
    userId:number,
    id:number,
    title:string
    photos:Photo[]
}

export async function mapPhotoToAlbum(userIds?: number[]): Promise<FullAlbum[]> {
    try{
        const PHOTOS_URL = await axios.get<Photo[]>('https://jsonplaceholder.typicode.com/photos');
        const ALBUMS_URL = await axios.get<Album[]>('https://jsonplaceholder.typicode.com/albums');
        const photos = PHOTOS_URL.data
        const albums = ALBUMS_URL.data
        if(!albums.length||!photos.length) return[]
        const filteralbum = albums.filter((f) => f.userId == userIds)
        const mapalbum = filteralbum.map((p) => [{
        userId : p.userId,
        id: p.id,
        title: p.title,
        photos: albums
    }])
    return mapalbum
    }
    catch(err){
        return []
    }
}

const PHOTOS_URL = 'https://jsonplaceholder.typicode.com/photos';
const ALBUMS_URL = 'https://jsonplaceholder.typicode.com/albums';

function mapPhotoToAlbum(userIds?: number[]): Promise<FullAlbum[]>
