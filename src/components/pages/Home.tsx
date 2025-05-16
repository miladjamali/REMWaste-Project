import {FC} from "react"
import {styled} from "styled-components"
import {SkipSelectionPage, Stepper} from '@/components'
import locationIcon from "@/assets/icons/location.svg";
import trashIcon from "@/assets/icons/trash.svg";
import truckIcon from "@/assets/icons/truck.svg";
import permitIcon from "@/assets/icons/permit.svg";
import calendarIcon from "@/assets/icons/calender.svg";
import paymentIcon from "@/assets/icons/payment.svg";

const Layout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    margin: 0 151px;

    @media (max-width: 768px) {
        margin: 0 24px;
    }
`

const Home: FC = () => {
    const steps = [
        {
            id: 1,
            name: 'Postcode',
            title: "",
            subTitle: "",
            icon: locationIcon,
            body: <div>PostCode</div>
        },
        {
            id: 2,
            name: 'Waste Type',
            title: "Choose a Waste Type",
            subTitle: "",
            icon: trashIcon,
            body: <div>waste type</div>
        },
        {
            id: 3,
            name: 'Select Skip',
            title: "Choose Your Skip Size",
            subTitle: "Select the skip size that best suits your needs",
            icon: truckIcon,
            body: <SkipSelectionPage/>
        },
        {
            id: 4,
            name: 'Permit Check',
            title: "Where will the skip be placed?",
            subTitle: "This helps us determine if you need a permit for your skip",
            icon: permitIcon,
            body: <div>body 4</div>
        },
        {
            id: 5,
            name: 'Select Dates',
            title: "When do you need the skip?",
            subTitle: "Choose your skip delivery and collection dates",
            icon: calendarIcon,
            body: <div>body 5</div>
        },
        {
            id: 6,
            name: 'Payment',
            title: "Almost there!",
            subTitle: "Enter your payment details to complete your order",
            icon: paymentIcon,
            body: <div>body 6</div>
        }
    ]

    return (
        <Layout>
            <Stepper steps={steps}/>
        </Layout>
    )
}

export default Home
