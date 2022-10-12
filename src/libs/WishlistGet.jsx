import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase-config"

export async function WishlistGet( currentUser ) {

    const userId = currentUser.uid
    const wishlist = []

    const querySnapshot = await getDocs(collection(db, userId));
    querySnapshot.forEach((doc) => {
        
        wishlist.push(doc.data().MovieTitle)
    });

    return wishlist
} 