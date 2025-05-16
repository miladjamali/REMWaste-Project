import {FC} from "react";
import {styled} from "styled-components";
import {ISkip} from "@/@types/skips";
import {ReactSVG} from "react-svg";
import rightIcon from "@assets/icons/arrow-right.svg";

const StyledSkipCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    background-color: #1c1c1c;
    max-width: 390px;
    min-width: 280px;
    border: 2px solid #2a2a2a;
    cursor: pointer;
    border-radius: 0.5rem;
    padding: 24px;
    position: relative;
    transition: background-color 0.3s ease;

    &:hover {
        border-color: #0037c180;
    }

    &.active {
        border-color: #0037c1;
    }

    span.badge {
        color: #fff;
        font-weight: 600;
        margin-top: 10px;
        position: absolute;
        top: 1.5rem;
        right: 2rem;
        background-color: #0037c1;
        font-size: .875rem;
        line-height: 1.25rem;
        padding-left: .75rem;
        padding-right: .75rem;
        border-radius: 9999px;
    }


    .image {
        overflow: hidden;
        width: 100%;
        height: 12rem;
        min-width: 100%;
        transition: height 0.3s ease, width 0.3s ease;
        border-radius: 0.5rem;

        img {
            height: 25vw;
            min-height: 100%;
            min-width: 100%;
            max-width: 100%;
            border-radius: 0.5rem;
            object-fit: cover;
            transition: height 0.3s ease, width 0.3s ease;
        }

        @media (max-width: 768px) {
            height: 10rem;

            img {
                height: 30vw;
            }
        }

        @media (max-width: 480px) {
            height: 10rem;

            img {
                height: 40vw;
            }
        }
    }

    .skip-card-header {
        display: flex;
        justify-content: space-between;
        width: 100%;
        padding: 10px;
        background-color: #f0f0f0;
        border-radius: 5px;
    }

    .content {
        display: flex;
        flex-direction: column;
        gap: 10px;

        .price {
            margin-top: 10px;
            font-size: 1.5rem;
            font-weight: 600;
            color: #0037c1;
        }
    }

    .select-button {
        background-color: #2a2a2a;
        color: #fff;
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 1rem;
        font-weight: 600;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: background-color 0.3s ease;

        &:hover {
            background-color: #002a9c;
        }

        &.active {
            background-color: #002a9c;
        }
    }

`

export const SkipCard: FC<{ data: ISkip, selectedSkip: ISkip | null, onSelect: () => void }> = ({
                                                                                                    data,
                                                                                                    selectedSkip,
                                                                                                    onSelect
                                                                                                }) => {
    return (
        <StyledSkipCard onClick={() =>
            onSelect()
        } className={selectedSkip?.id === data.id ? 'active' : ''}>
            <div className='image'>
                <img
                    src="https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/4-yarder-skip.jpg"/>
            </div>
            <span className='badge'>{data.size} yards</span>
            <div className='content'>
                <div>
                    <h3>{data.size} Yard Skip</h3>
                    <p>{data.hire_period_days} day hire period</p>
                </div>
                <span className="price">£264</span>
            </div>

            <button className={`select-button ${selectedSkip?.id === data.id ? 'active' : ''}`}>
                {selectedSkip?.id === data.id ? 'Selected' : (
                    <>
                        <span>Select This Skip</span>
                        <ReactSVG src={rightIcon} style={{width: '1.5rem', height: '1.5rem'}}/>
                    </>
                )}

            </button>


        </StyledSkipCard>
    )
}