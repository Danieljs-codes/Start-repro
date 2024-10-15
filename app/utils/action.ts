import { createServerFn } from "@tanstack/start";
import {setResponseStatus} from "vinxi/http";

export const getUser = createServerFn('GET', async () => {
    setResponseStatus(400)
    return {
        id: 1,
        name: 'Olamide',
        email: 'olamide@gmail.com'
    }
})