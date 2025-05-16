import axios from 'axios'
import {ISkip} from "@/@types/skips";

export const getSkips = () => {
    return new Promise<ISkip[]>((resolve, reject) => {
        axios.get<ISkip[]>('https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft')
            .then((response) => {
                resolve(response.data)
            })
            .catch((error) => {
                reject(error)
            })
    })
}