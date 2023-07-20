import { redirect } from "react-router-dom";
import { deleteContact } from "../contacts";

export async function action({ params }) {
    throw new Error("And it was in that moment, you realized, you messed up")
    await deleteContact(params.contactId)
    return redirect("/")
}