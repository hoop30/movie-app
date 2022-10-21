import { collection, addDoc, getDocs, doc, deleteDoc } from "firebase/firestore";
import { db } from "./firebase-config"

export async function WishlistAdd(movie, currentUser) {
  
  const userId = currentUser.uid
  const movieTitle = movie.Title

  // Add Objet to firestore DabataBase(db), with userId reference.
  try {
    await addDoc(collection(db, userId), {
      MovieTitle: movieTitle,
    })
  } catch (e) {
    console.error("Error adding document: ", e)
  }
}

export async function WishlistGet(currentUser) {

  const userId = currentUser.uid
  const wishlist = []

  // Get Array of dataBase Objets contain movieId(for remove) and movieTitle
  const querySnapshot = await getDocs(collection(db, userId))
  querySnapshot.forEach((doc) => {
    const movieRef = {
      movieId: doc._key.path.segments[6],
      movieTitle: doc.data().MovieTitle
    }
  
    wishlist.push(movieRef)
  })

  return wishlist
}

export async function WishlistRemove( movieId, currentUser ) {

  // Remove DataBase Objet with movieId Ref
  const userId = currentUser.uid
  await deleteDoc(doc(db, userId, movieId))
}