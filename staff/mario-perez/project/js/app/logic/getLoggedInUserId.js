import { utils } from "../../com";

function getLoggedInUserId() {

    const { sub: userId } = utils.extractPayload(sessionStorage.userId)

    return userId
}

export default getLoggedInUserId