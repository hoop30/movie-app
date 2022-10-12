import { collection, addDoc } from "firebase/firestore";
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