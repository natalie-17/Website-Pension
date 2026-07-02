import PocketBase from "pocketbase";

const pb = new PocketBase("https://api.pensionliebl.mkarl.io");

// Optional: automatische Aktualisierung des Auth-Tokens
pb.autoCancellation(false);

export default pb;

export async function getApartments() {
  return await pb.collection("apartments").getFullList();
}