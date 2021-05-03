import { getSid } from "../sid/sid"

export const checkGetSID = async (dispatch: any) => {
    let sid = await getSid(dispatch);
    console.log("🚀 ~ file: login.tsx ~ line 5 ~ checkGetSID ~ sid", sid);
   
    return sid;
}