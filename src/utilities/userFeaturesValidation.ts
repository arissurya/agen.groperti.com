import { userCredentials } from "./config";

export const checkValidation = (id_feature : string) => {
    const all_features  : any = userCredentials ? userCredentials.features : []
    if(all_features.find((element : any) => element === id_feature)) {
        return true
    } else {
        return false
    }
}
