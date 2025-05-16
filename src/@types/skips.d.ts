export interface IStep {
    id: number,
    name: string,
    title: string,
    subTitle: string,
    icon: string,
    body: JSX.Element
}

export interface ISkip {
    allowed_on_road: boolean,
    allows_heavy_waste: boolean,
    area: string,
    created_at: string,
    forbidden: boolean,
    hire_period_days: number,
    id: number,
    per_tonne_cost: string | null,
    postcode: string,
    price_before_vat: number,
    size: number,
    transport_cost: number | null,
    updated_at: string,
    vat: number
}