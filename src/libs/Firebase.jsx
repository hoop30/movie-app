import { collection, addDoc, getDocs, doc, deleteDoc } from "firebase/firestore";
import { db } from "./firebase-config"

export async function WishlistAdd(movie, currentUser) {
  
  const userId = currentUser.uid
  const movieTitle = movie.Title

  try {
    const docRef = await addDoc(collection(db, userId), {
      MovieTitle: movieTitle,
    });
    //console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export async function WishlistGet(currentUser) {

  const userId = currentUser.uid
  const wishlist = []

  const querySnapshot = await getDocs(collection(db, userId));
  querySnapshot.forEach((doc) => {
    const movieRef = {
      movieId: doc._key.path.segments[6],
      movieTitle: doc.data().MovieTitle
    }
  
    wishlist.push(movieRef)
  });

  return wishlist
}

export async function WishlistRemove( movieId, currentUser ) {

  const userId = currentUser.uid
  await deleteDoc(doc(db, userId, movieId))
}