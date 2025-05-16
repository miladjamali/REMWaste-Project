import {useEffect, useState} from "react";
import {styled} from "styled-components";
import {getSkips} from "@/apis";
import {SkipCard} from "@/components";
import {ISkip} from "@/@types/skips";

const SkipSelectionPageContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;

`

export const SkipSelectionPage = () => {

    const [skips, setSkips] = useState<ISkip[]>([]);
    const [selectedSkip, setSelectedSkip] = useState<ISkip | null>(null);

    useEffect(() => {
        getSkips()
            .then((res: ISkip[]) => {
                setSkips(res);
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);

    return (
        <SkipSelectionPageContainer>
            {skips?.map((skip, index) => (
                <SkipCard data={skip} key={index} onSelect={() => setSelectedSkip(skip)} selectedSkip={selectedSkip}/>
            ))}
        </SkipSelectionPageContainer>
    )
}